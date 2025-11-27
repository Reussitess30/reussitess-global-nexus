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
    { code: 'pt-BR', flag: '🇧🇷', name: 'Português' }
  ];

  const greetings = {
    'fr-FR': 'Bonjour ! Je suis votre assistant REUSSITESS cultivé. Je connais 62 pages de patrimoine mondial, 26 boutiques Amazon, PLUS des recettes de grand-mère, astuces shopping, culture générale et conseils voyage. Posez-moi toutes vos questions !',
    'en-US': 'Hello! I am your cultured REUSSITESS assistant. I know 62 world heritage pages, 26 Amazon stores, PLUS grandmother recipes, shopping tips, general culture and travel advice. Ask me anything!',
    'es-ES': '¡Hola! Soy tu asistente REUSSITESS culto. Conozco 62 páginas patrimonio, 26 tiendas Amazon, MÁS recetas abuela, consejos compras, cultura general. ¡Pregúntame!',
    'de-DE': 'Hallo! Ich bin Ihr gebildeter REUSSITESS-Assistent. 62 Kulturerbe-Seiten, 26 Amazon-Shops, PLUS Oma-Rezepte, Einkaufstipps, Allgemeinwissen!',
    'it-IT': 'Ciao! Sono il tuo assistente REUSSITESS colto. 62 pagine patrimonio, 26 negozi Amazon, PIÙ ricette nonna, consigli shopping, cultura generale!',
    'pt-BR': 'Olá! Sou seu assistente REUSSITESS culto. 62 páginas patrimônio, 26 lojas Amazon, MAIS receitas vovó, dicas compras, cultura geral!'
  };

  // BASE DE CONNAISSANCES EXHAUSTIVE + CULTURE + ASTUCES
  const knowledgeData = {
    
    // PAYS DÉTAILLÉS (11 avec Inde)
    france: {
      pays: 'France',
      capitale: 'Paris',
      population: '68 millions',
      unesco: '49 sites UNESCO Record Europe',
      patrimoine: 'Tour Eiffel 1889 Gustave Eiffel 330m fer puddlé 7M visiteurs. Versailles Louis XIV 1682 château 2300 pièces jardins Le Nôtre. Mont-Saint-Michel abbaye marées 3M visiteurs merveille Occident. Châteaux Loire Renaissance Chambord 440 pièces François 1er. Vignobles Bordeaux Bourgogne Champagne terroirs AOC. Grotte Lascaux 17000 ans art pariétal taureaux chevaux.',
      culture: 'Gastronomie UNESCO 2010 repas français art vivre baguette fromage vin. Louvre musée plus visité monde 10M Joconde Léonard Vinci. Mode Paris capitale Chanel 1910 petite robe noire Dior New Look 1947. Cinéma Cannes Palme Or Lumière 1895 invention.',
      economie: '7e économie PIB 2800Md. TGV 1981 record 574 km/h Alstom ferroviaire. Airbus Toulouse A380 co-leader Boeing. Nucléaire 56 réacteurs 70% électricité indépendance. Tourisme N1 mondial 90M France destination préférée.',
      recettes: 'Bœuf bourguignon grand-mère: bœuf 1kg carottes oignons vin rouge Bourgogne 6h mijotage doux. Blanquette veau traditionnelle: veau épaule carottes poireaux bouquet garni sauce blanche citron. Tarte Tatin 1880 sœurs Tatin Sologne pommes caramélisées renversée. Pot-au-feu dimanche: bœuf jarret légumes racines bouillon os moelle pain grillé.',
      astuces: 'Shopping Paris Galeries Lafayette soldes janvier juillet -50%. Marché aux Puces Saint-Ouen samedi dimanche antiquités vintage négociation. Pass Museum Paris 48h 50 musées coupe-file Louvre Orsay. Train SNCF Ouigo low-cost Paris province 10€. Boulangeries quartier pain frais 7h artisan label meilleur croissant.',
      voyage: 'Visiter Versailles mardi vendredi éviter weekend foule. Tour Eiffel réserver billets en ligne 3 mois avance sommet coucher soleil. Mont-Saint-Michel marée haute spectacle consulter horaires coefficients. Loire vélo châteaux Loire à Vélo 800km Chambord Chenonceau.',
      url: '/bibliotheque/europe/france'
    },

    italie: {
      pays: 'Italie',
      capitale: 'Rome',
      population: '59 millions',
      unesco: '58 sites UNESCO RECORD MONDIAL ABSOLU',
      patrimoine: 'Colisée Rome 70-80 AD Flaviens amphithéâtre 50000 places gladiateurs reconstitution 3D. Pompéi Herculanum Vésuve 79 AD ville fossilisée cendres maisons fresques corps figés. Florence berceau Renaissance Médicis 15e Michel-Ange David Duomo Brunelleschi. Venise lagune 118 îles République Sérénissime 1000 ans canaux gondoles Palais Doges. Vatican 44 hectares plus petit État Chapelle Sixtine Michel-Ange Jugement Dernier plafond 4 ans. Tour Pise campanile cathédrale 1173 inclinaison 3.97° 294 marches.',
      culture: 'Renaissance 14e-17e Humanisme Léonard Vinci Cène homme Vitruve Michel-Ange Pietà Raphaël École Athènes. Gastronomie pizza Napolitaine UNESCO 2017 Margherita tomate mozzarella basilic. Pasta 300 formes carbonara amatriciana bolognaise al dente 8-10 min. Opéra bel canto Verdi Aida Rigoletto Puccini Tosca Madame Butterfly Pavarotti ténor.',
      economie: '8e économie PIB 2000Md. Ferrari Maranello 1947 Enzo supercars F1 champions. Lamborghini Sant Agata Bolognese Aventador Huracán taureau. Mode Milan Fashion Week Armani 1975 tailleur Versace baroque Prada minimalisme. Tourisme 65M destination Rome Florence Venise Amalfi.',
      recettes: 'Carbonara authentique: guanciale bacon joue porc œufs pecorino romano poivre noir SANS crème erreur. Risotto Milanais: riz Carnaroli safran beurre parmesan bouillon 18 min remuage crémeux. Tiramisu Venise 1960: savoiardi biscuits café Marsala mascarpone cacao amer 4h frais. Osso Buco Milanais: jarret veau tomates vin blanc gremolata zeste citron.',
      astuces: 'Shopping outlets Serravalle près Milan Prada Gucci -70%. Marché Porta Portese Rome dimanche matin antiquités vintage cuir. Aperitivo Milan 18h-21h cocktail buffet gratuit Navigli. Train Italo Trenitalia concurrence billets flexibles. Café italien bar comptoir 1€ debout terrasse 5€ assis.',
      voyage: 'Rome Pass 3 jours transport Colisée Vatican coupe-file. Florence Uffizi réserver mois avance David file attente. Venise vaporetto pass 24h éviter gondole 80€. Cinque Terre train régional illimité randonner villages. Toscane agriturismo fermes authentiques huile olive vin Chianti.',
      url: '/bibliotheque/europe/italie'
    },

    inde: {
      pays: 'Inde',
      capitale: 'New Delhi',
      population: '1.4 milliard',
      unesco: '40 sites UNESCO 3e mondial',
      patrimoine: 'Taj Mahal Agra 1653 Shah Jahan marbre blanc Mumtaz Mahal 20000 ouvriers 22 ans symétrie parfaite. Varanasi Bénarès Gange ville sacrée 3000 ans ghats crémation Dashashwamedh pèlerinage. Khajuraho 85 temples érotiques 1000 AD Chandela sculptures tantriques kamasutra pierre. Amber Fort Jaipur palais maharaja éléphants Sheesh Mahal miroirs. Golden Temple Amritsar 1604 Harmandir Sahib dôme or langar 100000 repas gratuits.',
      culture: 'Bollywood Mumbai 1800 films/an plus grande industrie cinéma chants danses couleurs diaspora mondiale. Yoga Patanjali 5000 ans asanas pranayama méditation 300M pratiquants mondiaux UNESCO. Ayurveda médecine traditionnelle doshas vata pitta kapha plantes herbes massage wellness. Cricket religion Sachin Tendulkar dieu IPL ligue plus riche Coupe Monde 2011. Festivals Holi couleurs Diwali lumières Navaratri Durga Puja traditions vivantes.',
      economie: '5e économie PIB 3500Md croissance 6-7%. Bangalore Silicon Valley Asie Infosys TCS Wipro IT outsourcing 5M ingénieurs. ISRO spatial Chandrayaan Lune Mars Mangalyaan lanceurs low-cost record satellites. Pharmacie monde 60% vaccins Serum Institute génériques Afrique Asie accessibles. UPI révolution paiement mobile 500M utilisateurs Paytm fintech inclusion rurale.',
      recettes: 'Curry poulet Tikka Masala: marinade yaourt épices tandoori tomates crème fenugrec coriandre. Biryani Hyderabad: riz basmati safran viande agneau couches dum pukht parfum. Dal Makhani Pendjab: lentilles noires 8h mijotage beurre crème tomates onctueux. Samosa street food: triangles frits pommes terres pois épices chutney tamarin menthe.',
      astuces: 'Shopping soie Varanasi pashmina Cachemire épices Kerala marchés locaux négociation prix divisé 3. Trains sleeper class AC économique réserver IRCTC 60 jours avance. Ayurveda Kerala massage abhyanga 14 jours panchakarma détox. Sim Jio Airtel aéroport data 4G illimité 10€/mois. Rickshaw tuk-tuk négocier moitié prix initial ou Uber Ola apps.',
      voyage: 'Taj Mahal lever soleil vendredi fermé moins monde. Rajasthan palais maharajas Jaipur Udaipur Jodhpur forts désert Thar. Kerala backwaters houseboat 2 jours Alleppey nature tropicale. Goa plages portugais hippie Anjuna marché mercredi. Himalaya Ladakh Dharamsala monastères tibétains trekking altitude juin-septembre.',
      url: '/bibliotheque/asie-pacifique/inde'
    },

    // CONNAISSANCES GÉNÉRALES CULTURE
    'culture-generale': {
      histoire: 'Révolution française 1789 Bastille Déclaration Droits Homme liberté égalité fraternité. Renaissance 15e Italie Humanisme redécouverte Antiquité Léonard Vinci Michel-Ange. Seconde Guerre 1939-1945 Débarquement Normandie 6 juin 1944 libération Europe Shoah 6M juifs. Chute Mur Berlin 9 novembre 1989 réunification Allemagne fin Guerre froide URSS.',
      sciences: 'Einstein E=mc² relativité 1905 espace-temps courbure gravité Nobel. ADN double hélice Watson Crick 1953 code génétique ATCG chromosomes 23 paires. Périclès Athènes démocratie 5e siècle BC Parthénon Acropole philosophie Socrate Platon Aristote. Newton gravité pomme 1687 lois mouvement mécanique classique Principia Mathematica.',
      arts: 'Impressionnisme Monet Nymphéas lumière couleurs Renoir Degas ballet. Picasso cubisme Guernica 1937 guerre civile espagnole Demoiselles Avignon révolution. Bach fugues contrepoint Passion Jean orgue. Mozart prodige 600 œuvres Requiem opéras Figaro symphonies.',
      geographie: '7 continents Asie 44M km² plus grand Afrique Amériques Europe Océanie Antarctique. Océans Pacifique 165M km² Atlantique Indien Arctique Antarctique. Mont Everest 8849m plus haut Népal Tibet Hillary 1953. Amazone fleuve 6400 km poumon Terre biodiversité.'
    },

    // RECETTES GRAND-MÈRE PAR PAYS
    'recettes': {
      france: 'Pot-au-feu dimanche bœuf jarret légumes racines bouillon 3h doux. Blanquette veau sauce blanche citron carottes champignons riz. Clafoutis Limousin cerises noires pâte crêpe four 180°C 30min. Soupe oignon gratinée pain gruyère bouillon bœuf cognac bistrot nuit.',
      italie: 'Minestrone nonna légumes saison haricots pasta bouillon parmesan croûte. Pesto Genovese basilic pignons ail parmesan pecorino huile olive mortier. Panna cotta crème vanille gélatine coulis fruits rouges léger. Focaccia Ligurie huile olive romarin sel gros moelleux apéritif.',
      bresil: 'Feijoada plat national haricots noirs viandes porc saucisses riz farofa orange. Moqueca Bahia poisson lait coco dendê tomates coriandre. Brigadeiro condensé cacao beurre billes chocolat fêtes enfants. Pão de queijo fromage tapioca boules moelleuses petit-déjeuner.',
      inde: 'Chai masala thé cardamome gingembre cannelle clou girofle lait sucre. Lassi yaourt mangue rose salé digestif rafraîchissant. Khichdi riz lentilles curcuma ghee confort malade ayurveda. Gulab jamun boulettes lait rose sirop cardamome dessert festivals.',
      maroc: 'Tajine agneau pruneaux miel cannelle amandes couscous vapeur. Harira soupe ramadan lentilles pois chiches tomates citron dattes. Pastilla pigeon amandes cannelle sucre glace feuilleté salé-sucré. Msemen crêpes feuilletées huile beurre miel petit-déjeuner.',
      japon: 'Miso soupe pâte soja tofu algues wakame dashi bouillon. Onigiri boules riz nori umeboshi saumon bento portable. Tamagoyaki omelette sucrée roulée dashi mirin petit-déjeuner. Gyoza raviolis porc chou ail vapeur poêlés sauce soja.'
    },

    // ASTUCES AMAZON SHOPPING
    'astuces-amazon': {
      generale: 'Amazon Prime livraison gratuite 24h essai 30 jours gratuit annulation facile. Black Friday novembre Cyber Monday réductions -70% listes souhaits alertes prix. Lightning Deals offres éclair limitées temps quantité notifications app mobile. Warehouse Deals produits retournés reconditionnés -30% garantie Amazon.',
      comparaison: 'CamelCamelCamel tracker prix historique courbe meilleur moment acheter alertes baisse. Keepa extension Chrome historique prix graphique évolution tendances. Honey extension coupons automatiques codes promo cashback points. Amazon Assistant comparateur prix concurrence alerte baisse liste envies.',
      categories: 'Livres Kindle Unlimited 10€/mois illimité lecture numérique. Amazon Fresh Pantry courses alimentaires abonnement Prime livraison gratuite. Amazon Warehouse électronique reconditionné garantie occasion économies. Handmade artisans créateurs unique personnalisé fait main.',
      international: 'Amazon Global expédition internationale 14 pays USA produits exclusifs. Marketplace vendeurs tiers vérifier avis notations vendeur fiabilité. Amazon Renewed certifié reconditionné garantie 90 jours économies écologique. Subscribe Save abonnement produits récurrents -15% livraison automatique annulation.',
      avis: 'Vine Programme testeurs vérifiés gratuit avis badge Achat Vérifié confiance. Questions-Réponses communauté clients informations détaillées avant achat. Comparer variantes tableau caractéristiques prix différences modèles. Photos clients réelles utilisation vs photos produit vendeur.'
    },

    // CONSEILS VOYAGE PATRIMOINE
    'voyage-unesco': {
      europe: 'Pass InterRail Europe illimité train 33 pays jeunes seniors économies. Airbnb appartements locaux authentique vs hôtels prix familles groupes. Hostels auberges jeunesse privés dortoirs propres sécurisés rencontres voyageurs. Visiter tôt matin sites UNESCO éviter foules chaleur photos lumière douce.',
      asie: 'Visa électronique e-Visa Inde Thaïlande Vietnam 72h avance moins cher. Street food local marchés authentique hygiène files attente signe qualité. Temples tenue respectueuse épaules genoux couverts chaussures enlever. Négociation prix marchés diviser 3 initial sourire patience normal.',
      ameriques: 'National Parks Pass USA 80$ année accès illimité 2000 sites parcs. Uber Lyft transports urbains économiques sécurisés vs taxis aéroports. Airbnb Experiences activités locales guides authentiques cuisine immersion. TSA PreCheck Global Entry douanes rapides aéroports USA voyageurs fréquents.',
      afrique: 'Vaccins obligatoires fièvre jaune paludisme consulter médecin voyages 2 mois avance. Safari lodge camps tentes luxe nature animaux petit-déjeuner inclus. Pourboires guides chauffeurs rangers service 10-15% usage attendu. Saison sèche migration animaux meilleure période juin-octobre Tanzanie Kenya.',
      pratique: 'Assurance voyage annulation rapatriement bagages santé mondial obligatoire. Copies passeport visa cloud email accès urgence perte vol. Adaptateurs électriques universels USB Europe Type C Asie UK USA. Apps offline Maps.me Google Maps télécharger cartes région WiFi.'
    },

    // ANECDOTES HISTORIQUES UNESCO
    'anecdotes-unesco': {
      tajmahal: 'Taj Mahal change couleur selon lumière rose matin blanc midi doré coucher soleil. 20000 ouvriers 22 ans construction marbre Rajasthan transport éléphants 300km. Shah Jahan voulait jumeau noir Yamuna prison fils jamais construit légende. Minarets inclinés extérieur protection tremblement terre architecture génie.',
      toureifel: 'Tour Eiffel devait détruite 20 ans 1909 sauvée antenne radio TSF utilité. Gustave Eiffel appartement sommet 300m reçoit savants Edison laboratoire. Peinture 60 tonnes repeinte tous 7 ans 25000m² 3 nuances dégradé. Hitler voulait détruire 1944 libération Paris général von Choltitz désobéi ordre.',
      colisee: 'Colisée hypogée souterrain 80 ascenseurs trappes animaux gladiateurs surprise public. Velarium voile géante 240 mâts protection soleil pluie manœuvre 1000 marins. Batailles navales naumachies arène remplie eau spectacle reconstitution navale. Chrétiens martyrs légende historiens débattent amphithéâtre exécutions criminels.',
      machupichu: 'Machu Picchu jamais découvert Espagnols caché nuages montagne oubli 400 ans. Hiram Bingham 1911 professeur Yale cherchait Vilcabamba trouvé cité perdue. Architecture anti-sismique pierres ajustées sans mortier tremblement terre résiste. Lamas gardiens site tondent herbe naturellement entretien écologique touristes photo.'
    },

    // BOUTIQUES AMAZON DÉTAILLÉES
    amazon: {
      info: 'REUSSITESS Global Nexus - Réseau affilié Amazon 26 boutiques 14 pays 5 continents',
      pays: {
        usa: 'États-Unis amazon.com leader mondial Prime Day shipping gratuit',
        canada: 'Canada amazon.ca bilangue français-anglais delivery rapide',
        france: 'France amazon.fr Prime 5.99€/mois livraison 1 jour gratuite',
        allemagne: 'Allemagne amazon.de plus grand Europe centrale expédition',
        uk: 'Royaume-Uni amazon.co.uk post-Brexit livraison UK rapide',
        italie: 'Italie amazon.it mode design maison produits italiens',
        espagne: 'Espagne amazon.es marketplace croissance Ibérie',
        paysbas: 'Pays-Bas amazon.nl 2020 nouveau marché Benelux',
        belgique: 'Belgique amazon.com.be bilangue FR-NL services',
        suede: 'Suède amazon.se Scandinavie expansion nordique',
        australie: 'Australie amazon.com.au Pacifique Sud unique sélection',
        singapour: 'Singapour amazon.sg hub Asie du Sud-Est',
        inde: 'Inde amazon.in 2e marché mondial croissance explosive',
        bresil: 'Brésil amazon.com.br Amérique Latine portugais'
      },
      avantages: 'Prix identiques Amazon direct aucun surcoût client. Livraison standard Amazon service client garanti SAV. Programme affilié soutient REUSSITESS contenu gratuit patrimoine. Sécurité paiement Amazon protection acheteur A-Z garantie.',
      conseils: 'Comparer prix Amazon vendeurs marketplace vérifier notations. Lire avis vérifiés Achat Vérifié badge vert confiance. Questions-Réponses clients informations produit usage réel. Subscribe Save -15% abonnement mensuel produits récurrents annulation.',
      url: '/hub-central'
    }
  };

  useEffect(function() {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(function() {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: 'assistant', content: greetings[currentLang] }]);
    }
  }, [isOpen, currentLang]);

  const speak = function(text) {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = currentLang;
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.onstart = function() { setIsSpeaking(true); };
      utterance.onend = function() { setIsSpeaking(false); };
      utterance.onerror = function() { setIsSpeaking(false); };
      window.speechSynthesis.speak(utterance);
    }
  };

  const stopSpeaking = function() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const getResponse = function(userMessage) {
    const msgLower = userMessage.toLowerCase();
    
    // RECHERCHE PAYS
    const paysKeys = ['france', 'italie', 'allemagne', 'espagne', 'suede', 'bresil', 'singapour', 'australie', 'inde'];
    for (let i = 0; i < paysKeys.length; i++) {
      const key = paysKeys[i];
      if (msgLower.includes(key)) {
        const data = knowledgeData[key];
        let response = '📍 ' + data.pays + '\n\n';
        if (data.capitale) response = response + '🏛️ ' + data.capitale + ' - ' + data.population + '\n';
        if (data.unesco) response = response + '🏆 ' + data.unesco + '\n\n';
        if (data.patrimoine) response = response + '🎭 PATRIMOINE:\n' + data.patrimoine + '\n\n';
        if (data.culture) response = response + '🎨 CULTURE:\n' + data.culture + '\n\n';
        if (data.economie) response = response + '💼 ÉCONOMIE:\n' + data.economie + '\n\n';
        if (data.recettes) response = response + '👵 RECETTES GRAND-MÈRE:\n' + data.recettes + '\n\n';
        if (data.astuces) response = response + '💡 ASTUCES VOYAGE:\n' + data.astuces + '\n\n';
        if (data.voyage) response = response + '✈️ CONSEILS:\n' + data.voyage + '\n\n';
        if (data.url) response = response + '➡️ [Page complète](' + data.url + ')';
        return response;
      }
    }

    // RECETTES
    if (msgLower.includes('recette') || msgLower.includes('cuisine') || msgLower.includes('grand-mere') || msgLower.includes('plat')) {
      const recettes = knowledgeData.recettes;
      let response = '👵 RECETTES DE GRAND-MÈRE TRADITIONNELLES:\n\n';
      response = response + '🇫🇷 FRANCE:\n' + recettes.france + '\n\n';
      response = response + '🇮🇹 ITALIE:\n' + recettes.italie + '\n\n';
      response = response + '🇧🇷 BRÉSIL:\n' + recettes.bresil + '\n\n';
      response = response + '🇮🇳 INDE:\n' + recettes.inde + '\n\n';
      response = response + '🇲🇦 MAROC:\n' + recettes.maroc + '\n\n';
      response = response + '🇯🇵 JAPON:\n' + recettes.japon;
      return response;
    }

    // ASTUCES AMAZON
    if (msgLower.includes('amazon') || msgLower.includes('shopping') || msgLower.includes('acheter') || msgLower.includes('astuce')) {
      const astuces = knowledgeData['astuces-amazon'];
      let response = '🛍️ ASTUCES SHOPPING AMAZON:\n\n';
      response = response + '💡 GÉNÉRAL:\n' + astuces.generale + '\n\n';
      response = response + '💰 COMPARAISON PRIX:\n' + astuces.comparaison + '\n\n';
      response = response + '📦 CATÉGORIES:\n' + astuces.categories + '\n\n';
      response = response + '🌍 INTERNATIONAL:\n' + astuces.international + '\n\n';
      response = response + '⭐ AVIS:\n' + astuces.avis + '\n\n';
      response = response + '➡️ [Nos boutiques Amazon](/hub-central)';
      return response;
    }

    // CULTURE GÉNÉRALE
    if (msgLower.includes('histoire') || msgLower.includes('science') || msgLower.includes('culture') || msgLower.includes('general')) {
      const culture = knowledgeData['culture-generale'];
      let response = '🧠 CULTURE GÉNÉRALE:\n\n';
      response = response + '📚 HISTOIRE:\n' + culture.histoire + '\n\n';
      response = response + '🔬 SCIENCES:\n' + culture.sciences + '\n\n';
      response = response + '🎨 ARTS:\n' + culture.arts + '\n\n';
      response = response + '🌍 GÉOGRAPHIE:\n' + culture.geographie;
      return response;
    }

    // VOYAGE CONSEILS
    if (msgLower.includes('voyage') || msgLower.includes('visiter') || msgLower.includes('conseil') || msgLower.includes('tourisme')) {
      const voyage = knowledgeData['voyage-unesco'];
      let response = '✈️ CONSEILS VOYAGE PATRIMOINE UNESCO:\n\n';
      response = response + '🇪🇺 EUROPE:\n' + voyage.europe + '\n\n';
      response = response + '🌏 ASIE:\n' + voyage.asie + '\n\n';
      response = response + '🌎 AMÉRIQUES:\n' + voyage.ameriques + '\n\n';
      response = response + '🌍 AFRIQUE:\n' + voyage.afrique + '\n\n';
      response = response + '💼 PRATIQUE:\n' + voyage.pratique;
      return response;
    }

    // ANECDOTES
    if (msgLower.includes('anecdote') || msgLower.includes('histoire') || msgLower.includes('saviez-vous')) {
      const anecdotes = knowledgeData['anecdotes-unesco'];
      let response = '📖 ANECDOTES HISTORIQUES UNESCO:\n\n';
      response = response + '🇮🇳 TAJ MAHAL:\n' + anecdotes.tajmahal + '\n\n';
      response = response + '🇫🇷 TOUR EIFFEL:\n' + anecdotes.toureifel + '\n\n';
      response = response + '🇮🇹 COLISÉE:\n' + anecdotes.colisee + '\n\n';
      response = response + '🇵🇪 MACHU PICCHU:\n' + anecdotes.machupichu;
      return response;
    }

    // BOUTIQUES AMAZON
    if (msgLower.includes('boutique')) {
      const amazon = knowledgeData.amazon;
      let response = '🛍️ ' + amazon.info + '\n\n';
      response = response + '**NOS 14 PAYS:**\n\n';
      const paysKeys = Object.keys(amazon.pays);
      for (let i = 0; i < paysKeys.length; i++) {
        response = response + '• ' + amazon.pays[paysKeys[i]] + '\n';
      }
      response = response + '\n✅ AVANTAGES:\n' + amazon.avantages + '\n\n';
      response = response + '💡 CONSEILS:\n' + amazon.conseils + '\n\n';
      response = response + '➡️ [Voir toutes les boutiques](' + amazon.url + ')';
      return response;
    }

    // SALUTATIONS
    if (msgLower.includes('bonjour') || msgLower.includes('salut') || msgLower.includes('hello') || msgLower.includes('hi')) {
      return greetings[currentLang];
    }

    // BIBLIOTHÈQUE
    if (msgLower.includes('bibliothèque') || msgLower.includes('pages')) {
      return '📚 BIBLIOTHÈQUE MONDIALE 62 PAGES:\n\n🇪🇺 Europe (15) 🌍 Afrique (7) 🌏 Asie-Pacifique (12) 🏝️ DOM-TOM (10) 🌎 Amériques (4) 🌊 Océanie (3)\n\nPLUS:\n👵 Recettes grand-mère traditionnelles\n💡 Astuces Amazon shopping\n✈️ Conseils voyage UNESCO\n📖 Anecdotes historiques\n🧠 Culture générale\n\n[Voir la bibliothèque](/bibliotheque)';
    }

    // AIDE
    if (msgLower.includes('aide') || msgLower.includes('help')) {
      return '💡 JE PEUX VOUS AIDER AVEC:\n\n📚 62 pages patrimoine mondial détaillées\n🛍️ 26 boutiques Amazon + astuces shopping\n👵 Recettes grand-mère traditionnelles\n✈️ Conseils voyage UNESCO pratiques\n📖 Anecdotes historiques fascinantes\n🧠 Culture générale approfondie\n🗣️ 6 langues avec synthèse vocale\n\n**EXEMPLES:**\n• "France patrimoine"\n• "Recettes italiennes"\n• "Astuces Amazon"\n• "Voyage Taj Mahal"\n• "Culture générale"';
    }

    return 'Je suis votre assistant REUSSITESS cultivé ! Posez-moi des questions sur:\n\n📚 62 pages patrimoine (pays, UNESCO, culture)\n👵 Recettes de grand-mère traditionnelles\n🛍️ Astuces shopping Amazon\n✈️ Conseils voyage pratiques\n📖 Anecdotes historiques\n🧠 Culture générale\n\nEssayez: "France", "Recettes", "Amazon", "Voyage", "Anecdotes" 🌍';
  };

  const handleSubmit = function(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(function(prev) { return prev.concat({ role: 'user', content: userMessage }); });
    setIsLoading(true);

    setTimeout(function() {
      try {
        const response = getResponse(userMessage);
        setMessages(function(prev) { return prev.concat({ role: 'assistant', content: response }); });
        speak(response);
      } catch (error) {
        setMessages(function(prev) { return prev.concat({ role: 'assistant', content: 'Désolé, une erreur est survenue. Réessayez !' }); });
      }
      setIsLoading(false);
    }, 300);
  };

  return (
    <div>
      <button
        onClick={function() { setIsOpen(!isOpen); }}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all z-50 animate-pulse"
        aria-label="Assistant cultivé REUSSITESS"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        {isSpeaking && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-28 right-6 w-[500px] h-[750px] bg-white rounded-3xl shadow-2xl flex flex-col z-50 border-4 border-purple-600">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-5 rounded-t-3xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-3xl animate-bounce">
                🧠
              </div>
              <div>
                <h3 className="font-bold text-lg">Assistant REUSSITESS Cultivé</h3>
                <p className="text-sm opacity-90">62 pages • Recettes • Astuces • Culture 🔊</p>
              </div>
            </div>
            <div className="flex gap-2">
              {isSpeaking && (
                <button onClick={stopSpeaking} className="hover:bg-white/20 p-2 rounded-lg transition">
                  <span className="text-2xl">🔇</span>
                </button>
              )}
              <button onClick={function() { setIsOpen(false); }} className="hover:bg-white/20 p-2 rounded-lg transition text-xl font-bold">
                ✕
              </button>
            </div>
          </div>

          <div className="p-3 border-b-2 border-purple-200 flex gap-2 overflow-x-auto bg-gradient-to-r from-purple-50 to-pink-50">
            {languages.map(function(lang) {
              const isActive = currentLang === lang.code;
              const btnClass = isActive 
                ? 'px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-110'
                : 'px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all bg-white hover:bg-purple-100 text-gray-700 border-2 border-purple-200';
              
              return (
                <button
                  key={lang.code}
                  onClick={function() { setCurrentLang(lang.code); }}
                  className={btnClass}
                >
                  {lang.flag} {lang.name}
                </button>
              );
            })}
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-purple-50/30 to-white">
            {messages.map(function(msg, idx) {
              const isUser = msg.role === 'user';
              const alignClass = isUser ? 'flex justify-end' : 'flex justify-start';
              const bubbleClass = isUser
                ? 'max-w-[85%] p-4 rounded-2xl shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                : 'max-w-[85%] p-4 rounded-2xl shadow-lg bg-white text-gray-800 border-2 border-purple-200';
              
              const htmlContent = msg.content
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\n/g, '<br/>')
                .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="underline font-bold hover:text-purple-600">$1</a>');
              
              return (
                <div key={idx} className={alignClass}>
                  <div className={bubbleClass} dangerouslySetInnerHTML={{ __html: htmlContent }} />
                </div>
              );
            })}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border-2 border-purple-200 p-4 rounded-2xl shadow-lg">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce" />
                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-3 h-3 bg-pink-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t-2 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={function(e) { setInput(e.target.value); }}
                placeholder="Posez votre question... 🧠"
                className="flex-1 border-2 border-purple-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-600 text-lg"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                🚀
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
