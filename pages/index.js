import Layout from '../components/Layout'
import BotAssistant from '../components/BotAssistant'
import Link from 'next/link'

export default function Home() {
  // Traductions par pays
  const translations = {
    "🇺🇸": { btn: "Visit the Store", disclaimer: "As an affiliate, I earn commissions on certain products" },
    "🇬🇧": { btn: "Visit the Store", disclaimer: "As an affiliate, I earn commissions on certain products" },
    "🇦🇺": { btn: "Visit the Store", disclaimer: "As an affiliate, I earn commissions on certain products" },
    "🇮🇳": { btn: "Visit the Store", disclaimer: "As an affiliate, I earn commissions on certain products" },
    "🇸🇬": { btn: "Visit the Store", disclaimer: "As an affiliate, I earn commissions on certain products" },
    "🇫🇷": { btn: "Visiter la Boutique", disclaimer: "En tant qu'affiliée, je gagne des commissions sur certains produits" },
    "🇧🇪": { btn: "Visiter la Boutique", disclaimer: "En tant qu'affiliée, je gagne des commissions sur certains produits" },
    "🇮🇹": { btn: "Visita il Negozio", disclaimer: "Come affiliata, guadagno commissioni su alcuni prodotti" },
    "🇪🇸": { btn: "Visitar la Tienda", disclaimer: "Como afiliada, gano comisiones en ciertos productos" },
    "🇩🇪": { btn: "Shop Besuchen", disclaimer: "Als Partner verdiene ich an qualifizierten Käufen" },
    "🇳🇱": { btn: "Bezoek de Winkel", disclaimer: "Als partner verdien ik commissie op bepaalde producten" },
    "🇸🇪": { btn: "Besök Butiken", disclaimer: "Som partner tjänar jag provision på vissa produkter" },
    "🇨🇦": { btn: "Visit the Store", disclaimer: "As an affiliate, I earn commissions on certain products" },
    "🇧🇷": { btn: "Visite a Loja", disclaimer: "Como afiliada, ganho comissões em certos produtos" }
  }

  // VRAIS LIENS AMAZON D'AFFILIATION
  const boutiques = [
    // Boutiques Personnelles (14)
    { flag: "🇺🇸", nom: "États-Unis", type: "Personnel", lien: "https://www.amazon.com/shop/amourguadeloupe" },
    { flag: "🇮🇹", nom: "Italie", type: "Personnel", lien: "https://www.amazon.it/shop/amourguadeloupe" },
    { flag: "🇫🇷", nom: "France", type: "Personnel", lien: "https://www.amazon.fr/shop/amourguadeloupe" },
    { flag: "🇪🇸", nom: "Espagne", type: "Personnel", lien: "https://www.amazon.es/shop/amourguadeloupe" },
    { flag: "🇩🇪", nom: "Allemagne", type: "Personnel", lien: "https://www.amazon.de/shop/amourguadeloupe" },
    { flag: "🇨🇦", nom: "Canada", type: "Personnel", lien: "https://www.amazon.ca/shop/amourguadeloupe" },
    { flag: "🇮🇳", nom: "Inde", type: "Personnel", lien: "https://www.amazon.in/shop/amourguadeloupe" },
    { flag: "🇳🇱", nom: "Pays-Bas", type: "Personnel", lien: "https://www.amazon.nl/shop/amourguadeloupe" },
    { flag: "🇸🇪", nom: "Suède", type: "Personnel", lien: "https://www.amazon.se/shop/amourguadeloupe" },
    { flag: "🇸🇬", nom: "Singapour", type: "Personnel", lien: "https://www.amazon.sg/shop/amourguadeloupe" },
    { flag: "🇬🇧", nom: "Royaume-Uni", type: "Personnel", lien: "https://www.amazon.co.uk/shop/amourguadeloupe" },
    { flag: "🇦🇺", nom: "Australie", type: "Personnel", lien: "https://www.amazon.com.au/shop/amourguadeloupe" },
    { flag: "🇧🇪", nom: "Belgique", type: "Personnel", lien: "https://www.amazon.com.be/shop/amourguadeloupe" },
    { flag: "🇧🇷", nom: "Brésil", type: "Personnel", lien: "https://www.amazon.com.br/shop/amourguadeloupe" },

    // Boutiques Influenceurs (12)
    { flag: "🇦🇺", nom: "Australie", type: "Influenceur", lien: "https://www.amazon.com.au/shop/influencer-fb942837" },
    { flag: "🇺🇸", nom: "États-Unis", type: "Influenceur", lien: "https://www.amazon.com/shop/influencer-fb942837" },
    { flag: "🇬🇧", nom: "Royaume-Uni", type: "Influenceur", lien: "https://www.amazon.co.uk/shop/influencer-fb942837" },
    { flag: "🇮🇳", nom: "Inde", type: "Influenceur", lien: "https://www.amazon.in/shop/influencer-fb942837" },
    { flag: "🇸🇪", nom: "Suède", type: "Influenceur", lien: "https://www.amazon.se/shop/influencer-fb942837" },
    { flag: "🇸🇬", nom: "Singapour", type: "Influenceur", lien: "https://www.amazon.sg/shop/influencer-fb942837" },
    { flag: "🇧🇪", nom: "Belgique", type: "Influenceur", lien: "https://www.amazon.com.be/shop/influencer-fb942837" },
    { flag: "🇪🇸", nom: "Espagne", type: "Influenceur", lien: "https://www.amazon.es/shop/influencer-fb942837" },
    { flag: "🇩🇪", nom: "Allemagne", type: "Influenceur", lien: "https://www.amazon.de/shop/influencer-fb942837" },
    { flag: "🇨🇦", nom: "Canada", type: "Influenceur", lien: "https://www.amazon.ca/shop/influencer-fb942837" },
    { flag: "🇳🇱", nom: "Pays-Bas", type: "Influenceur", lien: "https://www.amazon.nl/shop/influencer-fb942837" },
    { flag: "🇮🇹", nom: "Italie", type: "Influenceur", lien: "https://www.amazon.it/shop/influencer-fb942837" }
  ]

  return (
    <Layout>
      {/* Hero Section Compact */}
      <div style={{
        minHeight: '60vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '3rem 1rem'
      }}>
        <div style={{
          position: 'absolute',
          top: '5%',
          left: '5%',
          width: '200px',
          height: '200px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '5%',
          right: '5%',
          width: '250px',
          height: '250px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }} />

        <div className="container" style={{
          textAlign: 'center',
          color: 'white',
          zIndex: 1,
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            fontSize: '4rem',
            marginBottom: '1.5rem',
            animation: 'float 3s ease-in-out infinite'
          }}>
            🌍
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)'
          }}>
            REUSSITESS® GLOBAL NEXUS
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            marginBottom: '2rem',
            opacity: 0.95
          }}>
            🏝️ Guadeloupe - Terre de Champions 🏆
          </p>

          {/* Statistiques */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '2rem'
          }}>
            {[
              { num: '26', label: 'Boutiques', icon: '🛍️' },
              { num: '14', label: 'Pays', icon: '🌍' },
              { num: '5', label: 'Continents', icon: '🗺️' }
            ].map((stat, i) => (
              <div key={i} style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                padding: '1rem 1.5rem',
                borderRadius: '15px',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>{stat.icon}</span>
                <span style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>{stat.num}</span>
                <span style={{ fontSize: '0.9rem', marginLeft: '0.3rem', opacity: 0.9 }}>{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Boutons d'action */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '2rem'
          }}>
            <a href="#boutiques" style={{
              background: 'linear-gradient(135deg, #e11d48, #f59e0b)',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              boxShadow: '0 8px 25px rgba(225, 29, 72, 0.4)',
              transition: 'all 0.3s ease',
              display: 'inline-block',
              cursor: 'pointer',
              pointerEvents: 'auto',
              position: 'relative',
              zIndex: 10
            }}
            className="btn-primary">
              🚀 VOIR LES 26 BOUTIQUES
            </a>

            <Link href="/affiliation" style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              border: '2px solid white',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              display: 'inline-block'
            }}
            className="btn-secondary">
              🤝 Programme Affiliation
            </Link>

            <a 
              href="https://shop.reussitess.fr/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(135deg, #f5576c 0%, #f093fb 100%)',
                color: 'white',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                boxShadow: '0 8px 25px rgba(245, 87, 108, 0.4)',
                transition: 'all 0.3s ease',
                display: 'inline-block'
              }}
              className="btn-alternative">
              🎮 Version 2 - Shop PWA
            </a>
          </div>
        </div>
      </div>

      {/* Reste du contenu inchangé... */}
      <BotAssistant />

      <style jsx>{\`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(225, 29, 72, 0.5);
        }

        .btn-secondary:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.25);
        }

        .btn-alternative:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(245, 87, 108, 0.5);
        }
      \`}</style>
    </Layout>
  )
}
