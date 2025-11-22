import Layout from '../components/Layout'
import BotAssistantVocal from '../components/BotAssistantVocal'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Première chose visible */}
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Formes décoratives en arrière-plan */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(100px)'
        }} />

        <div className="container" style={{
          textAlign: 'center',
          color: 'white',
          zIndex: 1,
          padding: '2rem'
        }}>
          {/* Logo / Icône */}
          <div style={{
            fontSize: '6rem',
            marginBottom: '2rem',
            animation: 'float 3s ease-in-out infinite'
          }}>
            🌍
          </div>

          {/* Titre principal */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: '800',
            marginBottom: '1.5rem',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
            lineHeight: '1.2'
          }}>
            REUSSITESS® GLOBAL NEXUS
          </h1>

          {/* Sous-titre */}
          <p style={{
            fontSize: 'clamp(1.2rem, 3vw, 2rem)',
            marginBottom: '1rem',
            opacity: 0.95,
            fontWeight: '300'
          }}>
            Votre Portail E-Commerce International
          </p>

          {/* Message du bot */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '20px',
            padding: '2rem',
            maxWidth: '600px',
            margin: '3rem auto',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤖</div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              Je suis là pour vous !
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              marginBottom: '0',
              lineHeight: '1.6'
            }}>
              Bonjour ! Je suis BiblioBot, votre assistant personnel multilingue. 
              Je vous guide à travers nos 26 boutiques Amazon dans 14 pays ! 🌐
            </p>
          </div>

          {/* Statistiques impressionnantes */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '2rem',
            maxWidth: '800px',
            margin: '3rem auto',
            padding: '0 1rem'
          }}>
            {[
              { number: '26', label: 'Boutiques Amazon', icon: '🛍️' },
              { number: '14', label: 'Pays', icon: '🌍' },
              { number: '5', label: 'Continents', icon: '🗺️' },
              { number: '4', label: 'Langues', icon: '🗣️' }
            ].map((stat, i) => (
              <div key={i} style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '15px',
                padding: '1.5rem 1rem',
                transition: 'transform 0.3s ease'
              }}
              className="stat-card">
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Boutons d'action principaux */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '3rem'
          }}>
            <Link href="/hub-central" style={{
              background: 'white',
              color: '#667eea',
              padding: '1.2rem 3rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
              display: 'inline-block'
            }}
            className="btn-primary">
              🚀 Accéder au Hub Central
            </Link>

            <Link href="/affiliation" style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              border: '2px solid white',
              color: 'white',
              padding: '1.2rem 3rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              display: 'inline-block'
            }}
            className="btn-secondary">
              🤝 Programme Affiliation
            </Link>
          </div>

          {/* Scroll indicator */}
          <div style={{
            marginTop: '4rem',
            animation: 'bounce 2s ease-in-out infinite'
          }}>
            <div style={{ fontSize: '2rem', opacity: 0.7 }}>⬇️</div>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.8 }}>
              Découvrez nos services
            </p>
          </div>
        </div>
      </div>

      {/* Section Services */}
      <div style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)',
        padding: '6rem 0'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Nos Services
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            color: '#64748b',
            marginBottom: '4rem',
            maxWidth: '600px',
            margin: '0 auto 4rem auto'
          }}>
            Une plateforme complète pour votre réussite en e-commerce international
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem'
          }}>
            {[
              {
                icon: '📊',
                title: 'Dashboard Analytics',
                description: 'Suivez vos performances en temps réel avec des statistiques détaillées',
                link: '/analytics',
                color: '#3b82f6'
              },
              {
                icon: '📚',
                title: 'Bibliothèque Mondiale',
                description: 'Guides complets sur 14 pays, TVA, réglementations et formations',
                link: '/bibliotheque',
                color: '#8b5cf6'
              },
              {
                icon: '🛠️',
                title: 'Outils & Calculateurs',
                description: 'Calculateurs TVA, marges, commissions Amazon et simulateurs',
                link: '/bibliotheque/outils',
                color: '#ec4899'
              },
              {
                icon: '🤝',
                title: 'Programme Affiliation',
                description: 'Rejoignez notre réseau et gagnez des commissions attractives',
                link: '/affiliation',
                color: '#f59e0b'
              },
              {
                icon: '📱',
                title: 'Application PWA',
                description: 'Installez notre app pour un accès hors ligne et rapide',
                link: '/pwa-app',
                color: '#10b981'
              },
              {
                icon: '🌍',
                title: '26 Boutiques Amazon',
                description: 'Accès direct à toutes nos boutiques dans 14 pays différents',
                link: '/hub-central#boutiques',
                color: '#06b6d4'
              }
            ].map((service, i) => (
              <Link key={i} href={service.link} style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2.5rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                border: '1px solid #f1f5f9'
              }}
              className="service-card">
                <div style={{
                  fontSize: '3.5rem',
                  marginBottom: '1.5rem',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                }}>
                  {service.icon}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: service.color
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#64748b',
                  margin: 0
                }}>
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bot Assistant Vocal - Toujours visible en bas à droite */}
      <BotAssistantVocal />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(102, 126, 234, 0.4);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-3px);
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
        }

        @media (max-width: 768px) {
          .container {
            padding: 1rem !important;
          }
        }
      `}</style>
    </Layout>
  )
}
