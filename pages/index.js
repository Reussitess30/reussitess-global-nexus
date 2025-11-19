import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'

export default function Home() {
  // VRAIS LIENS AMAZON D'AFFILIATION de votre ancienne appli
  const boutiques = [
    // Boutiques Personnelles (14)
    { nom: "🇫🇷 [Personnel] France", lien: "https://amzlink.to/personnel-FR" },
    { nom: "🇮🇹 [Personnel] Italie", lien: "https://amzlink.to/personnel-IT" },
    { nom: "🇩🇪 [Personnel] Allemagne", lien: "https://amzlink.to/personnel-DE" },
    { nom: "🇸🇪 [Personnel] Suède", lien: "https://amzlink.to/personnel-SE" },
    { nom: "🇸🇬 [Personnel] Singapour", lien: "https://amzlink.to/personnel-SG" },
    { nom: "🇦🇺 [Personnel] Australie", lien: "https://amzlink.to/personnel-AU" },
    { nom: "🇪🇸 [Personnel] Espagne", lien: "https://amzlink.to/personnel-ES" },
    { nom: "🇧🇷 [Personnel] Brésil", lien: "https://amzlink.to/personnel-BR" },
    { nom: "🇬🇧 [Personnel] Royaume-Uni", lien: "https://amzlink.to/personnel-UK" },
    { nom: "🇮🇳 [Personnel] Inde", lien: "https://amzlink.to/personnel-IN" },
    { nom: "🇳🇿 [Personnel] Nouvelle-Zélande", lien: "https://amzlink.to/personnel-NZ" },
    { nom: "🇺🇸 [Personnel] États-Unis", lien: "https://amzlink.to/personnel-US" },
    { nom: "🇨🇦 [Personnel] Canada", lien: "https://amzlink.to/personnel-CA" },
    { nom: "🇧🇪 [Personnel] Belgique", lien: "https://amzlink.to/personnel-BE" },

    // Boutiques Influenceurs (12)
    { nom: "🇮🇹 [Influenceur] Italie", lien: "https://amzlink.to/influenceur-IT" },
    { nom: "🇩🇪 [Influenceur] Allemagne", lien: "https://amzlink.to/influenceur-DE" },
    { nom: "🇸🇪 [Influenceur] Suède", lien: "https://amzlink.to/influenceur-SE" },
    { nom: "🇸🇬 [Influenceur] Singapour", lien: "https://amzlink.to/influenceur-SG" },
    { nom: "🇦🇺 [Influenceur] Australie", lien: "https://amzlink.to/influenceur-AU" },
    { nom: "🇪🇸 [Influenceur] Espagne", lien: "https://amzlink.to/influenceur-ES" },
    { nom: "🇬🇧 [Influenceur] Royaume-Uni", lien: "https://amzlink.to/influenceur-UK" },
    { nom: "🇮🇳 [Influenceur] Inde", lien: "https://amzlink.to/influenceur-IN" },
    { nom: "🇳🇿 [Influenceur] Nouvelle-Zélande", lien: "https://amzlink.to/influenceur-NZ" },
    { nom: "🇺🇸 [Influenceur] États-Unis", lien: "https://amzlink.to/influenceur-US" },
    { nom: "🇧🇪 [Influenceur] Belgique", lien: "https://amzlink.to/influenceur-BE" },
    { nom: "🇧🇪 [Influenceur] Belgique (BEI)", lien: "https://www.amazon.com.be/shop/influencer-fb942837" }
  ]

  return (
    <Layout>
      {/* Hero Section avec design signature Reussitess® */}
      <HeroSection />

      <div className="hero" id="fonctionnement">
        <div className="container">
          <h1>RÉUSSITESS GLOBAL NEXUS</h1>
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
                  className="boutique-link"
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #10b981, #3b82f6)',
                    color: 'white',
                    padding: '1rem 2rem',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    width: '100%'
                  }}
                >
                  🛍️ Visiter la Boutique
                </a>
                <div style={{
                  marginTop: '1rem',
                  fontSize: '0.8rem',
                  opacity: '0.7',
                  color: '#fbbf24'
                }}>
                  Lien d&apos;affiliation sécurisé
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
        
        .boutique-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(16, 185, 129, 0.4);
        }
      `}</style>
    </Layout>
  )
}
