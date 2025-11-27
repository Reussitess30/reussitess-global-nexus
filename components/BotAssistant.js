import { useState, useEffect, useRef } from 'react';

export default function BotAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentLang, setCurrentLang] = useState('fr-FR');
  const [userName, setUserName] = useState('');
  const messagesEndRef = useRef(null);

  const languages = [
    { code: 'fr-FR', flag: '🇫🇷', name: 'Français' },
    { code: 'en-US', flag: '🇺🇸', name: 'English' },
    { code: 'es-ES', flag: '🇪🇸', name: 'Español' },
    { code: 'de-DE', flag: '🇩🇪', name: 'Deutsch' },
    { code: 'it-IT', flag: '🇮🇹', name: 'Italiano' },
    { code: 'pt-BR', flag: '🇧🇷', name: 'Português' }
  ];

  const greetings = {
    'fr-FR': 'Bonjour ! 😊 Je suis votre conseiller culturel REUSSITESS, expert en patrimoine mondial. Je connais 62 pages de trésors culturels, recettes authentiques, astuces shopping Amazon, et je vous guide dans vos découvertes. Comment puis-je vous aider ?',
    'en-US': 'Hello! 😊 I am your REUSSITESS cultural advisor, world heritage expert. Ask me anything!',
    'es-ES': '¡Hola! 😊 Soy tu asesor cultural REUSSITESS. ¡Pregúntame!',
    'de-DE': 'Hallo! 😊 Ich bin Ihr REUSSITESS-Kulturberater!',
    'it-IT': 'Ciao! 😊 Sono il tuo consulente culturale REUSSITESS!',
    'pt-BR': 'Olá! 😊 Sou seu consultor cultural REUSSITESS!'
  };

  // [Garder toute la base de connaissances knowledgeBase identique - ne pas répéter ici pour économiser l'espace]
  const knowledgeBase = {
    emotions: {
      bonjour: ['Bonjour ! 😊 Ravi de vous retrouver !', 'Hello ! 👋 Comment allez-vous ?'],
      aurevoir: ['Au revoir ! 👋 À bientôt !', 'Bonne journée ! ☀️'],
      merci: ['Avec plaisir ! 😊', 'Toujours heureux de vous aider ! 🌍']
    }
  };

  useEffect(function() {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(function() {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: 'assistant', content: greetings[currentLang] }]);
    }
  }, [isOpen, currentLang]);

  const speak = function(text) {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const cleanText = text.replace(/\*\*/g, '').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = currentLang;
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.onstart = function() { setIsSpeaking(true); };
      utterance.onend = function() { setIsSpeaking(false); };
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = function() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const getResponse = function(userMessage) {
    const msgLower = userMessage.toLowerCase();
    
    if (msgLower.includes('bonjour') || msgLower.includes('salut')) {
      return '👋 Bonjour ! Je suis votre conseiller culturel REUSSITESS. Je connais 62 pages de patrimoine mondial, recettes traditionnelles, astuces Amazon et culture générale. Comment puis-je vous aider ?';
    }
    
    if (msgLower.includes('merci')) {
      return '😊 Avec grand plaisir ! C\'est un honneur de partager ma passion du patrimoine et des voyages avec vous !';
    }
    
    if (msgLower.includes('au revoir') || msgLower.includes('bye')) {
      return '👋 Au revoir ! Ce fut un plaisir d\'échanger avec vous. Revenez quand vous voulez ! ✨';
    }

    if (msgLower.includes('bibliothèque') || msgLower.includes('pages') || msgLower.includes('contenu')) {
      return '📚 **BIBLIOTHÈQUE CULTURELLE MONDIALE**\n\n🇪🇺 Europe (15 pays)\n🌎 Amériques (4 régions)\n🏝️ DOM-TOM (10 territoires)\n🌍 Afrique (7 pays)\n🌙 Maghreb (4 pays)\n🌏 Asie-Pacifique (12 pays)\n🌊 Océanie (3 îles)\n\n**TOTAL : 62 pages**\n\nPlus : recettes, astuces, culture générale !\n\nQue souhaitez-vous découvrir ? 🌍';
    }

    if (msgLower.includes('france')) {
      return '🇫🇷 **FRANCE**\n\nCapitale : Paris | 68M habitants\n🏆 49 sites UNESCO (Record Europe)\n\n🎭 Tour Eiffel, Versailles, Mont-Saint-Michel, Châteaux Loire, Lascaux\n\n🎨 Gastronomie UNESCO, Louvre, Mode Paris Chanel Dior\n\n💼 7e économie, TGV, Airbus, N°1 tourisme mondial\n\n[Page complète](/bibliotheque/europe/france)';
    }

    if (msgLower.includes('aide') || msgLower.includes('help')) {
      return '💡 **JE PEUX VOUS AIDER AVEC :**\n\n📚 62 pages patrimoine détaillées\n👵 Recettes traditionnelles\n🛍️ Astuces shopping Amazon\n✈️ Conseils voyage UNESCO\n🧠 Culture générale\n🗣️ 6 langues avec vocal\n\n**Exemples :**\n• "France patrimoine"\n• "Recettes italiennes"\n• "Bibliothèque culturelle"\n• "Conseils voyage"';
    }

    return '🤖 Je suis votre conseiller culturel REUSSITESS !\n\nPosez-moi des questions sur :\n\n📚 Patrimoine mondial (62 pages)\n👵 Recettes traditionnelles\n🛍️ Shopping Amazon\n✈️ Voyage et culture\n\nEssayez : "France", "Bibliothèque", "Aide" 🌍';
  };

  const handleSubmit = function(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(function(prev) { return prev.concat({ role: 'user', content: userMessage }); });
    setIsLoading(true);

    setTimeout(function() {
      try {
        const response = getResponse(userMessage);
        setMessages(function(prev) { return prev.concat({ role: 'assistant', content: response }); });
        speak(response);
      } catch (error) {
        setMessages(function(prev) { 
          return prev.concat({ role: 'assistant', content: 'Désolé, erreur ! Réessayez 😊' }); 
        });
      }
      setIsLoading(false);
    }, 400);
  };

  return (
    <div>
      {/* BOUTON AGRANDI - DROITE - BIEN VISIBLE */}
      <button
        onClick={function() { setIsOpen(!isOpen); }}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-7 rounded-full shadow-2xl hover:scale-110 transition-all z-50 animate-pulse"
        style={{ 
          boxShadow: '0 0 40px rgba(59, 130, 246, 0.6), 0 0 80px rgba(168, 85, 247, 0.4)',
          width: '90px',
          height: '90px'
        }}
        aria-label="Assistant culturel"
      >
        <div className="flex flex-col items-center justify-center">
          <svg className="w-12 h-12 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span className="text-xs font-bold">AIDE</span>
        </div>
        {isSpeaking && (
          <span className="absolute -top-2 -right-2 flex h-6 w-6">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-6 w-6 bg-red-500"></span>
          </span>
        )}
      </button>

      {/* FENÊTRE CHAT AGRANDIE */}
      {isOpen && (
        <div className="fixed bottom-32 right-8 w-[600px] h-[800px] bg-white rounded-3xl shadow-2xl flex flex-col z-50 border-4 border-purple-600">
          
          {/* HEADER AGRANDI */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-6 rounded-t-3xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl animate-bounce">
                🧠
              </div>
              <div>
                <h3 className="font-bold text-xl">Assistant REUSSITESS</h3>
                <p className="text-sm opacity-90">Expert culturel • 62 pages • 6 langues 🔊</p>
              </div>
            </div>
            <div className="flex gap-3">
              {isSpeaking && (
                <button onClick={stopSpeaking} className="hover:bg-white/20 p-3 rounded-lg transition">
                  <span className="text-3xl">🔇</span>
                </button>
              )}
              <button onClick={function() { setIsOpen(false); }} className="hover:bg-white/20 p-3 rounded-lg transition text-2xl font-bold">
                ✕
              </button>
            </div>
          </div>

          {/* LANGUES */}
          <div className="p-4 border-b-2 border-purple-200 flex gap-2 overflow-x-auto bg-gradient-to-r from-purple-50 to-pink-50">
            {languages.map(function(lang) {
              const isActive = currentLang === lang.code;
              const btnClass = isActive 
                ? 'px-5 py-3 rounded-xl text-base font-semibold whitespace-nowrap transition-all bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-110'
                : 'px-5 py-3 rounded-xl text-base font-semibold whitespace-nowrap transition-all bg-white hover:bg-purple-100 text-gray-700 border-2 border-purple-200';
              
              return (
                <button
                  key={lang.code}
                  onClick={function() { setCurrentLang(lang.code); }}
                  className={btnClass}
                >
                  {lang.flag} {lang.name}
                </button>
              );
            })}
          </div>

          {/* MESSAGES AGRANDIS */}
          <div className="flex-1 overflow-y-auto p-6 space-y-5 bg-gradient-to-b from-purple-50/30 to-white">
            {messages.map(function(msg, idx) {
              const isUser = msg.role === 'user';
              const alignClass = isUser ? 'flex justify-end' : 'flex justify-start';
              const bubbleClass = isUser
                ? 'max-w-[85%] p-5 rounded-2xl shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg'
                : 'max-w-[85%] p-5 rounded-2xl shadow-lg bg-white text-gray-800 border-2 border-purple-200 text-lg';
              
              const htmlContent = msg.content
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\n/g, '<br/>')
                .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="underline font-bold hover:text-purple-600">$1</a>');
              
              return (
                <div key={idx} className={alignClass}>
                  <div className={bubbleClass} dangerouslySetInnerHTML={{ __html: htmlContent }} />
                </div>
              );
            })}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border-2 border-purple-200 p-5 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      <div className="w-4 h-4 bg-purple-600 rounded-full animate-bounce" />
                      <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="w-4 h-4 bg-pink-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                    <span className="text-gray-600 text-base">Je réfléchis...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* INPUT AGRANDI */}
          <form onSubmit={handleSubmit} className="p-5 border-t-2 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
            <div className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={function(e) { setInput(e.target.value); }}
                placeholder="Posez votre question... 💬"
                className="flex-1 border-2 border-purple-300 rounded-xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-600 text-lg"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold text-xl hover:scale-105 transition-all shadow-lg disabled:opacity-50"
              >
                💬
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
