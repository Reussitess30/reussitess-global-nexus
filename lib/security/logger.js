/**
 * Security Logging and Monitoring Utilities
 * Tracks security events, access logs, and suspicious activities
 */

const LOG_LEVELS = {
  DEBUG: 'debug',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error',
  CRITICAL: 'critical',
};

const SECURITY_EVENTS = {
  LOGIN_SUCCESS: 'login_success',
  LOGIN_FAILURE: 'login_failure',
  LOGOUT: 'logout',
  TOKEN_REFRESH: 'token_refresh',
  TOKEN_EXPIRED: 'token_expired',
  RATE_LIMIT_EXCEEDED: 'rate_limit_exceeded',
  SUSPICIOUS_ACTIVITY: 'suspicious_activity',
  UNAUTHORIZED_ACCESS: 'unauthorized_access',
  DATA_ACCESS: 'data_access',
  DATA_MODIFICATION: 'data_modification',
  PASSWORD_RESET: 'password_reset',
  PASSWORD_CHANGE: 'password_change',
  ACCOUNT_LOCKED: 'account_locked',
  TWO_FA_ENABLED: '2fa_enabled',
  TWO_FA_DISABLED: '2fa_disabled',
  API_ERROR: 'api_error',
};

/**
 * Log security event
 * @param {string} event - Security event type
 * @param {object} data - Event data
 * @param {string} level - Log level
 */
export function logSecurityEvent(event, data = {}, level = LOG_LEVELS.INFO) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    level,
    event,
    ...data,
    environment: process.env.NODE_ENV,
  };

  // In production, send to logging service (e.g., Winston, Datadog, CloudWatch)
  if (process.env.NODE_ENV === 'production') {
    // TODO: Integrate with your logging service
    // Example: winston.log(level, JSON.stringify(logEntry));
    // Example: datadogLogger.log(logEntry);
    console.log(JSON.stringify(logEntry));
  } else {
    // Development logging
    console.log(`[${level.toUpperCase()}] ${event}:`, data);
  }

  // Store critical events for later analysis
  if (level === LOG_LEVELS.CRITICAL || level === LOG_LEVELS.ERROR) {
    storeCriticalEvent(logEntry);
  }

  return logEntry;
}

/**
 * Log access attempt
 * @param {object} req - Request object
 * @param {boolean} success - Whether access was granted
 * @param {string} userId - User ID (if authenticated)
 */
export function logAccess(req, success = true, userId = null) {
  const logData = {
    userId,
    ip: req.headers['x-forwarded-for']?.split(',')[0] || 
        req.headers['x-real-ip'] || 
        req.connection?.remoteAddress,
    userAgent: req.headers['user-agent'],
    method: req.method,
    url: req.url,
    success,
    referer: req.headers['referer'],
  };

  const event = success ? SECURITY_EVENTS.DATA_ACCESS : SECURITY_EVENTS.UNAUTHORIZED_ACCESS;
  const level = success ? LOG_LEVELS.INFO : LOG_LEVELS.WARN;

  return logSecurityEvent(event, logData, level);
}

/**
 * Log authentication event
 * @param {string} event - Auth event type
 * @param {object} req - Request object
 * @param {string} userId - User ID
 * @param {boolean} success - Whether auth succeeded
 */
export function logAuth(event, req, userId = null, success = true) {
  const logData = {
    userId,
    ip: req.headers['x-forwarded-for']?.split(',')[0] || 
        req.headers['x-real-ip'] || 
        req.connection?.remoteAddress,
    userAgent: req.headers['user-agent'],
    success,
  };

  const level = success ? LOG_LEVELS.INFO : LOG_LEVELS.WARN;
  return logSecurityEvent(event, logData, level);
}

/**
 * Log suspicious activity
 * @param {string} description - Description of suspicious activity
 * @param {object} req - Request object
 * @param {object} additionalData - Additional context
 */
export function logSuspiciousActivity(description, req, additionalData = {}) {
  const logData = {
    description,
    ip: req.headers['x-forwarded-for']?.split(',')[0] || 
        req.headers['x-real-ip'] || 
        req.connection?.remoteAddress,
    userAgent: req.headers['user-agent'],
    url: req.url,
    method: req.method,
    ...additionalData,
  };

  // Alert on suspicious activity
  alertSecurity('Suspicious Activity Detected', logData);

  return logSecurityEvent(
    SECURITY_EVENTS.SUSPICIOUS_ACTIVITY,
    logData,
    LOG_LEVELS.CRITICAL
  );
}

/**
 * Log rate limit exceeded
 * @param {object} req - Request object
 * @param {object} limitInfo - Rate limit information
 */
export function logRateLimitExceeded(req, limitInfo = {}) {
  const logData = {
    ip: req.headers['x-forwarded-for']?.split(',')[0] || 
        req.headers['x-real-ip'] || 
        req.connection?.remoteAddress,
    userAgent: req.headers['user-agent'],
    url: req.url,
    method: req.method,
    ...limitInfo,
  };

  return logSecurityEvent(
    SECURITY_EVENTS.RATE_LIMIT_EXCEEDED,
    logData,
    LOG_LEVELS.WARN
  );
}

/**
 * Store critical events for analysis
 * @param {object} logEntry - Log entry to store
 */
function storeCriticalEvent(logEntry) {
  // TODO: Store in database or external service for analysis
  // Example: database.criticalLogs.insert(logEntry);
  // Example: sendToSIEM(logEntry);
  
  // For now, just ensure it's logged
  if (process.env.NODE_ENV === 'production') {
    // Could write to a separate critical events file
    console.error('CRITICAL EVENT:', JSON.stringify(logEntry));
  }
}

/**
 * Send security alert
 * @param {string} title - Alert title
 * @param {object} data - Alert data
 */
function alertSecurity(title, data) {
  // TODO: Integrate with alerting service (PagerDuty, Slack, Email, etc.)
  // Example: pagerDuty.alert(title, data);
  // Example: slack.sendMessage(securityChannel, title, data);
  
  if (process.env.NODE_ENV === 'production') {
    console.error(`SECURITY ALERT: ${title}`, JSON.stringify(data));
    // Send email, SMS, or push notification
  }
}

/**
 * Middleware to log all API requests
 */
export function apiLogger(handler) {
  return async (req, res) => {
    const startTime = Date.now();
    
    // Log request
    logSecurityEvent('api_request', {
      method: req.method,
      url: req.url,
      ip: req.headers['x-forwarded-for']?.split(',')[0] || 
          req.headers['x-real-ip'] || 
          req.connection?.remoteAddress,
      userAgent: req.headers['user-agent'],
    }, LOG_LEVELS.DEBUG);

    // Execute handler
    const result = await handler(req, res);

    // Log response
    const duration = Date.now() - startTime;
    logSecurityEvent('api_response', {
      method: req.method,
      url: req.url,
      statusCode: res.statusCode,
      duration,
    }, LOG_LEVELS.DEBUG);

    return result;
  };
}

/**
 * Get security metrics for monitoring dashboard
 */
export function getSecurityMetrics() {
  // TODO: Implement metrics collection
  // Return aggregated security events, failed logins, rate limits, etc.
  return {
    failedLogins: 0,
    rateLimitExceeded: 0,
    suspiciousActivities: 0,
    activeUsers: 0,
  };
}

export default {
  LOG_LEVELS,
  SECURITY_EVENTS,
  logSecurityEvent,
  logAccess,
  logAuth,
  logSuspiciousActivity,
  logRateLimitExceeded,
  apiLogger,
  getSecurityMetrics,
};
