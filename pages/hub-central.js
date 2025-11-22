import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  // VRAIS LIENS AMAZON D'AFFILIATION de votre ancienne appli
  const boutiques = [
    // Boutiques Personnelles (14)
    { nom: "🇺🇸 [Personnel] États-Unis", lien: "https://www.amazon.com/shop/amourguadeloupe" },
    { nom: "🇮🇹 [Personnel] Italie", lien: "https://www.amazon.it/shop/amourguadeloupe" },
    { nom: "🇫🇷 [Personnel] France", lien: "https://www.amazon.fr/shop/amourguadeloupe" },
    { nom: "🇪🇸 [Personnel] Espagne", lien: "https://www.amazon.es/shop/amourguadeloupe" },
    { nom: "🇩🇪 [Personnel] Allemagne", lien: "https://www.amazon.de/shop/amourguadeloupe" },
    { nom: "🇨🇦 [Personnel] Canada", lien: "https://www.amazon.ca/shop/amourguadeloupe" },
    { nom: "🇮🇳 [Personnel] Inde", lien: "https://www.amazon.in/shop/amourguadeloupe" },
    { nom: "🇳🇱 [Personnel] Pays-Bas", lien: "https://www.amazon.nl/shop/amourguadeloupe" },
    { nom: "🇸🇪 [Personnel] Suède", lien: "https://www.amazon.se/shop/amourguadeloupe" },
    { nom: "🇸🇬 [Personnel] Singapour", lien: "https://www.amazon.sg/shop/amourguadeloupe" },
    { nom: "🇬🇧 [Personnel] Royaume-Uni", lien: "https://www.amazon.co.uk/shop/amourguadeloupe" },
    { nom: "🇦🇺 [Personnel] Australie", lien: "https://www.amazon.com.au/shop/amourguadeloupe" },
    { nom: "🇧🇪 [Personnel] Belgique", lien: "https://www.amazon.com.be/shop/amourguadeloupe" },
    { nom: "🇧🇷 [Personnel] Brésil", lien: "https://www.amazon.com.br/shop/amourguadeloupe" },

    // Boutiques Influenceurs (12)
    { nom: "🇦🇺 [Influenceur] Australie", lien: "https://www.amazon.com.au/shop/influencer-fb942837" },
    { nom: "🇺🇸 [Influenceur] États-Unis", lien: "https://www.amazon.com/shop/influencer-fb942837" },
    { nom: "🇬🇧 [Influenceur] Royaume-Uni", lien: "https://www.amazon.co.uk/shop/influencer-fb942837" },
    { nom: "🇮🇳 [Influenceur] Inde", lien: "https://www.amazon.in/shop/influencer-fb942837" },
    { nom: "🇸🇪 [Influenceur] Suède", lien: "https://www.amazon.se/shop/influencer-fb942837" },
    { nom: "🇸🇬 [Influenceur] Singapour", lien: "https://www.amazon.sg/shop/influencer-fb942837" },
    { nom: "🇧🇪 [Influenceur] Belgique", lien: "https://www.amazon.com.be/shop/influencer-fb942837" },
    { nom: "🇪🇸 [Influenceur] Espagne", lien: "https://www.amazon.es/shop/influencer-fb942837" },
    { nom: "🇩🇪 [Influenceur] Allemagne", lien: "https://www.amazon.de/shop/influencer-fb942837" },
    { nom: "🇨🇦 [Influenceur] Canada", lien: "https://www.amazon.ca/shop/influencer-fb942837" },
    { nom: "🇳🇱 [Influenceur] Pays-Bas", lien: "https://www.amazon.nl/shop/influencer-fb942837" },
    { nom: "🇫🇷 [Influenceur] France", lien: "https://www.amazon.fr/shop/influencer-fb942837" }
  ]

  return (
    <Layout>
      {/* Hub Central - Quick Access Dashboard */}
      <div style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #06b6d4 100%)',
        padding: '2rem 0',
        marginBottom: '2rem'
      }}>
        <div className="container">
          <h2 style={{
            color: 'white',
            textAlign: 'center',
            fontSize: '2rem',
            marginBottom: '1.5rem',
            fontWeight: '700'
          }}>
            🏢 HUB CENTRAL - Accès Rapide
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <Link href="/analytics" className="hub-card">
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📊</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', margin: '0' }}>Dashboard</h3>
              <p style={{ fontSize: '0.9rem', margin: '0.5rem 0 0 0', opacity: 0.9 }}>Analytics & Stats</p>
            </Link>

            <Link href="/pwa-app" className="hub-card">
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📱</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', margin: '0' }}>Application</h3>
              <p style={{ fontSize: '0.9rem', margin: '0.5rem 0 0 0', opacity: 0.9 }}>Installer l'app PWA</p>
            </Link>

            <Link href="/bibliotheque" className="hub-card">
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📚</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', margin: '0' }}>Bibliothèque</h3>
              <p style={{ fontSize: '0.9rem', margin: '0.5rem 0 0 0', opacity: 0.9 }}>Guides & Ressources</p>
            </Link>

            <Link href="/affiliation" className="hub-card">
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🤝</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', margin: '0' }}>Affiliation</h3>
              <p style={{ fontSize: '0.9rem', margin: '0.5rem 0 0 0', opacity: 0.9 }}>Programme partenaire</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="container">
          <h1>REUSSITESS® GLOBAL NEXUS</h1>
          <p className="subtitle">
            Accès Direct à Nos 26 Boutiques Amazon
          </p>
          
          {/* Carte Guadeloupe */}
          <div className="guadeloupe-card">
            <div className="guadeloupe-title">Guadeloupe</div>
            <div className="guadeloupe-subtitle">Terre de Champions</div>
          </div>

          {/* Bouton Principal */}
          <div style={{margin: '3rem 0'}}>
            <a 
              href="#boutiques" 
              className="btn-principal"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #e11d48, #f59e0b, #3b82f6)',
                color: 'white',
                padding: '1.5rem 3rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1.3rem',
                fontWeight: 'bold',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(225, 29, 72, 0.4)',
                transition: 'all 0.3s ease'
              }}
            >
              🚀 ACCÉDER AUX 26 BOUTIQUES AMAZON
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="number">26</span>
              <span className="label">Boutiques Amazon</span>
            </div>
            <div className="stat">
              <span className="number">14</span>
              <span className="label">Pays</span>
            </div>
            <div className="stat">
              <span className="number">5</span>
              <span className="label">Continents</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section Boutiques */}
      <div className="container">
        <section id="boutiques" className="boutiques-section">
          <h2 style={{
            textAlign: 'center',
            fontSize: '3rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #f59e0b, #e11d48)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '3rem'
          }}>
            MES BOUTIQUES AMAZON
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginTop: '2rem'
          }}>
            {boutiques.map((boutique, index) => (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}>
                <h3 style={{color: 'white', marginBottom: '1.5rem', fontSize: '1.2rem'}}>
                  {boutique.nom}
                </h3>
                <a 
                  href={boutique.lien} 
                  target="_blank" 
                  rel="noopener noreferrer nofollow sponsored"
                  className="boutique-btn"
                >
                  🛍️ Visiter la Boutique
                </a>
                <div style={{
                  marginTop: '1rem',
                  fontSize: '0.8rem',
                  opacity: '0.7',
                  color: '#fbbf24'
                }}>
                  Lien d'affiliation sécurisé
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Information */}
        <section style={{
          padding: '4rem 0',
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.02)',
          borderRadius: '20px',
          marginTop: '4rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, #f59e0b, #e11d48)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            COMMENT ÇA FONCTIONNE ?
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>1️⃣</div>
              <h3 style={{color: '#f59e0b', marginBottom: '1rem'}}>Cliquez</h3>
              <p>Choisissez une boutique Amazon</p>
            </div>
            <div>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>2️⃣</div>
              <h3 style={{color: '#3b82f6', marginBottom: '1rem'}}>Achetez</h3>
              <p>Faites vos achats normalement</p>
            </div>
            <div>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>3️⃣</div>
              <h3 style={{color: '#10b981', marginBottom: '1rem'}}>Gagnez</h3>
              <p>Je reçois une commission</p>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .btn-principal:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px rgba(225, 29, 72, 0.6);
        }

        .hub-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          text-decoration: none;
          color: white;
          transition: all 0.3s ease;
          cursor: pointer;
          display: block;
        }

        .hub-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
        }

        .boutique-btn {
          display: inline-block;
          background: linear-gradient(135deg, #10b981, #3b82f6);
          color: white;
          padding: 1rem 2rem;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          width: 100%;
        }

        .boutique-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(16, 185, 129, 0.4);
        }
      `}</style>
    </Layout>
  )
}
