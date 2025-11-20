import Link from 'next/link'

export default function Bibliotheque() {
  return (
    <>
      <div className="hero" style={{minHeight: '300px', padding: '3rem 0'}}>
        <div className="container">
          <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>📚 Bibliothèque Ressources</h1>
          <p className="subtitle" style={{fontSize: '1.3rem', color: '#fff'}}>
            Explorez nos outils, calculateurs et ressources pour réussir
          </p>
        </div>
      </div>

      <div className="container" style={{padding: '4rem 2rem'}}>
        {/* Section Outils et Calculateurs */}
        <section style={{marginBottom: '4rem'}}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #f59e0b, #e11d48)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '2rem'
          }}>
            🧮 Outils & Calculateurs
          </h2>
          
          <div className="grid-boutiques">
            <Link href="/bibliotheque/outils" style={{textDecoration: 'none'}}>
              <div className="boutique-card" style={{cursor: 'pointer'}}>
                <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                  💰 Calculateurs Financiers
                </h3>
                <p style={{color: '#666', marginBottom: '1rem'}}>
                  Calculateurs de TVA, commissions Amazon, profits et marges
                </p>
                <span className="btn-boutique" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontWeight: '600'
                }}>
                  Accéder aux Outils →
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Section Ressources par Pays */}
        <section style={{marginBottom: '4rem'}}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '2rem'
          }}>
            🌍 Ressources par Pays
          </h2>
          
          <div className="grid-boutiques">
            <Link href="/bibliotheque/pays/fr" style={{textDecoration: 'none'}}>
              <div className="boutique-card" style={{cursor: 'pointer'}}>
                <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                  🇫🇷 Ressources France
                </h3>
                <p style={{color: '#666', marginBottom: '1rem'}}>
                  Guides et ressources spécifiques au marché français
                </p>
                <span className="btn-boutique" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #e11d48, #f59e0b)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontWeight: '600'
                }}>
                  Voir les Ressources →
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Section Guides et Tutoriels */}
        <section style={{marginBottom: '4rem'}}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #10b981, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '2rem'
          }}>
            📖 Guides & Tutoriels
          </h2>
          
          <div className="grid-boutiques">
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                📚 Guide du Débutant
              </h3>
              <p style={{color: '#666'}}>
                Tout ce qu&apos;il faut savoir pour démarrer sur Amazon
              </p>
            </div>
            
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                💼 Guide Affiliation
              </h3>
              <p style={{color: '#666'}}>
                Maximisez vos commissions avec le programme Amazon
              </p>
            </div>
            
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                🌐 Expansion Internationale
              </h3>
              <p style={{color: '#666'}}>
                Stratégies pour vendre sur les 14 pays Amazon
              </p>
            </div>
          </div>
        </section>

        <div style={{textAlign: 'center', marginTop: '3rem'}}>
          <Link href="/" className="btn-retour">
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>

      <style jsx>{`
        .grid-boutiques {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .boutique-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .boutique-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .btn-retour {
          display: inline-block;
          background: linear-gradient(135deg, #6b7280, #374151);
          color: white;
          padding: 1rem 2rem;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-retour:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .grid-boutiques {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

