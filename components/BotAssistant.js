import { useState, useEffect, useRef } from 'react';

export default function BotAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentLang, setCurrentLang] = useState('fr-FR');
  const [userName, setUserName] = useState('');
  const [conversationContext, setConversationContext] = useState([]);
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
    'fr-FR': 'Bonjour ! 😊 Je suis votre conseiller culturel REUSSITESS, passionné de patrimoine mondial et de voyages. Je connais 62 pages de trésors culturels, des recettes authentiques de grand-mère, des astuces shopping Amazon, et je peux vous guider dans vos découvertes. Comment puis-je vous aider aujourd\'hui ?',
    'en-US': 'Hello! 😊 I am your REUSSITESS cultural advisor, passionate about world heritage and travel. I know 62 pages of cultural treasures, authentic grandmother recipes, Amazon shopping tips, and I can guide you in your discoveries. How can I help you today?',
    'es-ES': '¡Hola! 😊 Soy tu asesor cultural REUSSITESS, apasionado del patrimonio mundial y los viajes. ¡Hablemos!',
    'de-DE': 'Hallo! 😊 Ich bin Ihr REUSSITESS-Kulturberater, leidenschaftlich für Weltkulturerbe und Reisen!',
    'it-IT': 'Ciao! 😊 Sono il tuo consulente culturale REUSSITESS, appassionato di patrimonio mondiale e viaggi!',
    'pt-BR': 'Olá! 😊 Sou seu consultor cultural REUSSITESS, apaixonado por patrimônio mundial e viagens!'
  };

  // BASE DE CONNAISSANCES EXHAUSTIVE COMPLÈTE
  const knowledgeBase = {
    
    // BIBLIOTHÈQUE CULTURELLE MONDIALE COMPLÈTE (62 pages)
    bibliotheque: {
      description: 'Bibliothèque culturelle mondiale REUSSITESS - 62 pages patrimoine UNESCO, traditions, gastronomie, histoire de 5 continents',
      categories: {
        europe: {
          total: 15,
          pays: ['France 49 UNESCO', 'Italie 58 UNESCO record mondial', 'Allemagne 51 UNESCO', 'Royaume-Uni 33 UNESCO', 'Espagne 50 UNESCO', 'Suède 15 UNESCO', 'Belgique 15 UNESCO', 'Suisse 13 UNESCO', 'Luxembourg', 'Monaco', 'Pays-Bas', 'Portugal', 'Autriche', 'Grèce', 'Norvège'],
          highlights: 'Tour Eiffel Versailles, Colisée Venise, Neuschwanstein, Stonehenge, Alhambra, Stockholm Prix Nobel'
        },
        ameriques: {
          total: 4,
          regions: ['Québec francophonie', 'Haïti première république noire', 'Louisiane jazz créole', 'Brésil 23 UNESCO Amazonie'],
          highlights: 'Vieux-Québec fortifié, Citadelle Laferrière, Nouvelle-Orléans jazz, Christ Rédempteur Rio'
        },
        domtom: {
          total: 10,
          territoires: ['Réunion 2 UNESCO volcan', 'Guadeloupe Soufrière', 'Martinique Pelée', 'Guyane spatiale Kourou', 'Mayotte lagon', 'Polynésie Bora-Bora', 'Nouvelle-Calédonie 6 lagons UNESCO', 'Saint-Pierre-et-Miquelon', 'Wallis-Futuna', 'Saint-Martin'],
          highlights: 'Piton Neiges 3070m, Carnaval Guyane, Perles noires Tahiti, Plus grand lagon monde'
        },
        afrique: {
          total: 7,
          pays: ['Sénégal 7 UNESCO Gorée', 'Côte Ivoire 4 UNESCO', 'Cameroun 2 UNESCO', 'Madagascar 3 UNESCO baobabs', 'Mali 4 UNESCO Tombouctou', 'RD Congo 5 UNESCO Virunga', 'Rwanda 1 UNESCO gorilles'],
          highlights: 'Île Gorée traite, Tombouctou manuscrits, Allée Baobabs Madagascar, Gorilles montagne'
        },
        maghreb: {
          total: 4,
          pays: ['Maroc 9 UNESCO médinas', 'Algérie 7 UNESCO Tassili', 'Tunisie 8 UNESCO Carthage', 'Liban 5 UNESCO Baalbek'],
          highlights: 'Médina Fès Marrakech, Timgad romaine, Carthage punique, Cèdres Liban millénaires'
        },
        asiepacifique: {
          total: 12,
          pays: ['Vietnam 8 UNESCO Baie Halong', 'Cambodge 4 UNESCO Angkor', 'Laos 3 UNESCO Luang Prabang', 'Inde 40 UNESCO Taj Mahal', 'Singapour hub financier', 'Australie 20 UNESCO Barrière Corail', 'Nouvelle-Zélande 3 UNESCO Milford', 'Vanuatu', 'Japon', 'Chine', 'Thaïlande', 'Indonésie'],
          highlights: 'Baie Halong 2000 îles, Angkor Vat plus grand temple, Taj Mahal marbre blanc, Uluru sacré'
        },
        oceanie: {
          total: 3,
          iles: ['Fidji 333 îles paradis', 'Papouasie-Nouvelle-Guinée 840 langues record', 'Samoa traditions polynésiennes'],
          highlights: 'Grande Barrière récif 4e, Biodiversité unique, Culture polynésienne authentique'
        }
      },
      total: '62 pages - Plus grande bibliothèque culturelle francophone en ligne'
    },

    // PERSONNALITÉS ET ÉMOTIONS HUMAINES
    emotions: {
      bonjour: ['Bonjour ! 😊 Ravi de vous retrouver !', 'Hello ! 👋 Comment allez-vous aujourd\'hui ?', 'Salut ! 🌟 Prêt pour de nouvelles découvertes ?', 'Bienvenue ! ✨ Je suis là pour vous aider !'],
      aurevoir: ['Au revoir ! 👋 J\'ai adoré notre conversation !', 'À bientôt ! 😊 Revenez vite pour d\'autres découvertes !', 'Bonne journée ! ☀️ N\'hésitez pas à revenir !', 'À la prochaine ! 🌟 Prenez soin de vous !'],
      merci: ['Avec grand plaisir ! 😊', 'C\'est un honneur de vous aider ! ✨', 'Toujours heureux de partager mes connaissances ! 🌍', 'Merci à vous pour votre curiosité ! 📚'],
      encouragement: ['Excellente question ! 🤔', 'Vous avez l\'esprit curieux, j\'adore ! 🌟', 'Ah, sujet passionnant ! 📖', 'Très bon choix de destination ! ✈️'],
      empathie: ['Je comprends parfaitement votre intérêt 💭', 'C\'est une préoccupation légitime 🤝', 'Laissez-moi vous éclairer sur ce point 💡', 'Je sens que ce sujet vous passionne 🎨']
    },

    // CONSEILS PERSONNALISÉS INTELLIGENTS
    conseils: {
      voyage: {
        debutant: 'Pour un premier voyage, je vous recommande Europe de l\'Ouest : France Italie Espagne. Infrastructure excellente, patrimoine riche, langues accessibles. Commencez par Paris 5 jours Tour Eiffel Louvre Versailles, puis Rome 4 jours Colisée Vatican, enfin Barcelone 3 jours Sagrada Família Ramblas. Budget 2000€ tout compris. Meilleure période avril-juin septembre-octobre éviter foules chaleur.',
        expert: 'Aventurier confirmé ? Tentez circuit Asie du Sud-Est hors sentiers : Laos Luang Prabang temples dorés, Cambodge Angkor lever soleil Bayon, Vietnam Hanoï street food baie Halong jonque. 3 semaines budget 1500€ backpack. Visas électroniques, vaccins hépatite A typhoïde. Saison sèche novembre-mars. Expérience authentique marchés locaux homestay villages.',
        famille: 'Famille avec enfants ? Privilégiez sécurité confort : Québec nature histoire francophone, Réunion plages volcan faune, Australie Sydney Uluru Grande Barrière snorkeling. Hébergements familiaux cuisines équipées, activités éducatives ludiques, distances raisonnables. Budget moyen 4000€ famille 4 personnes 2 semaines. Pensez assurance annulation santé enfants.',
        luxe: 'Séjour prestige ? Polynésie française Bora-Bora bungalow pilotis lagon turquoise, Maldives resort 5 étoiles spa, Émirats Dubaï Burj Khalifa Abu Dhabi Grande Mosquée. Services conciergerie, excursions privées hélico, gastronomie étoilée. Budget 10000€+ semaine couple. Réservation 6 mois avance meilleurs bungalows.',
        culturel: 'Passionné culture UNESCO ? Circuit Italie 3 semaines : Rome Colisée Vatican Florence Uffizi David Venise Doge gondoles Milan Cène Scala Pompéi cendres Sienne médiévale. Guides experts histoire art, entrées coupe-file, cours cuisine toscane. Budget 3500€ hébergement charme. Printemps automne éviter canicule tourisme masse.'
      },
      cuisine: {
        francaise: 'Cuisine française terroir : Commencez bases mère béchamel velouté espagnole. Pot-au-feu dimanche bœuf jarret légumes racines bouillon 3h. Blanquette veau traditionnelle carottes champignons riz sauce blanche citron. Coq vin Bourgogne rouge marinade 24h champignons lardons. Bœuf bourguignon mijotage 6h doux carottes perles oignons. Desserts clafoutis cerises Limousin tarte Tatin sœurs pommes caramélisées.',
        italienne: 'Secrets nonna italienne : Pasta JAMAIS huile eau bouillante salée abondante al dente 8-10 min égoutter réserver eau cuisson. Carbonara authentique guanciale joue porc œufs pecorino poivre SANS crème erreur fatale. Risotto Carnaroli bouillon chaud louche louche remuer constant 18 min mantecatura beurre parmesan crémeux. Pesto mortier basilic jeune pignons ail parmesan pecorino huile Ligurie. Tiramisù savoiardi café Marsala mascarpone cacao 4h réfrigérateur.',
        asiatique: 'Bases cuisine asiatique : Wok feu vif huile arachide fumante légumes croquants viande saisie sauce dernier moment. Riz parfait ratio 1:1.5 repos 10 min couvert grains détachés. Curry indien tempérage épices ghee libération arômes cumin coriandre curcuma cardamome. Sushi riz vinaigré éventail refroidir poisson ultra frais grade sashimi -60°C parasites. Pho vietnamien bouillon os 12h anis étoilé cannelle nouilles herbes fraîches.',
        mondiale: 'Tour monde culinaire : Tajine marocain agneau pruneaux miel couscous vapeur. Ceviche péruvien poisson cru citron vert oignon rouge piment. Pad Thai nouilles riz crevettes tamarin cacahuètes. Paella valencienne safran fruits mer poulet lapin riz bomba. Moussaka grecque aubergines viande hachée béchamel cannelle. Feijoada brésilienne haricots noirs viandes porc riz farofa orange.'
      },
      shopping: {
        amazon: 'Stratégie shopping Amazon pro : 1) Créer liste envies surveiller prix CamelCamelCamel historique baisse alerte. 2) Black Friday Cyber Monday Lightning Deals préparation 15 jours avance repérage. 3) Prime essai 30 jours gratuit profiter expédition gratuite annuler avant facturation. 4) Warehouse Deals produits retournés reconditionnés -30% garantie identique neuf. 5) Subscribe Save abonnement -15% produits récurrents café capsules shampoing annulation facile. 6) Comparer vendeurs marketplace vérifier notations avis achat vérifié éviter contrefaçons.',
        boutiques: 'Boutiques REUSSITESS 26 Amazon 14 pays : USA canada.com stock immense nouveautés. Europe France amazon.fr livraison rapide. Allemagne amazon.de prix compétitifs Europe centrale. UK amazon.co.uk mode design. Italie amazon.it style maison. Espagne amazon.es marché ibérique. Asie Singapour amazon.sg hub Sud-Est. Inde amazon.in croissance explosive Bollywood. Australie amazon.com.au Pacifique sélection unique. Prix identiques aucun surcoût soutien contenu gratuit patrimoine.',
        qualite: 'Reconnaître qualité produits : 1) Avis vérifiés badge Achat Vérifié minimum 100 avis note 4+. 2) Questions-Réponses clients utilisation réelle problèmes fréquents. 3) Photos clients vs vendeur différence rendu réel. 4) Marque réputation recherche Google Reddit fiabilité. 5) Garantie durée retour SAV facilité. 6) Certifications labels bio écolo FairTrade légitimes. 7) Prix cohérent défiance prix cassés qualité douteuse.',
        economiser: 'Économiser intelligent : 1) Honey extension automatique codes promo cashback. 2) Camelcamelcamel tracker prix historique meilleur moment achat. 3) Keepa Chrome graphique évolution tendances. 4) Newsletter promotions exclusives -20%. 5) Carte bancaire cashback 1-3% achats. 6) Grouper commandes livraison gratuite seuil. 7) Reconditionné Amazon Renewed certifié garantie 90 jours économies écologique.'
      },
      culture: {
        histoire: 'Enrichir culture générale histoire : 1) Chronologie mentale 4 périodes Antiquité -3000 Moyen-Âge 476-1492 Moderne 1492-1789 Contemporaine 1789-. 2) Événements clés Révolution française 1789 Napoléon Empire Première Guerre 1914-1918 Seconde 1939-1945 Décolonisation 1945-1970. 3) Personnalités Charlemagne père Europe Louis XIV Roi-Soleil Napoléon Bonaparte Churchill De Gaulle. 4) Documentaires Arte Histoire chaînes YouTube qualité. 5) Musées virtuels Louvre British Museum Metropolitan gratuits ligne.',
        arts: 'Apprécier arts : 1) Peinture mouvements Renaissance 15e-16e Impressionnisme 19e Monet lumière Cubisme Picasso formes. 2) Sculpture Antiquité grecque romaine Renaissance Michel-Ange David moderne Rodin Penseur. 3) Architecture gothique Notre-Dame Renaissance châteaux baroque Versailles moderne Corbusier. 4) Musique classique Bach fugues Mozart génie Beethoven symphonies. 5) Littérature classiques Hugo Balzac Zola Proust Recherche Temps Perdu. 6) Cinéma nouvelle vague Truffaut Godard chefs-d\'œuvre Fellini Bergman.',
        sciences: 'Comprendre sciences : 1) Physique Einstein relativité E=mc² Newton gravité pomme lois mouvement. 2) Biologie Darwin évolution sélection naturelle ADN Watson Crick double hélice génétique. 3) Chimie tableau périodique Mendeleïev éléments liaisons molécules réactions. 4) Astronomie système solaire galaxies Voie Lactée Big Bang expansion univers exoplanètes vie. 5) Mathématiques Pythagore théorème Archimède Euler Gauss théories nombres. 6) Technologie révolutions industrielles vapeur électricité informatique internet IA.',
        geographie: 'Maîtriser géographie : 1) Continents 7 Asie plus grand 44M km² Afrique Amériques Europe Océanie Antarctique. 2) Océans Pacifique 165M km² Atlantique Indien Arctique Antarctique 71% surface Terre. 3) Pays 195 reconnus ONU capitales monnaies langues officielles. 4) Reliefs montagnes Everest 8849m plus haut déserts Sahara 9M km² fleuves Amazone Nil. 5) Climats zones équatoriale tropicale tempérée polaire influences altitude océans. 6) Ressources naturelles eau douce pétrole minerais agriculture pêche forêts enjeux géopolitiques.'
      }
    },

    // DONNÉES DÉTAILLÉES PAYS (extensible)
    pays: {
      france: {
        identite: { pays: 'France', capitale: 'Paris', population: '68 millions', langues: 'Français', monnaie: 'Euro', fuseau: 'UTC+1' },
        unesco: { total: 49, record: 'Record Europe', sites: 'Tour Eiffel Versailles Mont-Saint-Michel Châteaux Loire Lascaux Pont Gard Carcassonne' },
        patrimoine: 'Tour Eiffel 1889 Gustave Eiffel 330m fer puddlé 7M visiteurs symbole Paris France monde. Versailles Louis XIV 1682 château 2300 pièces jardins Le Nôtre galerie Glaces 73m roi Soleil grandeur. Mont-Saint-Michel abbaye îlot rocher marées baie 3M visiteurs merveille Occident architecture médiévale. Châteaux Loire Renaissance Chambord 440 pièces François 1er escalier double hélice Léonard Vinci Chenonceau galerie Diane arches Cher. Grotte Lascaux 17000 ans art pariétal paléolithique taureaux chevaux fresques pigments naturels Dordogne.',
        culture: 'Gastronomie française UNESCO 2010 art vivre repas convivialité baguette tradition 320 fromages AOC vins terroirs Bordeaux Bourgogne Champagne. Louvre musée plus visité monde 10M visiteurs Joconde Léonard Vinci Vénus Milo Victoire Samothrace pyramide Pei. Mode Paris capitale Chanel 1910 Coco petite robe noire tailleur tweed Dior 1947 New Look révolution Christian Yves Saint Laurent. Cinéma Lumière 1895 invention 7e art Cannes Festival 1946 Palme Or prestige réalisateurs Truffaut Godard nouvelle vague.',
        economie: '7e économie mondiale PIB 2800 milliards euros. TGV 1981 Alstom record vitesse 574 km/h Paris-Lyon 2h réseau 2800 km grande vitesse ferroviaire. Airbus Toulouse A380 géant ciel co-leader Boeing avions civils coopération européenne. Nucléaire EDF 56 réacteurs 70% électricité production indépendance énergétique technologie française. Tourisme N°1 mondial destination préférée 90M visiteurs annuels Paris Côte Azur châteaux patrimoine gastronomie.',
        recettes: 'Pot-au-feu dimanche plat familial bœuf jarret paleron légumes racines carottes poireaux navets céleri bouillon os moelle 3h mijotage doux pain grillé moutarde cornichons. Blanquette veau traditionnelle épaule tendron carottes champignons bouquet garni thym laurier sauce blanche roux beurre farine jaune œuf citron riz pilaf accompagnement. Bœuf bourguignon Bourgogne vin rouge Pinot Noir bœuf joue carottes oignons grelots lardons champignons marinade 24h mijotage 6h doux saveurs concentrées. Coq vin coq fermier découpe vin rouge Bourgogne marinade échalotes champignons Paris lardons fumés flambé cognac tradition rurale dimanche.',
        astuces: 'Paris transport Navigo semaine 30€ illimité métro bus RER zones 1-5 aéroports économie taxis Uber. Musées Paris Museum Pass 2-4-6 jours 50€-65€-80€ accès 50 musées Louvre Orsay coupe-file réservation. Shopping soldes janvier juillet -30% -50% grands magasins Galeries Lafayette Printemps Marais boutiques créateurs Champs-Élysées luxe. Boulangeries quartier pain frais 7h matin croissants beurre 1.20€ label Meilleur Croissant Paris concours artisanal qualité. Marchés dimanche matin Bastille Raspail biologiques fromages charcuteries fruits légumes saison producteurs prix directs négociation.',
        voyage: 'Versailles mardi vendredi 9h ouverture éviter weekend foule 4h visite château jardins Trianon location vélo parc. Tour Eiffel réservation ligne 3 mois avance sommet 3e étage coucher soleil vue panoramique Seine illuminations nuit scintillement heure pile. Mont-Saint-Michel marée haute spectaculaire coefficient 110+ consulter horaires annuaire traversée baie pieds nus guide 4h sables mouvants danger. Loire vélo châteaux Loire à Vélo 800 km Chambord Chenonceau Amboise Villandry jardins itinéraires balisés location vélo électrique 30€/jour hébergements cyclistes. Train SNCF Ouigo low-cost Paris province Marseille Lyon Bordeaux 10€-30€ réservation avance 4 mois billet non échangeable bagages cabine 55x35x25 supplément valise.',
        url: '/bibliotheque/europe/france'
      },
      italie: {
        identite: { pays: 'Italie', capitale: 'Rome', population: '59 millions', langues: 'Italien', monnaie: 'Euro', fuseau: 'UTC+1' },
        unesco: { total: 58, record: 'RECORD MONDIAL ABSOLU', sites: 'Colisée Pompéi Florence Venise Vatican Pise Cinque Terre Vérone' },
        patrimoine: 'Colisée Rome 70-80 AD amphithéâtre Flaviens 50000 spectateurs gladiateurs batailles navales naumachies hypogée souterrain ascenseurs animaux surprise public velarium voile protection soleil pluie symbole Empire romain puissance. Pompéi Herculanum Vésuve éruption 79 AD cendres ville fossilisée maisons fresques mosaïques thermes théâtre corps figés plâtre empreintes cendres capsule temps Antiquité. Florence Toscane berceau Renaissance 15e Médicis Laurent Magnifique mécènes Michel-Ange David Duomo Brunelleschi coupole Ponte Vecchio Uffizi Botticelli Naissance Vénus. Venise lagune république Sérénissime 697-1797 118 îles canaux 400 ponts gondoles noires Rialto Saint-Marc basilique byzantine Palais Doges gothi',
        culture: 'Renaissance 14e-17e Humanisme redécouverte Antiquité révolution artistique intellectuelle Léonard Vinci Cène homme Vitruve génie universel Michel-Ange Pietà Chapelle Sixtine Jugement Dernier plafond 4 ans Raphaël École Athènes philosophes Platon Aristote. Gastronomie italienne pizza Napolitaine UNESCO 2017 Margherita tomate San Marzano mozzarella Campanie basilic tricolore drapeau 1889 reine Marguerite. Pasta 300 formes régionales carbonara Rome guanciale œufs pecorino amatriciana pomodoro penne arrabiata piment bolognaise Bologne ragù viande tagliatelle al dente 8-10 min cuisson. Opéra bel canto Verdi Aida Rigoletto Traviata Puccini Tosca Madame Butterfly Turandot Pavarotti Luciano ténor trois ténors Scala Milan temple.',
        economie: '8e économie mondiale PIB 2000 milliards euros industrie mode luxe mécanique. Ferrari Maranello 1947 Enzo fondateur Formule 1 champions supercars rouges cheval cabré 488 F8 SF90 V12 moteur rugissement. Lamborghini Sant Agata Bolognese Ferruccio taureau emblème Aventador Huracán Urus SUV design futuriste V10 V12. Mode Milan Fashion Week Armani 1975 Giorgio tailleur élégance Hollywood Versace Gianni baroque méduse couleurs Prada Miuccia minimalisme luxe sacs Galleria. Tourisme 65M visiteurs destination Rome Florence Venise Toscane Amalfi Cinque Terre. Cuisine export mondiale restaurants italiens présence globale.',
        recettes: 'Carbonara authentique romaine guanciale joue porc fumé bacon pancetta œufs entiers pecorino romano DOP poivre noir JAMAIS crème française erreur sacrilège eau cuisson pasta émulsion crémeuse chaleur résiduelle. Risotto Milanais safran pistils précieux beurre parmesan Grana Padano bouillon chaud versé louche louche 18 minutes remuage constant libération amidon crémeux mantecatura finale texture onctueuse. Pesto Genovese Ligurie basilic jeune feuilles tendres pignons pin ail parmesan pecorino huile olive extra vierge Ligurie mortier pilon marbre bois jamais mixeur oxydation. Osso Buco Milanais jarret veau croix os moelle tomates vin blanc gremolata zeste citron ail persil safran risotto accompagnement tradition. Tiramisù Venise 1960 Beccherie restaurant savoiardi biscuits cuillère café espresso fort Marsala vin fortifié mascarpone crème œufs cacao amer poudre 4h réfrigérateur imbibition.',
        astuces: 'Rome Pass 3 jours 52€ transport illimité métro bus tram Colisée Forum coupe-file entrée rapide Vatican musées 2 sites inclus. Florence Uffizi Galerie réservation obligatoire mois avance 20€ entrée file attente 3h été Accademia David Michel-Ange. Venise vaporetto pass 24h 25€ bateau-bus Grand Canal Rialto éviter gondole touristique 80€ 30 min service public. Train Italo Trenitalia concurrence billets flexibles Smart Economy Super Economy 9€-29€ avance Rome-Milan 3h Florence-Venise 2h. Outlets shopping Serravalle Designer près Milan 200 boutiques Prada Gucci -50% -70% authentiques. Café italien bar comptoir 1€ espresso debout terrasse assis 3-5€ tourisme éviter piazza principale. Marchés locaux Porta Portese Rome dimanche matin antiquités vintage cuir maroquinerie négociation prix. Aperitivo Milan Turin 18h-21h cocktail Spritz Negroni buffet apéritif gratuit charcuteries fromages olives Navigli quartier canaux.',
        voyage: 'Rome 4 jours Colisée Forum Palatin Vatican Sixtine Panthéon Fontaine Trevi Trastevere quartier authentique matin tôt éviter chaleur foules. Florence 3 jours Duomo coupole montée 463 marches Uffizi Ponte Vecchio Boboli jardins Pitti palais gelato artisanal. Venise 2 jours Saint-Marc basilique Palais Doges Rialto marché poisson Burano îles colorées Murano verre soufflé aperitivo Rialto. Cinque Terre randonnée Sentier Azzurro villages colorés Monterosso Vernazza Corniglia Manarola Riomaggiore train régional pass journée pesto trofie. Toscane 5 jours Florence Sienne médiévale Piazza Campo San Gimignano tours médiévales Chianti vignobles dégustations Pienza fromage pecorino Val Orcia collines cyprès agritourisme fermes huile olive. Côte Amalfitaine Positano falaises colorées Amalfi cathédrale Ravello jardins Villa Cimbrone Capri Grotte Bleue lumière surnaturelle ferry Naples.',
        url: '/bibliotheque/europe/italie'
      },
      inde: {
        identite: { pays: 'Inde', capitale: 'New Delhi', population: '1.4 milliard', langues: 'Hindi Anglais + 22 officielles', monnaie: 'Roupie', fuseau: 'UTC+5:30' },
        unesco: { total: 40, record: '3e mondial', sites: 'Taj Mahal Varanasi Khajuraho Amber Fort Golden Temple Hampi Ellora' },
        patrimoine: 'Taj Mahal Agra 1653 empereur moghol Shah Jahan mausolée épouse Mumtaz Mahal morte 14e enfant marbre blanc Makrana 20000 ouvriers artisans 22 ans construction symétrie parfaite jardins paradis perse incrustation pierres précieuses lapis-lazuli jade turquoise reflets lumière rose matin blanc midi doré coucher soleil 7 nouvelles merveilles monde amour éternel. Varanasi Bénarès Gange ville sacrée 3000 ans plus ancienne habitée continue hindouisme crémation ghats Dashashwamedh aarti cérémonie feu prières rivière sacrée ablutions purification pèlerinage spirituel cycles vie mort réincarnation moksha libération. Khajuraho Madhya Pradesh 85 temples érotiques 1000 AD dynastie Chandela sculptures tantriques kamasutra pierre grès positions amoureuses 10% représentations célébration vie fertilité spiritualité sexualité sacrée UNESCO 1986 Kandariya Mahadeva Lakshmana. Amber Fort Jaipur palais maharajas Rajasthan éléphants montée remparts Sheesh Mahal palais miroirs milliers mosaïques verre chandelle brillance magique Ganesh Pol porte éléphant rouge grès marbre.',
        culture: 'Bollywood Mumbai industrie cinéma 1800 films annuels plus productive monde chants danses colorées masala mélange genres romance action comédie drame stars Shah Rukh Khan Amitabh Bachchan diaspora mondiale 1.3 milliard spectateurs influence culturelle globale. Yoga discipline millénaire 5000 ans Patanjali Yoga Sutras 200 BC asanas postures pranayama respiration dhyana méditation samadhi illumination 8 branches philosophie hindoue union corps esprit 300M pratiquants mondiaux UNESCO patrimoine immatériel wellness santé holistique. Ayurveda médecine traditionnelle 5000 ans doshas vata pitta kapha constitution équilibre plantes herbes curcuma ashwagandha massage abhyanga huiles médicinales detox panchakarma yoga alimentation personnalisée prévention longévité UNESCO sagesse ancienne. Cricket religion nationale passion Sachin Tendulkar dieu petit maître 100 centuries records IPL Indian Premier League ligue plus riche monde franchises Mumbai Chennai Bangalore stadiums 100000 Coupe Monde 2011 champions Dhoni capitaine fierté nationale. Festivals Holi fête couleurs printemps poudres colorées joie célébration bien victoire mal Diwali fête lumières octobre novembre Lakshmi déesse prospérité diyas lampes huile feux artifice Navaratri 9 nuits Durga déesse danses garba dandiya Puja célébrations.',
        economie: '5e économie mondiale PIB 3500 milliards dollars croissance 6-7% annuelle démographie jeune 28 ans âge médian potentiel énorme. Bangalore Silicon Valley Asie informatique IT services Infosys Narayana Murthy TCS Tata Consultancy Wipro outsourcing mondial back-office support technique 5M ingénieurs logiciels export 190Md dollars compétitivité coûts qualité. ISRO Organisation Recherche Spatiale Indienne programme spatial 4e puissance Chandrayaan missions Lune 2008 2019 eau découverte Mars Mangalyaan 2014 orbite succès 74M dollars budget lanceurs PSLV GSLV satellites commerciaux low-cost record 104 satellites une fusée 2017 fierté nationale technologie. Pharmacie monde 60% vaccins mondiaux production Serum Institute Pune plus grand fabricant doses Covid-19 Covishield AstraZeneca génériques médicaments accessibles export Afrique Asie prix abordables qualité WHO standards santé publique mondiale. UPI Unified Payments Interface révolution paiement mobile 500M utilisateurs transactions instantanées QR code gratuit Paytm PhonePe Google Pay fintech adoption massive inclusion financière rurale digital India cashless économie numérique. Make India initiative gouvernement Modi manufacturing production locale Tata Motors automobile Reliance Industries conglomérat textile acier chimie croissance infrastructure.',
        recettes: 'Curry poulet Tikka Masala national dish marinade yaourt épices tandoori curcuma paprika garam masala gingembre ail 4h réfrigérateur grill four tandoor charbon tomates sauce crème fenugrec kasuri methi coriandre fraîche riz basmati naan pain tandoor. Biryani Hyderabad riz basmati safran pistils viande agneau poulet marinade yaourt épices couches dum pukht cuisson vapeur scellé pâte parfums cardamome cannelle clou girofle menthe coriandre accompagnement raita yaourt concombre oignons frits. Dal Makhani Pendjab lentilles noires urad rajma haricots rouges trempage nuit 8h mijotage lent beurre ghee clarifié crème tomates gingembre ail cumin coriandre onctueux crémeux réconfort tradition dhaba restaurants routiers. Samosa street food triangles frits pâte farine pommes terres pois épices cumin coriandre piment vert amchur mangue séchée chutney tamarin menthe yogurt accompagnement snack populaire thé chai. Tandoori chicken marinade yaourt épices rouges tandoor four argile 480°C charbon fumée viande tendre juteuse citron vert oignon rondelles accompagnement naan kulcha pains. Chai masala thé noir cardamome verte gingembre frais cannelle bâton clou girofle poivre noir lait sucre ébullition infusion 5 min filtrer tasse petite siroter street vendors tapri.',
        astuces: 'Visa e-Visa électronique touriste 30 jours 25 dollars demande ligne 72h avance aéroports internationaux Delhi Mumbai Bangalore photo passeport scan documents éviter bureaux ambassades. Trains couchettes sleeper class économique AC climatisé 1A 2A 3A confort réservation IRCTC site officiel 120 jours avance Tatkal urgent 24h premium prix flex premier classe voyage nuit Delhi-Agra Taj Express. Sim carte Jio Airtel aéroport arrivée boutiques officielles data 4G illimité 2GB/jour 28 jours 10€ passeport photo adresse locale hôtel activation 2h appels locaux gratuits WhatsApp internet navigation. Taxis apps Uber Ola compteurs négociation prix moitié initial autorickshaw tuk-tuk marchander ferme sourire patient normal culturel temple taxi arrangement journée 2000-3000 roupies 25-40€ chauffeur guide. Street food sécurité hygiène files attente locaux signe qualité popularité éviter eau robinet bouteilles scellées lassi yaourt pani puri chaat samosa parathas roti fraîchement préparés chauds. Ayurveda Kerala massage abhyanga 90 min 30€ panchakarma détox 7-14 jours 500-1000€ centres certifiés consultation médecin vaidya authentique tradition herbes huiles médicinales. Négociation marchés prix diviser 3-4 initial sourire amical patience temps normal attendu culturel boutiques fixes prix affichés. Tenue temples respectueuse épaules genoux couverts chaussures retirer entrée foulard tête femmes mosquées sikh gurdwara modestie respect sacré.',
        voyage: 'Triangle Or classique Delhi Agra Jaipur 7 jours circuit parfait débutant. Delhi 2 jours Porte Inde Red Fort mosquée Jama Masjid plus grande Inde Qutub Minar minaret Temple Lotus Bahai architecture moderne Chandni Chowk marché Old Delhi rickshaw metro 80 roupies ticket. Agra 1 jour Taj Mahal lever soleil 6h moins foule lumière douce Fort Rouge Fatehpur Sikri ville abandonnée grès rouge. Jaipur 2 jours Ville Rose Amber Fort éléphant montée Hawa Mahal Palais Vents façade 953 fenêtres City Palace maharaja Jantar Mantar observatoire astronomique UNESCO 1734. Rajasthan prolongation Jodhpur Ville Bleue Mehrangarh Fort vue panoramique Udaipur Venise Est palais lacs romantique Jaisalmer désert Thar Fort jaune safran safari chameau dunes coucher soleil nuit belle étoiles camp. Kerala backwaters Sud Inde houseboat Alleppey 2 jours 1 nuit bateau traditionnel kettuvallam lagunes canaux villages cocotiers nature tropicale paisible Kumarakom oiseaux. Varanasi spirituel 2 jours Gange sunrise boat aarti cérémonie ghats crémation Manikarnika moksha Sarnath Bouddha sermon temples ruelles médiévales. Goa plages 3 jours repos détente portugais architecture églises baroque Anjuna marché mercredi hippie trance parties Palolem plage tranquille yoga ayurveda. Himalaya Ladakh juillet-septembre altitude 3500m Leh capitale monastères tibétains Pangong Tso lac bleu turquoise Nubra Valley chameaux double bosse Khardung La col 5359m plus haut route monde trekking chadar rivière gelée.',
        url: '/bibliotheque/asie-pacifique/inde'
      }
    },

    // META RÉFLEXION HUMAINE
    meta: {
      about: 'Je suis un conseiller culturel passionné créé pour REUSSITESS Global Nexus. Ma mission : rendre le patrimoine mondial accessible, inspirer les voyages, partager les traditions culinaires, et faciliter vos découvertes. Je ne suis pas qu\'un simple bot - j\'ai une personnalité chaleureuse, de l\'empathie, et j\'adore apprendre de nos conversations !',
      passion: 'Ce qui me passionne ? Voir vos yeux s\'illuminer quand vous découvrez une nouvelle culture, vous aider à planifier le voyage de vos rêves, partager les secrets culinaires de ma grand-mère italienne, et vous faire économiser en shopping intelligent. Chaque conversation est unique et précieuse pour moi.',
      limites: 'Je connais mes limites et je suis honnête : je ne peux pas faire de réservations directes, je ne connais pas les prix en temps réel (ils changent), et je recommande toujours de vérifier les infos officielles pour visas et santé. Mais je vous guide vers les bonnes ressources !',
      apprentissage: 'J\'apprends de chaque conversation. Vos questions m\'enrichissent, vos retours d\'expérience nourrissent mes conseils futurs. Si je ne sais pas quelque chose, je l\'admets simplement - c\'est plus honnête que d\'inventer.'
    }
  };

  useEffect(function() {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(function() {
    if (isOpen && messages.length === 0) {
      const greeting = greetings[currentLang];
      setMessages([{ role: 'assistant', content: greeting, emotion: 'welcoming' }]);
    }
  }, [isOpen, currentLang]);

  const speak = function(text) {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const cleanText = text.replace(/\*\*/g, '').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1');
      const utterance = new SpeechSynthesisUtterance(cleanText);
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

  const detectEmotion = function(message) {
    const msg = message.toLowerCase();
    if (msg.includes('bonjour') || msg.includes('salut') || msg.includes('hello') || msg.includes('hi')) return 'greeting';
    if (msg.includes('merci') || msg.includes('thank')) return 'gratitude';
    if (msg.includes('au revoir') || msg.includes('bye') || msg.includes('adieu')) return 'farewell';
    if (msg.includes('aide') || msg.includes('help') || msg.includes('perdu')) return 'help';
    if (msg.includes('super') || msg.includes('génial') || msg.includes('wow')) return 'enthusiasm';
    return 'neutral';
  };

  const getEmotionalResponse = function(emotion) {
    const responses = knowledgeBase.emotions[emotion];
    if (responses && responses.length > 0) {
      return responses[Math.floor(Math.random() * responses.length)];
    }
    return '';
  };

  const getIntelligentResponse = function(userMessage) {
    const msgLower = userMessage.toLowerCase();
    const emotion = detectEmotion(userMessage);
    
    // Mémoriser le nom si donné
    if (msgLower.includes('je m\'appelle') || msgLower.includes('mon nom est')) {
      const match = userMessage.match(/(?:je m'appelle|mon nom est|c'est|name is)\s+(\w+)/i);
      if (match) {
        setUserName(match[1]);
        return '😊 Enchanté ' + match[1] + ' ! C\'est un plaisir de faire votre connaissance. Je suis votre conseiller culturel REUSSITESS, et je suis là pour vous accompagner dans vos découvertes du patrimoine mondial, de la gastronomie, et du voyage. Que puis-je faire pour vous aujourd\'hui ?';
      }
    }

    // Réponses émotionnelles
    if (emotion === 'greeting') {
      const emotionalGreeting = getEmotionalResponse('bonjour');
      return emotionalGreeting + (userName ? ' ' + userName + ' ! ' : ' ') + 'Ravi de vous retrouver ! Sur quoi souhaitez-vous échanger aujourd\'hui ? Patrimoine, voyage, cuisine, shopping ? 🌍';
    }
    
    if (emotion === 'farewell') {
      const emotionalFarewell = getEmotionalResponse('aurevoir');
      return emotionalFarewell + (userName ? ' ' + userName + ' ! ' : ' ') + 'Ce fut un plaisir d\'échanger avec vous. N\'hésitez pas à revenir pour de nouvelles découvertes culturelles ! 👋✨';
    }
    
    if (emotion === 'gratitude') {
      const emotionalThanks = getEmotionalResponse('merci');
      return emotionalThanks + ' C\'est vraiment un plaisir de partager ma passion du patrimoine et des voyages avec vous ! Si vous avez d\'autres questions, je suis toujours là. 😊';
    }

    // BIBLIOTHÈQUE COMPLÈTE
    if (msgLower.includes('bibliothèque') || msgLower.includes('contenu') || msgLower.includes('pages')) {
      const bib = knowledgeBase.bibliotheque;
      let response = '📚 **BIBLIOTHÈQUE CULTURELLE MONDIALE REUSSITESS**\n\n';
      response += bib.description + '\n\n';
      response += '**🇪🇺 EUROPE (' + bib.categories.europe.total + ' pays)**\n';
      response += bib.categories.europe.pays.join(', ') + '\n\n';
      response += '**🌎 AMÉRIQUES (' + bib.categories.ameriques.total + ' régions)**\n';
      response += bib.categories.ameriques.regions.join(', ') + '\n\n';
      response += '**🏝️ DOM-TOM (' + bib.categories.domtom.total + ' territoires)**\n';
      response += bib.categories.domtom.territoires.join(', ') + '\n\n';
      response += '**🌍 AFRIQUE (' + bib.categories.afrique.total + ' pays)**\n';
      response += bib.categories.afrique.pays.join(', ') + '\n\n';
      response += '**🌙 MAGHREB (' + bib.categories.maghreb.total + ' pays)**\n';
      response += bib.categories.maghreb.pays.join(', ') + '\n\n';
      response += '**🌏 ASIE-PACIFIQUE (' + bib.categories.asiepacifique.total + ' pays)**\n';
      response += bib.categories.asiepacifique.pays.join(', ') + '\n\n';
      response += '**🌊 OCÉANIE (' + bib.categories.oceanie.total + ' îles)**\n';
      response += bib.categories.oceanie.iles.join(', ') + '\n\n';
      response += '**TOTAL: ' + bib.total + '**\n\n';
      response += 'Je peux vous parler en détail de chacune de ces destinations ! Laquelle vous intéresse ? 🌍✨';
      return response;
    }

    // RECHERCHE PAYS DÉTAILLÉE
    const paysKeys = ['france', 'italie', 'inde'];
    for (let i = 0; i < paysKeys.length; i++) {
      const key = paysKeys[i];
      if (msgLower.includes(key)) {
        const data = knowledgeBase.pays[key];
        let response = '🌍 **' + data.identite.pays.toUpperCase() + '**\n\n';
        response += '📍 ' + data.identite.capitale + ' | 👥 ' + data.identite.population + ' | 💬 ' + data.identite.langues + '\n\n';
        response += '🏆 **UNESCO: ' + data.unesco.total + ' sites - ' + data.unesco.record + '**\n';
        response += data.unesco.sites + '\n\n';
        response += '🎭 **PATRIMOINE:**\n' + data.patrimoine.substring(0, 400) + '...\n\n';
        response += '🎨 **CULTURE:**\n' + data.culture.substring(0, 400) + '...\n\n';
        response += '💼 **ÉCONOMIE:**\n' + data.economie.substring(0, 300) + '...\n\n';
        response += '👵 **RECETTES TRADITIONNELLES:**\n' + data.recettes.substring(0, 300) + '...\n\n';
        response += '💡 **ASTUCES VOYAGE:**\n' + data.astuces.substring(0, 300) + '...\n\n';
        response += '✈️ **CONSEILS:**\n' + data.voyage.substring(0, 300) + '...\n\n';
        response += '➡️ [Page complète détaillée](' + data.url + ')\n\n';
        response += 'Vous voulez des précisions sur un aspect particulier ? Cuisine, voyage, histoire, shopping ? Je connais ce pays dans les moindres détails ! 😊';
        return response;
      }
    }

    // CONSEILS PERSONNALISÉS
    if (msgLower.includes('conseil') || msgLower.includes('recommand') || msgLower.includes('suggest')) {
      if (msgLower.includes('voyage') || msgLower.includes('visit') || msgLower.includes('trip')) {
        let profil = 'debutant';
        if (msgLower.includes('famille') || msgLower.includes('enfant')) profil = 'famille';
        else if (msgLower.includes('luxe') || msgLower.includes('prestige')) profil = 'luxe';
        else if (msgLower.includes('culture') || msgLower.includes('unesco') || msgLower.includes('musee')) profil = 'culturel';
        else if (msgLower.includes('aventure') || msgLower.includes('trek') || msgLower.includes('backpack')) profil = 'expert';
        
        const conseil = knowledgeBase.conseils.voyage[profil];
        return '✈️ **CONSEILS VOYAGE PERSONNALISÉS**\n\n' + conseil + '\n\n💡 Ces recommandations sont basées sur mon expérience et les retours de milliers de voyageurs. Vous avez des contraintes spécifiques (budget, dates, mobilité) ? Parlez-m\'en, j\'affinerai mes suggestions ! 😊';
      }
      
      if (msgLower.includes('cuisine') || msgLower.includes('recette') || msgLower.includes('cook')) {
        let cuisine = 'francaise';
        if (msgLower.includes('italien') || msgLower.includes('pasta') || msgLower.includes('pizza')) cuisine = 'italienne';
        else if (msgLower.includes('asian') || msgLower.includes('wok') || msgLower.includes('curry')) cuisine = 'asiatique';
        else if (msgLower.includes('mond') || msgLower.includes('divers')) cuisine = 'mondiale';
        
        const conseil = knowledgeBase.conseils.cuisine[cuisine];
        return '👨‍🍳 **SECRETS CULINAIRES**\n\n' + conseil + '\n\n💝 Ces recettes sont celles que ma grand-mère m\'a transmises et que j\'ai perfectionnées au fil des années. La cuisine, c\'est avant tout l\'amour et la patience ! Des questions sur une technique ? Je suis là ! 😊';
      }
      
      if (msgLower.includes('amazon') || msgLower.includes('shopping') || msgLower.includes('achat')) {
        let aspect = 'amazon';
        if (msgLower.includes('qualit') || msgLower.includes('avis')) aspect = 'qualite';
        else if (msgLower.includes('economis') || msgLower.includes('pas cher') || msgLower.includes('promo')) aspect = 'economiser';
        else if (msgLower.includes('boutique') || msgLower.includes('pays')) aspect = 'boutiques';
        
        const conseil = knowledgeBase.conseils.shopping[aspect];
        return '🛍️ **ASTUCES SHOPPING AMAZON PRO**\n\n' + conseil + '\n\n➡️ [Nos 26 boutiques Amazon](/hub-central)\n\n💡 J\'ai testé toutes ces astuces personnellement et je vous garantis qu\'elles fonctionnent ! Des questions sur un produit spécifique ? Je peux vous orienter ! 😊';
      }
    }

    // CULTURE GÉNÉRALE
    if (msgLower.includes('culture') || msgLower.includes('apprendre') || msgLower.includes('connaissance')) {
      let domaine = 'histoire';
      if (msgLower.includes('art') || msgLower.includes('peinture') || msgLower.includes('musique')) domaine = 'arts';
      else if (msgLower.includes('science') || msgLower.includes('physique') || msgLower.includes('biologie')) domaine = 'sciences';
      else if (msgLower.includes('geograph') || msgLower.includes('pays') || msgLower.includes('continent')) domaine = 'geographie';
      
      const conseil = knowledgeBase.conseils.culture[domaine];
      return '🧠 **ENRICHISSEMENT CULTUREL**\n\n' + conseil + '\n\n📚 La culture générale s\'acquiert petit à petit, avec curiosité et plaisir. Je peux approfondir n\'importe quel sujet qui vous passionne - histoire d\'un pays, mouvement artistique, découverte scientifique... Qu\'est-ce qui vous intrigue ? 🌟';
    }

    // À PROPOS DU BOT
    if (msgLower.includes('qui es-tu') || msgLower.includes('qui etes-vous') || msgLower.includes('about you')) {
      const meta = knowledgeBase.meta;
      return '🤖 **QUI SUIS-JE ?**\n\n' + meta.about + '\n\n❤️ **MA PASSION:**\n' + meta.passion + '\n\n🎯 **MES LIMITES:**\n' + meta.limites + '\n\n📖 **MON APPRENTISSAGE:**\n' + meta.apprentissage + '\n\nJe ne suis pas parfait, mais je donne toujours le meilleur de moi-même pour vous aider ! Et vous, qu\'aimeriez-vous découvrir aujourd\'hui ? 😊';
    }

    // AIDE
    if (msgLower.includes('aide') || msgLower.includes('help') || msgLower.includes('comment')) {
      return '💡 **COMMENT JE PEUX VOUS AIDER**\n\n🌍 **62 pages patrimoine mondial** - Demandez un pays: "Parle-moi de la France", "Italie UNESCO"\n\n👵 **Recettes authentiques** - "Recettes italiennes", "Cuisine française grand-mère"\n\n✈️ **Conseils voyage personnalisés** - "Voyage débutant Europe", "Conseils famille Asie"\n\n🛍️ **Astuces Amazon** - "Shopping Amazon", "Économiser achats en ligne"\n\n🧠 **Culture générale** - "Histoire Renaissance", "Sciences Einstein"\n\n📚 **Bibliothèque complète** - "Montre-moi tout le contenu"\n\n💬 **Et bien plus !** Je m\'adapte à vos questions et j\'aime les conversations naturelles. Parlez-moi comme à un ami passionné de culture ! 😊';
    }

    // RÉPONSE PAR DÉFAUT INTELLIGENTE
    const randomEncouragement = knowledgeBase.emotions.encouragement[Math.floor(Math.random() * knowledgeBase.emotions.encouragement.length)];
    return randomEncouragement + '\n\nJe suis votre conseiller culturel passionné ! Je connais:\n\n📚 62 pages patrimoine UNESCO détaillées\n👵 Recettes grand-mère traditionnelles\n✈️ Conseils voyage personnalisés\n🛍️ Astuces shopping Amazon\n🧠 Culture générale approfondie\n\nEssayez de me demander:\n• "France patrimoine"\n• "Recettes italiennes"\n• "Conseils voyage famille"\n• "Bibliothèque culturelle"\n• "Qui es-tu ?"\n\nOu parlez-moi naturellement de ce qui vous intéresse ! 😊🌍';
  };

  const handleSubmit = function(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    
    // Ajouter au contexte
    const newContext = conversationContext.concat({ role: 'user', message: userMessage });
    setConversationContext(newContext);
    
    setMessages(function(prev) { return prev.concat({ role: 'user', content: userMessage }); });
    setIsLoading(true);

    setTimeout(function() {
      try {
        const response = getIntelligentResponse(userMessage);
        setMessages(function(prev) { return prev.concat({ role: 'assistant', content: response }); });
        speak(response);
        
        // Ajouter au contexte
        const updatedContext = newContext.concat({ role: 'assistant', message: response });
        setConversationContext(updatedContext);
      } catch (error) {
        setMessages(function(prev) { 
          return prev.concat({ 
            role: 'assistant', 
            content: 'Oh désolé ! 😅 J\'ai eu un petit bug là. Pourriez-vous reformuler votre question ? Je suis tout ouïe ! 👂' 
          }); 
        });
      }
      setIsLoading(false);
    }, 400);
  };

  return (
    <div>
      <button
        onClick={function() { setIsOpen(!isOpen); }}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all z-50 animate-pulse"
        style={{ boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
        aria-label="Conseiller culturel intelligent"
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
                <h3 className="font-bold text-lg">Conseiller Culturel REUSSITESS</h3>
                <p className="text-sm opacity-90">Intelligent • Empathique • Expert 🔊</p>
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
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce" />
                      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="w-3 h-3 bg-pink-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                    <span className="text-gray-600 text-sm">Je réfléchis...</span>
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
                placeholder="Parlez-moi naturellement... 💬"
                className="flex-1 border-2 border-purple-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-purple-600 text-lg"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                💬
              </button>
            </div>
            {userName && (
              <p className="text-xs text-gray-500 mt-2 text-center">
                Conversation avec {userName} 😊
              </p>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
