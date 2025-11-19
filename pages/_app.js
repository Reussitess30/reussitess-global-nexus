import { useState } from 'react'
import { SessionProvider } from 'next-auth/react'
import LoginAnimation from '../components/LoginAnimation'
import Chatbot from '../components/Chatbot'
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [animationComplete, setAnimationComplete] = useState(false)

  return (
    <SessionProvider session={session}>
      <LoginAnimation onComplete={() => setAnimationComplete(true)} />
      {animationComplete && (
        <>
          <Component {...pageProps} />
          <Chatbot />
        </>
      )}
    </SessionProvider>
  )
}

export default MyApp

