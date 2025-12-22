export default function IPProtection({ profile }) {
  const downloadCertificate = () => {
    const certificate = `
╔═══════════════════════════════════════════════════════════════╗
║           CERTIFICAT DE PROTECTION INTELLECTUELLE             ║
║                    REUSSITESS® PASSPORT                       ║
╚═══════════════════════════════════════════════════════════════╝

📜 NUMÉRO DE COPYRIGHT
${profile.copyright.number}

🤖 IA PERSONNELLE
Nom: ${profile.name}
ID: ${profile.id}

🔐 BLOCKCHAIN
Hash: ${profile.blockchain.hash}
Horodatage: ${new Date(profile.blockchain.timestamp).toLocaleString('fr-FR')}

💎 CERTIFICAT NFT
${profile.nftCertificate}

⚖️ PROTECTION LÉGALE
Territoire: ${profile.copyright.territory}
Type: ${profile.copyright.type}

✨ TRAITS PROTÉGÉS
${profile.traits.map(t => `• ${t}`).join('\n')}

───────────────────────────────────────────────────────────────
Ce document certifie l'enregistrement et la protection de votre
modèle d'IA personnelle selon les standards REUSSITESS®

Date d'émission: ${new Date().toLocaleDateString('fr-FR')}
    `
    
    const blob = new Blob([certificate], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `REUSSITESS-IP-${profile.copyright.number}.txt`
    a.click()
  }

  return (
    <div style={{
      maxWidth: '1000px',
      margin: '3rem auto',
      padding: '2rem'
    }}>
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: '900',
        color: '#667eea',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        ⚖️ Protection Intellectuelle Active
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {/* Copyright */}
        <div style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          padding: '2rem',
          borderRadius: '20px',
          border: '3px solid rgba(16, 185, 129, 0.3)'
        }}>
          <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>📜</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>
            Copyright International
          </h3>
          <div style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6' }}>
            <strong style={{ color: '#10b981' }}>N°: {profile.copyright.number}</strong><br/>
            Territoire: {profile.copyright.territory}<br/>
            Type: {profile.copyright.type}<br/>
            Statut: ✅ Enregistré
          </div>
        </div>

        {/* Blockchain */}
        <div style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          padding: '2rem',
          borderRadius: '20px',
          border: '3px solid rgba(102, 126, 234, 0.3)'
        }}>
          <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>🔐</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>
            Blockchain Certification
          </h3>
          <div style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', wordBreak: 'break-all' }}>
            <strong style={{ color: '#667eea' }}>Hash:</strong><br/>
            {profile.blockchain.hash.substring(0, 30)}...<br/>
            <strong style={{ color: '#667eea' }}>Timestamp:</strong><br/>
            {new Date(profile.blockchain.timestamp).toLocaleString('fr-FR')}
          </div>
        </div>

        {/* NFT */}
        <div style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          padding: '2rem',
          borderRadius: '20px',
          border: '3px solid rgba(255, 215, 0, 0.3)'
        }}>
          <div style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>💎</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>
            Certificat NFT
          </h3>
          <div style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6' }}>
            <strong style={{ color: '#ffd700' }}>{profile.nftCertificate}</strong><br/>
            Unique • Infalsifiable<br/>
            Propriété exclusive<br/>
            Transférable
          </div>
        </div>
      </div>

      {/* Actions */}
      <div style={{
        marginTop: '3rem',
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <button
          onClick={downloadCertificate}
          style={{
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 5px 15px rgba(16, 185, 129, 0.3)'
          }}
        >
          📥 Télécharger Certificat
        </button>

        <button
          onClick={() => alert('Fonction vérification blockchain à venir')}
          style={{
            padding: '1rem 2rem',
            fontSize: '1.1rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 5px 15px rgba(102, 126, 234, 0.3)'
          }}
        >
          🔍 Vérifier sur Blockchain
        </button>
      </div>

      {/* Info légale */}
      <div style={{
        marginTop: '3rem',
        padding: '2rem',
        background: 'rgba(102, 126, 234, 0.1)',
        borderRadius: '20px',
        border: '2px solid rgba(102, 126, 234, 0.3)'
      }}>
        <h4 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>
          🛡️ Garanties REUSSITESS®
        </h4>
        <div style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.8' }}>
          ✅ Protection intellectuelle mondiale<br/>
          ✅ Enregistrement blockchain immuable<br/>
          ✅ Certificat NFT unique et vérifiable<br/>
          ✅ Conformité RGPD et législations internationales<br/>
          ✅ Support juridique en cas de litige
        </div>
      </div>
    </div>
  )
}
