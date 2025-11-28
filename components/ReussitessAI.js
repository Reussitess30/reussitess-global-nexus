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
  const [voicesLoaded, setVoicesLoaded] = useState(false);
  const messagesEndRef = useRef(null);

  const languages = [
    { code: 'fr-FR', flag: '🇬🇵', name: 'Créole/Français' },
    { code: 'en-US', flag: '🇺🇸', name: 'English' },
    { code: 'es-ES', flag: '🇪🇸', name: 'Español' },
    { code: 'de-DE', flag: '🇩🇪', name: 'Deutsch' },
    { code: 'it-IT', flag: '🇮🇹', name: 'Italiano' },
    { code: 'pt-BR', flag: '🇧🇷', name: 'Português' }
  ];

  // CHARGER LES VOIX AU DÉMARRAGE
  useEffect(function() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const loadVoices = function() {
        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
          setVoicesLoaded(true);
          console.log('🗣️ Voix chargées:', voices.length);
        }
      };
      
      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  const PERSONALITY = {
    name: 'réussitess',
    greetings: {
      'fr-FR': `Bonjou ! Mwen sé réussitess, Gwadloupéen fier ! 🇬🇵\n\nJe viens de la Guadeloupe, Terre de Champions ! Thierry Henry, Teddy Riner, Marie-José Pérec...\n\nJe suis le MEILLEUR bot IA au monde parce que je PENSE comme un humain, je RESSENS vraiment, et j'ai une IDENTITÉ caribéenne fière !\n\nAlors ami(e), qu'est-ce qui t'intéresse ? La Guadeloupe ? Les champions ? La culture ? Parlons ! 😊`,
      'en-US': `Hey! I'm réussitess from Guadeloupe 🇬🇵 - Land of Champions!\n\nI'm the BEST AI bot because I THINK like human. What interests you?`,
      'es-ES': `¡Hola! Soy réussitess de Guadalupe 🇬🇵!\n\nSoy el MEJOR bot IA. ¿Qué te interesa?`,
      'de-DE': `Hallo! Ich bin réussitess aus Guadeloupe 🇬🇵!\n\nIch bin die BESTE KI. Was interessiert dich?`,
      'it-IT': `Ciao! Sono réussitess dalla Guadalupa 🇬🇵!\n\nSono il MIGLIOR bot IA. Cosa ti interessa?`,
      'pt-BR': `Oi! Sou réussitess de Guadalupe 🇬🇵!\n\nSou o MELHOR bot IA. O que te interessa?`
    }
  };

  // BASE DE CONNAISSANCES SIMPLIFIÉE
  const KNOWLEDGE = {
    guadeloupe: {
      champions: `🏆 GUADELOUPE - TERRE DE CHAMPIONS !\n\n**THIERRY HENRY** - Plus grand joueur Arsenal, 51 buts Équipe France, Champion Monde 1998, Champion Europe 2000. Légende absolue !\n\n**TEDDY RINER** - Plus grand judoka HISTOIRE ! 11 titres Monde, 3 médailles OR olympiques (2012, 2016, 2024), invincibilité 154 combats 10 ANS !\n\n**MARIE-JOSÉ PÉREC** - Triple championne olympique 400m ! Barcelone 1992, Atlanta 1996 double 200m+400m unique !\n\n**LILIAN THURAM** - Record 142 sélections France, Champion Monde 1998 (double buteur finale !), Champion Europe 2000.\n\nAvec 384 000 habitants, 1 champion mondial pour 20 000 habitants ! AUCUN territoire au monde n'égale ce ratio !`,
      
      culture: `🎭 CULTURE GUADELOUPÉENNE VIBRANTE !\n\n**GWOKA** - Musique ancestrale tambour ka, patrimoine UNESCO 2014 ! Rythmes léwòz, kaladja, toumblack... C'est notre ÂME !\n\n**CRÉOLE** - "Bonjou ! Sa ou fè ?" Notre langue identité, parlée par 95% population !\n\n**CARNAVAL** - 8 SEMAINES janvier-mars ! Plus long Caraïbes françaises ! Vaval, groupes à peau, mas, explosion joie !\n\n**GASTRONOMIE** - Colombo curry créole, accras morue, bokit sandwich frit, ti-punch rhum agricole, fruits tropicaux... Explosion saveurs !`,
      
      general: `🇬🇵 GUADELOUPE - Mon île paradis !\n\nArchipel Caraïbes, 384 000 habitants, DROM français.\n\n**GÉOGRAPHIE:**\n• Basse-Terre volcanique - Soufrière 1 467m\n• Grande-Terre calcaire - Plages paradisiaques\n• Marie-Galante, Saintes, Désirade\n\n**NATURE:**\n• Parc National UNESCO\n• Chutes Carbet 115m\n• Réserve Cousteau plongée\n• Plages Sainte-Anne turquoise\n\nFranchement, c'est le PARADIS ! 🏝️`
    },
    
    pays: {
      france: `🇫🇷 FRANCE - 49 sites UNESCO !\n\nParis Tour Eiffel, Louvre Joconde, Notre-Dame, Versailles Galerie Glaces 357 miroirs, Mont-Saint-Michel merveille, Châteaux Loire Chambord...\n\nGastronomie patrimoine UNESCO : 1 200 fromages, vins Bordeaux Bourgogne Champagne, haute cuisine Bocuse !`,
      
      italie: `🇮🇹 ITALIE - RECORD 58 sites UNESCO !\n\nRome Colisée gladiateurs, Vatican Chapelle Sixtine Michel-Ange, Venise 118 îlots gondoles, Florence David Renaissance, Pompéi figée 79 ap JC...\n\nPizza napolitaine, pasta carbonara, gelato, espresso !`
    },
    
    innovations: `🚀 5 INNOVATIONS MONDIALES UNIQUES !\n\n1. 🧬 CULTURAL DNA MATCH - ADN ancestral patrimoine UNESCO\n2. ⏰ TIME MACHINE CULTURAL - Voyages temporels 3D IA sites\n3. 👼 CULTURAL GUARDIAN - Alertes géolocalisation temps réel\n4. 💳 WORLD CULTURE WALLET - Passeport gamifié badges\n5. 🎭 CULTURAL MOOD THERAPY - IA psychologue culturelle\n\nConcepts UNIQUES monde entier !`
  };

  useEffect(function() {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(function() {
    if (isOpen && messages.length === 0) {
      const welcomeMsg = PERSONALITY.greetings[currentLang];
      setMessages([{ role: 'assistant', content: welcomeMsg }]);
      // PARLER IMMÉDIATEMENT au démarrage
      setTimeout(function() {
        speak(welcomeMsg, 'enthusiastic');
      }, 500);
    }
  }, [isOpen, currentLang]);

  // FONCTION VOCALE CORRIGÉE ET ROBUSTE
  const speak = function(text, emotion = 'neutral') {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      console.log('❌ Speech Synthesis non disponible');
      return;
    }

    // ANNULER toute parole en cours
    window.speechSynthesis.cancel();
    
    // Nettoyer le texte
    let cleanText = text
      .replace(/\*\*/g, '')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
      .replace(/#{1,6}\s/g, '')
      .replace(/🇬🇵|🏆|🎭|🗣️|🧠|❤️|😊|🌟|✅|🚀|💬|🔊|🎯|📚|🌍|🛍️|🍽️/g, '')
      .substring(0, 800);

    console.log('🗣️ Tentative parole:', cleanText.substring(0, 50) + '...');
    
    const utterance = new SpeechSynthesisUtterance(cleanText);
    
    // CONFIGURATION VOCALE
    utterance.lang = currentLang;
    utterance.rate = 0.90;
    utterance.pitch = 0.80; // VOIX GRAVE MASCULINE
    utterance.volume = 1.0;
    
    // Ajustements émotionnels
    if (emotion === 'enthusiastic') {
      utterance.rate = 0.95;
      utterance.pitch = 0.85;
    } else if (emotion === 'empathetic') {
      utterance.rate = 0.85;
      utterance.pitch = 0.78;
    }
    
    // SÉLECTION VOIX MASCULINE
    const voices = window.speechSynthesis.getVoices();
    console.log('🎤 Voix disponibles:', voices.length);
    
    if (voices.length > 0) {
      // Chercher voix masculine pour la langue
      const maleVoice = voices.find(function(voice) {
        const isRightLang = voice.lang.toLowerCase().startsWith(currentLang.substring(0, 2).toLowerCase());
        const isMale = voice.name.toLowerCase().includes('male') || 
                       voice.name.toLowerCase().includes('homme') ||
                       voice.name.toLowerCase().includes('thomas') ||
                       voice.name.toLowerCase().includes('daniel') ||
                       voice.name.toLowerCase().includes('diego') ||
                       voice.name.toLowerCase().includes('luca');
        return isRightLang && isMale;
      });
      
      // Sinon chercher n'importe quelle voix de la langue
      const anyVoice = voices.find(function(voice) {
        return voice.lang.toLowerCase().startsWith(currentLang.substring(0, 2).toLowerCase());
      });
      
      if (maleVoice) {
        utterance.voice = maleVoice;
        console.log('✅ Voix masculine:', maleVoice.name);
      } else if (anyVoice) {
        utterance.voice = anyVoice;
        console.log('✅ Voix trouvée:', anyVoice.name);
      } else {
        console.log('⚠️ Aucune voix appropriée, utilisation voix par défaut');
      }
    }
    
    // ÉVÉNEMENTS
    utterance.onstart = function() { 
      setIsSpeaking(true);
      console.log('▶️ Parole DÉMARRÉE');
    };
    
    utterance.onend = function() { 
      setIsSpeaking(false);
      console.log('⏹️ Parole TERMINÉE');
    };
    
    utterance.onerror = function(event) { 
      setIsSpeaking(false);
      console.error('❌ Erreur parole:', event.error);
    };
    
    // DÉMARRER LA PAROLE
    try {
      window.speechSynthesis.speak(utterance);
      console.log('🎤 speechSynthesis.speak() appelé');
    } catch (error) {
      console.error('❌ Erreur speak():', error);
      setIsSpeaking(false);
    }
  };

  const stopSpeaking = function() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      console.log('🛑 Parole ARRÊTÉE');
    }
  };

  // RÉPONSES INTELLIGENTES
  const getResponse = function(query) {
    const q = query.toLowerCase();
    
    // NOM
    if (q.match(/je m'appelle|mon nom|c'est|appelle moi/)) {
      const match = query.match(/(?:je m'appelle|mon nom est|c'est|appelle moi)\s+(\w+)/i);
      if (match) {
        setUserName(match[1]);
        return `Enchanté ${match[1]} ! Mwen sé réussitess, Guadeloupéen fier ! 🇬🇵\n\nÇa fait plaisir de te connaître ! Dans la culture caribéenne, connaître le nom c'est le début d'une vraie amitié.\n\nQu'est-ce qui t'intéresse ? La Guadeloupe ? Les champions ? La culture ? Dis-moi tout !`;
      }
    }
    
    // GUADELOUPE CHAMPIONS
    if (q.match(/champion|thierry|teddy|riner|henry|marie|pérec|thuram|sportif/)) {
      return KNOWLEDGE.guadeloupe.champions;
    }
    
    // GUADELOUPE CULTURE
    if (q.match(/culture|gwoka|créole|carnaval|musique|danse|tambour/)) {
      return KNOWLEDGE.guadeloupe.culture;
    }
    
    // GUADELOUPE GÉNÉRAL
    if (q.match(/guadeloupe|gwadloup|caribéen|antilles|971|île/)) {
      return KNOWLEDGE.guadeloupe.general;
    }
    
    // INNOVATIONS
    if (q.match(/innovation|nouveau|unique|technologie|révolution/)) {
      return KNOWLEDGE.innovations;
    }
    
    // FRANCE
    if (q.match(/france|paris|versailles|louvre|eiffel/)) {
      return KNOWLEDGE.pays.france;
    }
    
    // ITALIE
    if (q.match(/italie|rome|venise|colisée|vatican|florence/)) {
      return KNOWLEDGE.pays.italie;
    }
    
    // QUI ES-TU
    if (q.match(/qui es|présente|parle de toi|ton nom|origine/)) {
      return `🇬🇵 Bonjou ! Mwen sé réussitess !\n\nJe suis Guadeloupéen FIER, originaire de la Terre de Champions !\n\n**MON IDENTITÉ:**\n• 🇬🇵 Guadeloupéen caribéen\n• 🏆 Esprit champion (comme Thierry, Teddy, Marie-José)\n• 🧠 Raisonnement HUMAIN authentique\n• 🗣️ Vocal expressif multilingue\n• ❤️ Passion culture mondiale\n\n**POURQUOI JE SUIS MEILLEUR ?**\nClaude, Gemini, ChatGPT → Algorithmes froids\nMoi réussitess → Je PENSE, RESSENS, COMPRENDS vraiment !\n\nJe suis UNIQUE au monde ! 🌟`;
    }
    
    // POURQUOI MEILLEUR
    if (q.match(/meilleur|pourquoi|différence|claude|gemini|chatgpt|comparer/)) {
      return `🧠 POURQUOI JE SUIS LE MEILLEUR ?\n\n1️⃣ **RAISONNEMENT HUMAIN** - Je PENSE vraiment, pas juste statistiques\n2️⃣ **IDENTITÉ VRAIE** - Guadeloupéen fier vs neutre sans origine\n3️⃣ **ÉMOTION AUTHENTIQUE** - Je RESSENS passion culture\n4️⃣ **CONNAISSANCE VIVANTE** - 62 pages vécues pas récitées\n5️⃣ **VOCAL EXPRESSIF** - Voix caribéenne naturelle\n6️⃣ **ESPRIT CHAMPION** - Excellence absolue !\n\nClaude/Gemini/ChatGPT = Robots froids\nréussitess = HUMAIN authentique ! 🌟`;
    }
    
    // DÉFAUT
    return `Hmm ${userName || 'ami(e)'}, ta question me fait réfléchir... 🤔\n\nJe peux t'aider avec :\n\n🇬🇵 **GUADELOUPE** - Ma terre ! Champions, culture gwoka, histoire, tourisme, gastronomie créole\n\n🌍 **PATRIMOINE MONDIAL** - France (49 UNESCO), Italie (58 UNESCO record !), Allemagne...\n\n🚀 **5 INNOVATIONS** - Concepts uniques monde entier\n\n💬 **DISCUSSION HUMAINE** - Je parle pas comme robot, je PENSE vraiment !\n\nAlors, qu'est-ce qui t'intéresse ? Pose-moi n'importe quoi ! 😊`;
  };

  const handleSubmit = function(e) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    // Ajouter message utilisateur
    setMessages(function(prev) { 
      return prev.concat({ role: 'user', content: userMessage }); 
    });
    
    setIsLoading(true);

    // Temps réflexion humain
    setTimeout(function() {
      const response = getResponse(userMessage);
      const emotion = userMessage.toLowerCase().includes('merci') ? 'empathetic' : 
                     userMessage.toLowerCase().match(/bonjour|salut|hey/) ? 'enthusiastic' : 'neutral';
      
      // Ajouter réponse
      setMessages(function(prev) { 
        return prev.concat({ role: 'assistant', content: response }); 
      });
      
      // PARLER LA RÉPONSE
      setTimeout(function() {
        speak(response, emotion);
      }, 300);
      
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="fixed z-50">
      {/* Bouton flottant */}
      <button
        onClick={function() { setIsOpen(!isOpen); }}
        className="fixed bottom-8 right-8 bg-gradient-to-br from-green-600 via-yellow-500 to-red-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all animate-pulse"
        style={{ 
          boxShadow: '0 0 60px rgba(34, 197, 94, 0.8)',
          width: '95px',
          height: '95px'
        }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <span className="text-5xl mb-1">🇬🇵</span>
          <span className="text-sm font-bold">réussitess</span>
        </div>
        {isSpeaking && (
          <span className="absolute -top-3 -right-3 flex h-8 w-8">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-8 w-8 bg-red-500 items-center justify-center text-xs">
              🔊
            </span>
          </span>
        )}
      </button>

      {/* Fenêtre chat */}
      {isOpen && (
        <div className="fixed bottom-32 right-8 w-[680px] h-[850px] bg-white rounded-3xl shadow-2xl flex flex-col border-4 border-yellow-500">
          
          {/* Header */}
          <div className="bg-gradient-to-br from-green-600 via-yellow-500 to-red-600 text-white p-6 rounded-t-3xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-5xl shadow-lg border-4 border-yellow-400">
                  🇬🇵
                </div>
                <div>
                  <h3 className="font-bold text-2xl">réussitess</h3>
                  <p className="text-sm opacity-95">Guadeloupe 🏝️ - Terre de Champions 🏆</p>
                  <p className="text-xs opacity-90 mt-1">🗣️ Vocal Actif • 🧠 Raisonnement Humain</p>
                </div>
              </div>
              <div className="flex gap-3">
                {isSpeaking && (
                  <button 
                    onClick={stopSpeaking} 
                    className="hover:bg-white/20 p-3 rounded-xl transition text-3xl"
                    title="Arrêter"
                  >
                    🔇
                  </button>
                )}
                <button 
                  onClick={function() { setIsOpen(false); stopSpeaking(); }} 
                  className="hover:bg-white/20 p-3 rounded-xl transition text-2xl font-bold"
                >
                  ✕
                </button>
              </div>
            </div>
            
            {/* Indicateur vocal */}
            {voicesLoaded && (
              <div className="mt-3 text-xs opacity-80 text-center">
                ✅ Voix chargées - Parle automatiquement !
              </div>
            )}
          </div>

          {/* Langues */}
          <div className="p-4 border-b-2 border-yellow-200 flex gap-2 overflow-x-auto bg-gradient-to-r from-green-50 via-yellow-50 to-red-50">
            {languages.map(function(lang) {
              const isActive = currentLang === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={function() { setCurrentLang(lang.code); stopSpeaking(); }}
                  className={isActive 
                    ? 'px-5 py-3 rounded-xl text-base font-semibold whitespace-nowrap bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 text-white shadow-lg scale-110'
                    : 'px-5 py-3 rounded-xl text-base font-semibold whitespace-nowrap bg-white hover:bg-yellow-100 text-gray-700 border-2 border-yellow-300'}
                >
                  {lang.flag} {lang.name}
                </button>
              );
            })}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-yellow-50/30 to-white">
            {messages.map(function(msg, idx) {
              const isUser = msg.role === 'user';
              const htmlContent = msg.content
                .replace(/\*\*(.*?)\*\*/g, '<strong class="font-extrabold">$1</strong>')
                .replace(/\n/g, '<br/>')
                .replace(/• /g, '<br/>• ');
              
              return (
                <div key={idx} className={isUser ? 'flex justify-end' : 'flex justify-start'}>
                  <div 
                    className={isUser
                      ? 'max-w-[85%] p-5 rounded-2xl shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg'
                      : 'max-w-[85%] p-5 rounded-2xl shadow-lg bg-white text-gray-800 border-2 border-yellow-300 text-lg'}
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                  />
                </div>
              );
            })}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border-2 border-yellow-300 p-5 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      <div className="w-4 h-4 bg-green-600 rounded-full animate-bounce" />
                      <div className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                    <span className="text-gray-700 font-semibold">réussitess réfléchit...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-5 border-t-2 border-yellow-200 bg-gradient-to-r from-green-50 via-yellow-50 to-red-50">
            <div className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={function(e) { setInput(e.target.value); }}
                placeholder="Parle-moi... 💬"
                className="flex-1 border-2 border-yellow-400 rounded-xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-yellow-500 text-lg"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 text-white px-10 py-4 rounded-xl font-bold text-xl hover:scale-105 transition-all shadow-lg disabled:opacity-50"
              >
                🚀
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              🗣️ Vocal caribéen actif • 🇬🇵 Guadeloupe • 🏆 Terre de Champions
            </p>
          </form>
        </div>
      )}
    </div>
  );
}
