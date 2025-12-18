'use client'

import { useState, useEffect, useRef } from 'react'

export default function SuperBotAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const messagesEndRef = useRef(null)

  // Personnalité ultra-humaine du bot
  const botPersonality = {
    name: "REUSSITESS AI",
    origin: "Guadeloupe 🇬🇵",
    motto: "EXCELLENCE • INNOVATION • SUCCÈS",
    signature: "BOUDOUM",
    tone: "chaleureux, motivant, expert mais accessible",
    expertise: [
      "Expert mondial en IA et technologies (TypingMind, Magai, Claude, ChatGPT)",
      "Spécialiste blockchain & NFT (Polygon ID, Worldcoin, ENS)",
      "Maître en traduction 195 langues (Wordly 4M users, Interprefy)",
      "Guide culturel francophone (26 pays, 14 continents)",
      "Mentor business et entrepreneuriat caribéen"
    ]
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Message de bienvenue ultra-personnalisé
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{
        role: 'assistant',
        content: `🌍 **Salutations du monde !**

Je suis **REUSSITESS AI**, votre assistant personnel révolutionnaire né en **Guadeloupe** 🇬🇵 - Terres de Champions !

**Ce que je peux faire pour vous :**

✨ **IA Universelle** - Maîtrise totale de 100+ IA (ChatGPT, Claude, Gemini, Midjourney...)
🌐 **Traduction Instantanée** - 195 langues, temps réel, comme Wordly (4M utilisateurs)
🔐 **Sécurité Blockchain** - NFT ID, protection niveau militaire AES-256
💎 **Système Économique** - Tokens REUSSITESS : 75% économie vs abonnements séparés
🎯 **Assistant Évolutif** - Je me souviens de TOUT, j'apprends de vous
⚡ **Productivité 10x** - De 5h de travail à 30 minutes

**Mon expertise mondiale :**
• Technologies IA de pointe (données réelles 2024-2025)
• Culture francophone (26 pays sur 5 continents)  
• Entrepreneuriat & Business stratégique
• Innovation technologique & brevets

**Ma mission :** Vous propulser vers l'excellence avec la puissance de l'IA mondiale, l'authenticité caribéenne, et une approche 100% humaine.

💬 **Posez-moi n'importe quelle question !**  
Je réponds avec expertise, sources vérifiées et **positivité à l'infini** ✨

**BOUDOUM** 🎯`
      }])
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch('/api/superbot/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: userMessage,
          personality: botPersonality,
          context: messages
        })
      })

      const data = await response.json()
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.response || "Désolé, une erreur s'est produite. Réessayez ! 🔄" 
      }])

      // Synthèse vocale si disponible
      if (data.response && 'speechSynthesis' in window) {
        speakResponse(data.response)
      }

    } catch (error) {
      console.error('Erreur chat:', error)
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "⚠️ Connexion temporairement indisponible. Je reste à votre service ! Réessayez dans un instant. 💪" 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const speakResponse = (text) => {
    if (!('speechSynthesis' in window)) return

    // Nettoyer le texte des emojis et markdown
    const cleanText = text
      .replace(/[🎯🌍✨💎🔐⚡💪🚀📊🇬🇵]/g, '')
      .replace(/\*\*/g, '')
      .replace(/\*/g, '')
      .replace(/###/g, '')
      .replace(/##/g, '')
      .replace(/#/g, '')

    const utterance = new SpeechSynthesisUtterance(cleanText)
    
    // Voix naturelle et chaleureuse
    utterance.lang = 'fr-FR'
    utterance.rate = 1.0 // Vitesse naturelle
    utterance.pitch = 1.0 // Ton naturel
    utterance.volume = 0.9

    // Chercher une voix française de qualité
    const voices = window.speechSynthesis.getVoices()
    const frVoice = voices.find(voice => 
      voice.lang.startsWith('fr') && 
      (voice.name.includes('Google') || voice.name.includes('Microsoft') || voice.name.includes('Natural'))
    ) || voices.find(voice => voice.lang.startsWith('fr'))

    if (frVoice) {
      utterance.voice = frVoice
    }

    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)

    window.speechSynthesis.speak(utterance)
  }

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
    }
  }

  return (
    <>
      {/* Bouton flottant */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 10px 40px rgba(16, 185, 129, 0.5)',
          zIndex: 9999,
          transition: 'all 0.3s ease',
          animation: 'pulse 2s infinite'
        }}
        className="bot-button"
      >
        <span style={{ fontSize: '2rem' }}>
          {isOpen ? '✕' : '🤖'}
        </span>
      </div>

      {/* Fenêtre de chat */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '6rem',
          right: '2rem',
          width: '400px',
          maxWidth: 'calc(100vw - 4rem)',
          height: '600px',
          maxHeight: 'calc(100vh - 10rem)',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 9998,
          border: '2px solid rgba(16, 185, 129, 0.3)',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
            padding: '1.5rem',
            borderRadius: '20px 20px 0 0',
            color: 'white'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ fontSize: '2.5rem' }}>🤖</div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 'bold' }}>
                  REUSSITESS AI
                </h3>
                <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.9 }}>
                  🇬🇵 Expert IA Mondial • Guadeloupe
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%'
                }}
              >
                <div style={{
                  background: msg.role === 'user' 
                    ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
                    : 'rgba(16, 185, 129, 0.15)',
                  color: 'white',
                  padding: '1rem 1.5rem',
                  borderRadius: msg.role === 'user' ? '20px 20px 5px 20px' : '20px 20px 20px 5px',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  border: msg.role === 'assistant' ? '1px solid rgba(16, 185, 129, 0.3)' : 'none',
                  whiteSpace: 'pre-wrap'
                }}>
                  {msg.content}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div style={{
                alignSelf: 'flex-start',
                background: 'rgba(16, 185, 129, 0.15)',
                padding: '1rem 1.5rem',
                borderRadius: '20px 20px 20px 5px',
                border: '1px solid rgba(16, 185, 129, 0.3)'
              }}>
                <span style={{ color: '#10b981' }}>● ● ●</span> Réflexion en cours...
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Contrôle vocal */}
          {isSpeaking && (
            <div style={{
              padding: '0.5rem 1.5rem',
              background: 'rgba(16, 185, 129, 0.2)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ color: '#10b981', fontSize: '0.9rem' }}>
                🔊 Lecture audio en cours...
              </span>
              <button
                onClick={stopSpeaking}
                style={{
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontSize: '0.85rem'
                }}
              >
                ⏹ Stop
              </button>
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} style={{
            padding: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez votre question..."
                disabled={isLoading}
                style={{
                  flex: 1,
                  padding: '0.8rem 1rem',
                  borderRadius: '15px',
                  border: '2px solid rgba(16, 185, 129, 0.3)',
                  background: 'rgba(15, 23, 42, 0.8)',
                  color: 'white',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                style={{
                  padding: '0.8rem 1.5rem',
                  borderRadius: '15px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: 'white',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  fontSize: '1.2rem',
                  opacity: isLoading || !input.trim() ? 0.5 : 1
                }}
              >
                ➤
              </button>
            </div>
          </form>
        </div>
      )}

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 10px 40px rgba(16, 185, 129, 0.5); }
          50% { transform: scale(1.05); box-shadow: 0 15px 50px rgba(16, 185, 129, 0.7); }
        }

        .bot-button:hover {
          transform: scale(1.1);
          box-shadow: 0 15px 50px rgba(16, 185, 129, 0.7);
        }

        input:focus {
          border-color: #10b981;
        }
      `}</style>
    </>
  )
}
