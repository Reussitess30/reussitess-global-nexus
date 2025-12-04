import Layout from '../components/Layout'
import Link from 'next/link'

export default function Contact() {
  return (
    <Layout>
      <div style={{
        background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
        minHeight: '100vh',
        padding: '4rem 1rem'
      }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <Link href="/" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1rem',
            display: 'inline-block',
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            ← Retour à l'accueil
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
              background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              📧 Contactez-Nous
            </h1>
            <p style={{
              textAlign: 'center',
              fontSize: '1.2rem',
              color: '#64748b',
              marginBottom: '3rem'
            }}>
              Notre équipe est disponible 24/7 pour vous assister
            </p>

            {/* Moyens de contact */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              {/* Chat en Direct */}
              <div style={{
                background: '#f0f9ff',
                padding: '2rem',
                borderRadius: '15px',
                textAlign: 'center',
                border: '2px solid #3b82f6',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onClick={() => window.dispatchEvent(new Event('openBot'))}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💬</div>
                <h3 style={{ fontSize: '1.3rem', color: '#3b82f6', marginBottom: '0.5rem', fontWeight: '700' }}>
                  Chat en Direct
                </h3>
                <p style={{ color: '#64748b', marginBottom: '1rem' }}>
                  Parlez avec BiblioBot
                </p>
                <div style={{
                  background: '#3b82f6',
                  color: 'white',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  display: 'inline-block'
                }}>
                  Ouvrir le Chat
                </div>
              </div>

              {/* Formulaire Email */}
              <a href="mailto:contact@reussitess-global-nexus.com" style={{
                background: '#f0fdf4',
                padding: '2rem',
                borderRadius: '15px',
                textAlign: 'center',
                border: '2px solid #10b981',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.3s ease',
                display: 'block'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📝</div>
                <h3 style={{ fontSize: '1.3rem', color: '#10b981', marginBottom: '0.5rem', fontWeight: '700' }}>
                  Email
                </h3>
                <p style={{ color: '#64748b', marginBottom: '1rem' }}>
                  Envoyez-nous un message
                </p>
                <div style={{
                  background: '#10b981',
                  color: 'white',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  display: 'inline-block'
                }}>
                  Envoyer un Email
                </div>
              </a>

              {/* Réseaux Sociaux */}
              <div style={{
                background: '#fdf4ff',
                padding: '2rem',
                borderRadius: '15px',
                textAlign: 'center',
                border: '2px solid #8b5cf6'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌐</div>
                <h3 style={{ fontSize: '1.3rem', color: '#8b5cf6', marginBottom: '0.5rem', fontWeight: '700' }}>
                  Réseaux Sociaux
                </h3>
                <p style={{ color: '#64748b', marginBottom: '1rem' }}>
                  Suivez-nous
                </p>
                <div style={{
                  background: '#8b5cf6',
                  color: 'white',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  display: 'inline-block'
                }}>
                  Bientôt Disponible
                </div>
              </div>
            </div>

            {/* Informations Support */}
            <div style={{
              background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
              padding: '2rem',
              borderRadius: '15px',
              color: 'white',
              marginBottom: '2rem'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                💬 Support 24/7 Multilingue
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem',
                textAlign: 'center'
              }}>
                <div>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🕐</div>
                  <div style={{ fontWeight: '600' }}>Horaires</div>
                  <div style={{ opacity: 0.9 }}>24/7</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
                  <div style={{ fontWeight: '600' }}>Réponse</div>
                  <div style={{ opacity: 0.9 }}>{'< 24h'}</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🗣️</div>
                  <div style={{ fontWeight: '600' }}>Langues</div>
                  <div style={{ opacity: 0.9 }}>FR/EN/ES/DE</div>
                </div>
              </div>
            </div>

            {/* FAQ Rapide */}
            <div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                ❓ Questions Fréquentes
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { q: 'Comment accéder aux 26 boutiques Amazon ?', a: 'Cliquez sur le bouton "Accéder au Hub Central" sur la page d\'accueil' },
                  { q: 'Le programme d\'affiliation est-il gratuit ?', a: 'Oui, l\'inscription et l\'utilisation sont 100% gratuites' },
                  { q: 'Dans combien de pays les boutiques sont-elles disponibles ?', a: '14 pays sur 5 continents' },
                  { q: 'Comment installer l\'application PWA ?', a: 'Visitez /pwa-app pour les instructions complètes' },
                  { q: 'BiblioBot parle quelles langues ?', a: 'Français, English, Español et Deutsch' }
                ].map((item, index) => (
                  <details key={index} style={{
                    background: '#f8fafc',
                    padding: '1rem',
                    borderRadius: '10px',
                    border: '1px solid #e2e8f0'
                  }}>
                    <summary style={{
                      fontWeight: '600',
                      color: '#1e293b',
                      cursor: 'pointer',
                      fontSize: '1rem'
                    }}>
                      {item.q}
                    </summary>
                    <p style={{
                      marginTop: '0.5rem',
                      color: '#64748b',
                      paddingLeft: '1rem'
                    }}>
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
