# Pre-Deployment Security Checklist

Use this checklist before deploying to production to ensure maximum security.

## 🔐 Secrets & Environment Variables

- [ ] All secrets generated using cryptographically secure random values
- [ ] `.env.example` reviewed and updated
- [ ] Production `.env` file created (never committed to git)
- [ ] JWT_SECRET set (64+ character random hex)
- [ ] JWT_REFRESH_SECRET set (64+ character random hex)
- [ ] ENCRYPTION_KEY set (64+ character random hex)
- [ ] SESSION_SECRET set (if using sessions)
- [ ] All OAuth client secrets configured
- [ ] Database credentials encrypted
- [ ] API keys stored in environment variables
- [ ] No secrets hardcoded in source code
- [ ] `.gitignore` includes all sensitive files

## 🔒 Authentication & Authorization

- [ ] OAuth providers configured correctly
- [ ] Redirect URIs whitelist configured
- [ ] Minimal OAuth scopes requested
- [ ] JWT token expiration configured (15 min for access tokens)
- [ ] Refresh token expiration configured (7 days recommended)
- [ ] Token rotation implemented
- [ ] Password hashing uses bcrypt (12+ salt rounds)
- [ ] 2FA enabled on admin accounts
- [ ] Strong password policy enforced
- [ ] Account lockout after failed attempts

## 🌐 HTTPS & Network Security

- [ ] SSL/TLS certificates installed
- [ ] HTTPS enforced (HTTP redirects to HTTPS)
- [ ] HSTS header configured (2 year max-age)
- [ ] TLS 1.2+ only (TLS 1.0/1.1 disabled)
- [ ] Strong cipher suites configured
- [ ] Certificate expiration monitoring setup
- [ ] CAA DNS records configured
- [ ] Subdomain security considered

## 🛡️ Security Headers

- [ ] Strict-Transport-Security configured
- [ ] Content-Security-Policy strict and tested
- [ ] X-Frame-Options set to DENY
- [ ] X-Content-Type-Options set to nosniff
- [ ] X-XSS-Protection enabled
- [ ] Referrer-Policy configured
- [ ] Permissions-Policy configured
- [ ] Headers tested with securityheaders.com

## 🚦 Rate Limiting & DDoS Protection

- [ ] API rate limiting implemented
- [ ] Rate limits appropriate for use case
- [ ] Rate limit headers included in responses
- [ ] IP-based rate limiting configured
- [ ] CAPTCHA on sensitive forms
- [ ] DDoS protection service configured (Cloudflare, etc.)
- [ ] Connection limits set
- [ ] Request size limits enforced

## 🔍 Monitoring & Logging

- [ ] Security event logging implemented
- [ ] Access logs enabled
- [ ] Failed login attempts logged
- [ ] Suspicious activity detection configured
- [ ] Log rotation configured
- [ ] Logs stored securely
- [ ] Sensitive data not logged (passwords, tokens, etc.)
- [ ] Real-time alerting configured
- [ ] Error tracking setup (Sentry, etc.)
- [ ] Uptime monitoring configured

## 🗄️ Database Security

- [ ] Database uses encrypted connections (SSL/TLS)
- [ ] Database credentials rotated regularly
- [ ] Least privilege database user
- [ ] SQL injection prevention (parameterized queries)
- [ ] Database backups automated
- [ ] Backup encryption enabled
- [ ] Database access restricted by IP
- [ ] Database audit logs enabled

## 📦 Dependencies & Code

- [ ] All dependencies updated to latest stable versions
- [ ] `npm audit` shows 0 vulnerabilities
- [ ] No critical or high vulnerabilities
- [ ] License compliance checked
- [ ] Third-party code reviewed
- [ ] Code linted (npm run lint passes)
- [ ] Security-focused code review completed
- [ ] No console.log in production code
- [ ] Source maps disabled in production
- [ ] Bundle size optimized

## 🔐 Cloud Platform Security (Google Cloud)

- [ ] Service accounts use least privilege
- [ ] IAM roles reviewed and minimal
- [ ] API keys restricted by IP/domain
- [ ] VPC firewall rules configured
- [ ] Cloud Armor configured (if applicable)
- [ ] Secret Manager configured
- [ ] Audit logs enabled
- [ ] Budget alerts configured
- [ ] Organization policies enforced
- [ ] 2FA enabled on all GCP accounts

