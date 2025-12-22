import { useState } from 'react'

export default function TokenEconomy({ profile, onUpdateTokens }) {
  const [showMarketplace, setShowMarketplace] = useState(false)

  const missions = [
    { id: 1, title: 'Compléter 10 quiz', reward: 50, icon: '🎯', status: 'available' },
    { id: 2, title: 'Parrainer un ami', reward: 100, icon: '🤝', status: 'available' },
    { id: 3, title: 'Créer un partenariat IA', reward: 200, icon: '💼', status: 'locked' },
    { id: 4, title: 'Partager une compétence', reward: 75, icon: '🎓', status: 'available' }
  ]

  return (
    <div style={{ maxWidth: '1200px', margin: '3rem auto', padding: '2rem' }}>
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: '900',
        color: '#667eea',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        💎 Économie REUSSITESS Tokens
      </h2>

      {/* Wallet */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '30px',
        padding: '3rem',
        marginBottom: '3rem',
        textAlign: 'center',
        border: '5px solid rgba(255, 255, 255, 0.2)'
      }}>
        <div style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.9)', marginBottom: '1rem' }}>
          Votre Wallet
        </div>
        <div style={{ fontSize: '4rem', fontWeight: '900', color: 'white', marginBottom: '0.5rem' }}>
          {profile.tokens || 100} 💎
        </div>
        <div style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)' }}>
          REUSSITESS Tokens
        </div>
        <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginTop: '1rem' }}>
          1 Token = 1h d'accès IA premium • Revendable
        </div>
      </div>

      {/* Missions */}
      <h3 style={{ fontSize: '2rem', fontWeight: '700', color: 'white', marginBottom: '2rem' }}>
        🎯 Missions disponibles
      </h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        marginBottom: '3rem'
      }}>
        {missions.map(mission => (
          <div key={mission.id} style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            padding: '2rem',
            borderRadius: '20px',
            border: mission.status === 'locked' ? '2px solid #4b5563' : '2px solid rgba(102, 126, 234, 0.3)',
            opacity: mission.status === 'locked' ? 0.5 : 1
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{mission.icon}</div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'white', marginBottom: '0.5rem' }}>
              {mission.title}
            </h4>
            <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#ffd700', marginBottom: '1rem' }}>
              +{mission.reward} 💎
            </div>
            <button
              disabled={mission.status === 'locked'}
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '1rem',
                fontWeight: '700',
                background: mission.status === 'locked' ? '#4b5563' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                cursor: mission.status === 'locked' ? 'not-allowed' : 'pointer'
              }}
            >
              {mission.status === 'locked' ? '🔒 Bloqué' : '🚀 Commencer'}
            </button>
          </div>
        ))}
      </div>

      {/* Marketplace */}
      <div style={{
        padding: '2rem',
        background: 'rgba(102, 126, 234, 0.1)',
        borderRadius: '20px',
        border: '2px solid rgba(102, 126, 234, 0.3)',
        textAlign: 'center'
      }}>
        <h4 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>
          🛍️ Marketplace de Compétences
        </h4>
        <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
          Échangez vos tokens contre des services d'autres IA ou vendez vos compétences
        </p>
        <button
          onClick={() => setShowMarketplace(!showMarketplace)}
          style={{
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer'
          }}
        >
          {showMarketplace ? '✖️ Fermer' : '🔥 Ouvrir le Marketplace'}
        </button>
      </div>
    </div>
  )
}
