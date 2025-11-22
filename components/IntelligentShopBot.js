'use client'
import { useState, useEffect } from 'react'

export default function IntelligentShopBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [language, setLanguage] = useState('fr')

  // BASE DE DONNÉES MONDIALE COMPLÈTE DU PROJET
  const globalDatabase = {
    // 26 Boutiques Amazon - Base de données complète
    amazonShops: {
      personal: [
        { country: 'États-Unis', flag: '🇺🇸', link: 'https://www.amazon.com/shop/amourguadeloupe', marketplace: 'Amazon.com', currency: '$', population: '331M', languages: ['en', 'es'], timezone: 'UTC-5', continent: 'Amérique' },
        { country: 'Italie', flag: '🇮🇹', link: 'https://www.amazon.it/shop/amourguadeloupe', marketplace: 'Amazon.it', currency: '€', population: '60M', languages: ['it', 'en'], timezone: 'UTC+1', continent: 'Europe' },
        { country: 'France', flag: '🇫🇷', link: 'https://www.amazon.fr/shop/amourguadeloupe', marketplace: 'Amazon.fr', currency: '€', population: '67M', languages: ['fr'], timezone: 'UTC+1', continent: 'Europe' },
        { country: 'Espagne', flag: '🇪🇸', link: 'https://www.amazon.es/shop/amourguadeloupe', marketplace: 'Amazon.es', currency: '€', population: '47M', languages: ['es', 'ca'], timezone: 'UTC+1', continent: 'Europe' },
        { country: 'Allemagne', flag: '🇩🇪', link: 'https://www.amazon.de/shop/amourguadeloupe', marketplace: 'Amazon.de', currency: '€', population: '83M', languages: ['de'], timezone: 'UTC+1', continent: 'Europe' },
        { country: 'Canada', flag: '🇨🇦', link: 'https://www.amazon.ca/shop/amourguadeloupe', marketplace: 'Amazon.ca', currency: 'CAD', population: '38M', languages: ['en', 'fr'], timezone: 'UTC-5', continent: 'Amérique' },
        { country: 'Inde', flag: '🇮🇳', link: 'https://www.amazon.in/shop/amourguadeloupe', marketplace: 'Amazon.in', currency: '₹', population: '1.4B', languages: ['hi', 'en'], timezone: 'UTC+5:30', continent: 'Asie' },
        { country: 'Pays-Bas', flag: '🇳🇱', link: 'https://www.amazon.nl/shop/amourguadeloupe', marketplace: 'Amazon.nl', currency: '€', population: '17M', languages: ['nl'], timezone: 'UTC+1', continent: 'Europe' },
        { country: 'Suède', flag: '🇸🇪', link: 'https://www.amazon.se/shop/amourguadeloupe', marketplace: 'Amazon.se', currency: 'SEK', population: '10M', languages: ['sv'], timezone: 'UTC+1', continent: 'Europe' },
        { country: 'Singapour', flag: '🇸🇬', link: 'https://www.amazon.sg/shop/amourguadeloupe', marketplace: 'Amazon.sg', currency: 'SGD', population: '5.9M', languages: ['en', 'zh', 'ms'], timezone: 'UTC+8', continent: 'Asie' },
        { country: 'Royaume-Uni', flag: '🇬🇧', link: 'https://www.amazon.co.uk/shop/amourguadeloupe', marketplace: 'Amazon.co.uk', currency: '£', population: '67M', languages: ['en'], timezone: 'UTC+0', continent: 'Europe' },
        { country: 'Australie', flag: '🇦🇺', link: 'https://www.amazon.com.au/shop/amourguadeloupe', marketplace: 'Amazon.com.au', currency: 'AUD', population: '26M', languages: ['en'], timezone: 'UTC+10', continent: 'Océanie' },
        { country: 'Belgique', flag: '🇧🇪', link: 'https://www.amazon.com.be/shop/amourguadeloupe', marketplace: 'Amazon.com.be', currency: '€', population: '11M', languages: ['fr', 'nl', 'de'], timezone: 'UTC+1', continent: 'Europe' },
        { country: 'Brésil', flag: '🇧🇷', link: 'https://www.amazon.com.br/shop/amourguadeloupe', marketplace: 'Amazon.com.br', currency: 'R$', population: '214M', languages: ['pt'], timezone: 'UTC-3', continent: 'Amérique' }
      ],
      influencer: [
        { country: 'États-Unis', flag: '🇺🇸', link: 'https://www.amazon.com/shop/influencer-fb942837', marketplace: 'Amazon.com', type: 'influencer' },
        { country: 'Royaume-Uni', flag: '🇬🇧', link: 'https://www.amazon.co.uk/shop/influencer-fb942837', marketplace: 'Amazon.co.uk', type: 'influencer' },
        { country: 'Inde', flag: '🇮🇳', link: 'https://www.amazon.in/shop/influencer-fb942837', marketplace: 'Amazon.in', type: 'influencer' },
        { country: 'Suède', flag: '🇸🇪', link: 'https://www.amazon.se/shop/influencer-fb942837', marketplace: 'Amazon.se', type: 'influencer' },
        { country: 'Singapour', flag: '🇸🇬', link: 'https://www.amazon.sg/shop/influencer-fb942837', marketplace: 'Amazon.sg', type: 'influencer' },
        { country: 'Belgique', flag: '🇧🇪', link: 'https://www.amazon.com.be/shop/influencer-fb942837', marketplace: 'Amazon.com.be', type: 'influencer' },
        { country: 'Espagne', flag: '🇪🇸', link: 'https://www.amazon.es/shop/influencer-fb942837', marketplace: 'Amazon.es', type: 'influencer' },
        { country: 'Allemagne', flag: '🇩🇪', link: 'https://www.amazon.de/shop/influencer-fb942837', marketplace: 'Amazon.de', type: 'influencer' },
        { country: 'Canada', flag: '🇨🇦', link: 'https://www.amazon.ca/shop/influencer-fb942837', marketplace: 'Amazon.ca', type: 'influencer' },
        { country: 'Pays-Bas', flag: '🇳🇱', link: 'https://www.amazon.nl/shop/influencer-fb942837', marketplace: 'Amazon.nl', type: 'influencer' },
        { country: 'France', flag: '🇫🇷', link: 'https://www.amazon.fr/shop/influencer-fb942837', marketplace: 'Amazon.fr', type: 'influencer' },
        { country: 'Australie', flag: '🇦🇺', link: 'https://www.amazon.com.au/shop/influencer-fb942837', marketplace: 'Amazon.com.au', type: 'influencer' }
      ],
      stats: {
        total: 26,
        countries: 14,
        continents: 5,
        personal: 14,
        influencer: 12
      }
    },

    // Base de connaissances sur le projet REUSSITESS
    projectInfo: {
      name: 'REUSSITESS® Global Nexus',
      description: 'Réseau global de 26 boutiques Amazon à travers 14 pays et 5 continents',
      mission: 'Connecter les acheteurs du monde entier avec des produits de qualité via Amazon',
      features: [
        'Protection anti-copie avancée',
        'Conformité Amazon Associates et FTC',
        'Système de feedback utilisateur',
        'Sécurité renforcée (Score 92/100)',
        'Support multilingue',
        'Navigation intelligente'
      ],
      security: {
        score: '92/100',
        headers: ['X-Frame-Options', 'HSTS', 'CSP', 'XSS-Protection'],
        compliance: ['Amazon Associates', 'FTC', 'RGPD']
      }
    },

    // Territoires français d'outre-mer (culture Guadeloupe)
    domTom: {
      guadeloupe: {
        name: 'Guadeloupe',
        flag: '🇬🇵',
        population: '385K',
        description: 'Terre de Champions - Archipel des Caraïbes',
        culture: 'Créole, française',
        marketplace: 'Amazon.fr'
      },
      martinique: {
        name: 'Martinique',
        flag: '🇲🇶',
        population: '360K',
        description: 'Île aux fleurs',
        marketplace: 'Amazon.fr'
      },
      guyane: {
        name: 'Guyane',
        flag: '🇬🇫',
        population: '290K',
        description: 'Région amazonienne française',
        marketplace: 'Amazon.fr'
      }
    },

    // Continents couverts
    continents: {
      'Europe': ['France', 'Italie', 'Espagne', 'Allemagne', 'Royaume-Uni', 'Pays-Bas', 'Suède', 'Belgique'],
      'Amérique': ['États-Unis', 'Canada', 'Brésil'],
      'Asie': ['Inde', 'Singapour'],
      'Océanie': ['Australie']
    }
  }

  // Traductions multilingues
  const translations = {
    fr: {
      greeting: "👋 Bonjour! Je suis l'Assistant Intelligent REUSSITESS®.\n\n🧠 J'AI ACCÈS À LA TOTALITÉ DES DONNÉES DE VOTRE CONCEPT:\n• 26 boutiques Amazon mondiales\n• 14 pays sur 5 continents\n• Toutes les informations sur chaque pays\n• Devises, langues, populations\n• Culture Guadeloupe & DOM-TOM\n• Sécurité et conformité du projet\n\nJe peux répondre à TOUTES vos questions sur le réseau REUSSITESS®!",
      placeholder: "Posez n'importe quelle question...",
      visitShop: "Visiter la boutique",
      personal: "Boutique Personnelle",
      influencer: "Boutique Influenceur"
    },
    en: {
      greeting: "👋 Hello! I'm the REUSSITESS® Intelligent Assistant.\n\n🧠 I HAVE ACCESS TO ALL YOUR CONCEPT DATA:\n• 26 global Amazon shops\n• 14 countries across 5 continents\n• All information about each country\n• Currencies, languages, populations\n• Guadeloupe culture & DOM-TOM\n• Project security and compliance\n\nI can answer ALL your questions about the REUSSITESS® network!",
      placeholder: "Ask any question...",
      visitShop: "Visit shop",
      personal: "Personal Shop",
      influencer: "Influencer Shop"
    },
    es: {
      greeting: "👋 ¡Hola! Soy el Asistente Inteligente REUSSITESS®.\n\n🧠 TENGO ACCESO A TODOS LOS DATOS DE SU CONCEPTO:\n• 26 tiendas Amazon globales\n• 14 países en 5 continentes\n• Toda la información sobre cada país\n• Monedas, idiomas, poblaciones\n• Cultura Guadalupe & DOM-TOM\n• Seguridad y cumplimiento del proyecto\n\n¡Puedo responder TODAS sus preguntas sobre la red REUSSITESS®!",
      placeholder: "Haga cualquier pregunta...",
      visitShop: "Visitar tienda",
      personal: "Tienda Personal",
      influencer: "Tienda Influencer"
    },
    de: {
      greeting: "👋 Hallo! Ich bin der REUSSITESS® Intelligente Assistent.\n\n🧠 ICH HABE ZUGRIFF AUF ALLE IHRE KONZEPTDATEN:\n• 26 globale Amazon-Shops\n• 14 Länder auf 5 Kontinenten\n• Alle Informationen über jedes Land\n• Währungen, Sprachen, Bevölkerungen\n• Guadeloupe-Kultur & DOM-TOM\n• Projektsicherheit und Compliance\n\nIch kann ALLE Ihre Fragen zum REUSSITESS®-Netzwerk beantworten!",
      placeholder: "Stellen Sie eine beliebige Frage...",
      visitShop: "Shop besuchen",
      personal: "Persönlicher Shop",
      influencer: "Influencer-Shop"
    },
    pt: {
      greeting: "👋 Olá! Sou o Assistente Inteligente REUSSITESS®.\n\n🧠 TENHO ACESSO A TODOS OS DADOS DO SEU CONCEITO:\n• 26 lojas Amazon globais\n• 14 países em 5 continentes\n• Todas as informações sobre cada país\n• Moedas, idiomas, populações\n• Cultura Guadalupe & DOM-TOM\n• Segurança e conformidade do projeto\n\nPosso responder TODAS as suas perguntas sobre a rede REUSSITESS®!",
      placeholder: "Faça qualquer pergunta...",
      visitShop: "Visitar loja",
      personal: "Loja Pessoal",
      influencer: "Loja Influenciador"
    }
  }

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        type: 'bot',
        text: translations[language].greeting
      }])
    }
  }, [isOpen, language])

  // INTELLIGENCE ARTIFICIELLE - Raisonnement intelligent
  const intelligentReasoning = (query) => {
    const q = query.toLowerCase()
    
    // Recherche de pays/boutiques
    const shopMatches = [...globalDatabase.amazonShops.personal, ...globalDatabase.amazonShops.influencer]
      .filter(shop => 
        shop.country.toLowerCase().includes(q) ||
        shop.marketplace.toLowerCase().includes(q) ||
        shop.flag.includes(q) ||
        (shop.continent && shop.continent.toLowerCase().includes(q)) ||
        (shop.languages && shop.languages.some(lang => q.includes(lang)))
      )

    // Questions sur les statistiques
    if (q.match(/combien|how many|cuántas|quantas|wie viele/)) {
      if (q.includes('pays') || q.includes('country') || q.includes('países') || q.includes('länder')) {
        return {
          type: 'stats',
          text: `🌍 Nous avons ${globalDatabase.amazonShops.stats.countries} pays couverts à travers ${globalDatabase.amazonShops.stats.continents} continents, avec ${globalDatabase.amazonShops.stats.total} boutiques Amazon au total.`
        }
      }
      if (q.includes('boutique') || q.includes('shop') || q.includes('tienda') || q.includes('loja')) {
        return {
          type: 'stats',
          text: `🛍️ Total: ${globalDatabase.amazonShops.stats.total} boutiques (${globalDatabase.amazonShops.stats.personal} personnelles + ${globalDatabase.amazonShops.stats.influencer} influenceurs)`
        }
      }
    }

    // Questions sur les continents
    if (q.includes('continent') || q.includes('región')) {
      const continentList = Object.entries(globalDatabase.continents)
        .map(([cont, pays]) => `${cont}: ${pays.join(', ')}`)
        .join('\n\n')
      return {
        type: 'info',
        text: `🌎 Nos boutiques couvrent ${globalDatabase.amazonShops.stats.continents} continents:\n\n${continentList}`
      }
    }

    // Questions sur la Guadeloupe/DOM-TOM
    if (q.match(/guadeloupe|martinique|guyane|dom.?tom|outre.?mer/)) {
      const domtom = Object.values(globalDatabase.domTom)
      return {
        type: 'domtom',
        text: `🏝️ Territoires français d'outre-mer:`,
        data: domtom
      }
    }

    // Questions sur le projet/sécurité
    if (q.match(/projet|reussitess|sécurité|security|seguridad/)) {
      return {
        type: 'project',
        text: `🚀 ${globalDatabase.projectInfo.name}\n\n📋 ${globalDatabase.projectInfo.description}\n\n🔒 Sécurité: ${globalDatabase.projectInfo.security.score}\n\n✨ Fonctionnalités:\n${globalDatabase.projectInfo.features.map(f => `• ${f}`).join('\n')}`
      }
    }

    // Questions sur les devises
    if (q.match(/devise|currency|moneda|moeda|währung/)) {
      const currencies = [...new Set(globalDatabase.amazonShops.personal.map(s => s.currency))]
      return {
        type: 'info',
        text: `💰 Devises supportées: ${currencies.join(', ')}`
      }
    }

    // Questions sur les langues
    if (q.match(/langue|language|idioma|língua|sprache/)) {
      const allLanguages = [...new Set(globalDatabase.amazonShops.personal.flatMap(s => s.languages || []))]
      return {
        type: 'info',
        text: `🗣️ Langues disponibles: ${allLanguages.join(', ').toUpperCase()}`
      }
    }

    // Recherche de boutiques spécifiques
    if (shopMatches.length > 0) {
      return {
        type: 'shops',
        shops: shopMatches.slice(0, 6)
      }
    }

    // Questions d'aide
    if (q.match(/aide|help|ayuda|ajuda|hilfe|comment|capacité|pouvoir/)) {
      return {
        type: 'help',
        text: `💡 JE LIS ET COMPRENDS LA TOTALITÉ DES DONNÉES DE VOTRE CONCEPT:\n\n📊 BASE DE DONNÉES COMPLÈTE:\n• 26 boutiques Amazon (14 personnelles + 12 influenceurs)\n• 14 pays détaillés avec populations, devises, langues\n• 5 continents couverts (Europe, Amérique, Asie, Océanie)\n• Informations culturelles (Guadeloupe, Martinique, Guyane)\n• Données de sécurité du projet (Score 92/100)\n• Conformité légale (Amazon Associates, FTC, RGPD)\n\n❓ EXEMPLES DE QUESTIONS:\n• "Boutiques en Europe"\n• "Combien de pays?"\n• "Informations sur le projet"\n• "Boutiques avec l'euro"\n• "Population de l'Inde"\n• "Langues en Belgique"\n• "Culture Guadeloupe"\n• "Sécurité du site"\n\n🌍 JE PEUX RÉPONDRE À TOUTE QUESTION SUR LE RÉSEAU REUSSITESS®!`
      }
    }

    // Réponse par défaut intelligente
    return {
      type: 'default',
      text: `🤔 Je cherche dans ma base de données...\n\nJe n'ai pas trouvé de réponse exacte, mais je connais:\n• ${globalDatabase.amazonShops.stats.total} boutiques Amazon\n• ${globalDatabase.amazonShops.stats.countries} pays\n• ${globalDatabase.amazonShops.stats.continents} continents\n\nEssayez: "Aide" pour voir ce que je peux faire!`
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { type: 'user', text: input }
    setMessages(prev => [...prev, userMessage])

    // Utiliser le raisonnement intelligent
    const response = intelligentReasoning(input)
    setMessages(prev => [...prev, response])
    
    setInput('')
  }

  const renderShopCard = (shop, index) => {
    const isPersonal = globalDatabase.amazonShops.personal.includes(shop)
    return (
      <div key={index} style={{
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1))',
        border: '2px solid rgba(16, 185, 129, 0.3)',
        borderRadius: '12px',
        padding: '12px',
        marginTop: '8px'
      }}>
        <div style={{ fontSize: '20px', marginBottom: '8px', fontWeight: '700' }}>
          {shop.flag} {shop.country}
        </div>
        {shop.population && (
          <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '4px' }}>
            👥 {shop.population} • 💰 {shop.currency} • 🌍 {shop.continent}
          </div>
        )}
        <div style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '8px' }}>
          {shop.marketplace} • {isPersonal ? translations[language].personal : translations[language].influencer}
        </div>
        <a
          href={shop.link}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #10b981, #3b82f6)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '13px',
            fontWeight: '600'
          }}
        >
          {translations[language].visitShop} →
        </a>
      </div>
    )
  }

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '90px',
          right: '20px',
          width: '65px',
          height: '65px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #10b981, #3b82f6)',
          border: 'none',
          color: 'white',
          fontSize: '32px',
          cursor: 'pointer',
          boxShadow: '0 6px 20px rgba(16, 185, 129, 0.5)',
          zIndex: 998,
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.15) rotate(10deg)'
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(16, 185, 129, 0.7)'
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1) rotate(0deg)'
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.5)'
        }}
      >
        🤖
      </button>

      {/* Modal du bot */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '165px',
          right: '20px',
          width: '400px',
          maxHeight: '650px',
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          border: '2px solid rgba(16, 185, 129, 0.3)'
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #10b981, #3b82f6)',
            padding: '18px',
            color: 'white'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: '800', fontSize: '19px' }}>🤖 Assistant Intelligent</div>
                <div style={{ fontSize: '12px', opacity: 0.95, fontWeight: '500' }}>
                  Base de données: 26 boutiques • 14 pays • 5 continents
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  color: 'white',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontSize: '18px'
                }}
              >
                ×
              </button>
            </div>
            <div style={{ display: 'flex', gap: '6px', marginTop: '10px' }}>
              {['fr', 'en', 'es', 'de', 'pt'].map(lang => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  style={{
                    background: language === lang ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.15)',
                    border: '1px solid rgba(255,255,255,0.6)',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    fontWeight: '700',
                    transition: 'all 0.2s'
                  }}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            background: '#f9fafb'
          }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{
                marginBottom: '14px',
                display: 'flex',
                justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start'
              }}>
                {msg.type === 'user' ? (
                  <div style={{
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    color: 'white',
                    padding: '12px 16px',
                    borderRadius: '16px 16px 4px 16px',
                    maxWidth: '80%',
                    fontWeight: '500'
                  }}>
                    {msg.text}
                  </div>
                ) : (
                  <div style={{ maxWidth: '95%' }}>
                    {msg.text && (
                      <div style={{
                        background: 'white',
                        padding: '12px 16px',
                        borderRadius: '16px 16px 16px 4px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        whiteSpace: 'pre-line',
                        lineHeight: '1.6'
                      }}>
                        {msg.text}
                      </div>
                    )}
                    {msg.shops && msg.shops.map((shop, i) => renderShopCard(shop, i))}
                    {msg.data && msg.data.map((item, i) => (
                      <div key={i} style={{
                        background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(225, 29, 72, 0.1))',
                        border: '2px solid rgba(251, 191, 36, 0.3)',
                        borderRadius: '12px',
                        padding: '12px',
                        marginTop: '8px'
                      }}>
                        <div style={{ fontSize: '18px', fontWeight: '700' }}>
                          {item.flag} {item.name}
                        </div>
                        <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
                          👥 {item.population} • {item.description}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} style={{
            padding: '16px',
            borderTop: '2px solid #e5e7eb',
            background: 'white'
          }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={translations[language].placeholder}
              style={{
                width: '100%',
                padding: '14px',
                border: '2px solid #e5e7eb',
                borderRadius: '12px',
                fontSize: '14px',
                outline: 'none',
                transition: 'all 0.2s'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#10b981'
                e.target.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.1)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e5e7eb'
                e.target.style.boxShadow = 'none'
              }}
            />
          </form>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="width: 400px"] {
            width: calc(100vw - 40px) !important;
            right: 20px !important;
          }
        }
      `}</style>
    </>
  )
}
