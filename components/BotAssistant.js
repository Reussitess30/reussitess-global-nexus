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
    // NOUVEAU : BASE DE CONNAISSANCES RÉGIONALES
    'region-europe': {
      titre: 'Pays de la région Europe',
      contenu: 'La bibliothèque mondiale REUSSITESS® couvre la **France, l’Angleterre, l’Italie, l’Allemagne, l’Espagne, et la Suède**. Pour en savoir plus, tapez le nom d’un de ces pays.',
      motsCles: 'europe, e-u, ue, union européenne, est, ouest, pays européens'
    },
    'region-asie-pacifique': {
      titre: 'Pays de la région Asie-Pacifique',
      contenu: 'Nous avons des fiches complètes pour **Singapour, l’Australie, la Nouvelle-Zélande, et l’Inde**. Ces pays sont essentiels à notre stratégie logistique.',
      motsCles: 'asie, pacifique, asie-pacifique, sud-est, orient, pays asiatiques'
    },
    'region-amerique': {
      titre: 'Pays de la région Amériques',
      contenu: 'Nous couvrons les **États-Unis, le Canada et le Brésil**. Ces pays représentent des marchés majeurs pour nos boutiques Amazon.',
      motsCles: 'amérique, nord, sud, latine, pays américains, usa, canada'
    },
    
    // EUROPE (15 pays)
    'france': {
      pays: 'France',
      capitale: 'Paris',
      population: '68 millions',
      unesco: '49 sites UNESCO - Record Europe',
      patrimoine: 'Tour Eiffel, Versailles, Mont-Saint-Michel, Châteaux Loire, Lascaux',
      culture: 'Gastronomie UNESCO, Louvre, Impressionnisme, Mode mondiale',
      economie: '7e économie mondiale, TGV, Airbus, Nucléaire 70%, Tourisme N°1 mondial',
      url: '/bibliotheque/europe/france'
    },
    'italie': {
      pays: 'Italie',
      capitale: 'Rome',
      population: '59 millions',
      unesco: '58 sites UNESCO - RECORD MONDIAL',
      patrimoine: 'Colisée, Tour Pise, Pompéi, Florence Renaissance, Venise, Vatican',
      culture: 'Renaissance, Léonard Vinci, Michel-Ange, Pizza pasta mondiale',
      economie: '8e économie mondiale, Mode luxe, Ferrari',
      url: '/bibliotheque/europe/italie'
    },
    'allemagne': {
      pays: 'Allemagne',
      capitale: 'Berlin',
      population: '84 millions',
      unesco: '51 sites UNESCO',
      patrimoine: 'Neuschwanstein, Mur Berlin, Cologne, Bach Beethoven',
      culture: 'Philosophie, Musique classique, Oktoberfest',
      economie: '4e économie mondiale, Mercedes BMW VW Audi, Ingénierie Siemens Bosch',
      url: '/bibliotheque/europe/allemagne'
    },
    'royaume-uni': {
      pays: 'Royaume-Uni',
      capitale: 'Londres',
      population: '67 millions',
      unesco: '33 sites UNESCO',
      patrimoine: 'Tour Londres, Stonehenge, Big Ben, Shakespeare',
      culture: 'Beatles Rolling Stones, Anglais 1.5 milliard locuteurs',
      economie: '6e économie mondiale, Finance Londres, Premier League',
      url: '/bibliotheque/europe/royaume-uni'
    },
    'espagne': {
      pays: 'Espagne',
      capitale: 'Madrid',
      population: '47 millions',
      unesco: '50 sites UNESCO',
      patrimoine: 'Alhambra, Sagrada Familia Gaudí, Flamenco UNESCO',
      culture: 'Picasso Dalí Goya, Tapas paella mondiale',
      economie: '14e économie mondiale, Tourisme 80M, Zara Inditex',
      url: '/bibliotheque/europe/espagne'
    },
    'suede': {
      pays: 'Suède',
      capitale: 'Stockholm',
      population: '10.5 millions',
      unesco: '15 sites UNESCO',
      patrimoine: 'Stockholm Venise Nord, Palais Royal 1430 pièces, Laponie Sámi, Vasa 1628',
      culture: 'Prix Nobel, IKEA design mondial, ABBA Spotify',
      economie: 'Innovation, Qualité vie top, Volvo Ericsson',
      url: '/bibliotheque/europe/suede'
    },
    'belgique': {
      pays: 'Belgique',
      capitale: 'Bruxelles',
      population: '11.5 millions',
      unesco: '15 sites UNESCO',
      patrimoine: 'Grand-Place Bruxelles, Beffrois, Bruges médiévale',
      culture: 'Capitale UE, Chocolat gaufres bière, BD Tintin',
      url: '/bibliotheque/europe/belgique'
    },
    'suisse': {
      pays: 'Suisse',
      capitale: 'Berne',
      population: '8.7 millions',
      unesco: '13 sites UNESCO',
      patrimoine: 'Alpes, Genève ONU, Bâle musées',
      culture: 'Neutralité, Horlogerie luxe, 4 langues',
      url: '/bibliotheque/europe/suisse'
    },
    'luxembourg': {
      pays: 'Luxembourg',
      capitale: 'Luxembourg',
      population: '640,000',
      unesco: '1 site UNESCO',
      patrimoine: 'Vieille ville fortifications',
      culture: '3 langues, Finance européenne',
      url: '/bibliotheque/europe/luxembourg'
    },
    'monaco': {
      pays: 'Monaco',
      capitale: 'Monaco',
      population: '39,000',
      patrimoine: 'Casino Monte-Carlo, GP F1, Océanographique',
      culture: 'Principauté millionnaire, Luxe mondial',
      url: '/bibliotheque/europe/monaco'
    },

    // AMÉRIQUES (4 régions)
    'quebec': {
      pays: 'Québec',
      capitale: 'Québec City',
      population: '8.6 millions',
      unesco: '2 sites UNESCO',
      patrimoine: 'Vieux-Québec fortifié, Francophonie Amérique',
      culture: 'Je me souviens, Sirop érable, Céline Dion',
      url: '/bibliotheque/ameriques/quebec'
    },
    'haiti': {
      pays: 'Haïti',
      capitale: 'Port-au-Prince',
      population: '11.4 millions',
      unesco: '1 site UNESCO',
      patrimoine: 'Citadelle Laferrière, 1ère république noire',
      culture: 'Créole, Vodou, Art naïf coloré',
      url: '/bibliotheque/ameriques/haiti'
    },
    'louisiane': {
      pays: 'Louisiane',
      capitale: 'Baton Rouge',
      population: '4.6 millions',
      patrimoine: 'Nouvelle-Orléans jazz, Mardi Gras, Bayous',
      culture: 'Cajun créole, Jazz blues patrimoine',
      url: '/bibliotheque/ameriques/louisiane'
    },
    'bresil': {
      pays: 'Brésil',
      capitale: 'Brasília',
      population: '215 millions',
      unesco: '23 sites UNESCO',
      patrimoine: 'Christ Rédempteur Rio, Amazonie poumon planète, Chutes Iguaçu 275 cascades, Brasília Niemeyer',
      culture: 'Carnaval plus grande fête monde, Football 5 Coupes Monde, Samba Bossa Nova',
      economie: '9e économie mondiale, Agriculture géante 1er café sucre, Embraer 3e avions',
      url: '/bibliotheque/amerique-sud/bresil'
    },

    // DOM-TOM (10 territoires)
    'reunion': {
      pays: 'La Réunion',
      capitale: 'Saint-Denis',
      population: '860,000',
      unesco: '2 sites UNESCO',
      patrimoine: 'Piton Neiges 3,070m, Cirques Mafate Cilaos, Volcan Fournaise actif',
      culture: 'Maloya créole, Vanille bourbon, Métissage cultures',
      url: '/bibliotheque/dom-tom/reunion'
    },
    'guadeloupe': {
      pays: 'Guadeloupe',
      capitale: 'Basse-Terre',
      population: '390,000',
      unesco: '1 site UNESCO',
      patrimoine: 'Volcan Soufrière, Plages paradis, Chutes Carbet',
      culture: 'Gwoka tambour, Zouk créole, Punch planteur',
      url: '/bibliotheque/dom-tom/guadeloupe'
    },
    'martinique': {
      pays: 'Martinique',
      capitale: 'Fort-de-France',
      population: '370,000',
      patrimoine: 'Montagne Pelée 1902, Plages Caraïbes, Aimé Césaire',
      culture: 'Béguine créole, Rhum agricole, Madras traditionnel',
      url: '/bibliotheque/dom-tom/martinique'
    },
    'guyane': {
      pays: 'Guyane',
      capitale: 'Cayenne',
      population: '290,000',
      patrimoine: 'Forêt amazonienne 96%, Centre Spatial Kourou Ariane',
      culture: 'Carnaval mois, Bagne îles Salut, Biodiversité unique',
      url: '/bibliotheque/dom-tom/guyane'
    },
    'mayotte': {
      pays: 'Mayotte',
      capitale: 'Mamoudzou',
      population: '280,000',
      patrimoine: 'Lagon double barrière, Plongée tortues, Culture comorienne',
      culture: 'Islam mahorais, Maoré shimaoré, Ylang-ylang vanille',
      url: '/bibliotheque/dom-tom/mayotte'
    },
    'polynesie': {
      pays: 'Polynésie française',
      capitale: 'Papeete',
      population: '280,000',
      patrimoine: 'Tahiti Bora-Bora, Atolls 118 îles, Perles noires',
      culture: 'Ori tahiti danse, Tatouage polynésien, Monoï tiare',
      url: '/bibliotheque/dom-tom/polynesie'
    },
    'nouvelle-caledonie': {
      pays: 'Nouvelle-Calédonie',
      capitale: 'Nouméa',
      population: '270,000',
      unesco: '6 lagons UNESCO',
      patrimoine: 'Lagon plus grand monde, Récif corallien, Nickel 25% réserves',
      culture: 'Kanak mélanésien, Pilou danses, Case ronde',
      url: '/bibliotheque/dom-tom/nouvelle-caledonie'
    },
    'saint-pierre': {
      pays: 'Saint-Pierre-et-Miquelon',
      capitale: 'Saint-Pierre',
      population: '6,000',
      patrimoine: 'Dernière France Amérique Nord, Phare île aux Marins, Architecture colorée',
      culture: 'Pêche morue, Langues basque bretonne, Cuisine marine',
      url: '/bibliotheque/dom-tom/saint-pierre'
    },
    'wallis-futuna': {
      pays: 'Wallis-et-Futuna',
      capitale: 'Mata-Utu',
      population: '11,000',
      patrimoine: 'Royaume coutumier, Lagon Wallis, Sites archéo polynésiens',
      culture: 'Chefferies traditionnelles, Kava cérémonie, Tapa artisanat',
      url: '/bibliotheque/dom-tom/wallis-futuna'
    },
    'saint-martin': {
      pays: 'Saint-Martin',
      capitale: 'Marigot',
      population: '36,000',
      patrimoine: 'Île binationale France Pays-Bas, Plages célèbres, Fort Louis',
      culture: 'Créole antillais, Gastronomie fusion, Carnaval festif',
      url: '/bibliotheque/dom-tom/saint-martin'
    },

    // AFRIQUE (7 pays)
    'senegal': {
      pays: 'Sénégal',
      capitale: 'Dakar',
      population: '17 millions',
      unesco: '7 sites UNESCO',
      patrimoine: 'Île Gorée traite, Lac Rose, Saint-Louis',
      culture: 'Teranga hospitalité, Mbalax Youssou NDour, Thiéboudienne',
      url: '/bibliotheque/afrique/senegal'
    },
    'cote-ivoire': {
      pays: 'Côte d\'Ivoire',
      capitale: 'Yamoussoukro',
      population: '27 millions',
      unesco: '4 sites UNESCO',
      patrimoine: 'Basilique Yamoussoukro, Abidjan perle lagunes, Parc Taï',
      culture: 'Coupé-décalé zouglou, Cacao 1er mondial, Masques Dan',
      url: '/bibliotheque/afrique/cote-ivoire'
    },
    'cameroun': {
      pays: 'Cameroun',
      capitale: 'Yaoundé',
      population: '27 millions',
      unesco: '2 sites UNESCO',
      patrimoine: 'Mont Cameroun 4,040m, Réserve Dja, 250 ethnies',
      culture: 'Afrique miniature, Makossa bikutsi, Football Lions',
      url: '/bibliotheque/afrique/cameroun'
    },
    'madagascar': {
      pays: 'Madagascar',
      capitale: 'Antananarivo',
      population: '29 millions',
      unesco: '3 sites UNESCO',
      patrimoine: 'Lémuriens endémiques, Baobabs allée, Tsingy Bemaraha',
      culture: 'Malgache austronésien, Famadihana retournement morts, Vanille',
      url: '/bibliotheque/afrique/madagascar'
    },
    'mali': {
      pays: 'Mali',
      capitale: 'Bamako',
      population: '21 millions',
      unesco: '4 sites UNESCO',
      patrimoine: 'Tombouctou cité savante, Falaises Dogon, Djenné mosquée',
      culture: 'Mandingue empire, Kora Ali Farka, Bogolan textile',
      url: '/bibliotheque/afrique/mali'
    },
    'rdc': {
      pays: 'RD Congo',
      capitale: 'Kinshasa',
      population: '95 millions',
      unesco: '5 sites UNESCO',
      patrimoine: 'Fleuve Congo 2e débit, Virunga gorilles, Forêt Ituri',
      culture: 'Rumba congolaise UNESCO, 450 langues, Sapeurs élégance',
      url: '/bibliotheque/afrique/rdc'
    },
    'rwanda': {
      pays: 'Rwanda',
      capitale: 'Kigali',
      population: '13 millions',
      unesco: '1 site UNESCO',
      patrimoine: 'Gorilles montagne Virunga, Pays 1000 collines, Lac Kivu',
      culture: 'Kinyarwanda, Intore danse guerrier, Café thé qualité',
      url: '/bibliotheque/afrique/rwanda'
    },

    // MAGHREB (4 pays)
    'maroc': {
      pays: 'Maroc',
      capitale: 'Rabat',
      population: '37 millions',
      unesco: '9 sites UNESCO',
      patrimoine: 'Médinas Fès Marrakech, Sahara dunes Merzouga, Hassan II Casablanca',
      culture: 'Arabe berbère, Tagine couscous, Artisanat zellige',
      url: '/bibliotheque/maghreb/maroc'
    },
    'algerie': {
      pays: 'Algérie',
      capitale: 'Alger',
      population: '45 millions',
      unesco: '7 sites UNESCO',
      patrimoine: 'Casbah Alger, Tassili Ajjer art rupestre, Timgad romaine',
      culture: 'Raï Cheb Khaled, Couscous UNESCO, Berbère kabyle',
      url: '/bibliotheque/maghreb/algerie'
    },
    'tunisie': {
      pays: 'Tunisie',
      capitale: 'Tunis',
      population: '12 millions',
      unesco: '8 sites UNESCO',
      patrimoine: 'Carthage punique, Médina Tunis, Amphithéâtre El Jem',
      culture: 'Printemps arabe 2011, Couscous brik, Mosaïques Bardo',
      url: '/bibliotheque/maghreb/tunisie'
    },
    'liban': {
      pays: 'Liban',
      capitale: 'Beyrouth',
      population: '6.8 millions',
      unesco: '5 sites UNESCO',
      patrimoine: 'Baalbek temples romains, Byblos plus vieille ville, Cèdres millénaires',
      culture: 'Paris Orient, Mezze tabbouleh, Phéniciens alphabet',
      url: '/bibliotheque/maghreb/liban'
    },

    // ASIE-PACIFIQUE (11 pays)
    'vietnam': {
      pays: 'Vietnam',
      capitale: 'Hanoï',
      population: '98 millions',
      unesco: '8 sites UNESCO',
      patrimoine: 'Baie Halong 2000 îles, Hôi An lanternes, Hué cité impériale',
      culture: 'Pho soupe, Áo dài traditionnel, Cinéma mondial',
      url: '/bibliotheque/asie-pacifique/vietnam'
    },
    'cambodge': {
      pays: 'Cambodge',
      capitale: 'Phnom Penh',
      population: '17 millions',
      unesco: '4 sites UNESCO',
      patrimoine: 'Angkor Wat 12e siècle, Temples khmers 1000+, Tonlé Sap',
      culture: 'Apsara danse, Amok curry, Khmère temples',
      url: '/bibliotheque/asie-pacifique/cambodge'
    },
    'laos': {
      pays: 'Laos',
      capitale: 'Vientiane',
      population: '7.4 millions',
      unesco: '3 sites UNESCO',
      patrimoine: 'Luang Prabang monastères, Mékong cascade Kuang Si, That Luang',
      culture: 'Bouddhisme theravada, Laap salade, Tissage soie',
      url: '/bibliotheque/asie-pacifique/laos'
    },
    'inde': {
      pays: 'Inde',
      capitale: 'New Delhi',
      population: '1.4 milliard',
      unesco: '40 sites UNESCO',
      patrimoine: 'Taj Mahal merveille, Varanasi sacré, Temples Khajuraho',
      culture: 'Bollywood cinéma, Yoga ayurveda, Cricket religion',
      url: '/bibliotheque/asie-pacifique/inde'
    },
    'singapour': {
      pays: 'Singapour',
      capitale: 'Singapour',
      population: '5.9 millions',
      patrimoine: 'Gardens by Bay Supertrees, Marina Bay Sands piscine toit, Changi meilleur aéroport',
      culture: '3e hub financier mondial, Port 1er mondial, Éducation 1er PISA',
      economie: 'Hub Asie, Tech innovation, Cleanest city',
      url: '/bibliotheque/asie-pacifique/singapour-complet'
    },
    'australie': {
      pays: 'Australie',
      capitale: 'Canberra',
      population: '26 millions',
      unesco: '20 sites UNESCO',
      patrimoine: 'Grande Barrière Corail 2300km, Uluru rocher sacré 348m, Opéra Sydney voiles',
      culture: 'Kangourous koalas 80% endémiques, Surf plages, Aborigènes 65,000 ans',
      economie: '13e économie mondiale, Mines fer charbon 1er exportateur, Universités Top 100',
      url: '/bibliotheque/oceanie/australie-complet'
    },
    'nouvelle-zelande': {
      pays: 'Nouvelle-Zélande',
      capitale: 'Wellington',
      population: '5.1 millions',
      unesco: '3 sites UNESCO',
      patrimoine: 'Milford Sound fjords, Tongariro volcans Seigneur Anneaux, Kiwi oiseau emblème',
      culture: 'Maori haka traditionnel, 1er vote femmes 1893, All Blacks rugby légende',
      economie: 'Agriculture kiwi agneau, Weta effets spéciaux, Tourisme nature',
      url: '/bibliotheque/oceanie/nouvelle-zelande-complet'
    },
    'vanuatu': {
      pays: 'Vanuatu',
      capitale: 'Port-Vila',
      population: '310,000',
      patrimoine: '83 îles volcaniques, Plongée SS President Coolidge, Volcan Yasur accessible',
      culture: '113 langues record densité, Bislama pidgin, Coutumes kastom',
      url: '/bibliotheque/asie-pacifique/vanuatu'
    },

    // OCÉANIE (3 îles)
    'fidji': {
      pays: 'Fidji',
      capitale: 'Suva',
      population: '900,000',
      patrimoine: '333 îles paradis Pacifique Sud, Grande barrière corail 4e monde, Plongée eaux turquoise',
      culture: 'Rugby Fiji Sevens champions, Mélanésienne cérémonies kava, Danses meke artisanat tapa',
      url: '/bibliotheque/oceanie/fidji'
    },
    'papouasie': {
      pays: 'Papouasie-Nouvelle-Guinée',
      capitale: 'Port Moresby',
      population: '9 millions',
      patrimoine: '840 langues RECORD MONDIAL diversité, 3e forêt tropicale après Amazonie Congo, Montagnes 4500m Puncak Jaya',
      culture: 'Tribus isolées traditions millénaires, Tok Pisin langue nationale, Glaciers tropicaux uniques',
      url: '/bibliotheque/oceanie/papouasie'
    },
    'samoa': {
      pays: 'Samoa',
      capitale: 'Apia',
      population: '200,000',
      patrimoine: 'Cascades Papaseea plages paradisiaques, Lagons cœur Polynésie',
      culture: 'Fa\'a Samoa mode vie ancestral, Tatouage pe\'a tatau sacré, Rugby Manu Samoa légende',
      url: '/bibliotheque/oceanie/samoa'
    },

    // BOUTIQUES AMAZON (26 pays)
    'amazon': {
      info: 'REUSSITESS® Global Nexus - 26 boutiques Amazon affiliées dans 14 pays sur 5 continents',
      pays: {
        'usa': 'États-Unis - amazon.com',
        'canada': 'Canada - amazon.ca',
        'france-shop': 'France - amazon.fr',
        'allemagne-shop': 'Allemagne - amazon.de',
        'uk-shop': 'Royaume-Uni - amazon.co.uk',
        'italie-shop': 'Italie - amazon.it',
        'espagne-shop': 'Espagne - amazon.es',
        'pays-bas': 'Pays-Bas - amazon.nl',
        'belgique-shop': 'Belgique - amazon.com.be',
        'suede-shop': 'Suède - amazon.se',
        'australie-shop': 'Australie - amazon.com.au',
        'singapour-shop': 'Singapour - amazon.sg',
        'inde-shop': 'Inde - amazon.in',
        'bresil-shop': 'Brésil - amazon.com.br'
      },
      url: '/hub-central'
    }
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









// [DEBUG] Dernière tentative de modification par commande
// [DEBLOCAGE] Forcer le commit pour deploiement influenceur
// [DEBUG_FORCE] Finalisation de la base de données thématique
// [DEBUG_FORCE] Finalisation de l'injection interactive et de contenu
// [DEBUG_FORCE] Tentative d'injection de la logique de lecture générique





