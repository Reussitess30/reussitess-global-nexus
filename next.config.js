/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  serverExternalPackages: ['@prisma/client']  // ✅ Next.js 16 syntaxe
}

module.exports = nextConfig
