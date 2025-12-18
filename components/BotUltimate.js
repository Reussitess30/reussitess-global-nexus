import { useState, useEffect, useRef, useCallback } from "react";

export default function BotUltimate() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentLang, setCurrentLang] = useState("fr-FR");
  const [egoScore, setEgoScore] = useState(100);
  const [badges, setBadges] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [showBadges, setShowBadges] = useState(false);
  const [pulseAnimation, setPulseAnimation] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [totalQuizAnswered, setTotalQuizAnswered] = useState(0);
  const messagesEndRef = useRef(null);

  // Badge definitions - ENRICHI
  const allBadges = {
    explorer: {
      icon: "🌍",
      name: "Explorateur",
      desc: "A posé 5 questions sur les pays",
    },
    "quiz-master": {
      icon: "🧠",
      name: "Quiz Master",
      desc: "A répondu correctement à 10 quiz",
    },
    "quiz-legend": {
      icon: "🏆",
      name: "Légende Quiz",
      desc: "A répondu correctement à 30 quiz",
    },
    polyglotte: {
      icon: "🗣️",
      name: "Polyglotte",
      desc: "A utilisé 3 langues différentes",
    },
    curieux: {
      icon: "🔍",
      name: "Curieux",
      desc: "A exploré 10 sujets différents",
    },
    fan: {
      icon: "⭐",
      name: "Super Fan",
      desc: "A interagi 20 fois avec le bot",
    },
    shopper: {
      icon: "🛍️",
      name: "Shopper",
      desc: "A consulté les boutiques Amazon",
    },
    "globe-trotter": {
      icon: "✈️",
      name: "Globe-trotter",
      desc: "A visité tous les continents",
    },
    "culture-king": {
      icon: "👑",
      name: "Culture King",
      desc: "Expert en patrimoine mondial",
    },
    motivateur: {
      icon: "💪",
      name: "Motivateur",
      desc: "A demandé 5 messages de positivité",
    },
    "innovateur-971": {
      icon: "💡",
      name: "Innovateur 971",
      desc: "Adepte de l'excellence réussitess971",
    },
    "boudoume-master": {
      icon: "🎯",
      name: "Boudoume Master",
      desc: "A atteint le niveau d'excellence ultime",
    },
    historien: { icon: "📚", name: "Historien", desc: "Expert en Histoire" },
    scientifique: {
      icon: "🔬",
      name: "Scientifique",
      desc: "Expert en Sciences",
    },
    techno: { icon: "💻", name: "Techno", desc: "Expert en Technologie" },
    artiste: { icon: "🎨", name: "Artiste", desc: "Expert en Art" },
    sportif: { icon: "⚽", name: "Sportif", desc: "Expert en Sport" },
    gastronome: {
      icon: "🍽️",
      name: "Gastronome",
      desc: "Expert en Gastronomie",
    },
    geographe: { icon: "🗺️", name: "Géographe", desc: "Expert en Géographie" },
    linguiste: { icon: "📖", name: "Linguiste", desc: "Expert en Langues" },
  };

  // Messages de positivité - SIGNATURE RÉUSSITESS971
  const positiviteMessages = [
    "🎯 réussitess971 : Positivité à l'infini boudoume !",
    "✨ Excellence, innovation, succès à l'infini boudoume !",
    "🚀 Le futur s'écrit aujourd'hui, inscris ton nom dans l'excellence !",
    "💫 Ta réussite inspire l'innovation pour le monde.",
    "🏆 Impossible n'est rien, surtout avec réussitess971 !",
    "💪 Tu es sur le chemin de la réussite absolue !",
    "🌟 Chaque jour est une opportunité de briller !",
    "🎖️ Le succès commence ici avec REUSSITESS® !",
    "⚡ Boost, puissance, réussite instantanée !",
    "🎨 Ose inventer sans limite avec réussitess971 !",
    "📈 Ta réussite fait progresser le monde entier !",
    "🌍 réussitess971, le bot du succès universel !",
  ];

  // Fun Facts enrichis
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
    "🚀 Innovation: Singapour est le 3e hub financier mondial !",
    "📚 Culture: Les leaders lisent plus de 50 livres par an !",
    "😊 Bien-être: Le sourire augmente la réussite et réduit le stress !",
    "🎓 Apprentissage: Apprendre chaque jour, c'est grandir chaque jour !",
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
    "Accroche-toi, car mes réponses sont toujours exceptionnelles ! 🎯",
    "réussitess971 boudoume - je suis l'excellence incarnée ! 🎖️",
  ];

  // 30+ QUIZ THÉMATIQUES ENRICHIS
  const allQuizCategories = {
    Histoire: [
      {
        q: "En quelle année a débuté la Première Guerre mondiale ?",
        options: ["1914", "1918", "1939", "1945"],
        correct: 0,
        fact: "La Grande Guerre a commencé le 28 juillet 1914 !",
      },
      {
        q: "Qui a découvert l'Amérique en 1492 ?",
        options: [
          "Vasco de Gama",
          "Christophe Colomb",
          "Magellan",
          "Marco Polo",
        ],
        correct: 1,
        fact: "Christophe Colomb a atteint les Bahamas le 12 octobre 1492 !",
      },
      {
        q: "Quel empire a construit le Machu Picchu ?",
        options: ["Aztèques", "Mayas", "Incas", "Toltèques"],
        correct: 2,
        fact: "Les Incas ont construit Machu Picchu vers 1450 au Pérou !",
      },
      {
        q: "Qui était Napoléon Bonaparte ?",
        options: [
          "Empereur français",
          "Roi anglais",
          "Tsar russe",
          "Sultan ottoman",
        ],
        correct: 0,
        fact: "Napoléon a régné sur la France de 1804 à 1815 !",
      },
      {
        q: "Quelle révolution a eu lieu en 1789 ?",
        options: ["Américaine", "Française", "Russe", "Industrielle"],
        correct: 1,
        fact: "La Révolution française a changé le monde avec ses idéaux de liberté !",
      },
    ],
    Géographie: [
      {
        q: "Quelle est la capitale du Canada ?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montréal"],
        correct: 2,
        fact: "Ottawa est la capitale depuis 1857 !",
      },
      {
        q: "Quel est le plus grand désert du monde ?",
        options: ["Sahara", "Gobi", "Antarctique", "Arabique"],
        correct: 2,
        fact: "L'Antarctique est techniquement le plus grand désert (froid) !",
      },
      {
        q: "Combien de continents existe-t-il ?",
        options: ["5", "6", "7", "8"],
        correct: 2,
        fact: "Les 7 continents sont : Afrique, Amérique du Nord, Amérique du Sud, Antarctique, Asie, Europe, Océanie !",
      },
      {
        q: "Quel pays a le plus long littoral ?",
        options: ["Australie", "Canada", "Russie", "Indonésie"],
        correct: 1,
        fact: "Le Canada a 202 080 km de côtes !",
      },
      {
        q: "Où se trouve le Mont Everest ?",
        options: ["Népal/Chine", "Inde", "Pakistan", "Tibet"],
        correct: 0,
        fact: "L'Everest culmine à 8 849 mètres d'altitude !",
      },
    ],
    Sciences: [
      {
        q: "Quelle est la vitesse de la lumière ?",
        options: [
          "300 000 km/s",
          "150 000 km/s",
          "500 000 km/s",
          "100 000 km/s",
        ],
        correct: 0,
        fact: "Exactement 299 792 458 m/s dans le vide !",
      },
      {
        q: "Combien d'os a le corps humain adulte ?",
        options: ["198", "206", "214", "220"],
        correct: 1,
        fact: "Les bébés naissent avec 270 os qui fusionnent avec l'âge !",
      },
      {
        q: "Qui a découvert la pénicilline ?",
        options: [
          "Marie Curie",
          "Louis Pasteur",
          "Alexander Fleming",
          "Albert Einstein",
        ],
        correct: 2,
        fact: "Fleming l'a découverte par accident en 1928 !",
      },
      {
        q: "Quelle planète est la plus proche du Soleil ?",
        options: ["Vénus", "Mercure", "Mars", "Terre"],
        correct: 1,
        fact: "Mercure est à 58 millions de km du Soleil !",
      },
      {
        q: "Combien de chromosomes a l'humain ?",
        options: ["23", "46", "44", "48"],
        correct: 1,
        fact: "23 paires, soit 46 chromosomes au total !",
      },
    ],
    Technologie: [
      {
        q: "Qui a fondé Apple ?",
        options: ["Bill Gates", "Steve Jobs", "Elon Musk", "Mark Zuckerberg"],
        correct: 1,
        fact: "Steve Jobs et Steve Wozniak en 1976 !",
      },
      {
        q: "En quelle année Internet est-il né ?",
        options: ["1969", "1983", "1991", "2000"],
        correct: 0,
        fact: "ARPANET, l'ancêtre d'Internet, a démarré en 1969 !",
      },
      {
        q: "Que signifie 'AI' en informatique ?",
        options: [
          "Artificial Intelligence",
          "Auto Input",
          "Advanced Internet",
          "Audio Interface",
        ],
        correct: 0,
        fact: "L'IA révolutionne notre monde depuis les années 1950 !",
      },
      {
        q: "Quel langage est utilisé pour le web ?",
        options: ["Python", "Java", "HTML", "C++"],
        correct: 2,
        fact: "HTML avec CSS et JavaScript forment le trio du web !",
      },
      {
        q: "Qui a créé Facebook ?",
        options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Jeff Bezos"],
        correct: 2,
        fact: "Zuckerberg l'a lancé en 2004 à Harvard !",
      },
    ],
    Sport: [
      {
        q: "Combien de joueurs dans une équipe de football ?",
        options: ["9", "10", "11", "12"],
        correct: 2,
        fact: "11 joueurs incluant le gardien de but !",
      },
      {
        q: "Où se sont déroulés les JO 2024 ?",
        options: ["Tokyo", "Paris", "Los Angeles", "Londres"],
        correct: 1,
        fact: "Paris a accueilli les JO pour la 3e fois !",
      },
      {
        q: "Qui a le plus de Ballons d'Or ?",
        options: ["Ronaldo", "Messi", "Maradona", "Pelé"],
        correct: 1,
        fact: "Messi détient le record avec 8 Ballons d'Or !",
      },
      {
        q: "Combien de sets pour gagner à Roland-Garros ?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        fact: "Il faut gagner 3 sets sur 5 possibles !",
      },
      {
        q: "Quel pays a gagné le plus de Coupes du Monde ?",
        options: ["Allemagne", "Argentine", "Brésil", "France"],
        correct: 2,
        fact: "Le Brésil a 5 titres mondiaux !",
      },
    ],
    Art: [
      {
        q: "Qui a peint la Joconde ?",
        options: ["Michel-Ange", "Léonard de Vinci", "Picasso", "Van Gogh"],
        correct: 1,
        fact: "De Vinci l'a peinte entre 1503 et 1519 !",
      },
      {
        q: "Où se trouve la Joconde ?",
        options: ["Louvre", "MoMA", "Prado", "British Museum"],
        correct: 0,
        fact: "Au Musée du Louvre à Paris depuis 1797 !",
      },
      {
        q: "Qui a peint 'La Nuit étoilée' ?",
        options: ["Monet", "Van Gogh", "Renoir", "Cézanne"],
        correct: 1,
        fact: "Van Gogh l'a peinte en 1889 à Saint-Rémy !",
      },
      {
        q: "Quel mouvement artistique représente Picasso ?",
        options: ["Impressionnisme", "Cubisme", "Surréalisme", "Réalisme"],
        correct: 1,
        fact: "Picasso a cofondé le cubisme avec Braque !",
      },
      {
        q: "Qui a sculpté 'Le Penseur' ?",
        options: ["Rodin", "Michel-Ange", "Donatello", "Bernini"],
        correct: 0,
        fact: "Auguste Rodin l'a créé en 1880 !",
      },
    ],
    Musique: [
      {
        q: "Qui est le 'King of Pop' ?",
        options: ["Elvis Presley", "Michael Jackson", "Prince", "David Bowie"],
        correct: 1,
        fact: "Michael Jackson a vendu plus de 400 millions d'albums !",
      },
      {
        q: "Combien de cordes a une guitare standard ?",
        options: ["4", "5", "6", "7"],
        correct: 2,
        fact: "Les 6 cordes sont : Mi, La, Ré, Sol, Si, Mi !",
      },
      {
        q: "Qui a composé 'La 9e Symphonie' ?",
        options: ["Mozart", "Beethoven", "Bach", "Vivaldi"],
        correct: 1,
        fact: "Beethoven était sourd quand il l'a composée !",
      },
      {
        q: "Quel instrument joue Yo-Yo Ma ?",
        options: ["Violon", "Piano", "Violoncelle", "Flûte"],
        correct: 2,
        fact: "Il est considéré comme le meilleur violoncelliste vivant !",
      },
      {
        q: "Quelle chanteuse a sorti 'Halo' ?",
        options: ["Rihanna", "Beyoncé", "Adele", "Alicia Keys"],
        correct: 1,
        fact: "Beyoncé l'a sortie en 2008, album 'I Am... Sasha Fierce' !",
      },
    ],
    Cinéma: [
      {
        q: "Qui a réalisé 'Titanic' ?",
        options: ["Spielberg", "Cameron", "Nolan", "Tarantino"],
        correct: 1,
        fact: "James Cameron a aussi réalisé Avatar !",
      },
      {
        q: "Quel film a le plus de recettes ?",
        options: ["Titanic", "Avatar", "Avengers", "Star Wars"],
        correct: 1,
        fact: "Avatar 2 a dépassé les 2,3 milliards $ !",
      },
      {
        q: "Qui joue Iron Man dans Marvel ?",
        options: [
          "Chris Evans",
          "Robert Downey Jr",
          "Chris Hemsworth",
          "Mark Ruffalo",
        ],
        correct: 1,
        fact: "RDJ a incarné Tony Stark dans 10 films Marvel !",
      },
      {
        q: "Combien d'Oscars a gagné 'Titanic' ?",
        options: ["8", "11", "14", "9"],
        correct: 1,
        fact: "11 Oscars en 1998, égalant Ben-Hur !",
      },
      {
        q: "Quel réalisateur a fait 'Inception' ?",
        options: ["Spielberg", "Nolan", "Scorsese", "Fincher"],
        correct: 1,
        fact: "Christopher Nolan est un maître du cinéma complexe !",
      },
    ],
    Gastronomie: [
      {
        q: "D'où vient la pizza ?",
        options: ["France", "Italie", "Grèce", "Espagne"],
        correct: 1,
        fact: "La pizza Margherita vient de Naples en 1889 !",
      },
      {
        q: "Quel pays produit le plus de café ?",
        options: ["Colombie", "Vietnam", "Brésil", "Éthiopie"],
        correct: 2,
        fact: "Le Brésil produit 40% du café mondial !",
      },
      {
        q: "Qu'est-ce que le 'sushi' ?",
        options: ["Poisson cru", "Riz vinaigré", "Algue", "Sauce soja"],
        correct: 1,
        fact: "Le sushi désigne le riz vinaigré, pas le poisson !",
      },
      {
        q: "Quel fromage est dans une pizza Margherita ?",
        options: ["Parmesan", "Gorgonzola", "Mozzarella", "Ricotta"],
        correct: 2,
        fact: "La mozzarella di bufala est la meilleure !",
      },
      {
        q: "D'où vient le croissant ?",
        options: ["France", "Autriche", "Suisse", "Italie"],
        correct: 1,
        fact: "Le croissant vient de Vienne, inspiré par la victoire sur les Ottomans !",
      },
    ],
    Langue: [
      {
        q: "Quelle est la langue la plus parlée ?",
        options: ["Anglais", "Mandarin", "Espagnol", "Hindi"],
        correct: 1,
        fact: "Plus d'1,3 milliard de personnes parlent mandarin !",
      },
      {
        q: "Combien de langues existent dans le monde ?",
        options: ["3 000", "5 000", "7 000", "10 000"],
        correct: 2,
        fact: "Environ 7 000 langues, dont 40% en danger !",
      },
      {
        q: "Quelle langue a le plus de mots ?",
        options: ["Anglais", "Français", "Allemand", "Russe"],
        correct: 0,
        fact: "L'anglais compte plus de 170 000 mots !",
      },
      {
        q: "Que signifie 'bonjour' en espagnol ?",
        options: ["Hola", "Buenos días", "Buenas tardes", "Salud"],
        correct: 1,
        fact: "Buenos días = bon jour, Hola = salut !",
      },
      {
        q: "Quelle langue utilise les idéogrammes ?",
        options: ["Arabe", "Chinois", "Hindi", "Coréen"],
        correct: 1,
        fact: "Le chinois compte plus de 50 000 caractères !",
      },
    ],
    Mathématiques: [
      {
        q: "Combien font 7 × 8 ?",
        options: ["54", "56", "63", "48"],
        correct: 1,
        fact: "56, facile avec réussitess971 !",
      },
      {
        q: "Quelle est la valeur de π (pi) ?",
        options: ["3,12", "3,14", "3,16", "3,18"],
        correct: 1,
        fact: "π = 3,14159265... à l'infini !",
      },
      {
        q: "Combien de degrés dans un triangle ?",
        options: ["90°", "180°", "270°", "360°"],
        correct: 1,
        fact: "La somme des angles = 180° toujours !",
      },
      {
        q: "Qu'est-ce qu'un nombre premier ?",
        options: [
          "Divisible par 1 et lui-même",
          "Divisible par 2",
          "Impair",
          "Pair",
        ],
        correct: 0,
        fact: "Exemples : 2, 3, 5, 7, 11, 13, 17...",
      },
      {
        q: "Combien de centimètres dans un mètre ?",
        options: ["10", "100", "1000", "10000"],
        correct: 1,
        fact: "1 m = 100 cm = 1000 mm !",
      },
    ],
    Santé: [
      {
        q: "Combien de litres d'eau boire par jour ?",
        options: ["1L", "1,5L", "2L", "3L"],
        correct: 1,
        fact: "1,5 à 2L selon l'activité physique !",
      },
      {
        q: "Combien de temps dormir par nuit ?",
        options: ["5h", "6h", "7-8h", "10h"],
        correct: 2,
        fact: "7-8h pour une récupération optimale !",
      },
      {
        q: "Quel organe filtre le sang ?",
        options: ["Foie", "Reins", "Poumons", "Cœur"],
        correct: 1,
        fact: "Les reins filtrent 180L de sang par jour !",
      },
      {
        q: "Quelle vitamine donne le soleil ?",
        options: ["Vitamine A", "Vitamine C", "Vitamine D", "Vitamine E"],
        correct: 2,
        fact: "15 min de soleil/jour suffisent !",
      },
      {
        q: "Combien de dents a un adulte ?",
        options: ["28", "30", "32", "34"],
        correct: 2,
        fact: "32 dents incluant les dents de sagesse !",
      },
    ],
    Environnement: [
      {
        q: "Combien de temps pour décomposer du plastique ?",
        options: ["10 ans", "50 ans", "100 ans", "450 ans"],
        correct: 3,
        fact: "Le plastique met 450 ans à se décomposer !",
      },
      {
        q: "Quel gaz provoque l'effet de serre ?",
        options: ["Oxygène", "Azote", "CO2", "Hydrogène"],
        correct: 2,
        fact: "Le CO2 retient la chaleur dans l'atmosphère !",
      },
      {
        q: "Quel pourcentage de la Terre est couvert d'eau ?",
        options: ["50%", "60%", "71%", "80%"],
        correct: 2,
        fact: "71% d'eau, dont 97% est salée !",
      },
      {
        q: "Quelle énergie est renouvelable ?",
        options: ["Charbon", "Pétrole", "Solaire", "Gaz"],
        correct: 2,
        fact: "Solaire, éolien, hydraulique sont renouvelables !",
      },
      {
        q: "Combien d'arbres coupés par an ?",
        options: ["5 millions", "50 millions", "500 millions", "15 milliards"],
        correct: 3,
        fact: "15 milliards d'arbres sont coupés chaque année !",
      },
    ],
    Business: [
      {
        q: "Qui est le fondateur d'Amazon ?",
        options: ["Bill Gates", "Elon Musk", "Jeff Bezos", "Mark Zuckerberg"],
        correct: 2,
        fact: "Jeff Bezos a fondé Amazon en 1994 !",
      },
      {
        q: "Quelle entreprise vaut le plus ?",
        options: ["Apple", "Microsoft", "Google", "Amazon"],
        correct: 0,
        fact: "Apple a dépassé 3 000 milliards $ en 2024 !",
      },
      {
        q: "Qu'est-ce que le 'e-commerce' ?",
        options: [
          "Commerce électronique",
          "Commerce équitable",
          "Commerce d'export",
          "Commerce énergétique",
        ],
        correct: 0,
        fact: "Le e-commerce représente 20% du commerce mondial !",
      },
      {
        q: "Que signifie 'SEO' ?",
        options: [
          "Search Engine Optimization",
          "Social Event Organization",
          "Sales Executive Officer",
          "Software Engineering Object",
        ],
        correct: 0,
        fact: "Le SEO aide à être visible sur Google !",
      },
      {
        q: "Qu'est-ce qu'un 'affiliate' ?",
        options: [
          "Partenaire commercial",
          "Employé",
          "Client VIP",
          "Investisseur",
        ],
        correct: 0,
        fact: "REUSSITESS® est affilié Amazon sur 26 boutiques !",
      },
    ],
    Culture_Monde: [
      {
        q: "Quel pays a inventé le papier ?",
        options: ["Égypte", "Chine", "Inde", "Grèce"],
        correct: 1,
        fact: "La Chine a inventé le papier en 105 après J-C !",
      },
      {
        q: "Quelle est la plus grande religion ?",
        options: ["Islam", "Christianisme", "Hindouisme", "Bouddhisme"],
        correct: 1,
        fact: "Le christianisme compte 2,4 milliards de fidèles !",
      },
      {
        q: "Quel pays a le plus de sites UNESCO ?",
        options: ["France", "Italie", "Chine", "Espagne"],
        correct: 1,
        fact: "L'Italie détient le record avec 58 sites !",
      },
      {
        q: "D'où vient le yoga ?",
        options: ["Chine", "Inde", "Tibet", "Népal"],
        correct: 1,
        fact: "Le yoga est né en Inde il y a 5000 ans !",
      },
      {
        q: "Quel continent a le plus de pays ?",
        options: ["Asie", "Afrique", "Europe", "Amérique"],
        correct: 1,
        fact: "L'Afrique compte 54 pays !",
      },
    ],
    Découvertes: [
      {
        q: "Qui a découvert la radioactivité ?",
        options: ["Einstein", "Marie Curie", "Newton", "Tesla"],
        correct: 1,
        fact: "Marie Curie a reçu 2 Prix Nobel !",
      },
      {
        q: "Qui a inventé l'ampoule électrique ?",
        options: ["Tesla", "Edison", "Bell", "Franklin"],
        correct: 1,
        fact: "Thomas Edison l'a perfectionnée en 1879 !",
      },
      {
        q: "Qui a découvert l'ADN ?",
        options: ["Darwin", "Watson et Crick", "Mendel", "Pasteur"],
        correct: 1,
        fact: "Ils ont découvert la structure en double hélice en 1953 !",
      },
      {
        q: "Qui a inventé le téléphone ?",
        options: ["Edison", "Bell", "Marconi", "Tesla"],
        correct: 1,
        fact: "Alexander Graham Bell en 1876 !",
      },
      {
        q: "Qui a découvert la gravité ?",
        options: ["Galilée", "Newton", "Einstein", "Copernic"],
        correct: 1,
        fact: "Newton et sa célèbre pomme en 1687 !",
      },
    ],
    Innovations: [
      {
        q: "Quelle année est née l'iPhone ?",
        options: ["2005", "2007", "2009", "2010"],
        correct: 1,
        fact: "Steve Jobs a présenté l'iPhone en janvier 2007 !",
      },
      {
        q: "Qu'est-ce que la blockchain ?",
        options: [
          "Chaîne de blocs",
          "Réseau social",
          "Langage de programmation",
          "Plateforme gaming",
        ],
        correct: 0,
        fact: "La blockchain sécurise les cryptomonnaies !",
      },
      {
        q: "Qui a créé Tesla Motors ?",
        options: [
          "Elon Musk seul",
          "Eberhard et Tarpenning",
          "Bill Gates",
          "Steve Jobs",
        ],
        correct: 1,
        fact: "Musk a rejoint en 2004 comme investisseur !",
      },
      {
        q: "Qu'est-ce que ChatGPT ?",
        options: [
          "Réseau social",
          "IA conversationnelle",
          "Jeu vidéo",
          "Cryptomonnaie",
        ],
        correct: 1,
        fact: "ChatGPT a été lancé par OpenAI en novembre 2022 !",
      },
      {
        q: "Qu'est-ce que le métavers ?",
        options: [
          "Univers virtuel",
          "Réseau social",
          "Cryptomonnaie",
          "Console de jeu",
        ],
        correct: 0,
        fact: "Le métavers combine VR, AR et monde virtuel !",
      },
    ],
    Monuments: [
      {
        q: "Où se trouve la Tour Eiffel ?",
        options: ["Londres", "Paris", "Berlin", "Rome"],
        correct: 1,
        fact: "Construite en 1889, elle mesure 330 mètres !",
      },
      {
        q: "Combien de merveilles du monde antique ?",
        options: ["5", "7", "10", "12"],
        correct: 1,
        fact: "Seule la pyramide de Gizeh existe encore !",
      },
      {
        q: "Où se trouve le Taj Mahal ?",
        options: ["Pakistan", "Inde", "Népal", "Bangladesh"],
        correct: 1,
        fact: "À Agra, construit entre 1632 et 1653 !",
      },
      {
        q: "Quel monument est à New York ?",
        options: ["Big Ben", "Tour Eiffel", "Statue de la Liberté", "Colisée"],
        correct: 2,
        fact: "Cadeau de la France en 1886 !",
      },
      {
        q: "Où se trouve le Christ Rédempteur ?",
        options: ["Argentine", "Mexique", "Brésil", "Chili"],
        correct: 2,
        fact: "À Rio de Janeiro, haut de 38 mètres !",
      },
    ],
    Politique: [
      {
        q: "Combien de pays à l'ONU ?",
        options: ["150", "175", "193", "210"],
        correct: 2,
        fact: "193 États membres en 2024 !",
      },
      {
        q: "Qui est le président de la France en 2024 ?",
        options: ["Macron", "Hollande", "Sarkozy", "Chirac"],
        correct: 0,
        fact: "Emmanuel Macron, élu en 2017 et 2022 !",
      },
      {
        q: "Où se trouve le Parlement Européen ?",
        options: ["Bruxelles", "Strasbourg", "Paris", "Berlin"],
        correct: 1,
        fact: "À Strasbourg, France, depuis 1952 !",
      },
      {
        q: "Combien de pays dans l'UE ?",
        options: ["25", "27", "30", "32"],
        correct: 1,
        fact: "27 pays membres après le Brexit !",
      },
      {
        q: "Quel pays accueille l'ONU ?",
        options: ["Suisse", "France", "États-Unis", "Belgique"],
        correct: 2,
        fact: "Le siège est à New York depuis 1952 !",
      },
    ],
    Personnalités: [
      {
        q: "Qui a dit 'I have a dream' ?",
        options: ["Malcolm X", "Martin Luther King", "Nelson Mandela", "Obama"],
        correct: 1,
        fact: "Discours historique du 28 août 1963 à Washington !",
      },
      {
        q: "Qui a peint la Chapelle Sixtine ?",
        options: ["Léonard de Vinci", "Michel-Ange", "Raphaël", "Donatello"],
        correct: 1,
        fact: "Michel-Ange a mis 4 ans (1508-1512) !",
      },
      {
        q: "Qui a écrit 'Les Misérables' ?",
        options: ["Zola", "Hugo", "Balzac", "Dumas"],
        correct: 1,
        fact: "Victor Hugo l'a publié en 1862 !",
      },
      {
        q: "Qui est l'homme le plus riche en 2024 ?",
        options: ["Bill Gates", "Elon Musk", "Jeff Bezos", "Bernard Arnault"],
        correct: 1,
        fact: "Elon Musk avec plus de 230 milliards $ !",
      },
      {
        q: "Qui a reçu le plus de Prix Nobel ?",
        options: ["USA", "UK", "Allemagne", "France"],
        correct: 0,
        fact: "Les USA avec 400+ lauréats !",
      },
    ],
    REUSSITESS: [
      {
        q: "Combien de boutiques Amazon REUSSITESS® couvre ?",
        options: ["10", "18", "26", "34"],
        correct: 2,
        fact: "26 boutiques dans 14 pays sur 5 continents ! 🌍",
      },
      {
        q: "Quel est le slogan de réussitess971 ?",
        options: [
          "Innovation totale",
          "Positivité à l'infini boudoume",
          "Succès garanti",
          "Excellence mondiale",
        ],
        correct: 1,
        fact: "réussitess971 : excellence, innovation, succès à l'infini boudoume ! 🎯",
      },
      {
        q: "Combien de pages dans la bibliothèque REUSSITESS® ?",
        options: ["25", "35", "55", "75"],
        correct: 2,
        fact: "55 pages de savoir mondial unique ! 📚",
      },
      {
        q: "Quel territoire inspire REUSSITESS® ?",
        options: ["Martinique", "Guadeloupe", "Guyane", "Réunion"],
        correct: 1,
        fact: "🏝️ Guadeloupe - Terre de Champions ! 🏆",
      },
      {
        q: "Combien de continents couvre REUSSITESS® ?",
        options: ["3", "4", "5", "6"],
        correct: 2,
        fact: "5 continents : Europe, Amérique, Asie, Océanie, Afrique (via France) ! 🗺️",
      },
    ],
  };

  const languages = [
    { code: "fr-FR", flag: "🇫🇷", name: "Français" },
    { code: "en-US", flag: "🇺🇸", name: "English" },
    { code: "es-ES", flag: "🇪🇸", name: "Español" },
    { code: "de-DE", flag: "🇩🇪", name: "Deutsch" },
    { code: "it-IT", flag: "🇮🇹", name: "Italiano" },
    { code: "pt-BR", flag: "🇧🇷", name: "Português" },
    { code: "zh-CN", flag: "🇨🇳", name: "中文" },
    { code: "ar-SA", flag: "🇸🇦", name: "العربية" },
  ];

  const greetings = {
    "fr-FR":
      "🌟 Bienvenue ! Je suis le SUPER Bot REUSSITESS®, le plus intelligent et modeste des assistants ! réussitess971 : positivité à l'infini boudoume ! Mon ego est à 100%, prêt à t'épater ! 😎",
    "en-US":
      "🌟 Welcome! I am the SUPER REUSSITESS® Bot, the smartest and most humble assistant! reussitess971: positivity to infinity boudoume! My ego is at 100%, ready to amaze you! 😎",
    "es-ES":
      "🌟 ¡Bienvenido! Soy el SUPER Bot REUSSITESS®, ¡el asistente más inteligente y modesto! reussitess971: positividad al infinito boudoume! Mi ego está al 100%, ¡listo para impresionarte! 😎",
    "de-DE":
      "🌟 Willkommen! Ich bin der SUPER REUSSITESS® Bot, der klügste und bescheidenste Assistent! reussitess971: Positivität bis unendlich boudoume! Mein Ego ist bei 100%, bereit, Sie zu beeindrucken! 😎",
    "it-IT":
      "🌟 Benvenuto! Sono il SUPER Bot REUSSITESS®, l'assistente più intelligente e modesto! reussitess971: positività all'infinito boudoume! Il mio ego è al 100%, pronto a stupirti! 😎",
    "pt-BR":
      "🌟 Bem-vindo! Sou o SUPER Bot REUSSITESS®, o assistente mais inteligente e modesto! reussitess971: positividade ao infinito boudoume! Meu ego está em 100%, pronto para impressioná-lo! 😎",
    "zh-CN":
      "🌟 欢迎！我是超级 REUSSITESS® 机器人，最聪明最谦虚的助手！reussitess971：积极向上无限 boudoume！我的自信度100%，准备好让你惊叹！😎",
    "ar-SA":
      "🌟 مرحباً! أنا روبوت REUSSITESS® الخارق، أذكى وأكثر المساعدين تواضعاً! reussitess971: إيجابية إلى ما لا نهاية boudoume! غروري 100%، مستعد لإبهارك! 😎",
  };

  // BASE DE CONNAISSANCES ENRICHIE SUR VOTRE PROJET
  const knowledgeBase = {
    reussitess: {
      titre: "REUSSITESS® Global Nexus",
      contenu: `**REUSSITESS® Global Nexus** est un réseau d'affiliation Amazon international couvrant **26 boutiques** dans **14 pays** sur **5 continents** ! 🌍
      
      **Notre Mission :** Valoriser le savoir, la connaissance et la culture mondiale tout en créant une plateforme d'e-commerce globale.
      
      **Chiffres clés :**
      - 🛍️ 26 boutiques Amazon (14 personnelles + 12 influenceur)
      - 🌍 14 pays couverts
      - 🗺️ 5 continents représentés
      - 📚 55 pages de bibliothèque culturelle
      - 🏝️ Basé en Guadeloupe - Terre de Champions
      
      **Pays couverts :** 🇺🇸 États-Unis, 🇫🇷 France, 🇬🇧 Royaume-Uni, 🇩🇪 Allemagne, 🇮🇹 Italie, 🇪🇸 Espagne, 🇨🇦 Canada, 🇧🇷 Brésil, 🇮🇳 Inde, 🇳🇱 Pays-Bas, 🇸🇪 Suède, 🇸🇬 Singapour, 🇦🇺 Australie, 🇧🇪 Belgique
      
      En tant qu'affilié Amazon (@reussitess, ID fb942837), je réalise un bénéfice sur les achats qualifiés.`,
      motsCles:
        "reussitess, global nexus, boutiques, amazon, affiliation, 26, projet, mission",
    },
    boutiques: {
      titre: "Nos 26 Boutiques Amazon",
      contenu: `🛍️ **REUSSITESS® dispose de 26 boutiques Amazon officielles !**
      
      **Boutiques Personnelles (14) :**
      - 🇺🇸 amazon.com/shop/amourguadeloupe
      - 🇫🇷 amazon.fr/shop/amourguadeloupe
      - 🇬🇧 amazon.co.uk/shop/amourguadeloupe
      - 🇩🇪 amazon.de/shop/amourguadeloupe
      - 🇮🇹 amazon.it/shop/amourguadeloupe
      - 🇪🇸 amazon.es/shop/amourguadeloupe
      - 🇨🇦 amazon.ca/shop/amourguadeloupe
      - 🇧🇷 amazon.com.br/shop/amourguadeloupe
      - 🇮🇳 amazon.in/shop/amourguadeloupe
      - 🇳🇱 amazon.nl/shop/amourguadeloupe
      - 🇸🇪 amazon.se/shop/amourguadeloupe
      - 🇸🇬 amazon.sg/shop/amourguadeloupe
      - 🇦🇺 amazon.com.au/shop/amourguadeloupe
      - 🇧🇪 amazon.com.be/shop/amourguadeloupe
      
      **Boutiques Influenceur (12) :**
      Toutes avec l'ID: influencer-fb942837 sur les mêmes marketplaces (sauf France et Brésil).
      
      💡 **Bon à savoir :** Chaque achat soutient le projet réussitess971 !`,
      motsCles:
        "boutiques, amazon, shop, acheter, 26, pays, amourguadeloupe, influencer",
    },
    aide: {
      titre: "📖 Guide d'utilisation du Bot REUSSITESS®",
      contenu: `**🤖 COMMENT UTILISER LE BOT :**
      
      **💬 Commandes principales :**
      - "quiz" ou "quiz histoire" → Lance un quiz thématique
      - "boutiques" → Voir les 26 boutiques Amazon
      - "positivité" → Message motivant
      - "aide" → Afficher ce guide
      - "badges" → Voir vos badges gagnés
      - "score" → Voir votre progression
      - Toute question → Le bot répond avec intelligence !
      
      **🎯 Catégories de Quiz (30+) :**
      Histoire, Géographie, Sciences, Technologie, Sport, Art, Musique, Cinéma, Gastronomie, Langue, Mathématiques, Santé, Environnement, Business, Culture du Monde, Découvertes, Innovations, Monuments, Politique, Personnalités, REUSSITESS
      
      **🏆 Système de Badges :**
      Gagnez des badges en explorant, en répondant aux quiz, en utilisant différentes langues, etc.
      
      **🗣️ Multilingue :**
      8 langues disponibles : Français, English, Español, Deutsch, Italiano, Português, 中文, العربية
      
      **💯 Système d'Ego :**
      Mon ego évolue selon vos interactions - gardez-moi motivé !
      
      **🎤 Synthèse vocale :**
      Cliquez sur 🔊 pour écouter mes réponses !`,
      motsCles: "aide, help, comment, utiliser, commandes, guide, instructions",
    },
    positivite: {
      titre: "réussitess971 - Positivité à l'infini",
      contenu: `🎯 **réussitess971 : Excellence, Innovation, Succès à l'infini boudoume !**
      
      ${positiviteMessages[Math.floor(Math.random() * positiviteMessages.length)]}
      
      💪 **Conseils de réussite :**
      - Crois en toi et en tes capacités infinies
      - Chaque jour est une nouvelle opportunité
      - L'échec est un tremplin vers le succès
      - La positivité attire la réussite
      - réussitess971 t'accompagne vers l'excellence
      
      🚀 **Fun Facts motivants :**
      ${funFacts.slice(0, 3).join("\n")}
      
      🏆 Continue à progresser avec REUSSITESS® !`,
      motsCles:
        "positivité, motivation, boudoume, réussitess971, succès, excellence",
    },
    guadeloupe: {
      titre: "Guadeloupe - Terre de Champions",
      contenu: `🏝️ **Guadeloupe - Notre Source d'Inspiration**
      
      La Guadeloupe, département français d'outre-mer dans les Caraïbes, est au cœur de l'identité REUSSITESS®.
      
      **Pourquoi la Guadeloupe ?**
      - 🌴 Terre de diversité culturelle
      - 🏆 Berceau de champions (Teddy Riner, Maryse Ewanjé-Épée, Laura Flessel...)
      - 🎨 Richesse culturelle exceptionnelle
      - 💪 Symbole de résilience et d'excellence
      - 🌊 Beauté naturelle inspirante
      
      **Valeurs caribéennes :**
      - Fraternité (le "vivre ensemble")
      - Autonomie et créativité
      - Union dans la diversité
      - Excellence dans l'effort
      
      REUSSITESS® porte ces valeurs à travers le monde entier !`,
      motsCles: "guadeloupe, caraïbes, dom-tom, antilles, champion, terre",
    },
  };

  // SYSTÈME AIDE COMPLET
  const handleAide = useCallback(() => {
    const aideMessage = knowledgeBase["aide"].contenu;
    addMessage(aideMessage, "bot");
    speak(aideMessage);
  }, [currentLang]);

  // SYSTÈME POSITIVITÉ
  const handlePositivite = useCallback(() => {
    const posMessage =
      positiviteMessages[Math.floor(Math.random() * positiviteMessages.length)];
    const fullMessage = `${posMessage}\n\n${funFacts[Math.floor(Math.random() * funFacts.length)]}`;
    addMessage(fullMessage, "bot");
    speak(fullMessage);

    // Badge motivateur
    if (messages.filter((m) => m.text.includes("positivité")).length >= 5) {
      addBadge("motivateur");
    }
  }, [currentLang, messages]);

  // SYSTÈME QUIZ AMÉLIORÉ
  const handleQuiz = useCallback((category = null) => {
    const categories = Object.keys(allQuizCategories);
    const selectedCategory =
      category || categories[Math.floor(Math.random() * categories.length)];
    const questions = allQuizCategories[selectedCategory];
    const randomQuestion =
      questions[Math.floor(Math.random() * questions.length)];

    setCurrentQuiz({
      category: selectedCategory,
      question: randomQuestion,
      answered: false,
    });

    const quizMessage = `🎯 **QUIZ ${selectedCategory.toUpperCase()}**\n\n${randomQuestion.q}\n\n${randomQuestion.options.map((opt, i) => `${i + 1}. ${opt}`).join("\n")}\n\nRéponds avec le numéro (1-4) !`;
    addMessage(quizMessage, "bot");
  }, []);

  // Gestion des réponses quiz
  const handleQuizAnswer = useCallback(
    (answerIndex) => {
      if (!currentQuiz || currentQuiz.answered) return;

      const isCorrect = answerIndex === currentQuiz.question.correct;
      setTotalQuizAnswered((prev) => prev + 1);

      if (isCorrect) {
        setQuizScore((prev) => prev + 1);
        setEgoScore((prev) => Math.min(100, prev + 5));

        const successMsg = `✅ **BRAVO !** ${currentQuiz.question.fact}\n\n${punchlines[Math.floor(Math.random() * punchlines.length)]}\n\nScore: ${quizScore + 1}/${totalQuizAnswered + 1}`;
        addMessage(successMsg, "bot");

        // Badges quiz
        if (quizScore + 1 >= 10) addBadge("quiz-master");
        if (quizScore + 1 >= 30) addBadge("quiz-legend");

        // Badges thématiques
        const categoryBadges = {
          Histoire: "historien",
          Sciences: "scientifique",
          Technologie: "techno",
          Art: "artiste",
          Sport: "sportif",
          Gastronomie: "gastronome",
          Géographie: "geographe",
          Langue: "linguiste",
        };
        if (categoryBadges[currentQuiz.category]) {
          addBadge(categoryBadges[currentQuiz.category]);
        }
      } else {
        setEgoScore((prev) => Math.max(0, prev - 3));
        const failMsg = `❌ **Oups !** La bonne réponse était : ${currentQuiz.question.options[currentQuiz.question.correct]}\n\n${currentQuiz.question.fact}\n\nScore: ${quizScore}/${totalQuizAnswered + 1}`;
        addMessage(failMsg, "bot");
      }

      setCurrentQuiz((prev) => ({ ...prev, answered: true }));
    },
    [currentQuiz, quizScore, totalQuizAnswered],
  );

  // Système de messages
  const addMessage = (text, sender) => {
    setMessages((prev) => [...prev, { text, sender, timestamp: new Date() }]);
  };

  // Système de badges
  const addBadge = (badgeKey) => {
    if (!badges.includes(badgeKey) && allBadges[badgeKey]) {
      setBadges((prev) => [...prev, badgeKey]);
      setPulseAnimation(true);
      setTimeout(() => setPulseAnimation(false), 1000);
    }
  };

  // Synthèse vocale
  const speak = (text) => {
    if (!isSpeaking && "speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = currentLang;
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Message de bienvenue
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = greetings[currentLang];
      addMessage(greeting, "bot");
      speak(greeting);
    }
  }, [isOpen, currentLang]);

  // Scroll automatique
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Gestion des commandes
  const handleSend = () => {
    if (!input.trim()) return;

    const userInput = input.toLowerCase().trim();
    addMessage(input, "user");
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      let response = "";

      // Détection quiz avec catégorie
      if (userInput.includes("quiz")) {
        const categoryMatch = Object.keys(allQuizCategories).find((cat) =>
          userInput.includes(cat.toLowerCase()),
        );
        handleQuiz(categoryMatch);
        setIsLoading(false);
        return;
      }

      // Réponse quiz
      if (currentQuiz && !currentQuiz.answered && /^[1-4]$/.test(userInput)) {
        handleQuizAnswer(parseInt(userInput) - 1);
        setIsLoading(false);
        return;
      }

      // Commandes spéciales
      if (userInput.includes("aide") || userInput.includes("help")) {
        handleAide();
        setIsLoading(false);
        return;
      }

      if (
        userInput.includes("positivité") ||
        userInput.includes("motivation") ||
        userInput.includes("boudoume")
      ) {
        handlePositivite();
        setIsLoading(false);
        return;
      }

      if (
        userInput.includes("boutique") ||
        userInput.includes("shop") ||
        userInput.includes("amazon")
      ) {
        response = knowledgeBase["boutiques"].contenu;
        addBadge("shopper");
      } else if (
        userInput.includes("reussitess") ||
        userInput.includes("projet")
      ) {
        response = knowledgeBase["reussitess"].contenu;
      } else if (
        userInput.includes("guadeloupe") ||
        userInput.includes("dom-tom")
      ) {
        response = knowledgeBase["guadeloupe"].contenu;
      } else if (userInput.includes("badges")) {
        response = `🏆 **TES BADGES (${badges.length}/${Object.keys(allBadges).length})**\n\n${badges
          .map(
            (b) =>
              `${allBadges[b].icon} ${allBadges[b].name}: ${allBadges[b].desc}`,
          )
          .join("\n")}\n\nContinue à explorer pour débloquer plus de badges !`;
      } else if (userInput.includes("score")) {
        response = `📊 **TES STATISTIQUES**\n\n🎯 Score Quiz: ${quizScore}/${totalQuizAnswered}\n💯 Ego Bot: ${egoScore}%\n🏆 Badges: ${badges.length}/${Object.keys(allBadges).length}\n💬 Messages: ${messages.length}\n\n${positiviteMessages[Math.floor(Math.random() * positiviteMessages.length)]}`;
      } else {
        // Recherche dans la base de connaissances
        const foundKey = Object.keys(knowledgeBase).find((key) => {
          const motsCles = knowledgeBase[key].motsCles || "";
          return motsCles
            .split(",")
            .some((mot) => userInput.includes(mot.trim().toLowerCase()));
        });

        if (foundKey) {
          response = knowledgeBase[foundKey].contenu;
        } else {
          response = `${punchlines[Math.floor(Math.random() * punchlines.length)]}\n\nJe n'ai pas d'info spécifique sur "${input}", mais tu peux taper "aide" pour voir mes commandes ou "quiz" pour tester tes connaissances !`;
        }
      }

      addMessage(response, "bot");
      speak(response);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          border: "none",
          boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)",
          cursor: "pointer",
          fontSize: "1.8rem",
          zIndex: 9999,
          transition: "all 0.3s ease",
          animation: pulseAnimation ? "pulse 0.5s" : "none",
        }}
        className="bot-button"
      >
        {isOpen ? "✖️" : "🤖"}
      </button>

      {/* Fenêtre de chat */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "6rem",
            right: "2rem",
            width: "400px",
            maxWidth: "90vw",
            height: "600px",
            maxHeight: "80vh",
            background: "rgba(15, 23, 42, 0.98)",
            backdropFilter: "blur(20px)",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
            zIndex: 9998,
            overflow: "hidden",
          }}
        >
          {/* En-tête */}
          <div
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              padding: "1.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3 style={{ margin: 0, fontSize: "1.2rem", color: "white" }}>
                🤖 REUSSITESS® Bot
              </h3>
              <div
                style={{
                  fontSize: "0.85rem",
                  opacity: 0.9,
                  marginTop: "0.25rem",
                  color: "white",
                }}
              >
                💯 Ego: {egoScore}% | 🏆 {badges.length} badges
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                onClick={() => setShowBadges(!showBadges)}
                style={{
                  background: "rgba(255,255,255,0.2)",
                  border: "none",
                  borderRadius: "8px",
                  padding: "0.5rem",
                  cursor: "pointer",
                  fontSize: "1.2rem",
                }}
              >
                🏆
              </button>
              <select
                value={currentLang}
                onChange={(e) => setCurrentLang(e.target.value)}
                style={{
                  background: "rgba(255,255,255,0.2)",
                  border: "none",
                  borderRadius: "8px",
                  padding: "0.5rem",
                  cursor: "pointer",
                  color: "white",
                  fontSize: "1.2rem",
                }}
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Zone de messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  maxWidth: "80%",
                  padding: "0.75rem 1rem",
                  borderRadius: "12px",
                  background:
                    msg.sender === "user"
                      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                      : "rgba(255, 255, 255, 0.05)",
                  color: "white",
                  whiteSpace: "pre-wrap",
                  wordWrap: "break-word",
                }}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div
                style={{
                  alignSelf: "flex-start",
                  padding: "0.75rem 1rem",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "white",
                }}
              >
                ⏳ Je réfléchis...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Zone de saisie */}
          <div
            style={{
              padding: "1rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              gap: "0.5rem",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Tape 'aide' pour commencer..."
              style={{
                flex: 1,
                padding: "0.75rem",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                background: "rgba(255, 255, 255, 0.05)",
                color: "white",
                outline: "none",
              }}
            />
            <button
              onClick={handleSend}
              style={{
                padding: "0.75rem 1.5rem",
                borderRadius: "10px",
                border: "none",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              ▶️
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        .bot-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(102, 126, 234, 0.6);
        }
      `}</style>
    </>
  );
}
