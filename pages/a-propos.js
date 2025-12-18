import Layout from '../components/Layout'
import Link from 'next/link'

export default function APropos() {
  return (
    <Layout>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '4rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '30px',
          padding: '3rem',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '900',
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            À Propos de REUSSITESS®971
          </h1>

          <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '700', marginTop: '2rem', color: '#1e293b' }}>
              🇬🇵 Notre Mission
            </h2>
            <p>
              REUSSITESS®971 est une plateforme innovante née en <strong>Guadeloupe</strong>, territoire français d'excellence dans les Caraïbes. 
              Notre mission est de connecter le monde francophone à travers la culture, l'éducation et l'innovation.
            </p>

            <h2 style={{ fontSize: '2rem', fontWeight: '700', marginTop: '2rem', color: '#1e293b' }}>
              🌍 Notre Réseau
            </h2>
            <p>
              Nous opérons un réseau de <strong>26 boutiques Amazon affiliées</strong> dans 14 pays :
            </p>
            <ul style={{ marginLeft: '2rem' }}>
              <li>🇺🇸 États-Unis</li>
              <li>🇫🇷 France</li>
              <li>🇩🇪 Allemagne</li>
              <li>🇮🇹 Italie</li>
              <li>🇪🇸 Espagne</li>
              <li>🇨🇦 Canada</li>
              <li>🇬🇧 Royaume-Uni</li>
              <li>🇦🇺 Australie</li>
              <li>Et bien d'autres...</li>
            </ul>

            <h2 style={{ fontSize: '2rem', fontWeight: '700', marginTop: '2rem', color: '#1e293b' }}>
              📚 Notre Bibliothèque Mondiale
            </h2>
            <p>
              Nous proposons une bibliothèque culturelle francophone couvrant <strong>26 pays sur 5 continents</strong> :
              DOM-TOM, Afrique, Europe, Amériques, Asie-Pacifique, Maghreb.
            </p>

            <h2 style={{ fontSize: '2rem', fontWeight: '700', marginTop: '2rem', color: '#1e293b' }}>
              🎓 Nos Quiz Éducatifs
            </h2>
            <p>
              <strong>25 quiz thématiques</strong> pour enrichir vos connaissances : Histoire, Géographie, Sciences, 
              Art, Musique, Technologie, et bien plus encore.
            </p>

            <h2 style={{ fontSize: '2rem', fontWeight: '700', marginTop: '2rem', color: '#1e293b' }}>
              🚀 Innovation IA Passport
            </h2>
            <p>
              Nous développons <strong>IA PASSPORT MONDIAL</strong>, le premier passeport universel connectant 100+ 
              intelligences artificielles avec traduction en 195 langues et sécurité blockchain.
            </p>

            <h2 style={{ fontSize: '2rem', fontWeight: '700', marginTop: '2rem', color: '#1e293b' }}>
              💪 Nos Valeurs
            </h2>
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '2rem',
              borderRadius: '20px',
              marginTop: '1rem'
            }}>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
                EXCELLENCE • INNOVATION • SUCCÈS
              </p>
              <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
                POSITIVITÉ À L'INFINI 🎯
              </p>
              <p style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
                BOUDOUM
              </p>
            </div>

            <h2 style={{ fontSize: '2rem', fontWeight: '700', marginTop: '2rem', color: '#1e293b' }}>
              📧 Contact
            </h2>
            <p>
              <strong>Entrepreneur :</strong> Porinus (@reussitess)<br/>
              <strong>Origine :</strong> Guadeloupe 🇬🇵 - Terres de Champions<br/>
              <strong>Statut :</strong> Auto-entrepreneur IT & Amazon Influencer
            </p>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
              <Link href="/" style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.1rem'
              }}>
                ← Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
