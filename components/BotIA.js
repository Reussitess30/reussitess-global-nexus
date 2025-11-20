'use client'

import { useState, useEffect } from 'react'

const greetings = {
  fr: "Bonjour ! Je suis votre assistant Reussitess Global Nexus 🌍. Comment puis-je vous aider ?",
  en: "Hello! I'm your Reussitess Global Nexus assistant 🌍. How can I help you?", 
  es: "¡Hola! Soy tu asistente de Reussitess Global Nexus 🌍. ¿Cómo puedo ayudarte?",
  pt: "Olá! Sou seu assistente Reussitess Global Nexus 🌍. Como posso ajudá-lo?",
  it: "Ciao! Sono il tuo assistente Reussitess Global Nexus 🌍. Come posso aiutarti?",
  de: "Hallo! Ich bin Ihr Reussitess Global Nexus-Assistent 🌍. Wie kann ich Ihnen helfen?"
}

const responses = {
  fr: {
    boutiques: "Nous avons 26 boutiques Amazon dans 14 pays ! Voulez-vous savoir lesquelles ? 🛍️",
    pays: "Nos boutiques couvrent : France 🇫🇷, Italie 🇮🇹, Allemagne 🇩🇪, Espagne 🇪🇸, Royaume-Uni 🇬🇧, USA 🇺🇸, Canada 🇨🇦, Brésil 🇧🇷, Australie 🇦🇺, Inde 🇮🇳, Singapour 🇸🇬, Suède 🇸🇪, Nouvelle-Zélande 🇳🇿, Belgique 🇧🇪",
    affiliation: "Notre programme d'affiliation offre 4 à 10% de commission avec un cookie de 24 heures ! Voulez-vous plus d'informations ? 💰",
    bibliotheque: "La bibliothèque contient des ressources par pays et des outils. Accédez-y via le menu Outils ! 📚",
    aide: "Je peux vous aider avec : les boutiques Amazon, le programme d'affiliation, la bibliothèque de ressources, ou toute autre question !",
    contact: "Support disponible 24 sur 7, en multilingue via notre plateforme ! 📞",
    securite: "Vos données sont cryptées et conformes au RGPD. Transactions 100% sécurisées ! 🔒",
    default: "Je suis là pour vous aider ! Demandez-moi sur nos boutiques, l'affiliation, ou nos ressources. 😊"
  },
  en: {
    boutiques: "We have 26 Amazon stores in 14 countries! Want to know which ones? 🛍️",
    pays: "Our stores cover: France, Italy, Germany, Spain, UK, USA, Canada, Brazil, Australia, India, Singapore, Sweden, New Zealand, Belgium",
    affiliation: "Our affiliate program offers 4 to 10 percent commission with 24 hour cookie! Want more info? 💰",
    bibliotheque: "The library contains country resources and tools. Access it via the Tools menu! 📚",
    aide: "I can help you with: Amazon stores, affiliate program, resource library, or any other question!",
    contact: "24/7 multilingual support available through our platform! 📞",
    securite: "Your data is encrypted and GDPR compliant. 100% secure transactions! 🔒",
    default: "I'm here to help! Ask me about our stores, affiliation, or resources. 😊"
  },
  es: {
    boutiques: "¡Tenemos 26 tiendas Amazon en 14 países! ¿Quieres saber cuáles? 🛍️",
    pays: "Nuestras tiendas cubren: Francia, Italia, Alemania, España, Reino Unido, Estados Unidos, Canadá, Brasil, Australia, India, Singapur, Suecia, Nueva Zelanda, Bélgica",
    affiliation: "¡Nuestro programa de afiliados ofrece del 4 al 10 por ciento de comisión con cookie de 24 horas! ¿Quieres más información? 💰",
    bibliotheque: "La biblioteca contiene recursos por país y herramientas. ¡Accede desde el menú Herramientas! 📚",
    aide: "Puedo ayudarte con: tiendas Amazon, programa de afiliados, biblioteca de recursos, ¡o cualquier otra pregunta!",
    contact: "¡Soporte multilingüe 24/7 disponible a través de nuestra plataforma! 📞",
    securite: "Tus datos están encriptados y cumplen con RGPD. ¡Transacciones 100% seguras! 🔒",
    default: "¡Estoy aquí para ayudarte! Pregúntame sobre nuestras tiendas, afiliación o recursos. 😊"
  },
  pt: {
    boutiques: "Temos 26 lojas Amazon em 14 países! Quer saber quais? 🛍️",
    pays: "Nossas lojas cobrem: França, Itália, Alemanha, Espanha, Reino Unido, Estados Unidos, Canadá, Brasil, Austrália, Índia, Singapura, Suécia, Nova Zelândia, Bélgica",
    affiliation: "Nosso programa de afiliados oferece de 4 a 10 por cento de comissão com cookie de 24 horas! Quer mais informações? 💰",
    bibliotheque: "A biblioteca contém recursos por país e ferramentas. Acesse pelo menu Ferramentas! 📚",
    aide: "Posso ajudá-lo com: lojas Amazon, programa de afiliados, biblioteca de recursos ou qualquer outra pergunta!",
    contact: "Suporte multilíngue 24 horas por dia disponível através da nossa plataforma! 📞",
    securite: "Seus dados são criptografados e compatíveis com RGPD. Transações 100% seguras! 🔒",
    default: "Estou aqui para ajudar! Pergunte-me sobre nossas lojas, afiliação ou recursos. 😊"
  },
  it: {
    boutiques: "Abbiamo 26 negozi Amazon in 14 paesi! Vuoi sapere quali? 🛍️",
    pays: "I nostri negozi coprono: Francia, Italia, Germania, Spagna, Regno Unito, Stati Uniti, Canada, Brasile, Australia, India, Singapore, Svezia, Nuova Zelanda, Belgio",
    affiliation: "Il nostro programma di affiliazione offre dal 4 al 10 percento di commissione con cookie di 24 ore! Vuoi più informazioni? 💰",
    bibliotheque: "La biblioteca contiene risorse per paese e strumenti. Accedi dal menu Strumenti! 📚",
    aide: "Posso aiutarti con: negozi Amazon, programma di affiliazione, biblioteca di risorse o qualsiasi altra domanda!",
    contact: "Supporto multilingue 24 ore su 24 disponibile attraverso la nostra piattaforma! 📞",
    securite: "I tuoi dati sono crittografati e conformi al GDPR. Transazioni 100% sicure! 🔒",
    default: "Sono qui per aiutarti! Chiedimi dei nostri negozi, affiliazione o risorse. 😊"
  },
  de: {
    boutiques: "Wir haben 26 Amazon-Shops in 14 Ländern! Möchten Sie wissen, welche? 🛍️",
    pays: "Unsere Shops decken ab: Frankreich, Italien, Deutschland, Spanien, Großbritannien, USA, Kanada, Brasilien, Australien, Indien, Singapur, Schweden, Neuseeland, Belgien",
    affiliation: "Unser Partnerprogramm bietet 4 bis 10 Prozent Provision mit 24 Stunden Cookie! Möchten Sie mehr Informationen? 💰",
    bibliotheque: "Die Bibliothek enthält Länderressourcen und Tools. Zugriff über das Werkzeugmenü! 📚",
    aide: "Ich kann Ihnen helfen mit: Amazon-Shops, Partnerprogramm, Ressourcenbibliothek oder anderen Fragen!",
    contact: "Mehrsprachiger 24/7-Support über unsere Plattform verfügbar! 📞",
    securite: "Ihre Daten sind verschlüsselt und DSGVO-konform. 100% sichere Transaktionen! 🔒",
    default: "Ich bin hier, um zu helfen! Fragen Sie mich über unsere Shops, Partnerprogramm oder Ressourcen. 😊"
  }
}

