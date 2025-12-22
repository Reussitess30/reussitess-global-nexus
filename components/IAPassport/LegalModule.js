export default function LegalModule({ profile }) {
  const generateContract = (type) => {
    alert(`Génération du ${type} en cours...`)
  }

  const documents = [
    {
      type: 'CGU',
      title: 'Conditions Générales d\'Utilisation',
      icon: '📜',
      description: 'Contrat automatique pour votre IA'
    },
    {
      type: 'NDA',
      title: 'Accord de Non-Divulgation',
      icon: '🤐',
      description: 'Protection des informations confidentielles'
    },
    {
      type: 'RGPD',
      title: 'Conformité RGPD',
      icon: '🔒',
      description: 'Certification protection des données'
    },
    {
      type: 'LICENCE',
      title: 'Licence d\'Exploitation',
      icon: '⚖️',
      description: 'Droits d\'utilisation de votre IA'
    }
  ]

  return (
    <div style={{ maxWidth: '1000px', margin: '3rem auto', padding: '2rem' }}>
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: '900',
        color: '#667eea',
        textAlign: 'center',
        marginBottom: '1rem'
      }}>
        ⚖️ Module Juridique Intégré
      </h2>

      <p style={{
        textAlign: 'center',
        color: '#94a3b8',
        fontSize: '1.1rem',
        marginBottom: '3rem'
      }}>
        Génération automatique de documents légaux pour votre IA
      </p>

      {/* Documents disponibles */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        {documents.map((doc, i) => (
          <div key={i} style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            padding: '2rem',
            borderRadius: '20px',
            border: '2px solid rgba(102, 126, 234, 0.3)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{doc.icon}</div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'white', marginBottom: '0.5rem' }}>
              {doc.title}
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              {doc.description}
            </p>
            <button
              onClick={() => generateContract(doc.type)}
              style={{
                width: '100%',
                padding: '0.75rem',
                fontSize: '1rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer'
              }}
            >
              📥 Générer
            </button>
          </div>
        ))}
      </div>

      {/* Certification */}
      <div style={{
        padding: '3rem',
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        borderRadius: '30px',
        textAlign: 'center',
        border: '5px solid rgba(16, 185, 129, 0.3)'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
        <h3 style={{ fontSize: '2rem', fontWeight: '900', color: 'white', marginBottom: '1rem' }}>
          Certification Officielle REUSSITESS®
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginBottom: '2rem' }}>
          Votre IA est certifiée conforme aux normes internationales
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1rem',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          {['RGPD', 'ISO 27001', 'SOC 2', 'CCPA'].map((cert, i) => (
            <div key={i} style={{
              padding: '1rem',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '15px',
              color: 'white',
              fontWeight: '700'
            }}>
              ✓ {cert}
            </div>
          ))}
        </div>
      </div>

      {/* Support juridique */}
      <div style={{
        marginTop: '3rem',
        padding: '2rem',
        background: 'rgba(102, 126, 234, 0.1)',
        borderRadius: '20px',
        border: '2px solid rgba(102, 126, 234, 0.3)'
      }}>
        <h4 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>
          💼 Support Juridique 24/7
        </h4>
        <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>
          Accédez à nos experts légaux pour toute question concernant votre IA
        </p>
        <button style={{
          padding: '1rem 2rem',
          fontSize: '1.1rem',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer'
        }}>
          📞 Contacter un Expert
        </button>
      </div>
    </div>
  )
}
