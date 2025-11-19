/**
 * Rate Limiting Middleware for API Routes
 * Implements token bucket algorithm to prevent abuse
 */

const rateLimit = (options = {}) => {
  const {
    windowMs = 60 * 1000, // 1 minute
    max = 60, // 60 requests per window
    message = 'Too many requests, please try again later.',
    statusCode = 429,
    skip = () => false,
  } = options;

  const requests = new Map();

  return (handler) => async (req, res) => {
    // Skip rate limiting for certain conditions
    if (skip(req)) {
      return handler(req, res);
    }

    // Get client identifier (IP address)
    const identifier = 
      req.headers['x-forwarded-for']?.split(',')[0] ||
      req.headers['x-real-ip'] ||
      req.connection?.remoteAddress ||
      'unknown';

    const now = Date.now();
    const windowStart = now - windowMs;

    // Get or create request record
    if (!requests.has(identifier)) {
      requests.set(identifier, []);
    }

    const userRequests = requests.get(identifier);

    // Remove old requests outside the window
    const validRequests = userRequests.filter(time => time > windowStart);
    requests.set(identifier, validRequests);

    // Check if limit exceeded
    if (validRequests.length >= max) {
      res.setHeader('Retry-After', Math.ceil(windowMs / 1000));
      res.setHeader('X-RateLimit-Limit', max);
      res.setHeader('X-RateLimit-Remaining', 0);
      res.setHeader('X-RateLimit-Reset', new Date(now + windowMs).toISOString());
      
      return res.status(statusCode).json({
        error: message,
        retryAfter: Math.ceil(windowMs / 1000),
      });
    }

    // Add current request
    validRequests.push(now);
    
    // Set rate limit headers
    res.setHeader('X-RateLimit-Limit', max);
    res.setHeader('X-RateLimit-Remaining', max - validRequests.length);
    res.setHeader('X-RateLimit-Reset', new Date(now + windowMs).toISOString());

    return handler(req, res);
  };
};

// Cleanup old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, times] of requests.entries()) {
    if (times.length === 0 || Math.max(...times) < now - 3600000) { // 1 hour
      requests.delete(key);
    }
  }
}, 300000); // Clean every 5 minutes

export default rateLimit;

// Pre-configured rate limiters
export const strictRateLimit = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // 10 requests per minute
});

export const moderateRateLimit = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 60, // 60 requests per minute
});

export const relaxedRateLimit = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // 100 requests per minute
});
