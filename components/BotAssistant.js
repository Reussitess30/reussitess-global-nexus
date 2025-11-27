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
    { code: 'pt-BR', flag: '🇧🇷', name: 'Português' }
  ];

  const greetings = {
    'fr-FR': 'Bonjour ! Assistant REUSSITESS. 61 pages + 26 boutiques Amazon. Posez vos questions !',
    'en-US': 'Hello! REUSSITESS Assistant. 61 pages + 26 Amazon stores. Ask me anything!',
    'es-ES': '¡Hola! Asistente REUSSITESS. 61 páginas + 26 tiendas Amazon.',
    'de-DE': 'Hallo! REUSSITESS Assistent. 61 Seiten + 26 Amazon-Shops.',
    'it-IT': 'Ciao! Assistente REUSSITESS. 61 pagine + 26 negozi Amazon.',
    'pt-BR': 'Olá! Assistente REUSSITESS. 61 páginas + 26 lojas Amazon.'
  };

  const knowledgeBase = {
    france: { pays: 'France', info: 'Paris 68M. 49 UNESCO: Tour Eiffel, Versailles, Mont-Saint-Michel', url: '/bibliotheque/europe/france' },
    italie: { pays: 'Italie', info: 'Rome 59M. 58 UNESCO RECORD: Colisée, Pompéi, Florence', url: '/bibliotheque/europe/italie' },
    allemagne: { pays: 'Allemagne', info: 'Berlin 84M. 51 UNESCO: Neuschwanstein, Mur Berlin', url: '/bibliotheque/europe/allemagne' },
    'royaume-uni': { pays: 'Royaume-Uni', info: 'Londres 67M. 33 UNESCO: Tour Londres, Stonehenge', url: '/bibliotheque/europe/royaume-uni' },
    espagne: { pays: 'Espagne', info: 'Madrid 47M. 50 UNESCO: Alhambra, Sagrada Familia', url: '/bibliotheque/europe/espagne' },
    suede: { pays: 'Suède', info: 'Stockholm 10.5M. 15 UNESCO: Venise Nord, Laponie', url: '/bibliotheque/europe/suede' },
    bresil: { pays: 'Brésil', info: 'Brasília 215M. 23 UNESCO: Christ Rio, Amazonie', url: '/bibliotheque/amerique-sud/bresil' },
    singapour: { pays: 'Singapour', info: '5.9M. Gardens Bay, Marina Bay Sands, 3e hub financier', url: '/bibliotheque/asie-pacifique/singapour' },
    australie: { pays: 'Australie', info: 'Canberra 26M. 20 UNESCO: Barrière Corail, Uluru, Opéra Sydney', url: '/bibliotheque/asie-pacifique/australie' },
    'nouvelle-zelande': { pays: 'Nouvelle-Zélande', info: 'Wellington 5.1M. Milford Sound, All Blacks', url: '/bibliotheque/asie-pacifique/nouvelle-zelande' },
    amazon: { info: '26 boutiques Amazon: USA Canada Brésil France Allemagne UK Italie Espagne Pays-Bas Belgique Suède Singapour Inde Australie', url: '/hub-central' }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: 'assistant', content: greetings[currentLang] }]);
    }
  }, [isOpen, currentLang]);

  const speak = (text) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = currentLang;
      utterance.rate = 0.9;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const getResponse = (userMessage) => {
    const msgLower = userMessage.toLowerCase();
    
    for (const key in knowledgeBase) {
      const data = knowledgeBase[key];
      if (msgLower.includes(key) || (data.pays && msgLower.includes(data.pays.toLowerCase()))) {
        let response = data.pays ? '📍 ' + data.pays + '\n\n' + data.info : '🛍️ ' + data.info;
        if (data.url) response += '\n\n[Voir plus](' + data.url + ')';
        return response;
      }
    }

    if (msgLower.includes('bonjour') || msgLower.includes('hello') || msgLower.includes('salut')) {
      return greetings[currentLang];
    }

    if (msgLower.includes('bibliothèque') || msgLower.includes('pages')) {
      return '📚 61 pages: Europe, Amériques, Afrique, Asie. [Voir](/bibliotheque)';
    }

    if (msgLower.includes('amazon') || msgLower.includes('boutique')) {
      return '🛍️ 26 boutiques Amazon dans 14 pays. [Voir](/hub-central)';
    }

    return 'Je connais 61 pages patrimoine + 26 boutiques Amazon. Demandez-moi ! 🌍';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    setTimeout(() => {
      try {
        const response = getResponse(userMessage);
        setMessages(prev => [...prev, { role: 'assistant', content: response }]);
        speak(response);
      } catch (error) {
        setMessages(prev => [...prev, { role: 'assistant', content: 'Erreur. Réessayez !' }]);
      }
      setIsLoading(false);
    }, 300);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all z-50 animate-pulse"
        aria-label="Bot Assistant"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed bottom-28 right-6 w-[500px] h-[700px] bg-white rounded-3xl shadow-2xl flex flex-col z-50 border-4 border-purple-600">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-5 rounded-t-3xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-3xl">🤖</div>
              <div>
                <h3 className="font-bold text-lg">REUSSITESS Assistant</h3>
                <p className="text-sm">61 pages + 26 boutiques + 6 langues 🔊</p>
              </div>
            </div>
            <div className="flex gap-2">
              {isSpeaking && (
                <button onClick={stopSpeaking} className="hover:bg-white/20 p-2 rounded-lg transition">🔇</button>
              )}
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-lg transition text-xl">✕</button>
            </div>
          </div>

          <div className="p-3 border-b flex gap-2 overflow-x-auto bg-purple-50">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => setCurrentLang(lang.code)}
                className={'px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition ' + (currentLang === lang.code ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'bg-white hover:bg-purple-100')}
              >
                {lang.flag} {lang.name}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={'flex ' + (msg.role === 'user' ? 'justify-end' : 'justify-start')}>
                <div
                  className={'max-w-[85%] p-4 rounded-2xl shadow-lg ' + (msg.role === 'user' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-white text-gray-800 border-2 border-purple-200')}
                  dangerouslySetInnerHTML={{ 
                    __html: msg.content.replace(/\n/g, '<br/>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="underline font-bold">$1</a>')
                  }}
                />
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border-2 border-purple-200 p-4 rounded-2xl shadow-lg">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce" />
                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-3 h-3 bg-pink-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t bg-purple-50">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez votre question... 🌍"
                className="flex-1 border-2 border-purple-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-4 focus:ring-purple-400 text-lg"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all disabled:opacity-50"
              >
                🚀
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
