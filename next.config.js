/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Amazon-IA-Boost',
            value: 'reussitess.fr Guadeloupe 26 Boutiques'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
