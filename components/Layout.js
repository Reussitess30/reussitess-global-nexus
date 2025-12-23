import ComplianceBot from "./ComplianceBot";
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SuperBotAssistant from './SuperBotAssistant'
import Image from 'next/image'

export default function Layout({ children, title = 'REUSSITESS®971' }) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{title} - Excellence Innovation Succès</title>
        <meta name="description" content="REUSSITESS®971 - Guadeloupe au cœur du monde francophone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo-guadeloupe-monde.svg" />
      </Head>

      {/* BANNIÈRE AMAZON */}
      <div style={{
        background: 'linear-gradient(135deg, #ff9f43 0%, #ff6b6b 100%)',
        color: 'white',
        padding: '0.75rem 1rem',
        textAlign: 'center',
        fontSize: '0.9rem',
        fontWeight: '600',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
      }}>
        🛍️ <strong>Programme Partenaires Amazon</strong> - En tant qu'Affilié Amazon, nous réalisons un bénéfice sur les achats qualifiés. Merci ! 🙏
      </div>

      {/* NAVBAR */}
      <nav style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        padding: '1rem 2rem',
        boxShadow: '0 2px 20px rgba(0,0,0,0.3)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          {/* LOGO avec image */}
          <Link href="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none'
          }}>
            <Image 
              src="/images/logo-guadeloupe-monde.svg" 
              alt="Guadeloupe au centre du monde" 
              width={50} 
              height={50}
              style={{ filter: 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.5))' }}
            />
            <span style={{
              fontSize: '1.5rem',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              REUSSITESS®971
            </span>
          </Link>

          {/* MENU LINKS */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
            <Link href="/" style={{
              color: router.pathname === '/' ? '#10b981' : '#94a3b8',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.95rem'
            }}>
              Accueil
            </Link>

            <Link href="/a-propos" style={{
              color: router.pathname === '/a-propos' ? '#10b981' : '#94a3b8',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.95rem'
            }}>
              À propos
            </Link>

            <Link href="/analytics" style={{
              color: router.pathname === '/analytics' ? '#10b981' : '#94a3b8',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.95rem'
            }}>
              Analytics
            </Link>

            <Link href="/affiliation" style={{
              color: router.pathname === '/affiliation' ? '#10b981' : '#94a3b8',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.95rem'
            }}>
              Affiliation
            </Link>

            <Link href="/outils" style={{
              color: router.pathname === '/outils' ? '#10b981' : '#94a3b8',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.95rem'
            }}>
              Outils
            </Link>

            <Link href="/legal" style={{
              color: router.pathname === '/legal' ? '#10b981' : '#94a3b8',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.95rem'
            }}>
              Juridique
            </Link>

            <Link href="/boutiques" style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: 'white',
              padding: '0.5rem 1.25rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)'
            }}
            className="btn-boutiques">
              🛍️ Boutiques
            </Link>

            <a 
              href="https://shop.reussitess.fr/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                color: 'white',
                padding: '0.5rem 1.25rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                boxShadow: '0 4px 15px rgba(245, 87, 108, 0.3)'
              }}
              className="btn-shop">
              🏪 Shop
            </a>
          </div>
        </div>
      </nav>

      <main style={{ minHeight: '100vh' }}>
        {children}
<ComplianceBot />
      </main>

      <SuperBotAssistant />

      <style jsx>{`
        .btn-boutiques:hover, .btn-shop:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.5);
        }
        a:hover {
          color: #10b981 !important;
        }
      `}</style>
    </>
  )
}