function detectLanguage(text) {
  const lowerText = text.toLowerCase()
  if (/\b(bonjour|salut|merci|boutique|aide|comment)\b/.test(lowerText)) return 'fr'
  if (/\b(hello|hi|thank|help|how|store)\b/.test(lowerText)) return 'en'
  if (/\b(hola|gracias|ayuda|tienda|como)\b/.test(lowerText)) return 'es'
  if (/\b(olá|obrigado|ajuda|loja|como)\b/.test(lowerText)) return 'pt'
  if (/\b(ciao|grazie|aiuto|negozio|come)\b/.test(lowerText)) return 'it'
  if (/\b(hallo|danke|hilfe|laden|wie)\b/.test(lowerText)) return 'de'
  return 'fr' // Default
}

function getResponse(text, lang) {
  const lowerText = text.toLowerCase()
  const langResponses = responses[lang]
  
  if (/boutique|shop|tienda|loja|negozio|laden/.test(lowerText)) {
    return langResponses.boutiques
  }
  if (/pays|countr|país|paes|land/.test(lowerText)) {
    return langResponses.pays
  }
  if (/affili|partena/.test(lowerText)) {
    return langResponses.affiliation
  }
  if (/biblioth|librar|biblioteca|bibliot/.test(lowerText)) {
    return langResponses.bibliotheque
  }
  if (/aide|help|ajuda|aiuto|hilfe/.test(lowerText)) {
    return langResponses.aide
  }
  if (/contact|support|soporte/.test(lowerText)) {
    return langResponses.contact
  }
  if (/sécur|secur|segur|sicher/.test(lowerText)) {
    return langResponses.securite
  }
  
  return langResponses.default
}

