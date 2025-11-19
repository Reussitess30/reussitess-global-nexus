# Two-Factor Authentication (2FA) Setup Guide

Two-Factor Authentication (2FA) is **mandatory** for all team members on critical platforms. This guide provides step-by-step instructions for setting up 2FA on GitHub, Google Cloud Platform, and Google Play Console.

## Table of Contents

- [GitHub 2FA Setup](#github-2fa-setup)
- [Google Cloud Platform 2FA](#google-cloud-platform-2fa)
- [Google Play Console 2FA](#google-play-console-2fa)
- [2FA Best Practices](#2fa-best-practices)
- [Recovery Codes](#recovery-codes)
- [Troubleshooting](#troubleshooting)

---

## GitHub 2FA Setup

### Prerequisites
- Active GitHub account
- Authenticator app (Google Authenticator, Authy, 1Password, etc.)
- Or: Security key (YubiKey, Titan Key, etc.) - recommended for high security

### Steps

1. **Access Security Settings**
   - Go to [GitHub Settings](https://github.com/settings/security)
   - Click on "Password and authentication"

2. **Enable Two-Factor Authentication**
   - Click "Enable two-factor authentication"
   - Choose your method:
     - **Authenticator App** (Recommended)
     - **SMS** (Less secure, not recommended)
     - **Security Key** (Most secure)

3. **Setup with Authenticator App**
   - Scan the QR code with your authenticator app
   - Or manually enter the setup key
   - Enter the 6-digit code from your app to verify

4. **Save Recovery Codes**
   - Download and save your recovery codes securely
   - Store them in a password manager or secure location
   - Each code can only be used once

5. **Verify Setup**
   - Sign out and sign back in
   - You should be prompted for your 2FA code

---

## Google Cloud Platform 2FA

### Steps

1. **Access Google Account Security**
   - Go to [myaccount.google.com/security](https://myaccount.google.com/security)
   - Sign in to your Google account

2. **Enable 2-Step Verification**
   - Find "2-Step Verification" section
   - Click "Get started"

3. **Add Your Phone**
   - Enter your phone number
   - Choose how to receive codes (SMS or call)
   - Enter the verification code

4. **Add Authenticator App** (Recommended)
   - Go to 2-Step Verification settings
   - Click "Authenticator app"
   - Scan the QR code with Google Authenticator
   - Enter the 6-digit code to verify

5. **Add Security Key** (Most Secure)
   - In 2-Step Verification settings
   - Click "Security Key"
   - Insert your security key
   - Follow the on-screen instructions

6. **Save Backup Codes**
   - Click "Backup codes"
   - Download and save 10 backup codes securely

---

## Google Play Console 2FA

Google Play Console uses your Google Account authentication. Follow the Google Cloud Platform 2FA steps above.

---

## 2FA Best Practices

### DO's ✅

1. Use multiple 2FA methods (authenticator + security key)
2. Store recovery codes in password manager
3. Use security keys for critical accounts
4. Regular security audits

### DON'Ts ❌

1. Don't rely only on SMS
2. Don't share recovery codes
3. Don't ignore unexpected 2FA prompts
4. Don't use same device for everything

---

## Recovery Codes

### When to Use
- Lost authenticator device
- Lost security key
- No access to phone
- Emergency access needed

### Best Practices
1. Generate immediately after setup
2. Store in password manager (encrypted)
3. Print and store in safe
4. Regenerate every 6-12 months

---

## Troubleshooting

### Lost Authenticator App
1. Use recovery code to sign in
2. Remove old authenticator
3. Set up new authenticator
4. Generate new recovery codes

### Lost Phone
1. Use recovery codes
2. Remove old phone from 2FA settings
3. Add new phone number
4. Reconfigure authenticator

---

## Compliance Checklist

- [ ] GitHub 2FA enabled
- [ ] Google 2FA enabled
- [ ] Recovery codes saved securely
- [ ] Security key registered (recommended)
- [ ] Backup methods configured

---

**Last Updated:** 2024-11-19
