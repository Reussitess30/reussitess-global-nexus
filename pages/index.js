import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'

export default function Home() {
  const router = useRouter()
  const { locale } = router

  // Multilingual content
  const content = {
    fr: {
      title: "RÉUSSITESS GLOBAL NEXUS",
      subtitle: "Accès Direct à Nos 26 Boutiques Amazon",
      guadeloupe: "Guadeloupe",
      guadeloupeSubtitle: "Terre de Champions",
      cta: "🚀 ACCÉDER AUX 26 BOUTIQUES AMAZON",
      shopLabel: "🛍️ Visiter la Boutique",
      affiliation: "Lien d'affiliation sécurisé",
      howItWorks: "COMMENT ÇA FONCTIONNE ?",
      step1Title: "Cliquez",
      step1Desc: "Choisissez une boutique Amazon",
      step2Title: "Achetez",
      step2Desc: "Faites vos achats normalement",
      step3Title: "Gagnez",
      step3Desc: "Je reçois une commission",
      myStores: "MES BOUTIQUES AMAZON",
      seoTitle: "Réussitess Global Nexus - 26 Boutiques Amazon Mondiales",
      seoDescription: "Accédez à nos 26 boutiques Amazon dans 14 pays. Programme d'affiliation international avec livraison mondiale.",
    },
    en: {
      title: "REUSSITESS GLOBAL NEXUS",
      subtitle: "Direct Access to Our 26 Amazon Stores",
      guadeloupe: "Guadeloupe",
      guadeloupeSubtitle: "Land of Champions",
      cta: "🚀 ACCESS 26 AMAZON STORES",
      shopLabel: "🛍️ Visit Store",
      affiliation: "Secure affiliate link",
      howItWorks: "HOW IT WORKS?",
      step1Title: "Click",
      step1Desc: "Choose an Amazon store",
      step2Title: "Buy",
      step2Desc: "Shop normally",
      step3Title: "Earn",
      step3Desc: "I receive a commission",
      myStores: "MY AMAZON STORES",
      seoTitle: "Reussitess Global Nexus - 26 Global Amazon Stores",
      seoDescription: "Access our 26 Amazon stores across 14 countries. International affiliate program with worldwide delivery.",
    },
    es: {
      title: "REUSSITESS GLOBAL NEXUS",
      subtitle: "Acceso Directo a Nuestras 26 Tiendas Amazon",
      guadeloupe: "Guadalupe",
      guadeloupeSubtitle: "Tierra de Campeones",
      cta: "🚀 ACCEDER A 26 TIENDAS AMAZON",
      shopLabel: "🛍️ Visitar Tienda",
      affiliation: "Enlace de afiliado seguro",
      howItWorks: "¿CÓMO FUNCIONA?",
      step1Title: "Haz clic",
      step1Desc: "Elige una tienda Amazon",
      step2Title: "Compra",
      step2Desc: "Compra normalmente",
      step3Title: "Gana",
      step3Desc: "Recibo una comisión",
      myStores: "MIS TIENDAS AMAZON",
      seoTitle: "Reussitess Global Nexus - 26 Tiendas Amazon Globales",
      seoDescription: "Accede a nuestras 26 tiendas Amazon en 14 países. Programa de afiliados internacional con entrega mundial.",
    },
    de: {
      title: "REUSSITESS GLOBAL NEXUS",
      subtitle: "Direkter Zugang zu unseren 26 Amazon-Shops",
      guadeloupe: "Guadeloupe",
      guadeloupeSubtitle: "Land der Champions",
      cta: "🚀 ZUGRIFF AUF 26 AMAZON-SHOPS",
      shopLabel: "🛍️ Shop besuchen",
      affiliation: "Sicherer Affiliate-Link",
      howItWorks: "WIE FUNKTIONIERT ES?",
      step1Title: "Klicken",
      step1Desc: "Wählen Sie einen Amazon-Shop",
      step2Title: "Kaufen",
      step2Desc: "Normal einkaufen",
      step3Title: "Verdienen",
      step3Desc: "Ich erhalte eine Provision",
      myStores: "MEINE AMAZON-SHOPS",
      seoTitle: "Reussitess Global Nexus - 26 Globale Amazon-Shops",
      seoDescription: "Greifen Sie auf unsere 26 Amazon-Shops in 14 Ländern zu. Internationales Partnerprogramm mit weltweiter Lieferung.",
    },
    it: {
      title: "REUSSITESS GLOBAL NEXUS",
      subtitle: "Accesso Diretto ai Nostri 26 Negozi Amazon",
      guadeloupe: "Guadalupa",
      guadeloupeSubtitle: "Terra di Campioni",
      cta: "🚀 ACCEDI AI 26 NEGOZI AMAZON",
      shopLabel: "🛍️ Visita Negozio",
      affiliation: "Link affiliato sicuro",
      howItWorks: "COME FUNZIONA?",
      step1Title: "Clicca",
      step1Desc: "Scegli un negozio Amazon",
      step2Title: "Acquista",
      step2Desc: "Fai acquisti normalmente",
      step3Title: "Guadagna",
      step3Desc: "Ricevo una commissione",
      myStores: "I MIEI NEGOZI AMAZON",
      seoTitle: "Reussitess Global Nexus - 26 Negozi Amazon Globali",
      seoDescription: "Accedi ai nostri 26 negozi Amazon in 14 paesi. Programma di affiliazione internazionale con consegna mondiale.",
    },
    pt: {
      title: "REUSSITESS GLOBAL NEXUS",
      subtitle: "Acesso Direto às Nossas 26 Lojas Amazon",
      guadeloupe: "Guadalupe",
      guadeloupeSubtitle: "Terra de Campeões",
      cta: "🚀 ACESSAR 26 LOJAS AMAZON",
      shopLabel: "🛍️ Visitar Loja",
      affiliation: "Link de afiliado seguro",
      howItWorks: "COMO FUNCIONA?",
      step1Title: "Clique",
      step1Desc: "Escolha uma loja Amazon",
      step2Title: "Compre",
      step2Desc: "Compre normalmente",
      step3Title: "Ganhe",
      step3Desc: "Recebo uma comissão",
      myStores: "MINHAS LOJAS AMAZON",
      seoTitle: "Reussitess Global Nexus - 26 Lojas Amazon Globais",
      seoDescription: "Acesse nossas 26 lojas Amazon em 14 países. Programa de afiliados internacional com entrega mundial.",
    },
  }

  const t = content[locale] || content.fr

  // VRAIS LIENS AMAZON D'AFFILIATION de votre ancienne appli
  const boutiques = [
    // Boutiques Personnelles (14)
    { nom: "🇫🇷 [Personnel] France", lien: "https://amzlink.to/personnel-FR" },
    { nom: "🇮🇹 [Personnel] Italie", lien: "https://amzlink.to/personnel-IT" },
    { nom: "🇩🇪 [Personnel] Allemagne", lien: "https://amzlink.to/personnel-DE" },
    { nom: "🇸🇪 [Personnel] Suède", lien: "https://amzlink.to/personnel-SE" },
    { nom: "🇸🇬 [Personnel] Singapour", lien: "https://amzlink.to/personnel-SG" },
    { nom: "🇦🇺 [Personnel] Australie", lien: "https://amzlink.to/personnel-AU" },
    { nom: "🇪🇸 [Personnel] Espagne", lien: "https://amzlink.to/personnel-ES" },
    { nom: "🇧🇷 [Personnel] Brésil", lien: "https://amzlink.to/personnel-BR" },
    { nom: "🇬🇧 [Personnel] Royaume-Uni", lien: "https://amzlink.to/personnel-UK" },
    { nom: "🇮🇳 [Personnel] Inde", lien: "https://amzlink.to/personnel-IN" },
    { nom: "🇳🇿 [Personnel] Nouvelle-Zélande", lien: "https://amzlink.to/personnel-NZ" },
    { nom: "🇺🇸 [Personnel] États-Unis", lien: "https://amzlink.to/personnel-US" },
    { nom: "🇨🇦 [Personnel] Canada", lien: "https://amzlink.to/personnel-CA" },
    { nom: "🇧🇪 [Personnel] Belgique", lien: "https://amzlink.to/personnel-BE" },

    // Boutiques Influenceurs (12)
    { nom: "🇮🇹 [Influenceur] Italie", lien: "https://amzlink.to/influenceur-IT" },
    { nom: "🇩🇪 [Influenceur] Allemagne", lien: "https://amzlink.to/influenceur-DE" },
    { nom: "🇸🇪 [Influenceur] Suède", lien: "https://amzlink.to/influenceur-SE" },
    { nom: "🇸🇬 [Influenceur] Singapour", lien: "https://amzlink.to/influenceur-SG" },
    { nom: "🇦🇺 [Influenceur] Australie", lien: "https://amzlink.to/influenceur-AU" },
    { nom: "🇪🇸 [Influenceur] Espagne", lien: "https://amzlink.to/influenceur-ES" },
    { nom: "🇬🇧 [Influenceur] Royaume-Uni", lien: "https://amzlink.to/influenceur-UK" },
    { nom: "🇮🇳 [Influenceur] Inde", lien: "https://amzlink.to/influenceur-IN" },
    { nom: "🇳🇿 [Influenceur] Nouvelle-Zélande", lien: "https://amzlink.to/influenceur-NZ" },
    { nom: "🇺🇸 [Influenceur] États-Unis", lien: "https://amzlink.to/influenceur-US" },
    { nom: "🇧🇪 [Influenceur] Belgique", lien: "https://amzlink.to/influenceur-BE" },
    { nom: "🇧🇪 [Influenceur] Belgique (BEI)", lien: "https://www.amazon.com.be/shop/influencer-fb942837" }
  ]

  return (
    <Layout>
      <NextSeo
        title={t.seoTitle}
        description={t.seoDescription}
        openGraph={{
          title: t.seoTitle,
          description: t.seoDescription,
          type: 'website',
          locale: locale,
        }}
      />
      <div className="hero">
        <div className="container">
          <h1>{t.title}</h1>
          <p className="subtitle">
            {t.subtitle}
          </p>
          
          {/* Carte Guadeloupe */}
          <div className="guadeloupe-card">
            <div className="guadeloupe-title">{t.guadeloupe}</div>
            <div className="guadeloupe-subtitle">{t.guadeloupeSubtitle}</div>
          </div>

          {/* Bouton Principal */}
          <div style={{margin: '3rem 0'}}>
            <a 
              href="#boutiques" 
              className="btn-principal"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #e11d48, #f59e0b, #3b82f6)',
                color: 'white',
                padding: '1.5rem 3rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1.3rem',
                fontWeight: 'bold',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(225, 29, 72, 0.4)',
                transition: 'all 0.3s ease'
              }}
            >
              {t.cta}
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="number">26</span>
              <span className="label">Boutiques Amazon</span>
            </div>
            <div className="stat">
              <span className="number">14</span>
              <span className="label">Pays</span>
            </div>
            <div className="stat">
              <span className="number">5</span>
              <span className="label">Continents</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section Boutiques */}
      <div className="container">
        <section id="boutiques" className="boutiques-section">
          <h2 style={{
            textAlign: 'center',
            fontSize: '3rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #f59e0b, #e11d48)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '3rem'
          }}>
            {t.myStores}
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginTop: '2rem'
          }}>
            {boutiques.map((boutique, index) => (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '2rem',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}>
                <h3 style={{color: 'white', marginBottom: '1.5rem', fontSize: '1.2rem'}}>
                  {boutique.nom}
                </h3>
                <a 
                  href={boutique.lien} 
                  target="_blank" 
                  rel="noopener noreferrer nofollow sponsored"
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #10b981, #3b82f6)',
                    color: 'white',
                    padding: '1rem 2rem',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    width: '100%'
                  }}
                  onMouseOver="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 10px 20px rgba(16, 185, 129, 0.4)'"
                  onMouseOut="this.style.transform='translateY(0)'; this.style.boxShadow='none'"
                >
                  {t.shopLabel}
                </a>
                <div style={{
                  marginTop: '1rem',
                  fontSize: '0.8rem',
                  opacity: '0.7',
                  color: '#fbbf24'
                }}>
                  {t.affiliation}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Information */}
        <section style={{
          padding: '4rem 0',
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.02)',
          borderRadius: '20px',
          marginTop: '4rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, #f59e0b, #e11d48)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {t.howItWorks}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>1️⃣</div>
              <h3 style={{color: '#f59e0b', marginBottom: '1rem'}}>{t.step1Title}</h3>
              <p>{t.step1Desc}</p>
            </div>
            <div>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>2️⃣</div>
              <h3 style={{color: '#3b82f6', marginBottom: '1rem'}}>{t.step2Title}</h3>
              <p>{t.step2Desc}</p>
            </div>
            <div>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>3️⃣</div>
              <h3 style={{color: '#10b981', marginBottom: '1rem'}}>{t.step3Title}</h3>
              <p>{t.step3Desc}</p>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .btn-principal:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px rgba(225, 29, 72, 0.6);
        }
      `}</style>
    </Layout>
  )
}
