/**
 * JWT Security Utilities
 * Implements secure JWT token generation and validation
 * Uses jose library for modern JWT handling
 */

import * as jose from 'jose';

// Load secrets from environment
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'your-refresh-secret-key-change-in-production';
const JWT_ISSUER = process.env.JWT_ISSUER || 'reussitess-global-nexus';
const JWT_AUDIENCE = process.env.JWT_AUDIENCE || 'reussitess-users';

// Convert secret to Uint8Array
const secret = new TextEncoder().encode(JWT_SECRET);
const refreshSecret = new TextEncoder().encode(JWT_REFRESH_SECRET);

/**
 * Generate Access Token (short-lived)
 * @param {object} payload - User data to encode
 * @param {string} expiresIn - Token expiration (default: 15m)
 */
export async function generateAccessToken(payload, expiresIn = '15m') {
  try {
    const jwt = await new jose.SignJWT({ ...payload })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setIssuer(JWT_ISSUER)
      .setAudience(JWT_AUDIENCE)
      .setExpirationTime(expiresIn)
      .setJti(crypto.randomUUID()) // Unique token ID for revocation tracking
      .sign(secret);

    return jwt;
  } catch (error) {
    throw new Error('Failed to generate access token');
  }
}

/**
 * Generate Refresh Token (long-lived)
 * @param {object} payload - User data to encode
 * @param {string} expiresIn - Token expiration (default: 7d)
 */
export async function generateRefreshToken(payload, expiresIn = '7d') {
  try {
    const jwt = await new jose.SignJWT({ ...payload })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setIssuer(JWT_ISSUER)
      .setAudience(JWT_AUDIENCE)
      .setExpirationTime(expiresIn)
      .setJti(crypto.randomUUID())
      .sign(refreshSecret);

    return jwt;
  } catch (error) {
    throw new Error('Failed to generate refresh token');
  }
}

/**
 * Verify Access Token
 * @param {string} token - JWT token to verify
 */
export async function verifyAccessToken(token) {
  try {
    const { payload } = await jose.jwtVerify(token, secret, {
      issuer: JWT_ISSUER,
      audience: JWT_AUDIENCE,
    });
    return payload;
  } catch (error) {
    if (error.code === 'ERR_JWT_EXPIRED') {
      throw new Error('Token expired');
    }
    throw new Error('Invalid token');
  }
}

/**
 * Verify Refresh Token
 * @param {string} token - Refresh token to verify
 */
export async function verifyRefreshToken(token) {
  try {
    const { payload } = await jose.jwtVerify(token, refreshSecret, {
      issuer: JWT_ISSUER,
      audience: JWT_AUDIENCE,
    });
    return payload;
  } catch (error) {
    if (error.code === 'ERR_JWT_EXPIRED') {
      throw new Error('Refresh token expired');
    }
    throw new Error('Invalid refresh token');
  }
}

/**
 * Generate Token Pair (Access + Refresh)
 * @param {object} payload - User data
 */
export async function generateTokenPair(payload) {
  const [accessToken, refreshToken] = await Promise.all([
    generateAccessToken(payload),
    generateRefreshToken(payload),
  ]);

  return { accessToken, refreshToken };
}

/**
 * Refresh Access Token using Refresh Token
 * @param {string} refreshToken - Valid refresh token
 */
export async function refreshAccessToken(refreshToken) {
  try {
    const payload = await verifyRefreshToken(refreshToken);
    
    // Remove JWT specific claims before creating new token
    const { iat, exp, jti, iss, aud, ...userPayload } = payload;
    
    const newAccessToken = await generateAccessToken(userPayload);
    return newAccessToken;
  } catch (error) {
    throw new Error('Failed to refresh token');
  }
}

/**
 * Middleware to verify JWT token in request
 */
export function authenticateToken(handler) {
  return async (req, res) => {
    try {
      const authHeader = req.headers.authorization;
      const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

      if (!token) {
        return res.status(401).json({ error: 'Access token required' });
      }

      const payload = await verifyAccessToken(token);
      req.user = payload; // Attach user data to request
      
      return handler(req, res);
    } catch (error) {
      return res.status(403).json({ error: error.message });
    }
  };
}

export default {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
  generateTokenPair,
  refreshAccessToken,
  authenticateToken,
};
