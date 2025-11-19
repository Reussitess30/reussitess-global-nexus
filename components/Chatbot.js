import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const router = useRouter()
  const { locale } = router

  // Multilingual greetings
  const greetings = {
    fr: "Bonjour ! Je suis votre assistant Reussitess Global Nexus 🌍. Comment puis-je vous aider ?",
    en: "Hello! I'm your Reussitess Global Nexus assistant 🌍. How can I help you?",
    es: "¡Hola! Soy tu asistente de Reussitess Global Nexus 🌍. ¿Cómo puedo ayudarte?",
    de: "Hallo! Ich bin Ihr Reussitess Global Nexus-Assistent 🌍. Wie kann ich Ihnen helfen?",
    it: "Ciao! Sono il tuo assistente Reussitess Global Nexus 🌍. Come posso aiutarti?",
    pt: "Olá! Sou seu assistente Reussitess Global Nexus 🌍. Como posso ajudá-lo?",
  }

  const placeholders = {
    fr: "Posez votre question...",
    en: "Ask your question...",
    es: "Haz tu pregunta...",
    de: "Stellen Sie Ihre Frage...",
    it: "Fai la tua domanda...",
    pt: "Faça sua pergunta...",
  }

  const sendLabels = {
    fr: "Envoyer",
    en: "Send",
    es: "Enviar",
    de: "Senden",
    it: "Invia",
    pt: "Enviar",
  }

  useEffect(() => {
    const greeting = greetings[locale] || greetings.fr
    setMessages([{ text: greeting, isBot: true }])
  }, [locale])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = { text: input, isBot: false }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          locale: locale || 'fr',
        }),
      })

      const data = await response.json()
      
      const botMessage = { 
        text: data.message || data.error || 'Error occurred', 
        isBot: true 
      }
      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      const errorMessages = {
        fr: "Désolé, une erreur s'est produite. Veuillez réessayer.",
        en: "Sorry, an error occurred. Please try again.",
        es: "Lo siento, ocurrió un error. Por favor, inténtalo de nuevo.",
        de: "Entschuldigung, ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
        it: "Scusa, si è verificato un errore. Per favore riprova.",
        pt: "Desculpe, ocorreu um erro. Por favor, tente novamente.",
      }
      const botMessage = { 
        text: errorMessages[locale] || errorMessages.fr, 
        isBot: true 
      }
      setMessages(prev => [...prev, botMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          fontSize: '28px',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
          zIndex: 1000,
          transition: 'all 0.3s ease',
          transform: isOpen ? 'scale(0.9)' : 'scale(1)',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = isOpen ? 'scale(0.9)' : 'scale(1)'}
      >
        {isOpen ? '✕' : '🤖'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '90px',
          right: '20px',
          width: '380px',
          maxWidth: 'calc(100vw - 40px)',
          height: '550px',
          maxHeight: 'calc(100vh - 120px)',
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1000,
          overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
            <span style={{ fontSize: '24px' }}>🤖</span>
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>
                Reussitess Assistant
              </h3>
              <p style={{ margin: 0, fontSize: '12px', opacity: 0.9 }}>
                {locale === 'fr' ? 'En ligne' : locale === 'en' ? 'Online' : 
                 locale === 'es' ? 'En línea' : locale === 'de' ? 'Online' :
                 locale === 'it' ? 'Online' : 'Online'}
              </p>
            </div>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            padding: '20px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            background: '#f9fafb',
          }}>
            {messages.map((msg, index) => (
              <div key={index} style={{
                alignSelf: msg.isBot ? 'flex-start' : 'flex-end',
                background: msg.isBot 
                  ? 'white' 
                  : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: msg.isBot ? '#1f2937' : 'white',
                padding: '12px 16px',
                borderRadius: '12px',
                maxWidth: '80%',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                wordWrap: 'break-word',
              }}>
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div style={{
                alignSelf: 'flex-start',
                background: 'white',
                padding: '12px 16px',
                borderRadius: '12px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}>
                <span style={{ fontSize: '20px' }}>⋯</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div style={{
            padding: '20px',
            borderTop: '1px solid #e5e7eb',
            background: 'white',
          }}>
            <div style={{
              display: 'flex',
              gap: '10px',
            }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={placeholders[locale] || placeholders.fr}
                disabled={isLoading}
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  border: '1px solid #d1d5db',
                  borderRadius: '12px',
                  outline: 'none',
                  fontSize: '14px',
                  transition: 'all 0.3s ease',
                }}
                onFocus={(e) => e.target.style.borderColor = '#667eea'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '12px 20px',
                  cursor: isLoading || !input.trim() ? 'not-allowed' : 'pointer',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  opacity: isLoading || !input.trim() ? 0.6 : 1,
                  transition: 'all 0.3s ease',
                }}
              >
                {sendLabels[locale] || sendLabels.fr}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
