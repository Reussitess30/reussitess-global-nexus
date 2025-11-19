import Link from 'next/link'
import { useEffect } from 'react'

export default function Layout({ children }) {
  useEffect(() => {
    const protectContent = () => {
      document.addEventListener('copy', (e) => e.preventDefault())
      document.addEventListener('contextmenu', (e) => e.preventDefault())
    }
    protectContent()
  }, [])

  return (
    <>
      <header className="header">
        <nav>
          <div className="logo">
            🌍 Reussitess Global Nexus
          </div>
          <div className="nav-links">
            <Link href="/">🏠 Accueil</Link>
            <Link href="/a-propos">ℹ️ À Propos</Link>
            <Link href="/analytics">📊 Analytics</Link>
            <Link href="/affiliation">🤝 Affiliation</Link>
            <Link href="/bibliotheque/outils">🛠️ Outils</Link>
            <Link href="/mentions-legales">⚖️ Juridique</Link>
          </div>
        </nav>
      </header>
      
      <main>{children}</main>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>🌐 Réseau Global</h4>
              <p>26 boutiques • 14 pays • 5 continents</p>
            </div>
            <div className="footer-section">
              <h4>📞 Support</h4>
              <p>24/7 • Multilingue • Global</p>
            </div>
            <div className="footer-section">
              <h4>🔒 Sécurité</h4>
              <p>Données cryptées • Transactions sécurisées</p>
            </div>
            <div className="footer-section">
              <h4>⚖️ Légal</h4>
              <Link href="/mentions-legales">Mentions Légales</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Reussitess Global Nexus. Tous droits réservés.</p>
            <p>🚀 Développé avec Next.js • PWA • SEO Optimisé</p>
          </div>
        </div>
      </footer>
    </>
  )
}
