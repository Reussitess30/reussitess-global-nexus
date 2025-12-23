import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Custom404() {
  const router = useRouter()
  const [accessGranted, setAccessGranted] = useState(false)

  return (
    <div style={{
      backgroundColor: '#000',
      color: '#333',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'monospace'
    }}>
      <Head>
        <title>404 - SYSTEM_PROTECTED</title>
      </Head>

      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '1rem', marginBottom: '20px' }}>[ CODE_ERROR_404 : PATH_NOT_FOUND ]</h1>
        
        {/* Bouton presque invisible */}
        <div 
          onClick={() => router.push('/airpods')}
          style={{
            marginTop: '50px',
            padding: '10px',
            border: '1px solid #111',
            cursor: 'crosshair',
            fontSize: '0.7rem',
            color: '#111',
            transition: 'color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.color = '#00ff41'}
          onMouseLeave={(e) => e.target.style.color = '#111'}
        >
          EXECUTE_REUSSITESS_NEXUS_PROTOCOL?
        </div>
      </div>
    </div>
  )
}