// Fonction pour faire parler le bot avec une voix humaine
function speak(text, lang) {
  if ('speechSynthesis' in window) {
    // Arrêter toute parole en cours
    window.speechSynthesis.cancel()
    
    const utterance = new SpeechSynthesisUtterance(text)
    
    // Configuration de la voix selon la langue
    const langCodes = {
      fr: 'fr-FR',
      en: 'en-US',
      es: 'es-ES',
      pt: 'pt-BR',
      it: 'it-IT',
      de: 'de-DE'
    }
    
    utterance.lang = langCodes[lang] || 'fr-FR'
    utterance.rate = 1.0 // Vitesse normale
    utterance.pitch = 1.1 // Ton légèrement plus aigu pour voix féminine
    utterance.volume = 1.0 // Volume maximum
    
    // Essayer de sélectionner une voix féminine si disponible
    const voices = window.speechSynthesis.getVoices()
    const voice = voices.find(v => 
      v.lang.startsWith(langCodes[lang]) && 
      (v.name.includes('Female') || v.name.includes('femme') || v.name.includes('Google'))
    ) || voices.find(v => v.lang.startsWith(langCodes[lang]))
    
    if (voice) {
      utterance.voice = voice
    }
    
    window.speechSynthesis.speak(utterance)
  }
}

const languages = [
  { code: 'fr', flag: '🇫🇷', name: 'Français' },
  { code: 'en', flag: '🇬🇧', name: 'English' },
  { code: 'es', flag: '🇪🇸', name: 'Español' },
  { code: 'pt', flag: '🇧🇷', name: 'Português' },
  { code: 'it', flag: '🇮🇹', name: 'Italiano' },
  { code: 'de', flag: '🇩🇪', name: 'Deutsch' }
]

