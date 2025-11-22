import { useEffect } from 'react'
import ChatbotReussitess from '../components/ChatbotReussitess'
import AmazonDisclaimer from '../components/AmazonDisclaimer'
import AntiCopyProtection from '../components/AntiCopyProtection'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AmazonDisclaimer />
      <AntiCopyProtection />
      <Component {...pageProps} />
      <ChatbotReussitess />
    </>
  )
}

export default MyApp
