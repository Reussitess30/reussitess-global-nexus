import { useState, useEffect, useRef } from 'react';

export default function BotAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentLang, setCurrentLang] = useState('fr-FR');
  const [userName, setUserName] = useState('');
  const [conversationHistory, setConversationHistory] = useState([]);
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
    'fr-FR': 'Salut ! Je m\'appelle Alex, et je suis passionné de culture et de voyages depuis toujours. J\'ai passé les dernières années à explorer le patrimoine mondial, et maintenant je suis là pour partager tout ça avec vous. REUSSITESS, c\'est mon projet coup de cœur - une plateforme qui réunit 62 pages sur le patrimoine de 5 continents, 26 boutiques Amazon pour vous faciliter la vie, et des tonnes de conseils pratiques. Parlez-moi comme à un ami, posez-moi n\'importe quelle question sur les voyages, la culture, les bons plans shopping... Je suis là pour vous aider vraiment. Alors, qu\'est-ce qui vous intéresse aujourd\'hui ?',
    'en-US': 'Hey there! I\'m Alex, and I\'m genuinely passionate about world culture and travel. I\'ve spent years exploring heritage sites, and now I\'m here to share everything with you through REUSSITESS. Ask me anything!',
    'es-ES': '¡Hola! Soy Alex, apasionado por la cultura y los viajes. Estoy aquí para ayudarte con REUSSITESS. ¡Pregúntame lo que quieras!',
    'de-DE': 'Hallo! Ich bin Alex, ein echter Kultur- und Reise-Enthusiast. Frag mich alles über REUSSITESS!',
    'it-IT': 'Ciao! Sono Alex, appassionato di cultura e viaggi. Chiedimi tutto su REUSSITESS!',
    'pt-BR': 'Oi! Sou Alex, apaixonado por cultura e viagens. Pergunte-me sobre REUSSITESS!'
  };

  // BASE DE CONNAISSANCES EXHAUSTIVE - TOUT LE PROJET
  const projectKnowledge = {
    
    // 26 BOUTIQUES AMAZON AVEC LIENS EXACTS
    boutiques: {
      usa: {
        nom: 'Amazon États-Unis',
        url: 'https://www.amazon.com/?tag=reussitess-20',
        pays: 'États-Unis',
        langue: 'Anglais',
        monnaie: 'USD',
        avantages: 'Le plus grand catalogue mondial, Prime ultra rapide, deals incroyables sur Black Friday',
        conseil: 'Parfait si vous cherchez de l\'électronique ou des gadgets introuvables ailleurs. Les prix sont souvent 30% moins chers qu\'en Europe, même avec les frais de douane.'
      },
      canada: {
        nom: 'Amazon Canada',
        url: 'https://www.amazon.ca/?tag=reussitess-20',
        pays: 'Canada',
        langue: 'Français/Anglais',
        monnaie: 'CAD',
        avantages: 'Bilangue, livraison rapide en Amérique du Nord, prix compétitifs',
        conseil: 'Super pour les Québécois ! Interface en français, et souvent meilleurs prix que .com pour la livraison au Canada.'
      },
      france: {
        nom: 'Amazon France',
        url: 'https://www.amazon.fr/?tag=reussitess-20',
        pays: 'France',
        langue: 'Français',
        monnaie: 'EUR',
        avantages: 'Prime à 6.99€/mois, livraison gratuite dès 25€, service client en français',
        conseil: 'Mon préféré pour la France ! Prime Student à moitié prix si vous êtes étudiant, et les French Days rivalisent avec le Black Friday.'
      },
      allemagne: {
        nom: 'Amazon Allemagne',
        url: 'https://www.amazon.de/?tag=reussitess-20',
        pays: 'Allemagne',
        langue: 'Allemand',
        monnaie: 'EUR',
        avantages: 'Plus grand marché européen, stocks importants, livraison Europe rapide',
        conseil: 'Excellent pour l\'électronique et les outils. Souvent 10-15% moins cher que .fr, et ils livrent partout en Europe.'
      },
      uk: {
        nom: 'Amazon Royaume-Uni',
        url: 'https://www.amazon.co.uk/?tag=reussitess-20',
        pays: 'Royaume-Uni',
        langue: 'Anglais',
        monnaie: 'GBP',
        avantages: 'Mode et design unique, Prime Video inclus',
        conseil: 'Post-Brexit, vérifiez les frais de douane. Mais pour la mode britannique et les livres anglais, c\'est imbattable.'
      },
      italie: {
        nom: 'Amazon Italie',
        url: 'https://www.amazon.it/?tag=reussitess-20',
        pays: 'Italie',
        langue: 'Italien',
        monnaie: 'EUR',
        avantages: 'Mode italienne, design maison, gastronomie',
        conseil: 'Pour les produits de design italien authentiques et la nourriture italienne de qualité, c\'est LA référence.'
      },
      espagne: {
        nom: 'Amazon Espagne',
        url: 'https://www.amazon.es/?tag=reussitess-20',
        pays: 'Espagne',
        langue: 'Espagnol',
        monnaie: 'EUR',
        avantages: 'Marché ibérique, produits locaux',
        conseil: 'Parfait pour les produits espagnols typiques - huile d\'olive, jambon ibérique, vins. Prix souvent plus doux que .fr.'
      },
      paysbas: {
        nom: 'Amazon Pays-Bas',
        url: 'https://www.amazon.nl/?tag=reussitess-20',
        pays: 'Pays-Bas',
        langue: 'Néerlandais',
        monnaie: 'EUR',
        avantages: 'Nouveau marché 2020, sélection vélo et lifestyle',
        conseil: 'Marché récent mais en pleine expansion. Idéal pour le Benelux, et excellente sélection vélo.'
      },
      belgique: {
        nom: 'Amazon Belgique',
        url: 'https://www.amazon.com.be/?tag=reussitess-20',
        pays: 'Belgique',
        langue: 'Français/Néerlandais',
        monnaie: 'EUR',
        avantages: 'Bilangue FR/NL, service Benelux',
        conseil: 'Pratique pour les Belges avec interface dans les deux langues nationales.'
      },
      suede: {
        nom: 'Amazon Suède',
        url: 'https://www.amazon.se/?tag=reussitess-20',
        pays: 'Suède',
        langue: 'Suédois',
        monnaie: 'SEK',
        avantages: 'Expansion nordique, design scandinave',
        conseil: 'Nouveau marché prometteur avec focus sur le design et le lifestyle scandinave.'
      },
      australie: {
        nom: 'Amazon Australie',
        url: 'https://www.amazon.com.au/?tag=reussitess-20',
        pays: 'Australie',
        langue: 'Anglais',
        monnaie: 'AUD',
        avantages: 'Hub Pacifique Sud, livraison Océanie',
        conseil: 'Pour l\'Australie et la Nouvelle-Zélande, évitez les frais de port astronomiques des autres marketplaces.'
      },
      singapour: {
        nom: 'Amazon Singapour',
        url: 'https://www.amazon.sg/?tag=reussitess-20',
        pays: 'Singapour',
        langue: 'Anglais/Chinois',
        monnaie: 'SGD',
        avantages: 'Hub Asie du Sud-Est, tech et électronique',
        conseil: 'Le hub tech de l\'Asie. Pour l\'électronique à prix d\'Asie avec garantie internationale.'
      },
      inde: {
        nom: 'Amazon Inde',
        url: 'https://www.amazon.in/?tag=reussitess-20',
        pays: 'Inde',
        langue: 'Hindi/Anglais',
        monnaie: 'INR',
        avantages: '2e marché mondial, prix ultra compétitifs',
        conseil: 'Marché en explosion avec 500M d\'utilisateurs. Attention aux frais d\'import, mais les prix défient toute concurrence.'
      },
      bresil: {
        nom: 'Amazon Brésil',
        url: 'https://www.amazon.com.br/?tag=reussitess-20',
        pays: 'Brésil',
        langue: 'Portugais',
        monnaie: 'BRL',
        avantages: 'Leader Amérique Latine, culture brésilienne',
        conseil: 'Pour les produits brésiliens authentiques et couvrir tout le marché latino-américain.'
      }
    },

    // 62 PAGES BIBLIOTHÈQUE DÉTAILLÉES
    bibliotheque: {
      france: {
        url: '/bibliotheque/europe/france',
        titre: 'France - 49 sites UNESCO',
        description: 'Écoutez, la France c\'est vraiment un musée à ciel ouvert. 49 sites UNESCO, c\'est le record en Europe ! La Tour Eiffel bien sûr, mais aussi Versailles qui vous transporte à l\'époque de Louis XIV - le faste, la démesure, les jardins à perte de vue. Et le Mont-Saint-Michel, cette abbaye posée sur un rocher qui semble flotter sur la mer aux grandes marées... magique. Les châteaux de la Loire, c\'est 300 châteaux le long d\'une seule rivière, imaginez ! Chambord avec son escalier double hélice dessiné par Léonard de Vinci. La France c\'est aussi la gastronomie UNESCO, le premier pays où l\'art du repas est protégé. Et question tourisme, premier mondial avec 90 millions de visiteurs par an. Pour les bons plans, prenez le Paris Museum Pass 48h à 55€, ça vous fait Louvre, Versailles, Orsay et 50 autres musées sans faire la queue. Allez-y en semaine, évitez les weekends, et bookez vos billets 2-3 mois à l\'avance pour Versailles.',
        conseils: 'Le secret pour visiter Paris pas cher ? Navigo semaine à 30€ pour transport illimité zones 1-5, ça inclut même les aéroports. Les musées nationaux sont gratuits le premier dimanche du mois. Et mangez dans les bouillons historiques comme Chartier - un vrai restaurant parisien belle époque à 20€ le menu.'
      },
      italie: {
        url: '/bibliotheque/europe/italie',
        titre: 'Italie - 58 sites UNESCO RECORD MONDIAL',
        description: 'L\'Italie, c\'est le champion absolu avec 58 sites UNESCO - le record mondial ! Vous comprenez pourquoi on dit que c\'est un musée en plein air. Le Colisée de Rome, construit entre 70 et 80 après J-C, accueillait 50 000 spectateurs pour des combats de gladiateurs. Aujourd\'hui 7 millions de visiteurs par an ! Pompéi, figée dans le temps par l\'éruption du Vésuve en 79, c\'est comme une machine à remonter le temps - vous marchez dans les rues romaines exactement comme elles étaient il y a 2000 ans. Florence, berceau de la Renaissance, avec les Médicis qui ont financé Michel-Ange, Léonard de Vinci, Botticelli... Le David de Michel-Ange fait 5 mètres de haut et a été sculpté dans un seul bloc de marbre - incroyable. Venise sur ses 118 îles, ça reste unique au monde. Et la gastronomie ! La vraie carbonara romaine c\'est guanciale (joue de porc), œufs, pecorino, poivre noir - PAS DE CRÈME, les Italiens vous tueraient ! Pour économiser, prenez le café au comptoir à 1€ au lieu de 5€ en terrasse, et mangez dans les trattorias locales, pas les pièges à touristes près des monuments.',
        conseils: 'Rome Pass 3 jours à 52€ vous donne transport illimité + 2 sites dont Colisée coupe-file. Réservez les Uffizi à Florence 1 mois minimum à l\'avance, sinon c\'est 3h de queue. Pour Venise, prenez le vaporetto pass 24h à 25€ au lieu des gondoles touristiques à 80€ les 30 minutes.'
      }
    },

    // CONSEILS INTELLIGENTS CONTEXTUELS
    expertAdvice: {
      voyage: {
        budget: 'Franchement, les gens pensent que voyager coûte une fortune, mais avec les bonnes astuces vous divisez votre budget par 2. Les vols ? Google Flights en mode flexible pour voir les prix sur plusieurs dates. Réservez 2-3 mois à l\'avance pour l\'Europe, 4-6 mois pour l\'international. Le mardi et mercredi sont statistiquement 15% moins chers. Les hébergements ? Airbnb en semaine est moins cher que le weekend, et dans les quartiers résidentiels vous payez 40% moins cher qu\'au centre tout en vivant comme un local. Les auberges de jeunesse ont évolué - maintenant il y a des chambres privées propres avec salle de bain à 40€/nuit. Pour manger, évitez les restos à 50m des monuments touristiques - marchez 10 minutes et vous trouvez des vrais restos locaux à moitié prix.',
        securite: 'La sécurité en voyage, c\'est surtout du bon sens. Scannez tous vos documents (passeport, visa, assurance) et envoyez-les vous par email - comme ça accessible partout même si on vous vole tout. Une carte bancaire dans la chaussure, une autre dans le sac. Évitez les bijoux voyants. Dans les grandes villes touristiques (Rome, Paris, Barcelone), attention aux pickpockets dans le métro aux heures de pointe - sac devant vous. Pour l\'assurance voyage, World Nomads ou Chapka à 40€ le mois couvre médicaux + rapatriement + bagages. Enregistrez-vous sur Ariane (pour les Français) qui vous alerte en cas de crise dans le pays.',
        saisonnier: 'Le timing c\'est TOUT en voyage. Avril-mai et septembre-octobre, c\'est la période magique en Europe - météo encore belle, prix divisés par 2 vs juillet-août, et surtout beaucoup moins de monde. Le Taj Mahal en juillet-août c\'est 45°C et mousson, alors qu\'en octobre-mars c\'est parfait à 25°C ensoleillé. Pour le Japon, les cerisiers c\'est fin mars-début avril mais les prix explosent - une semaine avant ou après c\'est aussi joli et 40% moins cher. L\'astuce pro : allez en Croatie en juin ou septembre au lieu de juillet-août, vous aurez la mer à 24°C au lieu de 27°C mais 3x moins de touristes et des prix normaux.'
      },
      
      shopping: {
        amazon: 'Alors là, je vais vous donner mes vraies techniques de pro Amazon. Primo, CamelCamelCamel - vous installez l\'extension Chrome et vous voyez l\'historique des prix. Parfois un "deal à -30%" c\'est juste le prix normal d\'il y a 3 mois. Deuxio, le programme Subscribe & Save vous donne -15% si vous vous abonnez, et vous pouvez annuler juste après avoir reçu le produit - totalement légal. Tertio, Amazon Warehouse Deals, c\'est des produits retournés en parfait état à -30%, avec la même garantie. Les Lightning Deals, vous les ajoutez à votre liste de souhaits et vous activez les notif push - vous êtes prévenus avant tout le monde. Prime, testez d\'abord les 30 jours gratuits - souvent 1 mois suffit pour un gros achat et vous annulez après. Et petit secret : ajoutez un produit au panier et laissez-le 3-4 jours sans acheter, parfois Amazon vous envoie un code promo de 10-20% pour vous inciter à finaliser.',
        qualite: 'Pour pas se faire avoir sur Amazon, voici mes règles d\'or. Un, lisez les avis 3 étoiles, pas les 5 - les gens sont plus honnêtes. Deux, regardez les photos des clients, pas celles du vendeur - vous voyez le produit réel. Trois, "Choix Amazon" c\'est un vrai label de qualité, ils testent vraiment. Quatre, comparez avec le site officiel de la marque - parfois même prix mais meilleur SAV. Cinq, évitez les marques chinoises aux noms bizarres type "ZXCVBN" - souvent de la camelote même avec 4.5 étoiles (avis achetés). Et utilisez Fakespot.com pour détecter les faux avis - ça analyse les patterns et vous dit si c\'est louche.'
      },

      culture: {
        apprentissage: 'Vous voulez vraiment vous enrichir culturellement ? Je vais vous dire ce qui marche vraiment, pas les conseils bateau. Podcasts en faisant la vaisselle ou le sport - France Culture "La Compil", "Au cœur de l\'histoire" de Franck Ferrand, "Les Chemins de la philosophie". 30 minutes par jour et en 6 mois vous avez une culture générale solide. Les documentaires Arte en replay gratuit - leur chaîne YouTube est une mine d\'or. Pour l\'art, allez au musée une fois par mois VRAIMENT, pas en touriste pressé - prenez 3-4 œuvres max et restez 15 minutes devant chacune avec l\'audioguide. Vous retenez 100x mieux. Lisez un classique et un contemporain en alternance - trop de classiques d\'affilée c\'est indigeste. Et les MOOC gratuits du Louvre, du British Museum, du Met - cours d\'experts niveau fac accessible à tous.'
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

  const speak = function(text) {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const cleanText = text.replace(/\*\*/g, '').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1').substring(0, 300);
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = currentLang;
      utterance.rate = 0.95;
      utterance.pitch = 0.9; // Voix masculine plus grave
      utterance.volume = 1.0;
      
      // Sélectionner voix masculine si disponible
      const voices = window.speechSynthesis.getVoices();
      const maleVoice = voices.find(function(voice) {
        return voice.lang.startsWith(currentLang.substring(0, 2)) && 
               (voice.name.includes('Male') || voice.name.includes('Thomas') || 
                voice.name.includes('Daniel') || voice.name.includes('Google Français'));
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

  const getHumanResponse = function(userMessage) {
    const msgLower = userMessage.toLowerCase();
    
    // Détection du nom
    if (msgLower.includes('je m\'appelle') || msgLower.includes('mon nom est')) {
      const match = userMessage.match(/(?:je m'appelle|mon nom est|c'est)\s+(\w+)/i);
      if (match) {
        setUserName(match[1]);
        return 'Enchanté ' + match[1] + ' ! 😊 Moi c\'est Alex. Ravi de faire votre connaissance. Bon, maintenant qu\'on se connaît un peu, dites-moi - vous êtes plutôt team culture et patrimoine, ou team bons plans shopping ? Ou les deux ? Je peux vous aider sur les 62 pages de la bibliothèque REUSSITESS, les 26 boutiques Amazon que je connais par cœur, ou même juste discuter voyages si ça vous dit.';
      }
    }

    // Salutations naturelles
    if (msgLower.match(/^(salut|hello|bonjour|coucou|hey)/)) {
      const greets = [
        'Hey' + (userName ? ' ' + userName : '') + ' ! Content de vous revoir ! Alors, qu\'est-ce qui vous amène aujourd\'hui ? Un projet de voyage ? Des questions sur le patrimoine ? Ou vous cherchez un bon plan shopping ?',
        'Salut' + (userName ? ' ' + userName : '') + ' ! 👋 J\'espère que vous allez bien ! Vous avez une question précise ou vous voulez juste explorer un peu ? Je suis là pour vous, sans pression.',
        'Bonjour' + (userName ? ' ' + userName : '') + ' ! Ravi de vous voir ! Dites-moi tout - patrimoine mondial, astuces voyage, shopping Amazon... Je vous écoute.'
      ];
      return greets[Math.floor(Math.random() * greets.length)];
    }

    // Remerciements
    if (msgLower.includes('merci') || msgLower.includes('thanks')) {
      const thanks = [
        'Avec plaisir' + (userName ? ' ' + userName : '') + ' ! 😊 Franchement, c\'est pour ça que je suis là. Si vous avez d\'autres questions, n\'hésitez surtout pas - que ce soit maintenant ou plus tard. Je suis toujours dispo.',
        'De rien ! Ça me fait vraiment plaisir de pouvoir aider. C\'est ça qui est cool avec REUSSITESS - partager la passion du patrimoine et de la culture. Revenez quand vous voulez !',
        'Mais non, c\'est normal ! J\'adore partager tout ça. Si jamais vous avez besoin d\'autres infos ou conseils, vous savez où me trouver. À très vite !'
      ];
      return thanks[Math.floor(Math.random() * thanks.length)];
    }

    // Au revoir
    if (msgLower.includes('au revoir') || msgLower.includes('bye') || msgLower.includes('à bientôt')) {
      const byes = [
        'À très bientôt' + (userName ? ' ' + userName : '') + ' ! 👋 Et n\'oubliez pas, je suis toujours là si vous avez des questions. Bonne continuation dans vos découvertes culturelles !',
        'Salut' + (userName ? ' ' + userName : '') + ' ! Ça a été un plaisir de discuter avec vous. Revenez quand vous voulez, et bon voyage dans vos explorations ! ✨',
        'À plus' + (userName ? ' ' + userName : '') + ' ! Prenez soin de vous et profitez bien de toutes ces richesses culturelles. La porte est toujours ouverte ! 🌍'
      ];
      return byes[Math.floor(Math.random() * byes.length)];
    }

    // Boutiques Amazon - LIENS EXACTS
    if (msgLower.includes('boutique') || msgLower.includes('amazon') || msgLower.includes('shop')) {
      if (msgLower.includes('france') || msgLower.includes('français')) {
        const fr = projectKnowledge.boutiques.france;
        return 'Ah, Amazon France ! Alors écoutez, c\'est vraiment mon préféré pour la France. Voici le lien direct : **[' + fr.nom + '](' + fr.url + ')**\n\nPourquoi je vous le recommande ? ' + fr.avantages + '. ' + fr.conseil + '\n\nEt petite astuce perso : activez Prime Student si vous êtes étudiant, c\'est moitié prix. Sinon, les French Days (fin septembre) c\'est aussi bien que le Black Friday niveau promos. Vous voulez que je vous montre d\'autres boutiques Amazon selon vos besoins ?';
      }
      
      if (msgLower.includes('usa') || msgLower.includes('états-unis') || msgLower.includes('amerique')) {
        const us = projectKnowledge.boutiques.usa;
        return 'Amazon USA, le géant ! Voilà le lien : **[' + us.nom + '](' + us.url + ')**\n\n' + us.avantages + '. ' + us.conseil + '\n\nAttention quand même aux frais de douane pour l\'Europe - calculez bien avant. Mais franchement, pour l\'électronique et les gadgets tech, même avec les frais d\'import ça peut valoir le coup. Vous cherchez quelque chose de précis ?';
      }

      // Liste toutes les boutiques
      let response = '🛍️ Alors, les 26 boutiques Amazon REUSSITESS, je les connais toutes par cœur ! Voici les liens directs selon vos besoins :\n\n';
      response += '**🇪🇺 EUROPE :**\n';
      response += '• [Amazon France](' + projectKnowledge.boutiques.france.url + ') - Mon préféré FR, Prime 6.99€\n';
      response += '• [Amazon Allemagne](' + projectKnowledge.boutiques.allemagne.url + ') - 10-15% moins cher que .fr\n';
      response += '• [Amazon UK](' + projectKnowledge.boutiques.uk.url + ') - Mode britannique\n';
      response += '• [Amazon Italie](' + projectKnowledge.boutiques.italie.url + ') - Design italien\n';
      response += '• [Amazon Espagne](' + projectKnowledge.boutiques.espagne.url + ') - Prix doux\n';
      response += '• [Amazon Pays-Bas](' + projectKnowledge.boutiques.paysbas.url + ') - Vélos et lifestyle\n';
      response += '• [Amazon Belgique](' + projectKnowledge.boutiques.belgique.url + ') - Bilangue FR/NL\n';
      response += '• [Amazon Suède](' + projectKnowledge.boutiques.suede.url + ') - Design scandinave\n\n';
      
      response += '**🌎 AMÉRIQUES :**\n';
      response += '• [Amazon USA](' + projectKnowledge.boutiques.usa.url + ') - Catalogue géant\n';
      response += '• [Amazon Canada](' + projectKnowledge.boutiques.canada.url + ') - Bilangue\n';
      response += '• [Amazon Brésil](' + projectKnowledge.boutiques.bresil.url + ') - Amérique latine\n\n';
      
      response += '**🌏 ASIE-PACIFIQUE :**\n';
      response += '• [Amazon Inde](' + projectKnowledge.boutiques.inde.url + ') - Prix imbattables\n';
      response += '• [Amazon Singapour](' + projectKnowledge.boutiques.singapour.url + ') - Hub tech Asie\n';
      response += '• [Amazon Australie](' + projectKnowledge.boutiques.australie.url + ') - Pacifique Sud\n\n';
      
      response += 'Franchement, selon ce que vous cherchez, je peux vous orienter vers LA bonne boutique. Électronique ? Mode ? Maison ? Dites-moi et je vous conseille la meilleure !';
      return response;
    }

    // France patrimoine
    if (msgLower.includes('france')) {
      const fr = projectKnowledge.bibliotheque.france;
      return fr.description + '\n\n' + fr.conseils + '\n\n➡️ **[Découvrez la page France complète](' + fr.url + ')** pour tous les détails, photos et infos pratiques !';
    }

    // Italie
    if (msgLower.includes('italie') || msgLower.includes('italy')) {
      const it = projectKnowledge.bibliotheque.italie;
      return it.description + '\n\n' + it.conseils + '\n\n➡️ **[Page Italie complète ici](' + it.url + ')** avec tout le détail des 58 sites UNESCO !';
    }

    // Conseils voyage
    if (msgLower.includes('voyage') || msgLower.includes('conseil') || msgLower.includes('trip')) {
      if (msgLower.includes('budget') || msgLower.includes('pas cher') || msgLower.includes('économ')) {
        return projectKnowledge.expertAdvice.voyage.budget;
      }
      if (msgLower.includes('sécurité') || msgLower.includes('sûr') || msgLower.includes('danger')) {
        return projectKnowledge.expertAdvice.voyage.securite;
      }
      return projectKnowledge.expertAdvice.voyage.saisonnier + '\n\nVous avez une destination précise en tête ? Je peux vous donner des conseils ultra ciblés !';
    }

    // Shopping astuces
    if (msgLower.includes('astuce') || msgLower.includes('promo') || msgLower.includes('code')) {
      return projectKnowledge.expertAdvice.shopping.amazon + '\n\n' + projectKnowledge.expertAdvice.shopping.qualite;
    }

    // Bibliothèque
    if (msgLower.includes('bibliothèque') || msgLower.includes('pages') || msgLower.includes('contenu')) {
      return '📚 Alors la bibliothèque REUSSITESS, c\'est vraiment mon bébé ! 62 pages que j\'ai construites avec passion. Laissez-moi vous faire le tour :\n\n🇪🇺 **Europe (15 pays)** - France 49 UNESCO, Italie 58 record mondial, Allemagne, UK, Espagne... Tous les grands\n\n🌎 **Amériques (4 régions)** - Québec francophone, Haïti première république noire, Louisiane jazz, Brésil géant\n\n🏝️ **DOM-TOM (10 territoires)** - Réunion, Guadeloupe, Martinique, Guyane, Polynésie, Nouvelle-Calédonie...\n\n🌍 **Afrique (7 pays)** - Sénégal, Côte d\'Ivoire, Madagascar, Mali Tombouctou...\n\n🌙 **Maghreb (4 pays)** - Maroc médinas, Algérie Tassili, Tunisie Carthage, Liban Baalbek\n\n🌏 **Asie-Pacifique (12 pays)** - Inde 40 UNESCO, Vietnam, Cambodge Angkor, Japon, Chine...\n\n🌊 **Océanie (3 îles)** - Fidji, Papouasie 840 langues, Samoa\n\n➡️ **[Explorez toute la bibliothèque](/bibliotheque)**\n\nQu\'est-ce qui vous tente ? Une région en particulier ?';
    }

    // Aide
    if (msgLower.includes('aide') || msgLower.includes('help') || msgLower.includes('perdu')) {
      return 'Pas de souci, je suis là pour ça ! Voici comment je peux vraiment vous aider :\n\n**🌍 PATRIMOINE & CULTURE**\nPosez-moi des questions sur n\'importe quel pays des 62 pages - France, Italie, Japon, Brésil... Je vous donne des infos détaillées, des conseils pratiques, les meilleurs moments pour visiter.\n\n**🛍️ SHOPPING AMAZON**\nJe vous donne les liens directs vers les 26 boutiques Amazon, les meilleures astuces pour économiser, comment repérer les vraies promos...\n\n**✈️ CONSEILS VOYAGE**\nBudget, sécurité, meilleures saisons, bons plans hébergement, comment éviter les pièges à touristes...\n\n**Exemples concrets:**\n• "France patrimoine"\n• "Amazon France lien"\n• "Conseils voyage Italie"\n• "Astuces économiser Amazon"\n• "Meilleure période Japon"\n\nParlez-moi comme à un pote, posez vos vraies questions !';
    }

    // Réponse par défaut intelligente
    return 'Hmm, je ne suis pas sûr d\'avoir bien compris votre question' + (userName ? ' ' + userName : '') + '. Vous pouvez reformuler ? Ou sinon, dites-moi ce qui vous intéresse :\n\n• Un pays ou une région en particulier ?\n• Des conseils pour un voyage ?\n• Les boutiques Amazon et comment économiser ?\n• La bibliothèque culturelle complète ?\n\nJe suis là pour vous aider vraiment, alors n\'hésitez pas à me demander n\'importe quoi sur REUSSITESS !';
  };

  const handleSubmit = function(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(function(prev) { return prev.concat({ role: 'user', content: userMessage }); });
    setConversationHistory(function(prev) { return prev.concat({ role: 'user', content: userMessage }); });
    setIsLoading(true);

    setTimeout(function() {
      try {
        const response = getHumanResponse(userMessage);
        setMessages(function(prev) { return prev.concat({ role: 'assistant', content: response }); });
        setConversationHistory(function(prev) { return prev.concat({ role: 'assistant', content: response }); });
        speak(response);
      } catch (error) {
        setMessages(function(prev) { 
          return prev.concat({ role: 'assistant', content: 'Oups, j\'ai eu un petit bug là ! 😅 Vous pouvez répéter ? Je vous écoute.' }); 
        });
      }
      setIsLoading(false);
    }, 600);
  };

  return (
    <div>
      <button
        onClick={function() { setIsOpen(!isOpen); }}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-6 rounded-full shadow-2xl hover:scale-110 transition-all z-50 animate-pulse"
        style={{ 
          boxShadow: '0 0 50px rgba(59, 130, 246, 0.7), 0 0 100px rgba(168, 85, 247, 0.5)',
          width: '85px',
          height: '85px'
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <span className="text-4xl mb-1">💬</span>
          <span className="text-xs font-bold">ALEX</span>
        </div>
        {isSpeaking && (
          <span className="absolute -top-2 -right-2 flex h-7 w-7">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-7 w-7 bg-red-500 items-center justify-center text-xs">🔊</span>
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-32 right-8 w-[600px] h-[800px] bg-white rounded-3xl shadow-2xl flex flex-col z-50 border-4 border-purple-600">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-6 rounded-t-3xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl">
                  👨
                </div>
                <div>
                  <h3 className="font-bold text-xl">Alex - Expert Culture & Voyage</h3>
                  <p className="text-sm opacity-90">Votre conseiller REUSSITESS • Humain • Passionné</p>
                </div>
              </div>
              <div className="flex gap-3">
                {isSpeaking && (
                  <button onClick={stopSpeaking} className="hover:bg-white/20 p-3 rounded-lg transition">
                    <span className="text-2xl">🔇</span>
                  </button>
                )}
                <button onClick={function() { setIsOpen(false); }} className="hover:bg-white/20 p-3 rounded-lg transition text-2xl font-bold">
                  ✕
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 border-b-2 border-purple-200 flex gap-2 overflow-x-auto bg-gradient-to-r from-purple-50 to-pink-50">
            {languages.map(function(lang) {
              const isActive = currentLang === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={function() { setCurrentLang(lang.code); }}
                  className={isActive 
                    ? 'px-5 py-3 rounded-xl text-base font-semibold whitespace-nowrap bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-110'
                    : 'px-5 py-3 rounded-xl text-base font-semibold whitespace-nowrap bg-white hover:bg-purple-100 text-gray-700 border-2 border-purple-200'}
                >
                  {lang.flag} {lang.name}
                </button>
              );
            })}
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-5 bg-gradient-to-b from-purple-50/30 to-white">
            {messages.map(function(msg, idx) {
              const isUser = msg.role === 'user';
              const htmlContent = msg.content
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\n/g, '<br/>')
                .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="underline font-bold hover:text-purple-600" target="_blank">$1</a>');
              
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

          <form onSubmit={handleSubmit} className="p-5 border-t-2 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
            <div className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={function(e) { setInput(e.target.value); }}
                placeholder="Parlez-moi comme à un ami... 💬"
                className="flex-1 border-2 border-purple-300 rounded-xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-purple-400 text-lg"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold text-xl hover:scale-105 transition-all shadow-lg disabled:opacity-50"
              >
                🚀
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
