import Layout from '../../components/Layout'
import Link from 'next/link'

export default function HistoireAfrique() {
  return (
    <Layout>
      <div style={{
        background: 'linear-gradient(135deg, #f59e0b 0%, #e11d48 100%)',
        minHeight: '100vh',
        padding: '4rem 1rem'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Link href="/bibliotheque" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1rem',
            display: 'inline-block',
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            ← Retour aux Ressources
          </Link>

          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '20px',
            padding: '3rem',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
          }}>
            <h1 style={{
              textAlign: 'center',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '800',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #f59e0b 0%, #e11d48 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              🌍 Histoire Africaine
            </h1>
            <p style={{
              textAlign: 'center',
              fontSize: '1.2rem',
              color: '#64748b',
              marginBottom: '3rem'
            }}>
              Explorez l'histoire riche et l'héritage culturel de l'Afrique
            </p>

            {/* Introduction */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#f59e0b',
                marginBottom: '1rem'
              }}>
                🏛️ Berceau de l'Humanité
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#475569' }}>
                L'Afrique est le berceau de l'humanité et possède une histoire millénaire fascinante. 
                Des grandes civilisations anciennes aux mouvements d'indépendance, le continent africain 
                a joué un rôle crucial dans l'histoire mondiale et continue d'influencer la culture 
                contemporaine à travers la diaspora et ses contributions.
              </p>
            </div>

            {/* Civilisations Anciennes */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#e11d48',
                marginBottom: '1rem'
              }}>
                👑 Grandes Civilisations Africaines
              </h2>
              <div style={{
                background: '#fef2f2',
                padding: '2rem',
                borderRadius: '15px',
                borderLeft: '4px solid #e11d48'
              }}>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#475569' }}>
                  <li><strong>Égypte Ancienne</strong> : Pyramides, pharaons et hiéroglyphes (3100 av. J.-C.)</li>
                  <li><strong>Royaume de Koush</strong> : Nubie et ses pyramides (1070 av. J.-C.)</li>
                  <li><strong>Empire du Mali</strong> : Mansa Moussa et la richesse légendaire (1235-1670)</li>
                  <li><strong>Royaume du Bénin</strong> : Art et bronze du Nigeria (1180-1897)</li>
                  <li><strong>Empire Songhaï</strong> : Tombouctou, centre intellectuel (1464-1591)</li>
                  <li><strong>Royaume d'Aksoum</strong> : Éthiopie, commerce et christianisme (100-940)</li>
                </ul>
              </div>
            </div>

            {/* Commerce Transatlantique */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#64748b',
                marginBottom: '1rem'
              }}>
                ⚓ Traite Négrière et Diaspora
              </h2>
              <div style={{
                background: '#f8fafc',
                padding: '2rem',
                borderRadius: '15px',
                borderLeft: '4px solid #64748b'
              }}>
                <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#475569', marginBottom: '1rem' }}>
                  La traite transatlantique des esclaves (15e-19e siècles) a déporté des millions d'Africains 
                  vers les Amériques et les Caraïbes, créant la diaspora africaine qui a profondément 
                  influencé la culture mondiale :
                </p>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#475569' }}>
                  <li>Musique : Jazz, Blues, Reggae, Hip-Hop</li>
                  <li>Gastronomie : Influences créoles et afro-américaines</li>
                  <li>Littérature : Mouvement de la Négritude (Césaire, Senghor)</li>
                  <li>Arts : Masques, sculptures et influences artistiques modernes</li>
                </ul>
              </div>
            </div>

            {/* Lutte pour l'Indépendance */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#10b981',
                marginBottom: '1rem'
              }}>
                ✊ Mouvements d'Indépendance
              </h2>
              <div style={{
                background: '#f0fdf4',
                padding: '2rem',
                borderRadius: '15px',
                borderLeft: '4px solid #10b981'
              }}>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#475569' }}>
                  <li><strong>Ghana (1957)</strong> : Premier pays d'Afrique subsaharienne indépendant (Kwame Nkrumah)</li>
                  <li><strong>Algérie (1962)</strong> : Indépendance après 132 ans de colonisation française</li>
                  <li><strong>Afrique du Sud</strong> : Fin de l'apartheid (1994), Nelson Mandela président</li>
                  <li><strong>Mouvement Panafricain</strong> : Unité et solidarité africaine</li>
                </ul>
              </div>
            </div>

            {/* Figures Historiques */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#8b5cf6',
                marginBottom: '1rem'
              }}>
                ⭐ Figures Historiques Majeures
              </h2>
              <div style={{
                background: '#faf5ff',
                padding: '2rem',
                borderRadius: '15px',
                borderLeft: '4px solid #8b5cf6'
              }}>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#475569' }}>
                  <li><strong>Nelson Mandela</strong> : Lutte contre l'apartheid, Prix Nobel de la Paix</li>
                  <li><strong>Patrice Lumumba</strong> : Premier ministre du Congo, héros de l'indépendance</li>
                  <li><strong>Thomas Sankara</strong> : Révolutionnaire burkinabé, "Che Guevara africain"</li>
                  <li><strong>Haile Selassie</strong> : Empereur d'Éthiopie, symbole de résistance</li>
                  <li><strong>Wangari Maathai</strong> : Écologiste kényane, Prix Nobel de la Paix</li>
                </ul>
              </div>
            </div>

            {/* Afrique Contemporaine */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#3b82f6',
                marginBottom: '1rem'
              }}>
                🚀 Afrique Contemporaine
              </h2>
              <div style={{
                background: '#eff6ff',
                padding: '2rem',
                borderRadius: '15px',
                borderLeft: '4px solid #3b82f6'
              }}>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#475569' }}>
                  <li><strong>Démographie</strong> : Population la plus jeune au monde, potentiel énorme</li>
                  <li><strong>Technologie</strong> : Révolution du mobile money (M-Pesa) et start-ups</li>
                  <li><strong>Culture</strong> : Afrobeats, Nollywood, mode africaine mondiale</li>
                  <li><strong>Union Africaine</strong> : Coopération et développement continental</li>
                </ul>
              </div>
            </div>

            {/* Ressources */}
            <div style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #e11d48 100%)',
              padding: '2rem',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                📚 Ressources Documentaires
              </h3>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a 
                  href="https://unesdoc.unesco.org/ark:/48223/pf0000184265" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    background: 'white',
                    color: '#f59e0b',
                    padding: '0.8rem 2rem',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    display: 'inline-block'
                  }}>
                  📖 Histoire de l'Afrique (UNESCO)
                </a>
                <Link 
                  href="/bibliotheque" 
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    padding: '0.8rem 2rem',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    display: 'inline-block',
                    border: '2px solid white'
                  }}>
                  ← Retour aux Ressources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
