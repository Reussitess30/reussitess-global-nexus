# 🌍 Reussitess Global Nexus

Global E-commerce Nexus - 26 Amazon boutiques across 14 countries

## 🔐 Security

This project implements **maximum security** measures including:

- ✅ **Upgraded Dependencies**: Next.js 14.2.31 (0 vulnerabilities)
- ✅ **HTTP Security Headers**: HSTS, CSP, X-Frame-Options, and more
- ✅ **HTTPS Enforcement**: Automatic redirects and cloud configurations
- ✅ **Authentication**: Multi-provider OAuth + JWT with refresh tokens
- ✅ **Data Encryption**: AES-256-GCM encryption at rest, TLS in transit
- ✅ **Rate Limiting**: Configurable API rate limiting
- ✅ **CAPTCHA Protection**: reCAPTCHA v3 and Cloudflare Turnstile support
- ✅ **CI/CD Security**: Automated scanning, CodeQL, secret detection
- ✅ **Monitoring**: Security event logging and suspicious activity detection

### 📖 Security Documentation

- [Security Policy](./SECURITY.md)
- [2FA Setup Guide](./docs/2FA-SETUP-GUIDE.md)
- [Secret Manager Guide](./docs/SECRET-MANAGER-GUIDE.md)
- [Security Configuration](./docs/SECURITY-CONFIGURATION.md)
- [Deployment Checklist](./docs/DEPLOYMENT-CHECKLIST.md)

### 🚀 Quick Start

1. **Clone and Install**
   ```bash
   git clone https://github.com/Reussitess30/reussitess-global-nexus.git
   cd reussitess-global-nexus
   npm install
   ```

2. **Configure Environment**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your secrets
   ```

3. **Generate Secrets**
   ```bash
   node -e "console.log('JWT_SECRET=' + require('crypto').randomBytes(32).toString('hex'))"
   node -e "console.log('ENCRYPTION_KEY=' + require('crypto').randomBytes(32).toString('hex'))"
   ```

4. **Build and Run**
   ```bash
   npm run build
   npm start
   ```

### 🛡️ Security Features

#### HTTP Security Headers
All security headers are configured in `next.config.js`:
- Strict-Transport-Security (HSTS)
- Content-Security-Policy (CSP)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy
- Permissions-Policy

#### Authentication & Authorization
Multi-provider OAuth support:
- Google OAuth 2.0
- GitHub OAuth
- Facebook Login
- Microsoft/Azure AD
- Twitter OAuth 2.0

JWT implementation with:
- Access tokens (15 min expiry)
- Refresh tokens (7 days)
- Secure token storage recommendations

#### Data Protection
- **Encryption at Rest**: AES-256-GCM
- **Password Hashing**: bcrypt with 12 salt rounds
- **In Transit**: TLS/SSL enforced

#### Rate Limiting
Configurable rate limiting for APIs:
```javascript
import rateLimit from '@/lib/security/rateLimit';

export default rateLimit({ max: 60, windowMs: 60000 })(handler);
```

#### CAPTCHA Protection
```javascript
import { withCaptcha } from '@/lib/security/captcha';

export default withCaptcha(handler, { 
  type: 'recaptcha', 
  threshold: 0.5 
});
```

### 📋 Pre-Deployment Checklist

Before deploying to production, review:
- [Deployment Checklist](./docs/DEPLOYMENT-CHECKLIST.md)

Essential steps:
- [ ] All secrets generated and stored securely
- [ ] OAuth providers configured
- [ ] HTTPS certificates installed
- [ ] Security headers verified
- [ ] Dependencies audited (npm audit)
- [ ] 2FA enabled on all admin accounts

### 🔍 Security Monitoring

Security events are logged and can be monitored:
- Failed authentication attempts
- Rate limit violations
- Suspicious activities
- API access logs

### 📞 Security Contact

Report security vulnerabilities to: **security@reussitess.com**

See [SECURITY.md](./SECURITY.md) for full security policy.

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Security audit
npm audit
```

## 📦 Tech Stack

- **Framework**: Next.js 14.2.31
- **UI**: React 18.2.0, Tailwind CSS
- **PWA**: next-pwa
- **Security**: bcryptjs, jose, helmet
- **Deployment**: Vercel, Google Cloud Platform

## 📄 License

MIT

## 👥 Team

Reussitess Global

---

**Last Updated:** 2024-11-19
