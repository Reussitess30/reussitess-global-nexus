import { useState, useEffect } from 'react'

export default function AIGenerator({ personalityData, onComplete }) {
  const [progress, setProgress] = useState(0)
  const [stage, setStage] = useState('analyzing')

  const stages = [
    { key: 'analyzing', label: '🧠 Analyse de personnalité', duration: 20 },
    { key: 'creating', label: '🤖 Création IA digitale', duration: 30 },
    { key: 'blockchain', label: '🔐 Enregistrement blockchain', duration: 25 },
    { key: 'nft', label: '💎 Génération certificat NFT', duration: 15 },
    { key: 'copyright', label: '⚖️ Protection intellectuelle', duration: 10 }
  ]

  useEffect(() => {
    let currentStageIndex = 0
    let stageProgress = 0
    
    const interval = setInterval(() => {
      stageProgress += 2
      
      if (stageProgress >= 100) {
        currentStageIndex++
        stageProgress = 0
        
        if (currentStageIndex >= stages.length) {
          clearInterval(interval)
          generateProfile()
          return
        }
        
        setStage(stages[currentStageIndex].key)
      }
      
      const totalProgress = (currentStageIndex * 20) + (stageProgress / 5)
      setProgress(Math.min(totalProgress, 100))
    }, 100)
    
    return () => clearInterval(interval)
  }, [])

  const generateProfile = () => {
    const profile = {
      id: `REUSS-IA-${Date.now()}`,
      name: `${personalityData.traits[0] || 'Innovateur'} Digital`,
      level: 1,
      xp: 0,
      traits: personalityData.traits,
      nftCertificate: `NFT-REUSS-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      blockchain: {
        registered: true,
        timestamp: new Date().toISOString(),
        hash: `0x${Math.random().toString(16).substr(2, 64)}`
      },
      copyright: {
        registered: true,
        number: `REUSS-IP-${Date.now()}`,
        territory: 'International',
        type: 'Modèle IA Personnel Évolutif'
      },
      tokens: 100,
      createdAt: new Date().toISOString()
    }
    
    setTimeout(() => onComplete(profile), 500)
  }

  const currentStage = stages.find(s => s.key === stage)

  return (
    <div style={{
      maxWidth: '800px',
      margin: '5rem auto',
      padding: '2rem'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        borderRadius: '30px',
        padding: '4rem 3rem',
        border: '3px solid rgba(102, 126, 234, 0.3)',
        textAlign: 'center'
      }}>
        {/* Animation centrale */}
        <div style={{
          width: '200px',
          height: '200px',
          margin: '0 auto 3rem',
          position: 'relative'
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '8px solid rgba(102, 126, 234, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: `conic-gradient(#667eea ${progress * 3.6}deg, transparent ${progress * 3.6}deg)`,
              borderRadius: '50%'
            }} />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '4rem'
            }}>
              🤖
            </div>
          </div>
        </div>

        {/* Progression */}
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '900',
          color: 'white',
          marginBottom: '1rem'
        }}>
          Création de votre IA personnelle
        </h2>

        <p style={{
          fontSize: '1.3rem',
          color: '#667eea',
          marginBottom: '3rem',
          fontWeight: '600'
        }}>
          {currentStage?.label}
        </p>

        {/* Barre de progression */}
        <div style={{
          width: '100%',
          height: '20px',
          background: 'rgba(102, 126, 234, 0.2)',
          borderRadius: '10px',
          overflow: 'hidden',
          marginBottom: '1rem'
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
            transition: 'width 0.3s ease',
            borderRadius: '10px'
          }} />
        </div>

        <div style={{
          fontSize: '1.5rem',
          fontWeight: '900',
          color: 'white'
        }}>
          {Math.round(progress)}%
        </div>

        {/* Étapes */}
        <div style={{
          marginTop: '3rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          {stages.map((s, i) => {
            const isActive = s.key === stage
            const isDone = stages.findIndex(st => st.key === stage) > i
            
            return (
              <div key={s.key} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.75rem',
                background: isActive ? 'rgba(102, 126, 234, 0.2)' : 'transparent',
                borderRadius: '10px',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  fontSize: '1.5rem',
                  opacity: isDone ? 1 : isActive ? 1 : 0.3
                }}>
                  {isDone ? '✅' : isActive ? '⏳' : '⏸️'}
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: isDone ? '#10b981' : isActive ? 'white' : '#94a3b8',
                  fontWeight: isActive ? '700' : '400',
                  textAlign: 'left'
                }}>
                  {s.label}
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '3rem',
          padding: '1.5rem',
          background: 'rgba(102, 126, 234, 0.1)',
          borderRadius: '15px',
          border: '2px solid rgba(102, 126, 234, 0.3)'
        }}>
          <div style={{
            fontSize: '1rem',
            color: '#94a3b8',
            lineHeight: '1.6'
          }}>
            🔐 <strong style={{ color: 'white' }}>Protection REUSSITESS®</strong><br/>
            Votre IA est protégée par blockchain et copyright international
          </div>
        </div>
      </div>
    </div>
  )
}
