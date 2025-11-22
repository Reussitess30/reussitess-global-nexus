'use client'

import { useState, useEffect, useRef } from 'react'

export default function BotAssistantVocal() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [language, setLanguage] = useState('fr') // fr, en, es, de, it, pt
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [voiceEnabled, setVoiceEnabled] = useState(true)
  
  const recognitionRef = useRef(null)
  const synthRef = useRef(null)

  // BASE DE DONNÉES COMPLÈTE - TOUTES LES BOUTIQUES ET INFORMATIONS
  const completeDatabase = {
    // 26 BOUTIQUES AMAZON (14 Personnelles + 12 Influenceurs)
    amazonStores: {
      personal: [
        { country: '🇺🇸 États-Unis', name: 'USA', link: 'amazon.com/shop/amourguadeloupe', flag: '🇺🇸' },
        { country: '🇮🇹 Italie', name: 'Italy', link: 'amazon.it/shop/amourguadeloupe', flag: '🇮🇹' },
        { country: '🇫🇷 France', name: 'France', link: 'amazon.fr/shop/amourguadeloupe', flag: '🇫🇷' },
        { country: '🇪🇸 Espagne', name: 'Spain', link: 'amazon.es/shop/amourguadeloupe', flag: '🇪🇸' },
        { country: '🇩🇪 Allemagne', name: 'Germany', link: 'amazon.de/shop/amourguadeloupe', flag: '🇩🇪' },
        { country: '🇨🇦 Canada', name: 'Canada', link: 'amazon.ca/shop/amourguadeloupe', flag: '🇨🇦' },
        { country: '🇮🇳 Inde', name: 'India', link: 'amazon.in/shop/amourguadeloupe', flag: '🇮🇳' },
        { country: '🇳🇱 Pays-Bas', name: 'Netherlands', link: 'amazon.nl/shop/amourguadeloupe', flag: '🇳🇱' },
        { country: '🇸🇪 Suède', name: 'Sweden', link: 'amazon.se/shop/amourguadeloupe', flag: '🇸🇪' },
        { country: '🇸🇬 Singapour', name: 'Singapore', link: 'amazon.sg/shop/amourguadeloupe', flag: '🇸🇬' },
        { country: '🇬🇧 Royaume-Uni', name: 'UK', link: 'amazon.co.uk/shop/amourguadeloupe', flag: '🇬🇧' },
        { country: '🇦🇺 Australie', name: 'Australia', link: 'amazon.com.au/shop/amourguadeloupe', flag: '🇦🇺' },
        { country: '🇧🇪 Belgique', name: 'Belgium', link: 'amazon.com.be/shop/amourguadeloupe', flag: '🇧🇪' },
        { country: '🇧🇷 Brésil', name: 'Brazil', link: 'amazon.com.br/shop/amourguadeloupe', flag: '🇧🇷' }
      ],
      influencer: [
        { country: '🇦🇺 Australie', name: 'Australia', link: 'amazon.com.au/shop/influencer-fb942837', flag: '🇦🇺' },
        { country: '🇺🇸 États-Unis', name: 'USA', link: 'amazon.com/shop/influencer-fb942837', flag: '🇺🇸' },
        { country: '🇬🇧 Royaume-Uni', name: 'UK', link: 'amazon.co.uk/shop/influencer-fb942837', flag: '🇬🇧' },
        { country: '🇮🇳 Inde', name: 'India', link: 'amazon.in/shop/influencer-fb942837', flag: '🇮🇳' },
        { country: '🇸🇪 Suède', name: 'Sweden', link: 'amazon.se/shop/influencer-fb942837', flag: '🇸🇪' },
        { country: '🇸🇬 Singapour', name: 'Singapore', link: 'amazon.sg/shop/influencer-fb942837', flag: '🇸🇬' },
        { country: '🇧🇪 Belgique', name: 'Belgium', link: 'amazon.com.be/shop/influencer-fb942837', flag: '🇧🇪' },
        { country: '🇪🇸 Espagne', name: 'Spain', link: 'amazon.es/shop/influencer-fb942837', flag: '🇪🇸' },
        { country: '🇩🇪 Allemagne', name: 'Germany', link: 'amazon.de/shop/influencer-fb942837', flag: '🇩🇪' },
        { country: '🇨🇦 Canada', name: 'Canada', link: 'amazon.ca/shop/influencer-fb942837', flag: '🇨🇦' },
        { country: '🇳🇱 Pays-Bas', name: 'Netherlands', link: 'amazon.nl/shop/influencer-fb942837', flag: '🇳🇱' },
        { country: '🇫🇷 France', name: 'France', link: 'amazon.fr/shop/influencer-fb942837', flag: '🇫🇷' }
      ]
    },
    
    // INFORMATIONS SUR LES 14 PAYS
    countries: {
      usa: { 
        name: { fr: 'États-Unis', en: 'United States', es: 'Estados Unidos', de: 'Vereinigte Staaten', it: 'Stati Uniti', pt: 'Estados Unidos' },
        pop: '331M', vat: 'Variable', currency: '$', amazon: 'Amazon.com', continent: 'Amérique'
      },
      france: { 
        name: { fr: 'France', en: 'France', es: 'Francia', de: 'Frankreich', it: 'Francia', pt: 'França' },
        pop: '67.7M', vat: '20%', currency: '€', amazon: 'Amazon.fr', continent: 'Europe'
      },
      uk: { 
        name: { fr: 'Royaume-Uni', en: 'United Kingdom', es: 'Reino Unido', de: 'Vereinigtes Königreich', it: 'Regno Unito', pt: 'Reino Unido' },
        pop: '67M', vat: '20%', currency: '£', amazon: 'Amazon.co.uk', continent: 'Europe'
      },
      germany: { 
        name: { fr: 'Allemagne', en: 'Germany', es: 'Alemania', de: 'Deutschland', it: 'Germania', pt: 'Alemanha' },
        pop: '83M', vat: '19%', currency: '€', amazon: 'Amazon.de', continent: 'Europe'
      },
      spain: { 
        name: { fr: 'Espagne', en: 'Spain', es: 'España', de: 'Spanien', it: 'Spagna', pt: 'Espanha' },
        pop: '47M', vat: '21%', currency: '€', amazon: 'Amazon.es', continent: 'Europe'
      },
      italy: { 
        name: { fr: 'Italie', en: 'Italy', es: 'Italia', de: 'Italien', it: 'Italia', pt: 'Itália' },
        pop: '60M', vat: '22%', currency: '€', amazon: 'Amazon.it', continent: 'Europe'
      },
      canada: { 
        name: { fr: 'Canada', en: 'Canada', es: 'Canadá', de: 'Kanada', it: 'Canada', pt: 'Canadá' },
        pop: '38M', vat: '5-15%', currency: '$', amazon: 'Amazon.ca', continent: 'Amérique'
      },
      brazil: { 
        name: { fr: 'Brésil', en: 'Brazil', es: 'Brasil', de: 'Brasilien', it: 'Brasile', pt: 'Brasil' },
        pop: '214M', vat: '17%', currency: 'R$', amazon: 'Amazon.com.br', continent: 'Amérique'
      },
      india: { 
        name: { fr: 'Inde', en: 'India', es: 'India', de: 'Indien', it: 'India', pt: 'Índia' },
        pop: '1.4B', vat: '18%', currency: '₹', amazon: 'Amazon.in', continent: 'Asie'
      },
      australia: { 
        name: { fr: 'Australie', en: 'Australia', es: 'Australia', de: 'Australien', it: 'Australia', pt: 'Austrália' },
        pop: '26M', vat: '10%', currency: '$', amazon: 'Amazon.com.au', continent: 'Océanie'
      },
      netherlands: { 
        name: { fr: 'Pays-Bas', en: 'Netherlands', es: 'Países Bajos', de: 'Niederlande', it: 'Paesi Bassi', pt: 'Holanda' },
        pop: '17M', vat: '21%', currency: '€', amazon: 'Amazon.nl', continent: 'Europe'
      },
      sweden: { 
        name: { fr: 'Suède', en: 'Sweden', es: 'Suecia', de: 'Schweden', it: 'Svezia', pt: 'Suécia' },
        pop: '10M', vat: '25%', currency: 'kr', amazon: 'Amazon.se', continent: 'Europe'
      },
      singapore: { 
        name: { fr: 'Singapour', en: 'Singapore', es: 'Singapur', de: 'Singapur', it: 'Singapore', pt: 'Singapura' },
        pop: '5.7M', vat: '8%', currency: '$', amazon: 'Amazon.sg', continent: 'Asie'
      },
      belgium: { 
        name: { fr: 'Belgique', en: 'Belgium', es: 'Bélgica', de: 'Belgien', it: 'Belgio', pt: 'Bélgica' },
        pop: '11.5M', vat: '21%', currency: '€', amazon: 'Amazon.com.be', continent: 'Europe'
      }
    },
    
    // SECTIONS DU SITE
    sections: {
      hubCentral: { icon: '🏢', pages: ['Dashboard', 'Application PWA', 'Bibliothèque', 'Affiliation'] },
      bibliotheque: { icon: '📚', content: ['Histoire Afrique', 'Histoire Caraïbes', 'DOM-TOM', 'Ressources Prof'] },
      analytics: { icon: '📊', features: ['Statistiques', 'Visiteurs', 'Performance'] },
      affiliation: { icon: '🤝', info: 'Programme Partenaires Amazon - 26 boutiques' },
      outils: { icon: '🧮', tools: ['Calculateur TVA', 'Simulateur Marges', 'Commissions Amazon'] },
      contact: { icon: '📧', type: 'Formulaire de contact' }
    }
  };

  // TRADUCTIONS COMPLÈTES POUR 6 LANGUES
  const translations = {
    fr: {
      greeting: "👋 Bonjour ! Bienvenue sur mon hub ! Je suis votre assistant vocal intelligent !\n\n🎤 Je vous écoute et je vous réponds à voix haute !\n\n🌍 Je parle 6 langues : Français, Anglais, Espagnol, Allemand, Italien et Portugais !\n\n🛒 Je connais toutes nos 26 boutiques Amazon dans 14 pays !\n\n💡 Posez-moi n'importe quelle question sur notre hub, nos boutiques, ou nos services !",
      help: "🤔 Je peux vous aider avec :\n\n🛒 **26 Boutiques Amazon** : 14 boutiques personnelles + 12 boutiques influenceur dans 14 pays\n\n🌍 **14 Pays** : USA, France, UK, Allemagne, Espagne, Italie, Canada, Brésil, Inde, Australie, Pays-Bas, Suède, Singapour, Belgique\n\n📚 **Sections** : Hub Central, Bibliothèque, Analytics, Affiliation, Outils, Contact\n\n💰 **Informations** : TVA, population, monnaie, marketplace Amazon par pays\n\n🗣️ **Langues** : Dites 'English', 'Español', 'Deutsch', 'Italiano' ou 'Português' pour changer",
      languageChanged: "✅ Langue changée ! Je parle maintenant français.",
      stores: "🛒 Nous avons 26 boutiques Amazon :\n\n14 boutiques personnelles et 12 boutiques influenceur réparties dans 14 pays ! Voulez-vous connaître les boutiques d'un pays spécifique ?",
      sections: "📚 Notre hub contient :\n\n🏢 Hub Central - Dashboard et accès rapide\n📚 Bibliothèque - Histoire, ressources\n📊 Analytics - Statistiques\n🤝 Affiliation - Programme partenaires\n🧮 Outils - Calculateurs\n📧 Contact - Nous joindre",
      thanks: "😊 De rien ! Toujours à votre service ! N'hésitez pas pour d'autres questions ! 🌟",
      goodbye: "👋 Au revoir ! À bientôt sur le hub ! Revenez quand vous voulez ! 💙",
      voiceOn: "🎤 Mode vocal activé !",
      voiceOff: "🔇 Mode vocal désactivé"
    },
    en: {
      greeting: "👋 Hello! Welcome to my hub! I'm your intelligent voice assistant!\n\n🎤 I listen to you and respond with my voice!\n\n🌍 I speak 6 languages: French, English, Spanish, German, Italian and Portuguese!\n\n🛒 I know all our 26 Amazon stores in 14 countries!\n\n💡 Ask me anything about our hub, stores, or services!",
      help: "🤔 I can help you with:\n\n🛒 **26 Amazon Stores**: 14 personal stores + 12 influencer stores in 14 countries\n\n🌍 **14 Countries**: USA, France, UK, Germany, Spain, Italy, Canada, Brazil, India, Australia, Netherlands, Sweden, Singapore, Belgium\n\n📚 **Sections**: Central Hub, Library, Analytics, Affiliation, Tools, Contact\n\n💰 **Information**: VAT, population, currency, Amazon marketplace by country\n\n🗣️ **Languages**: Say 'Français', 'Español', 'Deutsch', 'Italiano' or 'Português' to switch",
      languageChanged: "✅ Language changed! I now speak English.",
      stores: "🛒 We have 26 Amazon stores:\n\n14 personal stores and 12 influencer stores across 14 countries! Would you like to know the stores in a specific country?",
      sections: "📚 Our hub contains:\n\n🏢 Central Hub - Dashboard and quick access\n📚 Library - History, resources\n📊 Analytics - Statistics\n🤝 Affiliation - Partner program\n🧮 Tools - Calculators\n📧 Contact - Get in touch",
      thanks: "😊 You're welcome! Always at your service! Don't hesitate for other questions! 🌟",
      goodbye: "👋 Goodbye! See you soon on the hub! Come back anytime! 💙",
      voiceOn: "🎤 Voice mode activated!",
      voiceOff: "🔇 Voice mode deactivated"
    },
    es: {
      greeting: "👋 ¡Hola! ¡Bienvenido a mi hub! ¡Soy tu asistente vocal inteligente!\n\n🎤 ¡Te escucho y te respondo con mi voz!\n\n🌍 ¡Hablo 6 idiomas: Francés, Inglés, Español, Alemán, Italiano y Portugués!\n\n🛒 ¡Conozco todas nuestras 26 tiendas Amazon en 14 países!\n\n💡 ¡Pregúntame lo que quieras sobre nuestro hub, tiendas o servicios!",
      help: "🤔 Puedo ayudarte con:\n\n🛒 **26 Tiendas Amazon**: 14 tiendas personales + 12 tiendas influencer en 14 países\n\n🌍 **14 Países**: USA, Francia, UK, Alemania, España, Italia, Canadá, Brasil, India, Australia, Países Bajos, Suecia, Singapur, Bélgica\n\n📚 **Secciones**: Hub Central, Biblioteca, Analytics, Afiliación, Herramientas, Contacto\n\n💰 **Información**: IVA, población, moneda, marketplace Amazon por país\n\n🗣️ **Idiomas**: Di 'Français', 'English', 'Deutsch', 'Italiano' o 'Português' para cambiar",
      languageChanged: "✅ ¡Idioma cambiado! Ahora hablo español.",
      stores: "🛒 Tenemos 26 tiendas Amazon:\n\n¡14 tiendas personales y 12 tiendas influencer en 14 países! ¿Quieres saber las tiendas de un país específico?",
      sections: "📚 Nuestro hub contiene:\n\n🏢 Hub Central - Dashboard y acceso rápido\n📚 Biblioteca - Historia, recursos\n📊 Analytics - Estadísticas\n🤝 Afiliación - Programa de socios\n🧮 Herramientas - Calculadoras\n📧 Contacto - Comunícate",
      thanks: "😊 ¡De nada! ¡Siempre a tu servicio! ¡No dudes en hacer otras preguntas! 🌟",
      goodbye: "👋 ¡Adiós! ¡Hasta pronto en el hub! ¡Vuelve cuando quieras! 💙",
      voiceOn: "🎤 ¡Modo de voz activado!",
      voiceOff: "🔇 Modo de voz desactivado"
    },
    de: {
      greeting: "👋 Hallo! Willkommen auf meinem Hub! Ich bin Ihr intelligenter Sprachassistent!\n\n🎤 Ich höre Ihnen zu und antworte mit meiner Stimme!\n\n🌍 Ich spreche 6 Sprachen: Französisch, Englisch, Spanisch, Deutsch, Italienisch und Portugiesisch!\n\n🛒 Ich kenne alle unsere 26 Amazon-Shops in 14 Ländern!\n\n💡 Fragen Sie mich alles über unseren Hub, Shops oder Dienste!",
      help: "🤔 Ich kann Ihnen helfen mit:\n\n🛒 **26 Amazon-Shops**: 14 persönliche Shops + 12 Influencer-Shops in 14 Ländern\n\n🌍 **14 Länder**: USA, Frankreich, UK, Deutschland, Spanien, Italien, Kanada, Brasilien, Indien, Australien, Niederlande, Schweden, Singapur, Belgien\n\n📚 **Bereiche**: Zentraler Hub, Bibliothek, Analytics, Affiliate, Tools, Kontakt\n\n💰 **Informationen**: MwSt, Bevölkerung, Währung, Amazon-Marktplatz nach Land\n\n🗣️ **Sprachen**: Sagen Sie 'Français', 'English', 'Español', 'Italiano' oder 'Português' zum Wechseln",
      languageChanged: "✅ Sprache geändert! Ich spreche jetzt Deutsch.",
      stores: "🛒 Wir haben 26 Amazon-Shops:\n\n14 persönliche Shops und 12 Influencer-Shops in 14 Ländern! Möchten Sie die Shops eines bestimmten Landes kennen?",
      sections: "📚 Unser Hub enthält:\n\n🏢 Zentraler Hub - Dashboard und Schnellzugriff\n📚 Bibliothek - Geschichte, Ressourcen\n📊 Analytics - Statistiken\n🤝 Affiliate - Partnerprogramm\n🧮 Tools - Rechner\n📧 Kontakt - Kontaktieren Sie uns",
      thanks: "😊 Gern geschehen! Immer zu Ihren Diensten! Zögern Sie nicht, weitere Fragen zu stellen! 🌟",
      goodbye: "👋 Auf Wiedersehen! Bis bald auf dem Hub! Kommen Sie jederzeit zurück! 💙",
      voiceOn: "🎤 Sprachmodus aktiviert!",
      voiceOff: "🔇 Sprachmodus deaktiviert"
    },
    it: {
      greeting: "👋 Ciao! Benvenuto sul mio hub! Sono il tuo assistente vocale intelligente!\n\n🎤 Ti ascolto e ti rispondo con la mia voce!\n\n🌍 Parlo 6 lingue: Francese, Inglese, Spagnolo, Tedesco, Italiano e Portoghese!\n\n🛒 Conosco tutti i nostri 26 negozi Amazon in 14 paesi!\n\n💡 Chiedimi qualsiasi cosa sul nostro hub, negozi o servizi!",
      help: "🤔 Posso aiutarti con:\n\n🛒 **26 Negozi Amazon**: 14 negozi personali + 12 negozi influencer in 14 paesi\n\n🌍 **14 Paesi**: USA, Francia, UK, Germania, Spagna, Italia, Canada, Brasile, India, Australia, Paesi Bassi, Svezia, Singapore, Belgio\n\n📚 **Sezioni**: Hub Centrale, Biblioteca, Analytics, Affiliazione, Strumenti, Contatto\n\n💰 **Informazioni**: IVA, popolazione, valuta, marketplace Amazon per paese\n\n🗣️ **Lingue**: Dì 'Français', 'English', 'Español', 'Deutsch' o 'Português' per cambiare",
      languageChanged: "✅ Lingua cambiata! Ora parlo italiano.",
      stores: "🛒 Abbiamo 26 negozi Amazon:\n\n14 negozi personali e 12 negozi influencer in 14 paesi! Vuoi conoscere i negozi di un paese specifico?",
      sections: "📚 Il nostro hub contiene:\n\n🏢 Hub Centrale - Dashboard e accesso rapido\n📚 Biblioteca - Storia, risorse\n📊 Analytics - Statistiche\n🤝 Affiliazione - Programma partner\n🧮 Strumenti - Calcolatori\n📧 Contatto - Contattaci",
      thanks: "😊 Prego! Sempre al tuo servizio! Non esitare per altre domande! 🌟",
      goodbye: "👋 Arrivederci! A presto sull'hub! Torna quando vuoi! 💙",
      voiceOn: "🎤 Modalità vocale attivata!",
      voiceOff: "🔇 Modalità vocale disattivata"
    },
    pt: {
      greeting: "👋 Olá! Bem-vindo ao meu hub! Sou seu assistente de voz inteligente!\n\n🎤 Eu ouço você e respondo com minha voz!\n\n🌍 Falo 6 idiomas: Francês, Inglês, Espanhol, Alemão, Italiano e Português!\n\n🛒 Conheço todas as nossas 26 lojas Amazon em 14 países!\n\n💡 Pergunte-me qualquer coisa sobre nosso hub, lojas ou serviços!",
      help: "🤔 Posso ajudá-lo com:\n\n🛒 **26 Lojas Amazon**: 14 lojas pessoais + 12 lojas influencer em 14 países\n\n🌍 **14 Países**: USA, França, UK, Alemanha, Espanha, Itália, Canadá, Brasil, Índia, Austrália, Holanda, Suécia, Cingapura, Bélgica\n\n📚 **Seções**: Hub Central, Biblioteca, Analytics, Afiliação, Ferramentas, Contato\n\n💰 **Informações**: IVA, população, moeda, marketplace Amazon por país\n\n🗣️ **Idiomas**: Diga 'Français', 'English', 'Español', 'Deutsch' ou 'Italiano' para mudar",
      languageChanged: "✅ Idioma alterado! Agora falo português.",
      stores: "🛒 Temos 26 lojas Amazon:\n\n14 lojas pessoais e 12 lojas influencer em 14 países! Quer saber as lojas de um país específico?",
      sections: "📚 Nosso hub contém:\n\n🏢 Hub Central - Dashboard e acesso rápido\n📚 Biblioteca - História, recursos\n📊 Analytics - Estatísticas\n🤝 Afiliação - Programa de parceiros\n🧮 Ferramentas - Calculadoras\n📧 Contato - Entre em contato",
      thanks: "😊 De nada! Sempre ao seu serviço! Não hesite em fazer outras perguntas! 🌟",
      goodbye: "👋 Tchau! Até breve no hub! Volte quando quiser! 💙",
      voiceOn: "🎤 Modo de voz ativado!",
      voiceOff: "🔇 Modo de voz desativado"
    }
  };

  const t = translations[language];

  // INITIALISATION DE LA RECONNAISSANCE VOCALE ET SYNTHÈSE VOCALE
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Web Speech API pour la reconnaissance vocale
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        
        // Définir la langue selon la sélection
        const langCodes = {
          fr: 'fr-FR',
          en: 'en-US',
          es: 'es-ES',
          de: 'de-DE',
          it: 'it-IT',
          pt: 'pt-PT'
        };
        recognitionRef.current.lang = langCodes[language];

        recognitionRef.current.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setInput(transcript);
          setIsListening(false);
          // Auto-envoyer le message après reconnaissance
          setTimeout(() => handleSend(transcript), 500);
        };

        recognitionRef.current.onerror = () => {
          setIsListening(false);
        };

        recognitionRef.current.onend = () => {
          setIsListening(false);
        };
      }

      // Web Speech API pour la synthèse vocale
      if ('speechSynthesis' in window) {
        synthRef.current = window.speechSynthesis;
      }
    }
  }, [language]);

  // Message de bienvenue au démarrage
  useEffect(() => {
    setMessages([{ text: t.greeting, isBot: true }]);
  }, [language]);

  // Dire le message de bienvenue seulement à l'ouverture initiale
  useEffect(() => {
    if (isOpen && voiceEnabled && messages.length > 0) {
      setTimeout(() => speak(messages[0].text), 500);
    }
  }, [isOpen]);

  // Fonction pour parler (synthèse vocale)
  const speak = (text) => {
    if (!voiceEnabled || !synthRef.current) return;
    
    // Arrêter toute synthèse en cours
    synthRef.current.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    const langCodes = {
      fr: 'fr-FR',
      en: 'en-US',
      es: 'es-ES',
      de: 'de-DE',
      it: 'it-IT',
      pt: 'pt-PT'
    };
    utterance.lang = langCodes[language];
    utterance.rate = 0.9;
    utterance.pitch = 1;
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    synthRef.current.speak(utterance);
  };

  // Démarrer l'écoute vocale
  const startListening = () => {
    if (!recognitionRef.current) return;
    try {
      recognitionRef.current.start();
      setIsListening(true);
    } catch (error) {
      console.error('Erreur reconnaissance vocale:', error);
    }
  };

  // Arrêter l'écoute vocale
  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  // Détection de langue
  const detectLanguage = (input) => {
    const lower = input.toLowerCase();
    if (lower.includes('english') || lower === 'en') return 'en';
    if (lower.includes('español') || lower.includes('espagnol') || lower === 'es') return 'es';
    if (lower.includes('deutsch') || lower.includes('allemand') || lower === 'de') return 'de';
    if (lower.includes('italiano') || lower.includes('italien') || lower === 'it') return 'it';
    if (lower.includes('português') || lower.includes('portugais') || lower === 'pt') return 'pt';
    if (lower.includes('français') || lower.includes('francais') || lower === 'fr') return 'fr';
    return null;
  };

  // Obtenir info pays
  const getCountryInfo = (countryKey, lang) => {
    const normalizedKey = countryKey.toLowerCase();
    const country = completeDatabase.countries[normalizedKey];
    if (!country) return null;
    
    const name = country.name[lang] || country.name['en'];
    const vatLabel = lang === 'fr' ? 'TVA' : lang === 'en' ? 'VAT' : lang === 'es' ? 'IVA' : lang === 'it' ? 'IVA' : lang === 'pt' ? 'IVA' : 'MwSt';
    const currencyLabel = lang === 'fr' ? 'Monnaie' : lang === 'en' ? 'Currency' : lang === 'es' ? 'Moneda' : lang === 'it' ? 'Valuta' : lang === 'pt' ? 'Moeda' : 'Währung';
    
    return `🌍 **${name}**\n📊 Population: ${country.pop}\n💰 ${vatLabel}: ${country.vat}\n💵 ${currencyLabel}: ${country.currency}\n🛒 ${country.amazon}\n🌎 Continent: ${country.continent}`;
  };

  // Obtenir liste des boutiques par pays
  const getStoresByCountry = (countryName) => {
    const lowerCountry = countryName.toLowerCase();
    const personalStores = completeDatabase.amazonStores.personal.filter(store => 
      store.country.toLowerCase().includes(lowerCountry) || store.name.toLowerCase().includes(lowerCountry)
    );
    const influencerStores = completeDatabase.amazonStores.influencer.filter(store => 
      store.country.toLowerCase().includes(lowerCountry) || store.name.toLowerCase().includes(lowerCountry)
    );
    
    if (personalStores.length === 0 && influencerStores.length === 0) return null;
    
    let result = `🛒 Boutiques Amazon pour ${countryName} :\n\n`;
    if (personalStores.length > 0) {
      result += `✅ Boutique personnelle: ${personalStores[0].link}\n`;
    }
    if (influencerStores.length > 0) {
      result += `✅ Boutique influenceur: ${influencerStores[0].link}`;
    }
    return result;
  };

  // Logique de réponse du bot
  const getBotResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    
    // Détection changement de langue
    const newLang = detectLanguage(userInput);
    if (newLang && newLang !== language) {
      setLanguage(newLang);
      // Utiliser les traductions de la nouvelle langue
      const newTranslations = translations[newLang];
      return newTranslations.languageChanged;
    }
    
    // Salutations
    if (lowerInput.match(/\b(bonjour|salut|hello|hi|hola|hallo|ciao|olá|bienvenue|welcome|bienvenido|bem-vindo)\b/)) {
      return t.greeting;
    }
    
    // Aide
    if (lowerInput.match(/\b(aide|help|ayuda|hilfe|aiuto|ajuda)\b/)) {
      return t.help;
    }
    
    // Boutiques Amazon
    if (lowerInput.match(/\b(boutique|shop|tienda|negozio|loja|amazon|store)\b/)) {
      // Vérifier si demande pour un pays spécifique
      const allStores = [...completeDatabase.amazonStores.personal, ...completeDatabase.amazonStores.influencer];
      for (const store of allStores) {
        if (lowerInput.includes(store.name.toLowerCase()) || lowerInput.includes(store.country.toLowerCase())) {
          return getStoresByCountry(store.country);
        }
      }
      return t.stores;
    }
    
    // Sections du site
    if (lowerInput.match(/\b(section|page|hub|bibliothèque|library|analytics|affiliation|outils|tools|contact)\b/)) {
      return t.sections;
    }
    
    // Recherche de pays
    for (const [key, data] of Object.entries(completeDatabase.countries)) {
      const names = Object.values(data.name).map(n => n.toLowerCase());
      if (names.some(name => lowerInput.includes(name))) {
        return getCountryInfo(key, language);
      }
    }
    
    // Remerciements
    if (lowerInput.match(/\b(merci|thank|gracia|danke|grazie|obrigad)\b/)) {
      return t.thanks;
    }
    
    // Au revoir
    if (lowerInput.match(/\b(au revoir|bye|adios|auf wiedersehen|goodbye|ciao|tchau|à bientôt)\b/)) {
      return t.goodbye;
    }
    
    // Nombre de boutiques
    if (lowerInput.match(/\b(combien|how many|cuántos|wie viele|quanti|quantos)\b/)) {
      return `🛒 Nous avons exactement 26 boutiques Amazon :\n• 14 boutiques personnelles\n• 12 boutiques influenceur\n\nDans 14 pays différents ! 🌍`;
    }
    
    // Réponse par défaut
    return t.help;
  };

  // Envoyer un message
  const handleSend = (textToSend = null) => {
    const messageText = textToSend || input;
    if (!messageText.trim()) return;

    const userMessage = { text: messageText, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    
    setInput('');

    setTimeout(() => {
      const botResponse = getBotResponse(messageText);
      const botMessage = { text: botResponse, isBot: true };
      setMessages(prev => [...prev, botMessage]);
      
      // Faire parler le bot
      if (voiceEnabled) {
        speak(botResponse);
      }
    }, 500);
  };

  const langFlags = {
    fr: '🇫🇷',
    en: '🇬🇧',
    es: '🇪🇸',
    de: '🇩🇪',
    it: '🇮🇹',
    pt: '🇵🇹'
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
          width: '70px',
          height: '70px',
          fontSize: '32px',
          cursor: 'pointer',
          boxShadow: '0 8px 30px rgba(102, 126, 234, 0.5)',
          zIndex: 1000,
          transition: 'transform 0.3s, box-shadow 0.3s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.15)';
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(102, 126, 234, 0.7)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(102, 126, 234, 0.5)';
        }}
        title="Assistant Vocal"
      >
        🎤
      </button>

      {isOpen && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(700px, 95vw)',
          height: 'min(750px, 90vh)',
          background: 'white',
          borderRadius: '25px',
          boxShadow: '0 25px 70px rgba(0,0,0,0.4)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 9999,
          overflow: 'hidden'
        }}>
          {/* Overlay */}
          <div 
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.6)',
              zIndex: -1
            }}
          />
          
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '20px 25px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ flex: 1 }}>
              <h3 style={{margin: 0, fontSize: '1.4em', display: 'flex', alignItems: 'center', gap: '10px'}}>
                🎤 Assistant Vocal {langFlags[language]}
              </h3>
              <p style={{margin: '5px 0 0 0', fontSize: '0.9em', opacity: 0.95}}>
                {language === 'fr' && '🌍 6 langues • 26 boutiques • Mode vocal actif'}
                {language === 'en' && '🌍 6 languages • 26 stores • Voice mode active'}
                {language === 'es' && '🌍 6 idiomas • 26 tiendas • Modo de voz activo'}
                {language === 'de' && '🌍 6 Sprachen • 26 Shops • Sprachmodus aktiv'}
                {language === 'it' && '🌍 6 lingue • 26 negozi • Modalità vocale attiva'}
                {language === 'pt' && '🌍 6 idiomas • 26 lojas • Modo de voz ativo'}
              </p>
            </div>
            
            {/* Voice Toggle */}
            <button
              onClick={() => setVoiceEnabled(!voiceEnabled)}
              style={{
                background: voiceEnabled ? 'rgba(46, 213, 115, 0.3)' : 'rgba(255,255,255,0.2)',
                border: 'none',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer',
                borderRadius: '10px',
                padding: '8px 12px',
                marginRight: '10px',
                transition: 'background 0.3s'
              }}
              title={voiceEnabled ? 'Désactiver la voix' : 'Activer la voix'}
            >
              {voiceEnabled ? '🔊' : '🔇'}
            </button>
            
            {/* Language Selector */}
            <div style={{ display: 'flex', gap: '6px', marginRight: '15px', flexWrap: 'wrap' }}>
              {Object.keys(langFlags).map(lang => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  style={{
                    background: language === lang ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.15)',
                    border: 'none',
                    color: 'white',
                    fontSize: '18px',
                    cursor: 'pointer',
                    borderRadius: '6px',
                    padding: '6px 8px',
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
                background: 'rgba(255,255,255,0.25)',
                border: 'none',
                color: 'white',
                fontSize: '28px',
                cursor: 'pointer',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s'
              }}
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            padding: '25px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            background: 'linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)'
          }}>
            {messages.map((msg, index) => (
              <div key={index} style={{
                alignSelf: msg.isBot ? 'flex-start' : 'flex-end',
                background: msg.isBot ? 'white' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: msg.isBot ? '#333' : 'white',
                padding: '15px 20px',
                borderRadius: msg.isBot ? '20px 20px 20px 6px' : '20px 20px 6px 20px',
                maxWidth: '85%',
                boxShadow: msg.isBot ? '0 3px 12px rgba(0,0,0,0.12)' : '0 3px 12px rgba(102, 126, 234, 0.4)',
                fontSize: '1em',
                lineHeight: '1.5',
                whiteSpace: 'pre-line',
                border: msg.isBot ? '1px solid #e5e7eb' : 'none'
              }}>
                {msg.text}
              </div>
            ))}
            {isSpeaking && (
              <div style={{ textAlign: 'center', color: '#667eea', fontSize: '0.9em' }}>
                🔊 Lecture en cours...
              </div>
            )}
          </div>

          {/* Input Area */}
          <div style={{
            padding: '20px',
            borderTop: '2px solid #e5e7eb',
            background: 'white'
          }}>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={
                  language === 'fr' ? '💬 Tapez ou 🎤 parlez...' :
                  language === 'en' ? '💬 Type or 🎤 speak...' :
                  language === 'es' ? '💬 Escribe o 🎤 habla...' :
                  language === 'de' ? '💬 Tippen oder 🎤 sprechen...' :
                  language === 'it' ? '💬 Scrivi o 🎤 parla...' :
                  '💬 Digite ou 🎤 fale...'
                }
                style={{
                  flex: 1,
                  padding: '14px 18px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  outline: 'none',
                  fontSize: '1em',
                  transition: 'border-color 0.3s, box-shadow 0.3s'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#667eea';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
              
              {/* Bouton Micro */}
              <button
                onClick={isListening ? stopListening : startListening}
                style={{
                  background: isListening ? 
                    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' :
                    'linear-gradient(135deg, #46a0f8 0%, #667eea 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '14px 20px',
                  cursor: 'pointer',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: isListening ? '0 4px 15px rgba(245, 87, 108, 0.4)' : '0 4px 15px rgba(102, 126, 234, 0.3)',
                  animation: isListening ? 'pulse 1.5s infinite' : 'none'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                title={isListening ? 'Arrêter' : 'Parler'}
              >
                {isListening ? '🎙️' : '🎤'}
              </button>
              
              {/* Bouton Envoyer */}
              <button
                onClick={() => handleSend()}
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '14px 24px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '1em',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                }}
              >
                {language === 'fr' ? '📤 Envoyer' :
                 language === 'en' ? '📤 Send' :
                 language === 'es' ? '📤 Enviar' :
                 language === 'de' ? '📤 Senden' :
                 language === 'it' ? '📤 Invia' :
                 '📤 Enviar'}
              </button>
            </div>
            
            {isListening && (
              <div style={{ 
                textAlign: 'center', 
                color: '#f5576c', 
                fontSize: '0.9em',
                marginTop: '8px',
                fontWeight: '600'
              }}>
                🎙️ {language === 'fr' ? "Je vous écoute..." : 
                     language === 'en' ? "I'm listening..." :
                     language === 'es' ? "Te escucho..." :
                     language === 'de' ? "Ich höre zu..." :
                     language === 'it' ? "Ti ascolto..." :
                     "Estou ouvindo..."}
              </div>
            )}
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </>
  );
}
