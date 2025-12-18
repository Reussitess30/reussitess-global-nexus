import Layout from "../components/Layout";

export default function APropos() {
  return (
    <Layout>
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h1>À Propos de REUSSITESS® GlobalNexus</h1>
            <p className="text-xl">
              Votre Passerelle Vers l'Excellence Mondiale
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card">
              <h2>Bienvenue dans l'univers de REUSSITESS® GlobalNexus</h2>
              <p className="mb-4">
                Le hub central de votre écosystème mondial. Conçue pour les
                membres du réseau REUSSITESS®, notre application PWA vous offre
                un accès inédit à 26 boutiques Amazon réparties dans 14 pays et
                5 continents, le tout avec une disponibilité 24h/24 et 7j/7.
              </p>

              <h3>🎯 Fonctionnalités Clés</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="feature-item">
                  <strong>🌍 Accès Universel</strong>
                  <p>
                    Connectez-vous instantanément à nos 26 boutiques Amazon
                    partenaires à travers le monde
                  </p>
                </div>
                <div className="feature-item">
                  <strong>📊 Tableau de Bord Intuitif</strong>
                  <p>
                    Suivez vos activités et gérez votre plateforme sécurisée
                    avec facilité
                  </p>
                </div>
                <div className="feature-item">
                  <strong>🔒 Connexion Sécurisée</strong>
                  <p>
                    Accédez à votre espace personnel protégé pour une expérience
                    sans souci
                  </p>
                </div>
                <div className="feature-item">
                  <strong>🚀 Inscription Facile</strong>
                  <p>
                    Rejoignez rapidement le réseau exclusif REUSSITESS® Global
                  </p>
                </div>
                <div className="feature-item">
                  <strong>🏪 Boutiques Mondiales</strong>
                  <p>Explorez les opportunités dans 14 pays différents</p>
                </div>
                <div className="feature-item">
                  <strong>📱 Application PWA</strong>
                  <p>
                    Installez notre application pour un accès rapide, même hors
                    ligne
                  </p>
                </div>
              </div>

              <p className="text-center premium-text">
                REUSSITESS® GlobalNexus est votre partenaire essentiel pour
                naviguer et prospérer au sein de notre écosystème d'excellence
                et d'innovation. Téléchargez-la dès aujourd'hui pour débloquer
                un monde d'opportunités et rejoignez le réseau mondial des
                entrepreneurs du succès.
              </p>

              <div className="text-center mt-8">
                <button className="btn btn-premium btn-large">
                  🚀 Rejoindre le Réseau Global
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
