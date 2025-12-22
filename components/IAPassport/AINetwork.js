import { useState, useEffect } from 'react'

export default function AINetwork({ profile }) {
  const [nearbyAIs, setNearbyAIs] = useState([])
  const [matches, setMatches] = useState([])

  useEffect(() => {
    // Simulation d'IA connectées
    const simulatedAIs = [
      {
        id: 'REUSS-IA-1001',
        name: 'Visionnaire Digital',
        traits: ['Visionnaire', 'Innovateur', 'Leader'],
        compatibility: 95,
        avatar: '🌟',
        skills: ['IA', 'Blockchain', 'Innovation'],
        location: 'Guadeloupe'
      },
      {
        id: 'REUSS-IA-1002',
        name: 'Expert Analytique',
        traits: ['Analytique', 'Expert', 'Pragmatique'],
        compatibility: 87,
        avatar: '🧠',
        skills: ['Data Science', 'Analyse', 'Stratégie'],
        location: 'France'
      },
      {
        id: 'REUSS-IA-1003',
        name: 'Connecteur Global',
        traits: ['Networker', 'Adaptable', 'Mentor'],
        compatibility: 92,
        avatar: '🌍',
        skills: ['Réseau', 'Partenariats', 'Business'],
        location: 'États-Unis'
      }
    ]
    
    setNearbyAIs(simulatedAIs)
    
    // Matches automatiques basés sur compatibilité
    const topMatches = simulatedAIs.filter(ai => ai.compatibility > 90)
    setMatches(topMatches)
  }, [profile])

  return (
    <div style={{ maxWidth: '1200px', margin: '3rem auto', padding: '2rem' }}>
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: '900',
        color: '#667eea',
        textAlign: 'center',
        marginBottom: '1rem'
      }}>
        🌐 Réseau d'IA Interconnectées
      </h2>

      <p style={{
        textAlign: 'center',
        color: '#94a3b8',
        fontSize: '1.1rem',
        marginBottom: '3rem'
      }}>
        Découvrez des IA compatibles avec votre profil pour collaborer
      </p>

      {/* Matches parfaits */}
      {matches.length > 0 && (
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            color: 'white',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            ⚡ Matches Parfaits <span style={{
              fontSize: '0.9rem',
              padding: '0.25rem 0.75rem',
              background: '#10b981',
              borderRadius: '20px'
            }}>
              {matches.length}
            </span>
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}>
            {matches.map(ai => (
              <div key={ai.id} style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                padding: '2rem',
                borderRadius: '20px',
                border: '3px solid rgba(16, 185, 129, 0.5)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  padding: '0.5rem 1rem',
                  background: 'rgba(255,255,255,0.3)',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  color: 'white'
                }}>
                  {ai.compatibility}% Match
                </div>

                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{ai.avatar}</div>
                
                <h4 style={{ fontSize: '1.5rem', fontWeight: '900', color: 'white', marginBottom: '0.5rem' }}>
                  {ai.name}
                </h4>

                <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.9)', marginBottom: '1rem' }}>
                  📍 {ai.location}
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  {ai.traits.map((trait, i) => (
                    <span key={i} style={{
                      display: 'inline-block',
                      padding: '0.25rem 0.75rem',
                      background: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      borderRadius: '15px',
                      fontSize: '0.85rem',
                      marginRight: '0.5rem',
                      marginBottom: '0.5rem'
                    }}>
                      {trait}
                    </span>
                  ))}
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem' }}>
                    Compétences:
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'white', fontWeight: '600' }}>
                    {ai.skills.join(' • ')}
                  </div>
                </div>

                <button style={{
                  width: '100%',
                  padding: '0.75rem',
                  fontSize: '1rem',
                  fontWeight: '700',
                  background: 'white',
                  color: '#10b981',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer'
                }}>
                  🤝 Connecter
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Réseau complet */}
      <h3 style={{
        fontSize: '1.8rem',
        fontWeight: '700',
        color: 'white',
        marginBottom: '2rem'
      }}>
        🌍 Toutes les IA du Réseau
      </h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem'
      }}>
        {nearbyAIs.map(ai => (
          <div key={ai.id} style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            padding: '2rem',
            borderRadius: '20px',
            border: '2px solid rgba(102, 126, 234, 0.3)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '1rem'
            }}>
              <div style={{ fontSize: '3rem' }}>{ai.avatar}</div>
              <div style={{
                padding: '0.25rem 0.75rem',
                background: ai.compatibility > 90 ? 'rgba(16, 185, 129, 0.2)' : 'rgba(102, 126, 234, 0.2)',
                color: ai.compatibility > 90 ? '#10b981' : '#667eea',
                borderRadius: '15px',
                fontSize: '0.85rem',
                fontWeight: '700'
              }}>
                {ai.compatibility}%
              </div>
            </div>

            <h4 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'white', marginBottom: '0.5rem' }}>
              {ai.name}
            </h4>

            <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1rem' }}>
              📍 {ai.location}
            </div>

            <div style={{ marginBottom: '1rem' }}>
              {ai.skills.map((skill, i) => (
                <span key={i} style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.5rem',
                  background: 'rgba(102, 126, 234, 0.2)',
                  color: '#94a3b8',
                  borderRadius: '10px',
                  fontSize: '0.75rem',
                  marginRight: '0.5rem',
                  marginBottom: '0.5rem'
                }}>
                  {skill}
                </span>
              ))}
            </div>

            <button style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '0.95rem',
              fontWeight: '600',
              background: 'rgba(102, 126, 234, 0.2)',
              color: '#667eea',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer'
            }}>
              👋 Dire Bonjour
            </button>
          </div>
        ))}
      </div>

      {/* Stats réseau */}
      <div style={{
        marginTop: '3rem',
        padding: '2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '2rem',
        textAlign: 'center'
      }}>
        <div>
          <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'white' }}>
            {nearbyAIs.length}
          </div>
          <div style={{ color: 'rgba(255,255,255,0.9)' }}>IA Disponibles</div>
        </div>
        <div>
          <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'white' }}>
            {matches.length}
          </div>
          <div style={{ color: 'rgba(255,255,255,0.9)' }}>Matches</div>
        </div>
        <div>
          <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'white' }}>
            14
          </div>
          <div style={{ color: 'rgba(255,255,255,0.9)' }}>Pays</div>
        </div>
      </div>
    </div>
  )
}
