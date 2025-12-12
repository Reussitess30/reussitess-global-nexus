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

      <main style={{ minHeight: '100vh', background: '#0f172a' }}>
        {children}
      </main>

      {/* SUPERBOT ASSISTANT - Toujours présent */}
      <SuperBotAssistant />
    </>
  )
}
