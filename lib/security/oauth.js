/**
 * OAuth Multi-Provider Configuration
 * Supports Google, GitHub, Facebook, and other providers
 * 
 * SECURITY BEST PRACTICES:
 * - Use minimal scopes required
 * - Rotate secrets regularly (every 90 days recommended)
 * - Store secrets in environment variables or secret managers
 * - Validate redirect URIs strictly
 * - Implement PKCE for additional security
 */

export const oauthConfig = {
  // Google OAuth Configuration
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectUri: process.env.GOOGLE_REDIRECT_URI || `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback/google`,
    scopes: [
      'openid',
      'email',
      'profile',
      // Add only necessary scopes - avoid requesting unnecessary permissions
    ],
    authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
    tokenUrl: 'https://oauth2.googleapis.com/token',
    userInfoUrl: 'https://www.googleapis.com/oauth2/v2/userinfo',
    revocationUrl: 'https://oauth2.googleapis.com/revoke',
  },

  // GitHub OAuth Configuration
  github: {
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    redirectUri: process.env.GITHUB_REDIRECT_URI || `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback/github`,
    scopes: [
      'read:user',
      'user:email',
      // Minimize scopes - only request what's needed
    ],
    authorizationUrl: 'https://github.com/login/oauth/authorize',
    tokenUrl: 'https://github.com/login/oauth/access_token',
    userInfoUrl: 'https://api.github.com/user',
  },

  // Facebook OAuth Configuration
  facebook: {
    clientId: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    redirectUri: process.env.FACEBOOK_REDIRECT_URI || `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback/facebook`,
    scopes: [
      'email',
      'public_profile',
    ],
    authorizationUrl: 'https://www.facebook.com/v18.0/dialog/oauth',
    tokenUrl: 'https://graph.facebook.com/v18.0/oauth/access_token',
    userInfoUrl: 'https://graph.facebook.com/me?fields=id,name,email,picture',
  },

  // Microsoft/Azure AD OAuth Configuration
  microsoft: {
    clientId: process.env.MICROSOFT_CLIENT_ID,
    clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
    redirectUri: process.env.MICROSOFT_REDIRECT_URI || `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback/microsoft`,
    tenantId: process.env.MICROSOFT_TENANT_ID || 'common',
    scopes: [
      'openid',
      'profile',
      'email',
      'User.Read',
    ],
    authorizationUrl: `https://login.microsoftonline.com/${process.env.MICROSOFT_TENANT_ID || 'common'}/oauth2/v2.0/authorize`,
    tokenUrl: `https://login.microsoftonline.com/${process.env.MICROSOFT_TENANT_ID || 'common'}/oauth2/v2.0/token`,
    userInfoUrl: 'https://graph.microsoft.com/v1.0/me',
  },

  // Twitter OAuth 2.0 Configuration
  twitter: {
    clientId: process.env.TWITTER_CLIENT_ID,
    clientSecret: process.env.TWITTER_CLIENT_SECRET,
    redirectUri: process.env.TWITTER_REDIRECT_URI || `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback/twitter`,
    scopes: [
      'tweet.read',
      'users.read',
    ],
    authorizationUrl: 'https://twitter.com/i/oauth2/authorize',
    tokenUrl: 'https://api.twitter.com/2/oauth2/token',
    userInfoUrl: 'https://api.twitter.com/2/users/me',
  },
};

/**
 * Generate OAuth authorization URL with security parameters
 * @param {string} provider - OAuth provider name
 * @param {string} state - CSRF protection state
 * @param {string} codeVerifier - PKCE code verifier (optional)
 */
export function getAuthorizationUrl(provider, state, codeVerifier = null) {
  const config = oauthConfig[provider];
  if (!config) {
    throw new Error(`Unknown OAuth provider: ${provider}`);
  }

  const params = new URLSearchParams({
    client_id: config.clientId,
    redirect_uri: config.redirectUri,
    response_type: 'code',
    scope: config.scopes.join(' '),
    state, // CSRF protection
  });

  // Add PKCE (Proof Key for Code Exchange) for enhanced security
  if (codeVerifier) {
    const codeChallenge = generateCodeChallenge(codeVerifier);
    params.append('code_challenge', codeChallenge);
    params.append('code_challenge_method', 'S256');
  }

  // Provider-specific parameters
  if (provider === 'google') {
    params.append('access_type', 'offline'); // Get refresh token
    params.append('prompt', 'consent');
  }

  return `${config.authorizationUrl}?${params.toString()}`;
}

/**
 * Generate PKCE code verifier
 */
export function generateCodeVerifier() {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return base64UrlEncode(array);
}

/**
 * Generate PKCE code challenge from verifier
 */
export function generateCodeChallenge(verifier) {
  const encoder = new TextEncoder();
  const data = encoder.encode(verifier);
  const hash = crypto.subtle.digestSync('SHA-256', data);
  return base64UrlEncode(new Uint8Array(hash));
}

/**
 * Base64 URL encode
 */
function base64UrlEncode(buffer) {
  const base64 = btoa(String.fromCharCode(...buffer));
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

/**
 * Exchange authorization code for tokens
 * @param {string} provider - OAuth provider
 * @param {string} code - Authorization code
 * @param {string} codeVerifier - PKCE code verifier (if used)
 */
export async function exchangeCodeForTokens(provider, code, codeVerifier = null) {
  const config = oauthConfig[provider];
  if (!config) {
    throw new Error(`Unknown OAuth provider: ${provider}`);
  }

  const body = new URLSearchParams({
    client_id: config.clientId,
    client_secret: config.clientSecret,
    code,
    redirect_uri: config.redirectUri,
    grant_type: 'authorization_code',
  });

  if (codeVerifier) {
    body.append('code_verifier', codeVerifier);
  }

  const response = await fetch(config.tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
    },
    body: body.toString(),
  });

  if (!response.ok) {
    throw new Error(`Token exchange failed: ${response.statusText}`);
  }

  return await response.json();
}

/**
 * Revoke OAuth token (for logout)
 * @param {string} provider - OAuth provider
 * @param {string} token - Access token to revoke
 */
export async function revokeToken(provider, token) {
  const config = oauthConfig[provider];
  if (!config.revocationUrl) {
    return; // Not all providers support revocation
  }

  const body = new URLSearchParams({
    token,
    client_id: config.clientId,
    client_secret: config.clientSecret,
  });

  await fetch(config.revocationUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body.toString(),
  });
}

export default {
  oauthConfig,
  getAuthorizationUrl,
  generateCodeVerifier,
  generateCodeChallenge,
  exchangeCodeForTokens,
  revokeToken,
};
