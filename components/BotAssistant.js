import React, { useState, useEffect, useRef } from 'react';

const BotAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [language, setLanguage] = useState('fr');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    const supportedLangs = ['en', 'fr', 'de', 'es', 'it', 'pt'];
    setLanguage(supportedLangs.includes(browserLang) ? browserLang : 'en');

    const welcomeMessage = getTranslation('welcome');
    setMessages([{
      id: 1,
      text: welcomeMessage,
      sender: 'bot',
      timestamp: new Date()
    }]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const translations = {
    en: {
      welcome: "👋 Hello! I'm your REUSSITESS® shopping assistant. How can I help you today?",
      placeholder: "Type your message...",
      typing: "Bot is typing...",
      quickReplies: ["Find products", "Best sellers", "Countries", "Help"],
      countries: "🌍 We cover 14 countries with 26 Amazon stores: USA, Canada, UK, France, Germany, Italy, Spain, Brazil, India, Australia, Netherlands, Sweden, Singapore, Belgium.",
      help: "I can help you:\n✓ Find products across 26 Amazon stores\n✓ Compare prices in different countries\n✓ Recommend best sellers\n✓ Navigate our boutiques\n✓ Answer questions about Amazon shopping",
      error: "Sorry, I didn't understand. Try: 'help', 'countries', or 'find products'",
      products: "🛍️ What type of product are you looking for? (electronics, fashion, home, books, etc.)",
      bestSellers: "⭐ Our best sellers include electronics, fashion items, home essentials, and books. Which category interests you?",
      boutiques: "🏪 We have:\n• 14 Personal Boutiques\n• 12 Influencer Boutiques\nWhich would you like to explore?",
      electronics: "📱 Popular electronics:\n• Smartphones & Tablets\n• Laptops & Computers\n• Audio & Headphones\n• Smart Home Devices\n• Gaming Consoles",
      fashion: "👔 Fashion categories:\n• Men's Clothing\n• Women's Clothing\n• Shoes & Accessories\n• Jewelry & Watches\n• Bags & Luggage",
      home: "🏠 Home essentials:\n• Furniture & Decor\n• Kitchen & Dining\n• Bedding & Bath\n• Garden & Outdoor\n• Tools & Home Improvement",
      books: "📚 Book categories:\n• Bestsellers\n• Fiction & Literature\n• Non-Fiction\n• Educational\n• E-books & Audiobooks"
    },
    fr: {
      welcome: "👋 Bonjour ! Je suis votre assistant shopping REUSSITESS®. Comment puis-je vous aider ?",
      placeholder: "Tapez votre message...",
      typing: "Le bot écrit...",
      quickReplies: ["Trouver produits", "Meilleures ventes", "Pays", "Aide"],
      countries: "🌍 Nous couvrons 14 pays avec 26 boutiques Amazon : USA, Canada, UK, France, Allemagne, Italie, Espagne, Brésil, Inde, Australie, Pays-Bas, Suède, Singapour, Belgique.",
      help: "Je peux vous aider à :\n✓ Trouver des produits dans 26 boutiques Amazon\n✓ Comparer les prix\n✓ Recommander les meilleures ventes\n✓ Naviguer dans nos boutiques",
      error: "Désolé, je n'ai pas compris. Essayez : 'aide', 'pays', ou 'trouver produits'",
      products: "🛍️ Quel type de produit recherchez-vous ? (électronique, mode, maison, livres, etc.)",
      bestSellers: "⭐ Nos meilleures ventes : électronique, mode, maison et livres. Quelle catégorie vous intéresse ?",
      boutiques: "🏪 Nous avons :\n• 14 Boutiques Personnelles\n• 12 Boutiques Influenceurs\nLaquelle souhaitez-vous explorer ?",
      electronics: "📱 Électronique populaire :\n• Smartphones & Tablettes\n• Ordinateurs\n• Audio & Casques\n• Maison intelligente\n• Consoles de jeux",
      fashion: "👔 Mode :\n• Vêtements homme\n• Vêtements femme\n• Chaussures & Accessoires\n• Bijoux & Montres\n• Sacs & Bagages",
      home: "🏠 Maison :\n• Meubles & Décoration\n• Cuisine\n• Literie & Bain\n• Jardin\n• Outils & Bricolage",
      books: "📚 Livres :\n• Best-sellers\n• Fiction & Littérature\n• Non-fiction\n• Éducatif\n• E-books & Livres audio"
    },
    de: {
      welcome: "👋 Hallo! Ich bin Ihr REUSSITESS® Einkaufsassistent. Wie kann ich helfen?",
      placeholder: "Nachricht eingeben...",
      typing: "Bot schreibt...",
      quickReplies: ["Produkte finden", "Bestseller", "Länder", "Hilfe"],
      countries: "🌍 Wir decken 14 Länder mit 26 Amazon-Shops ab.",
      help: "Ich kann helfen:\n✓ Produkte finden\n✓ Preise vergleichen\n✓ Bestseller empfehlen",
      error: "Entschuldigung, nicht verstanden. Versuchen Sie: 'Hilfe', 'Länder'",
      products: "🛍️ Welche Art von Produkt suchen Sie?",
      bestSellers: "⭐ Unsere Bestseller: Elektronik, Mode, Haus, Bücher.",
      boutiques: "🏪 Wir haben:\n• 14 Persönliche Boutiquen\n• 12 Influencer-Boutiquen",
      electronics: "📱 Elektronik:\n• Smartphones\n• Laptops\n• Audio\n• Smart Home\n• Gaming",
      fashion: "👔 Mode:\n• Herrenbekleidung\n• Damenbekleidung\n• Schuhe\n• Schmuck\n• Taschen",
      home: "🏠 Haus:\n• Möbel\n• Küche\n• Bad\n• Garten\n• Werkzeuge",
      books: "📚 Bücher:\n• Bestseller\n• Fiktion\n• Sachbücher\n• Bildung"
    },
    es: {
      welcome: "👋 ¡Hola! Soy tu asistente de compras REUSSITESS®. ¿Cómo puedo ayudarte?",
      placeholder: "Escribe tu mensaje...",
      typing: "Bot está escribiendo...",
      quickReplies: ["Buscar productos", "Más vendidos", "Países", "Ayuda"],
      countries: "🌍 Cubrimos 14 países con 26 tiendas Amazon.",
      help: "Puedo ayudarte a:\n✓ Encontrar productos\n✓ Comparar precios\n✓ Recomendar más vendidos",
      error: "Lo siento, no entendí. Prueba: 'ayuda', 'países'",
      products: "🛍️ ¿Qué tipo de producto buscas?",
      bestSellers: "⭐ Nuestros más vendidos: electrónica, moda, hogar, libros.",
      boutiques: "🏪 Tenemos:\n• 14 Boutiques Personales\n• 12 Boutiques Influencers",
      electronics: "📱 Electrónica:\n• Smartphones\n• Portátiles\n• Audio\n• Smart Home\n• Consolas",
      fashion: "👔 Moda:\n• Ropa hombre\n• Ropa mujer\n• Zapatos\n• Joyería\n• Bolsos",
      home: "🏠 Hogar:\n• Muebles\n• Cocina\n• Baño\n• Jardín\n• Herramientas",
      books: "📚 Libros:\n• Bestsellers\n• Ficción\n• No ficción\n• Educativos"
    },
    it: {
      welcome: "👋 Ciao! Sono il tuo assistente shopping REUSSITESS®. Come posso aiutarti?",
      placeholder: "Scrivi il tuo messaggio...",
      typing: "Bot sta scrivendo...",
      quickReplies: ["Trova prodotti", "Più venduti", "Paesi", "Aiuto"],
      countries: "🌍 Copriamo 14 paesi con 26 negozi Amazon.",
      help: "Posso aiutarti a:\n✓ Trovare prodotti\n✓ Confrontare prezzi\n✓ Raccomandare più venduti",
      error: "Scusa, non ho capito. Prova: 'aiuto', 'paesi'",
      products: "🛍️ Che tipo di prodotto cerchi?",
      bestSellers: "⭐ I nostri più venduti: elettronica, moda, casa, libri.",
      boutiques: "🏪 Abbiamo:\n• 14 Boutique Personali\n• 12 Boutique Influencer",
      electronics: "📱 Elettronica:\n• Smartphone\n• Laptop\n• Audio\n• Smart Home\n• Console",
      fashion: "👔 Moda:\n• Abbigliamento uomo\n• Abbigliamento donna\n• Scarpe\n• Gioielli\n• Borse",
      home: "🏠 Casa:\n• Mobili\n• Cucina\n• Bagno\n• Giardino\n• Attrezzi",
      books: "📚 Libri:\n• Bestseller\n• Narrativa\n• Saggistica\n• Educativi"
    },
    pt: {
      welcome: "👋 Olá! Sou seu assistente de compras REUSSITESS®. Como posso ajudar?",
      placeholder: "Digite sua mensagem...",
      typing: "Bot está digitando...",
      quickReplies: ["Buscar produtos", "Mais vendidos", "Países", "Ajuda"],
      countries: "🌍 Cobrimos 14 países com 26 lojas Amazon.",
      help: "Posso ajudar a:\n✓ Encontrar produtos\n✓ Comparar preços\n✓ Recomendar mais vendidos",
      error: "Desculpe, não entendi. Tente: 'ajuda', 'países'",
      products: "🛍️ Que tipo de produto procura?",
      bestSellers: "⭐ Nossos mais vendidos: eletrônicos, moda, casa, livros.",
      boutiques: "🏪 Temos:\n• 14 Boutiques Pessoais\n• 12 Boutiques Influenciadores",
      electronics: "📱 Eletrônicos:\n• Smartphones\n• Laptops\n• Áudio\n• Smart Home\n• Consoles",
      fashion: "👔 Moda:\n• Roupas masculinas\n• Roupas femininas\n• Sapatos\n• Joias\n• Bolsas",
      home: "🏠 Casa:\n• Móveis\n• Cozinha\n• Banho\n• Jardim\n• Ferramentas",
      books: "📚 Livros:\n• Bestsellers\n• Ficção\n• Não-ficção\n• Educacionais"
    }
  };

  const getTranslation = (key) => {
    return translations[language]?.[key] || translations['en'][key] || '';
  };

  const analyzeMessage = (message) => {
    const lowerMsg = message.toLowerCase();
    
    const greetings = ['hello', 'hi', 'hey', 'bonjour', 'salut', 'hola', 'ciao', 'hallo'];
    if (greetings.some(g => lowerMsg.includes(g))) {
      return { intent: 'greeting', confidence: 0.9 };
    }

    const countryKeywords = ['country', 'countries', 'where', 'location', 'pays', 'país', 'paese', 'land'];
    if (countryKeywords.some(k => lowerMsg.includes(k))) {
      return { intent: 'countries', confidence: 0.85 };
    }

    const helpKeywords = ['help', 'aide', 'ayuda', 'aiuto', 'hilfe', 'ajuda'];
    if (helpKeywords.some(k => lowerMsg.includes(k))) {
      return { intent: 'help', confidence: 0.9 };
    }

    const productKeywords = ['find', 'search', 'looking', 'product', 'trouver', 'cherche', 'buscar'];
    if (productKeywords.some(k => lowerMsg.includes(k))) {
      return { intent: 'products', confidence: 0.8 };
    }

    const categories = {
      electronics: ['electronic', 'phone', 'laptop', 'computer', 'électronique', 'ordinateur'],
      fashion: ['fashion', 'clothes', 'clothing', 'mode', 'vêtement', 'ropa'],
      home: ['home', 'house', 'maison', 'casa', 'haus'],
      books: ['book', 'livre', 'libro', 'buch']
    };

    for (const [category, keywords] of Object.entries(categories)) {
      if (keywords.some(k => lowerMsg.includes(k))) {
        return { intent: category, confidence: 0.85 };
      }
    }

    const bestSellerKeywords = ['best', 'popular', 'top', 'meilleur', 'mejor'];
    if (bestSellerKeywords.some(k => lowerMsg.includes(k))) {
      return { intent: 'bestSellers', confidence: 0.8 };
    }

    const boutiqueKeywords = ['boutique', 'shop', 'store', 'tienda', 'negozio'];
    if (boutiqueKeywords.some(k => lowerMsg.includes(k))) {
      return { intent: 'boutiques', confidence: 0.8 };
    }

    return { intent: 'unknown', confidence: 0.5 };
  };

  const generateResponse = (userMessage) => {
    const analysis = analyzeMessage(userMessage);
    
    if (analysis.confidence < 0.6) {
      return getTranslation('error');
    }

    const responses = {
      greeting: getTranslation('welcome'),
      countries: getTranslation('countries'),
      help: getTranslation('help'),
      products: getTranslation('products'),
      bestSellers: getTranslation('bestSellers'),
      boutiques: getTranslation('boutiques'),
      electronics: getTranslation('electronics'),
      fashion: getTranslation('fashion'),
      home: getTranslation('home'),
      books: getTranslation('books'),
      unknown: getTranslation('error')
    };

    return responses[analysis.intent] || responses.unknown;
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMsg = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateResponse(inputMessage);
      const botMsg = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 800 + Math.random() * 1200);
  };

  const handleQuickReply = (reply) => {
    setInputMessage(reply);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 z-50"
        style={{ animation: 'pulse-slow 2s infinite' }}
        aria-label="Open chat assistant"
      >
        {isOpen ? (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-gray-200" style={{ animation: 'slide-up 0.3s ease-out' }}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">REUSSITESS® Assistant</h3>
                <p className="text-xs opacity-90">
                  {isTyping ? getTranslation('typing') : 'Online 24/7'}
                </p>
              </div>
            </div>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-white/20 text-white text-sm rounded px-2 py-1 border-none outline-none cursor-pointer"
            >
              <option value="en">🇬🇧 EN</option>
              <option value="fr">🇫🇷 FR</option>
              <option value="de">🇩🇪 DE</option>
              <option value="es">🇪🇸 ES</option>
              <option value="it">🇮🇹 IT</option>
              <option value="pt">🇵🇹 PT</option>
            </select>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                style={{ animation: 'fade-in 0.3s ease-out' }}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-white text-gray-800 shadow-md'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start" style={{ animation: 'fade-in 0.3s ease-out' }}>
                <div className="bg-white rounded-2xl px-4 py-3 shadow-md">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length <= 2 && (
            <div className="px-4 py-2 bg-white border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2">Quick replies:</p>
              <div className="flex flex-wrap gap-2">
                {getTranslation('quickReplies').map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="px-3 py-1.5 bg-blue-100 text-blue-600 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={getTranslation('placeholder')}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
          }
        }
      `}</style>
    </>
  );
};

export default BotAssistant;
