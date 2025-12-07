/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',  // Sécurité Google Cloud LOCKED
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client']
  }
}

module.exports = nextConfig
