/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY', // Empêche le clickjacking
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // Empêche le MIME sniffing
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block', // Protection XSS pour anciens navigateurs
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            // Note: 'unsafe-inline' et 'unsafe-eval' sont nécessaires pour Next.js et React
            // Next.js utilise des scripts inline pour l'hydratation et le Hot Module Replacement
            // Les composants avec styled-jsx nécessitent 'unsafe-inline' pour les styles
            // Pour une sécurité maximale en production, envisager l'utilisation de nonces
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://www.amazon.* https://*.amazon.com https://*.amazon.fr https://*.amazon.de https://*.amazon.co.uk; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://www.amazon.*;",
          },
        ],
      },
    ]
  },
}

// Configuration PWA sans i18n
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})

module.exports = withPWA(nextConfig)
