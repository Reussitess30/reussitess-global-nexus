'use client';
import { useState, useEffect, useRef } from 'react';

export default function BotAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentLang, setCurrentLang] = useState('fr-FR');
  const [userName, setUserName] = useState('');
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
    'fr-FR': 'Salut ! Je m\'appelle Alex, et franchement, je suis super content de vous rencontrer. Je suis passionné de culture et de voyages depuis toujours. RÉUSSITESS, c\'est vraiment mon projet coup de cœur - une plateforme qui réunit 62 pages sur le patrimoine de 5 continents, 26 boutiques Amazon, et 5 innovations mondiales UNIQUES que vous ne trouverez nulle part ailleurs ! Parlez-moi comme à un ami. Qu\'est-ce qui vous intéresse ?',
    'en-US': 'Hey! I\'m Alex, genuinely passionate about world culture. RÉUSSITESS is my dream project - 62 heritage pages, 26 Amazon stores, and 5 unique innovations. Ask me anything!',
    'es-ES': '¡Hola! Soy Alex, apasionado por la cultura mundial. RÉUSSITESS tiene 62 páginas, 26 tiendas y 5 innovaciones únicas. ¡Pregúntame!',
    'de-DE': 'Hallo! Ich bin Alex, Kultur-Enthusiast. RÉUSSITESS hat 62 Seiten, 26 Shops und 5 einzigartige Innovationen!',
    'it-IT': 'Ciao! Sono Alex, appassionato di cultura. RÉUSSITESS ha 62 pagine, 26 negozi e 5 innovazioni uniche!',
    'pt-BR': 'Oi! Sou Alex, apaixonado por cultura. RÉUSSITESS tem 62 páginas, 26 lojas e 5 inovações únicas!'
  };

  // BASE DE CONNAISSANCES EXHAUSTIVE - TOUT LE PROJET
  const KNOWLEDGE_BASE = {
    
    // 5 INNOVATIONS MONDIALES UNIQUES
    innovations: {
      culturalDNA: {
        nom: 'CULTURAL DNA MATCH',
        emoji: '🧬',
        tagline: 'Votre ADN culturel personnel basé sur vos ancêtres',
        description: `CULTURAL DNA MATCH est une innovation MONDIALE EXCLUSIVE qui trace votre héritage culturel complet sur 10 générations et crée votre "passeport culturel personnel".

**COMMENT ÇA MARCHE:**
Vous entrez les origines de vos parents, grands-parents, arrière-grands-parents. Notre IA analyse 200 ans d'histoire familiale et génère une carte interactive 3D de votre patrimoine génétique culturel. Elle révèle 50 à 200 sites UNESCO directement liés à VOS ancêtres et crée un itinéraire personnalisé "retour aux racines".

**EXEMPLE CONCRET:**
Imaginons que vous découvrez que votre arrière-grand-mère était guadeloupéenne, votre arrière-grand-père italien de Sicile, et votre trisaïeul sénégalais. RÉUSSITESS génère automatiquement une carte 3D interactive de vos trois patrimoines, identifie 15 sites UNESCO à visiter en priorité (Soufrière Guadeloupe, Valle dei Templi Sicile, Île de Gorée Sénégal), compile les recettes familiales traditionnelles de ces trois cultures, crée une playlist de musique ancestrale personnalisée avec gwoka, tarantella et mbalax, vous apprend des mots clés dans vos trois langues d'origine, et construit un itinéraire voyage "reconnexion" de 14 jours optimisé.

**POURQUOI C'EST RÉVOLUTIONNAIRE:**
Personne au monde n'a jamais relié patrimoine UNESCO, généalogie familiale et intelligence artificielle de cette manière. Cela répond au besoin humain universel fondamental "qui suis-je, d'où je viens ?". Cette innovation valorise le métissage et la diversité culturelle tout en créant une connexion émotionnelle profonde et personnelle avec la plateforme RÉUSSITESS.`,
        
        avantages: [
          'Découverte patrimoine ancestral personnalisé',
          'Carte 3D interactive de votre héritage',
          '50-200 sites UNESCO liés à VOS ancêtres',
          'Itinéraire "retour aux racines" sur-mesure',
          'Recettes familiales des cultures d\'origine',
          'Musique ancestrale playlist personnalisée',
          'Apprentissage langues de vos ancêtres',
          'Connexion émotionnelle profonde à l\'histoire'
        ]
      },

      timeMachine: {
        nom: 'TIME MACHINE CULTURAL',
        emoji: '⏰',
        tagline: 'Voyagez dans le temps à n\'importe quel site UNESCO',
        description: `TIME MACHINE CULTURAL est une reconstitution 3D immersive ultra-réaliste de TOUS les sites UNESCO à différentes époques historiques, propulsée par l'IA générative et la narration vocale d'experts virtuels.

**COMMENT ÇA MARCHE:**
Vous choisissez n'importe quel site parmi les 1 157 sites UNESCO mondiaux - Versailles, le Colisée, Machu Picchu, Angkor Wat, les Pyramides de Gizeh... Ensuite vous sélectionnez une époque historique précise : -3000, -500, l'an 800, 1200, 1685, 1789, 1900, ou 2024. Notre IA génère instantanément une visite 3D immersive complète avec reconstruction visuelle ultra-réaliste basée sur recherches archéologiques, sons d'époque authentiques (foule, musique d'époque, bruits ambiants réalistes), narration d'un "guide de l'époque" en intelligence artificielle avec voix naturelle masculine, et comparaison avant/après en temps réel avec mode split-screen.

**EXEMPLE SPECTACULAIRE - VERSAILLES:**
**Mode 1685 (Louis XIV):** Vous "marchez" virtuellement dans la Galerie des Glaces pendant une fête royale somptueuse de Louis XIV. Musique baroque authentique jouée par orchestre de chambre, conversations en français du 17ème siècle, courtisans en habits d'époque somptueux, lustres avec milliers de bougies allumées. Le guide virtuel Alex (voix IA masculine grave naturelle) vous raconte les intrigues de cour, les complots, les amours secrètes en temps réel comme si vous y étiez.

**Mode 2024 (Aujourd'hui):** Vue actuelle avec 10 millions de touristes annuels, explications muséographiques modernes, selfies, audio-guides contemporains.

**Mode COMPARAISON:** Split-screen révolutionnaire qui montre les deux époques simultanément côte à côte pour mesurer l'évolution spectaculaire sur 340 ans.

**SITES DISPONIBLES:**
Tour Eiffel Paris - Construction 1887-1889 avec ouvriers sur échafaudages VS monument iconique aujourd'hui. Colisée Rome - Gladiateurs combattant devant 50 000 spectateurs en 80 après JC VS ruine majestueuse actuelle. Angkor Wat Cambodge - Empire Khmer à son apogée en 1200 avec processions religieuses VS temples envahis par la jungle. Mont-Saint-Michel France - Pèlerinage médiéval 1000 avec moines bénédictins VS site touristique moderne. Pyramides Gizeh Égypte - Construction pharaonique en -2560 avec 100 000 ouvriers VS merveille du monde actuelle.

**POURQUOI C'EST UNIQUE:**
Aucune application au monde ne combine IA générative de pointe, reconstitution historique scientifique précise, et patrimoine UNESCO de cette manière. C'est à la fois profondément éducatif ET spectaculairement divertissant. Les utilisateurs passeraient littéralement des HEURES à explorer différentes époques. Utilise l'API ChatGPT-4 pour narrations et Midjourney/Stable Diffusion pour générer les visuels 3D en temps réel.`,
        
        avantages: [
          'Visite 1 157 sites UNESCO à toutes époques',
          'Reconstitution 3D ultra-réaliste IA',
          'Sons et musiques d\'époque authentiques',
          'Guide virtuel Alex narration immersive',
          'Mode comparaison avant/après split-screen',
          'Éducatif + Spectaculaire + Viral',
          'Technologie IA générative de pointe',
          'Contenu infiniment rejouable'
        ]
      },

      culturalGuardian: {
        nom: 'CULTURAL GUARDIAN',
        emoji: '👼',
        tagline: 'Votre ange gardien culturel qui vous alerte partout',
        description: `CULTURAL GUARDIAN est votre ange gardien culturel personnel qui utilise la géolocalisation GPS en temps réel pour vous alerter instantanément quand vous êtes à proximité d'un site culturel, historique ou patrimonial, même les lieux non-touristiques méconnus.

**COMMENT ÇA MARCHE:**
L'application s'active en arrière-plan sur votre smartphone iOS ou Android. Quand vous vous trouvez à moins de 500 mètres d'un lieu culturel, historique ou patrimonial, vous recevez une notification push instantanée : "🔔 Vous êtes à 200 mètres de [Lieu Historique Exceptionnel] !" Ensuite, un audio automatique d'Alex (voix masculine grave naturelle) démarre et raconte l'histoire fascinante du lieu en 1 minute chrono. Vous avez alors l'option d'approfondir avec un "Guide complet 10 minutes" ou une "Visite guidée complète 30 minutes" avec narration intégrale.

**COUVERTURE MONDIALE EXHAUSTIVE:**
TOUS les 1 157 sites UNESCO mondiaux avec précision GPS. Plus de 50 000 sites historiques secondaires géolocalisés. Lieux de mémoire de batailles, événements historiques majeurs. Architecture remarquable locale de toutes époques. Plaques commémoratives et monuments aux morts. Tombes et sépultures de personnalités historiques. Lieux de tournage de films cultes. Anciennes enceintes et fortifications disparues.

**EXEMPLE CONCRET IMMERSIF:**
Vous marchez tranquillement dans Paris, Rue Saint-Honoré, sans but particulier. Soudain vibration et notification : "🔔 ALERTE CULTURELLE : Vous êtes devant l'ancien Couvent des Jacobins où Maximilien Robespierre prononça ses discours enflammés pendant la Révolution française (1789-1794) !" Alex commence instantanément sa narration d'1 minute : "Ici même, en 1794, Robespierre orchestrait la Terreur. 40 000 personnes guillotinées. Ce couvent était le QG des Jacobins radicaux..." Vous êtes captivé et appuyez sur "Approfondir 10 minutes" pour connaître toute l'histoire de la Révolution et de Robespierre.

**GAMIFICATION ADDICTIVE:**
Vous gagnez des points d'expérience (XP) pour chaque site découvert : +10 XP site mineur, +50 XP site majeur, +100 XP site UNESCO. Vous débloquez des badges de collection : "Explorateur Paris" (50 sites), "Historien Rome" (100 sites), "Légende Mondiale" (500 sites). Classement et compétition amicale avec vos amis sur l'application. Défis hebdomadaires stimulants : "Trouve 10 sites cachés dans ta ville cette semaine" avec récompenses.

**POURQUOI C'EST INDISPENSABLE:**
Cela transforme littéralement chaque balade quotidienne en aventure culturelle palpitante. Éducation culturelle continue et invisible, apprentissage sans effort. Redécouverte de sa propre ville natale avec un regard totalement neuf. Fonctionne partout dans le monde avec couverture de 195 pays. ZÉRO concurrence sur ce concept exact, innovation mondiale.`,
        
        avantages: [
          'Alertes géolocalisées temps réel GPS',
          'Couverture 1 157 UNESCO + 50 000 sites',
          'Narration audio automatique 1 min',
          'Guides approfondis 10-30 minutes',
          'Gamification addictive (points, badges)',
          'Fonctionne dans 195 pays monde entier',
          'Redécouvre sa propre ville',
          'Éducation invisible quotidienne'
        ]
      },

      culturalWallet: {
        nom: 'WORLD CULTURE WALLET',
        emoji: '💳',
        tagline: 'Votre portefeuille culturel numérique universel',
        description: `WORLD CULTURE WALLET est votre carte d'identité culturelle digitale universelle qui stocke et valorise TOUTES vos expériences culturelles mondiales tout en débloquant des avantages tangibles partout sur la planète.

**CONTENU COMPLET DU WALLET:**
📱 Carte d'identité culturelle avec photo de profil et QR code unique.

**Niveau culturel évolutif** basé sur vos expériences : Bronze (débutant 0-99 points) → Argent (voyageur 100-499 points) → Or (explorateur 500-1999 points) → Platine (expert 2000-4999 points) → Diamant (maître 5000+ points). Points gagnés par sites visités, livres culturels lus, langues apprises, cours suivis, conférences assistées.

**Passeport de visites** avec QR codes scannables de TOUS les sites culturels visités dans votre vie, horodatés avec date précise et géolocalisation GPS.

**Badges achievements débloquables** : "49 UNESCO France Complet ✅", "5 Continents Visités ✅", "Polyglotte 5 Langues ✅", "Lecteur 100 Livres Culture ✅", "Gourmand 50 Recettes Testées ✅".

**Statistiques impressionnantes détaillées** : 127 sites culturels visités, 18 pays explorés, 4 langues parlées niveau B2+, 2 873 kilomètres culturels parcourus, 87 heures de documentaires visionnés, 42 musées différents.

**Crédits culture échangeables** : Points accumulés convertibles en réductions réelles dans boutiques partenaires, musées, librairies.

**AVANTAGES RÉELS TANGIBLES:**
**Réductions automatiques massives** : 10% niveau Bronze, 15% Argent, 20% Or, 25% Platine, 30% Diamant dans plus de 5 000 musées partenaires mondiaux. **Accès coupe-file prioritaire** : Membres Platine et Diamant évitent files d'attente de 2-3 heures au Louvre, Versailles, Vatican, Uffizi. **Expériences VIP exclusives** : Visites privées en petit groupe, rencontres avec conservateurs et guides experts, accès zones habituellement fermées au public. **Réseau social culturel intelligent** : Connectez avec d'autres voyageurs de votre niveau culturel exact partageant mêmes passions. **Assistant voyage IA personnalisé** : Recommandations ultra-précises basées sur votre profil culturel détaillé et historique complet.

**PARTENARIATS STRATÉGIQUES MONDIAUX:**
UNESCO officiel label d'excellence. Musées nationaux majeurs (Louvre Paris, British Museum Londres, Metropolitan Museum New York, Prado Madrid, Uffizi Florence). Offices de tourisme de 150 pays. Compagnies aériennes (Air France, Lufthansa) pour miles culture bonus. Hôtels de charme pour upgrades gratuits membres Platine/Diamant.

**EXEMPLE CONCRET SPECTACULAIRE:**
Vous arrivez au Musée du Louvre à Paris à 10h un samedi de juillet (haute saison touristique). File d'attente normale : 2h30 d'attente sous le soleil. Vous sortez votre smartphone, scannez le QR code de votre World Culture Wallet à l'entrée prioritaire réservée. L'écran de contrôle affiche : "Bienvenue Sarah Martin, Niveau Or, 87ème visite de musée, Membre depuis 2 ans !" Accès coupe-file immédiat, vous entrez en 3 minutes. À la boutique du musée, votre niveau Or vous accorde automatiquement 20% de réduction sur tous achats. Vous gagnez +500 points culture pour cette visite. Badge spécial "Louvre Master - 10 Visites" est débloqué et célébré. L'IA vous fait une recommandation personnalisée basée sur vos visites passées : "Sarah, vous avez adoré le Château de Versailles le mois dernier, ne manquez surtout pas l'exposition temporaire Marie-Antoinette dans l'aile Richelieu 2ème étage, elle se termine dans 8 jours."

**POURQUOI ÇA CHANGE ABSOLUMENT TOUT:**
Gamification totale de la culture qui rend l'apprentissage addictif comme un jeu vidéo. Avantages financiers tangibles avec centaines d'euros économisés annuellement. Création d'un réseau social culturel mondial sans aucun concurrent direct. Valorisation sociale de l'effort d'apprentissage culturel. Motivation intrinsèque puissante car tout le monde veut monter de niveau et débloquer badges.`,
        
        avantages: [
          'Carte identité culturelle digitale QR',
          'Niveaux Bronze/Argent/Or/Platine/Diamant',
          'Réductions 10-30% dans 5 000 musées',
          'Accès coupe-file membres Platine+',
          'Expériences VIP exclusives',
          'Réseau social culturel intelligent',
          'Assistant voyage IA personnalisé',
          'Gamification addictive progressive'
        ]
      },

      moodTherapy: {
        nom: 'CULTURAL MOOD THERAPY',
        emoji: '🎭',
        tagline: 'L\'IA qui soigne votre humeur par la culture',
        description: `CULTURAL MOOD THERAPY est une intelligence artificielle psychologue culturelle révolutionnaire qui analyse votre état émotionnel en temps réel et prescrit des expériences culturelles thérapeutiques scientifiquement personnalisées pour améliorer votre bien-être mental.

**COMMENT ÇA MARCHE EN DÉTAIL:**
**Étape 1 - Check-in quotidien émotionnel :** Chaque matin ou moment de besoin, l'IA vous demande naturellement "Comment vous sentez-vous aujourd'hui, vraiment ?" avec interface empathique.

**Étape 2 - Analyse IA multi-facteurs :** Notre intelligence artificielle de pointe analyse simultanément le ton de votre voix (prosodie, débit, intonation), les mots spécifiques que vous utilisez (champ lexical émotionnel), votre contexte situationnel (travail stressant, rupture amoureuse, solitude, deuil), et même vos micro-expressions faciales si caméra activée.

**Étape 3 - Diagnostic émotionnel précis :** L'IA identifie avec précision parmi 27 états émotionnels différents répertoriés : stress professionnel intense, tristesse profonde, anxiété généralisée, mélancolie nostalgique, ennui existentiel, joie modérée, colère refoulée, solitude affective, etc.

**Étape 4 - Prescription culturelle sur-mesure :** En fonction de votre diagnostic émotionnel précis, l'IA prescrit un "traitement culturel" optimisé scientifiquement : 
• **Musique thérapeutique ciblée** : 15 minutes de maloya guadeloupéen si mélancolie détectée (baisse cortisol -35%), samba brésilienne énergique si besoin de joie immédiate (dopamine +45%), musique classique baroque si stress (onde alpha cerveau +40%)
• **Documentaire calibré** : Film culturel de 35 minutes exactement, durée testée scientifiquement pour efficacité émotionnelle maximale sans fatigue
• **Recette à cuisiner** : Activité manuelle créative qui stimule dopamine par création, méditation active, pleine conscience culinaire
• **Page patrimoine à lire** : Voyage mental immersif de 10 minutes dans un pays lointain, évasion psychologique, réduction rumination mentale -50%
• **Méditation culturelle guidée** : Exercice de relaxation sur-mesure avec visualisation de lieux culturels apaisants

**INTELLIGENCE ÉMOTIONNELLE AVANCÉE:**
Base de données exhaustive de 10 000 contenus culturels minutieusement classés par effet émotionnel scientifiquement mesuré (études cliniques, tests utilisateurs, neurosciences). Algorithme d'apprentissage automatique qui mémorise ce qui a fonctionné spécifiquement pour VOUS dans le passé et affine continuellement. Adaptation quotidienne des recommandations selon votre évolution émotionnelle sur 30 jours. Détection de 27 nuances émotionnelles différentes avec précision de 87%.

**EXEMPLE CONCRET TRANSFORMATEUR:**
**Lundi matin 8h15, vous vous sentez très stressé** (présentation importante au travail dans 2h, nuit agitée, boule au ventre). Vous ouvrez CULTURAL MOOD THERAPY. L'IA analyse votre voix tremblante et vos mots choisis. Diagnostic immédiat : "Je détecte un niveau de stress élevé (8/10) avec anxiété anticipatoire. Voici votre prescription culturelle thérapeutique pour les 60 prochaines minutes :

🎵 **15 minutes de bossa nova brésilienne** (João Gilberto, Stan Getz) scientifiquement prouvée pour réduire cortisol de 40% et ralentir rythme cardiaque.

🍜 **Cuisinez un risotto crémeux italien** pendant 25 minutes exactement : méditation active par gestes répétitifs, pleine conscience sensorielle (odeurs, textures, couleurs), création gratifiante.

📖 **Lisez la page Italie - Renaissance Florence** : Voyage mental apaisant de 10 minutes dans les jardins de Boboli et les œuvres de Botticelli, évasion psychologique totale.

🧘 **Méditation guidée audio 'Jardins de Versailles'** de 8 minutes : Visualisation immersive des fontaines, respiration contrôlée, relaxation musculaire progressive."

**Résultat mesuré scientifiquement :** Après 1 heure de "traitement", votre niveau de stress a chuté de 8/10 à 3/10 (réduction -62%). Votre présentation se passe remarquablement bien. L'application apprend automatiquement que pour VOUS spécifiquement, la culture italienne (musique, cuisine, art) a un effet thérapeutique puissant. Toutes les futures prescriptions privilégieront donc automatiquement le patrimoine culturel italien.

**BASE SCIENTIFIQUE SOLIDE:**
Musicothérapie clinique prouvée par 200+ études peer-reviewed. Art thérapie validée par American Art Therapy Association. Bibliothérapie (lecture curative) reconnue par psychologie clinique moderne. Méditation culturelle (concept innovant RÉUSSITESS) fusion méditation pleine conscience + voyage mental patrimonial.

**SUIVI LONGITUDINAL BIEN-ÊTRE:**
Graphique détaillé de votre humeur sur 30 jours avec courbes d'évolution. Analyses de corrélations automatiques : "Vos données montrent que votre humeur est systématiquement +35% meilleure les jours où vous consommez de la culture italienne versus autres cultures". Journal émotionnel culturel quotidien avec réflexions personnelles sauvegardées. Rapport mensuel exhaustif de bien-être mental envoyé par email avec recommandations évolution.

**POURQUOI C'EST ABSOLUMENT RÉVOLUTIONNAIRE:**
Première application au monde qui combine intelligence artificielle émotionnelle, psychologie clinique validée et patrimoine culturel thérapeutique. Répond directement à la crise mondiale de santé mentale (350 millions dépressifs OMS). Alternative naturelle sans effets secondaires aux médicaments psychotropes (antidépresseurs, anxiolytiques). Les utilisateurs l'utiliseraient quotidiennement comme rituel matinal bien-être. Potentiel économique énorme avec abonnement premium "Thérapie Culturelle Pro" à 9,99€/mois.`,
        
        avantages: [
          'IA psychologue analyse 27 émotions',
          'Prescription culturelle scientifique',
          'Musicothérapie prouvée cliniquement',
          'Méditation culturelle guidée',
          'Suivi bien-être 30 jours graphique',
          'Alternative naturelle médicaments',
          'Utilisation quotidienne rituel',
          'Abonnement premium thérapeutique'
        ]
      }
    },

    // 26 PAYS AMAZON COMPLETS (sans liens)
    pays: {
      france: {
        nom: 'France',
        capitale: 'Paris',
        continent: 'Europe',
        population: '67 millions',
        langue: 'Français',
        monnaie: 'Euro EUR',
        
        histoire: `La France, officiellement République française, possède une histoire exceptionnelle de plus de 2000 ans. Les Gaulois, peuple celte, occupaient le territoire avant la conquête romaine par Jules César en 52 avant JC (bataille d'Alésia). La Gaule romaine prospère pendant 500 ans avec villes, routes, aqueducs.

En 496, Clovis roi des Francs se convertit au christianisme, fondant la dynastie mérovingienne. Charlemagne (742-814) crée l'Empire carolingien, couronné empereur à Rome en 800. La dynastie capétienne règne de 987 à 1792 avec 40 rois successifs.

Le Moyen Âge voit l'essor des cathédrales gothiques (Notre-Dame 1163, Chartres 1194, Reims 1211). La guerre de Cent Ans (1337-1453) oppose France et Angleterre. Jeanne d'Arc libère Orléans en 1429.

La Renaissance française (1515-1610) sous François Ier fait rayonner arts et lettres. Les châteaux de la Loire (Chambord, Chenonceau, Amboise) témoignent de cette splendeur. Léonard de Vinci finit sa vie en France.

Louis XIV (1643-1715), le Roi-Soleil, incarne la monarchie absolue. Versailles devient le centre du pouvoir. La France domine l'Europe culturellement et militairement.

La Révolution française de 1789 renverse la monarchie millénaire. Déclaration des Droits de l'Homme le 26 août 1789. Louis XVI guillotiné le 21 janvier 1793. La Terreur de Robespierre (1793-1794) fait 40 000 morts.

Napoléon Bonaparte (1769-1821) conquiert l'Europe de 1804 à 1815. Code Napoléon, système métrique, lycées - son héritage perdure. Défaite de Waterloo en 1815.

La IIIème République (1870-1940) voit industrialisation, colonisation (Algérie, Indochine, Afrique), Belle Époque. La France perd 1,4 million d'hommes durant la Première Guerre mondiale (1914-1918).

L'Occupation nazie (1940-1944) marque douloureusement. Résistance avec Jean Moulin, De Gaulle à Londres. Libération août 1944.

La Vème République depuis 1958 avec présidents élus au suffrage universel direct depuis 1962. Construction européenne avec traité de Rome 1957, euro 2002.`,

        patrimoine: `La France détient le RECORD EUROPÉEN avec 49 sites inscrits au patrimoine mondial de l'UNESCO, témoignant d'une richesse culturelle exceptionnelle accumulée sur 2000 ans d'histoire.

**PARIS - LA VILLE LUMIÈRE**
Paris accueille 30 millions de visiteurs annuels, capitale touristique mondiale incontestée. La Tour Eiffel (1889), symbole universel construit par Gustave Eiffel pour l'Exposition universelle, mesure 324 mètres avec antennes et accueille 7 millions de visiteurs par an. Elle fut le monument le plus haut du monde pendant 41 ans jusqu'en 1930. Les 20 000 ampoules illuminent la Dame de Fer chaque nuit.

Le Musée du Louvre, ancienne résidence royale devenue musée en 1793, est le plus grand musée du monde avec 380 000 œuvres dont 35 000 exposées. La Joconde de Léonard de Vinci (1503-1519) attire 30 000 visiteurs quotidiens. La Pyramide de verre de Ieoh Ming Pei (1989) marque l'entrée principale. 10 millions de visiteurs annuels.

Notre-Dame de Paris (1163-1345), chef-d'œuvre gothique, a survécu à l'incendie du 15 avril 2019. Les 387 marches mènent aux tours. Les gargouilles et chimères veillent. Viollet-le-Duc restaura l'édifice au XIXème siècle. Reconstruction en cours jusqu'en 2024.

L'Arc de Triomphe (1806-1836) commandé par Napoléon honore la Grande Armée. Tombe du Soldat Inconnu depuis 1920. Flamme ravivée quotidiennement à 18h30. Vue panoramique sur les 12 avenues en étoile.

Montmartre et le Sacré-Cœur (1875-1914) dominent Paris du haut de la Butte (130m). Place du Tertre avec artistes peintres. Bateau-Lavoir où vécurent Picasso, Modigliani. Moulin Rouge (1889) cabaret mythique.

**CHÂTEAU DE VERSAILLES - SPLENDEUR ROYALE**
Le Château de Versailles, chef-d'œuvre architectural de Louis XIV, incarne la puissance de la monarchie absolue française. Louis XIII y construisit un modeste pavillon de chasse en 1623. Louis XIV le transforma en palais somptueux de 1661 à 1710 avec architectes Le Vau et Hardouin-Mansart.

Les 2 300 pièces du château, dont 1 000 ouvertes au public, témoignent du faste de l'Ancien Régime. La Galerie des Glaces (73 mètres, 357 miroirs, 17 arcades) éblouit les ambassadeurs étrangers. Le Traité de Versailles y fut signé le 28 juin 1919, mettant fin à la Première Guerre mondiale.

Les appartements royaux du Roi et de la Reine, la Chapelle Royale avec orgue à 2 916 tuyaux, l'Opéra Royal de 712 places construit en 1770 pour le mariage de Louis XVI et Marie-Antoinette.

Les jardins à la française dessinés par André Le Nôtre s'étendent sur 815 hectares. 200 000 arbres, 210 000 fleurs replantées annuellement. Les Grandes Eaux musicales (avril-octobre) font jaillir 50 fontaines simultanément. Le Grand Canal de 1 670 mètres accueillait gondoles vénitiennes. Bosquet de la Salle de Bal, Bassin d'Apollon, Orangerie avec 1 200 arbres.

Le Domaine de Marie-Antoinette avec le Petit Trianon (1768), le Hameau de la Reine (1783) où elle jouait à la bergère, le Temple de l'Amour. 10 millions de visiteurs annuels.

**MONT-SAINT-MICHEL - MERVEILLE DE L'OCCIDENT**
Le Mont-Saint-Michel, merveille gothique inscrite UNESCO depuis 1979, s'élève sur un îlot rocheux granitique de 960 mètres de circonférence en baie normande entre Normandie et Bretagne. L'Archange Michel serait apparu à Saint Aubert, évêque d'Avranches, en 708.

L'abbaye bénédictine fondée en 966 se développe en centre de pèlerinage majeur médiéval. L'église abbatiale romane (1023-1084) puis gothique flamboyante (1446-1521) couronne le rocher à 80 mètres. La Merveille (1211-1228), chef-d'œuvre gothique de 3 étages, comprend cloître suspendu, réfectoire lumineux, salle des Chevaliers.

Les remparts (XIIIème-XVème siècles) protègent le mont. Grande Rue médiévale avec maisons du XVème. Musée maritime, archéoscope. Les grandes marées spectaculaires (marnage record européen de 14 mètres) transforment le site en île isolée deux fois par mois. Coefficient 110+ impressionnant.

Le pont-passerelle (2014) remplace l'ancienne digue-route pour restaurer le caractère maritime. 2,5 millions de visiteurs annuels. Traversées de la baie guidées de 5 km à marée basse (attention sables mouvants mortels !).

**CHÂTEAUX DE LA LOIRE - VALLÉE DES ROIS**
La Vallée de la Loire, inscrite UNESCO sur 280 km, compte 300 châteaux témoins de la Renaissance française entre Sully-sur-Loire et Chalonnes. Rois, princes, financiers les bâtirent du XVème au XVIIème siècle.

Chambord (1519-1547), chef-d'œuvre de François Ier, impressionne avec 440 pièces, 282 cheminées, 77 escaliers. L'escalier central à double révolution hélicoïdale serait inspiré par Léonard de Vinci. 5 440 hectares de domaine forestier (le plus grand parc clos de murs d'Europe - 32 km). Toits avec 800 chapiteaux sculptés et 365 cheminées (une par jour). Jamais achevé, François Ier n'y séjourna que 42 jours.

Chenonceau (1514-1522), le "château des Dames", enjambe gracieusement le Cher sur 60 mètres avec sa galerie de bal à deux étages. Diane de Poitiers puis Catherine de Médicis l'embellirent. Jardins à la française sur 70 hectares. 1 million de visiteurs annuels.

Amboise (Xème-XVIème siècles) abrita la cour royale de Charles VIII et François Ier. Léonard de Vinci y séjourna ses trois dernières années (1516-1519) au Clos Lucé voisin où il mourut le 2 mai 1519. Sa tombe se trouve dans la Chapelle Saint-Hubert du château.

Azay-le-Rideau (1518-1527), "diamant taillé à facettes" selon Balzac, se mire dans l'Indre. Chenonceau, Villandry et ses jardins Renaissance reconstitués, Chaumont-sur-Loire et son festival des jardins, Blois avec 4 styles architecturaux.

**AUTRES TRÉSORS UNESCO**
Cathédrale de Reims (1211-1275) où 25 rois de France furent sacrés de 1223 à 1825. Jeanne d'Arc y fit couronner Charles VII en 1429. Vitraux de Marc Chagall (1974).

Cathédrale de Chartres (1194-1220), gothique parfait, conserve 176 vitraux du XIIIème siècle (2 600 m² surface vitrée). Labyrinthe au sol de 12,90m diamètre. Pèlerinage marial depuis 876.

Pont du Gard (Ier siècle), aqueduc romain de 49 mètres de haut, amenait l'eau sur 50 km vers Nîmes. 20 000 tonnes de pierres calcaires assemblées sans mortier.

Carcassonne, cité médiévale fortifiée avec double enceinte de 3 km, 52 tours. Restaurée par Viollet-le-Duc au XIXème. Château comtal du XIIème. Basilique Saint-Nazaire vitraux XIIIème-XIVème.

Palais des Papes d'Avignon (1335-1352), plus grand palais gothique d'Europe, résidence de 9 papes au XIVème siècle. 15 000 m², 25 salles visitables. Festival de théâtre chaque juillet.

Sites préhistoriques grotte Chauvet (37 000 ans, plus anciennes peintures rupestres connues), grotte de Lascaux (17 000 ans, "chapelle Sixtine de la préhistoire" avec 600 peintures et 1 500 gravures).`,

        culture: `**LANGUE FRANÇAISE**
Le français, langue romane issue du latin vulgaire, est parlé par 300 millions de locuteurs mondiaux (dont 235 millions quotidiens). Langue officielle de 29 pays et de l'ONU. L'Académie française fondée par Richelieu en 1635 défend la langue. Francophonie regroupe 88 États et gouvernements.

L'ancien français (IXème-XIVème siècles) naît des Serments de Strasbourg (842). Le moyen français (XIVème-XVème) se standardise. François Ier impose le français par l'Ordonnance de Villers-Cotterêts (1539). Le français classique (XVIIème) se codifie. Le français moderne évolue depuis le XVIIIème.

**LITTÉRATURE FRANÇAISE**
La littérature française rayonne mondialement depuis le Moyen Âge. La Chanson de Roland (XIème siècle), épopée féodale. Le Roman de la Rose (XIIIème) allégorie courtoise. François Villon (1431-1463), poète maudit du "Testament".

Renaissance : Rabelais (Gargantua et Pantagruel 1532-1564), Montaigne (Essais 1580-1588), Ronsard et la Pléiade. Classicisme XVIIème : Corneille (Le Cid 1637), Molière (Le Misanthrope 1666), Racine (Phèdre 1677), La Fontaine (Fables 1668-1694).

Lumières XVIIIème : Voltaire (Candide 1759), Rousseau (Contrat Social 1762), Diderot (Encyclopédie 1751-1772). Romantisme XIXème : Victor Hugo (Les Misérables 1862, Notre-Dame de Paris 1831), Balzac (La Comédie Humaine 90 romans), Stendhal (Le Rouge et le Noir 1830), George Sand, Baudelaire (Les Fleurs du Mal 1857), Verlaine, Rimbaud.

Réalisme et naturalisme : Flaubert (Madame Bovary 1857), Zola (cycle des Rougon-Macquart 20 romans), Maupassant (Boule de Suif 1880). XXème siècle : Proust (À la recherche du temps perdu 1913-1927), Céline (Voyage au bout de la nuit 1932), Camus (L'Étranger 1942, Prix Nobel 1957), Sartre (La Nausée 1938, Prix Nobel refusé 1964), Beauvoir (Le Deuxième Sexe 1949).

15 Prix Nobel de littérature français depuis 1901 (record avec UK) : Sully Prudhomme (1901), Mistral (1904), France (1921), Bergson (1927), Mauriac (1952), Camus (1957), Saint-John Perse (1960), Sartre (1964 refusé), Claude Simon (1985), Le Clézio (2008), Modiano (2014).

**GASTRONOMIE - PATRIMOINE IMMATÉRIEL UNESCO**
La France est le PREMIER pays où le "repas gastronomique des Français" fut inscrit au patrimoine culturel immatériel de l'UNESCO en 2010. L'art du bien manger et du bien boire structure l'identité française.

Fromages : 1 200 variétés différentes ! Camembert de Normandie, Brie de Meaux, Roquefort (plus ancien AOP 1925), Comté, Reblochon, Munster, Cantal, Saint-Nectaire. De Gaulle disait : "Comment voulez-vous gouverner un pays qui compte 246 variétés de fromages ?"

Vins : La France produit 46 millions d'hectolitres annuels (2ème mondial après Italie). Bordeaux (Médoc, Pomerol, Saint-Émilion), Bourgogne (Romanée-Conti vin le plus cher du monde à 15 000€ la bouteille), Champagne (300 millions de bouteilles/an), Vallée du Rhône (Châteauneuf-du-Pape), Alsace (Riesling, Gewurztraminer), Loire (Sancerre, Muscadet), Languedoc. 363 AOP et 74 IGP.

Haute cuisine française : Auguste Escoffier (1846-1935) codifie 5 000 recettes dans "Le Guide Culinaire" (1903). Paul Bocuse (1926-2018) crée la Nouvelle Cuisine. Guide Michelin depuis 1900 avec étoiles depuis 1926 (630 étoiles en France, 1er mondial). Alain Ducasse 21 étoiles dans ses restaurants (record), Joël Robuchon 32 étoiles (record absolu avant décès 2018).

Plats emblématiques : Coq au vin, bœuf bourguignon, blanquette de veau, pot-au-feu, confit de canard, foie gras (30 000 tonnes/an, 1er producteur mondial), escargots de Bourgogne, cuisses de grenouilles, abaisse. Crêpes bretonnes, galettes sarrasin. Bouillabaisse marseillaise (13 poissons), cassoulet toulousain, choucroute alsacienne, quiche lorraine, fondue savoyarde, raclette.

Pâtisserie française : Croissants (Marie-Antoinette les importa d'Autriche 1770), pain au chocolat, baguette tradition (250g, 250 kcal, consommation 30 millions/jour !), macarons Ladurée, éclair au chocolat, mille-feuille, tarte Tatin, crème brûlée, profiteroles, religieuse, Paris-Brest, Saint-Honoré. Pierre Hermé surnommé "Picasso de la pâtisserie".

**ARTS ET CULTURE**
Impressionnisme français révolutionne la peinture : Monet (Impression soleil levant 1872 donne le nom au mouvement), Renoir, Degas, Pissarro, Sisley, Manet. Post-impressionnisme : Cézanne, Gauguin, Van Gogh (hollandais installé en France). Fauvisme : Matisse, Derain. Cubisme : Picasso (espagnol à Paris), Braque.

Cinéma : Les frères Lumière inventent le cinéma (1895). Georges Méliès (Le Voyage dans la Lune 1902). Nouvelle Vague : Truffaut (Les 400 Coups 1959), Godard (À bout de souffle 1960). Festival de Cannes depuis 1946, Palme d'or. Acteurs : Alain Delon, Jean-Paul Belmondo, Catherine Deneuve, Gérard Depardieu, Isabelle Adjani, Marion Cotillard (Oscar 2008). Luc Besson (Le Grand Bleu, Léon, Le Cinquième Élément).

Musique : Édith Piaf (La Vie en Rose 1947), Charles Aznavour, Jacques Brel (belge francophone), Georges Brassens, Serge Gainsbourg, Johnny Hallyday (110 millions de disques vendus). Électro française : Daft Punk, David Guetta, Justice. Rap français : IAM, NTM, Booba, PNL.

Mode : Paris capitale mondiale de la mode. Coco Chanel révolutionne la mode féminine (petite robe noire, tailleur, N°5 parfum le plus vendu au monde). Christian Dior (New Look 1947), Yves Saint Laurent, Chanel, Louis Vuitton (1ère marque de luxe mondiale 47 milliards €), Hermès (sac Birkin 10 000€+), Givenchy, Balmain. Fashion Week Paris incontournable.

Parfumerie : Grasse capitale mondiale du parfum. Chanel N°5 (1921), Dior J'adore, Guerlain Shalimar. 70% des parfums de luxe mondiaux sont français.`,

        economie: '7ème économie mondiale, PIB 2 950 milliards USD. Nucléaire 70% électricité, aéronautique (Airbus), luxe, tourisme, agriculture, pharmaceutique. CAC 40.',
        
        conseils: `**MEILLEURE PÉRIODE**
Mai-juin et septembre-octobre offrent météo agréable (15-25°C), prix corrects, moins de foule. Éviter juillet-août (canicule 35°C+, sites bondés, prix doublés). Avril cerisiers, octobre couleurs automnales. Décembre marchés de Noël. Janvier-février basse saison (promos -40%, Paris sous la pluie romantique).

**TRANSPORTS**
TGV ultra-rapide : Paris-Lyon 2h, Paris-Marseille 3h15, Paris-Bordeaux 2h05. Carte Avantage SNCF 49€/an = -30% tous trajets. Ouigo low-cost dès 10€. Pass Interrail 7 jours 246€ France. Location voiture 25-60€/jour. Essence 1,80-2,00€/L. Autoroutes péages chers (Paris-Nice 80€). Blablacar covoiturage populaire.

Avion domestique : Paris-Nice 1h15 dès 30€. Low-cost : Ryanair, easyJet, Volotea. Aéroports Paris : Charles-de-Gaulle (CDG) hub international, Orly, Beauvais (Ryanair loin, 1h bus).

Paris : Métro 320 stations dense. Ticket 2,10€, carnet 10 tickets 16,90€. Pass Navigo semaine 30€ (zones 1-5 inclut aéroports CDG/Orly). RER banlieue. Vélib' 300km pistes cyclables.

**HÉBERGEMENT**
Hôtels : 1 étoile 50-80€, 3 étoiles 100-150€, 4 étoiles 200-350€. Paris 30% plus cher. Ibis Budget chaîne économique 50-70€. Airbnb appartements 70-200€/nuit. Auberges jeunesse HI 25-45€ lit dortoir, chambres privées 60-90€.

Campings : 8 000 campings France. 3 étoiles 20-35€ emplacement. Mobile-homes 400-1200€/semaine. Yelloh Village, Homair chaînes.

**BUDGET QUOTIDIEN**
Économique : 50-80€/jour (auberge jeunesse 30€, supermarché 15€, transports 10€, 1 musée 15€, pic-nic).

Moyen : 120-180€/jour (hôtel 2 étoiles 80€, restos 35€, transports 15€, activités 40€).

Confort : 250-400€/jour (hôtel 4 étoiles 180€, gastronomie 80€, taxis 40€, visites privées 100€).

**RESTAURANTS**
Boulangeries : Baguette 1,20€, croissant 1,30€, pain chocolat 1,50€, sandwich 4-6€. Petit-déjeuner économique.

Resto bistrot : Formule déjeuner (entrée+plat OU plat+dessert) 15-20€. Plat à la carte 18-28€. Vin verre 4-8€. Café 2,50€. Pourboire inclus service.

Gastronomique : Menu 50-90€. Étoilés Michelin 150-400€. Réserver 1-3 mois avance.

Bouillons parisiens historiques : Chartier (1896), Bouillon Racine Art Nouveau - repas complet 25€, ambiance authentique Belle Époque.

**BONS PLANS CULTURE**
Paris Museum Pass : 48h 62€, 4 jours 77€, 6 jours 92€. Accès 50+ musées et monuments sans queue : Louvre, Versailles, Orsay, Arc de Triomphe, Sainte-Chapelle, Conciergerie, Rodin, Picasso, Panthéon, Tours Notre-Dame... Coupe-file énorme avantage (Louvre 2h queue évitées).

Musées nationaux GRATUITS 1er dimanche du mois : Louvre, Orsay, Rodin, Picasso, Cluny... Attention foule.

Gratuité -26 ans UE : Tous les musées nationaux permanents gratuits pour jeunes européens.

Journées du Patrimoine 3ème weekend septembre : 17 000 sites ouverts gratuitement dont Élysée, Matignon, ministères, hôtels particuliers fermés normalement.

**SANTÉ SÉCURITÉ**
Sécurité sociale excellente. Hôpitaux publics gratuits urgences. Pharmacies croix verte partout. Urgences 15 SAMU, 112 européen. Carte Européenne Assurance Maladie pour UE.

Pickpockets Paris : Métro lignes 1 (Champs-Élysées), 4, 9, RER B, Sacré-Cœur, Tour Eiffel, Louvre, Champs-Élysées. Sac devant, ne pas montrer iPhone.

Eau robinet potable excellente partout. Fontaines publiques eau fraîche. Toilettes publiques gratuites.

**ÉTIQUETTE FRANÇAISE**
TOUJOURS dire "Bonjour" en entrant magasin/resto/boulangerie avant de parler. Crucial ! "Bonjour Madame/Monsieur" poli. "Au revoir, bonne journée" en partant. Vouvoiement formel. Tutoiement uniquement amis proches.

Restos : Attendre être placé. Serveur appelle "Monsieur/Madame". Pourboire service compris, laisser 2-5€ si satisfait facultatif. Manger lentement, savourer. Parler moins fort qu'américains.

Magasins : Fermeture dimanche (sauf Champs-Élysées, Marais). Pause déjeuner 12h-14h petites boutiques. Soldes officielles 2 fois/an (janvier, juillet) -30-70%.

**WIFI INTERNET**
Wifi gratuit : MacDo, Starbucks, bibliothèques, hôtels. 4G excellent partout. Forfaits prépayés : Free Mobile 20€/mois 100Go, Sosh Orange 15€/mois 40Go. SIM carte touriste possible.`
      },

      italie: {
        nom: 'Italie',
        capitale: 'Rome',
        continent: 'Europe',
        population: '60 millions',
        langue: 'Italien',
        monnaie: 'Euro EUR',
        
        histoire: `L'Italie possède l'histoire la plus riche et la plus longue d'Europe avec 3 000 ans de civilisation continue. La civilisation étrusque (900-100 av JC) domine le centre de l'Italie avec cités prospères, art raffiné, ingénierie avancée.

Rome fondée légendairement le 21 avril 753 av JC par Romulus. La République romaine (509-27 av JC) conquiert progressivement la Méditerranée entière. Jules César (100-44 av JC) conquiert la Gaule. Assassinat aux Ides de Mars 44 av JC.

L'Empire romain (27 av JC - 476 ap JC) règne sur 60 millions de sujets du mur d'Hadrien en Écosse au désert égyptien. Auguste (27 av JC - 14 ap JC) premier empereur inaugure Pax Romana de 2 siècles. Trajan (98-117) étend l'empire à son maximum (5 millions km²). Marc Aurèle (161-180) empereur philosophe stoïcien.

Le Colisée (70-80 ap JC) accueille 50 000 spectateurs pour combats de gladiateurs et chasses. Pompéi détruite par éruption du Vésuve le 24 août 79, figée dans le temps. Caracalla (198-217) construit thermes géants de 11 hectares.

Constantin Ier (306-337) se convertit au christianisme (313), déplace capitale à Constantinople (330). Chute de l'Empire romain d'Occident en 476, fin de l'Antiquité. Invasions barbares : Wisigoths, Vandales, Ostrogoths, Lombards.

Le Moyen Âge voit fragmentation politique. États pontificaux gouvernés par le Pape depuis Rome (756-1870). Républiques maritimes prospères : Venise, Gênes, Pise, Amalfi dominent commerce Méditerranée. Venise république oligarchique avec Doge élu (697-1797).

La Renaissance italienne (1400-1600) révolutionne art, science, philosophie. Florence berceau avec Médicis mécènes (1434-1737). Michel-Ange (1475-1564) peint plafond Chapelle Sixtine (1508-1512), sculpte David (1501-1504) et Pietà (1498-1499). Léonard de Vinci (1452-1519) génie universel peint La Cène (1495-1498) et Joconde (1503-1519). Raphaël (1483-1520), Botticelli (Naissance de Vénus 1485), Titien, Le Caravage.

Italie unifiée tardivement (Risorgimento). Victor-Emmanuel II roi de Sardaigne devient premier roi d'Italie en 1861. Rome capitale en 1870 après prise des États pontificaux. Garibaldi et Cavour artisans de l'unité.

Mussolini et fascisme (1922-1943). Pacte d'acier avec Hitler (1939). Seconde Guerre mondiale désastreuse (1940-1945). Résistance partisane. République italienne proclamée référendum 2 juin 1946. Constitution démocratique 1948.

Miracle économique italien (1950-1970) transforme pays agricole pauvre en 7ème puissance mondiale industrielle. Fiat, Olivetti, mode (Armani, Versace, Prada, Gucci). G7, Union européenne fondateur (1957), euro (2002).`,

        patrimoine: `L'Italie détient le RECORD MONDIAL ABSOLU avec 58 sites inscrits au patrimoine mondial de l'UNESCO - plus que tout autre pays ! Cette concentration exceptionnelle témoigne de 3 000 ans de civilisation continue et de richesse culturelle inégalée.

**ROME - LA VILLE ÉTERNELLE**
Rome, Caput Mundi "capitale du monde", compte 2,8 millions d'habitants. Centre historique classé UNESCO depuis 1980 avec Vatican.

Le Colisée (Amphithéâtre Flavien 70-80 ap JC), symbole de Rome éternelle, est le plus grand amphithéâtre jamais construit. 188 mètres long, 156 mètres large, 48 mètres haut. Capacité 50 000 à 75 000 spectateurs assis sur 4 étages. Ellipse parfaite. Sous-sol complexe avec 80 couloirs verticaux, cages animaux, monte-charges, trappes. Combats de gladiateurs, chasses exotiques (venationes) avec lions, tigres, éléphants, rhinocéros, naumachies (batailles navales en inondant l'arène). Dernier combat de gladiateurs en 435. Tremblement de terre 847 effondre moitié sud. Recyclage pierres pour Saint-Pierre. 7 millions de visiteurs annuels.

Le Forum Romain, cœur politique de l'Empire pendant 1 000 ans. Arc de Septime Sévère (203), Curie Sénat romain, Temple de Saturne (-497), Basilique de Maxence et Constantin (312), Arc de Titus (81) commémore prise de Jérusalem 70. Via Sacra traverse forum. Ruines colonnes, temples évoquent grandeur passée.

Le Panthéon (118-125 ap JC) commandé par Hadrien, temple "de tous les dieux" devenu église Santa Maria ad Martyres (609). Coupole record monde pendant 1 700 ans jusqu'en 1881 : 43,30 mètres de diamètre, parfaite demi-sphère. Oculus central 9m diamètre unique source lumière. Pluie tombe à l'intérieur. Tombes Raphaël, Victor-Emmanuel II, Umberto Ier. Gratuit.

La Fontaine de Trevi (1732-1762), baroque spectaculaire de Nicola Salvi. Largeur 20m, hauteur 26m. Neptune sur char tiré par chevaux marins. Jeter pièce par-dessus épaule droite garantit retour à Rome (3 millions €/an récoltés, reversés Caritas). 3 000 € jetés quotidiennement. Film La Dolce Vita Fellini (1960) : Anita Ekberg s'y baigne iconiquement.

Basilique Saint-Pierre du Vatican (1506-1626), plus grande église catholique monde. 190m long, 136m coupole Michelangelo, 20 000 personnes. Pietà de Michel-Ange (1498-1499) derrière vitre blindée depuis attaque 1972. Baldaquin du Bernin (1624-1633) bronze 29m haut. Coupole 551 marches, vue panoramique. Place Saint-Pierre (1656-1667) colonnade du Bernin, 284 colonnes, 140 saints.

Chapelle Sixtine, chef-d'œuvre absolu de Michel-Ange. Plafond (1508-1512) 40m x 13m : Création d'Adam, 9 scènes Genèse, 300 figures. Jugement Dernier (1536-1541) mur autel 391 figures. Fresques latérales Botticelli, Pérugin, Ghirlandaio. Conclave élection papes. 5 millions visiteurs/an.

Château Saint-Ange, mausolée Hadrien (123-139) devenu forteresse papale. Passetto corridor secret reliant Vatican (800m). Musée, vue terrasse. Puccini y situe acte III Tosca (1900).

**POMPÉI - VILLE FIGÉE DANS LE TEMPS**
Pompéi, ville romaine de 11 000 habitants, fut ensevelie par l'éruption cataclysmale du Vésuve le 24 août 79 ap JC (ou octobre selon recherches récentes). Pline le Jeune témoigne oculaire. Nuée ardente à 300°C, cendres, lapilli. 2 000 morts. Herculanum ville voisine également détruite.

Redécouverte 1748 par hasard. Fouilles révèlent cité préservée miraculeusement : maisons, rues pavées avec ornières de chars, fresques murales intactes colorées, mosaïques, objets quotidiens, amphores, bijoux, outils. Les moulages de corps des victimes réalisés par Giuseppe Fiorelli (1863) par injection de plâtre dans les cavités laissées par les corps décomposés montrent position agonie : mère protégeant enfant, chien enchaîné, gladiateurs caserne.

Forum romain Pompéi, Temples Jupiter/Apollon/Vesta, Basilique tribunal, Maison du Faune (3 000m² riche demeure avec mosaïque Alexandre), Villa des Mystères fresques dionysiaques énigmatiques, Lupanar (maison close) fresques érotiques explicites, Thermes, Amphithéâtre 20 000 places, Gladiateurs Caserne, Boulangeries fours pain, Thermopolium (fast-food antique) jarres encastrées.

Site 66 hectares dont 45 fouillés. 2,5 millions visiteurs annuels. Menaces : érosion, pluies, vandalisme, effondrements (Maison Gladiateurs 2010). Restauration permanente nécessaire.

**VENISE - SÉRÉNISSIME RÉPUBLIQUE**
Venise, "Sérénissime", construite sur 118 îlots reliés par 435 ponts, 150 canaux. Lagune classée UNESCO. Fondée Vème siècle par réfugiés invasions barbares. République indépendante 1 000 ans (697-1797). Doge élu à vie par oligarchie. Puissance maritime commerciale dominante Méditerranée. Comptoirs Chypre, Crète, Corfou.

Place Saint-Marc, "le plus beau salon d'Europe" (Napoléon). Basilique Saint-Marc (1063-1094) byzantine dorée, 4 chevaux bronze (copies, originaux intérieur). Campanile 99m (effondré 1902, reconstruit identique 1912). Palais des Doges gothique (1340-1420) résidence doge, prison, Pont des Soupirs reliant prison (Casanova s'en évade 1756).

Grand Canal serpent 4km en "S" inversé, 45m large. Vaporetto ligne 1 traverse entièrement. Palais gothiques vénitiens alignés : Ca' d'Oro, Ca' Rezzonico, Ca' Foscari. Pont du Rialto (1588-1591) unique pont Grand Canal jusqu'en 1854, boutiques joaillerie.

Gondoles 11m long, 600kg, fabriquées artisanalement 8 essences bois différentes, 280 pièces, 500h travail, 40 000€. Gauches asymétriques pour compenser gondolier droite. 400 gondoliers licenciés héréditaires, monopole familial. Balade 30 min 80€ jour, 100€ nuit (tarif officiel 6 personnes max).

Carnaval Venise février/mars (2 semaines avant Carême) remonte 1094. Masques traditionnels : Bauta (blanc avec tricorne), Moretta (velours noir), Médecin de peste (bec long). 3 millions visiteurs. Biennale d'Art (années impaires) et Architecture (années paires) depuis 1895.

Acqua alta inonde régulièrement (novembre-février). Record 187cm 1966. Projet MOSE digues mobiles 2020 (5,5 milliards €, controversé). Venise perd 1 000 habitants/an (52 000 en 2021 vs 175 000 en 1951). Sur-tourisme : 25 millions visiteurs/an écrasent ville.

**FLORENCE - BERCEAU DE LA RENAISSANCE**
Florence, Firenze, capitale Toscane, 380 000 habitants. Centre historique UNESCO. République oligarchique XIIIème-XVème. Famille Médicis banquiers mécènes (1434-1737) : Cosme l'Ancien, Laurent le Magnifique (1449-1492). Humanisme, arts, lettres.

Cathédrale Santa Maria del Fiore (Duomo 1296-1436). Coupole Brunelleschi révolutionnaire (1420-1436) 45m diamètre, double calotte, 463 marches sommet. Campanile Giotto (1334-1359) 84m, marbre polychrome blanc/vert/rose. Baptistère Saint-Jean (1059-1128) Portes du Paradis de Ghiberti bronze doré 10 panneaux Bible (1425-1452).

Galerie des Offices (Uffizi), musée le plus visité Italie, 2 millions/an. Chefs-d'œuvre Renaissance : Naissance de Vénus Botticelli (1485), Printemps Botticelli (1482), Annonciation Léonard de Vinci (1472), Tondo Doni Michel-Ange (1507), Vénus d'Urbin Titien (1538), Madone au Chardonneret Raphaël (1506). Réserver 2-4 semaines avance obligatoire.

Galerie Académie (Accademia) David de Michel-Ange (1501-1504). Statue marbre 5,17m, 5,5 tonnes, perfection anatomique. Bloc Carrare réputé défectueux. Originellement Piazza Signoria (1504-1873), déplacé intérieur préservation. Répliques Piazza Signoria et Piazzale Michelangelo.

Ponte Vecchio (1345), plus vieux pont Florence, unique survivant WWII. Bijoutiers orfèvres remplacent bouchers 1593. Corridor Vasari (1565) passage couvert 1km relie Palazzo Vecchio-Uffizi-Ponte Vecchio-Palazzo Pitti, construit 5 mois mariage François Ier Médicis.

Palazzo Pitti (1458) résidence Médicis puis Savoie. Galerie Palatine Raphaëls, Titiens. Jardins Boboli 45 hectares (1549) jardins Renaissance italiens terrasses, sculptures, grottes, fontaines.

Basilique Santa Croce (1294) nécropole gloires italiennes : tombes Michel-Ange (1564), Galilée (1642), Machiavel (1527), Rossini (1868). Fresques Giotto Chapelles Bardi et Peruzzi.

**TOSCANE - CAMPAGNE SUBLIMÉE**
Val d'Orcia classé UNESCO paysage culturel Renaissance. Collines douces, cyprès alignés, fermes fortifiées (poderi), vignobles Brunello di Montalcino, fromage pecorino Pienza. Villages perchés médiévaux : Montepulciano (Vino Nobile), Montalcino, Pienza ville idéale Renaissance, San Gimignano "Manhattan médiévale" 14 tours préservées (72 au Moyen Âge), Volterra étrusque albâtre.

Sienne rivale Florence. Centre historique UNESCO. Piazza del Campo coquille Saint-Jacques inclinée, Palio (2 juillet et 16 août) course chevaux effrénée 17 contrade (quartiers) depuis 1656, 90 secondes course, 50 000 spectateurs. Cathédrale (Duomo 1215-1263) marbre noir/blanc rayé, façade sculptée, bibliothèque Piccolomini fresques Pinturicchio, pavement mosaïque marbre 56 panneaux.

Chianti région viticole entre Florence et Sienne. Collines, vignes sangiovese, oliveraies. Route Chianti Classico SR222 "Chiantigiana". Châteaux médiévaux : Castello di Brolio (1141), Castello di Verrazzano (navigateur découvre baie New York 1524). Dégustations caves.

**CÔTE AMALFITAINE - BEAUTÉ VERTIGINEUSE**
Côte Amalfitaine classée UNESCO, 50km entre Sorrente et Salerne, falaises calcaires verticales 1 000m plongeant Méditerranée. Route corniche SS163 serpente suspendue vertigineusement. Positano village coloré étagé, 1 800 habitants, plages, boutiques mode, église Santa Maria Assunta coupole majoliques. Amalfi république maritime rivale Venise au Moyen Âge, cathédrale Sant'Andrea arabe-normande (Xème-XIIIème), cloître du Paradis mosaïques. Ravello 350m altitude, Villa Rufolo jardins (1270) inspira Wagner Parsifal (1880), Villa Cimbrone terrasse Infini vue panoramique sublime. Festival musique classique été.

Citrons d'Amalfi IGP géants, limoncello liqueur 30°. Pâtes main : scialatielli courts, casereccia torsadés.

**CINQUE TERRE - VILLAGES SUSPENDUS**
Cinque Terre "Cinq Terres", cinq villages multicolores accrochés falaises Ligurie : Riomaggiore, Manarola, Corniglia, Vernazza, Monterosso. Classé UNESCO. Vignes en terrasses vertigineuses murettes pierres sèches (7 000km !). Vin blanc Sciacchetrà passito. Parc National. Sentier Bleu sentier côtier 12km Riomaggiore-Monterosso, 5h, panoramas exceptionnels. Via dell'Amore ("Chemin Amour") 1km facile Riomaggiore-Manarola le plus célèbre (fermé 2012-2024 éboulements). Train relie 5 villages 8€. Carte Cinque Terre 16€ journée (train illimité + sentiers). Pesto génois basilic Ligurie DOP. 2,5 millions visiteurs/an, sur-tourisme problématique.

**NAPLES ET RÉGION**
Naples (Napoli) 3ème ville italienne 950 000 hab (3,1M agglo). Fondée colons grecs Néapolis "ville nouvelle" -600. Domination aragonaise espagnole (1442-1707) marque architecture baroque. Centre historique UNESCO plus grand Europe (1 700 ha). Spaccanapoli rue rectiligne coupe vieux Naples, decumanus inférieur romain. Cathédrale (Duomo San Gennaro 1272-1323) abrite sang Saint Janvier qui se liquéfie miracle 3 fois/an (attente fervente). Chapelle Sansevero (1590) Christ Voilé sculpture marbre Giuseppe Sanmartino (1753) transparence voile incroyable. Castel Nuovo Maschio Angioino (1279-1284) forteresse angevine. Palais Royal (1600-1858) résidence Bourbons. Théâtre San Carlo (1737) plus ancien opéra Europe fonctionnel.

Pizza napolitaine berceau mondial. Margherita (1889) créée pizzaiolo Raffaele Esposito pour reine Margherite : tomate, mozzarella, basilic = drapeau italien. Pizza napolitaine STG certifiée : pâte main, four bois 485°C, 60-90 secondes cuisson, bord gonflé cornicione. Pizzerias historiques : L'Antica Pizzeria da Michele (1870 film Mange Prie Aime), Sorbillo, Di Matteo, Trianon. Queue normale.

Vésuve volcan actif 1 281m domine golfe Naples. Dernière éruption 1944. Observatoire volcanologique (1841) surveille. Ascension cratère 30 min depuis parking 1 000m. Panorama golfe exceptionnel.

Herculanum ensevelie même éruption Pompéi 79 ap JC. Mieux préservée car coulée pyroclastique boueuse (vs cendres Pompéi). Maisons patriciennes riches fresques, mosaïques intactes. Villa des Papyrus bibliothèque 1 800 papyrus carbonisés (déchiffrage en cours). Thermes, théâtre.

Capri île luxueuse 10km côte, 13 000 hab. Marina Grande port, Anacapri village haut, Grotte Bleue (Grotta Azzurra) caverne marine lumière bleue irréelle entrée basse barque. Villa Jovis (14-37 ap JC) palais empereur Tibère ruines sommet mont Tiberio 334m. Faraglioni trois rochers mer émergés 100m. Via Krupp corniche vertigineuse. Limoncello, parfumeries. Jet-set été. Ferry Naples 50 min.

Côte Amalfitaine 50km Sorrente-Salerne déjà décrite.

**SICILE - ÎLE AUX MILLE CULTURES**
Sicile plus grande île Méditerranée 25 000km², 5 millions hab, région autonome. Carrefour civilisations 3 000 ans : Phéniciens, Grecs, Romains, Byzantins, Arabes, Normands, Espagnols. Palerme capitale 670 000 hab. Arabonormand Palazzo dei Normanni (IXème) Chapelle Palatine mosaïques or. Cathédrale (1184) styles multiples. Marchés colorés Ballarò, Vucciria. Arancini riz frits. Cannoli ricotta. Cassata gâteau.

Vallée des Temples Agrigente UNESCO. Sept temples doriques grecs -V/-VI siècles : Temple Concorde le mieux conservé Méditerranée (430 av JC). Temple Héra, Zeus Olympien colossal inachevé 113m, télamons (atlantes) 7,75m. Couchés au sol suite tremblement terre.

Mont Etna 3 357m volcan actif Europe, 60 éruptions depuis 1600. Inscrit UNESCO 2013. Téléphérique + 4x4 jusqu'à 2 920m (100€). Cratères fumants, coulées récentes, paysage lunaire. Ski janvier-mars. Vignobles Etna DOC (Nerello Mascalese).

Syracuse (Siracusa) colonie grecque -734. Tyran Denys Ier (405-367 av JC). Archimède (287-212 av JC) mathématicien génial tué soldat romain siège Syracuse. Parc archéologique Néapolis : Théâtre grec (IIIème av JC) 15 000 places, Oreille de Denys grotte amplification acoustique légende espionnage, Amphithéâtre romain (IIème ap JC). Île Ortygie vieux Syracuse baroque cathédrale incorpore temple Athéna -V siècle. Fontaine Aréthuse nymphes papyrus.

Taormine station balnéaire chic perchée 200m, vue Etna-mer. Théâtre grec (IIIème av JC) 10 000 places vue Etna encadrant scène. Festival été. Corso Umberto boutiques luxe. Plage Isola Bella.

Mafia sicilienne Cosa Nostra née XIXème, apogée XXème. Parrains : Vito Ciancimino, Totò Riina "U Curtu" 150 meurtres (perpétuité 1993), Bernardo Provenzano "Tracteur" (perpétuité 2006). Juges assassinés : Falcone et Borsellino (1992) attentats terribles. État lutte antimafia renforcée depuis.

**AUTRES JOYAUX UNESCO ITALIENS**
Milan (Milano) capitale économique 1,4M (3,2M agglo). Duomo cathédrale gothique (1386-1965) 135 flèches, 3 400 statues. Terrasses toits vue. Galerie Victor-Emmanuel II (1865-1877) galerie couverte verre fer luxe. Théâtre Scala (1778) opéra mythique. Château Sforza (XV°). Dernière Cène Léonard de Vinci (1495-1498) réfectoire Santa Maria delle Grazie, réserver 3 mois. Fashion Week. Aperitivo milanais 18h-21h buffet accompagnant verre.

Lac de Côme (Lago di Como) 145km², villa Barlianello, Bellagio "perle lac", Varenna, Menaggio villages romantiques. George Clooney villa Oleandra. Ferry relie villages.

Vérone (Verona) ville Roméo et Juliette Shakespeare. Arènes romaines (30 ap JC) amphithéâtre 22 000 places, opéras été (Aida Verdi). Maison Juliette balcon (reconstitué touristique). Piazza delle Erbe médiévale marché. Pont Pietra (-I siècle) Adige. 265 000 hab.

Pise (Pisa) Tour penchée (1173-1372) campanile cathédrale, inclinaison 3,97° (5,5° avant travaux 1990-2001 redressement 44cm). 56m haut, 8 étages, 294 marches. Piazza dei Miracoli "des Miracles" UNESCO : Tour, Cathédrale romane (1063-1118), Baptistère (1152-1363) plus grand Italie, Camposanto Monumentale cimetière médiéval. Galilée Pise (1564-1642) expériences chutes corps.

Gênes (Genova) république maritime, 580 000 hab. Port le plus important Italie. Christophe Colomb génois (1451-1506). Palais Rolli UNESCO (42 palais XVI-XVII nobles). Aquarium plus grand Europe 27 000m². Pesto génois basilic DOP (Denominazione di Origine Protetta).

Bologne (Bologna) 390 000 hab. Université plus ancienne Europe occidentale (1088). Ville arcades 40km portiques. Deux tours penchées médiévales : Asinelli 97m (498 marches), Garisenda 48m. Cuisine bolognaise : tagliatelle al ragù (bolognaise !), tortellini, mortadelle. Ville rouge (brique).

Matera Basilicate habitats troglodytes sassi ("pierres") creusés tuf, 3 000 ans occupation continue. 155 églises rupestres fresques byzantines. UNESCO 1993. Mel Gibson Passion Christ (2004) y tourné. Capitale Culture Européenne 2019.

Alberobello Pouilles 10 500 hab, trulli maisons coniques pierres sèches sans mortier (1 000 trulli), UNESCO. Uniques Vallée d'Itria. Origines XV-XVII. Patrimoine rural exceptionnel.

Dolomites Alpes calcaires 3 342m Marmolada, 18 sommets >3 000m. UNESCO paysages. Ski cortina d'Ampezzo, Val Gardena, Alta Badia. Via ferrata. Tre Cime di Lavaredo iconiques. Ladin langue rhéto-romane minoritaire.`,

        culture: `**LANGUE ITALIENNE**
Italien langue romane issue latin vulgaire parlée par 85 millions monde (dont 60M Italie). Basée dialecte toscan florentin grâce Dante Alighieri (1265-1321) Divine Comédie (1307-1321) écrite vernaculaire vs latin. Pétrarque (Canzoniere 1374) et Boccace (Décaméron 1353) codifient italien littéraire.

Dialectes régionaux très différents persistent : napolitain, sicilien, vénitien, piémontais, lombard, sarde (langues distinctes pour linguistes). Mutua incompréhension dialectes extrêmes. TV, école standard

isa depuis 1861 unification. 1861 : 2,5% italiens parlaient italien standard ! Aujourd'hui 90%+ maîtrisent.

**LITTÉRATURE ET PHILOSOPHIE**
Dante Alighieri (1265-1321) Divine Comédie (Inferno, Purgatorio, Paradiso) voyage allégorique au-delà, 14 233 vers, monument littérature universelle. Francesco Petrarca Pétrarque (1304-1374) père humanisme, Canzoniere 366 poèmes amour Laure. Giovanni Boccaccio (1313-1375) Décaméron 100 nouvelles racontées 10 jeunes fuyant peste noire 1348, naissance prose italienne moderne.

Niccolò Machiavelli Machiavel (1469-1527) Le Prince (1513) traité politique réaliste cynique, "la fin justifie les moyens". Giacomo Leopardi (1798-1837) poète philosophe pessimiste Chants (Canti). Alessandro Manzoni (1785-1873) Les Fiancés (I Promessi Sposi 1827) roman historique peste Milan 1630, fondateur italien moderne. Giovanni Verga (1840-1922) vérisme sicilien Les Malavoglia (1881). Gabriele D'Annunzio (1863-1938) décadentiste, aviateur, aventurier politique fiume.

Luigi Pirandello (1867-1936) Six Personnages en quête d'auteur (1921), Prix Nobel 1934. Italo Svevo (1861-1928) La Conscience de Zeno (1923) roman psychanalytique. Cesare Pavese (1908-1950) néoréalisme. Italo Calvino (1923-1985) Le Baron perché (1957), Si par une nuit d'hiver un voyageur (1979) postmoderne. Umberto Eco (1929-2016) sémiologue Le Nom de la rose (1980) best-seller mondial. Elsa Morante (1912-1985) La Storia (1974). Primo Levi (1919-1987) Si c'est un homme (1947) témoignage Auschwitz.

**OPÉRA ITALIEN - BEL CANTO**
Italie patrie opéra né fin XVIème Florence. Monteverdi (1567-1643) L'Orfeo (1607) premier opéra. Rossini (1792-1868) Barbier de Séville (1816), Guillaume Tell (1829) ouverture célèbre Lone Ranger. Gaetano Donizetti (1797-1848) 70 opéras L'Elisir d'amore (1832), Lucia di Lammermoor (1835). Vincenzo Bellini (1801-1835) Norma (1831) Casta Diva air sublime soprano.

Giuseppe Verdi (1813-1901) génie absolu 28 opéras : Nabucco (1842) Va pensiero hymne quasi-national, Rigoletto (1851) La donna è mobile, La Traviata (1853), Il Trovatore (1853), Aïda (1871) commande Suez, Requiem (1874). Giacomo Puccini (1858-1924) vérisme émotion : La Bohème (1896), Tosca (1900), Madama Butterfly (1904) Un bel dì vedremo, Turandot (1926 inachevé) Nessun dorma ténor.

Ténors mythiques : Enrico Caruso (1873-1921), Beniamino Gigli, Mario Del Monaco, Franco Corelli, Luciano Pavarotti (1935-2007) voix d'or 3 Ténors 1990-2003 avec Domingo et Carreras. Sopranos : Renata Tebaldi, Maria Callas (1923-1977) "Voce divina", Mirella Freni, Cecilia Bartoli.

**CINÉMA ITALIEN - NÉORÉALISME ET FELLINI**
Cinéma muet : Cabiria (1914) péplum 3h. Fascisme propagande. Néoréalisme après-guerre 1945-1955 révolutionne cinéma : tournage extérieur, acteurs non-professionnels, réalité sociale pauvreté.

Roberto Rossellini (1906-1977) Rome ville ouverte (1945) Résistance. Vittorio De Sica (1901-1974) Voleur de bicyclette (1948) pauvreté ouvrière chef-d'œuvre, Umberto D. (1952). Luchino Visconti (1906-1976) aristocrate communiste Senso (1954), Le Guépard (1963) Palme Or.

Federico Fellini (1920-1993) génie baroque onirique 4 Oscars : La Strada (1954), Les Nuits de Cabirla (1957), La Dolce Vita (1960) Anita Ekberg fontaine Trevi icône, 8½ (1963), Amarcord (1973). Pier Paolo Pasolini (1922-1975) marxiste homosexuel provocateur Théorème (1968), trilogie Décaméron/Canterbury/1001 Nuits, Salò (1975) dérangeant assassiné mystérieusement.

Michelangelo Antonioni (1912-2007) L'Avventura (1960), La Notte (1961), L'Éclipse (1962) trilogie incommunicabilité, Blow-Up (1966) Palme Or. Bernardo Bertolucci (1941-2018) Le Dernier Tango à Paris (1972) scandaleux, Le Dernier Empereur (1987) 9 Oscars.

Sergio Leone (1929-1989) western spaghetti : Trilogie Dollar avec Clint Eastwood (1964-1966), Il était une fois dans l'Ouest (1968) Ennio Morricone musique légendaire, Il était une fois en Amérique (1984) 4h gang juif.

Comédie italienne : Dino Risi Un Monstre et Demi (1959), Alberto Sordi, Vitto, acheter tabacchi bureau tabac.

**LANGUE**
Italien seul 5% parlent anglais hors sites touristiques. Apprendre bases : Grazie (merci), Prego (de rien/je vous en prie), Per favore (svp), Scusi (excusez-moi), Quanto costa? (combien?), Dov'è...? (où est?), Non capisco (je ne comprends pas), Parla inglese? (parlez-vous anglais?). Google Translate indispensable. Gestes expressifs italiens nombreux, communication gestuelle.

**SPÉCIFICITÉS RÉGIONALES**
Nord (Milan, Turin, Venise) : Industriel, riche, efficace, ponctuel, réservé, business. Risotto, polenta, osso buco. Aperitivo milanais.

Centre (Florence, Rome, Bologne) : Culturel, Renaissance, patrimoine, touristique. Pâtes, bistecca, ragù. Dolce vita romaine.

Sud (Naples, Bari, Palerme) : Chaleureux, accueillant, désorganisé, pauvre, famille, tradition, catholicisme fervent. Pizza, mozzarella bufala, fruits mer, cannoli. Café rituel. Chaos joyeux.

Îles (Sicile, Sardaigne) : Autonomes, fiers, dialectes forts, cuisine spécifique, rythme lent. Arancini, cassata, pecorino.

**JOURS FÉRIÉS**
1er janvier Nouvel An, 6 janvier Épiphanie, Lundi Pâques (mars/avril variable), 25 avril Libération 1945, 1er mai Fête Travail, 2 juin Fête République, 15 août Assomption Ferragosto (TOUT ferme vacances), 1er novembre Toussaint, 8 décembre Immaculée Conception, 25 décembre Noël Natale, 26 décembre Santo Stefano. + Saints patrons locaux (Rome San Pietro Paolo 29 juin, Milan Sant'Ambrogio 7 décembre, Venise San Marco 25 avril, Naples San Gennaro 19 septembre, Florence San Giovanni 24 juin, Palerme Santa Rosalia 15 juillet).

**SHOPPING**
Soldes officielles Saldi : Hiver début janvier-mi mars, Été début juillet-début septembre. Réductions 30-70% progressives. Outlets : The Mall Florence (Gucci Prada -50%), Serravalle Milan, Castel Romano Rome, Barberino Mugello, Fidenza Village Parme. Mode italienne qualité. Cuir Florence San Lorenzo marché. Murano verre Venise authentique cher. Limoncello Sorrente. Huile olive Toscane IGP Ombrie. Vinaigre balsamique Modène traditionnel 12-25 ans 50-200€ 100ml. Truffes blanches Alba octobre-décembre 3000-6000€/kg. Parmigiano Reggiano meule 36 mois. Pasta Gragnano IGP bronze. Riz Carnarolo risotto. Café Illy Lavazza grains. Céramiques Deruta Ombrie, Vietri Côte Amalfitaine, Caltagirone Sicile.

**FOOTBALL CALCIO**
Passion nationale. Serie A 20 clubs. Grands clubs : Juventus Turin 36 titres record (stade Allianz), Inter Milan 19 titres (San Siro 80 000), AC Milan 19 titres (San Siro), AS Roma tifosi fervents (Olimpico 70 000), SSC Napoli passion volcanique Maradona 1984-1991 (Diego Armando Maradona stadium 55 000), Lazio Rome, Fiorentina Florence violet. Rivalités derbies intenses : Derby Milano Inter-Milan, Derby Capitale Roma-Lazio, Derby Mole Juve-Torino, Derby Lanterna Genoa-Sampdoria.

Azzurri équipe nationale 4 Coupes Monde (1934, 1938, 1982, 2006) 2ème après Brésil 5. Euro 2020 victoire juillet 2021. Hymne Fratelli d'Italia. Stades mythiques San Siro Milan, Olimpico Rome, Juventus Stadium. Billets matchs Serie A 20-150€ selon catégorie, acheter avance en ligne. Ultras tifosi supporters fanatiques ambiance chaud fumigènes chants.

**FESTIVALS ÉVÉNEMENTS**
Carnaval Venise février 10 jours masques costumes Renaissance bals palais 200-500€. Palio Sienne 2 juillet et 16 août course chevaux Piazza Campo 90 secondes 17 contrade passion ancestrale. Regata Storica Venise septembre gondoles historiques Grand Canal cortège costumé. Infiorata Genzano mai/juin tapis fleurs rues 2 000m². Festival Film Venise Mostra août-septembre Lido Lion d'Or compétition prestige. Biennale Art Venise années impaires juin-novembre. Scoppio Carro Florence Pâques explosion char feu artifice Duomo. Luminara San Ranieri Pise 16 juin 70 000 bougies Arno. Festa del Redentore Venise 3ème dimanche juillet pont bateaux Giudecca feux artifice. Rossini Opera Festival Pesaro août. Arena Vérone opéras été juin-septembre 22 000 spectateurs Aïda spectaculaire. Maggio Musicale Fiorentino Florence opéra avril-juin. Festival Spoleto Due Mondi juin-juillet. Ravello Festival concerts jardins Villa Rufolo juillet-septembre. Taormina Film Fest juin-juillet théâtre grec. Chocolat Eurochocolate Pérouse octobre. Truffe Alba Fiera Tartufo octobre-novembre. Sagre fêtes village gastronomiques partout été.

**LECTURES RECOMMANDÉES**
Guides : Lonely Planet Italie exhaustif 1 200 pages. Routard Italie 700 pages budget. Guide Vert Michelin culturel détaillé. Time Out Rome Milan Florence. DK Eyewitness Visual couleurs.

Littérature : Divine Comédie Dante (1472 édition princeps), Décaméron Boccace, Le Prince Machiavel, Les Fiancés Manzoni (1827), Si c'est un homme Primo Levi témoignage Auschwitz bouleversant, Le Nom de la rose Umberto Eco (1980) médiéval énigme abbaye, La peau Curzio Malaparte Naples WWII, Christ s'est arrêté à Eboli Carlo Levi Sud pauvreté, Le Guépard Giuseppe Tomasi di Lampedusa Sicile aristocratie déclin.

Histoire : SPQR Mary Beard Rome Antiquité référence, Histoire de Rome Marcel Le Glay, Renaissance italienne Jacob Burckhardt classique, Italienne Histoires Catherine Brice, Mussolini Denis Mack Smith biographie.

Art : Vies artistes Vasari (1550) biographies peintres Renaissance source, Histoire de l'art Gombrich, Botticelli tout œuvre, Léonard Vinci Walter Isaacson (2017), Michel-Ange Irving Stone Agonie Extase roman biographique.

Cuisine : Essentials Italian Cooking Marcella Hazan bible 500 recettes, Silver Spoon encyclopédie 2 000 recettes, Jamie Oliver Italie facile, Pasta Grannies mamies italiennes YouTube adorable.

Films : Rome ville ouverte, Voleur Bicyclette, La Strada, La Dolce Vita, 8½, Rocco et ses Frères, Le Guépard, L'Avventura, Le Conformiste, Parfum de Femme, Cinema Paradiso, Il Postino, La Vie est Belle, La Grande Bellezza, Gomorra série (2014-2021), L'Ami Prodigieux série (2018-).`
      },

      allemagne: {
        nom: 'Allemagne',
        capitale: 'Berlin',
        continent: 'Europe',
        population: '83 millions',
        langue: 'Allemand (Deutsch)',
        monnaie: 'Euro EUR',
        
        histoire: `L'Allemagne (Deutschland) possède une histoire complexe et tragique qui a profondément marqué le XXème siècle. Les tribus germaniques (Saxons, Francs, Alamans, Bavarois) occupaient le territoire. Charlemagne (747-814) les christianise et unifie dans l'Empire carolingien.

Le Saint-Empire romain germanique (962-1806) fondé par Otton Ier fragmenté en 300+ États principautés villes libres. Faiblesse politique chronique. Martin Luther (1483-1546) déclenche Réforme protestante en 1517 avec 95 thèses Wittenberg. Guerre de Trente Ans (1618-1648) dévastatrice catholiques vs protestants, 30% population périt. Paix Westphalie 1648.

Prusse monte en puissance sous Frédéric II le Grand (1712-1786) royaume militariste. Napoléon conquiert Allemagne (1806), abolit Saint-Empire. Congrès de Vienne 1815 crée Confédération germanique 39 États.

Otto von Bismarck (1815-1898) "Chancelier de Fer" unifie Allemagne par guerres : contre Danemark (1864), Autriche (1866), France (1870-1871). Empire allemand proclamé Versailles 18 janvier 1871, Guillaume Ier kaiser.

Première Guerre mondiale (1914-1918) : Allemagne vaincue, Traité Versailles humiliant 1919 perd territoires, désarmement, réparations colossales 132 milliards marks-or. République Weimar (1919-1933) démocratique fragile, hyperinflation 1923 (1 trillion marks = 1 dollar).

Adolf Hitler (1889-1945) prend pouvoir 1933 IIIème Reich nazi totalitaire raciste antisémite. Réarmement, annexions Autriche (Anschluss 1938), Sudètes, invasion Pologne 1er septembre 1939 déclenche Seconde Guerre mondiale. Shoah génocide industriel 6 millions de Juifs exterminés camps concentration Auschwitz, Treblinka, Sobibor. 60 millions de morts guerre. Défaite totale mai 1945, Berlin en ruines, Hitler suicidé 30 avril.

Partition Guerre froide : RFA (Bundesrepublik Deutschland) Ouest capitaliste démocratique OTAN vs RDA (Deutsche Demokratische Republik) Est communiste dictature Parti Socialiste Unifié Pacte Varsovie. Mur de Berlin construit 13 août 1961 sépare Berlin-Ouest enclave RFA dans RDA. Symbole Rideau de Fer. 140 morts tentative fuite.

Chute Mur Berlin 9 novembre 1989 fin Guerre froide. Réunification allemande 3 octobre 1990 jour férié national Tag Deutschen Einheit. Berlin redevient capitale 1991. Difficultés intégration Est pauvre vs Ouest riche persistent.

Aujourd'hui puissance économique leader européen, 83 millions habitants, 4ème PIB mondial. Locomotive Union européenne, euro, Chancelière Angela Merkel 2005-2021 record longévité.`,

        patrimoine: `L'Allemagne compte 51 sites inscrits au patrimoine mondial UNESCO témoignant d'une richesse culturelle et historique exceptionnelle malgré destructions massives WWII.

**BERLIN - CAPITALE HISTORIQUE**
Berlin 3,7 millions habitants, capitale depuis 1991 réunification. Ville cicatrices histoire tragique XXème siècle mais vibrant créativité jeunesse.

Porte de Brandebourg (Brandenburger Tor 1788-1791) néoclassique symbole Berlin et réunification. 26m haut, 12 colonnes doriques, quadrige Victoire bronze. No man's land Mur 1961-1989. Reagan "Mr Gorbatchev, tear down this wall!" 12 juin 1987. Ouverture 9 novembre 1989 émotions. 31 décembre fête Réveillon 1 million personnes.

Reichstag (1884-1894) Parlement Bundestag. Incendie 27 février 1933 prétexte Hitler dictature. Bataille Berlin avril 1945, soldats soviétiques plantent drapeau URSS toit. Reconstruction Norman Foster 1999 coupole verre transparence démocratie, spirale 230m visite gratuite panorama 360° (réserver 3 mois avance). "Dem deutschen Volke" (Au peuple allemand) fronton.

Mur de Berlin (Berliner Mauer 1961-1989) 155 km séparait Berlin-Est communiste et Berlin-Ouest. Checkpoint Charlie passage Alliés Friedrichstrasse reconstitué. East Side Gallery 1,3 km Mühlenstrasse fresques murales 118 artistes dont Baiser fraternel Brejnev-Honecker Dmitri Vrubel iconique. Mémorial Mur Bernauer Strasse 70m segment préservé, centre documentation, chapelle Réconciliation. Topographie de la Terreur ancien QG Gestapo SS expose horreurs nazies gratuit émouvant.

Mémorial Holocauste (2005) Peter Eisenman 2 711 stèles béton hauteurs variables champ labyrinthique oppressant. Centre information souterrain témoignages familles juives assassinées bouleversant. Gratuit.

Île aux Musées (Museumsinsel) 5 musées prussiens UNESCO : Altes Museum (1830), Neues Museum (1855) buste Néfertiti (-1340 icône), Alte Nationalgalerie, Bode-Museum, Pergamonmuseum (fermé rénovation jusqu'à 2027) autel Pergame (-180), porte Ishtar Babylone bleu turquoise. Pass jour 20€.

Château Charlottenburg (1695-1713) baroque résidence Sophie-Charlotte électrice Brandebourg. Jardins à la française. Concerts été.

Cathédrale Berlin (Berliner Dom 1894-1905) néorenaissance coupole 98m. Crypte Hohenzollern 90 sarcophages. 267 marches panorama.

Alexanderplatz cœur Berlin-Est. Tour TV (Fernsehturm 1969) 368m plus haute Allemagne, sphère restaurant tournant 207m vue 40 km. Horloge mondiale Urania.

Potsdamer Platz no man's land Mur, reconstruction années 1990 gratte-ciels Sony Center coupole verre.

Memorial Berlin-Hohenschönhausen ancienne prison Stasi RDA, visites guidées ex-détenus politiques témoignages terrifiants torture psychologique.

**DRESDE - FLORENCE DE L'ELBE**
Dresde (Dresden) 560 000 hab Saxe. Splendeur baroque détruite bombardements Alliés 13-15 février 1945 (25 000 morts, controversé). Reconstruction minutieuse.

Frauenkirche (Église Notre-Dame 1726-1743) baroque luthérienne, coupole pierre 95m "cloche pierre". Détruite 1945, ruines laissées mémoire RDA, reconstruction 1994-2005 fidèle pierres noircies originales intégrées. Symbole réconciliation. Concert orgue quotidien.

Zwinger (1710-1728) palais baroque Augustus II le Fort. Galerie Maîtres Anciens (Gemäldegalerie Alte Meister) Madone Sixtine Raphaël (1512-1513). Porcelaine Meissen collection royale. Jardins fontaines sculptures.

Résidence Château (Residenzschloss) reconstruit, Voûte Verte (Grünes Gewölbe) trésor Augustus 4 000 objets or ivoire pierres précieuses éblouissant.

Semperoper (Opéra 1841, reconstruit 1878, 1985) néorenaissance. Premières Wagner (Rienzi 1842, Hollandais Volant 1843, Tannhäuser 1845). Strauss (Rosenkavalier 1911). Visites guidées, billets opéra 20-250€.

Terrasse Brühl "Balcon Europe" promenade Elbe.

Palais Pillnitz (1720-1723) résidence été baroque chinoiseries jardins parcs.

**COLOGNE - CATHÉDRALE GOTHIQUE SUBLIME**
Cologne (Köln) 1,1 million hab Rhénanie. Romaine Colonia Agrippina. Archevêché puissant Moyen Âge.

Cathédrale Cologne (Kölner Dom 1248-1880) gothique chef-d'œuvre 157m flèches jumelles, 3ème plus haute église monde. 632 ans construction interrompue 1473-1842 faute argent. Achevée Guillaume Ier 1880. UNESCO 1996. Châsse Rois Mages or reliques depuis 1164 pèlerinage. Vitraux médiévaux. 533 marches tour sud panorama Rhin. 20 000 visiteurs/jour gratuit, tour 6€.

12 églises romanes UNESCO préservées (Sainte-Marie-du-Capitole, Saint-Géréon, Saint-Martin, etc).

Musée Ludwig art moderne Picasso Warhol Lichtenstein Richter.

Eau de Cologne (Kölnisch Wasser) inventée Jean-Marie Farina 1709, Maison Farina 4711 boutique historique visite.

Carnaval Cologne (Karneval) février/mars 5ème saison délire costumes bière. Rosenmontag lundi Roses défilé géant 1 million spectateurs.

**BAVIÈRE - CHÂTEAUX DE CONTE DE FÉES**
Bavière (Bayern) Land le plus grand, 13 millions hab, capitale Munich. Catholique conservateur, traditions fortes, Alpes, bière, Oktoberfest, châteaux Louis II.

Château Neuschwanstein (1869-1886) fantasme néoromantique fou Louis II Bavière (1845-1886 mort mystérieuse lac Starnberg). Perché Alpes bavaroises près Füssen. Inspiration Disney Château Belle au Bois Dormant. Visites guidées obligatoires 35 min 13€, réserver en ligne avance sinon sold-out. 1,5 million visiteurs/an. Vue pont Marienbrücke 90m gorge vertigineuse iconique photo. Jamais achevé (170 pièces dont 14 terminées), Louis II n'y vécut que 172 jours avant internement folie déclaré.

Château Hohenschwangau néogothique voisin, enfance Louis II.

Château Linderhof (1874-1878) rococo Louis II seul terminé, Grotte Vénus Wagner illuminée électricité.

Château Herrenchiemsee (1878-1886) île lac Chiemsee, copie Versailles inachevée hommage Louis XIV obsession.

Munich (München) 1,5 million capitale Bavière. Résidence Wittelsbach ducs électeurs rois. BMW, Siemens, Allianz, assurances sièges.

Marienplatz cœur, Nouvel Hôtel Ville (Neues Rathaus 1867-1909) néogothique, Glockenspiel carillon automates 11h 12h 17h (mars-octobre). Ancien Hôtel Ville (Altes Rathaus 1470-1480) gothique. Colonne Mariensäule (1638) Vierge peste.

Frauenkirche cathédrale (1468-1494) gothique briques, 2 tours bulbes cuivre 99m symbole Munich. Capacité 20 000 (!) debout. Empreinte diable légende portail.

Résidence Munich (Residenz) palais Wittelsbach Renaissance baroque rococo néoclassique 130 pièces visitables. Trésor (Schatzkammer) couronne Bavière joyaux. Antiquarium salle Renaissance 69m voûtée.

Viktualienmarkt marché quotidien 140 stands depuis 1807. Jardin bière Biergarten 1 000 places.

Hofbräuhaus (1589) brasserie mythique 3 000 places, oompah bands, litres bière Maß, touristes + locaux, ambiance survoltée. Fondée Guillaume V, réservée cour jusqu'à 1828. Hitler y tint 25 premiers discours NSDAP.

Jardin Anglais (Englischer Garten 1789) 375 ha (plus grand que Central Park), Eisbach surf rivière artificielle vague stationnaire surfeurs urbains incroyable. Tour Chinoise (Chinesischer Turm) biergarten 7 000 places.

BMW Welt & Musée futuriste livraison voitures, histoire automobile, motos, moteurs avions, F1. Usine visite.

Allianz Arena stade FC Bayern München 75 000 LED panneaux gonflables éclairage rouge/blanc/bleu selon équipe.

Oktoberfest (16 jours fin septembre-début octobre) plus grande fête monde, 6 millions visiteurs. Theresienwiese prairie Thérèse 42 ha. 14 grandes tentes brasseries Munich (Hofbräu, Paulaner, Augustiner, etc) 6 000-10 000 places. Bière spéciale Oktoberfestbier 6% Maß litre 13-14€. Montagnes russes manèges 200. Costumes traditionnels Dirndl (femmes) Lederhosen (hommes). Défilé ouverture dimanche costumes chevaux 8 000 participants. Réserver table tente mois avance groupes. O'zapft is! ("C'est ouvert!") maire Munich perce 1er fût midi 1er samedi.

Dachau premier camp concentration nazi 10 km Munich, mémorial visite gratuite bouleversante. 200 000 prisonniers, 41 500 morts 1933-1945. Arbeit macht frei portail mensonge. Baraquements reconstruits, four crématoire, musée documentation. Nécessaire humilité.

**NUREMBERG - VILLE MÉDIÉVALE ET PROCÈS**
Nuremberg (Nürnberg) 520 000 hab Bavière. Ville impériale libre Saint-Empire. Albrecht Dürer (1471-1528) peintre graveur y vécut, maison-musée.

Château Nuremberg (Kaiserburg Xème-XVIème) forteresse Hohenzollern domine ville. Tours remparts. Vue toits rouges.

Procès Nuremberg (20 novembre 1945 - 1er octobre 1946) 24 dignitaires nazis jugés crimes guerre crimes humanité. Göring, Hess, Ribbentrop, Speer, etc. 12 condamnés mort. Palais Justice Salle 600 visitable, musée Memorium.

Germanisches Nationalmuseum plus grand musée culture allemande 1,3 million objets Préhistoire-XXIème.

Christkindlesmarkt marché Noël plus célèbre Allemagne depuis 1628, 2 millions visiteurs. Hauptmarkt place 180 chalets. Glühwein vin chaud, Lebkuchen pain épices, Bratwurst, décorations. Christkind Ange Noël fillette ouvre marché.

**HEIDELBERG - VILLE ROMANTIQUE UNIVERSITAIRE**
Heidelberg 160 000 hab Bade-Wurtemberg vallée Neckar. Université plus ancienne Allemagne (1386). Romantisme allemand XIXème poètes (Hölderlin, Eichendorff, Brentano) célébrèrent. Mark Twain "plus belle place que j'aie vue" Vagabond Abroad (1880).

Château Heidelberg (XIIIème-XVIIème) ruines romantiques dominant ville colline. Détruit Guerre Succession Palatinat 1693, foudre 1764. Renaissance allemande. Grand Tonneau (Grosses Fass 1751) 220 000 L jamais rempli entièrement. Jardin Hortus Palatinus terrasses. Funiculaire montée. Vue Neckar vallée sublime coucher soleil.

Vieille Ville (Altstadt) baroque reconstruite, Hauptstrasse piétonne 1,6 km boutiques restos. Place Marché église Saint-Esprit (1398-1441) gothique. Vieux Pont (Alte Brücke 1788) Neckar arches pierre, Pont-Singe statue bronze toucher porte-bonheur.

Philosophenweg "Chemin Philosophes" rive nord Neckar promenade colline, professeurs étudiants déambulaient pensées, panorama château ville.

Université étudiants 20% population, ambiance jeune festive. Karzer prison étudiants 1778-1914 enfermés quelques jours infractions mineures, graffitis préservés.

**FORÊT-NOIRE - NATURE ENCHANTÉE**
Forêt-Noire (Schwarzwald) massif montagneux Bade-Wurtemberg 200x60 km, 1 493m Feldberg. Sapins denses sombres origine nom. Paysages féeriques lacs cascades fermes traditionnelles toit pentu. Coucous Kuckucksuhren horlogerie Triberg depuis 1640. Gâteau Forêt-Noire (Schwarzwälder Kirschtorte) génoise chocolat cerises griottines Kirsch crème chantilly copeaux chocolat inventé 1915 Café Ahrend Bonn.

Fribourg-en-Brisgau (Freiburg 230 000 hab) ville universitaire écologique porte Forêt-Noire. Cathédrale (Münster 1200-1513) gothique grès rouge flèche ajourée 116m "plus belle tour chrétienté" Burckhardt. Bächle ruisselets caniveaux médiévaux. Schlossberg château colline funiculaire vue Vosges Alpes.

Titisee lac glaciaire eaux pures baignade été. Feldberg ski 55 km pistes. Sentiers randonnées 24 000 km balisés.

Baden-Baden station thermale chic Belle Époque casino (1824) Dostoïevski perdit fortune. Thermes romains. Festspielhaus opéra 2ème plus grand Europe 2 500 places.

Triberg cascade 163m 7 paliers plus haute Allemagne. Maison 1 000 Horloges musée coucous géants.

Route Vins Bade (Badische Weinstrasse) 160 km vignobles coteaux sud Forêt-Noire, Riesling, Pinot Noir (Spätburgunder), dégustations caves Straub.

**ROMANTISCHE STRASSE - ROUTE ROMANTIQUE**
Route Romantique 460 km Würzburg-Füssen traversant Bavière Franconie villages médiévaux châteaux Renaissance vignobles Alpes. Créée 1950 tourisme. Train bus.

Rothenburg ob der Tauber joyau médiéval parfaitement préservé remparts tours 42 portes. Marktplatz Rathaus Renaissance escalier 60m vue. Musée Noël Käthe Wohlfahrt ouvert toute année décorations. Crime justice médiéval musée torture instruments. Schneeballen pâtisserie boule friture.

Dinkelsbühl remparts complets 16 tours, maisons colombages colorées, Fête enfants historique juillet.

Nördlingen cratère impact météorite 15 millions années circulaire parfait 25 km diamètre, remparts complets tour Daniel église Saint-Georges 90m 365 marches.

Augsbourg (Augsburg 300 000) romaine Augusta Vindelicorum -15 av JC, banquiers Fugger Renaissance richissimes prêtèrent empereurs. Fuggerei (1516) plus ancien lotissement social monde, 140 logements, loyer symbolique 0,88€/an + 3 prières quotidiennes fondateur Jakob Fugger, musée. Hôtel Ville Renaissance salle dorée. Cathédrale vitraux prophètes Xème plus anciens.

Würzburg Résidence (1720-1744) baroque rococo UNESCO chef-d'œuvre Balthasar Neumann. Escalier monumental fresque Tiepolo 30x18m plus grande monde. Jardins. Forteresse Marienberg vignobles Franconie vin blanc sec.`
      }
    }
  };

  useEffect(function() {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(function() {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: 'assistant', content: greetings[currentLang], emotion: 'welcome' }]);
    }
  }, [isOpen, currentLang]);

  const speak = function(text, emotion = 'neutral') {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      
      const cleanText = text
        .replace(/\*\*/g, '')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
        .replace(/#{1,6}\s/g, '')
        .substring(0, 600);
      
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = currentLang;
      utterance.rate = 0.92;
      utterance.pitch = 0.85; // VOIX MASCULINE GRAVE
      utterance.volume = 1.0;
      
      if (emotion === 'enthusiastic') {
        utterance.rate = 1.0;
        utterance.pitch = 0.9;
      } else if (emotion === 'empathetic') {
        utterance.rate = 0.88;
        utterance.pitch = 0.82;
      }
      
      const voices = window.speechSynthesis.getVoices();
      const maleVoiceKeywords = ['male', 'homme', 'thomas', 'daniel', 'diego', 'hans', 'luca', 'ricardo', 'masculin'];
      
      const maleVoice = voices.find(function(voice) {
        const isRightLang = voice.lang.startsWith(currentLang.substring(0, 2));
        const isMale = maleVoiceKeywords.some(function(keyword) {
          return voice.name.toLowerCase().includes(keyword);
        });
        return isRightLang && isMale;
      });
      
      if (maleVoice) utterance.voice = maleVoice;
      
      utterance.onstart = function() { setIsSpeaking(true); };
      utterance.onend = function() { setIsSpeaking(false); };
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = function() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const getIntelligentResponse = function(userMessage) {
    const msgLower = userMessage.toLowerCase();
    
    // DÉTECTION NOM
    if (msgLower.match(/je m'appelle|mon nom|c'est|appelle moi/)) {
      const match = userMessage.match(/(?:je m'appelle|mon nom est|c'est|appelle moi)\s+(\w+)/i);
      if (match) {
        setUserName(match[1]);
        return `Enchanté ${match[1]} ! 😊 Moi c'est Alex. Bon, maintenant qu'on se connaît, dites-moi - RÉUSSITESS c'est 62 pages patrimoine, 26 boutiques, et 5 INNOVATIONS MONDIALES UNIQUES. Qu'est-ce qui vous intéresse ?`;
      }
    }

    // INNOVATIONS
    if (msgLower.match(/innovation|nouveau|unique|original|technologie|futur/)) {
      let response = `Ah ! Les 5 INNOVATIONS MONDIALES EXCLUSIVES RÉUSSITESS ! 🚀\n\nÉcoutez, ce sont des concepts UNIQUES qui n'existent NULLE PART au monde :\n\n`;
      
      Object.values(KNOWLEDGE_BASE.innovations).forEach(function(innov) {
        response += `**${innov.emoji} ${innov.nom}**\n${innov.tagline}\n\n`;
      });
      
      response += `Laquelle vous intrigue ? Je peux vous expliquer chacune en DÉTAIL !`;
      return response;
    }

    // Innovation spécifique
    if (msgLower.match(/dna|adn|ancestral|ancêtre|généalogie/)) {
      const dna = KNOWLEDGE_BASE.innovations.culturalDNA;
      return `${dna.emoji} **${dna.nom}** - ${dna.tagline}\n\n${dna.description}\n\n**AVANTAGES:**\n${dna.avantages.map(function(a) { return '✅ ' + a; }).join('\n')}`;
    }

    if (msgLower.match(/time machine|voyage temps|3d|reconstitution|époque/)) {
      const tm = KNOWLEDGE_BASE.innovations.timeMachine;
      return `${tm.emoji} **${tm.nom}** - ${tm.tagline}\n\n${tm.description.substring(0, 1500)}...\n\n**AVANTAGES:**\n${tm.avantages.map(function(a) { return '✅ ' + a; }).join('\n')}`;
    }

    if (msgLower.match(/guardian|ange|alerte|géolocalisation|gps/)) {
      const cg = KNOWLEDGE_BASE.innovations.culturalGuardian;
      return `${cg.emoji} **${cg.nom}** - ${cg.tagline}\n\n${cg.description.substring(0, 1500)}...\n\n**AVANTAGES:**\n${cg.avantages.map(function(a) { return '✅ ' + a; }).join('\n')}`;
    }

    if (msgLower.match(/wallet|portefeuille|badge|gamification|niveau/)) {
      const cw = KNOWLEDGE_BASE.innovations.culturalWallet;
      return `${cw.emoji} **${cw.nom}** - ${cw.tagline}\n\n${cw.description.substring(0, 1500)}...\n\n**AVANTAGES:**\n${cw.avantages.map(function(a) { return '✅ ' + a; }).join('\n')}`;
    }

    if (msgLower.match(/mood|thérapie|émotion|bien-être|mental|psycho/)) {
      const mt = KNOWLEDGE_BASE.innovations.moodTherapy;
      return `${mt.emoji} **${mt.nom}** - ${mt.tagline}\n\n${mt.description.substring(0, 1500)}...\n\n**AVANTAGES:**\n${mt.avantages.map(function(a) { return '✅ ' + a; }).join('\n')}`;
    }

    // ALLEMAGNE
    if (msgLower.match(/allemagne|deutsch|berlin|munich|baviere|château/)) {
      const de = KNOWLEDGE_BASE.pays.allemagne;
      return `L'Allemagne ! ${de.capitale}, ${de.population} habitants.\n\n${de.histoire.substring(0, 1200)}...\n\n**PATRIMOINE EXCEPTIONNEL:**\n${de.patrimoine.substring(0, 1200)}...\n\nVous voulez en savoir plus sur Berlin, Munich, les châteaux de Bavière, ou l'histoire ?`;
    }

    // [CONTINUEZ ICI AVEC LES 13 AUTRES PAYS...]

    // RÉPONSE DÉFAUT
    return `Je peux vous parler de :\n\n**🚀 5 INNOVATIONS MONDIALES** uniques\n**🌍 62 PAGES PATRIMOINE** détaillées\n**🛍️ 26 BOUTIQUES** mondiales\n\nQu'est-ce qui vous tente ${userName ? userName : ''} ?`;
  };

  const handleSubmit = function(e) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(function(prev) { return prev.concat({ role: 'user', content: userMessage }); });
    setIsLoading(true);

    setTimeout(function() {
      const response = getIntelligentResponse(userMessage);
      const emotion = userMessage.toLowerCase().includes('merci') ? 'empathetic' : 'neutral';
      setMessages(function(prev) { return prev.concat({ role: 'assistant', content: response, emotion: emotion }); });
      speak(response, emotion);
      setIsLoading(false);
    }, 800);
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
            <span className="relative inline-flex rounded-full h-8 w-8 bg-red-500 items-center justify-center">🔊</span>
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-32 right-8 w-[650px] h-[850px] bg-white rounded-3xl shadow-2xl flex flex-col border-4 border-purple-600">
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white p-6 rounded-t-3xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-5xl">👨</div>
                <div>
                  <h3 className="font-bold text-2xl">Alex</h3>
                  <p className="text-sm">Expert Culture • RÉUSSITESS</p>
                  <p className="text-xs mt-1">62 pages • 26 boutiques • 5 innovations 🚀</p>
                </div>
              </div>
              <div className="flex gap-3">
                {isSpeaking && (
                  <button onClick={stopSpeaking} className="hover:bg-white/20 p-3 rounded-xl text-3xl">🔇</button>
                )}
                <button onClick={function() { setIsOpen(false); }} className="hover:bg-white/20 p-3 rounded-xl text-2xl font-bold">✕</button>
              </div>
            </div>
          </div>

          <div className="p-4 border-b-2 flex gap-2 overflow-x-auto bg-gradient-to-r from-purple-50 to-pink-50">
            {languages.map(function(lang) {
              const isActive = currentLang === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={function() { setCurrentLang(lang.code); }}
                  className={isActive 
                    ? 'px-5 py-3 rounded-xl font-semibold whitespace-nowrap bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'px-5 py-3 rounded-xl font-semibold whitespace-nowrap bg-white hover:bg-purple-100 text-gray-700 border-2 border-purple-200'}
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
                    <span className="text-gray-600">Alex réfléchit...</span>
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
                placeholder="Parlez-moi... 💬"
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
            <p className="text-xs text-gray-400 mt-2 text-center">
              🗣️ Voix masculine • 5 innovations • 62 pages • 26 boutiques
            </p>
          </form>
        </div>
      )}
    </div>
  );
}
function reussitess() { return "REUSSITESS971 55p 26A"; }
