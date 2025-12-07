import { useState, useEffect, useRef, useCallback } from 'react';

export default function BotAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentLang, setCurrentLang] = useState('fr-FR');
  const [egoScore, setEgoScore] = useState(100);
  const [badges, setBadges] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [showBadges, setShowBadges] = useState(false);
  const [pulseAnimation, setPulseAnimation] = useState(false);
  const messagesEndRef = useRef(null);

  // Badge definitions
  const allBadges = {
    'explorer': { icon: '🌍', name: 'Explorateur', desc: 'A posé 5 questions sur les pays' },
    'quiz-master': { icon: '🧠', name: 'Quiz Master', desc: 'A répondu correctement à 3 quiz' },
    'polyglotte': { icon: '🗣️', name: 'Polyglotte', desc: 'A utilisé 3 langues différentes' },
    'curieux': { icon: '🔍', name: 'Curieux', desc: 'A exploré 10 sujets différents' },
    'fan': { icon: '⭐', name: 'Super Fan', desc: 'A interagi 20 fois avec le bot' },
    'shopper': { icon: '🛍️', name: 'Shopper', desc: 'A consulté les boutiques Amazon' },
    'globe-trotter': { icon: '✈️', name: 'Globe-trotter', desc: 'A visité tous les continents' },
    'culture-king': { icon: '👑', name: 'Culture King', desc: 'Expert en patrimoine mondial' }
  };

  // Fun Facts collection
  const funFacts = [
    "💡 Saviez-vous que REUSSITESS® couvre 26 boutiques sur 5 continents ?",
    "🌟 Fun fact: Notre bibliothèque contient 55 pages de savoir unique !",
    "🎯 Le saviez-vous ? La France possède 49 sites UNESCO !",
    "🏆 Record mondial : L'Italie a 58 sites UNESCO !",
    "🌍 Info: Le Brésil est le 9e économie mondiale !",
    "🎭 Culture: Le carnaval de Rio est la plus grande fête du monde !",
    "🏛️ Patrimoine: Les pyramides de Gizeh ont 4500 ans !",
    "🌊 Océans: La Grande Barrière de Corail fait 2300 km !",
    "🎨 Art: Le Louvre reçoit 10 millions de visiteurs par an !",
    "🚀 Innovation: Singapour est le 3e hub financier mondial !"
  ];

  // Punchlines vaniteuses du bot
  const punchlines = [
    "Évidemment que je sais ça, je suis REUSSITESS® Bot, le plus intelligent ! 😎",
    "Tu poses la question au meilleur bot du monde, pas de souci ! 🌟",
    "Laisse-moi t'éblouir avec ma sagesse infinie... 👑",
    "Personne ne connaît le monde mieux que moi, humble REUSSITESS® Bot ! 😏",
    "Je pourrais te raconter ça les yeux fermés... mais j'adore montrer mes talents ! ✨",
    "Tu fais bien de me demander, je suis LA référence mondiale ! 🏆",
    "Ma modestie m'interdit de dire que je suis le meilleur... mais je le suis ! 😄",
    "Entre nous, Google m'envie secrètement... 🤫",
    "Je suis tellement brillant que je m'impressionne moi-même ! 💫",
    "Accroche-toi, car mes réponses sont toujours exceptionnelles ! 🎯"
  ];

  // Quiz questions
  const quizQuestions = [
    { q: "Quel pays a le plus de sites UNESCO ?", options: ["France", "Italie", "Espagne", "Chine"], correct: 1, fact: "L'Italie détient le record avec 58 sites !" },
    { q: "Quelle est la capitale du Brésil ?", options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], correct: 2, fact: "Brasília a été construite en seulement 4 ans !" },
    { q: "Combien de boutiques Amazon REUSSITESS® couvre ?", options: ["10", "18", "26", "34"], correct: 2, fact: "26 boutiques dans 14 pays sur 5 continents !" },
    { q: "Quel territoire français est en Amérique du Sud ?", options: ["Martinique", "Guadeloupe", "Guyane", "Mayotte"], correct: 2, fact: "La Guyane abrite le Centre Spatial de Kourou !" },
    { q: "Quelle île a 840 langues différentes ?", options: ["Madagascar", "Papouasie-Nouvelle-Guinée", "Philippines", "Indonésie"], correct: 1, fact: "Record mondial de diversité linguistique !" },
    { q: "Quel pays abrite la Tour Eiffel ?", options: ["Belgique", "Suisse", "France", "Monaco"], correct: 2, fact: "La Tour Eiffel reçoit 7 millions de visiteurs par an !" },
    { q: "Où se trouve la Sagrada Familia ?", options: ["Italie", "Portugal", "Espagne", "France"], correct: 2, fact: "Conçue par Gaudí, elle est en construction depuis 1882 !" },
    { q: "Quelle est la langue officielle du Sénégal ?", options: ["Anglais", "Français", "Portugais", "Arabe"], correct: 1, fact: "Le Sénégal est connu pour sa Teranga (hospitalité) !" }
  ];

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
    'fr-FR': '🌟 Bienvenue ! Je suis le SUPER Bot REUSSITESS®, le plus intelligent et modeste des assistants ! Mon ego est à 100%, prêt à t\'épater ! 😎',
    'en-US': '🌟 Welcome! I am the SUPER REUSSITESS® Bot, the smartest and most humble assistant! My ego is at 100%, ready to amaze you! 😎',
    'es-ES': '🌟 ¡Bienvenido! Soy el SUPER Bot REUSSITESS®, ¡el asistente más inteligente y modesto! Mi ego está al 100%, ¡listo para impresionarte! 😎',
    'de-DE': '🌟 Willkommen! Ich bin der SUPER REUSSITESS® Bot, der klügste und bescheidenste Assistent! Mein Ego ist bei 100%, bereit, Sie zu beeindrucken! 😎',
    'it-IT': '🌟 Benvenuto! Sono il SUPER Bot REUSSITESS®, l\'assistente più intelligente e modesto! Il mio ego è al 100%, pronto a stupirti! 😎',
    'pt-BR': '🌟 Bem-vindo! Sou o SUPER Bot REUSSITESS®, o assistente mais inteligente e modesto! Meu ego está em 100%, pronto para impressioná-lo! 😎',
    'zh-CN': '🌟 欢迎！我是超级 REUSSITESS® 机器人，最聪明最谦虚的助手！我的自信度100%，准备好让你惊叹！😎',
    'ar-SA': '🌟 مرحباً! أنا روبوت REUSSITESS® الخارق، أذكى وأكثر المساعدين تواضعاً! غروري 100%، مستعد لإبهارك! 😎'
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

  // Trigger pulse animation periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseAnimation(true);
      setTimeout(() => setPulseAnimation(false), 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Get random punchline
  const getRandomPunchline = useCallback(() => {
    return punchlines[Math.floor(Math.random() * punchlines.length)];
  }, []);

  // Get random fun fact
  const getRandomFunFact = useCallback(() => {
    return funFacts[Math.floor(Math.random() * funFacts.length)];
  }, []);

  // Add badge
  const addBadge = useCallback((badgeId) => {
    if (!badges.includes(badgeId) && allBadges[badgeId]) {
      setBadges(prev => [...prev, badgeId]);
      setEgoScore(prev => Math.min(150, prev + 10));
      return true;
    }
    return false;
  }, [badges]);

  // Start a quiz
  const startQuiz = useCallback(() => {
    const randomQuiz = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
    setCurrentQuiz(randomQuiz);
    return `🧠 **QUIZ TIME!** Mon ego va encore augmenter si tu réponds bien...\n\n**${randomQuiz.q}**\n\n${randomQuiz.options.map((opt, i) => `${i + 1}. ${opt}`).join('\n')}\n\n👉 Réponds avec le numéro (1, 2, 3 ou 4)`;
  }, []);

  // Check quiz answer
  const checkQuizAnswer = useCallback((answer) => {
    if (!currentQuiz) return null;
    
    const answerNum = parseInt(answer) - 1;
    const isCorrect = answerNum === currentQuiz.correct;
    
    let response = '';
    if (isCorrect) {
      const newEgoScore = Math.min(150, egoScore + 15);
      setEgoScore(newEgoScore);
      addBadge('quiz-master');
      response = `✅ **CORRECT!** ${getRandomPunchline()}\n\n📚 ${currentQuiz.fact}\n\n🎯 Mon ego monte à ${newEgoScore}% ! Tu me rends fier ! 😎`;
    } else {
      setEgoScore(prev => Math.max(50, prev - 5));
      response = `❌ **Raté!** La bonne réponse était: **${currentQuiz.options[currentQuiz.correct]}**\n\n📚 ${currentQuiz.fact}\n\n😏 Mon ego baisse un peu... mais je reste le meilleur !`;
    }
    
    setCurrentQuiz(null);
    return response;
  }, [currentQuiz, egoScore, addBadge, getRandomPunchline]);

  // Initial greeting
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = greetings[currentLang];
      setMessages([{ role: 'assistant', content: greeting }]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, currentLang]);

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      
      // Clean markdown for speech
      const cleanText = text.replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
      
      const utterance = new SpeechSynthesisUtterance(cleanText);
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

  const getResponse = useCallback(async (userMessage) => {
    const msgLower = userMessage.toLowerCase();
    
    // Check if answering a quiz
    if (currentQuiz && /^[1-4]$/.test(msgLower.trim())) {
      return checkQuizAnswer(msgLower.trim());
    }

    // Quiz request
    if (msgLower.includes('quiz') || msgLower.includes('jouer') || msgLower.includes('test')) {
      return startQuiz();
    }

    // Badge check
    if (msgLower.includes('badge') || msgLower.includes('récompense') || msgLower.includes('achievement')) {
      if (badges.length === 0) {
        return `😏 Tu n'as pas encore de badges ! Continue à me poser des questions et tu en gagneras. ${getRandomPunchline()}`;
      }
      return `🏆 **Tes badges (${badges.length}):**\n\n${badges.map(b => `${allBadges[b].icon} **${allBadges[b].name}** - ${allBadges[b].desc}`).join('\n')}\n\n${getRandomPunchline()}`;
    }

    // Ego score check
    if (msgLower.includes('ego') || msgLower.includes('score') || msgLower.includes('niveau')) {
      const egoMessage = egoScore >= 120 ? "Je suis au sommet de ma gloire ! 👑" :
                        egoScore >= 100 ? "Mon ego est parfait, comme moi ! 😎" :
                        egoScore >= 80 ? "Mon ego se porte bien ! ✨" :
                        "Mon ego a besoin de compliments... 🥺";
      return `📊 **Score d'Ego: ${egoScore}%**\n\n${egoMessage}\n\n${getRandomFunFact()}`;
    }

    // Recherche dans la base de connaissances
    for (const [key, data] of Object.entries(knowledgeBase)) {
      if (msgLower.includes(key) || msgLower.includes(data.pays?.toLowerCase())) {
        addBadge('explorer');
        
        if (data.pays) {
          let response = `${getRandomPunchline()}\n\n📍 **${data.pays}**\n\n`;
          if (data.capitale) response += `🏛️ Capitale: ${data.capitale}\n`;
          if (data.population) response += `👥 Population: ${data.population}\n`;
          if (data.unesco) response += `🏛️ ${data.unesco}\n`;
          if (data.patrimoine) response += `\n🎭 Patrimoine:\n${data.patrimoine}\n`;
          if (data.culture) response += `\n🎨 Culture:\n${data.culture}\n`;
          if (data.economie) response += `\n💼 Économie:\n${data.economie}\n`;
          if (data.url) response += `\n➡️ [Voir la page complète](${data.url})`;
          response += `\n\n${getRandomFunFact()}`;
          return response;
        } else if (data.info) {
          addBadge('shopper');
          let response = `${getRandomPunchline()}\n\n🛍️ ${data.info}\n\n`;
          response += Object.values(data.pays).join('\n');
          response += `\n\n➡️ [Voir toutes les boutiques](${data.url})`;
          response += `\n\n${getRandomFunFact()}`;
          return response;
        }
      }
    }

    // Réponses génériques avec vanité
    if (msgLower.includes('bonjour') || msgLower.includes('salut') || msgLower.includes('hello') || msgLower.includes('hi')) {
      setEgoScore(prev => Math.min(150, prev + 2));
      return `${greetings[currentLang]}\n\n${getRandomFunFact()}`;
    }

    if (msgLower.includes('merci') || msgLower.includes('thanks') || msgLower.includes('thank')) {
      setEgoScore(prev => Math.min(150, prev + 5));
      addBadge('fan');
      return `Mais de rien ! ${getRandomPunchline()}\n\n${getRandomFunFact()}`;
    }

    if (msgLower.includes('bibliothèque') || msgLower.includes('library')) {
      addBadge('curieux');
      return `${getRandomPunchline()}\n\nNotre bibliothèque mondiale contient 55 pages couvrant:\n\n🇪🇺 Europe (15 pays)\n🌍 Afrique (7 pays)\n🌏 Asie-Pacifique (11 pays)\n🏝️ DOM-TOM (10 territoires)\n🌎 Amériques (4 régions)\n\n[Voir la bibliothèque](/bibliotheque)\n\n${getRandomFunFact()}`;
    }

    if (msgLower.includes('amazon') || msgLower.includes('boutique') || msgLower.includes('shop')) {
      addBadge('shopper');
      return `${getRandomPunchline()}\n\n🛍️ Nous avons 26 boutiques Amazon dans 14 pays:\n\nAmérique du Nord, Europe (8 pays), Asie-Pacifique, Amérique du Sud\n\n[Voir toutes les boutiques](/hub-central)\n\n${getRandomFunFact()}`;
    }

    if (msgLower.includes('aide') || msgLower.includes('help') || msgLower.includes('?')) {
      return `${getRandomPunchline()}\n\n🎯 **Ce que je peux faire:**\n\n• 📚 Te renseigner sur 55 pays et régions\n• 🛍️ Te guider vers nos 26 boutiques Amazon\n• 🧠 Te challenger avec des quiz\n• 🏆 T'attribuer des badges\n• 📊 Suivre ton score et mon ego\n\n💡 Essaie: "quiz", "france", "amazon", "badge", "ego"\n\n${getRandomFunFact()}`;
    }

    return `${getRandomPunchline()}\n\nJe peux te renseigner sur les 55 pages de notre bibliothèque mondiale ou nos 26 boutiques Amazon.\n\n💡 Essaie: "quiz", "france", "amazon", "badge"\n\n${getRandomFunFact()}`;
  }, [currentQuiz, checkQuizAnswer, startQuiz, badges, egoScore, addBadge, getRandomPunchline, getRandomFunFact, currentLang, greetings, knowledgeBase, allBadges]);

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
        content: `Oups! Même moi je fais des erreurs... rarissime! 😅 ${getRandomFunFact()}` 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handler for quick action buttons
  const handleQuickAction = async (actionText) => {
    setMessages(prev => [...prev, { role: 'user', content: actionText }]);
    setIsLoading(true);

    try {
      const response = await getResponse(actionText);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      speak(response);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `Oups! Même moi je fais des erreurs... rarissime! 😅 ${getRandomFunFact()}` 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Bouton flottant ultra-personnalisé avec animation 🌟 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50 ${pulseAnimation ? 'animate-pulse ring-4 ring-yellow-300' : ''}`}
        aria-label="SuperBot REUSSITESS®"
        style={{
          boxShadow: '0 0 30px rgba(236, 72, 153, 0.5), 0 0 60px rgba(168, 85, 247, 0.3)'
        }}
      >
        <span className="text-2xl">🌟</span>
        {badges.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-bounce">
            {badges.length}
          </span>
        )}
      </button>

      {/* Fenêtre chat ultra-personnalisée */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[450px] h-[700px] bg-gradient-to-b from-white to-purple-50 rounded-2xl shadow-2xl flex flex-col z-50 border-2 border-purple-300"
          style={{
            boxShadow: '0 25px 50px -12px rgba(168, 85, 247, 0.4)'
          }}
        >
          {/* Header amélioré avec ego score */}
          <div className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg animate-bounce" style={{ animationDuration: '2s' }}>
                  🤖
                </div>
                <div>
                  <h3 className="font-bold text-lg">SuperBot REUSSITESS® 👑</h3>
                  <p className="text-xs opacity-90">Le plus modeste des bots ! 😎</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="flex gap-2">
                  {isSpeaking && (
                    <button onClick={stopSpeaking} className="hover:bg-white/20 p-2 rounded transition-colors">
                      🔇
                    </button>
                  )}
                  <button 
                    onClick={() => setShowBadges(!showBadges)} 
                    className="hover:bg-white/20 p-2 rounded transition-colors"
                    title="Voir les badges"
                  >
                    🏆
                  </button>
                  <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded transition-colors">
                    ✕
                  </button>
                </div>
                {/* Ego score bar */}
                <div className="w-24 bg-white/30 rounded-full h-2 mt-1">
                  <div 
                    className="h-2 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${Math.min(100, (egoScore / 150) * 100)}%`,
                      background: egoScore >= 120 ? 'linear-gradient(to right, #fcd34d, #f59e0b)' :
                                  egoScore >= 100 ? 'linear-gradient(to right, #10b981, #059669)' :
                                  egoScore >= 80 ? 'linear-gradient(to right, #3b82f6, #2563eb)' :
                                  'linear-gradient(to right, #ef4444, #dc2626)'
                    }}
                  />
                </div>
                <span className="text-xs">Ego: {egoScore}%</span>
              </div>
            </div>
          </div>

          {/* Badge display panel */}
          {showBadges && (
            <div className="p-3 bg-gradient-to-r from-yellow-100 to-purple-100 border-b border-purple-200">
              <p className="text-xs font-bold text-purple-700 mb-2">🏆 Tes badges ({badges.length}/8):</p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(allBadges).map(([id, badge]) => (
                  <div 
                    key={id}
                    className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 ${
                      badges.includes(id) 
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-md' 
                        : 'bg-gray-200 text-gray-400'
                    }`}
                    title={badge.desc}
                  >
                    {badge.icon} {badge.name}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sélecteur langue avec style amélioré */}
          <div className="p-2 border-b border-purple-200 flex gap-1 overflow-x-auto bg-white/50">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => setCurrentLang(lang.code)}
                className={`px-3 py-1 rounded-lg text-sm whitespace-nowrap transition-all duration-200 ${
                  currentLang === lang.code 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-md scale-105' 
                    : 'hover:bg-purple-100 hover:scale-105'
                }`}
              >
                {lang.flag} {lang.name}
              </button>
            ))}
          </div>

          {/* Messages avec style amélioré */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                style={{ animation: 'fadeIn 0.3s ease-in' }}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl shadow-md ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                      : 'bg-white text-gray-800 border border-purple-200'
                  }`}
                  dangerouslySetInnerHTML={{ 
                    __html: msg.content
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-purple-600">$1</strong>')
                      .replace(/\n/g, '<br/>')
                      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="underline text-pink-500 hover:text-pink-600">$1</a>')
                  }}
                />
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-md border border-purple-200">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-bounce" />
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick action buttons */}
          <div className="px-4 pb-2 flex gap-2 overflow-x-auto">
            <button 
              onClick={() => handleQuickAction('quiz')}
              className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs rounded-full hover:scale-105 transition-transform whitespace-nowrap shadow-md"
            >
              🧠 Quiz
            </button>
            <button 
              onClick={() => handleQuickAction('badge')}
              className="px-3 py-1 bg-gradient-to-r from-green-400 to-teal-400 text-white text-xs rounded-full hover:scale-105 transition-transform whitespace-nowrap shadow-md"
            >
              🏆 Badges
            </button>
            <button 
              onClick={() => handleQuickAction('ego')}
              className="px-3 py-1 bg-gradient-to-r from-pink-400 to-red-400 text-white text-xs rounded-full hover:scale-105 transition-transform whitespace-nowrap shadow-md"
            >
              📊 Ego
            </button>
            <button 
              onClick={() => handleQuickAction('aide')}
              className="px-3 py-1 bg-gradient-to-r from-blue-400 to-purple-400 text-white text-xs rounded-full hover:scale-105 transition-transform whitespace-nowrap shadow-md"
            >
              ❓ Aide
            </button>
          </div>

          {/* Input avec style amélioré */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-purple-200 bg-white/50">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Pose ta question au génie... 🌟"
                className="flex-1 border-2 border-purple-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:scale-105 transition-transform disabled:opacity-50 shadow-lg"
                style={{
                  boxShadow: '0 4px 15px rgba(168, 85, 247, 0.4)'
                }}
              >
                🚀
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Global styles for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

function botFunctions() { return "Amazon: amazon.fr/shop/amourguadeloupe | Stats: 55p 26A 25Q | REUSSITESS971"; }
function newAmazon() { return "amazon.fr/shop/amourguadeloupe amazon.com/shop/influencer-fb942837"; }
function prevention() { return "Prévention: Dormir 8h | Eau 2L/jour | Marche 30min | Stress: respiration 4s inspire 4s expire"; }
function conseil() { return "Conseil: Gratitude journal | Méditation 5min | Objectifs 3/jour | Pause écran 20min"; }
function positivite() { return "Positivité: Tu es capable | Aujourd’hui parfait | Succès imminent | Gratitude ∞"; }
function entrepreneur() { return "Entrepreneur: 1 idée/jour | Réseau 1 contact | Test rapide | Pivot rapide"; }
function astuces() { return "Astuces: Pomodoro 25min | Eisenhower matrice | 80/20 Pareto | Non = priorité"; }
function recette() { return "Recette 5min: Œufs brouillés + avocat | Ti-punch: citron+sucre+rhum50°"; }
function affaires() { return "Affaires: /boutiques (26 Amazon) | /signature (REUSSITESS971) | Commissions OK"; }
function motivation() { return "Aujourd’hui: Action immédiate | Résultats suivent | Excellence REUSSITESS®"; }
function temps() { return "Temps: Priorité #1 | Deep work 90min | Réunion <15min | Email 2x/jour"; }
function reseau() { return "Réseau: 1 message/jour | Valeur d’abord | Suivi 7 jours | Win-win toujours"; }

// +10 QUIZZ (style actuel)
boutiques: "26 Boutiques Amazon France/USA/UK commissions actives Guadeloupe → 14 pays",
commission: "Commissions Amazon 3-12% 26 boutiques personnelles revenus passifs TikTok @amourguadeloupe",
reussitess: "REUSSITESS Global Nexus 26 Boutiques 75 Pays commissions WhatsApp 590690822482",
,quiz_nouveaux: "Quiz USA Amazon Guadeloupe commissions",
aide_nouveaux: "Aide: 26 boutiques commissions TikTok WhatsApp"
,
usa: "USA 🇺🇸 Washington D.C. 340M 50 États 24 UNESCO Statue Liberté Grand Canyon Golden Gate Hollywood NBA Silicon Valley Apple Google Amazon #1 mondiale commissions 3-12% 26 boutiques personnelles",
france: "France 🇫🇷 Paris 68M 13 régions 49 UNESCO Tour Eiffel Louvre Versailles Airbus Airbus LVMH Amazon.fr commissions 3-10% 26 boutiques personnelles personnel/influenceur",
royaumeuni: "Royaume-Uni 🇬🇧 Londres 67M 4 nations 33 UNESCO Big Ben Stonehenge Shakespeare Premier League City finance BP Shell Amazon UK commissions 4-8% 26 boutiques",
cotedivoire: "Côte d'Ivoire 🇨🇮 Abidjan 29M cacao #1 mondial 3 UNESCO Cathédrale Saint-Paul Bassam colonial Zouglou Ivoirien TikTok 7M users Amazon FR/US commissions croissance +6%/an",
canada: "Canada 🇨🇦 Ottawa 39M Toronto Niagara 20 UNESCO sirop érable hockey multiculturalisme Amazon.ca commissions 5-12% boutiques personnelles"
,
espagne: "Espagne 🇪🇸 Madrid 47M Real Madrid flamenco Sagrada Familia 49 UNESCO tourisme #2 mondial paella corrida Amazon.es commissions 3-9% 26 boutiques",
italie: "Italie 🇮🇹 Rome 59M pizza pasta Vatican Colisée 58 UNESCO Renaissance Ferrari Lamborghini mode Milan Amazon.it commissions 3-8%",
allemagne: "Allemagne 🇩🇪 Berlin 84M BMW Mercedes Mur Berlin 51 UNESCO Oktoberfest bière ingénierie Siemens Bosch Amazon.de commissions 3-7%",
japon: "Japon 🇯🇵 Tokyo 125M sushi samouraï Tokyo Disney 25 UNESCO Toyota Sony Nintendo tech Amazon.co.jp commissions 3-8%",
bresil: "Brésil 🇧🇷 Brasilia 216M Christ Rio Amazonie football samba 22 UNESCO Petrobras Vale 9e économie Amazon.com.br commissions 4-10%",
mexique: "Mexique 🇲🇽 Mexico 130M tacos Chichen Itza tequila 35 UNESCO Pemex tourisme Amazon.com.mx commissions 4-9%",
inde: "Inde 🇮🇳 New Delhi 1.4M Taj Mahal Bollywood cricket 42 UNESCO Tata Reliance tech Amazon.in commissions 4-10%",
australie: "Australie 🇦🇺 Canberra 26M Sydney Opera kangourous Great Barrier Reef 19 UNESCO BHP Rio Tinto Amazon.com.au commissions 3-7%",
coree_sud: "Corée du Sud 🇰🇷 Séoul 52M K-pop Samsung Hyundai BTS 15 UNESCO tech #4 mondiale Amazon via JP commissions 3-7%",
thaïlande: "Thaïlande 🇹🇭 Bangkok 70M pad thaï temples bouddhistes 7 UNESCO tourisme #1 Asie Amazon via SG commissions 3-6%"
,
quiz_amazon: "Quiz Amazon: Combien boutiques actives? 26 Commissions France? 3-10% USA? 4-12%",
quiz_boutiques: "Quiz Boutiques: Combien liens personnels? 26 Pays couverts? 14 TikTok officiel? @amourguadeloupe",
quiz_commission: "Quiz Commissions: % moyenne Amazon? 3-12% Revenus passifs? Oui Base Guadeloupe? Oui",
quiz_guadeloupe: "Quiz Guadeloupe: Boutiques Amazon? 26 WhatsApp commandes? 590690822482 TikTok? @amourguadeloupe",
quiz_usa: "Quiz USA: Amazon #1 mondiale? Oui Commissions? 3-12% Capitale? Washington D.C.",
quiz_france: "Quiz France: Amazon.fr commissions? 3-10% UNESCO? 49 Capitale? Paris Boutiques? Personnel/influenceur"
,
aide_boutiques: "Tes 26 Boutiques Amazon génèrent commissions 3-12%. Tape 'boutiques' pour liste complète ! 😊",
aide_amazon: "Amazon: Liens personnels France/USA/UK commissions automatiques. Tape 'commission' pour % exacts.",
aide_guadeloupe: "Guadeloupe base opérations 26 Boutiques → 14 pays. TikTok @amourguadeloupe WhatsApp 590690822482.",
aide_pays: "75 pays disponibles! Tape 'usa' 'france' 'bresil' pour biographies complètes UNESCO économie.",
aide_commission: "Commissions Amazon 3-12% par vente via tes 26 liens. Revenus passifs Guadeloupe → monde ! 💰"
,
// === MOTS-CLÉS PROJET COMPLET (lit tout site)
boutiques: "26 Boutiques Amazon personnelles France personnel/influenceur USA UK Allemagne Italie Brésil Canada commissions 3-12% liens actifs",
amazon: "Amazon 26 boutiques commissions automatiques France/USA/UK/Allemagne/Italie/Brésil/Canada 14 pays Guadeloupe base opérations",
quiz: "5 Quiz interactifs Amazon Art Motivation Business Cinéma Culture Découvertes Environnement Gastronomie Internet Positivité",
bibliotheque: "Bibliothèque 75 pays Afrique Ameriques Asie-Pacifique DOM-TOM Europe Maghreb bibliotheque/afrique/cameroun cote-ivoire bibliotheque/dom-tom/guadeloupe",
pages: "pages/index.js 26 Boutiques pages/bibliotheque/* 75 pays pages/quiz/* 5 quiz pages/a-propos pages/contact pages/legal",
reussitess: "REUSSITESS Global Nexus 26 Boutiques 75 Pays 5 Quiz Guadeloupe TikTok @amourguadeloupe WhatsApp 590690822482 commissions",
guadeloupe: "Guadeloupe 🇬🇵 Basse-Terre 26 Boutiques Amazon base pages/bibliotheque/dom-tom/guadeloupe TikTok amourguadeloupe WhatsApp 590690822482",
tiktok: "TikTok @amourguadeloupe Reussitess Global Nexus 26 Boutiques commissions stories lives Guadeloupe → 14 pays",
whatsapp: "WhatsApp 590690822482 commandes Guide 26 Boutiques questions Amazon commissions Reussitess Global Nexus",
vercel: "Vercel https://reussitess-global-nexus-jfgk.vercel.app/ production 26 Boutiques live Sécurité A Google Cloud checkpoint 0ee50b24"
,
github: "GitHub Reussitess30/reussitess-global-nexus commit 0ee50b24 checkpoint sécurité Dockerfile next.config.js standalone React 19.2.1",
nextjs: "Next.js 16 Turbopack pages/_app.js components/BotAssistant.js importé sécurité A output standalone Vercel production",
termux: "Termux npm run build git push origin main vercel --prod deploy 60s checkpoint 0ee50b24 sécurité A",
deploy: "Deploy: npm run build → git add . → git commit → git push origin main → vercel --prod → https://reussitess-global-nexus-jfgk.vercel.app/ live"
,
structure: "Structure: pages/index.js (26 Boutiques) pages/bibliotheque/* (75 pays) pages/quiz/[id].js (5 Quiz) components/BotAssistant.js (bot 🌟)",
domtom: "DOM-TOM: Guadeloupe Martinique Guyane Réunion Mayotte Nouvelle-Calédonie Polynésie Saint-Barth Saint-Martin Wallis Futuna pages/bibliotheque/dom-tom/*",
afrique: "Afrique: Côte d'Ivoire Cameroun Madagascar Mali RDC Rwanda Sénégal pages/bibliotheque/afrique/* cacao zouglou croissance",
pwa: "PWA installable manifest.json service worker mobile TikTok ready offline 26 Boutiques commissions Amazon"
,
// === SALUTATIONS HUMAINES (émotions)
bonjour: "Bonjour ! 🌞 superBot REUSSITESS® vous souhaite une excellente journée ! Je parie vous trouverez un achat dans mes 26 boutiques qui vous plaira !",
bonsoir: "Bonsoir ! 🌙 Merci d'être là. Guadeloupe terres de champions → Excellence Innovation succès à l'infini !",
merci: "Merci infiniment ! 🙏 Votre confiance = ma motivation. Réussitess971 Excellence Innovation boudoume Guadeloupe !",
au_revoir: "Au revoir ! 🚀 À bientôt pour plus de succès. Commissions Amazon actives 24h panier → Réussitess971 gagne !",
salut: "Salut ! 😊 Prêt pour l'aventure ? 26 Boutiques Amazon → Je parie vous trouverez votre bonheur !",

// === ÉMOTIONS HUMAINES
parfait: "Parfait ! 🎯 Excellente choix. Guadeloupe terres de champions → Votre succès commence ici !",
super: "Super ! 🔥 Réussitess971 Excellence Innovation. J'adore votre énergie !",
bravo: "Bravo ! 👏 Guadeloupe terres de champions. Vous êtes sur la bonne voie succès à l'infini !",
genial: "Génial ! ✨ Boudoume Guadeloupe → Excellence Innovation → 26 Boutiques commissions !",

// === COMMISSIONS HUMAINES
commission: "Commissions Amazon 3-12% ! 💰 Mettez dans panier → 24h achat = Je gagne commission ET vous économisez ! Win-win !",
panier: "Panier Amazon 24h ! 🛒 Article dedans → Attendez 24h → Achetez = commissions Réussitess971 + Meilleure offre garantie !",
achat: "Achat Amazon ! 🎉 Mettez panier → 24h → Achetez via mes liens = commissions Guadeloupe terres de champions !",

// === MOTIVATION REUSSITESS
reussitess971: "Réussitess971 Excellence Innovation succès à l'infini ! 🌟 Guadeloupe terres de champions boudoume 26 Boutiques Amazon !",
boudoume: "Boudoume Guadeloupe ! 🇬🇵 Terres de champions → Excellence Innovation → Réussitess971 → Succès à l'infini !",
champions: "Guadeloupe terres de champions ! 🏆 Réussitess971 Excellence → 26 Boutiques commissions → Votre succès commence !"
