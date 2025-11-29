const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Headers sécurité MAXIMALE
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // CORS strict - domaine unique
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://reussitess.fr'
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, OPTIONS'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-Requested-With, Content-Type, Authorization'
          },
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true'
          },
          
          // HSTS - Force HTTPS 2 ans + preload
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          
          // Anti-clickjacking
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          
          // Anti-MIME sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          
          // XSS Protection
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          
          // Referrer Policy sécurisé
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          
          // Permissions Policy - Bloquer API sensibles
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()'
          },
          
          // CSP (Content Security Policy) STRICT
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https: http:",
              "font-src 'self' data: https://fonts.gstatic.com",
              "connect-src 'self' https://api.anthropic.com https://www.google-analytics.com",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self'",
              "upgrade-insecure-requests"
            ].join('; ')
          },
          
          // Cache Control
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ];
  },

  // Images optimisées
  images: {
    domains: ['reussitess.fr', 'www.reussitess.fr'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000
  },

  // Compression
  compress: true,

  // Production optimisations
  productionBrowserSourceMaps: false,
  
  // Redirects sécurisés
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/',
        permanent: true
      },
      {
        source: '/wp-admin',
        destination: '/',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;

