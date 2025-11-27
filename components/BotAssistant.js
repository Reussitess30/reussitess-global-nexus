import React, { useState, useEffect, useRef } from 'react';

const BotAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [currentLang, setCurrentLang] = useState('fr');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Langues disponibles avec drapeaux
  const languages = {
    fr: { flag: '🇫🇷', name: 'Français' },
    en: { flag: '🇬🇧', name: 'English' },
    es: { flag: '🇪🇸', name: 'Español' },
    de: { flag: '🇩🇪', name: 'Deutsch' },
    it: { flag: '🇮🇹', name: 'Italiano' },
    pt: { flag: '🇵🇹', name: 'Português' },
    ar: { flag: '🇸🇦', name: 'العربية' },
    zh: { flag: '🇨🇳', name: '中文' }
  };

  // Base de connaissances COMPLÈTE
  const knowledgeBase = {
    // BOUTIQUES
    boutiques: {
      total: 26,
      pays: ['France', 'USA', 'Allemagne', 'Italie', 'Espagne', 'Canada', 'UK', 'Australie', 'Brésil', 'Belgique', 'Pays-Bas', 'Suède', 'Singapour', 'Inde'],
      types: ['14 boutiques personnelles', '12 boutiques influenceurs'],
      url: 'https://reussitess-global-nexus-jfgk.vercel.app/'
    },

    // BIBLIOTHÈQUE - 37 PAGES
    bibliotheque: {
      total: 37,
      regions: {
        'DOM-TOM': {
          count: 10,
          pays: [
            { nom: 'La Réunion', capitale: 'Saint-Denis', pop: '860,000', patrimoine: ['Piton Fournaise', 'Cirques UNESCO', 'Maloya UNESCO'] },
            { nom: 'Mayotte', capitale: 'Mamoudzou', pop: '280,000', patrimoine: ['Lagon plus grand monde', 'Mont Choungui', 'Ylang-ylang'] },
            { nom: 'Guadeloupe', capitale: 'Basse-Terre', pop: '390,000', patrimoine: ['Soufrière', 'Gwoka UNESCO', 'Parc National'] },
            { nom: 'Martinique', capitale: 'Fort-de-France', pop: '370,000', patrimoine: ['Montagne Pelée', 'Aimé Césaire', 'Rhum AOC'] },
            { nom: 'Guyane', capitale: 'Cayenne', pop: '290,000', patrimoine: ['Forêt amazonienne', 'Centre Spatial Kourou', 'Biodiversité'] },
            { nom: 'Polynésie Française', capitale: 'Papeete', pop: '280,000', patrimoine: ['Marae', 'Perles Tahiti', 'Culture ma\'ohi'] },
            { nom: 'Nouvelle-Calédonie', capitale: 'Nouméa', pop: '270,000', patrimoine: ['Culture kanak', 'Lagon UNESCO', 'Nickel 25%'] },
            { nom: 'Saint-Pierre-et-Miquelon', capitale: 'Saint-Pierre', pop: '6,000', patrimoine: ['Grande pêche morue', 'Architecture colorée'] },
            { nom: 'Wallis-et-Futuna', capitale: 'Mata-Utu', pop: '11,000', patrimoine: ['3 royaumes', 'Sites tongiens', 'Artisanat tapa'] },
            { nom: 'Saint-Martin', capitale: 'Marigot', pop: '36,000', patrimoine: ['Île partagée France-Pays-Bas', 'Fort Louis'] }
          ]
        },
        'Afrique': {
          count: 7,
          pays: [
            { nom: 'Sénégal', capitale: 'Dakar', pop: '17 millions', patrimoine: ['Gorée UNESCO', 'Lac Rose', 'Négritude Senghor'] },
            { nom: 'Côte d\'Ivoire', capitale: 'Yamoussoukro', pop: '27 millions', patrimoine: ['Basilique plus grande monde', 'Cacao 40%', 'Zouglou'] },
            { nom: 'Cameroun', capitale: 'Yaoundé', pop: '27 millions', patrimoine: ['Afrique miniature', '250 ethnies', 'Makossa Manu Dibango'] },
            { nom: 'Madagascar', capitale: 'Antananarivo', pop: '28 millions', patrimoine: ['Baobabs', 'Lémuriens 90%', 'Vanille Bourbon'] },
            { nom: 'Mali', capitale: 'Bamako', pop: '21 millions', patrimoine: ['Tombouctou UNESCO', 'Mosquée Djenné', 'Manuscrits 300,000'] },
            { nom: 'RD Congo', capitale: 'Kinshasa', pop: '95 millions', patrimoine: ['Rumba UNESCO', 'Parc Virunga gorilles', 'Coltan cobalt'] },
            { nom: 'Rwanda', capitale: 'Kigali', pop: '13 millions', patrimoine: ['Gorilles montagne', 'Hub tech africain', 'Café excellence'] }
          ]
        },
        'Maghreb': {
          count: 4,
          pays: [
            { nom: 'Maroc', capitale: 'Rabat', pop: '37 millions', patrimoine: ['Médinas Fès Marrakech UNESCO', 'Aït-Ben-Haddou', 'Phosphates 1er'] },
            { nom: 'Algérie', capitale: 'Alger', pop: '44 millions', patrimoine: ['Casbah UNESCO', 'Timgad romain', 'Raï Cheb Khaled'] },
            { nom: 'Tunisie', capitale: 'Tunis', pop: '12 millions', patrimoine: ['Carthage UNESCO', 'El Jem amphithéâtre', 'Huile olive 4e'] },
            { nom: 'Liban', capitale: 'Beyrouth', pop: '6 millions', patrimoine: ['Baalbek UNESCO', 'Cèdres Liban', 'Cuisine mezze'] }
          ]
        },
        'Asie-Pacifique': {
          count: 8,
          pays: [
            { nom: 'Vietnam', capitale: 'Hanoï', pop: '98 millions', patrimoine: ['Baie Hạ Long UNESCO', 'Hội An', 'Phở bánh mì café'] },
            { nom: 'Cambodge', capitale: 'Phnom Penh', pop: '17 millions', patrimoine: ['Angkor Wat UNESCO', 'Apsaras danses', 'Poivre Kampot'] },
            { nom: 'Laos', capitale: 'Vientiane', pop: '7 millions', patrimoine: ['Luang Prabang UNESCO', 'Plaine Jarres', 'Bouddhisme theravada'] },
            { nom: 'Vanuatu', capitale: 'Port-Vila', pop: '310,000', patrimoine: ['Volcans Yasur Ambrym', '113 langues record', 'Nagol saut'] },
            { nom: 'Australie', capitale: 'Canberra', pop: '26 millions', patrimoine: ['Grande Barrière UNESCO', 'Opéra Sydney', 'Aborigènes 65,000 ans'] },
            { nom: 'Nouvelle-Zélande', capitale: 'Wellington', pop: '5 millions', patrimoine: ['Tongariro UNESCO', 'Haka All Blacks', 'Seigneur Anneaux'] },
            { nom: 'Singapour', capitale: 'Singapour', pop: '5.9 millions', patrimoine: ['Gardens by Bay', 'Hub financier 3e', 'Hawker UNESCO'] },
            { nom: 'Inde', capitale: 'New Delhi', pop: '1.4 milliards', patrimoine: ['Taj Mahal UNESCO', 'Yoga méditation', 'Bollywood'] }
          ]
        },
        'Amériques': {
          count: 3,
          pays: [
            { nom: 'Québec', capitale: 'Québec', pop: '8.6 millions', patrimoine: ['Vieux-Québec UNESCO', 'Sirop érable 70%', 'Cirque Soleil'] },
            { nom: 'Haïti', capitale: 'Port-au-Prince', pop: '11.5 millions', patrimoine: ['Citadelle Laferrière UNESCO', 'Indépendance 1804', 'Art naïf'] },
            { nom: 'Louisiane', capitale: 'Baton Rouge', pop: '4.6 millions', patrimoine: ['Jazz Nouvelle-Orléans', 'Mardi Gras', 'Cajun créole'] }
          ]
        },
        'Europe': {
          count: 4,
          pays: [
            { nom: 'Belgique', capitale: 'Bruxelles', pop: '11.5 millions', patrimoine: ['Grand-Place UNESCO', 'Chocolat bières', 'BD Tintin'] },
            { nom: 'Suisse', capitale: 'Berne', pop: '8.7 millions', patrimoine: ['Vignobles Lavaux UNESCO', 'Horlogerie Rolex', '4 langues'] },
            { nom: 'Luxembourg', capitale: 'Luxembourg', pop: '640,000', patrimoine: ['Vieille ville UNESCO', 'Finance fonds', 'Trilingue'] },
            { nom: 'Monaco', capitale: 'Monaco', pop: '39,000', patrimoine: ['Casino Monte-Carlo', 'F1 Grand Prix', 'Océanographie Cousteau'] }
          ]
        }
      }
    },

    // ASTUCES
    astuces: {
      sections: [
        {
          nom: 'Amazon Pro',
          tips: ['Ventes Flash Lightning 6h-22h', 'Warehouse Deals -20 à -50%', 'Subscribe & Save -15%', 'Black Friday -70%']
        },
        {
          nom: 'Business 2025',
          rentables: ['Services IA Automation 5-20k€/mois', 'Contenu TikTok/IG 3-15k€/mois', 'Formations ligne 2-50k€/mois', 'Dropshipping 1-10k€/mois']
        },
        {
          nom: 'Top Influenceurs',
          top: ['MrBeast YouTube $82M', 'Charli D\'Amelio TikTok $17.5M', 'Cristiano Ronaldo $3.2M/post', 'Kylie Jenner $2.4M/post']
        },
        {
          nom: 'Gagner avec IA',
          methodes: ['Rédaction ChatGPT 50-200€/article', 'Visuels Midjourney 30-150€', 'Vidéos faceless 500-5k€/mois', 'No-code apps 500-5k€/projet']
        },
        {
          nom: 'Remèdes Grand-Mère',
          remedes: ['Miel+Citron mal gorge', 'Ail cru immunité', 'Pomme terre brûlures', 'Eau salée infection dentaire']
        },
        {
          nom: 'Plantes Médicinales',
          plantes: ['Aloe vera cicatrisant', 'Lavande anxiété', 'Échinacée immunité', 'Camomille stress', 'Curcuma anti-inflammatoire']
        }
      ]
    }
  };

  // Messages de salutation multilingues
  const greetings = {
    fr: {
      morning: 'Bonjour ! ☀️',
      afternoon: 'Bon après-midi ! 🌤️',
      evening: 'Bonsoir ! 🌙',
      night: 'Bonne nuit ! 🌃',
      welcome: "Je suis l'assistant intelligent REUSSITESS®. Je connais parfaitement nos 26 boutiques Amazon, les 37 pages de notre bibliothèque mondiale, et toutes nos astuces. Comment puis-je vous aider ?",
      goodbye: 'Au revoir ! À bientôt ! 👋'
    },
    en: {
      morning: 'Good morning! ☀️',
      afternoon: 'Good afternoon! 🌤️',
      evening: 'Good evening! 🌙',
      night: 'Good night! 🌃',
      welcome: "I'm the REUSSITESS® intelligent assistant. I perfectly know our 26 Amazon stores, the 37 pages of our world library, and all our tips. How can I help you?",
      goodbye: 'Goodbye! See you soon! 👋'
    },
    es: {
      morning: '¡Buenos días! ☀️',
      afternoon: '¡Buenas tardes! 🌤️',
      evening: '¡Buenas noches! 🌙',
      night: '¡Buenas noches! 🌃',
      welcome: "Soy el asistente inteligente REUSSITESS®. Conozco perfectamente nuestras 26 tiendas Amazon, las 37 páginas de nuestra biblioteca mundial y todos nuestros consejos. ¿Cómo puedo ayudarte?",
      goodbye: '¡Adiós! ¡Hasta pronto! 👋'
    },
    de: {
      morning: 'Guten Morgen! ☀️',
      afternoon: 'Guten Tag! 🌤️',
      evening: 'Guten Abend! 🌙',
      night: 'Gute Nacht! 🌃',
      welcome: "Ich bin der intelligente REUSSITESS®-Assistent. Ich kenne perfekt unsere 26 Amazon-Shops, die 37 Seiten unserer Weltbibliothek und alle unsere Tipps. Wie kann ich Ihnen helfen?",
      goodbye: 'Auf Wiedersehen! Bis bald! 👋'
    },
    it: {
      morning: 'Buongiorno! ☀️',
      afternoon: 'Buon pomeriggio! 🌤️',
      evening: 'Buonasera! 🌙',
      night: 'Buonanotte! 🌃',
      welcome: "Sono l'assistente intelligente REUSSITESS®. Conosco perfettamente i nostri 26 negozi Amazon, le 37 pagine della nostra biblioteca mondiale e tutti i nostri consigli. Come posso aiutarti?",
      goodbye: 'Arrivederci! A presto! 👋'
    },
    pt: {
      morning: 'Bom dia! ☀️',
      afternoon: 'Boa tarde! 🌤️',
      evening: 'Boa noite! 🌙',
      night: 'Boa noite! 🌃',
      welcome: "Sou o assistente inteligente REUSSITESS®. Conheço perfeitamente as nossas 26 lojas Amazon, as 37 páginas da nossa biblioteca mundial e todas as nossas dicas. Como posso ajudar?",
      goodbye: 'Adeus! Até breve! 👋'
    },
    ar: {
      morning: 'صباح الخير! ☀️',
      afternoon: 'مساء الخير! 🌤️',
      evening: 'مساء الخير! 🌙',
      night: 'تصبح على خير! 🌃',
      welcome: "أنا المساعد الذكي REUSSITESS®. أعرف تمامًا متاجرنا الـ 26 على أمازون، والصفحات الـ 37 لمكتبتنا العالمية، وجميع نصائحنا. كيف يمكنني مساعدتك؟",
      goodbye: 'وداعا! أراك قريبا! 👋'
    },
    zh: {
      morning: '早上好！☀️',
      afternoon: '下午好！🌤️',
      evening: '晚上好！🌙',
      night: '晚安！🌃',
      welcome: "我是REUSSITESS®智能助手。我完美了解我们的26家亚马逊商店、世界图书馆的37页以及所有技巧。我能帮您什么？",
      goodbye: '再见！很快见！👋'
    }
  };

  // Obtenir salutation selon heure
  const getGreeting = () => {
    const hour = new Date().getHours();
    const lang = greetings[currentLang];
    if (hour < 12) return lang.morning;
    if (hour < 18) return lang.afternoon;
    if (hour < 22) return lang.evening;
    return lang.night;
  };

  // Intelligence artificielle réponses
  const generateResponse = (input) => {
    const lowerInput = input.toLowerCase();

    // Salutations
    if (/^(bonjour|salut|hello|hi|hola|ciao|ola|مرحبا|你好)$/i.test(lowerInput)) {
      return `${getGreeting()} ${greetings[currentLang].welcome}`;
    }

    // Au revoir
    if (/^(au revoir|bye|adios|ciao|tchau|وداعا|再见)$/i.test(lowerInput)) {
      return greetings[currentLang].goodbye;
    }

    // Boutiques
    if (lowerInput.includes('boutique') || lowerInput.includes('shop') || lowerInput.includes('store')) {
      return `🛍️ REUSSITESS® Global Nexus compte ${knowledgeBase.boutiques.total} boutiques Amazon dans ${knowledgeBase.boutiques.pays.length} pays :\n\n${knowledgeBase.boutiques.pays.join(', ')}\n\nDont ${knowledgeBase.boutiques.types.join(' et ')}.\n\n🔗 Accès : ${knowledgeBase.boutiques.url}`;
    }

    // Bibliothèque
    if (lowerInput.includes('bibliothèque') || lowerInput.includes('library') || lowerInput.includes('cultura')) {
      let response = `📚 Notre bibliothèque mondiale contient ${knowledgeBase.bibliotheque.total} pages détaillées :\n\n`;
      Object.entries(knowledgeBase.bibliotheque.regions).forEach(([region, data]) => {
        response += `🗺️ ${region} : ${data.count} pays/territoires\n`;
      });
      return response + '\n💡 Posez-moi des questions sur un pays spécifique !';
    }

    // Recherche pays spécifique
    Object.entries(knowledgeBase.bibliotheque.regions).forEach(([region, data]) => {
      data.pays.forEach(pays => {
        if (lowerInput.includes(pays.nom.toLowerCase())) {
          return `🌍 ${pays.nom}\n\n` +
                 `📍 Capitale : ${pays.capitale}\n` +
                 `👥 Population : ${pays.pop}\n\n` +
                 `🏛️ Patrimoine :\n${pays.patrimoine.map(p => `• ${p}`).join('\n')}\n\n` +
                 `🔗 Plus d'infos : /bibliotheque`;
        }
      });
    });

    // Astuces
    if (lowerInput.includes('astuce') || lowerInput.includes('tip') || lowerInput.includes('conseil')) {
      let response = '💡 Nos sections d\'astuces :\n\n';
      knowledgeBase.astuces.sections.forEach(section => {
        response += `🎯 ${section.nom}\n`;
      });
      return response + '\n🔗 Détails : /astuces';
    }

    // Amazon
    if (lowerInput.includes('amazon') || lowerInput.includes('deal') || lowerInput.includes('promo')) {
      return `🛒 Astuces Amazon Pro :\n\n${knowledgeBase.astuces.sections[0].tips.map(t => `✅ ${t}`).join('\n')}\n\n🔗 Plus : /astuces`;
    }

    // Business
    if (lowerInput.includes('business') || lowerInput.includes('gagner') || lowerInput.includes('money') || lowerInput.includes('revenu')) {
      return `💼 Business rentables 2025 :\n\n${knowledgeBase.astuces.sections[1].rentables.map(b => `💰 ${b}`).join('\n')}\n\n🔗 Détails : /astuces`;
    }

    // Influenceurs
    if (lowerInput.includes('influenceur') || lowerInput.includes('influencer') || lowerInput.includes('youtube') || lowerInput.includes('tiktok')) {
      return `⭐ Top Influenceurs 2025 :\n\n${knowledgeBase.astuces.sections[2].top.map(i => `🏆 ${i}`).join('\n')}\n\n🔗 Plus : /astuces`;
    }

    // IA
    if (lowerInput.includes('ia') || lowerInput.includes('ai') || lowerInput.includes('intelligence') || lowerInput.includes('chatgpt')) {
      return `🤖 Gagner avec IA :\n\n${knowledgeBase.astuces.sections[3].methodes.map(m => `💡 ${m}`).join('\n')}\n\n🔗 Guide complet : /astuces`;
    }

    // Santé naturelle
    if (lowerInput.includes('santé') || lowerInput.includes('remède') || lowerInput.includes('plante') || lowerInput.includes('health')) {
      return `🌿 Remèdes & Plantes :\n\n${knowledgeBase.astuces.sections[4].remedes.slice(0,3).map(r => `✅ ${r}`).join('\n')}\n\n${knowledgeBase.astuces.sections[5].plantes.slice(0,3).map(p => `🍃 ${p}`).join('\n')}\n\n🔗 Complet : /astuces`;
    }

    // Aide
    if (lowerInput.includes('aide') || lowerInput.includes('help') || lowerInput.includes('?')) {
      return `❓ Je peux vous aider sur :\n\n` +
             `🛍️ Nos 26 boutiques Amazon\n` +
             `📚 Bibliothèque 37 pages culturelles\n` +
             `💡 Astuces Amazon, business, IA\n` +
             `⭐ Influenceurs et revenus\n` +
             `🌿 Remèdes naturels et plantes\n` +
             `🗺️ Informations pays spécifiques\n\n` +
             `Posez-moi n'importe quelle question !`;
    }

    // Réponse par défaut
    return `🤔 Je n'ai pas bien compris. Essayez :\n\n` +
           `• "boutiques" pour nos 26 shops Amazon\n` +
           `• "bibliothèque" pour les 37 pages culturelles\n` +
           `• "astuces" pour nos conseils\n` +
           `• Nom d'un pays (ex: "Sénégal", "Vietnam")\n` +
           `• "aide" pour plus d'options`;
  };

  // Initialisation avec message de bienvenue
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([{
          type: 'bot',
          text: `${getGreeting()}\n\n${greetings[currentLang].welcome}`
        }]);
      }, 300);
    }
  }, [isOpen]);

  // Scroll automatique
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Envoyer message
  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMsg = { type: 'user', text: inputMessage };
    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = { type: 'bot', text: generateResponse(inputMessage) };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Bouton flottant GRAND */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all p-6 animate-bounce"
          style={{ width: '80px', height: '80px' }}
        >
          <div className="text-4xl">🤖</div>
        </button>
      )}

      {/* Fenêtre chat GRANDE */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 z-50 bg-white rounded-3xl shadow-2xl flex flex-col" style={{ width: '450px', height: '700px' }}>
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-6 rounded-t-3xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="text-4xl">🤖</div>
                <div>
                  <h3 className="text-2xl font-bold">Assistant REUSSITESS®</h3>
                  <p className="text-sm opacity-90">Intelligent • Autonome • Multilingue</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-3xl hover:scale-110 transition"
              >
                ✕
              </button>
            </div>

            {/* Sélecteur langues avec drapeaux */}
            <div className="flex gap-2 flex-wrap">
              {Object.entries(languages).map(([code, lang]) => (
                <button
                  key={code}
                  onClick={() => setCurrentLang(code)}
                  className={`px-3 py-2 rounded-lg text-xl transition ${
                    currentLang === code ? 'bg-white/30 scale-110' : 'bg-white/10 hover:bg-white/20'
                  }`}
                  title={lang.name}
                >
                  {lang.flag}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl text-base whitespace-pre-wrap ${
                    msg.type === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-white text-gray-800 shadow-md'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl shadow-md">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-white rounded-b-3xl">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Posez votre question..."
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none text-base"
              />
              <button
                onClick={sendMessage}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition text-xl"
              >
                ➤
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BotAssistant;
