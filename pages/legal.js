import Layout from '../components/Layout'

export default function Juridique() {
  return (
    <Layout title="Mentions légales">
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        padding: '4rem 2rem'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            background: 'rgba(15, 23, 42, 0.95)',
            borderRadius: '30px',
            padding: '3rem',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            color: 'white'
          }}>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '900',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              Mentions légales
            </h1>

            <h2 style={{ fontSize: '1.6rem', marginTop: '2rem' }}>Éditeur du site</h2>
            <p>
              Le site REUSSITESS® GlobalNexus est édité par REUSSITESS®, représenté par
              Porinus Rony Roger, responsable de la publication.
            </p>

            <h2 style={{ fontSize: '1.6rem', marginTop: '2rem' }}>Statut & identification</h2>
            <p>
              Statut : Auto-entrepreneur EI – IT & Amazon Influencer. SIRET : 444699979700031.
              Origine : Guadeloupe – Terres de Champions.
            </p>

            <h2 style={{ fontSize: '1.6rem', marginTop: '2rem' }}>Contact</h2>
            <p>
              Email de contact :{' '}
              <a
                href="mailto:influenceur@reussitess.fr"
                style={{ color: '#38bdf8', textDecoration: 'underline', fontWeight: 'bold' }}
              >
                influenceur@reussitess.fr
              </a>
            </p>

            <h2 style={{ fontSize: '1.6rem', marginTop: '2rem' }}>Affiliation Amazon</h2>
            <p>
              REUSSITESS® participe au Programme Partenaires Amazon. Certains liens présents
              sur le site peuvent générer une commission sur les achats qualifiés, sans coût
              supplémentaire pour l’utilisateur.
            </p>

            <h2 style={{ fontSize: '1.6rem', marginTop: '2rem' }}>Responsabilité</h2>
            <p>
              Les informations fournies sur ce site sont données à titre indicatif et peuvent
              être mises à jour à tout moment. L’éditeur ne saurait être tenu responsable
              d’un usage inapproprié des contenus.
            </p>

            <h2 style={{ fontSize: '1.6rem', marginTop: '2rem' }}>Données personnelles</h2>
            <p>
              Les données collectées via formulaires, analytics et cookies servent uniquement
              à améliorer l’expérience utilisateur et ne sont pas revendues à des tiers.
            </p>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a
              href="/"
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#0f172a',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
              }}
            >
              ← Retour à l'accueil
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
