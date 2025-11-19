export default function handler(req, res) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://reussitess-global-nexus.vercel.app'
  const locales = ['fr', 'en', 'es', 'de', 'it', 'pt']
  
  const staticPages = [
    '',
    '/a-propos',
    '/contact',
    '/affiliation',
    '/bibliotheque',
    '/outils',
    '/presse',
    '/savoir-culture',
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${staticPages.map(page => {
  return locales.map(locale => {
    const url = locale === 'fr' ? `${baseUrl}${page}` : `${baseUrl}/${locale}${page}`
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
    ${locales.map(l => {
      const altUrl = l === 'fr' ? `${baseUrl}${page}` : `${baseUrl}/${l}${page}`
      return `    <xhtml:link rel="alternate" hreflang="${l}" href="${altUrl}" />`
    }).join('\n')}
  </url>`
  }).join('\n')
}).join('\n')}
</urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate')
  res.write(sitemap)
  res.end()
}
