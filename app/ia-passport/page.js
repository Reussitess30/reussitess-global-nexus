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
      content: 'TypingMind, Magai, ChatGPT, Claude, Gemini, Perplexity. Économie 75% vs abonnements séparés.',
      stats: ['100+ Modèles', '1 Interface', '75% Économie']
    },
    { 
      icon: '🌐', 
      title: '195 Langues', 
      desc: 'Communication sans frontières',
      content: 'Wordly (4M users), Interprefy (6000+ pairs), Google Cloud Translation. Temps réel.',
      stats: ['195 Langues', '3000+ Paires', 'Temps Réel']
    },
    { 
      icon: '🔐', 
      title: 'Blockchain NFT', 
      desc: 'Identité digitale certifiée',
      content: 'Polygon ID, Worldcoin, ENS. AES-256, NFT unique, biométrie, anti-deepfake, RGPD.',
      stats: ['NFT Unique', 'AES-256', 'RGPD']
    },
    { 
      icon: '💎', 
      title: 'REUSSITESS Tokens', 
      desc: 'Monnaie universelle IA',
      content: '1 token = 1h IA. ChatGPT $20 + Claude $20 + Gemini $20 = $60 → Économie 75%.',
      stats: ['75% Économie', '1 Token = 1h', 'Revendable']
    },
    { 
      icon: '🎯', 
      title: 'Assistant Personnel', 
      desc: 'IA qui apprend de vous',
      content: 'Magai (80K users). Se souvient de tout. Gain 15h/semaine.',
      stats: ['24/7 Actif', '∞ Projets', '15h/sem']
    },
    { 
      icon: '⚡', 
      title: 'Hub Universel', 
      desc: 'Toute l\'IA en 1 clic',
      content: 'Workflows automatisés, API complète, extensions, mode hors-ligne.',
      stats: ['1 Interface', '10x Vitesse', 'API Ouverte']
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem',
            maxWidth: '1000px',
            margin: '0 auto 4rem'
          }}>
            {features.map((feature, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedFeature(selectedFeature === i ? null : i)}
                style={{
                  background: selectedFeature === i 
                    ? 'rgba(16, 185, 129, 0.15)' 
                    : 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: selectedFeature === i 
                    ? '2px solid #10b981' 
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '2rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
                <h3 style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: '700', 
                  color: 'white',
                  marginBottom: '0.5rem' 
                }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '1rem' }}>
                  {feature.desc}
                </p>
                {selectedFeature === i && (
                  <div style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    background: 'rgba(16, 185, 129, 0.1)',
                    borderRadius: '10px',
                    fontSize: '0.9rem',
                    color: '#cbd5e1',
                    textAlign: 'left'
                  }}>
                    {feature.content}
                  </div>
                )}
                <div style={{
                  color: '#10b981',
                  fontSize: '0.85rem',
                  fontWeight: 'bold',
                  marginTop: '0.5rem'
                }}>
                  {selectedFeature === i ? '📖 Fermer' : '👆 En savoir plus'}
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
    </div>
  )
}
