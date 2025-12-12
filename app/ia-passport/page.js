'use client'

import Layout from '../../components/Layout'
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
      details: {
        title: 'Écosystème IA Universel',
        content: `Accédez à plus de 100 modèles d'IA via une seule plateforme, inspiré des leaders mondiaux comme TypingMind, Magai et Alle-AI :

• ChatGPT (OpenAI) - GPT-4, GPT-4o pour conversations avancées
• Claude (Anthropic) - Analyse approfondie, contexte de 200K tokens
• Gemini (Google) - Multimodal avancé (texte, image, vidéo, audio)
• Perplexity - Recherche web avec citations vérifiables
• Midjourney & DALL-E - Génération d'images professionnelles

ÉCONOMIE RÉELLE : Au lieu de $60-100/mois pour 3-5 abonnements, économisez 75%.`,
        stats: ['100+ Modèles', '1 Interface', '75% Économie']
      }
    },
    { 
      icon: '🌐', 
      title: '195 Langues', 
      desc: 'Communication sans frontières',
      details: {
        title: 'Traduction Universelle',
        content: `Technologie basée sur Wordly (4M users), Interprefy (6000+ pairs), Google Cloud Translation.

Applications réelles : meetings internationaux, support client mondial, webinaires multilingues, recherche académique.`,
        stats: ['195 Langues', '3000+ Paires', 'Temps Réel']
      }
    },
    { 
      icon: '🔐', 
      title: 'Blockchain NFT', 
      desc: 'Identité digitale certifiée',
      details: {
        title: 'Sécurité Blockchain',
        content: `Technologie inspirée de Polygon ID, Worldcoin, ENS.

Protection AES-256, NFT unique, biométrie optionnelle, anti-deepfake, RGPD compliant.`,
        stats: ['NFT Unique', 'AES-256', 'RGPD']
      }
    },
    { 
      icon: '💎', 
      title: 'REUSSITESS Tokens', 
      desc: 'Monnaie universelle IA',
      details: {
        title: 'Économie Simplifiée',
        content: `Système de tokens : 1 token = 1h d'utilisation IA toutes plateformes.

Économie vs abonnements séparés : ChatGPT $20 + Claude $20 + Gemini $20 = $60/mois → Pack tokens 75% moins cher.`,
        stats: ['75% Économie', '1 Token = 1h', 'Revendable']
      }
    },
    { 
      icon: '🎯', 
      title: 'Assistant Personnel', 
      desc: 'IA qui apprend de vous',
      details: {
        title: 'Intelligence Évolutive',
        content: `Assistant qui se souvient de TOUT, inspiré de Magai (80K users).

Gain productivité : 15h/semaine économisées selon études utilisateurs.`,
        stats: ['24/7 Actif', '∞ Projets', '15h/sem']
      }
    },
    { 
      icon: '⚡', 
      title: 'Hub Universel', 
      desc: 'Toute l\'IA en 1 clic',
      details: {
        title: 'Plateforme Unifiée',
        content: `Interface unique pour orchestrer toutes les IA.

Workflows automatisés, API complète, extensions Chrome/VSCode, mode hors-ligne.`,
        stats: ['1 Interface', '10x Vitesse', 'API Ouverte']
      }
    }
  ]

  return (
    <Layout>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        padding: '4rem 1rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated backgrounds */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          animation: 'pulse 4s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          animation: 'pulse 5s ease-in-out infinite'
        }} />

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            fontSize: '8rem',
            marginBottom: '2rem',
            animation: 'float 3s ease-in-out infinite'
          }}>
            🌍
          </div>

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
            🇬🇵 MADE IN GUADELOUPE • TERRES DE CHAMPIONS
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
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Le Premier Passeport Universel IA
          </p>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            color: '#64748b',
            marginBottom: '3rem'
          }}>
            Une révolution mondiale depuis la Guadeloupe 🚀
          </p>

          {/* Features Grid */}
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
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                className="feature-card">
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
                <div style={{
                  color: '#10b981',
                  fontSize: '0.85rem',
                  fontWeight: 'bold'
                }}>
                  {selectedFeature === i ? '📖 Fermer' : '👆 Détails'}
                </div>
              </div>
            ))}
          </div>

          {/* Feature Details */}
          {selectedFeature !== null && (
            <div style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(16, 185, 129, 0.4)',
              borderRadius: '30px',
              padding: '3rem 2rem',
              maxWidth: '900px',
              margin: '0 auto 4rem',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
              textAlign: 'left'
            }}>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: '800',
                color: 'white',
                marginBottom: '1.5rem'
              }}>
                {features[selectedFeature].icon} {features[selectedFeature].details.title}
              </h2>
              
              <div style={{
                color: '#cbd5e1',
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                lineHeight: '1.8',
                whiteSpace: 'pre-line',
                marginBottom: '2rem'
              }}>
                {features[selectedFeature].details.content}
              </div>

              <div style={{
                display: 'flex',
                gap: '1.5rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                {features[selectedFeature].details.stats.map((stat, idx) => (
                  <div key={idx} style={{
                    background: 'rgba(16, 185, 129, 0.2)',
                    padding: '1rem 2rem',
                    borderRadius: '15px',
                    border: '2px solid #10b981'
                  }}>
                    <span style={{
                      color: '#10b981',
                      fontWeight: 'bold',
                      fontSize: '1.2rem'
                    }}>
                      {stat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Beta Form */}
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
              Rejoignez la liste BETA exclusive
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
                  placeholder="Votre email BETA"
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
                  ✨ Rejoindre la Révolution
                </button>
              </form>
            ) : (
              <div style={{
                padding: '2rem',
                background: 'rgba(16, 185, 129, 0.2)',
                borderRadius: '20px'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  color: '#10b981',
                  fontWeight: 'bold'
                }}>
                  Inscription Confirmée !
                </h3>
              </div>
            )}
          </div>

          {/* Footer */}
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
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        }
      `}</style>
    </Layout>
  )
}
