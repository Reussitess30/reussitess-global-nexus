import Layout from '../components/Layout'
import BotAssistant from '../components/BotAssistant'
import Link from 'next/link'

export default function Home() {
  // VRAIS LIENS AMAZON D'AFFILIATION
  const boutiques = [
    // Boutiques Personnelles (14)
    { nom: "🇺🇸 États-Unis", type: "Personnel", lien: "https://www.amazon.com/shop/amourguadeloupe" },
    { nom: "🇮🇹 Italie", type: "Personnel", lien: "https://www.amazon.it/shop/amourguadeloupe" },
    { nom: "🇫🇷 France", type: "Personnel", lien: "https://www.amazon.fr/shop/amourguadeloupe" },
    { nom: "🇪🇸 Espagne", type: "Personnel", lien: "https://www.amazon.es/shop/amourguadeloupe" },
    { nom: "🇩🇪 Allemagne", type: "Personnel", lien: "https://www.amazon.de/shop/amourguadeloupe" },
    { nom: "🇨🇦 Canada", type: "Personnel", lien: "https://www.amazon.ca/shop/amourguadeloupe" },
    { nom: "🇮🇳 Inde", type: "Personnel", lien: "https://www.amazon.in/shop/amourguadeloupe" },
    { nom: "🇳🇱 Pays-Bas", type: "Personnel", lien: "https://www.amazon.nl/shop/amourguadeloupe" },
    { nom: "🇸🇪 Suède", type: "Personnel", lien: "https://www.amazon.se/shop/amourguadeloupe" },
    { nom: "🇸🇬 Singapour", type: "Personnel", lien: "https://www.amazon.sg/shop/amourguadeloupe" },
    { nom: "🇬🇧 Royaume-Uni", type: "Personnel", lien: "https://www.amazon.co.uk/shop/amourguadeloupe" },
    { nom: "🇦🇺 Australie", type: "Personnel", lien: "https://www.amazon.com.au/shop/amourguadeloupe" },
    { nom: "🇧🇪 Belgique", type: "Personnel", lien: "https://www.amazon.com.be/shop/amourguadeloupe" },
    { nom: "🇧🇷 Brésil", type: "Personnel", lien: "https://www.amazon.com.br/shop/amourguadeloupe" },

    // Boutiques Influenceurs (12)
    { nom: "🇦🇺 Australie", type: "Influenceur", lien: "https://www.amazon.com.au/shop/influencer-fb942837" },
    { nom: "🇺🇸 États-Unis", type: "Influenceur", lien: "https://www.amazon.com/shop/influencer-fb942837" },
    { nom: "🇬🇧 Royaume-Uni", type: "Influenceur", lien: "https://www.amazon.co.uk/shop/influencer-fb942837" },
    { nom: "🇮🇳 Inde", type: "Influenceur", lien: "https://www.amazon.in/shop/influencer-fb942837" },
    { nom: "🇸🇪 Suède", type: "Influenceur", lien: "https://www.amazon.se/shop/influencer-fb942837" },
    { nom: "🇸🇬 Singapour", type: "Influenceur", lien: "https://www.amazon.sg/shop/influencer-fb942837" },
    { nom: "🇧🇪 Belgique", type: "Influenceur", lien: "https://www.amazon.com.be/shop/influencer-fb942837" },
    { nom: "🇪🇸 Espagne", type: "Influenceur", lien: "https://www.amazon.es/shop/influencer-fb942837" },
    { nom: "🇩🇪 Allemagne", type: "Influenceur", lien: "https://www.amazon.de/shop/influencer-fb942837" },
    { nom: "🇨🇦 Canada", type: "Influenceur", lien: "https://www.amazon.ca/shop/influencer-fb942837" },
    { nom: "🇳🇱 Pays-Bas", type: "Influenceur", lien: "https://www.amazon.nl/shop/influencer-fb942837" },
    { nom: "🇫🇷 France", type: "Influenceur", lien: "https://www.amazon.fr/shop/influencer-fb942837" }
  ]

  return (
    <Layout>
      {/* Hero Section Compact - Première chose visible */}
      <div style={{
        minHeight: '60vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '3rem 1rem'
      }}>
        {/* Formes décoratives */}
        <div style={{
          position: 'absolute',
          top: '5%',
          left: '5%',
          width: '200px',
          height: '200px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '5%',
          right: '5%',
          width: '250px',
          height: '250px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }} />

        <div className="container" style={{
          textAlign: 'center',
          color: 'white',
          zIndex: 1,
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Globe animé */}
          <div style={{
            fontSize: '4rem',
            marginBottom: '1.5rem',
            animation: 'float 3s ease-in-out infinite'
          }}>
            🌍
          </div>

          {/* Titre */}
          <h1 style={{
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)'
          }}>
            REUSSITESS® GLOBAL NEXUS
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            marginBottom: '2rem',
            opacity: 0.95
          }}>
            🏝️ Guadeloupe - Terre de Champions 🏆
          </p>

          {/* Statistiques en ligne */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '2rem'
          }}>
            {[
              { num: '26', label: 'Boutiques', icon: '🛍️' },
              { num: '14', label: 'Pays', icon: '🌍' },
              { num: '5', label: 'Continents', icon: '🗺️' }
            ].map((stat, i) => (
              <div key={i} style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                padding: '1rem 1.5rem',
                borderRadius: '15px',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>{stat.icon}</span>
                <span style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>{stat.num}</span>
                <span style={{ fontSize: '0.9rem', marginLeft: '0.3rem', opacity: 0.9 }}>{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Boutons d'action */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '2rem'
          }}>
            <a href="#boutiques" style={{
              background: 'linear-gradient(135deg, #e11d48, #f59e0b)',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              boxShadow: '0 8px 25px rgba(225, 29, 72, 0.4)',
              transition: 'all 0.3s ease',
              display: 'inline-block'
            }}
            className="btn-primary">
              🚀 VOIR LES 26 BOUTIQUES
            </a>

            <Link href="/affiliation" style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              border: '2px solid white',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              display: 'inline-block'
            }}
            className="btn-secondary">
              🤝 Programme Affiliation
            </Link>

            <a 
              href="https://reussitess-global-nexus-jfgk-git-copilo-3f98a8-porinus-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                color: 'white',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                boxShadow: '0 8px 25px rgba(245, 87, 108, 0.4)',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                border: '2px solid rgba(255, 255, 255, 0.3)'
              }}
              className="btn-alternative">
              ✨ Version Alternative
            </a>
          </div>

          {/* Scroll indicator */}
          <div style={{
            marginTop: '2rem',
            animation: 'bounce 2s ease-in-out infinite'
          }}>
            <div style={{ fontSize: '1.5rem', opacity: 0.7 }}>⬇️</div>
          </div>
        </div>
      </div>

      {/* Section 26 Boutiques - DIRECTEMENT VISIBLE */}
      <div id="boutiques" style={{
        background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
        padding: '5rem 0',
        minHeight: '100vh'
      }}>
        <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #f59e0b 0%, #e11d48 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            🛍️ MES 26 BOUTIQUES AMAZON
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            color: '#94a3b8',
            marginBottom: '4rem'
          }}>
            Cliquez sur une boutique pour découvrir mes produits favoris
          </p>

          {/* Boutiques Personnelles */}
          <h3 style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            color: '#10b981',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            👤 Boutiques Personnelles (14)
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem'
          }}>
            {boutiques.filter(b => b.type === 'Personnel').map((boutique, index) => (
              <div key={index} style={{
                background: 'rgba(16, 185, 129, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                borderRadius: '16px',
                padding: '1.8rem',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              className="boutique-card">
                <h3 style={{
                  color: 'white',
                  marginBottom: '1.2rem',
                  fontSize: '1.3rem',
                  fontWeight: '600'
                }}>
                  {boutique.nom}
                </h3>
                <a 
                  href={boutique.lien} 
                  target="_blank" 
                  rel="noopener noreferrer nofollow sponsored"
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #10b981, #3b82f6)',
                    color: 'white',
                    padding: '0.9rem 1.8rem',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    width: '100%',
                    fontSize: '1rem'
                  }}
                  className="boutique-btn">
                  🛍️ Visiter la Boutique
                </a>
                <div style={{
                  marginTop: '0.8rem',
                  fontSize: '0.75rem',
                  opacity: '0.7',
                  color: '#fbbf24'
                }}>
                  🔒 Lien d'affiliation sécurisé
                </div>
              </div>
            ))}
          </div>

          {/* Boutiques Influenceurs */}
          <h3 style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            color: '#8b5cf6',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            ⭐ Boutiques Influenceur (12)
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {boutiques.filter(b => b.type === 'Influenceur').map((boutique, index) => (
              <div key={index} style={{
                background: 'rgba(139, 92, 246, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                borderRadius: '16px',
                padding: '1.8rem',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              className="boutique-card">
                <h3 style={{
                  color: 'white',
                  marginBottom: '1.2rem',
                  fontSize: '1.3rem',
                  fontWeight: '600'
                }}>
                  {boutique.nom}
                </h3>
                <a 
                  href={boutique.lien} 
                  target="_blank" 
                  rel="noopener noreferrer nofollow sponsored"
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                    color: 'white',
                    padding: '0.9rem 1.8rem',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    width: '100%',
                    fontSize: '1rem'
                  }}
                  className="boutique-btn">
                  🛍️ Visiter la Boutique
                </a>
                <div style={{
                  marginTop: '0.8rem',
                  fontSize: '0.75rem',
                  opacity: '0.7',
                  color: '#fbbf24'
                }}>
                  🔒 Lien d'affiliation sécurisé
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Comment ça fonctionne */}
      <div style={{
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
        padding: '5rem 0'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '800',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #f59e0b 0%, #e11d48 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            ❓ COMMENT ÇA FONCTIONNE ?
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem'
          }}>
            {[
              { num: '1️⃣', title: 'Cliquez', desc: 'Choisissez une boutique Amazon parmi les 26', color: '#f59e0b' },
              { num: '2️⃣', title: 'Achetez', desc: 'Faites vos achats normalement sur Amazon', color: '#3b82f6' },
              { num: '3️⃣', title: 'Gagnez', desc: 'Je reçois une commission sans frais pour vous', color: '#10b981' }
            ].map((step, i) => (
              <div key={i} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '2.5rem',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              className="step-card">
                <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>{step.num}</div>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: step.color
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  color: '#cbd5e1',
                  margin: 0
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Services Rapides */}
      <div style={{
        background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
        padding: '5rem 0'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '800',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            📱 Nos Services
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { icon: '📊', title: 'Dashboard', desc: 'Analytics en temps réel', link: '/analytics', color: '#3b82f6' },
              { icon: '📚', title: 'Ressources', desc: 'Culture & Patrimoine', link: '/bibliotheque', color: '#8b5cf6' },
              { icon: '🛠️', title: 'Outils', desc: 'Calculateurs TVA', link: '/bibliotheque/outils', color: '#ec4899' },
              { icon: '📱', title: 'App PWA', desc: 'Installer l\'app', link: '/pwa-app', color: '#10b981' }
            ].map((service, i) => (
              <Link key={i} href={service.link} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              className="service-card-mini">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  marginBottom: '0.5rem',
                  color: service.color
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#94a3b8',
                  margin: 0
                }}>
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bot Assistant */}
      <BotAssistant />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(225, 29, 72, 0.5);
        }

        .btn-secondary:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.25);
        }

        .btn-alternative:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(245, 87, 108, 0.5);
        }

        .boutique-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.3);
        }

        .boutique-btn:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
        }

        .step-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.08);
        }

        .service-card-mini:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }

        @media (max-width: 768px) {
          .boutique-card, .step-card, .service-card-mini {
            margin-bottom: 0;
          }
        }
      `}</style>
    </Layout>
  )
}
