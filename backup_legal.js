import Layout from '../components/Layout'

export default function LegalPage() {
  return (
    <Layout title="Mentions légales">
      <div
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          padding: '4rem 2rem'
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', color: 'white' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '2rem' }}>
            Mentions légales
          </h1>

          <h2>Éditeur du site</h2>
          <p>
            Le site REUSSITESS® GlobalNexus est édité par REUSSITESS®, représenté par
            Porinus Rony Roger, responsable de la publication.
          </p>

          <h2>Statut & identification</h2>
          <p>
            Statut : Auto-entrepreneur EI – IT & Amazon Influencer. SIRET : 444699979700031.
            Origine : Guadeloupe – Terres de Champions.
          </p>

          <h2>Contact</h2>
          <p>
            Email :{' '}
            <a
              href="mailto:influenceur@reussitess.fr"
              style={{
                color: '#38bdf8',
                textDecoration: 'underline',
                fontWeight: 'bold'
              }}
            >
              influenceur@reussitess.fr
            </a>
          </p>

          <h2>Affiliation Amazon</h2>
          <p>
            REUSSITESS® participe au Programme Partenaires Amazon. Certains liens peuvent
            générer une commission sur les achats qualifiés, sans coût supplémentaire pour
            l’utilisateur.
          </p>

          <h2>Responsabilité</h2>
          <p>
            L’éditeur n’est pas responsable des dommages directs ou indirects résultant de
            l’utilisation du site ou de l’impossibilité d’y accéder.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Les données collectées via formulaires, analytics et cookies servent uniquement
            à améliorer l’expérience utilisateur et ne sont pas revendues à des tiers.
          </p>
        </div>
      </div>
    </Layout>
  )
}
