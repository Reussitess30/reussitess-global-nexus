'use client'

import { useState } from 'react'

export default function IAPassport() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const features = [
    { 
      icon: '🤖', 
      title: '100+ IA Connectées', 
      desc: 'Accès unifié aux meilleures IA mondiales',
      stats: ['100+ Modèles', '50K Users', '75% Économie'],
      links: [
        { text: 'TypingMind', url: 'https://typingmind.com' },
        { text: 'Magai', url: 'https://magai.co' },
        { text: 'OpenAI', url: 'https://platform.openai.com' }
      ]
    },
    { 
      icon: '🌐', 
      title: '195 Langues', 
      desc: 'Communication sans frontières',
      stats: ['195 Langues', '4M Users', 'Temps Réel'],
      links: [
        { text: 'Wordly AI', url: 'https://wordly.ai' },
        { text: 'Interprefy', url: 'https://interprefy.com' },
        { text: 'Google Translate', url: 'https://translate.google.com' }
      ]
    },
    { 
      icon: '🔐', 
      title: 'Blockchain NFT', 
      desc: 'Identité digitale certifiée',
      stats: ['NFT Unique', 'AES-256', 'RGPD'],
      links: [
        { text: 'Polygon ID', url: 'https://polygon.technology/polygon-id' },
        { text: 'Worldcoin', url: 'https://worldcoin.org' },
        { text: 'ENS', url: 'https://ens.domains' }
      ]
    },
    { 
      icon: '💎', 
      title: 'REUSSITESS Tokens', 
      desc: 'Monnaie universelle IA',
      stats: ['75% Économie', '1 Token = 1h', 'Revendable'],
      links: [
        { text: 'Etherscan', url: 'https://etherscan.io' },
        { text: 'Polygon Scan', url: 'https://polygonscan.com' },
        { text: 'CoinGecko', url: 'https://coingecko.com' },
        { text: 'ACHETER LE TOKEN (QuickSwap)', url: 'https://dapp.quickswap.exchange/swap/best/ETH/0xB37531727fC07c6EED4f97F852A115B428046EB2?chainId=137' }
      ]
    },
    { 
      icon: '🎯', 
      title: 'Assistant Personnel', 
      desc: 'IA qui apprend de vous',
      stats: ['24/7 Actif', '∞ Projets', '15h/sem'],
      links: [
        { text: 'Notion AI', url: 'https://notion.so/product/ai' },
        { text: 'Personal AI', url: 'https://personal.ai' },
        { text: 'Rewind AI', url: 'https://rewind.ai' }
      ]
    },
    { 
      icon: '⚡', 
      title: 'Hub Universel', 
      desc: 'Toute l\'IA en 1 clic',
      stats: ['1 Interface', '10x Vitesse', 'API Ouverte'],
      links: [
        { text: 'Zapier', url: 'https://zapier.com' },
        { text: 'Make', url: 'https://make.com' },
        { text: 'n8n', url: 'https://n8n.io' }
      ]
    },
    { 
      icon: '🛒', 
      title: 'Acheter REUSS', 
      desc: 'Obtenez vos tokens maintenant',
      stats: ['QuickSwap', 'Instant', 'Polygon'],
      links: [
        { text: 'Acheter sur QuickSwap', url: 'https://dapp.quickswap.exchange/swap/best/ETH/0xB37531727fC07c6EED4f97F852A115B428046EB2?chainId=137' },
        { text: 'Voir le Pool', url: 'https://info.quickswap.exchange/#/pair/0x1d2e88A55CBBAB68237aa10781a5e00335Af9f9c' },
        { text: 'PolygonScan', url: 'https://polygonscan.com/token/0xB37531727fC07c6EED4f97F852A115B428046EB2' }
      ]
    },
    { 
      icon: '⚛️', 
      title: 'Quantum Ecosystem', 
      desc: '200 IA gèrent votre liquidité intelligemment',
      stats: ['200 IA', '14 Pays', 'Auto-Pilot'],
      links: [
        { text: '🛡️ Quantum Guardian - Protection 24/7', url: '/quantum/guardian' },
        { text: '📊 Price Optimizer - Stabilité Prix', url: '/quantum/optimizer' },
        { text: '💰 Yield Maximizer - APY 40-60%', url: '/quantum/yield' },
        { text: '🌍 Global Bridge - Transferts Instant', url: '/quantum/bridge' },
        { text: '🔮 Oracle Network - Prédictions IA', url: '/quantum/oracle' },
        { text: '🗳️ DAO Intelligence - Gouvernance Auto', url: '/quantum/dao' },
        { text: '🎮 Liquidity Wars - Compétition 14 Pays', url: '/quantum/wars' }
      ],
      special: true
    },
    { 
      icon: '🧠', 
      title: 'AI SuperHub', 
      desc: 'Toutes vos IA en une interface unifiée',
      stats: ['Multi-Model', 'Pay Once', 'Use All'],
      links: [
        { text: 'ChatGPT + Claude + Gemini', url: '/superhub' },
        { text: 'Midjourney + DALL-E + Stable Diffusion', url: '/superhub/image' },
        { text: 'Whisper + ElevenLabs + Murf', url: '/superhub/voice' },
        { text: 'Runway + Pika + Gen-2', url: '/superhub/video' }
      ]
    },
    { 
      icon: '🎨', 
      title: 'AI Creative Studio', 
      desc: 'Studio créatif 100% IA',
      stats: ['Images', 'Vidéos', 'Musique'],
      links: [
        { text: 'Générer Images Pro', url: '/creative/images' },
        { text: 'Créer Vidéos Virales', url: '/creative/videos' },
        { text: 'Composer Musique', url: '/creative/music' },
        { text: 'Design Logos & Brands', url: '/creative/design' }
      ]
    },
    { 
      icon: '💼', 
      title: 'AI Business Suite', 
      desc: 'Automatisez votre business',
      stats: ['Marketing', 'Sales', 'Support'],
      links: [
        { text: 'AI Marketing Agent', url: '/business/marketing' },
        { text: 'AI Sales Assistant', url: '/business/sales' },
        { text: 'AI Customer Support', url: '/business/support' },
        { text: 'AI Analytics Dashboard', url: '/business/analytics' }
      ]
    },
    { 
      icon: '🎓', 
      title: 'AI Learning Platform', 
      desc: 'Apprenez n\'importe quoi avec l\'IA',
      stats: ['∞ Cours', 'Perso', 'Certifs'],
      links: [
        { text: 'Cours Personnalisés IA', url: '/learn/courses' },
        { text: 'Tuteur IA 24/7', url: '/learn/tutor' },
        { text: 'Certifications Reconnues', url: '/learn/certs' },
        { text: 'Projets Pratiques', url: '/learn/projects' }
      ]
    }
  ]

  return (
    <div style={{ minHeight: '100vh', background: '#0f172a' }}>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        padding: '4rem 1rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(100px)'
        }} />

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ fontSize: '8rem', marginBottom: '2rem' }}>🌍</div>

          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            padding: '0.75rem 2rem',
            borderRadius: '50px',
            marginBottom: '2rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            color: 'white',
            boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4)'
          }}>
            🇬🇵 MADE IN GUADELOUPE
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: '900',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-2px'
          }}>
            IA PASSPORT MONDIAL
          </h1>

          <p style={{
            fontSize: 'clamp(1.2rem, 3vw, 2rem)',
            color: '#94a3b8',
            marginBottom: '3rem',
            fontWeight: '600'
          }}>
            Le Premier Passeport Universel IA
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem',
            maxWidth: '1100px',
            margin: '0 auto 4rem'
          }}>
            {features.map((feature, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedFeature(selectedFeature === i ? null : i)}
                style={{
                  background: feature.special 
                    ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%)'
                    : selectedFeature === i 
                      ? 'rgba(16, 185, 129, 0.15)' 
                      : 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: feature.special
                    ? '2px solid #8b5cf6'
                    : selectedFeature === i 
                      ? '2px solid #10b981' 
                      : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '2rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                className="feature-card">
                
                {feature.special && (
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    boxShadow: '0 5px 15px rgba(139, 92, 246, 0.5)'
                  }}>
                    🚀 NOUVEAU
                  </div>
                )}
                
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  fontWeight: '700', 
                  color: 'white',
                  marginBottom: '0.5rem' 
                }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#94a3b8', marginBottom: '1rem' }}>
                  {feature.desc}
                </p>

                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  marginBottom: '1rem'
                }}>
                  {feature.stats.map((stat, idx) => (
                    <span key={idx} style={{
                      background: feature.special 
                        ? 'rgba(139, 92, 246, 0.3)'
                        : 'rgba(16, 185, 129, 0.2)',
                      color: feature.special ? '#a78bfa' : '#10b981',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '10px',
                      fontSize: '0.75rem',
                      fontWeight: 'bold'
                    }}>
                      {stat}
                    </span>
                  ))}
                </div>

                {selectedFeature === i && (
                  <div style={{
                    marginTop: '1.5rem',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1rem' }}>
                      🔗 {feature.special ? 'Modules disponibles:' : 'Liens utiles:'}
                    </p>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}>
                      {feature.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: feature.special ? '#a78bfa' : '#10b981',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            padding: '0.5rem',
                            background: feature.special 
                              ? 'rgba(139, 92, 246, 0.15)'
                              : 'rgba(16, 185, 129, 0.1)',
                            borderRadius: '8px',
                            transition: 'all 0.3s ease'
                          }}
                          className="feature-link"
                        >
                          → {link.text}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <div style={{
                  color: feature.special ? '#a78bfa' : '#10b981',
                  fontSize: '0.85rem',
                  fontWeight: 'bold',
                  marginTop: '1rem'
                }}>
                  {selectedFeature === i ? '✕ Fermer' : '👆 Voir détails'}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
            backdropFilter: 'blur(20px)',
            border: '2px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '30px',
            padding: '3rem 2rem',
            maxWidth: '700px',
            margin: '0 auto',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              fontWeight: '800',
              color: 'white',
              marginBottom: '1rem'
            }}>
              🚀 LANCEMENT 2025
            </h2>
            
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: '#94a3b8',
              marginBottom: '2rem'
            }}>
              Rejoignez la liste BETA
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} style={{
                display: 'flex',
                gap: '1rem',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <input
                  type="email"
                  placeholder="Votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    maxWidth: '400px',
                    padding: '1rem 1.5rem',
                    borderRadius: '50px',
                    border: '2px solid rgba(16, 185, 129, 0.3)',
                    background: 'rgba(15, 23, 42, 0.8)',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: '1rem 3rem',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4)'
                  }}
                >
                  ✨ Rejoindre
                </button>
              </form>
            ) : (
              <div style={{
                padding: '2rem',
                background: 'rgba(16, 185, 129, 0.2)',
                borderRadius: '20px'
              }}>
                <div style={{ fontSize: '4rem' }}>🎉</div>
                <h3 style={{ fontSize: '1.5rem', color: '#10b981', fontWeight: 'bold' }}>
                  Inscrit !
                </h3>
              </div>
            )}
          </div>

          <div style={{
            marginTop: '5rem',
            paddingTop: '3rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h3 style={{ fontSize: '2rem', fontWeight: '800', color: 'white' }}>
              REUSSITESS®971
            </h3>
            <p style={{ color: '#10b981', fontSize: '1.2rem', fontWeight: 'bold', marginTop: '0.5rem' }}>
              POSITIVITÉ À L'INFINI 🎯
            </p>
            <p style={{ color: '#64748b', marginTop: '1rem' }}>BOUDOUM</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }
        .feature-link:hover {
          background: rgba(16, 185, 129, 0.2);
          transform: translateX(5px);
        }
      `}</style>
    </div>
  )
}
