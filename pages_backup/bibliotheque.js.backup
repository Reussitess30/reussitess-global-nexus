import Layout from '../components/Layout'
import Link from 'next/link'

export default function Bibliotheque() {
  const ressources = [
    {
      title: '🌴 Culture Guadeloupéenne',
      description: 'Découvrez la richesse culturelle de la Guadeloupe',
      link: '/ressources/culture-guadeloupe',
      color: '#10b981'
    },
    {
      title: '🌍 Histoire Africaine',
      description: 'Explorez l\'histoire et l\'héritage africain',
      link: '/ressources/histoire-afrique',
      color: '#f59e0b'
    },
    {
      title: '🏝️ Patrimoine Martiniquais',
      description: 'Le patrimoine culturel et historique de la Martinique',
      link: '/ressources/patrimoine-martinique',
      color: '#ef4444'
    }
  ];

  return (
    <Layout>
      <div style={{
        minHeight: '80vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '4rem 2rem'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            marginBottom: '1.5rem',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)'
          }}>
            📚 Ressources Culturelles
          </h1>
          
          <p style={{
            color: 'rgba(255,255,255,0.9)',
            textAlign: 'center',
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            marginBottom: '3rem',
            maxWidth: '800px',
            margin: '0 auto 3rem auto'
          }}>
            Explorez nos ressources sur la culture guadeloupéenne, l'histoire africaine et le patrimoine martiniquais
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}>
            {ressources.map((ressource, i) => (
              <Link 
                key={i}
                href={ressource.link}
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  textAlign: 'center',
                  textDecoration: 'none',
                  color: 'white',
                  transition: 'all 0.3s ease',
                  display: 'block'
                }}
                className="ressource-card"
              >
                <h2 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'white'
                }}>
                  {ressource.title}
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  opacity: 0.9,
                  margin: 0
                }}>
                  {ressource.description}
                </p>
              </Link>
            ))}
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: '3rem'
          }}>
            <Link href="/" style={{
              display: 'inline-block',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '2px solid white',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            className="btn-retour">
              ← Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ressource-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.3);
          background: rgba(255, 255, 255, 0.25);
        }

        .btn-retour:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.05);
        }
      `}</style>
    </Layout>
  )
}
