'use client'

import { useState, useEffect } from 'react'

export default function BotAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const greetings = [
    "Bonjour ! Je suis votre assistant REUSSITESS® Global Nexus 🌍",
    "Hello! I'm your REUSSITESS® Global Nexus assistant 🌍", 
    "¡Hola! Soy tu asistente de REUSSITESS® Global Nexus 🌍",
    "Hallo! Ich bin Ihr REUSSITESS® Global Nexus-Assistent 🌍"
  ]

  useEffect(() => {
    setMessages([{ text: greetings[0], isBot: true }])
  }, [])

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { text: input, isBot: false }
    setMessages(prev => [...prev, userMessage])
    setInput('')

    // Réponse automatique du bot
    setTimeout(() => {
      const responses = [
        "Je peux vous aider avec nos 26 boutiques Amazon !",
        "Voulez-vous des informations sur un pays spécifique ?",
        "Je peux vous guider vers nos formations gratuites !",
        "Besoin d'aide pour le programme d'affiliation ?"
      ]
      const botMessage = { 
        text: responses[Math.floor(Math.random() * responses.length)], 
        isBot: true 
      }
      setMessages(prev => [...prev, botMessage])
    }, 1000)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          zIndex: 1000
        }}
      >
        🤖
      </button>

      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '90px',
          right: '20px',
          width: '350px',
          height: '500px',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1000
        }}>
          {/* Header */}
          <div style={{
            background: '#2563eb',
            color: 'white',
            padding: '15px',
            borderRadius: '12px 12px 0 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h3 style={{margin: 0}}>Assistant REUSSITESS®</h3>
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '20px',
                cursor: 'pointer'
              }}
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            padding: '15px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            {messages.map((msg, index) => (
              <div key={index} style={{
                alignSelf: msg.isBot ? 'flex-start' : 'flex-end',
                background: msg.isBot ? '#f1f5f9' : '#2563eb',
                color: msg.isBot ? '#333' : 'white',
                padding: '10px 15px',
                borderRadius: '15px',
                maxWidth: '80%'
              }}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div style={{
            padding: '15px',
            borderTop: '1px solid #e5e7eb',
            display: 'flex',
            gap: '10px'
          }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Posez votre question..."
              style={{
                flex: 1,
                padding: '10px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                outline: 'none'
              }}
            />
            <button
              onClick={handleSend}
              style={{
                background: '#2563eb',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 15px',
                cursor: 'pointer'
              }}
            >
              Envoyer
            </button>
          </div>
        </div>
      )}
    </>
  )
}
