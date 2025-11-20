'use client'

import { useState, useEffect } from 'react'

export default function BotAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const initialGreeting = "👋 Bonjour ! Je suis votre assistant de bibliothèque. Posez-moi vos questions sur l'histoire, les outils, les pays, la réglementation ou les ressources pédagogiques !";

  useEffect(() => {
    setMessages([{ text: initialGreeting, isBot: true }])
  }, [])

  const getBotResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    
    // Réponses contextuelles basées sur les mots-clés
    if (lowerInput.includes('histoire') || lowerInput.includes('afrique') || lowerInput.includes('caraïbes') || lowerInput.includes('colonial')) {
      return "📖 Pour l'histoire africaine et des outre-mers, visitez notre section Histoire qui couvre l'Afrique, les Caraïbes, les DOM-TOM et les anciennes colonies françaises avec chronologies et biographies.";
    }
    
    if (lowerInput.includes('tva') || lowerInput.includes('calculateur') || lowerInput.includes('commission') || lowerInput.includes('marge')) {
      return "🧮 Consultez notre section Outils & Calculateurs pour simuler vos marges, calculer la TVA et les commissions Amazon par pays !";
    }
    
    if (lowerInput.includes('martinique') || lowerInput.includes('guadeloupe') || lowerInput.includes('guyane') || lowerInput.includes('france')) {
      return "🌍 Nos fiches pays détaillées sont disponibles ! Consultez les informations sur la population, le marché, la TVA, Amazon et l'histoire de chaque territoire.";
    }
    
    if (lowerInput.includes('prof') || lowerInput.includes('enseignant') || lowerInput.includes('pédagogie') || lowerInput.includes('cours')) {
      return "👨‍🏫 Découvrez nos ressources pour professeurs avec guides pédagogiques, méthodes d'enseignement et supports de cours adaptés !";
    }
    
    if (lowerInput.includes('règle') || lowerInput.includes('loi') || lowerInput.includes('norme') || lowerInput.includes('réglementation')) {
      return "⚖️ Consultez notre section Réglementation Internationale pour les lois, normes et réglementations à jour du commerce international.";
    }
    
    if (lowerInput.includes('actualité') || lowerInput.includes('actu') || lowerInput.includes('news') || lowerInput.includes('nouveauté')) {
      return "📰 Restez informé avec notre section Actualités qui couvre les évolutions du secteur et les faits marquants internationaux !";
    }
    
    if (lowerInput.includes('amazon')) {
      return "🛒 Nous avons des informations détaillées sur Amazon : commissions par pays, marketplace, programmes d'affiliation. Consultez nos fiches pays ou la section Outils !";
    }
    
    if (lowerInput.includes('merci')) {
      return "De rien ! Je suis là pour vous aider à naviguer dans notre bibliothèque. N'hésitez pas à poser d'autres questions ! 😊";
    }
    
    // Réponse par défaut
    return "Je peux vous aider à trouver des informations sur : 📖 Histoire africaine & outre-mers, 🧮 Outils de calcul, 🌍 Fiches pays, 👨‍🏫 Ressources pour profs, ⚖️ Réglementation, 📰 Actualités. Quelle section vous intéresse ?";
  };

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { text: input, isBot: false }
    setMessages(prev => [...prev, userMessage])
    
    const userInput = input;
    setInput('')

    // Réponse automatique du bot avec délai réaliste
    setTimeout(() => {
      const botResponse = getBotResponse(userInput);
      const botMessage = { text: botResponse, isBot: true }
      setMessages(prev => [...prev, botMessage])
    }, 800)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
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
          transition: 'transform 0.3s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        🤖
      </button>

      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '90px',
          right: '20px',
          width: '380px',
          height: '550px',
          background: 'white',
          borderRadius: '15px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1000
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '20px',
            borderRadius: '15px 15px 0 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{margin: 0, fontSize: '1.2em'}}>🤖 Assistant Bibliothèque</h3>
              <p style={{margin: '5px 0 0 0', fontSize: '0.85em', opacity: 0.9}}>Toujours disponible pour vous aider</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer',
                borderRadius: '50%',
                width: '35px',
                height: '35px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            padding: '20px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            background: '#f9fafb'
          }}>
            {messages.map((msg, index) => (
              <div key={index} style={{
                alignSelf: msg.isBot ? 'flex-start' : 'flex-end',
                background: msg.isBot ? 'white' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: msg.isBot ? '#333' : 'white',
                padding: '12px 16px',
                borderRadius: msg.isBot ? '15px 15px 15px 5px' : '15px 15px 5px 15px',
                maxWidth: '80%',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                fontSize: '0.95em',
                lineHeight: '1.4'
              }}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div style={{
            padding: '15px',
            borderTop: '1px solid #e5e7eb',
            background: 'white',
            borderRadius: '0 0 15px 15px'
          }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Posez votre question..."
                style={{
                  flex: 1,
                  padding: '12px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '10px',
                  outline: 'none',
                  fontSize: '0.95em',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#667eea'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
              />
              <button
                onClick={handleSend}
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '12px 20px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '0.95em',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Envoyer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
