export default function AIDashboard({ profile }) {
  return (
    <div style={{ maxWidth: '1200px', margin: '3rem auto', padding: '0 2rem' }}>
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '30px',
        padding: '3rem',
        marginBottom: '3rem',
        border: '5px solid rgba(255, 255, 255, 0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '300px',
          height: '300px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '2rem'
          }}>
            <div>
              <div style={{
                fontSize: '1.5rem',
                color: 'white',
                fontWeight: '700',
                marginBottom: '0.5rem'
              }}>
                🤖 VOTRE IA PERSONNELLE
              </div>
              <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                REUSSITESS® • Protection Intellectuelle Intégrée
              </div>
            </div>
            <div style={{ fontSize: '4rem' }}>🌍</div>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            padding: '2rem',
            borderRadius: '20px',
            marginBottom: '2rem'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '900',
              color: 'white',
              marginBottom: '1rem'
            }}>
              {profile.name}
            </h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {profile.traits.map((trait, i) => (
                <span key={i} style={{
                  padding: '0.5rem 1rem',
                  background: 'rgba(255, 215, 0, 0.3)',
                  color: '#ffd700',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}>
                  ✨ {trait}
                </span>
              ))}
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            color: 'white'
          }}>
            <div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                ID IA
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: '700' }}>
                {profile.id}
              </div>
            </div>
            <div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                NFT
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: '700' }}>
                {profile.nftCertificate}
              </div>
            </div>
            <div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                NIVEAU
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: '900' }}>
                Level {profile.level}
              </div>
            </div>
            <div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                XP
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: '900' }}>
                {profile.xp} XP
              </div>
            </div>
          </div>

          <div style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: 'rgba(16, 185, 129, 0.2)',
            borderRadius: '15px',
            border: '2px solid rgba(16, 185, 129, 0.4)'
          }}>
            <div style={{
              fontSize: '1.2rem',
              fontWeight: '700',
              color: '#10b981',
              marginBottom: '1rem'
            }}>
              🔐 PROTECTION INTELLECTUELLE
            </div>
            <div style={{ color: 'white', fontSize: '0.9rem' }}>
              Blockchain: {profile.blockchain.hash.substring(0, 20)}...
            </div>
            <div style={{ color: 'white', fontSize: '0.9rem' }}>
              Copyright: {profile.copyright.number}
            </div>
          </div>
        </div>
      </div>

      <div style={{
        textAlign: 'center',
        padding: '2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '20px'
      }}>
        <h3 style={{ fontSize: '2rem', fontWeight: '900', color: 'white' }}>
          REUSSITESS®971
        </h3>
        <p style={{ fontSize: '1.2rem', color: 'white', fontWeight: '700' }}>
          POSITIVITÉ À L'INFINI • BOUDOUM 🇬🇵
        </p>
      </div>
    </div>
  )
}
