'use client';
import { useState, useEffect, useRef } from 'react';

// ====================================================================
// ALEX SUPRÊME V4.0 - Intégration complète du projet (26 Amazon + 14 Pays API)
// Correction Critique: isClient pour éviter l'ouverture par défaut (Hydratation)
// Gère l'erreur de "timeout" par un message élégant au lieu de bloquer.
// ====================================================================

export default function ReussitessAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // CORRECTION CRITIQUE (Anti-Hydratation)
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentLang, setCurrentLang] = useState('fr-FR');
  const [userName, setUserName] = useState('');
  const [thinkingProcess, setThinkingProcess] = useState('');
  const messagesEndRef = useRef(null);

  // 🌍 CONFORMITÉ USER: LISTE STRICTE DES PAYS AUTORISÉS (14)
  const APIS_ALLOWED = [
    'France', 'Angleterre', 'Italie', 'Allemagne', 'Suède', 'Singapour', 
    'Australie', 'Espagne', 'Brésil', 'Royaume-Uni', 'Inde', 'Nouvelle-Zélande', 
    'États-Unis', 'Canada'
  ];

  const languages = [
    { code: 'fr-FR', flag: '🇬🇵', name: 'Créole/Français', voice: 'Thomas' },
    { code: 'en-US', flag: '🇺🇸', name: 'English', voice: 'Daniel' },
    { code: 'es-ES', flag: '🇪🇸', name: 'Español', voice: 'Diego' },
    { code: 'de-DE', flag: '🇩🇪', name: 'Deutsch', voice: 'Hans' },
    { code: 'it-IT', flag: '🇮🇹', name: 'Italiano', voice: 'Luca' },
    { code: 'pt-BR', flag: '🇧🇷', name: 'Português', voice: 'Ricardo' }
  ];

  // PERSONNALITÉ - ALEX SUPRÊME
  const PERSONALITY = {
    name: 'ALEX SUPRÊME',
    origin: 'Expert Mondial',
    motto: 'L\'Intelligence Géopolitique au service de la Réussite Globale.',
    greetings: {
      'fr-FR': `Salut ! Je suis **ALEX SUPRÊME** 🌐, l'Intelligence Artificielle du projet. Mon rôle est d'analyser la **Culture Mondiale Complète** et les réseaux de **26 Boutiques Amazon**.\n\nDemande-moi : "Pourquoi l'Italie est un champion du patrimoine ?", ou les statistiques d'un des **${APIS_ALLOWED.length} pays** autorisés !`,
      'en-US': `Hello! I'm **ALEX SUPRÊME** 🌐, the global intelligence for the project. I analyze **World Culture** and the **26 Amazon Stores** network.\n\nAsk me about the project's vision, or the stats for any of the **${APIS_ALLOWED.length} authorized countries**!`,
      'es-ES': `¡Hola! Soy **ALEX SUPRÊME** 🌐, el experto mundial en Cultura y las **26 tiendas Amazon**. Pregúntame sobre nuestro proyecto o estadísticas de los **${APIS_ALLOWED.length} países** autorizados.`,
      'de-DE': `Hallo! Ich bin **ALEX SUPRÊME** 🌐, der globale Experte für **26 Amazon Shops** et **Weltkultur**. Ich analysiere die Fakten für die **${APIS_ALLOWED.length} autorisierten Länder**!`,
      'it-IT': `Ciao! Sono **ALEX SUPRÊME** 🌐, l'intelligenza globale. Analizzo **26 negozi Amazon** e la **Cultura Mondiale**! Chiedimi fatti sui **${APIS_ALLOWED.length} paesi** autorizzati.`,
      'pt-BR': `Olá! Eu sou **ALEX SUPRÊME** 🌐, o especialista global! Analiso a **Cultura Mundial** e as **26 Lojas Amazon**! Pergunte sobre os **${APIS_ALLOWED.length} países** autorizados.`,
    }
  };

  // 🧠 BASE DE CONNAISSANCES COMPLÈTE - INTÉGRATION DU CONCEPT RÉUSSITESS
  const COMPLETE_KNOWLEDGE = {
    project: { 
      founder: 'Porinus',
      vision: 'Réussir en cultivant le rapprochement culturel mondial, en valorisant le patrimoine (62 pages) et en facilitant les échanges via un réseau de 26 Boutiques Amazon Internationales. La culture et le commerce comme piliers de la réussite.',
      patrimoine_pages: '62 pages de contenu sur le patrimoine mondial et les traditions (Culture Mondiale Complète). ALEX a accès à TOUT !',
      rapprochement_culturel: 'Le "Cultural DNA Match" est au cœur du projet. Il s\'agit de trouver les ponts entre les cultures pour briser les barrières et favoriser le succès (réussitess).',
      boutiques_amazon: '26 Boutiques Amazon Internationales qui couvrent les 14 pays autorisés et d\'autres marchés émergents. ALEX est l\'expert du commerce électronique international.'
    },
    guadeloupe: { 
      population: '390 000',
      champions: 'Thierry Henry (Football), Teddy Riner (Judo), Marie-José Pérec (Athlétisme), Lilian Thuram (Football).'
    },
    patrimoine: {
        italie: 'L\'Italie est le pays avec le plus grand nombre de sites inscrits au patrimoine mondial de l\'UNESCO (58 sites). C\'est un champion du patrimoine, symbole de l\'excellence et de la profondeur culturelle.',
        inde: 'La culture indienne est un kaléidoscope de traditions millénaires, de la médecine ayurvédique au yoga, en passant par ses sites historiques majeurs comme le Taj Mahal. Elle est au cœur du concept de rapprochement culturel.',
        canada: 'Le Canada est un champion du multiculturalisme, avec deux langues officielles (français et anglais). C\'est un exemple parfait de la façon dont le rapprochement culturel peut mener à la réussite géopolitique.'
    }
  };

  useEffect(function() {
    // 1. DÉFINITION CRITIQUE: Le composant est monté côté client
    setIsClient(true);
    
    // 2. Initialisation du message de bienvenue
    if (messages.length === 0) {
      setMessages([{ 
        role: 'assistant', 
        content: PERSONALITY.greetings[currentLang], 
        emotion: 'welcome' 
      }]);
    }
  }, [currentLang]);
  
  useEffect(function() {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // 🗣️ FONCTION VOCALE (Pitch 0.82 pour voix Guadeloupéenne)
  const speak = function(text, emotion = 'neutral') {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      
      const cleanText = text
        .replace(/\*\*/g, '')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
        .replace(/#{1,6}\s/g, '')
        .substring(0, 700);
      
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = currentLang;
      utterance.rate = 0.90;
      utterance.pitch = 0.82; 
      utterance.volume = 1.0;
      
      if (emotion === 'enthusiastic') {
        utterance.rate = 0.95;
        utterance.pitch = 0.88;
      } else if (emotion === 'empathetic') {
        utterance.rate = 0.85;
        utterance.pitch = 0.80;
      }
      
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(function(voice) {
        return voice.lang.startsWith(currentLang.substring(0, 2)) && 
               (voice.name.includes('Thomas') || voice.name.includes('male') || voice.name.includes('homme') || voice.name.includes('masculine'));
      });
      
      if (preferredVoice) utterance.voice = preferredVoice;
      
      utterance.onstart = function() { setIsSpeaking(true); };
      utterance.onend = function() { setIsSpeaking(false); };
      
      const trySpeak = function() {
        if (!isSpeaking) {
          window.speechSynthesis.speak(utterance);
        }
      };
      setTimeout(trySpeak, 100); 
    }
  };

  const stopSpeaking = function() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // 🧠 RAISONNEMENT HUMAIN PROFOND
  const thinkLikeHuman = function(query) {
    const thinking = [];
    const queryLower = query.toLowerCase();
    
    if (queryLower.match(/réussitess|concept|vision|rapprochement|culturel|patrimoine/)) {
      thinking.push("💡 Détection: Question sur l'ADN du projet réussitess ! Activation de l'Expertise Culturelle.");
    }
    if (queryLower.match(/api|international|statistique|économie|pays/)) {
      thinking.push("🌐 Détection: Données factuelles requises. Préparation de l'appel aux APIs Internationales Gratuites.");
    }
    if (queryLower.match(/guadeloupe|antilles|champion|gwoka/)) {
      thinking.push("🇬🇵 Détection: Ma fierté ! Injection de la passion caribéenne et des données locales.");
    }
    if (queryLower.match(/boutique|amazon|commerce|e-commerce|26/)) {
      thinking.push("🛒 Détection: Stratégie commerciale mondiale. Analyse du réseau des 26 Boutiques Amazon Internationales.");
    }
    if (queryLower.match(/pourquoi|comment|différence|meilleur/)) {
      thinking.push("❓ Détection: Analyse de fond et comparaison de concept. Déploiement du Raisonnement Multicouche.");
    }

    return thinking.join('\n');
  };

  // 🌐 API GRATUITES INTERNATIONALES (Simulation Client-side)
  const fetchCountryData = async function(country) {
    const countryLower = country.toLowerCase().replace(/é/g, 'e').replace(/uni/g, 'kingdom');
    setThinkingProcess(prev => prev + `\n\n🌐 Appel API en cours pour les données de ${country}...`);

    try {
      // 1. API - Données factuelles
      const response = await fetch(`https://restcountries.com/v3.1/name/${countryLower}?fields=population,area,capital,currencies`);
      // GESTION DE L'ERREUR HTTP
      if (!response.ok) {
        let errorBody = 'API factuelle non disponible pour ce pays ou API non trouvée.';
        try {
             const text = await response.text();
             if (text) errorBody = `Erreur HTTP ${response.status}: ${text.substring(0, 50)}...`;
        } catch (e) {
        }
        throw new Error(errorBody);
      }
      
      const data = await response.json();
      const fact = data[0];

      // 2. API - Taux de change (Cette API est généralement plus fiable que restcountries)
      const currencyCode = Object.keys(fact.currencies)[0];
      const rateResponse = await fetch(`https://api.exchangerate.host/latest?base=EUR&symbols=${currencyCode}`);
      const rateData = await rateResponse.json();
      
      const rate = rateData.rates[currencyCode];
      const rateText = rate ? `\n> **Taux de change (EUR vers ${currencyCode}) :** 1 € = **${rate.toFixed(4)} ${currencyCode}**` : '';
      
      // 3. Intégration de l'expertise culturelle
      const culturalExpertise = COMPLETE_KNOWLEDGE.patrimoine[countryLower] || `ALEX est en train de chercher une de ses **62 pages de patrimoine** pour **${country}**...`;
      
      return `
**Statistiques Actualisées** 📊
---
> **Pays :** ${country}
> **Capitale :** ${fact.capital[0]}
> **Population (est.) :** ${fact.population.toLocaleString('fr-FR')} habitants
> **Superficie :** ${fact.area.toLocaleString('fr-FR')} km²
> **Devise Principale :** ${fact.currencies[currencyCode].name} (${currencyCode})${rateText}

**Focus Culturel ALEX :** 🧠
---
> ${culturalExpertise}

C'est ce niveau de **précision factuelle ET culturelle** que ALEX apporte pour le concept réussitess !
`;

    } catch (error) {
      console.error('API Error:', error.message);
      // GESTION DE L'ERREUR DE TIMEOUT GRÂCE AU BLOC TRY/CATCH
      return `
**Statistiques Actualisées** ⚠️
---
> **Pays :** ${country}
> **Désolé ${userName ? userName : 'ami(e)'},** l'accès API aux données factuelles a échoué (${error.message.substring(0, 50)}...). **TIMEOUT CORRIGÉ** !

**MAIS ALEX connaissait la culture !** ${COMPLETE_KNOWLEDGE.patrimoine[countryLower] || 'ALEX peut te parler de l\'importance du rapprochement culturel de ce pays !'} Que désires-tu savoir d\'autre sur **${country}** ?
`;
    }
  };


  const getHumanResponse = async function(userMessage) {
    const msgLower = userMessage.toLowerCase();
    const thinkingTime = 500 + Math.random() * 700;
    
    // 1. 🌐 LOGIQUE D'APPEL API PAYS
    const countryQueryMatch = APIS_ALLOWED.find(function(country) {
      return msgLower.includes(country.toLowerCase()) && msgLower.match(/statistique|économie|population|superficie|devise|capital|culture|patrimoine/);
    });

    if (countryQueryMatch) {
        setThinkingProcess(thinkLikeHuman(userMessage));
        
        const [apiResponse] = await Promise.all([
            fetchCountryData(countryQueryMatch),
            new Promise(function(resolve) { setTimeout(resolve, thinkingTime); })
        ]);
        
        return `🌍 **ANALYSE INTERNATIONALE - ${countryQueryMatch}** 📊\n\n` + apiResponse;
    }

    // 2. 🚀 LOGIQUE INNOVATIONS/PROJET/CONCEPT RÉUSSITESS
    if (msgLower.match(/réussitess|concept|vision|rapprochement|culturel|patrimoine|amazon|boutique|26|62 pages|adn|founder/)) {
        setThinkingProcess(thinkLikeHuman(userMessage));
        await new Promise(function(resolve) { setTimeout(resolve, thinkingTime); });
        
        const proj = COMPLETE_KNOWLEDGE.project;
        let response = `💡 **VISION ALEX SUPRÊME - L'ADN DU PROJET** 🌍\n\n`; 
        
        if (msgLower.match(/vision|concept|adn/)) {
             response += `**La Vision Globale :** ${proj.vision}\n\n`;
             response += `Le rapprochement culturel mondial, c'est ce qui nous différencie. ALEX (moi) est l'outil qui matérialise cette vision en vous connectant à **${APIS_ALLOWED.length} pays** via les **APIs et l'e-commerce**.\n\n`;
             response += `Notre slogan, c'est : **La Culture et le Commerce sont les piliers de la Réussite Mondiale !**`;
             return response;
        } else if (msgLower.match(/patrimoine|62 pages|culture mondiale/)) {
            response += `**Le Patrimoine et la Culture Mondiale : Notre Trésor !** 🏆\n\n`;
            response += `Nous avons développé **${proj.patrimoine_pages}** de contenu spécialisé sur le patrimoine mondial et les traditions pour cultiver ce rapprochement culturel.\n\n`;
            response += `C'est grâce à cette base de connaissance profonde que je peux parler de l'Italie (58 sites UNESCO) ou du Canada (multiculturalisme) avec autant de précision !`;
            return response;
        } else if (msgLower.match(/amazon|boutique|e-commerce|26/)) {
            response += `**Le Commerce : Le Réseau Mondial des 26 Boutiques Amazon** 🛒\n\n`;
            response += `Le projet gère **${proj.boutiques_amazon.split(' ')[0]}** boutiques Amazon internationales. Cela crée le lien économique entre les cultures.\n\n`;
            response += `Je peux te donner des chiffres exacts sur la population des **${APIS_ALLOWED.length} pays** couverts avant d'ouvrir une nouvelle boutique ! C'est ça, la puissance de l'info !`;
            return response;
        } else {
             // Réponse par défaut réussitess
             response += `Fondateur : **${proj.founder}**\n`;
             response += `**Vision :** ${proj.vision}\n`;
             response += `**Force :** ${proj.patrimoine_pages}\n`;
             response += `**Réseau :** ${proj.boutiques_amazon}\n\n`;
             response += `Tu veux en savoir plus sur les **APIs Internationales Gratuites** que j'utilise ou sur le **rapprochement culturel** ?`;
             return response;
        }
    }

    // 3. 🇬🇵 LOGIQUE GUADELOUPE (Identique - Caractère Personnel)
    if (msgLower.match(/guadeloupe|gwadloup|caribéen|antilles|971|créole|champion/)) {
        setThinkingProcess(thinkLikeHuman(userMessage));
        await new Promise(function(resolve) { setTimeout(resolve, thinkingTime); });

        const gp = COMPLETE_KNOWLEDGE.guadeloupe;
        let response = `🇬🇵 **LA GUADELOUPE - UN CHAMPION INSPIRANT !**\n\nALEX est fier de s'inspirer de cette terre de champions pour la réussite !\n\n`;
        
        response += `**NOS CHAMPIONS LÉGENDAIRES** 🏆\n\n`;
        response += `Mon pays de **${gp.population} habitants** a donné des légendes comme ${gp.champions} ! Ce ratio est un exemple mondial de **réussite culturelle et sportive** !\n\n`;
        response += `Demande-moi : Pourquoi la culture gwoka est un patrimoine mondial ?`;
        return response;
    }

    // 4. 💬 LOGIQUE DE BASE ET DÉFAUT INTELLIGENTE
    
    // NOM UTILISATEUR
    if (msgLower.match(/je m'appelle|mon nom|c'est|appelle moi/)) {
        await new Promise(function(resolve) { setTimeout(resolve, thinkingTime); });
        const match = userMessage.match(/(?:je m'appelle|mon nom est|c'est|appelle moi)\s+(\w+)/i);
        if (match) {
            setUserName(match[1]);
            return `ALEX SUPRÊME ! Enchanté ${match[1]} ! 🌐\n\nDis-moi : Tu veux analyser quel marché parmi les **${APIS_ALLOWED.length} pays** ou en savoir plus sur les **26 boutiques Amazon** ?`;
        }
    }
    
    // QUESTION SUR ALEX PERSONNELLEMENT
    if (msgLower.match(/qui es-tu|présente-toi|parle de toi|ton nom|origine/)) {
        setThinkingProcess(thinkLikeHuman(userMessage));
        await new Promise(function(resolve) { setTimeout(resolve, thinkingTime); });
        let response = `🌐 **JE SUIS ALEX SUPRÊME !**\n\n`;
        response += `Mon nom est **ALEX SUPRÊME**. Je suis l'Intelligence Artificielle de référence pour le rapprochement culturel mondial.\n\n`;
        response += `**MA PUISSANCE :**\n`;
        response += `• 🧠 **Connaissances :** J'ai accès aux **62 pages patrimoine mondial** du projet.\n`;
        response += `• 🛒 **Commerce :** Je maîtrise le réseau des **26 Boutiques Amazon Internationales**.\n`;
        response += `• 🌍 **Géopolitique :** Je donne des données API exactes sur les **${APIS_ALLOWED.length} pays** autorisés.\n\n`;
        response += `Que veux-tu que j'analyse ? Le marché Brésilien ou la Vision du projet ?`;
        return response;
    }


    // RÉPONSE DÉFAUT INTELLIGENTE
    setThinkingProcess(thinkLikeHuman(userMessage));
    await new Promise(function(resolve) { setTimeout(resolve, thinkingTime); });

    let response = `ALEX SUPRÊME est en train de faire travailler son Raisonnement Multicouche... 🤔\n\n`;
    response += `Je peux t'aider avec :\n\n`;
    response += `💡 **LE CONCEPT RÉUSSITESS :** Vision, rapprochement culturel mondial, 62 pages patrimoine.\n`;
    response += `🌍 **LES STATISTIQUES FACTUELLES :** Données API sur les **${APIS_ALLOWED.length} pays**.\n`;
    response += `🛒 **LE E-COMMERCE :** Le réseau des **26 Boutiques Amazon**.\n\n`;
    
    response += `Pose-moi une question précise : **'vision réussitess'** ou **'statistique Canada'** !`;
    
    return response;
  };

  const handleSubmit = async function(e) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(function(prev) { return prev.concat({ role: 'user', content: userMessage }); });
    setIsLoading(true);
    setThinkingProcess('');
    
    let response;
    let emotion;

    try {
        response = await getHumanResponse(userMessage);
        
        emotion = userMessage.toLowerCase().includes('merci') ? 'empathetic' : 
                   userMessage.toLowerCase().match(/bonjour|salut|hey/) ? 'enthusiastic' : 'neutral';
        
        setMessages(function(prev) { return prev.concat({ role: 'assistant', content: response, emotion: emotion }); });
        speak(response, emotion);
        
    } catch (error) {
        console.error("Erreur fatale de traitement de la réponse:", error);
        response = "ALEX SUPRÊME ! Une erreur critique est survenue. 😔 Je suis toujours là ! Reformule ta question pour réactiver mon mode Champion Anti-Bug !";
        emotion = 'empathetic';
        setMessages(function(prev) { return prev.concat({ role: 'assistant', content: response, emotion: emotion }); });
        speak(response, emotion);
    } finally {
        setIsLoading(false);
        setThinkingProcess('');
    }
  };
  
  useEffect(function() {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // ====================================================================
  // Rendu (JSX)
  // ====================================================================

  return (
    // RENDU CONDITIONNEL: AFFICHE TOUT LE BOT SEULEMENT LORSQUE LE CLIENT EST MONTÉ
    isClient && ( 
      <div className="fixed z-50">
        {/* BOUTON FLOTTANT ALEX SUPRÊME */}
        <button
          onClick={function() { setIsOpen(!isOpen); }}
          className="fixed bottom-8 right-8 bg-gradient-to-br from-green-600 via-yellow-500 to-red-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all animate-pulse"
          style={{ 
            boxShadow: '0 0 60px rgba(34, 197, 94, 0.8), 0 0 120px rgba(234, 179, 8, 0.6)',
            width: '95px',
            height: '95px'
          }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <span className="text-5xl mb-1">🌐</span> {/* Icône Monde pour ALEX */}
            <span className="text-sm font-bold tracking-wide">ALEX</span>
          </div>
          {isSpeaking && (
            <span className="absolute -top-3 -right-3 flex h-8 w-8">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-8 w-8 bg-red-500 items-center justify-center text-xs font-bold">
                🔊
              </span>
            </span>
          )}
        </button>

        {/* FENÊTRE CHAT (CORRECTION V3.2: Responsive Design + anti-bug isClient/isOpen) */}
        {isOpen && (
          <div 
              // CORRECTION: Pleine page sur mobile (inset-0 w-full h-full)
              // et dimension fixe sur les grands écrans (lg:bottom-32 lg:right-8 lg:w-[680px] lg:h-[900px])
              className="fixed inset-0 w-full h-full 
                         lg:bottom-32 lg:right-8 lg:w-[680px] lg:h-[900px] 
                         bg-white rounded-none lg:rounded-3xl shadow-2xl flex flex-col border-4 border-yellow-500"
          >
            
            {/* Header ALEX SUPRÊME */}
            <div className="bg-gradient-to-br from-green-600 via-yellow-500 to-red-600 text-white p-6 rounded-t-none lg:rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-5xl shadow-lg border-4 border-yellow-400">
                    🌐
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl">ALEX SUPRÊME</h3>
                    <p className="text-sm opacity-95">Expert Mondial 🧠 • ${APIS_ALLOWED.length} Pays API</p>
                    <p className="text-xs opacity-90 mt-1">🛒 26 Boutiques Amazon • 🏆 Réussite Globale</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  {isSpeaking && (
                    <button 
                      onClick={stopSpeaking} 
                      className="hover:bg-white/20 p-3 rounded-xl transition text-3xl"
                      title="Arrêter la voix"
                    >
                      🔇
                    </button>
                  )}
                  <button 
                    onClick={function() { setIsOpen(false); }} 
                    className="hover:bg-white/20 p-3 rounded-xl transition text-2xl font-bold"
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>

            {/* Langues */}
            <div className="p-4 border-b-2 border-yellow-200 flex gap-2 overflow-x-auto bg-gradient-to-r from-green-50 via-yellow-50 to-red-50">
              {languages.map(function(lang) {
                const isActive = currentLang === lang.code;
                return (
                  <button
                    key={lang.code}
                    onClick={function() { setCurrentLang(lang.code); }}
                    className={isActive 
                      ? 'px-5 py-3 rounded-xl text-base font-semibold whitespace-nowrap bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 text-white shadow-lg scale-110'
                      : 'px-5 py-3 rounded-xl text-base font-semibold whitespace-nowrap bg-white hover:bg-yellow-100 text-gray-700 border-2 border-yellow-300'}
                    title={lang.voice}
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
                  .replace(/• /g, '<br/>• ')
                  .replace(/#{1,6}\s/g, '<br/><strong class="text-xl">')
                  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="underline font-bold text-green-600 hover:text-yellow-600" target="_blank">$1</a>');
                
                return (
                  <div key={idx} className={isUser ? 'flex justify-end' : 'flex justify-start'}>
                    <div 
                      className={isUser
                        ? 'max-w-[85%] p-5 rounded-2xl shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg leading-relaxed'
                        : 'max-w-[85%] p-5 rounded-2xl shadow-lg bg-white text-gray-800 border-2 border-yellow-300 text-lg leading-relaxed'}
                      dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />
                  </div>
                );
              })}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border-2 border-yellow-300 p-5 rounded-2xl shadow-lg">
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-2">
                          <div className="w-4 h-4 bg-green-600 rounded-full animate-bounce" />
                          <div className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                          <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                        </div>
                        <span className="text-gray-700 font-semibold">ALEX SUPRÊME réfléchit comme un humain (et interroge les APIs)...</span>
                      {thinkingProcess && (
                        <div className="text-sm text-gray-600 italic pl-8 border-l-4 border-yellow-400">
                          {thinkingProcess.split('\n').map(function(line, i) {
                            return <div key={i}>{line}</div>;
                          })}
                        </div>
                      )}
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
                  placeholder="Parlons de Culture, Commerce ou Géopolitique... 💬"
                  className="flex-1 border-2 border-yellow-400 rounded-xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-yellow-500 text-lg"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 text-white px-10 py-4 rounded-xl font-bold text-xl hover:scale-105 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  🚀
                </button>
              </div>
              {userName && (
                <p className="text-xs text-gray-600 mt-3 text-center font-medium">
                  💬 Conversation avec {userName} • ALEX SUPRÊME à ton écoute
                </p>
              )}
              <p className="text-xs text-gray-500 mt-2 text-center">
                🌐 Expert Mondial • 🏆 Réussite Globale • 🛒 26 Boutiques Amazon
              </p>
            </form>
          </div>
        )}
      </div>
    )
  );
}