export default function BotAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [currentLang, setCurrentLang] = useState('fr')
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [voiceEnabled, setVoiceEnabled] = useState(true)
  const [showLangSelector, setShowLangSelector] = useState(false)

  useEffect(() => {
    setMessages([{ text: greetings[currentLang], isBot: true }])
    // Parler le message de bienvenue
    setTimeout(() => speak(greetings[currentLang], currentLang), 500)
  }, [])

  const changeLang = (newLang) => {
    setCurrentLang(newLang)
    setShowLangSelector(false)
    const greeting = { text: greetings[newLang], isBot: true }
    setMessages([greeting])
    if (voiceEnabled) {
      speak(greetings[newLang], newLang)
    }
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { text: input, isBot: false }
    setMessages(prev => [...prev, userMessage])
    
    const userInput = input
    setInput('')

    // Réponse automatique du bot
    setTimeout(() => {
      const botResponse = getResponse(userInput, currentLang)
      const botMessage = { text: botResponse, isBot: true }
      setMessages(prev => [...prev, botMessage])
      
      // Faire parler le bot si la voix est activée
      if (voiceEnabled) {
        speak(botResponse, currentLang)
      }
    }, 800)
  }

  const toggleVoice = () => {
    setVoiceEnabled(!voiceEnabled)
    if (!voiceEnabled) {
      // Tester la voix avec un message
      const testMessages = {
        fr: "Voix activée !",
        en: "Voice enabled!",
        es: "¡Voz activada!",
        pt: "Voz ativada!",
        it: "Voce attivata!",
        de: "Stimme aktiviert!"
      }
      speak(testMessages[currentLang], currentLang)
    } else {
      window.speechSynthesis.cancel()
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(37, 99, 235, 0.4)',
          zIndex: 1000,
          transition: 'transform 0.2s',
          animation: 'pulse 2s infinite'
        }}
        onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
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
          borderRadius: '16px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1000,
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
            color: 'white',
            padding: '18px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{margin: 0, fontSize: '18px'}}>Assistant Reussitess 🌍</h3>
              <p style={{margin: '4px 0 0 0', fontSize: '12px', opacity: 0.9}}>
                Disponible 24/7 {voiceEnabled ? '🔊' : '🔇'}
              </p>
            </div>
            <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
              {/* Language selector button */}
              <button 
                onClick={() => setShowLangSelector(!showLangSelector)}
                title="Changer de langue"
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  color: 'white',
                  fontSize: '20px',
                  cursor: 'pointer',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
              >
                🌐
              </button>
              
              <button 
                onClick={toggleVoice}
                title={voiceEnabled ? "Désactiver la voix" : "Activer la voix"}
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  color: 'white',
                  fontSize: '20px',
                  cursor: 'pointer',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {voiceEnabled ? '🔊' : '🔇'}
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  color: 'white',
                  fontSize: '24px',
                  cursor: 'pointer',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ×
              </button>
            </div>
          </div>

          {/* Language Selector Dropdown */}
          {showLangSelector && (
            <div style={{
              background: 'white',
              padding: '12px',
              borderBottom: '1px solid #e5e7eb',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '8px'
            }}>
              {languages.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => changeLang(lang.code)}
                  style={{
                    background: currentLang === lang.code ? 'linear-gradient(135deg, #2563eb, #7c3aed)' : '#f3f4f6',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    color: currentLang === lang.code ? 'white' : '#374151',
                    fontWeight: currentLang === lang.code ? 'bold' : 'normal',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    if (currentLang !== lang.code) {
                      e.target.style.background = '#e5e7eb'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentLang !== lang.code) {
                      e.target.style.background = '#f3f4f6'
                    }
                  }}
                >
                  <span style={{fontSize: '24px'}}>{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          )}

          {/* Messages */}
          <div style={{
            flex: 1,
            padding: '20px',
            overflowY: 'auto',
            background: '#f8fafc',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {messages.map((msg, index) => (
              <div key={index} style={{
                alignSelf: msg.isBot ? 'flex-start' : 'flex-end',
                background: msg.isBot ? 'white' : 'linear-gradient(135deg, #2563eb, #7c3aed)',
                color: msg.isBot ? '#1e293b' : 'white',
                padding: '12px 16px',
                borderRadius: msg.isBot ? '16px 16px 16px 4px' : '16px 16px 4px 16px',
                maxWidth: '85%',
                boxShadow: msg.isBot ? '0 2px 8px rgba(0,0,0,0.1)' : '0 2px 8px rgba(37,99,235,0.3)',
                fontSize: '14px',
                lineHeight: '1.5',
                animation: 'fadeIn 0.3s ease-in'
              }}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div style={{
            padding: '16px',
            background: 'white',
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            gap: '12px'
          }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Posez votre question..."
              style={{
                flex: 1,
                padding: '12px',
                border: '2px solid #e2e8f0',
                borderRadius: '12px',
                outline: 'none',
                fontSize: '14px',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#2563eb'}
              onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            />
            <button
              onClick={handleSend}
              style={{
                background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                padding: '12px 20px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              📤
            </button>
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
