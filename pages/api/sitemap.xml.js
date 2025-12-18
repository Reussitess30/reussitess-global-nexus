export default function handler(req, res) {
  const baseUrl = 'https://reussitess-global-nexus-jfgk.vercel.app'
  
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/boutiques', priority: '1.0', changefreq: 'weekly' },
    { url: '/champions', priority: '1.0', changefreq: 'daily' },
    { url: '/visa-universel', priority: '1.0', changefreq: 'daily' },
    { url: '/quiz', priority: '0.9', changefreq: 'weekly' },
    { url: '/bibliotheque', priority: '0.9', changefreq: 'weekly' },
    { url: '/hub-central', priority: '0.8', changefreq: 'weekly' },
    { url: '/a-propos', priority: '0.7', changefreq: 'monthly' },
    { url: '/contact', priority: '0.7', changefreq: 'monthly' },
    
    // DOM-TOM
    { url: '/bibliotheque/dom-tom/guadeloupe', priority: '0.9', changefreq: 'weekly' },
    { url: '/bibliotheque/dom-tom/martinique', priority: '0.9', changefreq: 'weekly' },
    { url: '/bibliotheque/dom-tom/guyane', priority: '0.9', changefreq: 'weekly' },
    { url: '/bibliotheque/dom-tom/reunion', priority: '0.9', changefreq: 'weekly' },
    { url: '/bibliotheque/dom-tom/mayotte', priority: '0.8', changefreq: 'monthly' },
    { url: '/bibliotheque/dom-tom/polynesie', priority: '0.8', changefreq: 'monthly' },
    { url: '/bibliotheque/dom-tom/nouvelle-caledonie', priority: '0.8', changefreq: 'monthly' },
    
    // Europe
    { url: '/bibliotheque/europe/france', priority: '0.8', changefreq: 'monthly' },
    { url: '/bibliotheque/europe/belgique', priority: '0.7', changefreq: 'monthly' },
    { url: '/bibliotheque/europe/suisse', priority: '0.7', changefreq: 'monthly' },
    
    // Afrique
    { url: '/bibliotheque/afrique/senegal', priority: '0.8', changefreq: 'monthly' },
    { url: '/bibliotheque/afrique/cote-ivoire', priority: '0.8', changefreq: 'monthly' },
    { url: '/bibliotheque/afrique/cameroun', priority: '0.8', changefreq: 'monthly' },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()
}