## 🏗️ CI/CD Security

- [ ] GitHub Actions workflows secured
- [ ] Secrets stored in GitHub Secrets
- [ ] No secrets in workflow files
- [ ] Branch protection rules enabled
- [ ] Required reviews for PRs
- [ ] Status checks required
- [ ] CodeQL analysis running
- [ ] Dependency scanning enabled
- [ ] Container scanning configured
- [ ] Deploy from specific branch only

## 📱 Application Security

- [ ] Directory listing disabled
- [ ] Sensitive files blocked (.env, .git, etc.)
- [ ] robots.txt configured
- [ ] security.txt created
- [ ] Error messages don't expose sensitive info
- [ ] CORS configured properly
- [ ] File upload validation
- [ ] Maximum file size limits
- [ ] Allowed file types whitelist
- [ ] XSS prevention measures
- [ ] CSRF protection enabled

## 👥 Team & Access Management

- [ ] 2FA mandatory for all team members
- [ ] GitHub 2FA enabled
- [ ] Google/GCP 2FA enabled
- [ ] Recovery codes saved securely
- [ ] Team access levels reviewed
- [ ] Inactive accounts removed
- [ ] SSH keys rotated
- [ ] Service account keys rotated
- [ ] Access logs reviewed regularly

## 📋 Documentation

- [ ] SECURITY.md created and updated
- [ ] Security incident response plan documented
- [ ] Contact information current
- [ ] 2FA setup guide provided
- [ ] Secret management guide created
- [ ] Deployment procedures documented
- [ ] Rollback procedures documented
- [ ] Recovery procedures documented

## 🧪 Testing

- [ ] Security headers tested
- [ ] HTTPS redirect tested
- [ ] Rate limiting tested
- [ ] CAPTCHA tested
- [ ] Authentication flow tested
- [ ] Authorization tested
- [ ] Input validation tested
- [ ] Error handling tested
- [ ] Load testing completed
- [ ] Penetration testing completed (recommended)

## 🔄 Backup & Recovery

- [ ] Automated backups configured
- [ ] Backup encryption enabled
- [ ] Backup restoration tested
- [ ] Recovery Time Objective (RTO) defined
- [ ] Recovery Point Objective (RPO) defined
- [ ] Disaster recovery plan documented
- [ ] Backup monitoring alerts configured

## 📊 Compliance & Legal

- [ ] Privacy policy published
- [ ] Terms of service published
- [ ] Cookie policy (if applicable)
- [ ] GDPR compliance reviewed
- [ ] Data retention policy defined
- [ ] Data deletion procedures implemented
- [ ] User consent mechanisms implemented
- [ ] Data export functionality implemented

## 🚀 Final Pre-Launch

- [ ] All environment variables verified
- [ ] Production build tested
- [ ] Performance tested
- [ ] Security scan completed
- [ ] All team members notified
- [ ] Rollback plan ready
- [ ] Monitoring dashboards ready
- [ ] On-call schedule defined
- [ ] Communication plan ready
- [ ] Launch announcement prepared

## Post-Deployment

- [ ] Verify all services running
- [ ] Check security headers (curl -I)
- [ ] Test critical user flows
- [ ] Monitor error rates
- [ ] Monitor performance metrics
- [ ] Review initial logs
- [ ] Confirm alerting working
- [ ] Update status page

## 📅 Regular Security Maintenance

### Daily
- [ ] Review security alerts
- [ ] Check error logs
- [ ] Monitor failed logins

### Weekly
- [ ] Review access logs
- [ ] Update dependencies
- [ ] Check for security advisories

### Monthly
- [ ] Rotate API keys
- [ ] Review user access
- [ ] Security metrics review
- [ ] Update documentation

### Quarterly
- [ ] Rotate all secrets
- [ ] Full security audit
- [ ] Penetration testing
- [ ] Disaster recovery drill
- [ ] Team security training

---

## Sign-off

**Security Review Completed By:** ________________  
**Date:** ________________  
**Approved By:** ________________  
**Date:** ________________  

---

**Version:** 1.0.0  
**Last Updated:** 2024-11-19
