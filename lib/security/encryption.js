/**
 * Encryption Utilities for Data at Rest
 * Uses industry-standard encryption algorithms
 */

import crypto from 'crypto';
import bcrypt from 'bcryptjs';

// Encryption configuration
const ALGORITHM = 'aes-256-gcm';
const KEY_LENGTH = 32; // 256 bits
const IV_LENGTH = 16; // 128 bits
const SALT_ROUNDS = 12; // bcrypt salt rounds
const AUTH_TAG_LENGTH = 16;

// Get encryption key from environment or generate one
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY 
  ? Buffer.from(process.env.ENCRYPTION_KEY, 'hex')
  : crypto.randomBytes(KEY_LENGTH);

/**
 * Encrypt sensitive data
 * @param {string} text - Plain text to encrypt
 * @returns {string} Encrypted data with IV and auth tag
 */
export function encrypt(text) {
  if (!text) return null;

  try {
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv(ALGORITHM, ENCRYPTION_KEY, iv);
    
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    const authTag = cipher.getAuthTag();
    
    // Combine IV + Auth Tag + Encrypted Data
    return `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`;
  } catch (error) {
    throw new Error('Encryption failed');
  }
}

/**
 * Decrypt encrypted data
 * @param {string} encryptedData - Data to decrypt (format: iv:authTag:encrypted)
 * @returns {string} Decrypted plain text
 */
export function decrypt(encryptedData) {
  if (!encryptedData) return null;

  try {
    const parts = encryptedData.split(':');
    if (parts.length !== 3) {
      throw new Error('Invalid encrypted data format');
    }

    const [ivHex, authTagHex, encrypted] = parts;
    const iv = Buffer.from(ivHex, 'hex');
    const authTag = Buffer.from(authTagHex, 'hex');
    
    const decipher = crypto.createDecipheriv(ALGORITHM, ENCRYPTION_KEY, iv);
    decipher.setAuthTag(authTag);
    
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    
    return decrypted;
  } catch (error) {
    throw new Error('Decryption failed');
  }
}

/**
 * Hash password using bcrypt
 * @param {string} password - Plain text password
 * @returns {Promise<string>} Hashed password
 */
export async function hashPassword(password) {
  try {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    throw new Error('Password hashing failed');
  }
}

/**
 * Verify password against hash
 * @param {string} password - Plain text password
 * @param {string} hash - Hashed password to compare
 * @returns {Promise<boolean>} True if password matches
 */
export async function verifyPassword(password, hash) {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    throw new Error('Password verification failed');
  }
}

/**
 * Generate secure random token
 * @param {number} length - Token length in bytes (default: 32)
 * @returns {string} Hex-encoded random token
 */
export function generateSecureToken(length = 32) {
  return crypto.randomBytes(length).toString('hex');
}

/**
 * Hash data using SHA-256
 * @param {string} data - Data to hash
 * @returns {string} Hex-encoded hash
 */
export function hashData(data) {
  return crypto.createHash('sha256').update(data).digest('hex');
}

/**
 * Encrypt object (converts to JSON first)
 * @param {object} obj - Object to encrypt
 * @returns {string} Encrypted JSON string
 */
export function encryptObject(obj) {
  return encrypt(JSON.stringify(obj));
}

/**
 * Decrypt to object (parses JSON)
 * @param {string} encryptedData - Encrypted data
 * @returns {object} Decrypted object
 */
export function decryptObject(encryptedData) {
  const decrypted = decrypt(encryptedData);
  return decrypted ? JSON.parse(decrypted) : null;
}

/**
 * Securely compare two strings (timing-safe)
 * @param {string} a - First string
 * @param {string} b - Second string
 * @returns {boolean} True if strings match
 */
export function secureCompare(a, b) {
  if (!a || !b || a.length !== b.length) {
    return false;
  }
  return crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b));
}

/**
 * Generate encryption key (for initial setup)
 * Use this to generate ENCRYPTION_KEY for .env
 * @returns {string} Hex-encoded encryption key
 */
export function generateEncryptionKey() {
  return crypto.randomBytes(KEY_LENGTH).toString('hex');
}

export default {
  encrypt,
  decrypt,
  hashPassword,
  verifyPassword,
  generateSecureToken,
  hashData,
  encryptObject,
  decryptObject,
  secureCompare,
  generateEncryptionKey,
};
