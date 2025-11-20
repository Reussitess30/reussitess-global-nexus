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

        {/* Section Assistant Intelligent */}
        <section style={{marginBottom: '4rem'}}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '2rem'
          }}>
            🤖 Assistant Intelligent
          </h2>
          
          <div className="grid-boutiques">
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                💬 Bot IA Multilingue
              </h3>
              <p style={{color: '#666', marginBottom: '1rem'}}>
                Assistant virtuel avec synthèse vocale en 6 langues pour vous guider
              </p>
              <ul style={{color: '#666', marginLeft: '1.5rem'}}>
                <li>Réponses intelligentes 24/7</li>
                <li>Support vocal naturel</li>
                <li>Détection automatique de langue</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section Fiches Pays */}
        <section style={{marginBottom: '4rem'}}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '2rem'
          }}>
            🗺️ Fiches Pays
          </h2>
          
          <div className="grid-boutiques">
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                🇫🇷 France
              </h3>
              <p style={{color: '#666'}}>
                Marché français, TVA 20%, comportement consommateur, logistique
              </p>
            </div>
            
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                🇩🇪 Allemagne
              </h3>
              <p style={{color: '#666'}}>
                Premier marché européen, TVA 19%, standards qualité élevés
              </p>
            </div>
            
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                🇺🇸 États-Unis
              </h3>
              <p style={{color: '#666'}}>
                Marché américain, taxes variables, opportunités massives
              </p>
            </div>

            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                🇬🇧 Royaume-Uni
              </h3>
              <p style={{color: '#666'}}>
                Post-Brexit, TVA 20%, marché anglophone européen
              </p>
            </div>

            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                🌏 Asie-Pacifique
              </h3>
              <p style={{color: '#666'}}>
                Japon, Inde, Singapour, Australie - Marchés en expansion
              </p>
            </div>
          </div>
        </section>

        {/* Section Règlement International */}
        <section style={{marginBottom: '4rem'}}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #dc2626, #f59e0b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '2rem'
          }}>
            ⚖️ Règlement International
          </h2>
          
          <div className="grid-boutiques">
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                🇪🇺 RGPD Européen
              </h3>
              <p style={{color: '#666'}}>
                Protection des données, conformité GDPR, droits des consommateurs
              </p>
            </div>
            
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                💰 TVA & Taxes
              </h3>
              <p style={{color: '#666'}}>
                Réglementation TVA par pays, déclarations, seuils OSS
              </p>
            </div>
            
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                📦 Douanes & Import
              </h3>
              <p style={{color: '#666'}}>
                Réglementations douanières, codes HS, restrictions produits
              </p>
            </div>

            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                🏷️ Propriété Intellectuelle
              </h3>
              <p style={{color: '#666'}}>
                Marques, brevets, droits d&apos;auteur, contrefaçon
              </p>
            </div>
          </div>
        </section>

        {/* Section Ressources Professeur */}
        <section style={{marginBottom: '4rem'}}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '2rem'
          }}>
            👨‍🏫 Ressources Professeur
          </h2>
          
          <div className="grid-boutiques">
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                📊 Études de Cas
              </h3>
              <p style={{color: '#666'}}>
                Cas pratiques e-commerce, analyses marché, success stories
              </p>
            </div>
            
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                📈 Analyses Stratégiques
              </h3>
              <p style={{color: '#666'}}>
                Stratégies marketing, pricing, positionnement international
              </p>
            </div>
            
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                🎓 Supports Pédagogiques
              </h3>
              <p style={{color: '#666'}}>
                Cours, présentations, exercices pratiques e-commerce
              </p>
            </div>
          </div>
        </section>

        {/* Section Actualités et Évolution */}
        <section style={{marginBottom: '4rem'}}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #059669, #0891b2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '2rem'
          }}>
            📰 Actualités & Évolution
          </h2>
          
          <div className="grid-boutiques">
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                🔥 Tendances E-commerce
              </h3>
              <p style={{color: '#666'}}>
                Nouveautés Amazon, innovations marketplace, IA et automation
              </p>
            </div>
            
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                📊 Statistiques Marché
              </h3>
              <p style={{color: '#666'}}>
                Chiffres clés e-commerce mondial, croissance par région
              </p>
            </div>
            
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                ⚡ Changements Réglementaires
              </h3>
              <p style={{color: '#666'}}>
                Mises à jour législatives, nouvelles normes, compliance
              </p>
            </div>
          </div>
        </section>

        {/* Section Historique Afrique et Outre-mer */}
        <section style={{marginBottom: '4rem'}}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #f59e0b, #dc2626)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '2rem'
          }}>
            🌍 Historique Afrique & Outre-mer
          </h2>
          
          <div className="grid-boutiques">
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                🏛️ Histoire du Commerce
              </h3>
              <p style={{color: '#666'}}>
                Évolution commerce africain, routes commerciales historiques
              </p>
            </div>
            
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                🌴 Marchés Outre-mer
              </h3>
              <p style={{color: '#666'}}>
                DOM-TOM, spécificités fiscales, opportunités e-commerce
              </p>
            </div>
            
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                📚 Patrimoine Culturel
              </h3>
              <p style={{color: '#666'}}>
                Artisanat traditionnel, produits authentiques, valorisation
              </p>
            </div>

            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                🚀 E-commerce Africain
              </h3>
              <p style={{color: '#666'}}>
                Émergence marketplaces, mobile money, innovation locale
              </p>
            </div>
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

