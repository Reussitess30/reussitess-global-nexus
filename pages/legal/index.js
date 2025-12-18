import Head from "next/head";
import { useRouter } from "next/router";

export default function MentionsLegales() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Mentions Légales - REUSSITESS®971</title>
        <meta name="description" content="Mentions légales et informations juridiques de REUSSITESS®971" />
      </Head>
      
      <div style={{ 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        padding: '4rem 2rem',
        color: 'white'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          <button
            onClick={() => router.push("/")}
            style={{
              padding: "12px 24px",
              background: "rgba(16, 185, 129, 0.2)",
              color: "#10b981",
              border: "2px solid #10b981",
              borderRadius: "50px",
              cursor: "pointer",
              marginBottom: "3rem",
              fontSize: "1rem",
              fontWeight: "600"
            }}
          >
            ← Retour à l'accueil
          </button>

          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: '900', 
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            ⚖️ Mentions Légales
          </h1>

          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '2rem',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            lineHeight: '1.8'
          }}>

            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ 
                color: '#10b981', 
                fontSize: '1.8rem', 
                fontWeight: '800',
                marginBottom: '1rem',
                borderBottom: '2px solid rgba(16, 185, 129, 0.3)',
                paddingBottom: '0.5rem'
              }}>
                📋 Éditeur du Site
              </h2>
              <p><strong>Raison sociale :</strong> Entreprise Individuelle</p>
              <p><strong>Nom du responsable :</strong> Porinus Rony Roger</p>
              <p><strong>Statut :</strong> Auto-entrepreneur</p>
              <p><strong>SIRET :</strong> 44469979700031</p>
              <p><strong>Activité :</strong> IT & Amazon Influencer</p>
              <p><strong>Adresse :</strong><br/>
                40 Résidences Les Monbins<br/>
                97113 Gourbeyre<br/>
                Guadeloupe 🇬🇵
              </p>
              <p><strong>Email :</strong> <a href="mailto:influenceur@reussitess.fr" style={{ color: '#10b981', textDecoration: 'underline' }}>influenceur@reussitess.fr</a></p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ 
                color: '#10b981', 
                fontSize: '1.8rem', 
                fontWeight: '800',
                marginBottom: '1rem',
                borderBottom: '2px solid rgba(16, 185, 129, 0.3)',
                paddingBottom: '0.5rem'
              }}>
                👨‍💼 Directeur de Publication
              </h2>
              <p><strong>Nom :</strong> Porinus Rony Roger (@reussitess)</p>
              <p><strong>Email :</strong> <a href="mailto:influenceur@reussitess.fr" style={{ color: '#10b981', textDecoration: 'underline' }}>influenceur@reussitess.fr</a></p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ 
                color: '#10b981', 
                fontSize: '1.8rem', 
                fontWeight: '800',
                marginBottom: '1rem',
                borderBottom: '2px solid rgba(16, 185, 129, 0.3)',
                paddingBottom: '0.5rem'
              }}>
                🌐 Hébergement
              </h2>
              <p><strong>Hébergeur :</strong> Vercel Inc.</p>
              <p><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, USA</p>
              <p><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: '#10b981', textDecoration: 'underline' }}>vercel.com</a></p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ 
                color: '#10b981', 
                fontSize: '1.8rem', 
                fontWeight: '800',
                marginBottom: '1rem',
                borderBottom: '2px solid rgba(16, 185, 129, 0.3)',
                paddingBottom: '0.5rem'
              }}>
                ©️ Propriété Intellectuelle
              </h2>
              <p>L'ensemble du contenu de ce site (textes, images, logos, marques) est la propriété exclusive de REUSSITESS® et est protégé par le droit d'auteur français et international.</p>
              <p><strong>Marque :</strong> REUSSITESS®971</p>
              <p><strong>Slogan :</strong> "Excellence • Innovation • Succès"</p>
              <p><strong>Signature :</strong> BOUDOUM - Positivité à l'Infini 🎯</p>
              <p>Toute reproduction, représentation, modification ou exploitation, même partielle, est interdite sans autorisation écrite préalable.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ 
                color: '#10b981', 
                fontSize: '1.8rem', 
                fontWeight: '800',
                marginBottom: '1rem',
                borderBottom: '2px solid rgba(16, 185, 129, 0.3)',
                paddingBottom: '0.5rem'
              }}>
                🛍️ Programme d'Affiliation Amazon
              </h2>
              <p><strong>Statut :</strong> Partenaire Affilié Amazon</p>
              <p><strong>Identifiant :</strong> fb942837</p>
              <p><strong>Déclaration obligatoire :</strong></p>
              <div style={{ 
                background: 'rgba(16, 185, 129, 0.1)',
                padding: '1rem',
                borderRadius: '10px',
                border: '2px solid rgba(16, 185, 129, 0.3)',
                fontStyle: 'italic',
                marginTop: '1rem'
              }}>
                "En tant que Partenaire Amazon, REUSSITESS® réalise un bénéfice sur les achats qualifiés effectués via les liens présents sur ce site."
              </div>
              <p style={{ marginTop: '1rem' }}><strong>Marchés :</strong> 26 boutiques sur 14 pays</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ 
                color: '#10b981', 
                fontSize: '1.8rem', 
                fontWeight: '800',
                marginBottom: '1rem',
                borderBottom: '2px solid rgba(16, 185, 129, 0.3)',
                paddingBottom: '0.5rem'
              }}>
                🔐 Protection des Données (RGPD)
              </h2>
              <p><strong>Responsable :</strong> Porinus Rony Roger</p>
              <p><strong>Données collectées :</strong> Email (formulaire contact), données de navigation (cookies techniques)</p>
              <p><strong>Finalité :</strong> Répondre aux demandes</p>
              <p><strong>Conservation :</strong> 3 ans maximum</p>
              <p><strong>Vos droits :</strong> Accès, rectification, effacement, opposition, portabilité</p>
              <p><strong>Contact :</strong> <a href="mailto:influenceur@reussitess.fr" style={{ color: '#10b981', textDecoration: 'underline' }}>influenceur@reussitess.fr</a></p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ 
                color: '#10b981', 
                fontSize: '1.8rem', 
                fontWeight: '800',
                marginBottom: '1rem',
                borderBottom: '2px solid rgba(16, 185, 129, 0.3)',
                paddingBottom: '0.5rem'
              }}>
                🍪 Cookies
              </h2>
              <p>Ce site utilise uniquement des cookies techniques nécessaires à son fonctionnement (session, préférences).</p>
              <p><strong>Aucun cookie publicitaire ou de tracking tiers.</strong></p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ 
                color: '#10b981', 
                fontSize: '1.8rem', 
                fontWeight: '800',
                marginBottom: '1rem',
                borderBottom: '2px solid rgba(16, 185, 129, 0.3)',
                paddingBottom: '0.5rem'
              }}>
                ⚠️ Limitation de Responsabilité
              </h2>
              <p>REUSSITESS® fournit des informations à titre indicatif. Nous ne garantissons pas l'exactitude totale des contenus.</p>
              <p>Les liens externes sont fournis à titre informatif. REUSSITESS® n'est pas responsable du contenu des sites tiers.</p>
              <p>Les produits Amazon sont fournis par Amazon. REUSSITESS® n'est pas responsable de leur qualité, livraison ou SAV.</p>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2 style={{ 
                color: '#10b981', 
                fontSize: '1.8rem', 
                fontWeight: '800',
                marginBottom: '1rem',
                borderBottom: '2px solid rgba(16, 185, 129, 0.3)',
                paddingBottom: '0.5rem'
              }}>
                🇫🇷 Droit Applicable
              </h2>
              <p><strong>Loi applicable :</strong> Droit français</p>
              <p><strong>Juridiction :</strong> Tribunaux français</p>
              <p><strong>Territoire :</strong> France - Guadeloupe (DOM)</p>
            </section>

            <div style={{
              marginTop: '4rem',
              padding: '2rem',
              background: 'rgba(16, 185, 129, 0.1)',
              borderRadius: '15px',
              textAlign: 'center',
              border: '2px solid rgba(16, 185, 129, 0.3)'
            }}>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981', marginBottom: '1rem' }}>
                REUSSITESS®971
              </p>
              <p style={{ fontSize: '1.2rem', color: '#10b981', fontWeight: '600' }}>
                Excellence • Innovation • Succès
              </p>
              <p style={{ fontSize: '1rem', marginTop: '1rem', color: '#64748b' }}>
                BOUDOUM - Positivité à l'Infini 🎯
              </p>
              <p style={{ fontSize: '0.9rem', marginTop: '1rem', color: '#94a3b8' }}>
                🇬🇵 Made in Guadeloupe - Terres de Champions
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
