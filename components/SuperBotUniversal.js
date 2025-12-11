import { useState, useEffect, useRef } from 'react'

export default function SuperBotUniversal() {
  const [isOpen, setIsOpen] = useState(true)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [currentLang, setCurrentLang] = useState('fr-FR')
  const messagesEndRef = useRef(null)

  const languages = [
    { code: 'fr-FR', flag: '🇫🇷', name: 'Français' },
    { code: 'en-US', flag: '🇺🇸', name: 'English' },
    { code: 'es-ES', flag: '🇪🇸', name: 'Español' },
    { code: 'de-DE', flag: '🇩🇪', name: 'Deutsch' }
  ]

  const welcomeMsg = "Salut champion ! Je suis ton guide REUSSITESS 971 ! Je connais TOUT le projet ! Que veux-tu decouvrir ? Boutiques Amazon, Passeport, VISA, Quiz, Bibliotheque ?"

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addMessage(welcomeMsg, 'bot')
        if (typeof window !== 'undefined' && window.readText) {
          window.readText(welcomeMsg)
        }
      }, 500)
    }
  }, [isOpen])

  const addMessage = (text, sender) => {
    setMessages(prev => [...prev, { text, sender, id: Date.now() }])
  }

  const getResponse = (query) => {
    const q = query.toLowerCase()
    
    if (q.includes('boutique') || q.includes('amazon')) {
      return "26 boutiques Amazon dans 14 pays ! France, USA, UK, Allemagne, Espagne, Italie, Canada, Inde, Pays-Bas, Suede, Singapour, Australie, Belgique, Bresil ! Va sur /boutiques"
    }
    if (q.includes('passeport') || q.includes('champion')) {
      return "Passeport de Reussite ! 127 pays, 15247 champions ! Cree le tien sur /champions"
    }
    if (q.includes('visa') || q.includes('bourse')) {
      return "VISA Universel ! 10000 bourses, 50000 emplois ! Va sur /visa-universel"
    }
    if (q.includes('quiz')) {
      return "25 quiz gratuits avec 125 questions ! Sur /quiz"
    }
    if (q.includes('biblio')) {
      return "Bibliotheque mondiale ! 55 pages ! Sur /bibliotheque"
    }
    
    return "Je peux t'aider avec : Boutiques Amazon, Passeport, VISA, Quiz, Bibliotheque ! Que veux-tu ?"
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const userInput = input.trim()
    if (!userInput) return

    addMessage(userInput, 'user')
    setInput('')
    setIsLoading(true)

    setTimeout(() => {
      const response = getResponse(userInput)
      addMessage(response, 'bot')
      setIsLoading(false)
      
      if (typeof window !== 'undefined' && window.readText) {
        window.readText(response)
      }
    }, 800)
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          top: '100px',
          right: '30px',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
          border: 'none',
          borderRadius: '50%',
          boxShadow: '0 8px 30px rgba(251,191,36,0.5)',
          cursor: 'pointer',
          fontSize: '2rem',
          zIndex: 1000
        }}
      >
        🌟
      </button>
    )
  }

  return (
    <div style={{
      position: 'fixed',
      top: '80px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '500px',
      maxWidth: '95vw',
      height: '600px',
      background: 'linear-gradient(135deg, #4338ca, #7c3aed, #ec4899)',
      borderRadius: '24px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
      zIndex: 1001,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      border: '4px solid #fbbf24'
    }}>
      
      <div style={{
        background: 'linear-gradient(90deg, #fbbf24, #f59e0b, #ef4444)',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ color: 'white', fontWeight: '900', fontSize: '1.2rem' }}>
              GUIDE REUSSITESS 971
            </div>
            <div style={{ color: 'white', fontSize: '0.75rem', opacity: 0.9 }}>
              Intelligence Universelle
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              color: 'white',
              fontSize: '2rem',
              cursor: 'pointer',
              borderRadius: '50%',
              width: '40px',
              height: '40px'
            }}
          >
            ×
          </button>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => setCurrentLang(lang.code)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                opacity: currentLang === lang.code ? 1 : 0.5
              }}
            >
              {lang.flag}
            </button>
          ))}
        </div>
      </div>

      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        background: 'rgba(0,0,0,0.2)'
      }}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              display: 'flex',
              justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start'
            }}
          >
            <div style={{
              maxWidth: '85%',
              padding: '0.75rem',
              borderRadius: '16px',
              background: msg.sender === 'user'
                ? 'linear-gradient(135deg, #3b82f6, #06b6d4)'
                : 'rgba(255,255,255,0.15)',
              color: 'white',
              fontSize: '0.9rem'
            }}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div style={{ color: 'white' }}>...</div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} style={{
        padding: '1rem',
        background: 'rgba(0,0,0,0.3)'
      }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Demande-moi..."
            style={{
              flex: 1,
              padding: '0.75rem',
              borderRadius: '20px',
              border: '2px solid rgba(255,255,255,0.3)',
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              outline: 'none'
            }}
          />
          <button
            type="submit"
            disabled={isLoading}
            style={{
              background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
              border: 'none',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '20px',
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '1.2rem'
            }}
          >
            🚀
          </button>
        </div>
      </form>
    </div>
  )
}
