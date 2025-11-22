'use client'

import { useState, useEffect } from 'react'

export default function BotAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [language, setLanguage] = useState('fr') // fr, en, es, de

  // Base de données internationale
  const internationalData = {
    countries: {
      france: { 
        name: { fr: 'France', en: 'France', es: 'Francia', de: 'Frankreich' },
        pop: '67.7M', tva: '20%', currency: '€', marketplace: 'Amazon.fr'
      },
      martinique: { 
        name: { fr: 'Martinique', en: 'Martinique', es: 'Martinica', de: 'Martinique' },
        pop: '360K', tva: '8.5%', currency: '€', marketplace: 'Amazon.fr'
      },
      guadeloupe: { 
        name: { fr: 'Guadeloupe', en: 'Guadeloupe', es: 'Guadalupe', de: 'Guadeloupe' },
        pop: '385K', tva: '8.5%', currency: '€', marketplace: 'Amazon.fr'
      },
      guyane: { 
        name: { fr: 'Guyane', en: 'French Guiana', es: 'Guayana Francesa', de: 'Französisch-Guayana' },
        pop: '290K', tva: '8.5%', currency: '€', marketplace: 'Amazon.fr'
      },
      uk: { 
        name: { fr: 'Royaume-Uni', en: 'United Kingdom', es: 'Reino Unido', de: 'Vereinigtes Königreich' },
        pop: '67M', tva: '20%', currency: '£', marketplace: 'Amazon.co.uk'
      },
      germany: { 
        name: { fr: 'Allemagne', en: 'Germany', es: 'Alemania', de: 'Deutschland' },
        pop: '83M', tva: '19%', currency: '€', marketplace: 'Amazon.de'
      },
      usa: { 
        name: { fr: 'États-Unis', en: 'United States', es: 'Estados Unidos', de: 'Vereinigte Staaten' },
        pop: '331M', tva: 'Variable', currency: '$', marketplace: 'Amazon.com'
      },
      spain: { 
        name: { fr: 'Espagne', en: 'Spain', es: 'España', de: 'Spanien' },
        pop: '47M', tva: '21%', currency: '€', marketplace: 'Amazon.es'
      },
      italy: { 
        name: { fr: 'Italie', en: 'Italy', es: 'Italia', de: 'Italien' },
        pop: '60M', tva: '22%', currency: '€', marketplace: 'Amazon.it'
      }
    }
  };

  const translations = {
    fr: {
      greeting: "👋 Bonjour ! Je suis BiblioBot, votre assistant international !\n\n🌍 Je parle français, anglais, espagnol et allemand !\n\n💡 Je connais les informations sur de nombreux pays, leurs systèmes de TVA, marketplaces Amazon, et bien plus !\n\n✨ Tapez 'langue' pour changer de langue, ou posez-moi une question !",
      help: "🤔 Je peux vous aider avec :\n\n🌍 **Pays** : France, Martinique, Guadeloupe, Guyane, UK, Allemagne, USA, Espagne, Italie\n\n💼 **Informations** : TVA, population, monnaie, Amazon marketplace\n\n📚 **Sections** : Histoire, Outils, Réglementation, Actualités, Ressources Prof\n\n🗣️ **Langues** : Tapez 'English', 'Español' ou 'Deutsch' pour changer",
      languageChanged: "✅ Langue changée ! Je parle maintenant français.",
      history: "📖 Section Histoire : Découvrez l&apos;histoire de l&apos;Afrique, des Caraïbes, des DOM-TOM et des anciennes colonies françaises avec chronologies détaillées et biographies !",
      tools: "🧮 Section Outils : Calculateurs de TVA, commissions Amazon, simulateurs de marges - Tout pour optimiser votre e-commerce !",
      regulations: "⚖️ Réglementation : Normes UE, OMC, ISO, droit français et spécificités DOM-TOM - Informations juridiques à jour !",
      teachers: "👨‍🏫 Ressources Professeurs : Séquences pédagogiques, études de cas, supports de cours pour tous niveaux !",
      news: "📰 Actualités : Tendances e-commerce 2025, évolutions réglementaires, innovations technologiques !",
      thanks: "😊 De rien ! Toujours à votre service ! N&apos;hésitez pas pour d&apos;autres questions ! 🌟",
      goodbye: "👋 Au revoir ! Revenez quand vous voulez, je suis toujours là ! 💙"
    },
    en: {
      greeting: "👋 Hello! I&apos;m BiblioBot, your international assistant!\n\n🌍 I speak French, English, Spanish and German!\n\n💡 I know information about many countries, their VAT systems, Amazon marketplaces, and much more!\n\n✨ Type &apos;language&apos; to change language, or ask me a question!",
      help: "🤔 I can help you with:\n\n🌍 **Countries**: France, Martinique, Guadeloupe, French Guiana, UK, Germany, USA, Spain, Italy\n\n💼 **Information**: VAT, population, currency, Amazon marketplace\n\n📚 **Sections**: History, Tools, Regulations, News, Teacher Resources\n\n🗣️ **Languages**: Type &apos;Français&apos;, &apos;Español&apos; or &apos;Deutsch&apos; to switch",
      languageChanged: "✅ Language changed! I now speak English.",
      history: "📖 History Section: Discover the history of Africa, Caribbean, French overseas territories and former French colonies with detailed timelines and biographies!",
      tools: "🧮 Tools Section: VAT calculators, Amazon commissions, margin simulators - Everything to optimize your e-commerce!",
      regulations: "⚖️ Regulations: EU standards, WTO, ISO, French law and DOM-TOM specifics - Up-to-date legal information!",
      teachers: "👨‍🏫 Teacher Resources: Lesson plans, case studies, course materials for all levels!",
      news: "📰 News: E-commerce trends 2025, regulatory changes, technological innovations!",
      thanks: "😊 You&apos;re welcome! Always at your service! Don&apos;t hesitate for other questions! 🌟",
      goodbye: "👋 Goodbye! Come back anytime, I&apos;m always here! 💙"
    },
    es: {
      greeting: "👋 ¡Hola! Soy BiblioBot, ¡tu asistente internacional!\n\n🌍 ¡Hablo francés, inglés, español y alemán!\n\n💡 Conozco información sobre muchos países, sus sistemas de IVA, marketplaces de Amazon, ¡y mucho más!\n\n✨ Escribe &apos;idioma&apos; para cambiar de idioma, ¡o hazme una pregunta!",
      help: "🤔 Puedo ayudarte con:\n\n🌍 **Países**: Francia, Martinica, Guadalupe, Guayana Francesa, UK, Alemania, USA, España, Italia\n\n💼 **Información**: IVA, población, moneda, marketplace Amazon\n\n📚 **Secciones**: Historia, Herramientas, Regulaciones, Noticias, Recursos para Profesores\n\n🗣️ **Idiomas**: Escribe &apos;Français&apos;, &apos;English&apos; o &apos;Deutsch&apos; para cambiar",
      languageChanged: "✅ ¡Idioma cambiado! Ahora hablo español.",
      history: "📖 Sección Historia: ¡Descubre la historia de África, el Caribe, los territorios franceses de ultramar y las antiguas colonias francesas con cronologías detalladas y biografías!",
      tools: "🧮 Sección Herramientas: Calculadoras de IVA, comisiones Amazon, simuladores de márgenes - ¡Todo para optimizar tu e-commerce!",
      regulations: "⚖️ Regulaciones: Normas UE, OMC, ISO, derecho francés y especificidades DOM-TOM - ¡Información legal actualizada!",
      teachers: "👨‍🏫 Recursos para Profesores: ¡Planes de lecciones, estudios de caso, materiales de curso para todos los niveles!",
      news: "📰 Noticias: Tendencias e-commerce 2025, cambios regulatorios, ¡innovaciones tecnológicas!",
      thanks: "😊 ¡De nada! ¡Siempre a tu servicio! ¡No dudes en hacer otras preguntas! 🌟",
      goodbye: "👋 ¡Adiós! ¡Vuelve cuando quieras, siempre estoy aquí! 💙"
    },
    de: {
      greeting: "👋 Hallo! Ich bin BiblioBot, Ihr internationaler Assistent!\n\n🌍 Ich spreche Französisch, Englisch, Spanisch und Deutsch!\n\n💡 Ich kenne Informationen über viele Länder, ihre Mehrwertsteuersysteme, Amazon-Marktplätze und vieles mehr!\n\n✨ Tippen Sie &apos;Sprache&apos;, um die Sprache zu ändern, oder stellen Sie mir eine Frage!",
      help: "🤔 Ich kann Ihnen helfen mit:\n\n🌍 **Länder**: Frankreich, Martinique, Guadeloupe, Französisch-Guayana, UK, Deutschland, USA, Spanien, Italien\n\n💼 **Informationen**: MwSt, Bevölkerung, Währung, Amazon-Marktplatz\n\n📚 **Bereiche**: Geschichte, Werkzeuge, Vorschriften, Nachrichten, Lehrerressourcen\n\n🗣️ **Sprachen**: Tippen Sie &apos;Français&apos;, &apos;English&apos; oder &apos;Español&apos; zum Wechseln",
      languageChanged: "✅ Sprache geändert! Ich spreche jetzt Deutsch.",
      history: "📖 Geschichtsbereich: Entdecken Sie die Geschichte Afrikas, der Karibik, der französischen Überseegebiete und ehemaligen französischen Kolonien mit detaillierten Zeitleisten und Biografien!",
      tools: "🧮 Werkzeugbereich: MwSt-Rechner, Amazon-Provisionen, Margensimulationen - Alles zur Optimierung Ihres E-Commerce!",
      regulations: "⚖️ Vorschriften: EU-Standards, WTO, ISO, französisches Recht und DOM-TOM-Besonderheiten - Aktuelle Rechtsinformationen!",
      teachers: "👨‍🏫 Lehrerressourcen: Unterrichtspläne, Fallstudien, Kursmaterialien für alle Stufen!",
      news: "📰 Nachrichten: E-Commerce-Trends 2025, regulatorische Änderungen, technologische Innovationen!",
      thanks: "😊 Gern geschehen! Immer zu Ihren Diensten! Zögern Sie nicht, weitere Fragen zu stellen! 🌟",
      goodbye: "👋 Auf Wiedersehen! Kommen Sie jederzeit zurück, ich bin immer hier! 💙"
    }
  };

  const t = translations[language];

  useEffect(() => {
    setMessages([{ text: t.greeting, isBot: true }])
  }, [language])

  const detectLanguage = (input) => {
    const lower = input.toLowerCase();
    if (lower.includes('english') || lower === 'en') return 'en';
    if (lower.includes('español') || lower.includes('espagnol') || lower === 'es') return 'es';
    if (lower.includes('deutsch') || lower.includes('allemand') || lower === 'de') return 'de';
    if (lower.includes('français') || lower.includes('francais') || lower === 'fr') return 'fr';
    return null;
  };

  const getCountryInfo = (countryKey, lang) => {
    const country = internationalData.countries[countryKey];
    if (!country) return null;
    
    const name = country.name[lang] || country.name['en'];
    return `🌍 **${name}**\n📊 Population: ${country.pop}\n💰 ${lang === 'fr' ? 'TVA' : lang === 'en' ? 'VAT' : lang === 'es' ? 'IVA' : 'MwSt'}: ${country.tva}\n💵 ${lang === 'fr' ? 'Monnaie' : lang === 'en' ? 'Currency' : lang === 'es' ? 'Moneda' : 'Währung'}: ${country.currency}\n🛒 Marketplace: ${country.marketplace}`;
  };

  const getBotResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    
    // Détection changement de langue
    const newLang = detectLanguage(userInput);
    if (newLang && newLang !== language) {
      setLanguage(newLang);
      return translations[newLang].languageChanged;
    }
    
    // Salutations multilingues
    if (lowerInput.match(/\b(bonjour|salut|hello|hi|hola|hallo|coucou)\b/)) {
      return t.greeting;
    }
    
    // Aide
    if (lowerInput.match(/\b(aide|help|ayuda|hilfe)\b/)) {
      return t.help;
    }
    
    // Recherche de pays
    for (const [key, data] of Object.entries(internationalData.countries)) {
      const names = Object.values(data.name).map(n => n.toLowerCase());
      if (names.some(name => lowerInput.includes(name))) {
        return getCountryInfo(key, language);
      }
    }
    
    // Sections thématiques
    if (lowerInput.match(/\b(histoire|history|historia|geschichte|afrique|africa|caraïbes|caribbean)\b/)) {
      return t.history;
    }
    
    if (lowerInput.match(/\b(tva|vat|iva|mwst|calculateur|calculator|calculadora|rechner|outil|tool)\b/)) {
      return t.tools;
    }
    
    if (lowerInput.match(/\b(réglementation|regulation|regulación|vorschrift|loi|law|ley|gesetz)\b/)) {
      return t.regulations;
    }
    
    if (lowerInput.match(/\b(prof|teacher|profesor|lehrer|pédagogie|pedagogy)\b/)) {
      return t.teachers;
    }
    
    if (lowerInput.match(/\b(actualité|news|noticia|nachricht|actu)\b/)) {
      return t.news;
    }
    
    // Remerciements
    if (lowerInput.match(/\b(merci|thank|gracia|danke)\b/)) {
      return t.thanks;
    }
    
    // Au revoir
    if (lowerInput.match(/\b(au revoir|bye|adios|auf wiedersehen|goodbye)\b/)) {
      return t.goodbye;
    }
    
    // Réponse par défaut
    return t.help;
  };

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { text: input, isBot: false }
    setMessages(prev => [...prev, userMessage])
    
    const userInput = input;
    setInput('')

    setTimeout(() => {
      const botResponse = getBotResponse(userInput);
      const botMessage = { text: botResponse, isBot: true }
      setMessages(prev => [...prev, botMessage])
    }, 800)
  }

  const langFlags = {
    fr: '🇫🇷',
    en: '🇬🇧',
    es: '🇪🇸',
    de: '🇩🇪'
  };

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
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(600px, 90vw)',
          height: 'min(700px, 85vh)',
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 9999
        }}>
          {/* Overlay dark background */}
          <div 
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              zIndex: -1
            }}
          />
          
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '15px 20px',
            borderRadius: '15px 15px 0 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ flex: 1 }}>
              <h3 style={{margin: 0, fontSize: '1.2em'}}>🤖 BiblioBot {langFlags[language]}</h3>
              <p style={{margin: '5px 0 0 0', fontSize: '0.85em', opacity: 0.9}}>
                {language === 'fr' && 'Assistant International'}
                {language === 'en' && 'International Assistant'}
                {language === 'es' && 'Asistente Internacional'}
                {language === 'de' && 'Internationaler Assistent'}
              </p>
            </div>
            <div style={{ display: 'flex', gap: '5px', marginRight: '10px' }}>
              {Object.keys(langFlags).map(lang => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  style={{
                    background: language === lang ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
                    border: 'none',
                    color: 'white',
                    fontSize: '16px',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    padding: '4px 6px',
                    transition: 'background 0.2s'
                  }}
                  title={lang.toUpperCase()}
                >
                  {langFlags[lang]}
                </button>
              ))}
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
                lineHeight: '1.4',
                whiteSpace: 'pre-line'
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
                placeholder={
                  language === 'fr' ? 'Posez votre question...' :
                  language === 'en' ? 'Ask your question...' :
                  language === 'es' ? 'Haz tu pregunta...' :
                  'Stellen Sie Ihre Frage...'
                }
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
                {language === 'fr' ? 'Envoyer' :
                 language === 'en' ? 'Send' :
                 language === 'es' ? 'Enviar' :
                 'Senden'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
