import Layout from '../../components/Layout'

export default function CultureGuadeloupe() {
  return (
    <Layout>
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-center mb-8">🌴 Culture et Patrimoine Guadeloupéen</h1>
            
            <div className="card" style={{ marginBottom: '30px' }}>
              <h2>🏝️ Terre de Champions - Archipel des Caraïbes</h2>
              <p>
                La Guadeloupe, archipel en forme de papillon, est un département français d'outre-mer 
                situé dans les Caraïbes. Avec ses 385 000 habitants, elle incarne un mélange unique 
                de cultures africaine, européenne, indienne et caraïbe.
              </p>

              <h3 style={{ marginTop: '20px' }}>🎭 Identité Culturelle</h3>
              <ul style={{ lineHeight: '2' }}>
                <li><strong>Langue Créole</strong> - Créole guadeloupéen, patrimoine vivant</li>
                <li><strong>Musique</strong> - Gwoka (inscrit au patrimoine UNESCO), Zouk, Compas</li>
                <li><strong>Danse</strong> - Quadrille, Haute-Taille, danses traditionnelles</li>
                <li><strong>Littérature</strong> - Maryse Condé (Prix Nobel alternatif), Simone Schwarz-Bart</li>
                <li><strong>Gastronomie</strong> - Bokit, colombo, accras, ti-punch</li>
              </ul>

              <h3 style={{ marginTop: '20px' }}>🏛️ Histoire et Patrimoine</h3>
              <p>
                <strong>Période précolombienne:</strong> Peuplée par les Arawaks puis les Caraïbes
              </p>
              <p>
                <strong>1493:</strong> Découverte par Christophe Colomb
              </p>
              <p>
                <strong>1635:</strong> Colonisation française
              </p>
              <p>
                <strong>1848:</strong> Abolition de l'esclavage grâce à Victor Schoelcher
              </p>
              <p>
                <strong>1946:</strong> Devient département français
              </p>

              <h3 style={{ marginTop: '20px' }}>🌟 Personnalités Guadeloupéennes</h3>
              <ul style={{ lineHeight: '2' }}>
                <li><strong>Maryse Condé</strong> - Écrivaine, Prix Nobel alternatif de littérature</li>
                <li><strong>Lilian Thuram</strong> - Champion du monde de football 1998</li>
                <li><strong>Gerty Archimède</strong> - Première femme avocat noire de France</li>
                <li><strong>Thierry Henry</strong> - Légende du football français</li>
                <li><strong>Georges Othily</strong> - Premier médaillé olympique guadeloupéen</li>
              </ul>

              <h3 style={{ marginTop: '20px' }}>🎨 Patrimoine Mondial UNESCO</h3>
              <p>
                Le <strong>Gwoka</strong> est inscrit au patrimoine culturel immatériel de l'UNESCO depuis 2014. 
                Cette musique et danse traditionnelle est née de la résistance des esclaves africains.
              </p>

              <h3 style={{ marginTop: '20px' }}>🏖️ Géographie et Nature</h3>
              <ul style={{ lineHeight: '2' }}>
                <li><strong>Basse-Terre</strong> - Volcanique, forêt tropicale, La Soufrière (1467m)</li>
                <li><strong>Grande-Terre</strong> - Calcaire, plages de sable blanc</li>
                <li><strong>Marie-Galante</strong> - "L'île aux cent moulins"</li>
                <li><strong>Les Saintes</strong> - Baie classée plus belle du monde</li>
                <li><strong>La Désirade</strong> - Îlet Petite-Terre</li>
              </ul>
            </div>

            <div style={{ 
              background: 'linear-gradient(135deg, #10b981, #3b82f6)', 
              color: 'white', 
              padding: '30px', 
              borderRadius: '15px' 
            }}>
              <h2 style={{ marginBottom: '20px' }}>🔗 Ressources et Liens Utiles</h2>
              <div style={{ display: 'grid', gap: '15px' }}>
                <a 
                  href="https://www.guadeloupe-tourisme.fr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    background: 'white', 
                    color: '#10b981', 
                    padding: '15px', 
                    borderRadius: '10px',
                    textDecoration: 'none',
                    display: 'block',
                    fontWeight: 'bold'
                  }}
                >
                  🏝️ Office du Tourisme de Guadeloupe
                </a>
                <a 
                  href="https://www.regionguadeloupe.fr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    background: 'white', 
                    color: '#10b981', 
                    padding: '15px', 
                    borderRadius: '10px',
                    textDecoration: 'none',
                    display: 'block',
                    fontWeight: 'bold'
                  }}
                >
                  🏛️ Région Guadeloupe (Officiel)
                </a>
                <a 
                  href="https://ich.unesco.org/fr/RL/le-gwoka-musique-chant-danse-et-pratique-culturelle-representatifs-de-lidentite-guadeloupeenne-00991" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    background: 'white', 
                    color: '#10b981', 
                    padding: '15px', 
                    borderRadius: '10px',
                    textDecoration: 'none',
                    display: 'block',
                    fontWeight: 'bold'
                  }}
                >
                  🎵 Gwoka - Patrimoine UNESCO
                </a>
                <a 
                  href="/bibliotheque/pays/guadeloupe" 
                  style={{ 
                    background: 'rgba(255,255,255,0.3)', 
                    color: 'white', 
                    padding: '15px', 
                    borderRadius: '10px',
                    textDecoration: 'none',
                    display: 'block',
                    fontWeight: 'bold'
                  }}
                >
                  📊 Fiche Pays Guadeloupe Complète
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  )
}
