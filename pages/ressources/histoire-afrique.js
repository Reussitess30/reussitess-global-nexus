import Layout from '../../components/Layout'

export default function HistoireAfrique() {
  return (
    <Layout>
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-center mb-8">📚 Histoire Complète de l'Afrique</h1>
            
            <div className="card" style={{ marginBottom: '30px' }}>
              <h2>🌍 Berceau de l'Humanité</h2>
              <p>
                L'Afrique est le continent où l'humanité est née. Les plus anciennes traces d'hominidés 
                ont été découvertes en Afrique de l'Est, notamment en Éthiopie avec Lucy (3,2 millions d'années) 
                et en Tanzanie avec les empreintes de Laetoli.
              </p>
              
              <h3 style={{ marginTop: '20px' }}>🏛️ Grandes Civilisations Africaines</h3>
              <ul style={{ lineHeight: '2' }}>
                <li><strong>Égypte Ancienne (3100 av. J.-C.)</strong> - Pyramides, pharaons, hiéroglyphes</li>
                <li><strong>Royaume de Koush (1070 av. J.-C.)</strong> - Nubie, actuel Soudan</li>
                <li><strong>Empire du Ghana (300-1200)</strong> - Contrôle du commerce de l'or</li>
                <li><strong>Empire du Mali (1235-1670)</strong> - Tombouctou, centre de savoir</li>
                <li><strong>Empire Songhaï (1464-1591)</strong> - Apogée de l'Afrique de l'Ouest</li>
                <li><strong>Royaume du Bénin (1180-1897)</strong> - Arts et bronze</li>
                <li><strong>Empire du Zimbabwe (1220-1450)</strong> - Grand Zimbabwe</li>
                <li><strong>Royaume d'Éthiopie</strong> - Seul pays jamais colonisé</li>
              </ul>

              <h3 style={{ marginTop: '20px' }}>⛓️ Traite Négrière et Colonisation</h3>
              <p>
                La traite transatlantique (XVIe-XIXe siècle) a déporté environ 12,5 millions d'Africains 
                vers les Amériques. La Conférence de Berlin (1884-1885) a partagé l'Afrique entre puissances 
                européennes sans considération pour les peuples africains.
              </p>

              <h3 style={{ marginTop: '20px' }}>🕊️ Indépendances et Afrique Moderne</h3>
              <p>
                Les années 1960 marquent les grandes indépendances africaines. L'Afrique compte aujourd'hui 
                54 pays et plus de 1,3 milliard d'habitants, soit 17% de la population mondiale.
              </p>

              <h3 style={{ marginTop: '20px' }}>🎓 Personnalités Africaines Majeures</h3>
              <ul style={{ lineHeight: '2' }}>
                <li><strong>Nelson Mandela</strong> - Lutte contre l'apartheid, Prix Nobel de la Paix</li>
                <li><strong>Patrice Lumumba</strong> - Premier ministre du Congo indépendant</li>
                <li><strong>Thomas Sankara</strong> - Président du Burkina Faso, révolutionnaire</li>
                <li><strong>Wangari Maathai</strong> - Première femme africaine Prix Nobel de la Paix</li>
                <li><strong>Cheikh Anta Diop</strong> - Historien et anthropologue sénégalais</li>
              </ul>
            </div>

            <div style={{ 
              background: '#f59e0b', 
              color: 'white', 
              padding: '30px', 
              borderRadius: '15px' 
            }}>
              <h2 style={{ marginBottom: '20px' }}>📖 Ressources Complémentaires</h2>
              <div style={{ display: 'grid', gap: '15px' }}>
                <a 
                  href="https://unesdoc.unesco.org/ark:/48223/pf0000184265" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    background: 'white', 
                    color: '#f59e0b', 
                    padding: '15px', 
                    borderRadius: '10px',
                    textDecoration: 'none',
                    display: 'block',
                    fontWeight: 'bold'
                  }}
                >
                  📚 Histoire Générale de l'Afrique (UNESCO)
                </a>
                <a 
                  href="https://www.africultures.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    background: 'white', 
                    color: '#f59e0b', 
                    padding: '15px', 
                    borderRadius: '10px',
                    textDecoration: 'none',
                    display: 'block',
                    fontWeight: 'bold'
                  }}
                >
                  🎭 Africultures - Cultures et Arts Africains
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
                  🏝️ Lien avec la Guadeloupe et les Caraïbes
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  )
}
