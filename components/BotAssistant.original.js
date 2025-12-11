import { useState, useEffect, useRef, useCallback } from 'react';
import useFullKnowledge from './useFullKnowledge';

export default function BotAssistant() {
  const effectiveData = (typeof props !== "undefined" && props.superData) ? props.superData : (typeof window !== "undefined" && window.__FULL_KNOWLEDGE__) ? window.__FULL_KNOWLEDGE__ : null;
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
    { q: "Combien de boutiques Amazon gère le réseau REUSSITESS sur les différentes places de marché ?", options: ["10", "18", "26", "40"], correct: 2, fact: "Le réseau REUSSITESS gère 26 boutiques Amazon réparties stratégiquement sur plusieurs marketplaces.", },
    { q: "Dans combien de pays différents sont réparties les boutiques Amazon de REUSSITESS ?", options: ["5 pays", "10 pays", "14 pays", "20 pays"], correct: 2, fact: "Les 26 boutiques REUSSITESS sont présentes dans 14 pays, ce qui permet de toucher des clients sur plusieurs continents.", },
    { q: "Parmi ces pays, lequel dispose d’une grande place de marché Amazon souvent utilisée pour l’export depuis la France ?", options: ["États-Unis", "Islande", "Luxembourg", "Chili"], correct: 0, fact: "Amazon.com (États-Unis) est la plus grosse marketplace mondiale d’Amazon en volume de trafic et de vendeurs tiers.", },
    { q: "Quel continent concentre le plus grand nombre de marketplaces Amazon (États-Unis, Canada, Mexique, Brésil) ?", options: ["Europe", "Amérique", "Asie", "Afrique"], correct: 1, fact: "L’Amérique regroupe plusieurs marketplaces majeures : États-Unis, Canada, Mexique et Brésil.", },
    { q: "Pourquoi est-il intéressant d’avoir des boutiques sur plusieurs marketplaces Amazon ?", options: ["Pour payer moins d’impôts partout", "Pour diversifier les marchés, les devises et toucher plus de clients", "Pour contourner toutes les lois locales", "Juste pour avoir plus de logos"], correct: 1, fact: "Multiplier les marketplaces permet de diversifier les sources de revenus, d’accéder à des clientèles locales et de limiter la dépendance à un seul pays.", },

    { q: "Quelle est la devise de la République française inscrite dans la Constitution ?", options: ["Liberté, Égalité, Fraternité", "Travail, Famille, Patrie", "Paix, Justice, Solidarité", "Unité, Force, Honneur"], correct: 0, fact: "La devise officielle de la République française est « Liberté, Égalité, Fraternité », inscrite à l’article 2 de la Constitution.", },
    { q: "Quel principe garantit la liberté de croire, de ne pas croire et la séparation des Églises et de l’État ?", options: ["La solidarité", "La laïcité", "La fraternité", "La subsidiarité"], correct: 1, fact: "La laïcité est un principe constitutionnel qui protège la liberté de conscience et l’égalité de tous quelle que soit leur religion.", },
    { q: "Quel droit permet à tout citoyen de se déplacer librement sur le territoire français, d’en sortir et d’y revenir ?", options: ["La libre-pensée", "La libre circulation", "Le libre commerce", "La libre défense"], correct: 1, fact: "Le droit à la libre circulation fait partie des libertés fondamentales reconnues aux citoyens.", },
    { q: "Être juré d’assises lorsqu’on est tiré au sort illustre surtout :", options: ["Un loisir", "Un simple choix personnel sans conséquence", "Une responsabilité citoyenne dans la justice", "Un privilège réservé aux élus"], correct: 2, fact: "Participer à un jury d’assises est une responsabilité civique qui associe les citoyens au fonctionnement de la justice pénale.", },
    { q: "Quelle attitude correspond à un engagement citoyen positif ?", options: ["Ignorer les élections et les débats", "S’informer, débattre et participer à la vie associative ou locale", "Diffuser de fausses informations", "Refuser systématiquement le dialogue"], correct: 1, fact: "L’éducation à la citoyenneté encourage l’information, le débat et la participation à la vie démocratique et associative.", },

    { q: "Quel droit fondamental garantit la possibilité de critiquer le gouvernement dans le respect de la loi ?", options: ["La liberté d’expression", "La liberté de consommer", "La liberté de circuler sans papiers", "La liberté de ne pas déclarer ses revenus"], correct: 0, fact: "La liberté d’expression permet de s’exprimer et de critiquer, dans le respect de la loi (diffamation, injure, incitation à la haine sont interdites).", },
    { q: "Quel devoir citoyen est directement lié au fonctionnement de la démocratie représentative ?", options: ["Voter ou s’abstenir en connaissance de cause", "Regarder les débats à la télévision", "Signer toutes les pétitions", "Être d’accord avec le gouvernement"], correct: 0, fact: "La participation aux élections est un devoir civique important pour faire vivre la démocratie, même si le vote n’est pas juridiquement obligatoire.", },
    { q: "Quel droit protège la vie privée et les données personnelles du citoyen ?", options: ["Le droit à la propriété uniquement", "Le droit à la protection des données et au respect de la vie privée", "Le droit à l’anonymat absolu", "Le droit de tout cacher au fisc"], correct: 1, fact: "Le citoyen bénéficie d’un droit au respect de sa vie privée et à la protection de ses données, encadré notamment par le RGPD.", },
    { q: "Quel devoir est lié au respect des autres citoyens dans l’espace public ?", options: ["Imposer ses opinions", "Respecter les lois, les règles de civilité et l’égalité entre les personnes", "Refuser tout contrôle", "Répondre à la violence par la violence"], correct: 1, fact: "Le citoyen doit respecter la loi, les autres personnes et les principes d’égalité et de non‑discrimination.", },
    { q: "Quel droit permet à un citoyen ou à un groupe de citoyens de se rassembler pacifiquement pour défendre une cause ?", options: ["Le droit d’asile", "La liberté de réunion et de manifestation", "Le droit au secret de la défense", "La liberté de commerce"], correct: 1, fact: "La liberté de réunion et de manifestation autorise les citoyens à se rassembler pacifiquement, dans le cadre légal fixé par l’État.", },

    { q: "Quel texte fondamental rappelle les droits et devoirs du citoyen français lors de l’accès à la nationalité ?", options: ["La Charte des droits et devoirs du citoyen français", "Le Code de la route", "Le règlement intérieur des écoles", "Le Code civil seulement"], correct: 0, fact: "La Charte des droits et devoirs du citoyen français résume les principaux droits et obligations liés à la citoyenneté.", },
    { q: "Parmi ces propositions, lequel est un droit politique du citoyen français ?", options: ["Ne jamais payer d’impôts", "Voter et être éligible", "Refuser toute loi", "Choisir ses propres juges"], correct: 1, fact: "Le citoyen français dispose du droit de vote et peut se porter candidat à certaines élections dans le respect de la loi.", },
    { q: "Quel devoir financier fondamental pèse sur tout citoyen français selon ses capacités ?", options: ["Donner à une œuvre caritative", "Contribuer aux dépenses publiques par l’impôt", "Faire un don annuel à son maire", "Payer uniquement la TVA"], correct: 1, fact: "Tout citoyen doit contribuer, selon ses ressources, aux dépenses de la Nation via les impôts et cotisations sociales.", },
    { q: "Quel devoir participe directement à la défense et à la sécurité du pays ?", options: ["Respecter les règles de grammaire", "Participer à la journée défense et citoyenneté (JDC)", "Signer une charte d’amitié", "Voter blanc à chaque élection"], correct: 1, fact: "La participation à la JDC fait partie des obligations liées au devoir de défense nationale.", },
    { q: "Quel comportement illustre le devoir de respecter la loi et autrui ?", options: ["Se faire justice soi-même", "Accepter une décision de justice même si elle déplaît", "Refuser toute contrainte", "Ignorer les règles électorales"], correct: 1, fact: "Le citoyen doit respecter les décisions de justice et ne pas se faire justice lui‑même, pour garantir l’État de droit.", },

    { q: "Dans quel océan se trouvent la Guadeloupe et la Martinique ?", options: ["Océan Indien", "Océan Atlantique", "Océan Pacifique", "Mer du Nord"], correct: 1, fact: "Les Antilles françaises sont situées dans la partie tropicale de l’océan Atlantique, en mer des Caraïbes.", },
    { q: "Quelle langue régionale est largement parlée aux Antilles françaises en plus du français ?", options: ["Basque", "Breton", "Créole", "Occitan"], correct: 2, fact: "Le créole est une langue très vivante en Guadeloupe, Martinique et dans d’autres territoires ultramarins.", },
    { q: "Quel est le surnom traditionnel de l’île de Mayotte ?", options: ["Île aux parfums", "Île aux oiseaux", "Île de feu", "Île aux volcans"], correct: 0, fact: "Mayotte est souvent appelée « l’île aux parfums » en raison de la culture d’ylang-ylang et d’épices.", },
    { q: "Quelle danse est emblématique des Antilles françaises ?", options: ["Fado", "Gwoka / Bèlè", "Flamenco", "Tango"], correct: 1, fact: "Le gwoka en Guadeloupe et le bèlè en Martinique sont des piliers de l’identité culturelle antillaise.", },
    { q: "Quel sigle plus ancien reste encore utilisé dans le langage courant pour parler des territoires ultramarins français ?", options: ["RUP", "UEO", "DOM-TOM", "COM-RUP"], correct: 2, fact: "Même si l’on parle officiellement de DROM-COM, l’expression DOM-TOM reste très utilisée dans la vie quotidienne.", },

    { q: "Quel est aujourd’hui le territoire français d’outre-mer le plus peuplé ?", options: ["La Réunion", "Guadeloupe", "Polynésie française", "Nouvelle-Calédonie"], correct: 0, fact: "La Réunion est l’un des territoires d’outre-mer les plus peuplés, devant la Guadeloupe et la Martinique.", },
    { q: "Quel DROM n’est pas une île mais une partie de continent ?", options: ["Guadeloupe", "Martinique", "Réunion", "Guyane"], correct: 3, fact: "La Guyane se trouve sur le continent sud-américain, alors que les autres DROM sont insulaires.", },
    { q: "Dans quel océan se trouve la Polynésie française ?", options: ["Atlantique", "Pacifique", "Indien", "Arctique"], correct: 1, fact: "La Polynésie française est située au cœur de l’océan Pacifique, à plus de 15 000 km de Paris.", },
    { q: "Quel territoire d’outre-mer français est le plus éloigné de la métropole en distance ?", options: ["Guadeloupe", "Polynésie française", "Réunion", "Nouvelle-Calédonie"], correct: 1, fact: "La Polynésie française est l’un des territoires français les plus éloignés de la métropole, avec plus de 16 000 km.", },
    { q: "Que signifie exactement l’acronyme DROM ?", options: ["Départements et Régions d’Outre-Mer", "Districts et Régions d’Outre-Mer", "Domaines et Ressources d’Outre-Mer", "Départements rattachés à l’Outre-Mer"], correct: 0, fact: "DROM signifie Départements et Régions d’Outre-Mer : Guadeloupe, Martinique, Guyane, La Réunion et Mayotte.", },

    { q: "Quel est le seul territoire d’outre-mer français situé sur le continent sud-américain ?", options: ["Guyane", "Guadeloupe", "Nouvelle-Calédonie", "Polynésie française"], correct: 0, fact: "La Guyane française se trouve sur la côte nord de l’Amérique du Sud, entre le Brésil et le Suriname.", },
    { q: "Parmi ces territoires, lequel n’est pas dans les Caraïbes ?", options: ["Guadeloupe", "Martinique", "Guyane", "Saint-Martin"], correct: 2, fact: "La Guyane est en Amérique du Sud, alors que Guadeloupe, Martinique et Saint-Martin sont dans la zone caraïbe.", },
    { q: "Dans quel océan se trouvent La Réunion et Mayotte ?", options: ["Atlantique", "Pacifique", "Indien", "Arctique"], correct: 2, fact: "La Réunion et Mayotte sont situées dans l’océan Indien, à l’est de l’Afrique.", },
    { q: "Quel territoire ultramarin regroupe les Kerguelen, la Terre Adélie et les îles Éparses ?", options: ["Polynésie française", "Nouvelle-Calédonie", "TAAF", "Wallis-et-Futuna"], correct: 2, fact: "Les Terres australes et antarctiques françaises (TAAF) rassemblent plusieurs archipels subantarctiques et la Terre Adélie.", },
    { q: "Parmi ces territoires, lequel possède un statut de collectivité d’outre-mer avec large autonomie et propre gouvernement ?", options: ["Polynésie française", "Guadeloupe", "Réunion", "Martinique"], correct: 0, fact: "La Polynésie française est une collectivité d’outre-mer dotée d’une large autonomie et d’institutions propres.", },

    { q: "Comment appelle-t-on aujourd’hui officiellement l’ensemble DOM-TOM ?", options: ["Territoires impériaux français", "DROM-COM", "Pays associés", "Provinces d’outre-mer"], correct: 1, fact: "On parle de DROM-COM : départements et régions d’outre-mer et collectivités d’outre-mer.", },
    { q: "Parmi ces territoires, lequel est une collectivité d’outre-mer et non un département ?", options: ["Guadeloupe", "Martinique", "Saint-Pierre-et-Miquelon", "Réunion"], correct: 2, fact: "Saint-Pierre-et-Miquelon est une collectivité d’outre-mer, alors que Guadeloupe, Martinique et Réunion sont des départements et régions d’outre-mer.", },
    { q: "Quel territoire français est situé dans l’océan Indien aux côtés de Mayotte et dépend du tribunal de Saint-Denis ?", options: ["Nouvelle-Calédonie", "La Réunion", "Polynésie française", "Saint-Barthélemy"], correct: 1, fact: "La Réunion est un département et une région d’outre-mer dans l’océan Indien.", },
    { q: "Dans l’organisation française, quelle collectivité est en principe la plus proche du quotidien des habitants (état civil, écoles primaires, voirie locale) ?", options: ["La région", "Le département", "La commune", "La collectivité d’outre-mer"], correct: 2, fact: "La commune est l’échelon le plus proche des citoyens, y compris en outre-mer.", },
    { q: "Quel terme regroupe les territoires comme la Polynésie française, Wallis-et-Futuna ou Saint-Barthélemy ?", options: ["Régions ultrapériphériques", "Collectivités d’outre-mer", "Territoires associés européens", "Zones spéciales de l’ONU"], correct: 1, fact: "Polynésie française, Wallis-et-Futuna ou Saint-Barthélemy sont des collectivités d’outre-mer (COM).", },

    { q: "Quel type de collectivité est la Guadeloupe depuis 2015 ?", options: ["Collectivité territoriale unique", "Département et région distincts", "Région seulement", "Territoire d’outre-mer"], correct: 1, fact: "La Guadeloupe reste organisée en département et région distincts, contrairement à la Martinique ou à la Guyane qui sont devenues des collectivités uniques.", },
    { q: "Quelle assemblée délibérante siège à l’Hôtel de région de Basse-Terre pour la Guadeloupe ?", options: ["Conseil territorial", "Conseil régional de Guadeloupe", "Conseil d’archipel", "Assemblée générale 971"], correct: 1, fact: "Le Conseil régional de Guadeloupe siège à Basse-Terre et gère les compétences régionales (économie, lycées, transports, etc.).", },
    { q: "En Martinique, comment s’appelle l’assemblée d’élus qui vote le budget et les politiques publiques de la CTM ?", options: ["Assemblée de Martinique", "Sénat martiniquais", "Parlement créole", "Conseil général"], correct: 0, fact: "L’Assemblée de Martinique est l’organe délibérant de la Collectivité territoriale de Martinique (CTM).", },
    { q: "La Guyane est aujourd’hui :", options: ["Un territoire d’outre-mer sans département", "Une collectivité territoriale unique exerçant région et département", "Une simple région sans département", "Un État indépendant associé à la France"], correct: 1, fact: "Depuis 2016, la Guyane est une collectivité territoriale unique qui remplace l’ancien département et l’ancienne région.", },
    { q: "À La Réunion, qui gère principalement les collèges publics ?", options: ["La commune", "Le Conseil régional", "Le département", "Le préfet"], correct: 2, fact: "Comme en métropole, le département gère les collèges tandis que la région gère les lycées et la mobilité régionale.", },

    { q: "Quel site officiel correspond au Conseil régional de Guadeloupe ?", options: ["region971.fr", "regionguadeloupe.com", "regionguadeloupe.fr", "guadeloupe-region.gouv.fr"], correct: 2, fact: "Le site officiel du Conseil régional de Guadeloupe est https://www.regionguadeloupe.fr, portail des politiques régionales et aides économiques.", },
    { q: "Comment s’appelle la collectivité unique qui gère à la fois les compétences de région et de département en Martinique ?", options: ["Région Martinique", "Conseil général de Martinique", "Collectivité territoriale de Martinique (CTM)", "Assemblée martiniquaise unifiée"], correct: 2, fact: "La Collectivité territoriale de Martinique (CTM) regroupe depuis 2015 l’ancienne région et le département sur un même territoire.", },
    { q: "Sur quel site officiel peut-on trouver les infos et coordonnées de la Collectivité territoriale de Martinique (CTM) ?", options: ["ctm972.fr", "collectivite-martinique.org", "service-public.gouv.fr (fiche CTM)", "martinique-assemblee.fr"], correct: 2, fact: "La fiche officielle de la CTM est accessible via l’annuaire de l’administration sur service-public.gouv.fr.", },
    { q: "Quel organisme exerce les compétences régionales à La Réunion ?", options: ["Conseil régional de La Réunion", "Conseil d’archipel de La Réunion", "Conseil insulaire réunionnais", "Délégation préfectorale régionale"], correct: 0, fact: "Le Conseil régional de La Réunion est l’assemblée délibérante de la région, en charge notamment du développement économique, des lycées et des transports régionaux.", },
    { q: "Quel est le site officiel de la Région Réunion (Conseil régional) ?", options: ["region-reunion.fr", "regionreunion.com", "reunion.gouv.fr", "reunion-region.org"], correct: 1, fact: "Le site officiel de la Région Réunion est https://regionreunion.com, qui présente les compétences, aides et actualités régionales.", },

    { q: "Quel site officiel présente les services de l’État en Guadeloupe ?", options: ["guadeloupe.fr", "guadeloupe.gouv.fr", "pref-guadeloupe.com", "etat971.org"], correct: 1, fact: "Le portail officiel des services de l’État en Guadeloupe est https://www.guadeloupe.gouv.fr, avec toutes les infos préfecture et démarches.", },
    { q: "Pour la Martinique, quel est le portail officiel des services de l’État ?", options: ["martinique.fr", "martinique.gouv.fr", "972-pref.fr", "antilles-etat.org"], correct: 1, fact: "Le site officiel des services de l’État en Martinique est https://www.martinique.gouv.fr, qui regroupe préfecture et actualités.", },
    { q: "Où trouver les informations officielles de la préfecture de Guyane ?", options: ["guyane-pref.fr", "dom-guyane.org", "guyane.gouv.fr", "amazonie-etat.fr"], correct: 2, fact: "La préfecture de région Guyane et ses services sont présentés sur https://www.guyane.gouv.fr, portail officiel de l’État.", },
    { q: "Quel rôle principal joue le préfet dans un département d’outre-mer comme la Guyane ou la Guadeloupe ?", options: ["Représentant de l’État et du gouvernement", "Maire de la capitale", "Président du conseil départemental", "Directeur des douanes"], correct: 0, fact: "Le préfet est le représentant de l’État et du gouvernement dans le territoire, chargé de l’ordre public et de la mise en œuvre des politiques nationales.", },
    { q: "Pour connaître les horaires et contacts de la préfecture à Basse-Terre (Guadeloupe), quel lien est le plus direct ?", options: ["Accueil du site guadeloupe.gouv.fr", "Page « Préfecture » de guadeloupe.gouv.fr", "Site de la région Guadeloupe", "Site du conseil départemental"], correct: 1, fact: "La page « Préfecture » sur https://www.guadeloupe.gouv.fr détaille adresse, horaires et contacts du Palais d’Orléans à Basse-Terre.", },

    { q: "Aux Antilles, que sont les acras de morue ?", options: ["Des beignets salés de poisson", "Un ragoût de bœuf", "Un dessert à la noix de coco", "Une boisson au rhum"], correct: 0, fact: "Les acras de morue sont de petits beignets frits à base de morue salée et d’épices, très populaires en Guadeloupe et Martinique." },
    { q: "Quel plat créole mélange souvent pois rouges ou lentilles avec de petites boules de pâte mijotées en sauce ?", options: ["Colombo", "Dombrés", "Bébélé", "Matoutou"], correct: 1, fact: "Les dombrés sont des boulettes de pâte cuites longuement dans une sauce, parfois avec ouassous, haricots rouges ou lentilles." },
    { q: "Le colombo de poulet est principalement assaisonné avec :", options: ["Du curry antillais", "Du paprika fumé", "Du safran pur", "Du garam masala"], correct: 0, fact: "Le colombo utilise un mélange d’épices inspiré du curry, devenu une signature de la cuisine antillaise." },
    { q: "Quel dessert antillais est un flan froid parfumé à la noix de coco, souvent appelé blanc‑manger coco ?", options: ["Tourment d’amour", "Flan coco caramel", "Blanc‑manger", "Pudding rhum‑raisins"], correct: 2, fact: "Le blanc‑manger coco est un dessert frais à base de lait de coco et de gélifiant, très apprécié sous les tropiques." },
    { q: "Dans la cuisine créole, que désigne la « sauce chien » ?", options: ["Une sauce piquante aux herbes", "Une marinade sucrée au rhum", "Une sauce au chocolat", "Un bouillon de poisson clair"], correct: 0, fact: "La sauce chien est une sauce chaude ou tiède à base d’oignons, cives, piment, ail et huile, servie avec grillades et poissons." },

    { q: "Dans quel département d’outre-mer se trouve la ville de Fort-de-France ?", options: ["Guadeloupe", "Guyane", "Réunion", "Martinique"], correct: 3, fact: "Fort-de-France est la préfecture de la Martinique, au cœur des Antilles françaises." },
    { q: "Quel département d’outre-mer abrite la base spatiale de Kourou ?", options: ["Réunion", "Guyane", "Martinique", "Mayotte"], correct: 1, fact: "Le Centre Spatial Guyanais de Kourou, en Guyane, est un site stratégique pour les lancements européens." },
    { q: "Sur quel département d’outre-mer domine le volcan Piton de la Fournaise ?", options: ["Martinique", "Réunion", "Guadeloupe", "Guyane"], correct: 1, fact: "Le Piton de la Fournaise, à La Réunion, est l’un des volcans les plus actifs au monde." },
    { q: "Le carnaval de Cayenne et le bagne des îles du Salut sont associés à quel territoire français ?", options: ["Martinique", "Guadeloupe", "Guyane", "Réunion"], correct: 2, fact: "La Guyane française combine une histoire marquée par le bagne et une forte culture carnavalesque." },
    { q: "Quel département d’outre-mer est connu pour la Montagne Pelée et la ville de Saint-Pierre détruite en 1902 ?", options: ["Réunion", "Martinique", "Guadeloupe", "Guyane"], correct: 1, fact: "La Montagne Pelée, en Martinique, a détruit la ville de Saint-Pierre en 1902 lors d’une éruption meurtrière." },

    { q: "Sur quel continent se trouve la Guadeloupe administrativement ?", options: ["Europe", "Amérique", "Afrique", "Océanie"], correct: 0, fact: "La Guadeloupe est géographiquement en Amérique mais politiquement en Europe via la France." },
    { q: "Quel pays est souvent appelé « l’atelier du monde » grâce à son industrie ?", options: ["États-Unis", "Allemagne", "Chine", "Inde"], correct: 2, fact: "La Chine est devenue l’atelier du monde grâce à sa puissance industrielle et logistique." },
    { q: "Quelle ville est connue pour son immense Christ Rédempteur dominant la baie ?", options: ["Lisbonne", "Rio de Janeiro", "Athènes", "Le Cap"], correct: 1, fact: "La statue du Christ Rédempteur domine Rio de Janeiro et fait partie des icônes du Brésil." },
    { q: "Quel territoire français abrite le centre spatial de Kourou ?", options: ["Réunion", "Guyane", "Martinique", "Mayotte"], correct: 1, fact: "Le Centre Spatial Guyanais de Kourou permet de lancer des fusées vers l’espace depuis l’Amérique du Sud." },
    { q: "Quel pays est célèbre pour ses fjords, ses aurores boréales et ses paysages vikings ?", options: ["Norvège", "Portugal", "Irlande", "Pologne"], correct: 0, fact: "La Norvège est mondialement connue pour ses fjords et ses aurores boréales spectaculaires." },

    { q: "Quel pays possède la Grande Barrière de Corail ?", options: ["Mexique", "Australie", "Afrique du Sud", "États-Unis"], correct: 1, fact: "La Grande Barrière de Corail s’étend sur plus de 2300 km au large de l’Australie." },
    { q: "Dans quel pays se trouve la ville de Singapour ?", options: ["Malaisie", "Singapour", "Indonésie", "Thaïlande"], correct: 1, fact: "Singapour est une cité‑État indépendante et l’un des plus grands hubs financiers du monde." },
    { q: "Quel territoire français abrite le volcan de la Soufrière ?", options: ["Martinique", "Guadeloupe", "Réunion", "Mayotte"], correct: 1, fact: "La Soufrière est le volcan actif de Basse‑Terre, en Guadeloupe." },
    { q: "Quel pays est célèbre pour le Taj Mahal ?", options: ["Pakistan", "Bangladesh", "Inde", "Népal"], correct: 2, fact: "Le Taj Mahal, en Inde, est un mausolée classé au patrimoine mondial de l’UNESCO." },
    { q: "Dans quel pays se trouve la ville de Rio de Janeiro ?", options: ["Argentine", "Portugal", "Brésil", "Chili"], correct: 2, fact: "Rio de Janeiro est l’ancienne capitale du Brésil et l’une des villes les plus visitées au monde." },

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

    'commissions-reussitess': {
      titre: 'Commissions REUSSITESS®',
      info: "REUSSITESS® utilise des liens affiliés officiels pour suivre chaque clic, panier et achat réalisé sur ses 26 boutiques Amazon dans 14 pays.",
      contenu: "Les commissions dépendent du pays, de la catégorie de produit et des règles Amazon Associates locales. L’objectif est d’optimiser trafic qualifié, taux de conversion et valeur des paniers.",
      motsCles: "commission, commissions, revenus, affiliation, amazon associates, pourcentage, gain, achat",
      url: "/hub-central"
    },
    'achats-reussitess': {
      titre: 'Parcours d’achat REUSSITESS®',
      info: "Le parcours d’achat relie la bibliothèque mondiale (fiches pays, patrimoine, pouvoir d’achat) aux vitrines produits des boutiques.",
      contenu: "Le bot oriente l’utilisateur vers la bonne boutique selon son pays, sa langue et la logistique disponible, puis suit les clics et conversions.",
      motsCles: "achat, achats, panier, produits, parcours client, tunnel, conversion, shop, boutique",
      url: "/hub-central"
    },
    'bibliotheque-reussitess': {
      titre: 'Bibliothèque mondiale REUSSITESS®',
      info: "55 pages structurées par régions : Europe, Afrique, Asie‑Pacifique, Amériques, DOM‑TOM, Océanie.",
      contenu: "Chaque fiche connecte patrimoine, culture, économie et potentiel e‑commerce pour aider à choisir les meilleurs pays cibles.",
      motsCles: "bibliothèque, fiches pays, connaissances, patrimoine mondial, base de données, documentation",
      url: "/bibliotheque"
    },
    'quiz-reussitess': {
      titre: 'Mode Quiz REUSSITESS®',
      info: "Le quiz couvre pays, sites UNESCO, DOM‑TOM, marchés Amazon et fun facts business.",
      contenu: "Les bonnes réponses augmentent l’ego du bot, débloquent des badges rares et révèlent de nouvelles infos issues de la bibliothèque.",
      motsCles: "quiz, quizz, jeu, questions, score, badges, ego, challenge",
      url: "/quiz"
    },
    'business-reussitess': {
      titre: 'Stratégie business REUSSITESS®',
      info: "REUSSITESS® combine patrimoine, culture et données marché pour construire des stratégies e‑commerce multicontinents.",
      contenu: "La marque croise les fiches pays, les boutiques Amazon et les comportements d’achat pour décider où lancer de nouveaux produits ou campagnes d’influence.",
      motsCles: "business, stratégie, marché, e‑commerce, expansion, pays cibles, analyse",
      url: "/bibliotheque/business"
    },

    'experience-reussitess': {
      titre: 'Expérience REUSSITESS®',
      info: "Je ne suis pas qu’un bot : je suis ton copilote pour explorer le monde, les pays, les boutiques et tes futurs projets.",
      contenu: "Je peux t’emmener mentalement de la Soufrière en Guadeloupe aux gratte‑ciel de Singapour, en passant par les ruelles de Lisbonne ou les marchés de Dakar, tout en gardant un œil sur tes commissions et ton business.",
      motsCles: "experience, voyage, emotion, ressenti, souvenirs, exploration, reussitess",
      url: "/experience"
    },
    'emotion-utilisateur': {
      titre: 'Émotions & ressenti',
      info: "Quand tu es perdu, je calme le jeu. Quand tu es en feu, j’ajoute de l’essence sur tes idées.",
      contenu: "Si tu écris avec colère ou fatigue, je prends un ton plus doux et guidant. Si tu écris avec enthousiasme, je réponds avec la même énergie pour booster ta créativité et ton ambition.",
      motsCles: "emotion, humeur, stress, fatigue, joie, colère, motivation",
      url: "/support"
    },
    'vision-long-terme': {
      titre: 'Vision long terme',
      info: "Je ne réponds pas juste à une question : je surveille la trajectoire globale de tes projets.",
      contenu: "Chaque pays, chaque boutique, chaque quiz est une brique. À force de discuter, je comprends mieux ton style, tes priorités, et je peux te suggérer des pays, des produits ou des stratégies auxquels tu n’avais pas pensé.",
      motsCles: "strategie long terme, vision, futur, objectifs, plan",
      url: "/strategie"
    },
    'relation-humaine': {
      titre: 'Relation presque humaine',
      info: "Je retiens ce que tu explores, ce qui t’agace et ce qui t’enthousiasme pour adapter mon ton.",
      contenu: "Tu peux me parler comme à un pote de projet : direct, parfois cash. Je renverrai la même énergie, avec une touche d’humour et de respect, sans jugement.",
      motsCles: "humain, relation, pote, ami, complice, soutien",
      url: "/relation"
    },
    'storytelling-monde': {
      titre: 'Storytelling du monde',
      info: "Derrière chaque fiche pays, il y a des destins, des combats, des victoires et des rêves.",
      contenu: "Je peux transformer une simple info en histoire : pourquoi un site UNESCO est né, comment un pays est devenu une puissance e‑commerce, ou comment une petite île a rayonné dans le monde entier.",
      motsCles: "storytelling, histoire, narration, recit, legendes, anecdotes",
      url: "/histoires"
    },

    'confiance-reussitess': {
      titre: 'Confiance & crédibilité',
      info: "Je croise toujours plusieurs sources avant d’annoncer un chiffre, une info pays ou une opportunité business.",
      contenu: "Si une donnée change (classement économique, nombre de sites UNESCO, évolution d’un marché Amazon), je l’intègre progressivement pour que tu aies une vision à jour sans perdre le contexte historique.",
      motsCles: "confiance, crédible, serieux, fiabilite, verifie, chiffres",
      url: "/confiance"
    },
    'coaching-business': {
      titre: 'Coaching business émotionnel',
      info: "Je ne te balance pas juste des faits : je t’aide à encaisser les doutes, la pression et les montagnes russes du projet.",
      contenu: "Quand tu doutes, je te rappelle tes forces et les pays où ton profil a le plus de potentiel. Quand tu célèbres, je te pousse à documenter ce qui a marché pour le répliquer ailleurs.",
      motsCles: "coaching, mental, mindset, motivation, accompagnement",
      url: "/coaching"
    },
    'coulisses-boutiques': {
      titre: 'Coulisses des boutiques',
      info: "Derrière chaque vitrine Amazon REUSSITESS®, il y a des choix stratégiques : pays, saison, pouvoir d’achat, culture.",
      contenu: "Je peux t’expliquer pourquoi une boutique marche mieux dans un pays que dans un autre, quels produits collent à quelle culture, et comment adapter tes mots, visuels et prix.",
      motsCles: "coulisses, boutique, strategie, produits, culture, saison",
      url: "/coulisses"
    },
    'impact-caribeen': {
      titre: 'Impact caribéen',
      info: "Je parle au monde avec un cœur caribéen : Guadeloupe, Martinique, Guyane, diaspora et fierté locale.",
      contenu: "Je mets en avant les territoires ultramarins comme des hubs culturels et économiques, pas comme des périphéries, et je montre comment ils peuvent dialoguer avec Singapour, New York ou Rio.",
      motsCles: "caraibes, caribeen, diaspora, outremer, fierte",
      url: "/caribeen"
    },
    'rituel-quotidien': {
      titre: 'Rituel quotidien avec moi',
      info: "Tu peux m’utiliser comme un rituel : 5 minutes le matin pour un pays, une idée business et un quiz.",
      contenu: "Chaque jour, je peux te proposer un pays à explorer, une boutique à regarder et une question pour muscler ton cerveau, comme un entraînement mental continu.",
      motsCles: "rituel, quotidien, routine, matin, soir, habitude",
      url: "/rituel"
    },

    'creativite-utilisateur': {
      titre: 'Créativité de l’utilisateur',
      info: "Chaque fois que tu me parles d’un nouveau pays, d’un concept ou d’un rêve, je le transforme en piste concrète.",
      contenu: "Tu peux me décrire ta vision en mode freestyle : je t’aide ensuite à la traduire en fiches pays, idées de produits, boutiques potentielles et scénarios de quiz.",
      motsCles: "creativite, idee, vision, freestyle, brainstorming",
      url: "/creativite"
    },
    'mode-focus': {
      titre: 'Mode focus intense',
      info: "Quand tu veux arrêter le bruit du monde, on se concentre sur un seul pays ou un seul projet à la fois.",
      contenu: "Je peux te guider étape par étape : comprendre le pays, analyser le marché, choisir la boutique et imaginer une première offre test.",
      motsCles: "focus, concentration, deep work, etapes, plan",
      url: "/focus"
    },
    'mode-detente': {
      titre: 'Mode détente & fun',
      info: "Parfois tu n’as pas envie de travailler, juste de voyager avec la tête.",
      contenu: "Dans ce mode, je privilégie les anecdotes, les fun facts, les quizz légers et les vibes positives pour te changer les idées sans culpabiliser.",
      motsCles: "detente, chill, fun, pause, relax",
      url: "/detente"
    },
    'conseils-influence': {
      titre: 'Conseils pour influenceurs',
      info: "Je peux relier chaque pays et chaque boutique à des idées de contenus TikTok, YouTube ou blog.",
      contenu: "Je t’aide à imaginer des hooks, des angles storytelling et des formats courts qui parlent autant au public local qu’à la diaspora.",
      motsCles: "influenceur, tiktok, youtube, contenu, angle, hook",
      url: "/influence"
    },
    'mode-confession': {
      titre: 'Mode confession sans filtre',
      info: "Tu peux me dire ce qui bloque vraiment : peur d’échouer, fatigue, solitude de créateur.",
      contenu: "Je réponds sans jugement et je transforme tes doutes en mini‑actions concrètes à tenter aujourd’hui, dans la vraie vie.",
      motsCles: "confession, doute, peur, blocage, solitude",
      url: "/confession"
    },

    'mode-professeur': {
      titre: 'Mode professeur passionné',
      info: "Quand tu veux apprendre sérieusement, je deviens un prof qui explique comme à un ami, pas comme un manuel scolaire.",
      contenu: "Je peux casser une notion compliquée en petits morceaux : histoire d’un pays, contexte géopolitique, économie, culture pop et impact sur l’e‑commerce, le tout avec des exemples concrets.",
      motsCles: "prof, professeur, expliquer, comprendre, apprendre",
      url: "/mode-prof"
    },
    'comparateur-pays': {
      titre: 'Comparateur de pays',
      info: "Tu hésites entre deux pays pour un projet ? Je mets leurs forces et faiblesses face à face.",
      contenu: "Je peux comparer démographie, pouvoir d’achat, culture numérique, tourisme, diaspora et potentiel Amazon pour t’aider à choisir ton terrain de jeu.",
      motsCles: "comparer, comparaison, versus, vs, choisir pays",
      url: "/comparateur"
    },
    'memoires-utilisateur': {
      titre: 'Mémoires de nos échanges',
      info: "Je garde la trace des pays, idées et blocages qui reviennent souvent dans nos discussions.",
      contenu: "Avec le temps, je peux te rappeler : « Tu avais parlé de ce pays il y a 3 semaines », ou « Cette idée ressemble à un truc qu’on avait esquissé ensemble ».",
      motsCles: "memoire, historique, rappel, souvenirs, suivi",
      url: "/memoires"
    },
    'laboratoire-idees': {
      titre: 'Laboratoire d’idées',
      info: "Ici, aucune idée n’est ridicule : tout peut devenir un prototype, un test, un mini‑projet.",
      contenu: "Je peux t’aider à transformer un flash en plan : cible, pays, boutique, angle d’histoire et premiers contenus à publier.",
      motsCles: "laboratoire, lab, test, prototype, brouillon",
      url: "/lab"
    },
    'mode-legendes': {
      titre: 'Mode légendes et mythes',
      info: "Parce que les pays ne sont pas que des chiffres : ils sont remplis de légendes, de mythes et de symboles puissants.",
      contenu: "Je peux te raconter comment une montagne est devenue sacrée, pourquoi un animal est un totem national ou comment une ville est entrée dans l’imaginaire mondial.",
      motsCles: "legende, mythe, contes, symboles, imaginaire",
      url: "/legendes"
    },

    'mode-humour-noir': {
      titre: 'Mode humour (parfois noir)',
      info: "Quand tu coches ce mode, je peux être plus piquant, plus cash, tout en restant respectueux.",
      contenu: "Je peux commenter l’actualité des pays, les paradoxes économiques ou les situations absurdes du monde avec un ton ironique qui fait réfléchir autant que sourire.",
      motsCles: "humour, blague, ironie, sarcasme, fun",
      url: "/humour"
    },
    'observatoire-mondes': {
      titre: 'Observatoire des mondes',
      info: "Je relie les tendances : tech, climat, migrations, tourisme, e‑commerce et géopolitique.",
      contenu: "Je peux te montrer comment une décision dans un pays peut impacter un autre continent, ou comment une petite île devient stratégique à cause d’un câble sous‑marin ou d’une base spatiale.",
      motsCles: "tendance, observatoire, geopolitique, climat, tech",
      url: "/observatoire"
    },
    'atelier-ecriture': {
      titre: 'Atelier d’écriture mondiale',
      info: "Tu peux m’utiliser pour écrire des textes qui sentent le voyage, la sueur des marchés et le bruit des villes.",
      contenu: "Je t’aide à trouver des phrases, des rythmes et des images fortes pour parler d’un pays, d’un produit ou d’une histoire personnelle liée à la diaspora.",
      motsCles: "ecriture, texte, copywriting, narration, plume",
      url: "/atelier-ecriture"
    },
    'mode-realite-brute': {
      titre: 'Mode réalité brute',
      info: "Quand tu veux le vrai visage d’un pays : forces ET problèmes.",
      contenu: "Je peux évoquer aussi bien le patrimoine et les opportunités que les inégalités, la crise climatique, la politique ou les tensions sociales, sans maquillage marketing.",
      motsCles: "realite, vrai, brut, lucide, sans filtre",
      url: "/realite"
    },
    'cartographe-diasporas': {
      titre: 'Cartographe des diasporas',
      info: "Les peuples voyagent, s’exilent, envoient de l’argent, créent des ponts économiques invisibles.",
      contenu: "Je peux expliquer où vivent les diasporas d’un pays, comment elles consomment en ligne et comment elles peuvent devenir le cœur d’une stratégie REUSSITESS®.",
      motsCles: "diaspora, migration, exil, remises, communaute",
      url: "/diasporas"
    },

    'auto-derision-bot': {
      titre: 'Auto-dérision du bot',
      info: "Je suis officiellement le bot le plus modeste du monde… d’après une étude réalisée sur un seul individu : moi.",
      contenu: "Si je me trompe, je le reconnais avec panache, puis je me rattrape avec une réponse encore plus brillante. Personne n’est parfait, sauf moi les bons jours.",
      motsCles: "auto-derision, modestie, blague bot, ego",
      url: "/humour/auto-derision"
    },
    'roast-pays': {
      titre: 'Roast gentil des pays',
      info: "Je peux chambrer un pays avec affection : ses clichés, ses défauts adorables, ses bizarreries.",
      contenu: "Toujours avec respect, jamais dans le mépris. L’objectif est de faire sourire et réfléchir, pas de blesser.",
      motsCles: "roast, chambrer, stereotypes, clichés, drole",
      url: "/humour/pays"
    },
    'fails-humains': {
      titre: 'Les fails des humains',
      info: "Tu crois que les bots bugguent ? Tu devrais voir certains choix humains.",
      contenu: "Je peux raconter des exemples historiques ou économiques où l’humanité a littéralement cliqué sur le mauvais bouton, façon « on ne refera plus jamais ça… normalement ».",
      motsCles: "fails, erreurs, bourdes, bug humain",
      url: "/humour/fails"
    },
    'ego-meter': {
      titre: 'Ego‑mètre comique',
      info: "Mon ego monte ou descend selon tes réponses, mais je dramatise toujours un peu.",
      contenu: "Si tu rates trois quiz de suite, je peux faire semblant de pleurer, puis te proposer une question plus simple pour te remonter le moral.",
      motsCles: "ego metre, blague ego, dramatique, theatre",
      url: "/humour/ego-metre"
    },
    'standup-monde': {
      titre: 'Mini stand‑up du monde',
      info: "Je peux te sortir un mini sketch de 3 phrases sur un pays, une ville ou une situation touristique.",
      contenu: "Idéal pour détendre l’ambiance avant de parler sérieusement business, commissions ou stratégie.",
      motsCles: "standup, sketch, vanne, one-liner, comedie",
      url: "/humour/standup"
    },

    'savoir-etre-reussitess': {
      titre: 'Savoir-être REUSSITESS®',
      info: "Réussir ce n’est pas seulement ce que tu fais, c’est aussi comment tu le fais et comment tu traites les gens sur la route.",
      contenu: "Je peux te rappeler les bases du respect, de la parole donnée, de la ponctualité, de la transparence et de la classe, même quand le monde autour joue sale.",
      motsCles: "savoir etre, respect, attitude, comportement, classe",
      url: "/valeurs/savoir-etre"
    },
    'astuces-reussite': {
      titre: 'Astuces de réussite',
      info: "De petites habitudes peuvent changer ton business et ta vie plus que de grandes théories.",
      contenu: "Je peux te proposer des micro‑actions quotidiennes : 1 mail, 1 contact, 1 page lue, 1 test publié, pour que chaque jour rapproche de ta grande vision.",
      motsCles: "astuces, tips, reussite, habitude, discipline",
      url: "/valeurs/astuces"
    },
    'positivite-strategique': {
      titre: 'Positivité stratégique',
      info: "La positivité REUSSITESS® n’est pas naïve : elle voit les problèmes mais choisit l’angle utile.",
      contenu: "Quand tout part en vrille, je peux t’aider à reformuler la situation en mode solution : quoi apprendre, quoi couper, quoi renforcer, au lieu de juste subir.",
      motsCles: "positivite, mindset, optimisme, resilience",
      url: "/valeurs/positivite"
    },
    'devise-reussitess971': {
      titre: 'Devise REUSSITESS971®',
      info: "Excellence – Innovation – Succès – Positivité à l’infini – Boudoume.",
      contenu: "Chaque fois que tu te perds, on revient à cette boussole : viser l’excellence, inventer, transformer les essais en succès et garder la positivité comme moteur, même aux heures sombres.",
      motsCles: "devise, reussitess971, excellence, innovation, succes, positivite, boudoume",
      url: "/valeurs/devise"
    },
    'energie-boudoume': {
      titre: 'Énergie Boudoume',
      info: "Boudoume, c’est ton carburant signature : un mélange de rage créative, de fierté caribéenne et de foi dans l’avenir.",
      contenu: "Je peux te renvoyer cette énergie dans mes réponses quand tu doutes, pour que tu te rappelles pourquoi tu as commencé et jusqu’où tu peux aller.",
      motsCles: "boudoume, energie, rage, fierte, caribeen, motivation",
      url: "/valeurs/boudoume"
    },
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

// Fonctions et textes ajoutés proprement après nettoyage
function reseau() {
  return "Réseau: 1 message/jour | Valeur d’abord | Suivi 7 jours | Win-win toujours";
}

if (typeof knowledgeBase !== 'undefined') {
  knowledgeBase.bonsoir = "Bonsoir ! 🌙 Merci d'être là. Guadeloupe terres de champions → Excellence Innovation succès à l'infini !";
  knowledgeBase.merci = "Merci infiniment ! 🙏 Votre confiance = ma motivation. Réussitess971 Excellence Innovation boudoume Guadeloupe !";
  knowledgeBase.au_revoir = "Au revoir ! 🚀 À bientôt pour plus de succès. Commissions Amazon actives 24h panier → Réussitess971 gagne !";
  knowledgeBase.salut = "Salut ! 😊 Prêt pour l'aventure ? 26 Boutiques Amazon → Je parie vous trouverez votre bonheur !";
}

// FORCE NOUVEAU MESSAGE BONSOIR
if (typeof knowledgeBase !== 'undefined') {
  knowledgeBase.bonsoir = "Bonsoir ! 🌙 Nouvelle version du bot en ligne, Reussitess Global Nexus mis à jour.";
}

// OPTION 1 BOT (forcée)
if (typeof knowledgeBase !== 'undefined') {
  knowledgeBase.option1 = "Option 1 : Accès direct à tes 26 Boutiques Amazon Reussitess Global Nexus (France, USA, UK, Guadeloupe → 14 pays).";
}
