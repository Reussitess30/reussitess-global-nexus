import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SuperBotAssistant from './SuperBotAssistant'

export default function Layout({ children, title = 'REUSSITESS®971' }) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{title} - Excellence Innovation Succès</title>
        <meta name="description" content="REUSSITESS®971 - Plateforme mondiale d'excellence depuis la Guadeloupe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* BANNIÈRE AMAZON AFFILIATE - EN HAUT */}
      <div style={{
        background: 'linear-gradient(135deg, #ff9f43 0%, #ff6b6b 100%)',
        color: 'white',
        padding: '0.75rem 1rem',
        textAlign: 'center',
        fontSize: '0.9rem',
        fontWeight: '600',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
      }}>
        🛍️ <strong>Programme Partenaires Amazon</strong> - En tant qu'Affilié Amazon, nous réalisons un bénéfice sur les achats qualifiés. Cela n'entraîne aucun coût supplémentaire pour vous. Merci de votre soutien ! 🙏
      </div>

      {/* NAVBAR - MENU DE NAVIGATION */}
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
          {/* LOGO */}
          <Link href="/" style={{
            fontSize: '1.5rem',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textDecoration: 'none'
          }}>
            REUSSITESS®971 🇬🇵
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
              fontSize: '0.95rem',
              transition: 'color 0.3s ease'
            }}>
              Accueil
            </Link>

            <Link href="/a-propos" style={{
              color: router.pathname === '/a-propos' ? '#10b981' : '#94a3b8',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.95rem',
              transition: 'color 0.3s ease'
            }}>
              À propos
            </Link>

            <Link href="/analytics" style={{
              color: router.pathname === '/analytics' ? '#10b981' : '#94a3b8',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.95rem',
              transition: 'color 0.3s ease'
            }}>
              Analytics
            </Link>

            <Link href="/affiliation" style={{
              color: router.pathname === '/affiliation' ? '#10b981' : '#94a3b8',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.95rem',
              transition: 'color 0.3s ease'
            }}>
              Affiliation
            </Link>

            <Link href="/outils" style={{
              color: router.pathname === '/outils' ? '#10b981' : '#94a3b8',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.95rem',
              transition: 'color 0.3s ease'
            }}>
              Outils
            </Link>

            <Link href="/legal" style={{
              color: router.pathname === '/legal' ? '#10b981' : '#94a3b8',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '0.95rem',
              transition: 'color 0.3s ease'
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
              boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
              transition: 'all 0.3s ease'
            }}
            className="btn-boutiques">
              🛍️ Boutiques
            </Link>
          </div>
        </div>
      </nav>

      {/* CONTENU PRINCIPAL */}
      <main style={{ minHeight: '100vh' }}>
        {children}
      </main>

      {/* SUPERBOT ASSISTANT */}
      <SuperBotAssistant />

      <style jsx>{`
        .btn-boutiques:hover {
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
