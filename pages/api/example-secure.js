/**
 * Example API Route with Security Features
 * 
 * This example demonstrates how to use:
 * - Rate limiting
 * - JWT authentication
 * - CAPTCHA verification
 * - Security logging
 */

import rateLimit from '@/lib/security/rateLimit';
import { authenticateToken } from '@/lib/security/jwt';
import { withCaptcha } from '@/lib/security/captcha';
import { logSecurityEvent, logAccess } from '@/lib/security/logger';

// Example 1: Public API with rate limiting
export default rateLimit({ max: 10, windowMs: 60000 })(async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  logAccess(req, true);

  res.status(200).json({
    message: 'Hello from secured API!',
    timestamp: new Date().toISOString(),
  });
});

// Example 2: Protected API with JWT authentication
// Uncomment to use:
/*
export default authenticateToken(async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // req.user is available here from JWT token
  logAccess(req, true, req.user.userId);

  res.status(200).json({
    message: 'Protected data',
    user: req.user,
  });
});
*/

// Example 3: API with CAPTCHA protection
// Uncomment to use:
/*
export default withCaptcha(async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CAPTCHA is verified at this point
  // Process form submission
  const { email, message } = req.body;

  logSecurityEvent('form_submission', { 
    email, 
    captchaScore: req.captcha.score 
  });

  res.status(200).json({ 
    success: true,
    message: 'Form submitted successfully'
  });
}, {
  type: 'recaptcha',
  threshold: 0.5,
});
*/

// Example 4: Combining multiple security layers
// Uncomment to use:
/*
import { strictRateLimit } from '@/lib/security/rateLimit';

const securedHandler = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  logAccess(req, true, req.user?.userId);

  res.status(200).json({
    success: true,
    user: req.user,
  });
};

// Apply multiple middleware layers
export default strictRateLimit(
  authenticateToken(
    withCaptcha(securedHandler, { 
      type: 'recaptcha',
      threshold: 0.7 
    })
  )
);
*/
