/**
 * CAPTCHA Integration Utilities
 * Supports Google reCAPTCHA v3 and Cloudflare Turnstile
 */

// ============================================
// Google reCAPTCHA v3 Integration
// ============================================

/**
 * Verify reCAPTCHA token on server-side
 * @param {string} token - reCAPTCHA token from client
 * @param {string} action - Action name (e.g., 'login', 'submit')
 * @param {number} threshold - Minimum score required (0.0 - 1.0, default: 0.5)
 */
export async function verifyRecaptcha(token, action = 'submit', threshold = 0.5) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    throw new Error('RECAPTCHA_SECRET_KEY not configured');
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    });

    const data = await response.json();

    if (!data.success) {
      return {
        success: false,
        error: 'reCAPTCHA verification failed',
        'error-codes': data['error-codes'],
      };
    }

    // Check score and action
    if (data.score < threshold) {
      return {
        success: false,
        error: 'Low reCAPTCHA score',
        score: data.score,
      };
    }

    if (data.action !== action) {
      return {
        success: false,
        error: 'Action mismatch',
        expected: action,
        received: data.action,
      };
    }

    return {
      success: true,
      score: data.score,
      action: data.action,
      hostname: data.hostname,
      challenge_ts: data.challenge_ts,
    };
  } catch (error) {
    return {
      success: false,
      error: 'reCAPTCHA verification error',
      message: error.message,
    };
  }
}

// ============================================
// Cloudflare Turnstile Integration
// ============================================

/**
 * Verify Turnstile token on server-side
 * @param {string} token - Turnstile token from client
 * @param {string} remoteip - User's IP address (optional)
 */
export async function verifyTurnstile(token, remoteip = null) {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    throw new Error('TURNSTILE_SECRET_KEY not configured');
  }

  try {
    const formData = new URLSearchParams({
      secret: secretKey,
      response: token,
    });

    if (remoteip) {
      formData.append('remoteip', remoteip);
    }

    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });

    const data = await response.json();

    if (!data.success) {
      return {
        success: false,
        error: 'Turnstile verification failed',
        'error-codes': data['error-codes'],
      };
    }

    return {
      success: true,
      challenge_ts: data.challenge_ts,
      hostname: data.hostname,
    };
  } catch (error) {
    return {
      success: false,
      error: 'Turnstile verification error',
      message: error.message,
    };
  }
}

// ============================================
// Middleware Integration
// ============================================

/**
 * Middleware to protect API routes with CAPTCHA
 * @param {Function} handler - API route handler
 * @param {Object} options - Configuration options
 */
export function withCaptcha(handler, options = {}) {
  const {
    type = 'recaptcha', // 'recaptcha' or 'turnstile'
    action = 'submit',
    threshold = 0.5,
    skipForTrustedIPs = false,
  } = options;

  return async (req, res) => {
    // Get CAPTCHA token from request
    const token = req.body.captchaToken || req.headers['x-captcha-token'];

    if (!token) {
      return res.status(400).json({
        error: 'CAPTCHA token required',
      });
    }

    // Optionally skip CAPTCHA for trusted IPs
    if (skipForTrustedIPs) {
      const trustedIPs = process.env.TRUSTED_IPS?.split(',') || [];
      const clientIP = req.headers['x-forwarded-for']?.split(',')[0] || 
                       req.headers['x-real-ip'] || 
                       req.connection?.remoteAddress;

      if (trustedIPs.includes(clientIP)) {
        return handler(req, res);
      }
    }

    // Verify CAPTCHA
    let result;
    if (type === 'turnstile') {
      const clientIP = req.headers['x-forwarded-for']?.split(',')[0] || 
                       req.headers['x-real-ip'];
      result = await verifyTurnstile(token, clientIP);
    } else {
      result = await verifyRecaptcha(token, action, threshold);
    }

    if (!result.success) {
      return res.status(403).json({
        error: 'CAPTCHA verification failed',
        details: result.error,
      });
    }

    // Attach CAPTCHA result to request
    req.captcha = result;

    return handler(req, res);
  };
}

// ============================================
// Client-Side Integration Examples
// ============================================

/**
 * Example: reCAPTCHA v3 client integration
 * 
 * 1. Add to <head> in _document.js:
 *    <script src="https://www.google.com/recaptcha/api.js?render=YOUR_SITE_KEY"></script>
 * 
 * 2. Execute on form submit:
 *    
 *    const handleSubmit = async (e) => {
 *      e.preventDefault();
 *      
 *      const token = await window.grecaptcha.execute('YOUR_SITE_KEY', {
 *        action: 'submit'
 *      });
 *      
 *      const response = await fetch('/api/protected', {
 *        method: 'POST',
 *        headers: { 'Content-Type': 'application/json' },
 *        body: JSON.stringify({ 
 *          captchaToken: token,
 *          ...formData 
 *        }),
 *      });
 *    };
 */

/**
 * Example: Cloudflare Turnstile client integration
 * 
 * 1. Add to <head> in _document.js:
 *    <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
 * 
 * 2. Add to your form:
 *    <div 
 *      className="cf-turnstile" 
 *      data-sitekey="YOUR_SITE_KEY"
 *      data-callback="onTurnstileSuccess"
 *    ></div>
 * 
 * 3. Handle token:
 *    window.onTurnstileSuccess = (token) => {
 *      // Include token in API request
 *    };
 */

// ============================================
// Usage Examples
// ============================================

/**
 * Example: Protected API route with reCAPTCHA
 * 
 * // pages/api/login.js
 * import { withCaptcha } from '@/lib/security/captcha';
 * 
 * async function handler(req, res) {
 *   // Your login logic here
 *   // CAPTCHA is already verified at this point
 *   res.json({ success: true, score: req.captcha.score });
 * }
 * 
 * export default withCaptcha(handler, {
 *   type: 'recaptcha',
 *   action: 'login',
 *   threshold: 0.7,
 * });
 */

/**
 * Example: Protected API route with Turnstile
 * 
 * // pages/api/contact.js
 * import { withCaptcha } from '@/lib/security/captcha';
 * 
 * async function handler(req, res) {
 *   // Your contact form logic here
 *   res.json({ success: true });
 * }
 * 
 * export default withCaptcha(handler, {
 *   type: 'turnstile',
 * });
 */

export default {
  verifyRecaptcha,
  verifyTurnstile,
  withCaptcha,
};
