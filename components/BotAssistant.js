import { useState, useEffect, useRef } from 'react';

export default function BotAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentLang, setCurrentLang] = useState('fr-FR');
  const messagesEndRef = useRef(null);

  const languages = [
    { code: 'fr-FR', flag: '🇫🇷', name: 'Français' },
    { code: 'en-US', flag: '🇺🇸', name: 'English' },
    { code: 'es-ES', flag: '🇪🇸', name: 'Español' },
    { code: 'de-DE', flag: '🇩🇪', name: 'Deutsch' },
    { code: 'it-IT', flag: '🇮🇹', name: 'Italiano' },
    { code: 'pt-BR', flag: '🇧🇷', name: 'Português' },
    { code: 'zh-CN', flag: '🇨🇳', name: '中文' },
    { code: 'ar-SA', flag: '🇸🇦', name: 'العربية' }
  ];

  const greetings = {
    'fr-FR': 'Bonjour ! Je suis votre assistant REUSSITESS®. Comment puis-je vous aider ?',
    'en-US': 'Hello! I am your REUSSITESS® assistant. How can I help you?',
    'es-ES': '¡Hola! Soy tu asistente REUSSITESS®. ¿Cómo puedo ayudarte?',
    'de-DE': 'Hallo! Ich bin Ihr REUSSITESS®-Assistent. Wie kann ich Ihnen helfen?',
    'it-IT': 'Ciao! Sono il tuo assistente REUSSITESS®. Come posso aiutarti?',
    'pt-BR': 'Olá! Sou seu assistente REUSSITESS®. Como posso ajudá-lo?',
    'zh-CN': '你好！我是您的 REUSSITESS® 助手。我能帮您什么？',
    'ar-SA': 'مرحبا! أنا مساعد REUSSITESS® الخاص بك. كيف يمكنني مساعدتك؟'
  };

  // BASE DE CONNAISSANCES COMPLÈTE - 55 PAGES
  const knowledgeBase = {
    // ... (tout ton knowledgeBase ici, inchangé)
    // (J'ai retiré pour la lisibilité, sinon mets tout ton code ici !)
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = greetings[currentLang];
      setMessages([{ role: 'assistant', content: greeting }]);
    }
  }, [isOpen, currentLang]);

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = currentLang;
      utterance.rate = 0.9;
      utterance.pitch = 1;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const getResponse = async (userMessage) => {
    const msgLower = userMessage.toLowerCase();
    
    // Recherche dans la base de connaissances
    for (const [key, data] of Object.entries(knowledgeBase)) {
      if (msgLower.includes(key) || msgLower.includes(data.pays?.toLowerCase())) {
        if (data.pays) {
          let response = `📍 **${data.pays}**\n\n`;
          if (data.capitale) response += `🏛️ Capitale: ${data.capitale}\n`;
          if (data.population) response += `👥 Population: ${data.population}\n`;
          if (data.unesco) response += `🏛️ ${data.unesco}\n`;
          if (data.patrimoine) response += `\n🎭 Patrimoine:\n${data.patrimoine}\n`;
          if (data.culture) response += `\n🎨 Culture:\n${data.culture}\n`;
          if (data.economie) response += `\n💼 Économie:\n${data.economie}\n`;
          if (data.url) response += `\n➡️ [Voir la page complète](${data.url})`;
          return response;
        } else if (data.info) {
          // Info Amazon
          let response = `🛍️ ${data.info}\n\n`;
          response += Object.values(data.pays).join('\n');
          response += `\n\n➡️ [Voir toutes les boutiques](${data.url})`;
          return response;
        }
      }
    }

    // Réponses génériques
    if (msgLower.includes('bonjour') || msgLower.includes('salut') || msgLower.includes('hello')) {
      return greetings[currentLang];
    }

    if (msgLower.includes('bibliothèque') || msgLower.includes('library')) {
      return 'Notre bibliothèque mondiale contient 55 pages couvrant:\n\n🇪🇺 Europe (15 pays)\n🌍 Afrique (7 pays)\n🌏 Asie-Pacifique (11 pays)\n🏝️ DOM-TOM (10 territoires)\n🌎 Amériques (4 régions)\n\n[Voir la bibliothèque](/bibliotheque)';
    }

    if (msgLower.includes('amazon') || msgLower.includes('boutique')) {
      return '🛍️ Nous avons 26 boutiques Amazon dans 14 pays:\n\nAmérique du Nord, Europe (8 pays), Asie-Pacifique, Amérique du Sud\n\n[Voir toutes les boutiques](/hub-central)';
    }

    return 'Je peux vous renseigner sur les 55 pages de notre bibliothèque mondiale ou nos 26 boutiques Amazon. Posez-moi une question sur un pays !';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await getResponse(userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      speak(response);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Désolé, une erreur est survenue.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50"
        aria-label="Assistant virtuel"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {/* Fenêtre chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[450px] h-[700px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-2xl">
                🤖
              </div>
              <div>
                <h3 className="font-bold">Assistant REUSSITESS®</h3>
                <p className="text-xs opacity-90">55 pays • 26 boutiques</p>
              </div>
            </div>
            <div className="flex gap-2">
              {isSpeaking && (
                <button onClick={stopSpeaking} className="hover:bg-white/20 p-2 rounded">
                  🔇
                </button>
              )}
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded">
                ✕
              </button>
            </div>
          </div>

          {/* Sélecteur langue */}
          <div className="p-2 border-b flex gap-1 overflow-x-auto">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => setCurrentLang(lang.code)}
                className={`px-3 py-1 rounded-lg text-sm whitespace-nowrap ${
                  currentLang === lang.code 
                    ? 'bg-blue-100 text-blue-700 font-semibold' 
                    : 'hover:bg-gray-100'
                }`}
              >
                {lang.flag} {lang.name}
              </button>
            ))}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                  dangerouslySetInnerHTML={{ 
                    __html: msg.content
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\n/g, '<br/>')
                      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="underline">$1</a>')
                  }}
                />
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-2xl">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez votre question..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50"
              >
                ➤
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
