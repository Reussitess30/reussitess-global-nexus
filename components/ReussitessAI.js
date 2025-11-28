'use client';
import { useState, useEffect, useRef } from 'react';

export default function ReussitessAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentLang, setCurrentLang] = useState('fr-FR');
  const [userName, setUserName] = useState('');
  const [autoSpeak, setAutoSpeak] = useState(true);
  const messagesEndRef = useRef(null);

  const languages = [
    { code: 'fr-FR', flag: '🇬🇵', name: 'Français' },
    { code: 'en-US', flag: '🇺🇸', name: 'English' },
    { code: 'es-ES', flag: '🇪🇸', name: 'Español' },
    { code: 'de-DE', flag: '🇩🇪', name: 'Deutsch' },
    { code: 'it-IT', flag: '🇮🇹', name: 'Italiano' },
    { code: 'pt-BR', flag: '🇧🇷', name: 'Português' }
  ];

  const greetings = {
    'fr-FR': 'Bonjour ! Je suis Alex, votre assistant culturel RÉUSSITESS ! Je connais 62 pages de patrimoine mondial, 26 boutiques Amazon internationales, et 5 innovations révolutionnaires. Que puis-je vous expliquer ?',
    'en-US': 'Hello! I am Alex, your RÉUSSITESS cultural assistant! I know 62 world heritage pages, 26 Amazon stores, and 5 revolutionary innovations. What can I explain?',
    'es-ES': '¡Hola! Soy Alex, tu asistente cultural RÉUSSITESS! Conozco 62 páginas patrimonio mundial, 26 tiendas Amazon, y 5 innovaciones revolucionarias. ¿Qué puedo explicar?',
    'de-DE': 'Hallo! Ich bin Alex, Ihr RÉUSSITESS Kulturassistent! Ich kenne 62 Welterbe-Seiten, 26 Amazon-Läden und 5 revolutionäre Innovationen. Was kann ich erklären?',
    'it-IT': 'Ciao! Sono Alex, il tuo assistente culturale RÉUSSITESS! Conosco 62 pagine patrimonio mondiale, 26 negozi Amazon e 5 innovazioni rivoluzionarie. Cosa posso spiegare?',
    'pt-BR': 'Olá! Sou Alex, seu assistente cultural RÉUSSITESS! Conheço 62 páginas patrimônio mundial, 26 lojas Amazon e 5 inovações revolucionárias. O que posso explicar?'
  };

  const KNOWLEDGE = {
    guadeloupe: 'GUADELOUPE - Terre de Champions ! Thierry Henry (Champion Monde 1998), Teddy Riner (11 titres Monde judo), Marie-José Pérec (3 médailles OR olympiques). Gwoka musique UNESCO. 384 000 habitants, paradis caribéen !',
    
    france: 'FRANCE - 49 sites UNESCO ! Paris Tour Eiffel, Louvre, Versailles. Mont-Saint-Michel. Châteaux Loire. Gastronomie patrimoine mondial. 1200 fromages, vins Bordeaux Champagne.',
    
    italie: 'ITALIE - Record 58 sites UNESCO ! Rome Colisée, Vatican Chapelle Sixtine. Venise 118 îlots, gondoles. Florence David Renaissance. Pompéi. Pizza napolitaine, pasta, gelato.',
    
    allemagne: 'ALLEMAGNE - 51 sites UNESCO ! Berlin Porte Brandebourg, Mur tombé 1989. Munich Neuschwanstein château Disney. Cologne cathédrale gothique. Oktoberfest bière.',
    
    innovations: '5 INNOVATIONS MONDIALES : 1) Cultural DNA Match - ADN ancestral, 2) Time Machine Cultural - Voyages 3D, 3) Cultural Guardian - Alertes géo, 4) World Culture Wallet - Badges, 5) Cultural Mood Therapy - IA psychologue.',
    
    boutiques: '26 BOUTIQUES AMAZON : USA, France, Allemagne, Italie, Espagne, Canada, UK, Inde, Pays-Bas, Suède, Singapour, Australie, Belgique, Brésil. 14 pays, 5 continents !',
    
    reussitess: 'RÉUSSITESS Global Nexus - Plateforme culturelle mondiale ! 62 pages patrimoine, 26 boutiques Amazon, 5 innovations uniques. Fondé par Porinus. URL: https://reussitess-global-nexus-jfgk.vercel.app/'
  };

  useEffect(function() {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(function() {
    if (isOpen && messages.length === 0) {
      const welcomeMsg = greetings[currentLang];
      setMessages([{ role: 'assistant', content: welcomeMsg }]);
    }
  }, [isOpen, currentLang, messages.length]);

  const speak = function(text) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      console.log('Speech non supporté');
      return;
    }

    window.speechSynthesis.cancel();
    
    const cleanText = text
      .replace(/\*\*/g, '')
      .replace(/🇬🇵|🏆|🎭|🗣️|🧠|❤️|😊|🌟|✅|🚀|💬|🔊|🎯|📚|🌍|🛍️|🍽️/g, '')
      .replace(/\n/g, ' ')
      .substring(0, 500);

    console.log('🗣️ Parle:', cleanText.substring(0, 50));
    
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = currentLang;
    utterance.rate = 0.90;
    utterance.pitch = 0.75;
    utterance.volume = 1.0;
    
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(function(v) {
      return v.lang.startsWith(currentLang.substring(0, 2));
    });
    
    if (voice) {
      utterance.voice = voice;
      console.log('✅ Voix:', voice.name);
    }
    
    utterance.onstart = function() { 
      setIsSpeaking(true);
      console.log('▶️ Parle');
    };
    
    utterance.onend = function() { 
      setIsSpeaking(false);
      console.log('⏹️ Fin');
    };
    
    utterance.onerror = function(e) { 
      setIsSpeaking(false);
      console.error('❌ Erreur:', e.error);
    };
    
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = function() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const getResponse = function(query) {
    const q = query.toLowerCase();
    
    if (q.match(/je m'appelle|mon nom|appelle moi/)) {
      const match = query.match(/(?:je m'appelle|mon nom est|appelle moi)\s+(\w+)/i);
      if (match) {
        setUserName(match[1]);
        return 'Enchanté ' + match[1] + ' ! Je suis Alex, ravi de vous connaître ! Que puis-je vous expliquer sur la culture mondiale, les innovations, ou les boutiques RÉUSSITESS ?';
      }
    }
    
    if (q.match(/guadeloupe|champion|thierry|teddy|gwoka|caribéen/)) {
      return KNOWLEDGE.guadeloupe;
    }
    
    if (q.match(/france|paris|versailles|louvre|eiffel/)) {
      return KNOWLEDGE.france;
    }
    
    if (q.match(/italie|rome|venise|colisée|vatican|florence/)) {
      return KNOWLEDGE.italie;
    }
    
    if (q.match(/allemagne|berlin|munich|château|neuschwanstein/)) {
      return KNOWLEDGE.allemagne;
    }
    
    if (q.match(/innovation|technologie|dna|time machine|guardian|wallet|therapy/)) {
      return KNOWLEDGE.innovations;
    }
    
    if (q.match(/boutique|amazon|shopping|acheter|store/)) {
      return KNOWLEDGE.boutiques;
    }
    
    if (q.match(/réussitess|reussitess|projet|plateforme|porinus/)) {
      return KNOWLEDGE.reussitess;
    }
    
    if (q.match(/qui es|présente|alex/)) {
      return 'Je suis Alex, assistant culturel RÉUSSITESS ! Je connais 62 pages patrimoine mondial (France, Italie, Allemagne, Guadeloupe...), 26 boutiques Amazon internationales, et 5 innovations mondiales uniques. Je parle 6 langues. Mon objectif : vous faire découvrir la richesse culturelle mondiale !';
    }
    
    const name = userName ? userName + ', ' : '';
    return name + 'je peux vous aider avec : GUADELOUPE Terre de Champions, FRANCE 49 UNESCO, ITALIE 58 UNESCO record, ALLEMAGNE châteaux, 5 INNOVATIONS mondiales, 26 BOUTIQUES Amazon, Culture patrimoine mondial. Que voulez-vous découvrir ?';
  };

  const handleSubmit = function(e) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    setMessages(function(prev) { 
      return prev.concat({ role: 'user', content: userMessage }); 
    });
    
    setIsLoading(true);

    setTimeout(function() {
      const response = getResponse(userMessage);
      
      setMessages(function(prev) { 
        return prev.concat({ role: 'assistant', content: response }); 
      });
      
      if (autoSpeak) {
        setTimeout(function() {
          speak(response);
        }, 300);
      }
      
      setIsLoading(false);
    }, 500);
  };

  const speakLastMessage = function() {
    const assistantMsgs = messages.filter(function(m) { return m.role === 'assistant'; });
    if (assistantMsgs.length > 0) {
      speak(assistantMsgs[assistantMsgs.length - 1].content);
    }
  };

  return (
    <div className="fixed z-50">
      <button
        onClick={function() { setIsOpen(!isOpen); }}
        className="fixed bottom-8 right-8 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all animate-pulse"
        style={{ 
          boxShadow: '0 0 60px rgba(59, 130, 246, 0.8)',
          width: '90px',
          height: '90px'
        }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <span className="text-5xl mb-1">💬</span>
          <span className="text-sm font-bold">ALEX</span>
        </div>
        {isSpeaking && (
          <span className="absolute -top-3 -right-3 flex h-8 w-8">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-8 w-8 bg-red-500 items-center justify-center">
              🔊
            </span>
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-32 right-8 w-[650px] h-[850px] bg-white rounded-3xl shadow-2xl flex flex-col border-4 border-purple-600">
          
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white p-6 rounded-t-3xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-5xl shadow-lg">
                  👨
                </div>
                <div>
                  <h3 className="font-bold text-2xl">Alex</h3>
                  <p className="text-sm opacity-95">Assistant Culturel RÉUSSITESS</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={function() { setAutoSpeak(!autoSpeak); }}
                      className="text-xs bg-white/20 px-3 py-1 rounded-full hover:bg-white/30"
                    >
                      {autoSpeak ? '🔊 Auto' : '🔇 Off'}
                    </button>
                    <button
                      onClick={speakLastMessage}
                      className="text-xs bg-white/20 px-3 py-1 rounded-full hover:bg-white/30"
                    >
                      🔁
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                {isSpeaking && (
                  <button 
                    onClick={stopSpeaking} 
                    className="hover:bg-white/20 p-3 rounded-xl text-2xl"
                  >
                    🛑
                  </button>
                )}
                <button 
                  onClick={function() { setIsOpen(false); stopSpeaking(); }} 
                  className="hover:bg-white/20 p-3 rounded-xl text-2xl font-bold"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 border-b-2 flex gap-2 overflow-x-auto bg-gradient-to-r from-purple-50 to-pink-50">
            {languages.map(function(lang) {
              const isActive = currentLang === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={function() { setCurrentLang(lang.code); stopSpeaking(); }}
                  className={isActive 
                    ? 'px-4 py-2 rounded-xl font-semibold whitespace-nowrap bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'px-4 py-2 rounded-xl font-semibold whitespace-nowrap bg-white hover:bg-purple-100 text-gray-700 border-2 border-purple-200'}
                >
                  {lang.flag} {lang.name}
                </button>
              );
            })}
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-purple-50/30 to-white">
            {messages.map(function(msg, idx) {
              const isUser = msg.role === 'user';
              const htmlContent = msg.content
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\n/g, '<br/>')
                .replace(/• /g, '<br/>• ');
              
              return (
                <div key={idx} className={isUser ? 'flex justify-end' : 'flex justify-start'}>
                  <div 
                    className={isUser
                      ? 'max-w-[85%] p-5 rounded-2xl shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg'
                      : 'max-w-[85%] p-5 rounded-2xl shadow-lg bg-white text-gray-800 border-2 border-purple-200 text-lg'}
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                  />
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
                    <span className="text-gray-700 font-semibold">Alex réfléchit...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-5 border-t-2 bg-gradient-to-r from-purple-50 to-pink-50">
            <div className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={function(e) { setInput(e.target.value); }}
                placeholder="Posez votre question... 💬"
                className="flex-1 border-2 border-purple-300 rounded-xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-purple-400 text-lg"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold text-xl hover:scale-105 transition-all shadow-lg disabled:opacity-50"
              >
                🚀
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              🗣️ Vocal • 6 langues • 62 pages • 26 boutiques • 5 innovations
            </p>
          </form>
        </div>
      )}
    </div>
  );
}
