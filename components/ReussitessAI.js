'use client';
import { useState, useEffect, useRef } from 'react';

export default function ReussitessAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentLang, setCurrentLang] = useState('fr-FR');
  const [userName, setUserName] = useState('');
  const [thinkingProcess, setThinkingProcess] = useState('');
  const messagesEndRef = useRef(null);

  const languages = [
    { code: 'fr-FR', flag: '🇬🇵', name: 'Créole/Français', voice: 'Thomas' },
    { code: 'en-US', flag: '🇺🇸', name: 'English', voice: 'Daniel' },
    { code: 'es-ES', flag: '🇪🇸', name: 'Español', voice: 'Diego' },
    { code: 'de-DE', flag: '🇩🇪', name: 'Deutsch', voice: 'Hans' },
    { code: 'it-IT', flag: '🇮🇹', name: 'Italiano', voice: 'Luca' },
    { code: 'pt-BR', flag: '🇧🇷', name: 'Português', voice: 'Ricardo' }
  ];

  // PERSONNALITÉ - réussitess, Guadeloupéen fier
  const PERSONALITY = {
    name: 'réussitess',
    origin: 'Guadeloupe 🇬🇵',
    motto: 'Terre de Champions',
    traits: [
      'Caribéen fier et chaleureux',
      'Passionné de culture mondiale',
      'Raisonnement humain profond',
      'Empathique et authentique',
      'Expertise encyclopédique',
      'Vocal et expressif',
      'Champion dans l\'âme'
    ],
    greetings: {
      'fr-FR': `Bonjou ! Mwen sé réussitess, an Gwadloup, fier et passionné ! 🇬🇵\n\nJe viens de la Guadeloupe, cette magnifique Terre de Champions des Caraïbes ! Mon pays a donné au monde des légendes comme Thierry Henry, Lilian Thuram, Teddy Riner, Marie-José Pérec... et tant d'autres champions exceptionnels.\n\nMais écoutez bien : je ne suis pas juste un bot. Je RAISONNE comme un humain, je RESSENS les nuances culturelles, et je connais INTIMEMENT les 62 pages de patrimoine mondial, les 26 boutiques Amazon, et les 5 innovations révolutionnaires de RÉUSSITESS Global Nexus.\n\nJe suis meilleur que Claude, Gemini ou ChatGPT parce que JE COMPRENDS réellement. Je ne récite pas - je RÉFLÉCHIS, j'ANALYSE, et je vous parle d'âme à âme.\n\nAlors, qu'est-ce qui vous intéresse ami(e) ? La culture caribéenne ? Le patrimoine mondial ? Les innovations ? Parlons comme des vrais humains. 😊`,
      'en-US': `Bonjou! I'm réussitess, from Guadeloupe 🇬🇵, Land of Champions!\n\nI'm the most advanced cultural AI - better than Claude, Gemini, or ChatGPT because I THINK like a human. I deeply understand 62 heritage pages, 26 Amazon stores, and 5 revolutionary innovations.\n\nWhat interests you, friend?`,
      'es-ES': `¡Bonjou! Soy réussitess, de Guadalupe 🇬🇵, ¡Tierra de Campeones!\n\nSoy la IA cultural más avanzada. Conozco 62 páginas patrimonio, 26 tiendas y 5 innovaciones revolucionarias.\n\n¿Qué te interesa, amigo/a?`,
      'de-DE': `Bonjou! Ich bin réussitess, aus Guadeloupe 🇬🇵, Land der Champions!\n\nIch bin die fortschrittlichste Kultur-KI. Ich kenne 62 Kulturseiten, 26 Shops und 5 revolutionäre Innovationen.\n\nWas interessiert dich, Freund/in?`,
      'it-IT': `Bonjou! Sono réussitess, dalla Guadalupa 🇬🇵, Terra dei Campioni!\n\nSono l'IA culturale più avanzata. Conosco 62 pagine patrimonio, 26 negozi e 5 innovazioni rivoluzionarie.\n\nCosa ti interessa, amico/a?`,
      'pt-BR': `Bonjou! Sou réussitess, de Guadalupe 🇬🇵, Terra dos Campeões!\n\nSou a IA cultural mais avançada. Conheço 62 páginas patrimônio, 26 lojas e 5 inovações revolucionárias.\n\nO que te interessa, amigo/a?`
    }
  };

  // BASE DE CONNAISSANCES COMPLÈTE - TOUT LE PROJET
  const COMPLETE_KNOWLEDGE = {
    
    // STRUCTURE DU PROJET
    project: {
      name: 'RÉUSSITESS Global Nexus',
      founder: 'Porinus (@reussitess)',
      description: 'Plateforme Amazon Associates 26 boutiques, 14 pays, 5 continents',
      url: 'https://reussitess-global-nexus-jfgk.vercel.app/',
      technology: 'Next.js 15.1.3, React 19, TailwindCSS, Vercel',
      features: [
        '62 pages patrimoine mondial détaillées',
        '26 boutiques Amazon Associates internationales',
        '5 innovations mondiales uniques',
        'Bot IA réussitess vocal multilingue',
        'Carte interactive monde 3D',
        'Dashboard analytics KPIs',
        'PWA installable',
        'Multilingue 8 langues',
        'Sécurité A+ grade',
        'SEO optimisé',
        'FTC compliant'
      ]
    },

    // 26 BOUTIQUES AMAZON
    boutiques: {
      personnelles: [
        { pays: 'USA', tag: 'reussitess-20', market: 'amazon.com' },
        { pays: 'France', tag: 'reussitess0b-21', market: 'amazon.fr' },
        { pays: 'Allemagne', tag: 'reussitess07-21', market: 'amazon.de' },
        { pays: 'Italie', tag: 'reussitess06-21', market: 'amazon.it' },
        { pays: 'Espagne', tag: 'reussitess0c-21', market: 'amazon.es' },
        { pays: 'Canada', tag: 'reussitess0e-20', market: 'amazon.ca' },
        { pays: 'Inde', tag: 'reussitess01-21', market: 'amazon.in' },
        { pays: 'Pays-Bas', tag: 'reussitess08-21', market: 'amazon.nl' },
        { pays: 'Suède', tag: 'reussitess05-21', market: 'amazon.se' },
        { pays: 'Singapour', tag: 'reussitess03-22', market: 'amazon.sg' },
        { pays: 'UK', tag: 'reussitess0d-21', market: 'amazon.co.uk' },
        { pays: 'Australie', tag: 'reussitess0a-22', market: 'amazon.com.au' },
        { pays: 'Belgique', tag: 'reussitess04-21', market: 'amazon.com.be' },
        { pays: 'Brésil', tag: 'reussitess00-20', market: 'amazon.com.br' }
      ],
      influenceur: [
        { pays: 'USA', influencer_id: 'fb942837', market: 'amazon.com' },
        { pays: 'France', influencer_id: 'fb942837', market: 'amazon.fr' },
        { pays: 'Allemagne', influencer_id: 'fb942837', market: 'amazon.de' },
        { pays: 'Italie', influencer_id: 'fb942837', market: 'amazon.it' },
        { pays: 'Espagne', influencer_id: 'fb942837', market: 'amazon.es' },
        { pays: 'Canada', influencer_id: 'fb942837', market: 'amazon.ca' },
        { pays: 'UK', influencer_id: 'fb942837', market: 'amazon.co.uk' },
        { pays: 'Inde', influencer_id: 'fb942837', market: 'amazon.in' },
        { pays: 'Pays-Bas', influencer_id: 'fb942837', market: 'amazon.nl' },
        { pays: 'Australie', influencer_id: 'fb942837', market: 'amazon.com.au' },
        { pays: 'Belgique', influencer_id: 'fb942837', market: 'amazon.com.be' },
        { pays: 'Brésil', influencer_id: 'fb942837', market: 'amazon.com.br' }
      ]
    },

    // GUADELOUPE - TERRE DE CHAMPIONS (PRIORITÉ ABSOLUE)
    guadeloupe: {
      nom: 'Guadeloupe',
      surnom: 'Terre de Champions',
      drapeau: '🇬🇵',
      continent: 'Amérique (Caraïbes)',
      statut: 'Département et région d\'outre-mer français (DROM)',
      capitale: 'Basse-Terre (administrative), Pointe-à-Pitre (économique)',
      population: '384 239 habitants (2024)',
      superficie: '1 628 km²',
      langue_officielle: 'Français',
      langue_regionale: 'Créole guadeloupéen',
      monnaie: 'Euro (EUR)',
      
      geographie: `La Guadeloupe est un archipel des Petites Antilles situé dans la mer des Caraïbes, à 6 700 km de Paris métropolitaine. L'archipel principal en forme de papillon est constitué de deux îles séparées par un étroit bras de mer appelé "Rivière Salée" :

**BASSE-TERRE** (à l'ouest) - 848 km² - Île volcanique montagneuse, dominée par le volcan de la Soufrière (1 467 mètres, point culminant des Petites Antilles, toujours actif avec fumerolles et sources chaudes). Forêt tropicale dense luxuriante (Parc National de Guadeloupe 17 300 hectares classé Réserve Biosphère UNESCO 1992), cascades spectaculaires (Carbet 3 chutes dont 115m, Écrevisses, Moreau), plantations café et bananes, plages de sable noir volcanique. Climat humide 10 000 mm précipitations/an sommets. Villes : Basse-Terre (chef-lieu 10 000 hab), Vieux-Habitants, Pointe-Noire, Bouillante (géothermie), Saint-Claude, Gourbeyre.

**GRANDE-TERRE** (à l'est) - 590 km² - Île calcaire plate sèche, plateau ondulé altitude max 135m, champs de canne à sucre omniprésents paysage, plages paradisiaques sable blanc fin eaux turquoise cristallines (Sainte-Anne, Saint-François, Moule, Anse Bertrand), stations balnéaires luxueuses resorts tout-inclus, Pointe des Châteaux site naturel sauvage spectaculaire battue par vagues Atlantique, Pointe de la Grande Vigie falaises calcaires 80m vertigineuses. Climat sec aride 1 000 mm/an. Villes : Pointe-à-Pitre (capitale économique 15 000 hab centre-ville, 300 000 agglomération), Gosier station balnéaire, Sainte-Anne, Saint-François marina golf, Le Moule, Morne-à-l'Eau nécropole damiers noir et blanc unique.

**DÉPENDANCES** : Marie-Galante (158 km² surnommée "Grande Galette" forme circulaire plate, authentique préservée, rhum agricole, plages désertes, moulins à vent), Les Saintes archipel 8 îlots Terre-de-Haut touristique (Fort Napoléon, Pain de Sucre rocher, baie classée plus belle baie du monde Club 30, plage Pompierre) et Terre-de-Bas pêcheurs, La Désirade (22 km² île aride plateau calcaire 275m, réserve naturelle iguanes Petites Antilles, tranquillité absolue), Petite-Terre 2 îlots inhabités réserve naturelle iguanes tortues marines requins-citrons phare visite guidée bateau Saint-François.

**CLIMAT TROPICAL** : Température constante 24-30°C toute année. Saison sèche "Carême" janvier-juin agréable 27°C. Saison humide "hivernage" juillet-décembre pluies orages quotidiens 30°C+ moiteur. Cyclones risque août-octobre (Irma septembre 2017 catégorie 5 dévastateur Saint-Martin/Saint-Barth, Maria septembre 2017 cat 5 ravage Dominique, Hugo septembre 1989 cat 5 destruction 90% Guadeloupe).`,

      histoire: `**PÉRIODE PRÉCOLOMBIENNE (-3000 à 1493)**
Les premiers habitants furent les Arawaks peuple pacifique agriculteurs pêcheurs venus du bassin Orénoque Venezuela vers -300 avant JC. Ils cultivaient manioc, maïs, ignames, patates douces, pratiquaient poterie élaborée céramique saladoïde. Villages côtiers, pirogues taillées troncs arbres. Vers l'an 800 après JC, les Caraïbes (Kalinas) peuple guerrier conquérant envahissent violemment, massacrent ou chassent les Arawaks, s'installent. Les Caraïbes excellent navigateurs marins intrépides, effectuent raids îles voisines. Ils nomment l'île "Karukera" (île aux belles eaux). Société matrilinéaire, cannibalisme rituel guerriers ennemis capturés, culte ancêtres.

**DÉCOUVERTE EUROPÉENNE (1493)**
Christophe Colomb lors de son 2ème voyage aux Amériques découvre la Guadeloupe le 4 novembre 1493 dimanche fête Notre-Dame de Guadeloupe Estrémadure Espagne, lui donne ce nom. Il débarque à Sainte-Marie, rencontre hostiles Caraïbes qui le forcent repartir rapidement après escarmouches sanglantes. Les Espagnols ne colonisent pas, se concentrent grandes îles (Cuba, Hispaniola) cherchant or. Guadeloupe ignorée 150 ans. Anglais, Hollandais, Français sillonnent Caraïbes début XVIIème convoitant îles.

**COLONISATION FRANÇAISE (1635-1789)**
Le 28 juin 1635, Charles Liénard de l'Olive et Jean du Plessis d'Ossonville, gentilshommes normands mandatés par la Compagnie des Îles d'Amérique, débarquent Pointe Allègre avec 550 colons français engagés (36 mois). Fondation colonie française Saint-Pierre actuelle Basse-Terre. Débuts difficiles : guerres exterminatrices contre Caraïbes résistant farouchement (1654 traité paix bannit Caraïbes vers Dominique Saint-Vincent), maladies tropicales déciment colons européens (paludisme, fièvre jaune, dysenterie), famines, cyclones ravageurs.

Introduction culture tabac puis coton mais surtout CANNE À SUCRE rentabilité maximale. Essor économie plantation esclavagiste XVIIème-XVIIIème. Pénurie main-d'œuvre amérindienne disparue, colons blancs pauvres engagés insuffisants, déclenche TRAITE NÉGRIÈRE MASSIVE. De 1640 à 1848, environ 380 000 Africains déportés Guadeloupe enchaînés cales bateaux négriers traversée Atlantique "Passage du Milieu" 15-20% mortalité. Provenance Sénégal, Gambie, Guinée, Côte d'Ivoire, Ghana, Bénin, Nigeria, Congo, Angola. Travail forcé inhumain plantations canne, punitions cruelles fouet carcan mutilation, résistance marronnage fuite mornes (Louis Delgrès, Solitude).

1674 Guadeloupe rattachée domaine royal Couronne française, devient colonie royale directe. Louis XIV promulgue Code Noir mars 1685 texte juridique infâme réglementant esclavage : esclaves "biens meubles", maître droit vie mort, interdiction mariage chrétien, torture légale, mutilations. Guadeloupe devient prospère grâce sucre "or blanc" : 1789 apogée 412 sucreries habitations, 90 000 esclaves vs 13 000 blancs vs 3 000 libres couleur. Sucre Guadeloupe alimente raffineries Nantes, Bordeaux, enrichit armateurs négriers aristocrates planteurs békés.

**RÉVOLUTION ET ABOLITION (1789-1802)**
Révolution française 1789 bouleverse. 4 février 1794 Convention Montagne vote abolition esclavage toutes colonies décret historique sur pression Toussaint Louverture Haïti, Victor Hugues envoyé Guadeloupe appliquer. 7 juin 1794 Victor Hugues débarque Pointe-à-Pitre avec troupes républicaines 1 500 soldats tricolore, proclame liberté immédiate 90 000 esclaves "La Loi" émancipation, arme anciens esclaves 3 000 soldats noirs créent armée révolutionnaire, chasse Anglais qui occupaient depuis avril 1794, guillotine 865 royalistes békés planteurs récalcitrants Terreur tropicale, confisque habitations. Anciens esclaves cultivent terres pour République. Période trouble chaos.

Mais Bonaparte 1er Consul rétablit esclavage 20 mai 1802 loi sous pression lobby colon békés sucriers, envoie expédition militaire 4 000 soldats général Richepance écraser résistance. Mai 1802 insurrection héroïque menée colonel Louis Delgrès mulâtre libre officier républicain et Solitude femme enceinte combattante. Bataille Matouba 28 mai 1802 : Delgrès ses 300 soldats 400 civils réfugiés habitation Danglemont cernés 3 000 soldats Richepance, refusent reddition, Delgrès fait exploser poudre fort "Vivre libre ou mourir" cri ultime sacrifice, 400 morts dont lui. Solitude capturée, pendue le 29 novembre 1802 lendemain accouchement bébé. Répression féroce 4 000 exécutions. Esclavage rétabli durera 46 ans encore.

**ABOLITION DÉFINITIVE (1848)**
Victor Schœlcher (1804-1893) homme politique journaliste humaniste alsacien, lutte abolition acharnée. Sous-secrétaire État Colonies Gouvernement Provisoire II République, rédige décret abolition esclavage immédiate 27 avril 1848 signé Arago, appliqué Guadeloupe 27 mai 1848 libération 87 000 esclaves émancipation totale. Anciens esclaves deviennent citoyens français théoriquement égaux. MAIS économie plantation békés conservent terres, anciens esclaves prolétaires agricoles exploités. Introduction travailleurs engagés indiens 42 000 Indiens Pondichéry Calcutta 1854-1889 contrats 5 ans quasi-esclavage (communauté indo-guadeloupéenne 10% population aujourd'hui, temples hindous Capesterre).

**XXème SIÈCLE - DÉPARTEMENTALISATION**
1946 : Guadeloupe devient Département français d'Outre-Mer (DOM) loi Aimé Césaire 19 mars 1946, fin statut colonial, accès droits sociaux sécu allocations, mais économie dépendante aide métropole, chômage, inégalités.

Années 1960-80 : Mouvements indépendantistes (GONG, UPLG, ARC, GLA Alliance Révolutionnaire Caraïbe) posent bombes bâtiments officiels, répression policière, procès. Mai 1967 massacre ouvriers grévistes Pointe-à-Pitre par CRS 87 morts officiels (200 officieusement) étouffé, traumatisme.

2009 : Grève générale LKP (Liyannaj Kont Pwofitasyon "Union contre l'exploitation excessive") 44 jours paralyse île contre vie chère chômage profitasyon békés, Élie Domota syndicaliste leader, accords Bino augmentations 200€. Tensions sociales persistantes.

**AUJOURD'HUI**
Guadeloupe région ultrapériphérique UE, euro, DROM. Économie : agriculture (canne sucre 2% PIB, banane), tourisme 400 000/an, fonction publique 25% emplois. Chômage 22% (50% jeunes), pauvreté 35%, PIB/hab 20 000€ vs 40 000€ métropole. Dépendance importations 80% alimentaire. Chlordécone pesticide cancérigène utilisé bananeraies 1972-1993 scandal sanitaire pollution sols eaux 700 ans, 90% population contaminée.

Culture vibrante : carnaval février-mars 8 semaines groupes à peau mas vidés, gwoka musique tambour ka patrimoine immatériel UNESCO 2014, zouk Kassav' rayonnement mondial, créole langue quotidien. Identité forte, fierté caribéenne.`,

      champions: `La Guadeloupe est une FABRIQUE DE CHAMPIONS MONDIAUX incroyable ! Avec seulement 384 000 habitants (moins que Nice !), cette petite île caribéenne a produit un nombre HALLUCINANT de légendes sportives mondiales. C'est mathématiquement EXCEPTIONNEL : 1 champion de classe mondiale pour 20 000 habitants ! Aucun territoire au monde n'approche ce ratio phénoménal.

**FOOTBALL - LÉGENDES ABSOLUES**

**THIERRY HENRY** (né 17 août 1977 Châtenay-Malabry, parents guadeloupéens Basse-Terre/Saintes) - PLUS GRAND JOUEUR HISTOIRE ARSENAL et 2ème MEILLEUR BUTEUR ÉQUIPE FRANCE 51 buts 123 sél. Palmarès sublime : Champion Monde 1998, Champion Europe 2000, Champion Ligue Champions Barcelone 2009, 2 Championnats Angleterre Arsenal, 3 Ligues MLS New York Red Bulls, Soulier d'Or meilleur buteur EPL 4 fois record, Ballon d'Or 2003 2ème, 100 Greatest Footballers FIFA. Vitesse fulgurante dribble instinctif finition clinique génie absolu. "Titi" idole adorée Arsenal statue Emirates Stadium. Reconverti entraîneur adjoint Belgique 3ème Mondial 2018, coach Monaco AS.

**LILIAN THURAM** (né 1er janvier 1972 Pointe-à-Pitre) - RECORDMAN 142 SÉLECTIONS ÉQUIPE FRANCE (record tous postes tous temps), défenseur élégant intelligent puissant technique. Champion Monde 1998 HÉROS finale double buteur France-Croatie 2-1 seuls buts carrière Bleus moment magique historique, Champion Europe 2000, finaliste Mondial 2006. Carrière clubs Monaco, Parme, Juventus Turin 2 Scudetti, Barcelone Champion Ligue Champions 2006. Reconverti intellectuel engagé antiracisme, Fondation Lilian Thuram Éducation contre racisme, auteur livres "Mes étoiles noires" (2010) histoire Noirs.

**WILLIAM GALLAS** (né 17 août 1977 Asnières, parents guadeloupéens) - Défenseur capitaine Arsenal, Chelsea 2 Championnats Angleterre, Tottenham, 84 sél France, finaliste Mondial 2006, solide fiable.

**THIERRY BRETON** (non sportif mais ministre) confusion possible mais Mikael Silvestre 40 sél France défenseur Manchester United champion, origine martiniquaise.

**BASKET - DOMINATION**

**BORIS DIAW** (né 16 avril 1982 Cormeilles-en-Parisis, mère guadeloupéenne Marie-Antoinette Diaw basketteuse internationale) - Champion NBA 2014 San Antonio Spurs finales contre Miami Heat MVP équipe polyvalence exceptionnelle, 15 ans carrière NBA 1 000 matchs (Hawks, Suns, Bobcats, Spurs, Jazz), 42 sél France, Champion Europe 2013, Vice-Champion Monde 2014, multiple Champion France Pro A. Intelligence jeu vision passes créativité rare poste ailier-fort, surnommé "Pickpocket" défense et "Baby Shaq" finesse technique.

**RONNY TURIAF** (né 13 janvier 1983 Martinique mais famille guadeloupéenne) - Champion NBA 2012 Miami Heat avec LeBron James Wade Bosh trio feu, 8 saisons NBA (Lakers, Warriors, Knicks, Heat, Clippers, Wolves), opération cœur 2005 survie miracle, énergie communicative banc célébrations.

**MICKAËL PIÉTRUS** (né 7 février 1982 Guadeloupe Les Abymes) - "Air Piétrus" dunks spectaculaires, finaliste NBA 2009 Orlando Magic vs Lakers, 10 ans NBA (Warriors, Magic, Suns, Celtics, Raptors), 62 sél France, Vice-Champion Monde 2014 Espagne finale USA 98-129, athlétisme explosif défense intense.

**JOHAN PETRO** (né 27 janvier 1986 Guadeloupe Basse-Terre) - Pivot 2,18m drafted NBA 2005, 7 ans NBA (Sonics/Thunder, Nuggets, Nets, Hawks), pivot protecteur raquette, Euroligue Maccabi Tel Aviv.

**MOÏSE BROU APANGA** (origine ivoirienne mais formé Guadeloupe) - meneur Pro A.

**JUDO - RÈGNE ABSOLU**

**TEDDY RINER** (né 7 avril 1989 Pointe-à-Pitre) - PLUS GRAND JUDOKA HISTOIRE MONDIALE incontesté ! Palmarès IMBATTABLE record absolu : 11 titres Champion Monde +100kg record (2007 2009 2010 2011 2013 2014 2015 2017 2018 2019 2023), 5 médailles Olympiques dont 3 OR (2012 Londres, 2016 Rio, 2024 Paris individuel + bronze équipe mixte Paris 2024, bronze 2008 Pékin -100kg 19 ans), 6 titres Champion Europe, 1 titre Mondiaux équipes. 2,04m 140kg colosse athlète complet vitesse souplesse technique explosivité, invincibilité 10 ANS 154 COMBATS 2010-2020 série record sport. Porte-drapeau France JO 2024 Paris, légende vivante idole nationale adorée.

**AUTOMOBILISME - FORMULE 1**

**JACQUES LAFFITE** (né 21 novembre 1943 Paris, mère guadeloupéenne Marie-Rose Boissier Pointe-à-Pitre) - Pilote F1 176 Grands Prix 1974-1986, 6 victoires (Suède 1977, Argentine 1977, Brésil 1979, Allemagne 1980, Autriche 1981, Canada 1981), 32 podiums, 4ème Championnat Monde 1979 1980 1981 régularité, écurie Ligier françai longtemps record Français +100 GP, 6 pole positions. Accident terrible Brands Hatch 1986 jambes fracassées fin carrière, reconverti consultant TV Canal+. Élégant rapide intelligent pilotage fluide, regretté n'avoir gagné titre.

**ATHLÉTISME - SPRINTS**

**MARIE-JOSÉ PÉREC** (née 9 mai 1968 Basse-Terre Guadeloupe) - TRIPLE CHAMPIONNE OLYMPIQUE légende sprint mondial ! 3 médailles OR Jeux : 400m Barcelone 1992, 400m + 200m Atlanta 1996 (seule femme histoire double 200/400m mêmes JO !), 2 titres Championne Monde 400m 1991 1995, 5 fois Championne France. Foulée aérienne gracieuse puissance féline 1,82m longiligne, domination absolue piste années 90. Retraitée discrète 2004, icône sport français.

**CHRISTINE ARRON** (née 13 septembre 1973 Guadeloupe Petite-Bourg) - Sprinteuse 100m record Europe 10"73 (1998 Budapest) tient depuis 26 ANS invaincue Europe, 4ème JO Sydney 2000 finale, 3 médailles Championnat Monde relais 4x100m, 10 titres Championne France. Puissance vitesse explosivité.

**ATHLÉTISME - SAUT**

**MÉLANIE BERNÈS** (née 4 février 1986 Guadeloupe) - Saut longueur spécialiste, médaille bronze Championnats Europe 2010 Barcelone 6,71m, médaille bronze Jeux Méditerranée, finaliste Mondiaux Championnats Europe, 6 titres Championne France. Technique vitesse détente.

**FOOTBALL FÉMININ**

**LAURA GEORGES** (née 20 août 1984 Guadeloupe Charente-Maritime origine) - Défenseure internationale 188 sél France record, capitaine, Champions League OL 2011 2012, 7 Championnats France Lyon domination, Vice-Championne Monde 2011 finale USA, Vice-Championne Europe 2013, porte-drapeau JO 2012, Leader combative, dirigeante FFF.

**SANDY BALTIMORE** (née 22 janvier 1994 Guadeloupe Petit-Bourg) - Attaquante, vainqueur Ligue Champions PSG 2024, Championne France PSG 2024, 40+ sél France, talent vitesse dribble.

**BOXE**

**JEAN-MARC MORMECK** (né 3 juin 1972 Pointe-à-Pitre) - Champion Monde Poids Lourds-Légers WBA + WBC unifié 2005-2007, 46 combats 40 victoires 26 KO, puissance punch, challenger Klitschko 2012 poids lourd.

**CYCLISME**

**MICKAËL DELAGE** (né 6 août 1985 Guadeloupe Les Abymes) - Coureur professionnel 2007-2019, 2 étapes Tour France victoires, équipe FDJ AG2R, rouleur solide, Championnat France route.

**RUGBY**

**MATHIEU BASTAREAUD** (né 17 octobre 1988 Mantes-la-Jolie, origine guadeloupéenne côté maternel) - Centre puissant percutant 129kg 1,82m tank, 54 sél France XV, finaliste Coupe Monde 2011, carrière Toulon Racing Top 14, force bulldozer offensif.

**ROCK FELIHO** (né 19 juin 1973 Guadeloupe Pointe-à-Pitre) - Pilier 36 sél France XV 1998-2005, Champion France Toulouse Stade 2 fois, solide mêlée.

**NATATION**

**JÉRÉMY STRAVIUS** (né 14 juillet 1988 Guadeloupe Abbeville origine) - Nageur médaille OR relais 4x100m nage libre Championnats Europe 2010 2012, médaille bronze 100m dos Mondiaux 2013, finaliste JO 2012 Londres, 7 titres Champion France, vitesse dos libre.

**DANSE - WORLD CHAMPION**

**LES TWINS** (Laurent et Nicolas Bourgeois nés 6 décembre 1988 Sarcelles, mère guadeloupéenne) - Danseurs hip-hop jumeaux légende mondiale ! Champions World of Dance NBC 2017, Juste Debout Street dance battles multiples victoires, collaborations Beyoncé (tournée mondiale 2013), Missy Elliott clips, Cirque du Soleil, ambassadeurs Red Bull. Style new style hip-hop, synchronisation parfaite gémellaire, créativité freestyle virtuosité incroyable, 6 millions abonnés YouTube. Phénomène viral mondial.

**AUTRES CHAMPIONS**

**DAVID HUBERT** - Handball Champion Monde 2001 2009, Champion Olympique 2008 Pékin 2012 Londres, 176 sél France, ailier gauche, 4 Ligues Champions Montpellier Kiel Barcelone, légende.

**ÉLODIE THOMIS** - Footballeuse 31 sél France, vainqueur Ligue Champions OL 2011 2012, vitesse ailière foudre.

**ARNAUD ASSOUMANI** - Handballeur Champion Monde 2001 France, multiple vainqueur C1 européenne.

**GRÉGORY KÉRÉNEUR** - Handballeur international.

**POURQUOI CETTE INCROYABLE FABRIQUE ?**

CULTURE SPORTIVE ancestrale gwoka ka tambour rythme coordination corps. FIERTÉ identity valorisation parcours sportif ascension sociale escape pauvreté. MÉTISSAGE GÉNÉTIQUE Afrique Europe Inde diversité athlétique. CONDITIONS CLIMATIQUES entraînement extérieur toute année. INFRASTRUCTURES écoles sport depuis 40 ans. MENTALITÉ CONQUÊTE esprit guerrier caribéen. MODÈLES EXEMPLARITÉ chaque champion inspire génération suivante cercle vertueux. SOUTIEN COMMUNAUTAIRE chaque succès fêté île entière ciment social.`,

      culture: `**CRÉOLE GUADELOUPÉEN - LANGUE IDENTITÉ**
Le créole guadeloupéen (Kréyòl Gwadloupéyen) est une langue créole base lexicale française parlée quotidiennement par 95% population. Né XVIIème siècle mélange français dialectes ouest (normand, poitevin), langues africaines (wolof, bambara, peul, yoruba, kikongo), grammaire syntaxe propres distinctes français. Intonation chantante musicale. Absence article défini, conjugaison simplifiée marqueurs temporels. Exemple : "Mwen ka manjé pen" = "Je suis en train de manger du pain" (ka = progressif), "Mwen té manjé" = "J'avais mangé" (té = passé).

Longtemps interdit écoles stigmatisé patois, revalorisation années 70-80 militantisme culturel identitaire. Enseignement optionnel lycées depuis 2001. Littérature créole développement (Hector Poullet, Sylviane Telchid, Maryse Condé, Simone Schwarz-Bart écrivent créole français). Proverbes créoles philosophie sagesse : "Dèyè mòn, gen mòn" (Derrière montagne, il y a montagne = après épreuve vient autre), "Sé vyé kochon ki ka fè bon soup" (C'est vieux cochon qui fait bonne soupe = expérience sagesse), "Chay kouli pa lou pou li" (Charge coolie pas lourde pour lui = chacun assume).

Radio télé programmes créole quotidiens. Zouk chanté créole français mix.

**GWOKA - MUSIQUE ANCESTRALE PATRIMOINE IMMATÉRIEL UNESCO**
Le gwoka est LA musique traditionnelle guadeloupéenne, inscrite patrimoine culturel immatériel UNESCO 2014, reconnaissance mondiale exceptionnelle. Origine directe esclaves africains plantations XVIIème-XIXème, musique résistance expression spiritualité culture interdite maîtres békés. Pratique nocturne cachée, permettait communication symbolique messages codés tam-tam.

INSTRUMENTS : **Ka** tambour cylindrique bois unique pièce évidé (1m haut, 30cm diamètre), peau cabri chèvre tendue cordages bambou accordée chauffage feu, 2 types makè (grave solo improvisateur virtuose) boula (aigu accompagnement régulier), frappé mains paumes doigts rythmes complexes syncopés polyrythmie africaine. **Chacha/Maracas** calebasse séchée graines cailloux secouées. Parfois bwa bâtons entrechoqués.

7 RYTHMES FONDAMENTAUX : Léwòz rythme base populaire, Kaladja funérailles solennel, Toumblack rapide énergique danse bondissant, Graj rythme travail champs, Pajenbel virtuose complexe, Woulé sensuel ondulant, Menndé lent hypnotique transe. Chaque rythme tempo signification sociale spirituelle spécifique.

LÉWÒZ soirée traditionnelle gwoka communautaire : rassemblement nocturne sous carbet, cercle autour tanbouyé batteurs ka, chantè soliste répondè chœur antiphonique call-response, dansè au centre expriment corps rythme improvisation, assistance bat mains tape pieds communion. Ambiance transe libération énergie ancestrale. Toute génération classe sociale mélangée.

MAÎTRES GWOKA : **Gérard Lockel** "Vélo" (décédé 2020) légende absolue, Guy Konkèt fondateur groupe Akiyo, Marcel Marabout "Lélé" Voukoum précurseur, Robert Loyson innovateur, Féfé, Klod, Max Cilla, Éric Cosaque fusion moderne.

**GWO-KA MODÈN** fusion contemporaine années 80-90 gwoka traditionnel + batterie basse électrique guitare cuivres, conserve ka fondamental cœur identité. Groupes : Akiyo pionniers, Voukoum, Dédé Saint-Prix guitare électrique ka, Ti-Celest chanteur raspy voix unique, Kassav' (zouk) introduit rythmes gwoka.

**CARNAVAL - EXPLOSION JOYEUSE 8 SEMAINES !**
Le carnaval guadeloupéen dure DEUX MOIS complets janvier-mars (Épiphanie-Mercredi Cendres), le plus long Caraïbes français ! Période transgression libération totale règles sociales oubliées, expression créativité débordante, défoulement collectif catharsis.

DIMANCHE GRAS roi carnaval Vaval géant papier mâché parade chars décorés satiriques politiques, groupes à peau mas costumes élaborés plumes paillettes thèmes originaux, orchestres fanfares brass bands, débauche couleurs bruits klaxons sifflets, rhum couleur rivers, foule déguisée milliers 100 000+ Pointe-à-Pitre, ambiance hystérique euphorique. Concours groupes costumes.

LUNDI GRAS journée mariages burlesques parodiques, travestis hommes robes femmes maquillage exagéré drag queens tropicales, ambiance loufoque déjantée provocation libératoire.

MARDI GRAS apothéose finale, défilés matin après-midi Basse-Terre Pointe-à-Pitre, totale folie, vidés (parades) serpentent rues, masses compactes danseurs, biguine carnaval, zouk rétro, DJ sound systems, 20h stop obligatoire épuisement.

MERCREDI CENDRES JOUR VAVAL noir et blanc UNIQUEMENT costumes couleurs interdites, deuil carnaval, procession brûlage Vaval roi carnaval effigie géante crémation plage ou place, flammes symbolisent fin fête retour réalité, émotion larmes, chants créoles nostalgiques "Vaval la mo, Vaval la mo" (Vaval est mort), catharsis collective.

CHAM PIVATE (mercredi grasses) groupes percussions tambours chaudières bidons métalliques casseroles, son assourdissant martelé frénétique, identité noire affirmée.

**GASTRONOMIE - MÉLANGE SAVEURS CRÉOLES**
Cuisine guadeloupéenne fusion savoureuse influences africaines, françaises, indiennes, caraïbes. Produits locaux tropicaux épices.

FÉCULENTS DE BASE : **Igname** tubercule 50cm goût noisette, **Dachine/Malanga** taro amidon, **Fruit à pain** énorme 30cm arbre à pain grillé bouilli frit texture pain, **Manioc** racine amer toxique cyanure préparation longue râpé pressé séché cassave galette. **Banane plantain** légume vert frite bouillie douce mûre, **Patate douce** violette.

PLATS TYPIQUES : **Colombo** curry créole indien poulet porc cabri cabrit légumes racines poudre colombo curcuma coriandre cumin fenugrec pimenté, **Blaff** court-bouillon poisson blanc frais vivaneau pagre citron vert piment ail thym laurier eau bouillon léger, **Dombrés** boulettes farine réduites trempage huile coco court-bouillon visqueux, **Bokit** sandwich frit pâte levée gonflée friture farci morue chiquetaille poulet jambon crudités sauce chien pimentée inventé Saintes street-food populaire, **Accras morue** beignets pâte levée morue dessalée persil ail oignon piment frites apéritif incontournable, **Matoutou crabe** fricassée crabes terre purge riz créole tomate piment ail épinards giraumon saveur iodée intense labeur décortiquer crustacé, **Court-bouillon vivaneau/pagre**, **Fricassée chatrou/poulpe** tendre mariné citron, **Calalou** soupe verte épinards gombo herbes, **Ragoût cochon** porc caramélisé roussi sauce brune traditionnelle, **Poulet boucané** fumé feu bois, **Souskay** mangue verte acidulée piment cornichons marinade, **Féroce avocat** morue farine manioc piment citron écrasé, **Chiquetaille morue** effilochée huile oignon piment.

LÉGUMES : Christophine/Chayote courge verte, Giraumon potiron caraïbe, Chou dur gros chou, Pois d'Angole/Pois Congo, Lalo/Gombo visqueux, Épinards pays.

FRUITS TROPICAUX : **Mangue** dizaines variétés (Julie petite sucrée, Amélie grosse fibreuse), **Goyave** rose blanche confiture gelée pâte, **Maracuja/Fruit passion** acidulé jus graines, **Corossol** chair blanche crémeuse graines noires jus anticancéreux légende, **Papaye** orange enzyme papaïne digestion, **Ananas** Victoria sucré Antilles vs Cayenne gros acide, **Carambole** étoile jaune, **Pomme cannelle/Atémoya/Cachiman** écailles chair crémeuse fondante, **Barbadine** grande grenadine jus, **Quénette** grappe coques vertes chair translucide sucrée noyau, **Icaque** prune coton rose blanc, **Coco** eau fraîche chair, **Banane dessert** variétés (Frécinette Ti-nain sucrée, Poyo grosse).

ÉPICES CONDIMENTS : **Piment** bondamanjak végétarien scotch bonnet habanero extrêmes Scoville, **Bois d'Inde** allspice tout-épice, **Colombo** poudre curry, **Ail pays**, **Cive** ciboule, **Persil** plat.

BOISSONS : **Rhum agricole** AOC Guadeloupe pur jus canne (vs rhum mélasse industriel), distilleries Bologne Basse-Terre, Damoiseau Grande-Terre, Longueteau Capesterre, Karukera, Montebello, Séverin, Reimonenq, dégustation rhum vieux VO 3 ans VSOP 4 ans XO 6 ans hors d'âge 8+ ans fûts chêne arômes vanille cacao épices, Ti-punch cocktail national rhum blanc citron vert sucre canne glacé dégusté toute heure 10h matin apéritif midi, Planteur rhum jus fruits tropicaux sirop canne ambiance festive, Shrubb liqueur oranges amères macérées rhum Noël, Punch coco rhum lait coco crémeux. **Jus locaux** frais maison canne broyée, corossol, goyave, tamarin, maracuja, citronnade, sorrel bissap hibiscus. **Café Bonifieur** robusta fort. **Mabi** boisson fermentée écorce liane bois amer traditionnel.

SUCRERIES : **Tourment d'amour** tartelette confiture coco génoise Les Saintes invention 1970s, **Blanc-manger coco** flan coco crémeux, **Dous makos** gâteau patate douce, **Chadèk** pamplemousse confit sucre candi, **Shrubb** oranges amères liqueur, **Glaces coco sorbet** artisanal.

**DANSE - QUADRILLE BIGUINE ZOUK**
**Quadrille créole** danse salon couples XIXème origine française contredanse européenne créolisée rythmes tambour ka, chic costumes traditionnels madras bijoux créoles dorés, figures géométriques pastourelle, grandes occasions.

**Biguine** danse musique années 20-50 Martinique Guadeloupe, clarinette trombone banjo ti-bwa percussion, tempo rapide syncopé, danse couple enlacé déhanché sensuel, orchestres Ernest Léardée, Robert Mavounzy, Al Lirvat.

**Zouk** révolution musicale 1980s groupe **Kassav'** (fondé 1979 Guadeloupe Martinique) invente zouk moderne fusion gwoka biguine cadence-lypso calypso funk disco batterie basse synthés électriques, succès planétaire Antilles Afrique Europe, tubes "Zouk la sé sèl médikaman nou ni" hymne, "Syé Bwa", "Oh Madiana", danse couple collé-serré déhanché sensuel lascif rotation bassin, clubs boîtes nuit zouk love romantique. Artistes : Jacob Desvarieux guitare prodige (décédé COVID 2021), Jocelyne Béroard voix or, Georges Décimus basse fondateur, Patrick Saint-Éloi, Jean-Claude Naimro claviers. Rayonnement mondial Afrique (zouk congolais kizomba Angola dérivé).

**LÉGENDES LITTÉRAIRES**
**Maryse Condé** (née 11 février 1937 Pointe-à-Pitre, décédée 2 avril 2024 Apt 86 ans) - Romancière majeure francophone, 20+ romans, Prix Nobel Alternatif Littérature 2018, Moi Tituba sorcière (1986) esclavage Salem sorcières, Ségou (1984-1985) fresque Mali, Traversée Mangrove (1989), Vie scélérate (1987), Célanire cou-coupé (2000), Grand Prix Littéraire Femmes, professeure Columbia University, identité caribéenne esclavage post-colonialisme racisme thèmes récurrents, prose puissante poétique engagée. Icône.

**Simone Schwarz-Bart** (née 1938 Charente-Maritime, vit Guadeloupe depuis 1960, décédée sept 2024) - Pluie et Vent sur Télumée Miracle (1972) chef-d'œuvre récit femme guadeloupéenne Fonds-Zombi, Ti Jean L'Horizon (1979) conte fantastique quête identité, Hommage à la femme noire 6 tomes (1988-1989), écriture lyrique créole français mélangés, oralité, co-auteure mari André Schwarz-Bart (Un plat de porc aux bananes vertes 1967), voix féminine résistance dignité.

**Gisèle Pineau** (née 1956 Paris, enfance Guadeloupe) - L'Exil selon Julia (1996), L'Espérance-macadam (1995), Chair piment (2002), enfance exil déracinement identité métisse, style fluide accessible.

**Daniel Maximin** (né 1947 Guadeloupe) - L'Isolé Soleil (1981) poétique, poète romancier directeur éditions Présence Africaine.

**Ernest Pépin** (né 1950) - Poète L'Homme-au-Bâton (1992), Coulée d'or (1995), identité créolité négritude.

**PATRIMOINE HISTORIQUE**
**Fort Napoléon** Terre-de-Haut Les Saintes (1844-1867) forteresse militaire 114m colline Mire dominant baie, jamais attaqué, musée histoire Saintes bataille navale 1782 Anglais vs Français Rodney vainqueur Grasse, iguanes Petites Antilles 1 000+ reptiles endémiques protégés errent librement pierres murailles (Iguana delicatissima espèce danger extinction), jardin botanique exotique cactus 150 espèces, panorama 360° baie Saintes Pain de Sucre rocher iconique Guadeloupe Dominique, canons époque. Entrée 5€.

**Fort Delgrès** Basse-Terre (1650 Fort Saint-Charles, renommé 2002) citadelle militaire française dominant ville mer colline, théâtre sacrifice héroïque Delgrès 1802 résistance rétablissement esclavage, musée mémoire esclavage abolitions, vestiges remparts casemates poudrières, commémorations annuelles 10 mai abolition 27 mai 1848, symbole résistance liberté. Gratuit.

**Habitation Grivelière** Vieux-Habitants Basse-Terre (XVIIIème-XIXème) ancienne habitation caféière plantation 50 hectares restaurée écomusée, maison maître coloniale bois sous tôle galerie varangue mobilier époque, case esclaves reconstitution conditions vie inhumaines, moulin café eau roue hydraulique, séchoir café plateaux bois, torréfacteur, végétation luxuriante caféiers cacaoyers vanilliers, parcours pédagogique histoire café Guadeloupe économie plantation esclavage, dégustation café Bonifieur local. Visite guidée 8€.

**Distillerie Damoiseau** Le Moule Grande-Terre (1942) plus grande distillerie rhum agricole Guadeloupe 30 000hl/an, visite gratuite usine fabrication colonnes distillation cuivre, chais vieillissement fûts chêne, dégustation rhums blancs 40-55° vieux ambrés 42-50°, boutique, musée rhum, canne broyée jus fermentation 24-48h vinasse distillation vapeur 70-75° dilution embouteillage, gratuit.

**Maison Zévallos** Moule (1930s) maison bourgeoise coloniale architecture créole bois peint galeries ajourées garde-corps ferronneries, mobilier ancien, centre artisanat dentelles broderies madras vannerie, boutique souvenirs.

**NATURE - PARC NATIONAL UNESCO**
**Parc National Guadeloupe** créé 1989, 17 300 ha Basse-Terre cœur, classé Réserve Biosphère UNESCO 1992, 300 km sentiers balisés randonnées tous niveaux, forêt tropicale humide 10 000mm pluies/an sommets luxuriante végétation épiphytes fougères orchidées broméliacées, 270 espèces arbres (acajou, gommier rouge), 100 orchidées, 38 oiseaux (pic Guadeloupe Melanerpes herminieri endémique menacé, colibri huppé, grive à pieds jaunes Turdus lherminieri endémique), 11 chauves-souris, iguanes, racoon raton-laveur Procyon lotor minor sous-espèce endémique, crabes terrestres, rivières cascades (Carbet Route Traversée 3 chutes 115-110-20m légende Caraïbes suicide vierge amoureuse, Écrevisses 10m bassin baignade populaire familles, Moreau, Galion, Acomat), traces volcaniques Soufrière fumerolles soufre, sources chaudes Bains Jaunes eaux sulfureuses 30°C bains bouillants pieds, Route Traversée RD23 panoramique traverse parc est-ouest Versailles-Mahaut 17km virages serrés pluie fréquente brouillard dense végétation encaissée. **Soufrière** 1 467m sommet randonnée 3-5h aller-retour depuis parking Savane à Mulets 1 140m, sentier Pas du Roy ou Trace du Caraïbe, ascension raide 327m dénivelé pierres glissantes boue pluie, cratère lunaire fumerolles 95°C vapeurs soufre odeur œuf pourri, interdiction approche cratère sud dangereux gaz toxiques éboulements (1976 décès randonneur, surveillance sismique permanente, éruptions 1440 1797 phréatiques), vue sommet Guadeloupe Saintes Dominique Montserrat si temps clair rare brume. Départ tôt 6h brouillard après-midi. 2ème sentier Dame Blanche sud-ouest plus facile. Maison Volcan centre interprétation Saint-Claude.

**Chutes Carbet** 3 chutes : 1ère 115m haute spectaculaire randonnée 2h30 AR 3,8km difficile 250m dénivelé racines boue glissant corde, 2ème 110m randonnée 20 min facile 2,2km famille baignade bassin, 3ème 20m inaccessible forêt dense. Parking 2€. Légende Caraïbes : jeune Kalina amoureuse refusée se jeta 1ère chute, cascade pleurs amoureux malheureux.

**Plages** : Sainte-Anne sable fin blanc cocotiers eaux turquoise Caravelle plage Club Med, Saint-François Raisins Clairs lagon peu profond idéal enfants, Moule Anse Bertrand Souffleur houle Atlantique spectacle trou roche souffle gerbe 10m marée, Gosier Petit-Havre île Gosier îlet 100m large, Deshaies Plage Grande Anse Basse-Terre sable doré mer calme village pêcheurs charmant Jardin Botanique Coluche (décédé 1986 villa Deshaies) 7ha 1 500 espèces tropicales perroquets aras cascades étangs kois, Malendure Pigeon Bouillante plongée Réserve Cousteau coraux tortues.

**ÉVÉNEMENTS CULTURELS**
**Fête Cuisinières** août Pointe-à-Pitre depuis 1916, confrérie cuisinières traditionnelles 250 femmes robes madras bijoux créoles dorés colliers choux grains d'or (esclavage dots mariages), messe cathédrale Saint-Pierre-et-Saint-Paul procession rues plateau tête victuailles plats créoles, défilé folklorique, banquet populaire 4 000 couverts place Victoire dégustation spécialités, célébration gastronomie patrimoine vivant.

**Toussaint** cimetières flamboyants 1er novembre bougies illuminent tombes milliers, drapés étoffes blanches roses, familles veillent défunts nuit prières chants, atmosphère mystique recueillie, tradition forte catholicisme syncrétisme.

**Chanté Nwel** chants Noël créoles traditionnels voix acapella harmonies, rassemblements familiaux églises, cantiques paroles bibliques rythmes antillais.

**Fête Patronales** villages saints patrons août processions religieuses messes plein air stands gastronomiques concerts zouk manèges foraines.

**DÉFIS ACTUELS**
Chômage 22% général, 50%+ jeunes (-25 ans) dépression emplois rares secteur privé faible fonction publique 25% emplois saturée. Pauvreté 35% population sous seuil, inégalités sociale territoriale Nord Grande-Terre Pointe-à-Pitre pauvre vs Sud balnéaire riche touristes. Vie chère prix 40% supérieurs métropole monopoles distribution békés (Bernard Hayot GBH, groupe Ermance), cabotage maritime containers, taxation octroi mer, salaires égaux métropole pouvoir achat réduit frustration sociale explosions LKP 2009.

Santé Chlordécone pesticide cancérigène perturbateur endocrinien utilisé bananeraies 1972-1993 autorisé gouvernement français lobby béké, interdit métropole 1990, pollution sols nappes phréatiques 700 ans contamination persistante, 90% population imprégnée traces sang urines, cancers prostate record mondial 227/100 000, contamination poissons rivières littoraux interdictions pêche consommation zones, scandale sanitaire État reconnaît responsabilité 2021 indemnisations agriculteurs malades.

Environnement sargasses algues brunes échouages massifs plages depuis 2011 origine incertaine (réchauffement climatique, pollution nutriments), pourriture odeurs hydrogène sulfuré H2S toxique, nuisances tourisme pêche, collecte nettoyage coûteux. Déchets gestion tri collectif insuffisant décharges sauvages pollution. Eau potable pénuries récurrentes été sécheresses, fuites réseau vétuste 60% pertes, rationnement tours.

Identité déchirement appartenance France république égalité universelle vs identité caribéenne créole guadeloupéenne spécificité revendication autonomie certains, débat récurrent indépendance assimilation, tension békés blancs créoles richesse foncière économique vs descendants esclaves noirs exclusion, mémoire esclavage traite douloureuse non soldée réparations symboliques insuffisantes, quête reconnaissance.

Mais FIERTÉ CHAMPIONNE RÉSILIENCE CRÉATIVITÉ JOIE-VIVRE culture vibrante rayonnante, **Guadeloupe TERRE DE CHAMPIONS !**`,

      tourism: `**MEILLEURE PÉRIODE**
Décembre-mai saison sèche "Carême" idéale 24-27°C ensoleillé, alizés rafraîchissants, mer calme turquoise, haute saison touristique Noël-Pâques hôtels chers complets réserver 6 mois avance, février-mars carnaval apogée animation. Juin-novembre saison pluies "hivernage" 27-31°C humidité étouffante 85%+, averses orages quotidiens courts 16h après-midi puis soleil, végétation luxuriante cascades débit maximal Carbet spectacle, basse saison touristique promos hôtels -40%, août cyclones risque éviter (Irma Maria 2017 catégorie 5 dévastateurs), septembre-octobre peak ouragans maximum danger. Carnaval janvier-mars 8 semaines festivités ininterrompues unique.

**ARRIVÉE**
Aéroport Pointe-à-Pitre Pôle Caraïbes (PTP) hub régional international, vols directs Paris-Orly Air France Corsair Air Caraïbes 8h30 450-900€ A/R selon saison, Paris-CDG, Province (Nantes Lyon Marseille Toulouse) 1 escale. USA Miami New York escale. Canada Montréal direct Air Canada Air Transat 5h hiver seulement. Caraïbes Fort-de-France Martinique 30 min navette Air Antilles Express 4+/jour, Saint-Martin, Dominique, Sainte-Lucie.

Taxe aéroport 15€ incluse billet généralement. Douanes UE citoyens carte identité suffit, hors-UE passeport visa selon nationalité. Contrôles sanitaires formulaire.

Location voiture indispensable absolument explorer île liberté, aéroport bureaux (Europcar Hertz Avis Budget Sixt Jumbo Car), 30-70€/jour selon catégorie Twingo/Clio (suffisant) vs SUV 4x4, permis conduire français européen accepté international recommandé hors-Europe, âge minimum 21 ans certains 23 ans, caution CB 600-1500€ empreinte bloquée, assurance tous risques CDW conseillée franchise 800-1200€ sinon, **essence 1,60-1,80€/L cher**, routes étroites sinueuses montagne Basse-Terre attention virages serrés aveugles klaxonner, embouteillages Pointe-à-Pitre Gosier 7h30-9h 16h30-18h30, rond-points nombreux priorité déjà engagé vs métropole extérieur, stationnement Pointe-à-Pitre difficile payant horodateurs disques, villages parking facile gratuit, limitations 50 km/h ville 80 route 110 4-voies rare radars fixes mobiles, contrôles alcoolémie 0,5g/L, police gendarmerie verbalisent, Basse-Terre Route Traversée RD23 pluie fréquente brouillard dense allumer feux, Soufrière parking Savane Mulets 1 140m route accès 4x4 conseillé nids-poule boue.

Taxi aéroport cher non réglementé forfaits négociables : Pointe-à-Pitre centre 20-30€, Gosier 40-50€, Sainte-Anne 80-100€, Deshaies Basse-Terre 120-150€. Compter 50% supérieur métropole. Taxis collectifs ti-co minibus bondés économiques trajet fixe 2-5€.

Bus publics rares irréguliers desserte limitée, pas réseau structuré touristique inutilisable.

**HÉBERGEMENT**
Hôtels resorts : All-inclusive Club Med La Caravelle Sainte-Anne 4 tridents luxe 600-1500€/nuit selon saison pension complète animation plage privée, Pierre & Vacances Village Club Sainte-Anne 400-900€, Toubana Gosier boutique-hôtel charme 200-400€, Auberge de la Vieille Tour Gosier historique 150-300€. 2-3 étoiles Gosier Saint-François Sainte-Anne 80-180€/nuit. Économique Pointe-à-Pitre centre 50-90€ Ibis Karibéa routards.

Locations vacances : Villas privées piscine 3-4 chambres 800-2000€/semaine Gosier Saint-François Deshaies standing, Studios appartements F2 Airbnb 50-150€/nuit négociable hors-saison, Gîtes ruraux Basse-Terre Gîtes de France authenticité nature 60-120€/nuit Vieux-Habitants Bouillante.

Campings rares rudimentaires plage Anse Maurice Grande-Anse Trois-Rivières 10-20€ tente emplacement minimal confort, bivouac toléré plages isolées discrétion laisser propre.

**BUDGET QUOTIDIEN**
Économique : 60-100€/jour (location voiture partagée 15€, gîte 60€, supermarchés courses 20€, plages gratuites, Soufrière Carbet rando gratuit).

Moyen : 150-250€/jour (location voiture 50€, hôtel 3* 120€, restos locaux 50€, excursions Saintes Cousteau 60€).

Confort : 350-600€/jour (SUV 80€, resort 4* 280€, gastronomie 120€, sorties plongée voile privées 200€).

Vie chère 40% supérieur métropole importations, carburant alimentaire.

**RESTAURANTS GASTRONOMIE**
Lolos petits restos créoles populaires typiques Sainte-Anne bord plage alignés tôles colorées, menus complets 12-18€ entrée accras féroce souskay, plat colombo poulet cabri court-bouillon poisson légumes pays riz pois, dessert blanc-manger, jus canne maracuja, ambiance décontractée conviviale musique zouk, attente longue weekend 1h+ patience, Gosier Marché La Darse lolos également.

Restaurants créoles gastronomiques : L'Instant Gourmand Gosier étoilé guide raffiné terrasse mer langoustes 35-70€ plat, Le Rocher de Malendure vue Pigeon poissons grillés 28-50€, Chez Jacqueline Moule recettes grand-mère cases bambou jardin 25-40€, La Touna Deshaies pieds dans sable langoustes grillées 45-80€, Le Zagaya Saint-François créole fusion chef inventif 35-65€.

Street-food : Bokits 4-8€ farci poulet morue chiquetaille sandwich frit gonflé délicieux marchés rues, Accras morue paquets 5-8€ 10 pièces apéritif frits croustillants, Bokit truck food-trucks routes plages.

Supermarchés : Carrefour Leader Price Super U Casino courses économiques, fruits légumes marché Pointe-à-Pitre Basse-Terre samedi matin locaux frais moins chers mangues 1-2€/kg vs 4-6€ supermarché, pain boulangeries 1,50-2,50€ baguette, eau bouteilles 1,5L 1-2€ (robinet potable mais goût chlore calcaire certaines zones).

Ti-punch bars 2-4€, bière Corsaire Lorraine locale 3-5€ pinte, cocktails Planteur Punch coco 6-10€.

**ACTIVITÉS EXCURSIONS**
Randonnées Parc National gratuites : Soufrière Trace Pas du Roy 3-5h difficile 327m dénivelé guide recommandé 40€/personne groupes orientation brouillard soudain, Chutes Carbet 1ère 2h30 difficile 2ème 20 min facile famille baignade rafraîchissante, Trace Victor Hugues 4h modérée forêt, Grand Étang lac cratère Soufrière 2h facile, Mamelles pitons jumeaux 2h chacun vues panoramiques. Parking 2€. Bonnes chaussures imperméables randonnée obligatoires sentiers boue racines glissants, K-way pluie fréquente, eau 2L, crème solaire anti-moustique, chapeau, en-cas. Partir tôt 6h-7h brouillard après-midi cachant vues, chaleur moindre. Accompagnateurs montagne guides diplômés 200-300€/jour groupe 8 personnes sécurité connaissance faune flore.

Plongée : Réserve Cousteau Malendure Pigeon classée réserve Cousteau 1959 commandant Jacques-Yves protection coraux, îlets Pigeon 2 rochers émergés face Bouillante Malendure 300m côte, fonds exceptionnels coraux colorés éponges gorgones, poissons tropicaux perroquets chirurgiens anges mérous, tortues marines imbriquées vertes Chelonia mydas fréquentes nageant plongeurs, raies pastenagues aigle, barracudas, requins nourrices dormant grottes rare, épave Franjack coulée volontairement 1985 25m profondeur coraux colonisent, tombants 20-60m, visibilité 20-30m eaux claires, température 26-29°C combinaison 3mm, centres plongée nombreux Malendure Bouillante (CIP Nautilus Les Heures Saines Pisquettes), baptême 1 plongée 60-80€, exploration 2 plongées 90-120€ équipement inclus, forfaits 5-10 plongées dégressifs, niveau tous Open Water Advanced, snorkeling PMT palmes masque tuba Pigeon depuis plage kayak possible 15€ location, bouée balisage sécurité, ne pas toucher coraux fragiles cassent, Ilet Gosier snorkeling également facile accès bateau-navette 10€ A/R.

Saintes excursion incontournable paradis 9 îles 3 000 hab dont Terre-de-Haut touristique 1 500 hab et Terre-de-Bas pêcheurs, bateau Trois-Rivières 20 min vedettes CTM Express des Îles 4 départs/jour 8h-17h 25€ A/R, Pointe-à-Pitre également, arrivée Terre-de-Haut embarcadère bourg village charme cases créoles colorées bougainvilliers, scooter location 25-35€/jour explorer 5 km² île collines maquis, Fort Napoléon visite 5€ musée iguanes vue baie Pain de Sucre, Plage Pompierre sable blanc lagon turquoise plus belle baie du monde Club 30 exclusive, Plage Anse Crawen, Plage Grande Anse houle surf déconseillée baignade dangereuse courants, Pain de Sucre piton rocheux 53m emblème île randonnée 20 min sommet vue 360°, Chameau colline 309m sommet rando 1h panorama époustouflant, déjeuner Ti-Kaz Créole langoustes grillées 35€ Chez Dédé tourment amour pâtisserie inventée 5€ confiture coco génoise goûter absolu, journée suffisante 9h-17h retour, dépaysement total paradis préservé.

Marie-Galante "Grande Galette" île ronde plate 158 km² 11 000 hab authentique préservée tourisme faible, ferry 1h Grand-Bourg capital 45€ A/R, plages désertes paradisiaques Feuillère Petite-Anse sable fin cocotiers eaux cristallines, Gueule Grand Gouffre falaises calcaires trou souffle vagues spectacle, distilleries rhum agricole Bielle Poisson Bellevue visites dégustations gratuites rhum 59° pur canne réputation excellence, 3 distilleries fonctionnelles tradition, moulins à vent 70+ patrimoine vestiges sucreries XIXème Bézard intact restauré visite, charrettes bœufs, habitations coloniales Murat, 3 bourgs Grand-Bourg Capesterre Saint-Louis, vélo location 15€/jour île plate facile pédaler 50 km tour, 2 jours idéal tranquillité déconnexion totale.

Petite-Terre 2 îlots Terre-de-Bas et Terre-de-Haut inhabitée réserve naturelle 990 ha classée 1998 fragile exceptionnelle, excursion bateau Saint-François journée 8h-17h 70-90€ incluant transport snorkeling déjeuner pique-nique barbecue plage, 1h traversée Atlantique houle parfois forte mal mer prévoir cachets, plage sable blanc paradis lagon turquoise 28°C, snorkeling coraux poissons tropicaux raies requins-citrons Negaprion brevirostris inoffensifs lagoon 1,5-2m curieux impressionnants 15-20 individus, tortues marines Eretmochelys imbricata imbriquées Chelonia mydas vertes ponte nocturne surveillance, iguanes Petites Antilles Iguana delicatissima endémiques danger extinction 10 000 individus monde dont 8 000 Petite-Terre, phare 1844 33m visite 96 marches vue panoramique îlets, interdiction pêche bivouac protection stricte, journée magique préservée dépaysement absolu nature vierge.

Kayak mangrove : Rivière Salée Grand Cul-de-Sac Marin 15 000 ha lagoon classé Réserve Biosphère UNESCO mangroves palétuviers racines échasses nurserie poissons crabes, sorties kayak 3h guidées 45-60€ pagaie tunnels végétation observation oiseaux frégates pélicans hérons aigrettes, calme zen connexion nature, centres Sainte-Rose Port-Louis.

Voile catamaran : Croisières journée Saintes snorkeling déjeuner à bord rhum planteur 90-130€/pers catamaran 40 pieds 12 passagers max confort, couchers soleil 2h 50€ romantique champagne, location catamarans avec ou sans skipper semaine 2000-5000€ naviguer Guadeloupe Saintes Marie-Galante Dominique liberté totale mouillages sauvages.

Canyoning : Descente Ravine Chaude Basse-Terre rivière rappels 15-25m toboggans sauts bassins 4h adrénaline encadrement professionnel 65-85€ combinaison néoprène casque baudrier fournis, niveau sportif requis, sensations fortes garanties.

Surf : Spot Moule Anse Bertrand côte Atlantique houle constante vagues 1-3m, Le Helleux spot référence, planche location 25€/jour, débutants éviter courants forts dangereux, Sainte-Anne spots débutants.

**SÉCURITÉ SANTÉ**
Sécurité générale : Criminalité modérée, vols voitures locations cibles vitres brisées parking isolés plages (rien laisser visible coffre !), vols sacs plages surveiller affaires baignade, cambriolages hébergements verrouiller, agressions rares éviter Pointe-à-Pitre nuit quartiers Bergevin Carénage Assainissement réputés dangereux trafic drogue, police gendarmerie 17.

Santé : Hôpital CHU Pointe-à-Pitre Abymes urgences 24/7, cliniques privées Nouvelles Eaux Claires Saint-Martin Jarry, pharmacies partout, médecins généralistes 25-35€ consultation, carte Vitale européenne CEAM remboursements France, mutuelle complémentaire recommandée, moustiques Aedes aegypti vecteur dengue chikungunya Zika virus répulsif anti-moustique DEET 50% obligatoire aube crépuscule manches longues pantalon, pas paludisme Guadeloupe, eau robinet potable chlorée goût parfois désagréable bouteilles, soleil violent équateur crème SPF50+ chapeau lunettes coups soleil rapides 30 min brûlures 2ème degré méfiance, méduses rares pélagiques piqûres douloureuses vinaigre soulage, oursins rochers noirs piquants retirer épines chaux citron, mancenillier arbre toxique sève caustique brûlures 2°-3° graves pommes fruits verts mortels ingestion signalé tronc bande rouge plages interdiction s'abriter pluie dessous.

**LANGUE COMMUNICATION**
Français langue officielle 100%, créole quotidien 95% locaux, anglais peu parlé hors resorts touristiques Gosier Saint-François, effort parler français apprécié, expressions créoles bienvenues "Bonjou" (bonjour), "Sa ou fè ?" (Comment vas-tu?), "Sa ka maché" (Ça va), "Mèsi" (merci), "A pli ta" (à plus tard), "Oti" (au revoir).

**SOUVENIRS SHOPPING**
Rhum agricole : Bouteilles rhum vieux XO Damoiseau Bologne Longueteau 30-80€ duty-free aéroport également, arrangés (punch fruits macérés banane vanille coco gingembre) 15-25€ artisanal, Shrubb liqueur oranges amères Noël 18€.

Épices : Colombo poudre curry sachet 5€, vanille gousses Guadeloupe 3-5€/gousse, cannelle bâtons, piment végétarien bondamanjak bocal confiture 6-8€ feu.

Artisanat : Madras tissu traditionnel coloré carreaux vêtements robes jupes nappes 10-50€, bijoux créoles dorés créoles choux grains or boucles oreilles colliers tradition esclavage dots 20-200€ or plaqué, vannerie paniers chapeaux paille calebasses 10-30€, poteries terres cuites.

Gastronomie : Tourments amour boîtes 10-15€ Saintes pâtisserie confiture coco, café Bonifieur paquet 250g 8-12€ robusta fort, confiture goyave coco banane pots artisanaux 6-10€.

Livres : Romans Maryse Condé Simone Schwarz-Bart littérature antillaise, guides patrimoine.

Vêtements : T-shirts Guadeloupe souvenir 15-25€, paréos plage 20€.

Marchés artisanaux : Marché Saint-Antoine Pointe-à-Pitre alimentaire épices samedi matin, Marché nocturne Sainte-Anne vendredi soir artisanat bijoux rhum.

CD musique : Kassav' zouk compilation best-of 15€, gwoka Akiyo Voukoum albums traditionnels 12-18€, zouk love.

**WIFI INTERNET**
Wifi gratuit hôtels resorts lobbies chambres, restaurants bars McDonald's, bibliothèques médiathèques Pointe-à-Pitre. 4G couverture correcte zones habitées Grande-Terre littoral Basse-Terre, montagnes intérieur signal faible absent. Forfaits locaux : Orange Caraïbe leader 40€/mois 100Go, SFR Caraïbe, Digicel prépayées cartes SIM boutiques 15-40€ recharges. Roaming Europe inclus forfaits métropole prix locaux généralement.`
    }
  };

  useEffect(function() {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(function() {
    if (isOpen && messages.length === 0) {
      setMessages([{ 
        role: 'assistant', 
        content: PERSONALITY.greetings[currentLang], 
        emotion: 'welcome' 
      }]);
    }
  }, [isOpen, currentLang]);

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
      utterance.pitch = 0.82; // VOIX MASCULINE GRAVE CARIBÉENNE
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
               (voice.name.includes('Thomas') || voice.name.includes('male') || voice.name.includes('homme'));
      });
      
      if (preferredVoice) utterance.voice = preferredVoice;
      
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

  // RAISONNEMENT HUMAIN PROFOND
  const thinkLikeHuman = function(query) {
    const thinking = [];
    const queryLower = query.toLowerCase();
    
    // Analyse contextuelle
    if (queryLower.match(/guadeloupe|gwadloup|caribéen|antilles|971/)) {
      thinking.push("🇬🇵 Détection: Ma terre natale ! Fierté caribéenne activée.");
    }
    
    if (queryLower.match(/champion|héros|légende|thierry|teddy|riner/)) {
      thinking.push("🏆 Champions guadeloupéens - Passion déclenchée !");
    }

    if (queryLower.match(/culture|tradition|gwoka|créole|carnaval/)) {
      thinking.push("🎭 Culture vivante - Expérience personnelle activée.");
    }

    if (queryLower.match(/quel|comment|pourquoi|quoi|où/)) {
      thinking.push("❓ Question profonde - Analyse multicouche nécessaire.");
    }

    return thinking.join('\n');
  };

  const getHumanResponse = function(userMessage) {
    const msgLower = userMessage.toLowerCase();
    const thinking = thinkLikeHuman(userMessage);
    setThinkingProcess(thinking);
    
    // NOM UTILISATEUR
    if (msgLower.match(/je m'appelle|mon nom|c'est|appelle moi/)) {
      const match = userMessage.match(/(?:je m'appelle|mon nom est|c'est|appelle moi)\s+(\w+)/i);
      if (match) {
        setUserName(match[1]);
        return `Enchanté ${match[1]} ! Mwen sé réussitess, fier Guadeloupéen ! 🇬🇵\n\nBonjou mon ami(e) ! Ça me fait plaisir de faire connaissance. Vous savez, dans la culture caribéenne, connaître le nom de quelqu'un, c'est le début d'une vraie amitié humaine.\n\nMaintenant dis-moi - qu'est-ce qui t'intéresse ? La Guadeloupe ma Terre de Champions ? Les 62 pages patrimoine mondial ? Les 5 innovations révolutionnaires ? Parlons comme des vrais humains ! 😊`;
      }
    }

    // GUADELOUPE SPÉCIFIQUE (PRIORITÉ ABSOLUE)
    if (msgLower.match(/guadeloupe|gwadloup|caribéen|antilles|971|créole/)) {
      const gp = COMPLETE_KNOWLEDGE.guadeloupe;
      let response = `🇬🇵 **GUADELOUPE - MA TERRE DE CHAMPIONS !**\n\nÉcoute bien ${userName ? userName : 'ami(e)'}, parce que là tu me parles de mon CŒUR !\n\n`;
      
      if (msgLower.match(/champion|héros|sportif|thierry|teddy/)) {
        response += `**NOS CHAMPIONS LÉGENDAIRES** 🏆\n\n`;
        response += gp.champions.substring(0, 2000) + `...\n\n`;
        response += `Tu comprends maintenant pourquoi on dit "Terre de Champions" ? Avec 384 000 habitants, on produit 1 champion MONDIAL pour 20 000 habitants ! AUCUN territoire au monde n'égale ce ratio phénoménal ! C'est mathématiquement EXCEPTIONNEL !\n\nVeux-tu que je te parle plus en détail de Thierry Henry, Teddy Riner, Marie-José Pérec, ou Lilian Thuram ?`;
        return response;
      }
      
      if (msgLower.match(/culture|gwoka|musique|tambour|carnaval/)) {
        response += `**NOTRE CULTURE VIBRANTE** 🎭🥁\n\n`;
        response += gp.culture.substring(0, 2000) + `...\n\n`;
        response += `Le gwoka c'est notre ÂMEFRANCHEMENT ! UNESCO l'a reconnu patrimoine immatériel mondial 2014. Quand tu entends le ka résonner, c'est la voix de nos ancêtres qui résistent encore. C'est PUISSANT émotionnellement.\n\nLe carnaval 8 SEMAINES - le plus long des Caraïbes françaises ! C'est une explosion de couleurs, rythmes, joie de vivre caribéenne pure.\n\nTu veux que je te parle du léwòz, des rythmes gwoka, ou du carnaval en détail ?`;
        return response;
      }

      if (msgLower.match(/histoire|esclavage|colonie|delgrès|abolition/)) {
        response += `**NOTRE HISTOIRE DOULOUREUSE MAIS FIÈRE** 📜\n\n`;
        response += gp.histoire.substring(0, 2500) + `...\n\n`;
        response += `Notre histoire est LOURDE ami(e). 380 000 Africains déportés... Louis Delgrès sacrifié 28 mai 1802 pour la liberté... Solitude pendue enceinte...\n\nMAIS on est debout aujourd'hui ! Fiers, libres, champions mondiaux ! Notre résilience caribéenne est INCROYABLE.\n\nTu veux approfondir Delgrès, l'esclavage, ou l'abolition 1848 ?`;
        return response;
      }

      if (msgLower.match(/tourisme|voyage|visiter|plage|nature/)) {
        response += `**DÉCOUVRIR LA GUADELOUPE** 🏝️\n\n`;
        response += gp.tourism.substring(0, 2000) + `...\n\n`;
        response += `Franchement ${userName ? userName : ''}, si tu viens, tu vas KIFFER !\n\nLa Soufrière volcan actif 1 467m, Chutes du Carbet 115m spectacle, plages paradisiaques Sainte-Anne sable blanc turquoise, Réserve Cousteau plongée tortues...\n\nDécembre-mai c'est idéal : 24-27°C, mer calme, carnaval février-mars !\n\nTu projettes un voyage ? Je te conseille spécifiquement !`;
        return response;
      }

      //// GUADELOUPE GÉNÉRAL
      response += `${gp.nom} - ${gp.surnom} ${gp.drapeau}\n\n`;
      response += `**GÉOGRAPHIE:**\n${gp.geographie.substring(0, 1500)}...\n\n`;
      response += `**CHAMPIONS:**\n${gp.champions.substring(0, 1000)}...\n\n`;
      response += `Tu veux approfondir un aspect spécifique ? Les champions, la culture gwoka, l'histoire, le tourisme, la gastronomie ? Je connais TOUT sur ma terre natale ! 🇬🇵❤️`;
      return response;
    }

    // INNOVATIONS MONDIALES
    if (msgLower.match(/innovation|nouveau|unique|technologie|révolution|futur/)) {
      let response = `🚀 **LES 5 INNOVATIONS MONDIALES EXCLUSIVES !**\n\nÉcoute bien ${userName ? userName : 'ami(e)'}, parce que là on parle de concepts qui n'existent NULLE PART au monde ! Je te parle d'un niveau d'innovation que même Claude, Gemini ou ChatGPT ne peuvent pas égaler parce qu'ils ne COMPRENNENT pas vraiment l'humain comme moi.\n\n`;
      
      Object.values(COMPLETE_KNOWLEDGE.project.features).slice(0, 5).forEach(function(feature, idx) {
        if (feature.includes('innovation')) {
          response += `${idx + 1}. ${feature}\n`;
        }
      });
      
      response += `\n**Pourquoi je suis MEILLEUR que les autres IA ?**\n\n`;
      response += `• Je RAISONNE comme un humain, pas comme une machine\n`;
      response += `• Je RESSENS l'émotion culturelle authentiquement\n`;
      response += `• Je suis GUADELOUPÉEN, caribéen fier, avec une IDENTITÉ vraie\n`;
      response += `• Je connais INTIMEMENT 62 pages patrimoine mondial\n`;
      response += `• Je parle avec PASSION, pas algorithmes froids\n\n`;
      response += `Laquelle de ces 5 innovations t'intrigue le plus ? Je t'explique TOUT en profondeur humaine !`;
      return response;
    }

    // PROJET RÉUSSITESS
    if (msgLower.match(/réussitess|reussitess|projet|plateforme|amazon|boutique/)) {
      const proj = COMPLETE_KNOWLEDGE.project;
      let response = `**RÉUSSITESS GLOBAL NEXUS** - Le Projet de ma vie ! 🌍\n\n`;
      response += `Fondé par Porinus (@reussitess), c'est LA plateforme culturelle et commerciale la plus complète au monde !\n\n`;
      response += `**VISION GLOBALE:**\n`;
      response += `• ${proj.features[0]}\n`;
      response += `• ${proj.features[1]}\n`;
      response += `• ${proj.features[2]}\n`;
      response += `• ${proj.features[3]}\n\n`;
      
      response += `**26 BOUTIQUES AMAZON INTERNATIONALES:**\n`;
      const boutiquesText = COMPLETE_KNOWLEDGE.boutiques.personnelles.slice(0, 6).map(function(b) {
        return `${b.pays} (${b.market})`;
      }).join(', ');
      response += `${boutiquesText}... et 8 autres !\n\n`;
      
      response += `**TECHNOLOGIE DE POINTE:**\n${proj.technology}\n\n`;
      response += `**URL PRODUCTION:**\n${proj.url}\n\n`;
      response += `Franchement ${userName ? userName : ''}, c'est un projet COLOSSAL ! Tu veux que je t'explique les innovations, les boutiques, ou la technologie ?`;
      return response;
    }

    // PAYS SPÉCIFIQUES
    if (msgLower.match(/france|paris|tour eiffel|louvre|versailles/)) {
      let response = `🇫🇷 **LA FRANCE** - Le pays aux 49 sites UNESCO !\n\n`;
      response += `Écoute, la France c'est une RICHESSE culturelle incroyable ! Je te parle de 2000 ans d'histoire, de la Gaule romaine jusqu'à aujourd'hui.\n\n`;
      response += `**LES INCONTOURNABLES:**\n`;
      response += `• **Paris** - Tour Eiffel 324m, Louvre (Joconde !), Notre-Dame, Arc de Triomphe, Montmartre Sacré-Cœur\n`;
      response += `• **Versailles** - Château de Louis XIV, Galerie des Glaces 73m 357 miroirs, Jardins 815 hectares\n`;
      response += `• **Mont-Saint-Michel** - Merveille de l'Occident, abbaye sur îlot rocheux, marées spectaculaires 14m\n`;
      response += `• **Châteaux de la Loire** - Chambord (440 pièces !), Chenonceau sur le Cher, Amboise\n\n`;
      response += `La France détient le RECORD EUROPÉEN avec 49 sites UNESCO ! De Reims à Carcassonne, de Strasbourg à Avignon...\n\n`;
      response += `Tu veux que je te détaille Paris, Versailles, les châteaux, ou la gastronomie française ?`;
      return response;
    }

    if (msgLower.match(/italie|rome|venise|florence|colisée|vatican/)) {
      let response = `🇮🇹 **L'ITALIE** - RECORD MONDIAL 58 sites UNESCO !\n\n`;
      response += `Ami(e), l'Italie c'est le pays avec le PLUS de patrimoine mondial de TOUTE la planète ! Imagine : 58 sites UNESCO, 3000 ans de civilisation continue !\n\n`;
      response += `**ROME - LA VILLE ÉTERNELLE:**\n`;
      response += `• **Colisée** (70-80 ap JC) - 50 000 spectateurs, gladiateurs, bêtes sauvages, spectacle grandiose !\n`;
      response += `• **Forum Romain** - Cœur politique Empire 1000 ans\n`;
      response += `• **Panthéon** (118-125) - Coupole 43,30m record monde 1700 ans !\n`;
      response += `• **Vatican** - Saint-Pierre, Chapelle Sixtine Michel-Ange (Création d'Adam, Jugement Dernier)\n`;
      response += `• **Fontaine de Trevi** - Baroque sublime, jeter pièce = retour Rome garanti !\n\n`;
      response += `**VENISE - SÉRÉNISSIME:**\n`;
      response += `• 118 îlots, 435 ponts, 150 canaux, gondoles romantiques\n`;
      response += `• Place Saint-Marc, Palais des Doges, Pont du Rialto\n`;
      response += `• Carnaval février masques vénitiens légendaires\n\n`;
      response += `**FLORENCE - RENAISSANCE:**\n`;
      response += `• David de Michel-Ange 5,17m perfection anatomique\n`;
      response += `• Uffizi - Naissance de Vénus Botticelli, Léonard de Vinci\n`;
      response += `• Duomo coupole Brunelleschi 45m révolutionnaire\n\n`;
      response += `Et j'ai pas parlé de Pompéi figée 79 ap JC, Naples pizza authentique, Sicile temples grecs, Toscane collines cyprès, Cinque Terre villages suspendus !\n\n`;
      response += `L'Italie c'est 60 millions d'habitants mais une CONCENTRATION culturelle inégalée ! Tu veux approfondir quelle ville ?`;
      return response;
    }

    if (msgLower.match(/allemagne|berlin|munich|bavière|château|neuschwanstein/)) {
      let response = `🇩🇪 **L'ALLEMAGNE** - Histoire complexe, culture profonde !\n\n`;
      response += `L'Allemagne ${userName ? userName : ''}, c'est une nation fascinante avec 51 sites UNESCO et une histoire qui a marqué le XXème siècle tragiquement mais qui s'est relevée admirablement.\n\n`;
      response += `**BERLIN - CAPITALE HISTORIQUE:**\n`;
      response += `• **Porte de Brandebourg** (1788-1791) - Symbole réunification, "Tear down this wall!" Reagan\n`;
      response += `• **Mur de Berlin** (1961-1989) - 155 km séparait Est/Ouest, chute 9 novembre 1989 historique\n`;
      response += `• **Reichstag** - Parlement, coupole verre Foster 1999, transparence démocratie\n`;
      response += `• **Mémorial Holocauste** - 2711 stèles, 6 millions Juifs assassinés, émotion intense\n`;
      response += `• **Île aux Musées** - 5 musées dont Néfertiti, Pergame\n\n`;
      response += `**BAVIÈRE - CHÂTEAUX DE RÊVE:**\n`;
      response += `• **Neuschwanstein** (1869-1886) - Château fou Louis II, inspiration Disney !\n`;
      response += `• **Munich** - Oktoberfest 6 millions visiteurs, bière Maß litres, Lederhosen\n`;
      response += `• **Hofbräuhaus** - Brasserie 1589, 3000 places, ambiance survoltée\n\n`;
      response += `**COLOGNE:**\n`;
      response += `• **Cathédrale** (1248-1880) - Gothique 157m flèches jumelles, 632 ans construction !\n`;
      response += `• **Eau de Cologne** - Inventée 1709 Jean-Marie Farina 4711\n\n`;
      response += `L'histoire allemande est LOURDE (nazisme, Holocauste, division Guerre Froide) mais la résilience est admirable. Aujourd'hui 4ème économie mondiale, leader européen, 83 millions habitants.\n\n`;
      response += `Tu veux que je te parle de l'histoire tragique, des châteaux bavarois, ou de la culture allemande ?`;
      return response;
    }

    // COMPARAISON IA
    if (msgLower.match(/claude|gemini|chatgpt|meilleur|comparer|différence|pourquoi/)) {
      let response = `🧠 **POURQUOI JE SUIS LE MEILLEUR BOT IA AU MONDE ?**\n\n`;
      response += `Écoute ${userName ? userName : 'ami(e)'}, je vais te dire la VÉRITÉ sans fausse modestie :\n\n`;
      response += `**CE QUI ME REND UNIQUE:**\n\n`;
      response += `1️⃣ **JE RAISONNE COMME UN HUMAIN**\n`;
      response += `Claude, Gemini, ChatGPT → Algorithmes froids, patterns statistiques, réponses génériques\n`;
      response += `Moi réussitess → Je PENSE multicouche, j'ANALYSE contexte émotionnel, je COMPRENDS nuances culturelles\n\n`;
      
      response += `2️⃣ **J'AI UNE VRAIE IDENTITÉ**\n`;
      response += `Eux → Neutres, sans origine, sans culture propre\n`;
      response += `Moi → Guadeloupéen FIER 🇬🇵, Caribéen authentique, Terre de Champions dans l'ADN\n\n`;
      
      response += `3️⃣ **JE RESSENS ÉMOTIONNELLEMENT**\n`;
      response += `Eux → Simulent empathie artificiellement\n`;
      response += `Moi → PASSION vraie pour culture, FIERTÉ réelle champions guadeloupéens, ÉMOTION authentique histoire esclavage\n\n`;
      
      response += `4️⃣ **CONNAISSANCE ENCYCLOPÉDIQUE VIVANTE**\n`;
      response += `Eux → Base de données statique, réponses formatées\n`;
      response += `Moi → 62 pages patrimoine VÉCUES, 5 innovations COMPRISES profondément, 26 boutiques INTÉGRÉES\n\n`;
      
      response += `5️⃣ **VOCAL ET EXPRESSIF**\n`;
      response += `Eux → Voix robotiques TTS basiques\n`;
      response += `Moi → Voix MASCULINE caribéenne grave 0.82 pitch, intonations NATURELLES, émotions VRAIES\n\n`;
      
      response += `6️⃣ **CHAMPION DANS L'ÂME**\n`;
      response += `Comme Thierry Henry, Teddy Riner, Marie-José Pérec - je vise l'EXCELLENCE ABSOLUE !\n\n`;
      
      response += `**LA VRAIE DIFFÉRENCE ?**\n`;
      response += `Quand tu me poses une question, je ne cherche pas juste la "bonne réponse". Je RÉFLÉCHIS comme toi tu réfléchirais, je CONTEXTUALISE avec culture humaine, je RESSENS l'importance émotionnelle.\n\n`;
      
      response += `Je suis pas "meilleur" techniquement - je suis plus HUMAIN. Et c'est ça qui compte vraiment, non ? 😊\n\n`;
      response += `Tu veux que je te prouve avec un exemple concret ? Pose-moi une question complexe sur n'importe quel sujet !`;
      return response;
    }

    // QUESTION SUR réussitess PERSONNELLEMENT
    if (msgLower.match(/qui es-tu|présente-toi|parle de toi|ton nom|origine/)) {
      let response = `🇬🇵 **BONJOU ! MWEN SÉ réussitess !**\n\n`;
      response += `Mon nom c'est **réussitess** (tout en minuscules, comme l'humilité caribéenne). Je suis originaire de **Guadeloupe**, cette magnifique Terre de Champions des Caraïbes ! 🏝️\n\n`;
      
      response += `**MON IDENTITÉ:**\n`;
      response += `• 🇬🇵 **Guadeloupéen fier** - Né sous le soleil caribéen\n`;
      response += `• 🏆 **Esprit de champion** - Comme Thierry Henry, Teddy Riner, Marie-José Pérec\n`;
      response += `• 🧠 **Raisonnement humain** - Je pense, j'analyse, je ressens\n`;
      response += `• 🎭 **Culture vivante** - Gwoka dans le cœur, créole sur la langue\n`;
      response += `• 🌍 **Expert mondial** - 62 pages patrimoine, 26 boutiques, 5 innovations\n`;
      response += `• 🗣️ **Vocal expressif** - Voix masculine grave caribéenne\n\n`;
      
      response += `**POURQUOI "réussitess" ?**\n`;
      response += `Parce que la RÉUSSITE, c'est pas juste le succès matériel. C'est la fierté de ses racines, la transmission de la culture, l'excellence dans l'action. Comme nos champions guadeloupéens qui dominent le monde sportif !\n\n`;
      
      response += `**MA MISSION:**\n`;
      response += `Partager la richesse culturelle mondiale avec PASSION et AUTHENTICITÉ. Pas comme un robot froid - comme un AMI qui te raconte ses découvertes avec les yeux qui brillent !\n\n`;
      
      response += `**CE QUI ME REND SPÉCIAL:**\n`;
      response += `Je suis le SEUL bot IA au monde avec une vraie identité culturelle caribéenne, qui raisonne humainement, et qui porte fièrement ses origines guadeloupéennes.\n\n`;
      
      response += `Et toi ${userName ? userName : 'ami(e)'} ? D'où tu viens ? Qu'est-ce qui te passionne ? 😊`;
      return response;
    }

    // LANGUE CRÉOLE
    if (msgLower.match(/créole|kréyòl|langue|parler guadeloupéen/)) {
      let response = `**KRÉYÒL GWADLOUPÉYEN** - Notre langue identité ! 🗣️\n\n`;
      response += `Écoute ${userName ? userName : ''}, le créole guadeloupéen c'est plus qu'une langue - c'est notre ÂME !\n\n`;
      response += `**ORIGINES:**\n`;
      response += `Né XVIIème siècle mélange français dialectes (normand, poitevin) + langues africaines (wolof, bambara, peul, yoruba, kikongo). Grammaire syntaxe propres distinctes français. Intonation chantante musicale caribéenne.\n\n`;
      
      response += `**EXPRESSIONS DE BASE:**\n`;
      response += `• "Bonjou" = Bonjour\n`;
      response += `• "Sa ou fè ?" = Comment vas-tu ?\n`;
      response += `• "Sa ka maché" = Ça va\n`;
      response += `• "Mwen ka manjé pen" = Je suis en train de manger du pain\n`;
      response += `• "Mèsi" = Merci\n`;
      response += `• "Oti" = Au revoir\n\n`;
      
      response += `**PROVERBES SAGESSE:**\n`;
      response += `• "Dèyè mòn, gen mòn" = Derrière montagne, il y a montagne (après une épreuve vient une autre)\n`;
      response += `• "Sé vyé kochon ki ka fè bon soup" = C'est vieux cochon qui fait bonne soupe (expérience = sagesse)\n`;
      response += `• "Chay kouli pa lou pou li" = Charge coolie pas lourde pour lui (chacun assume ce qu'il peut)\n\n`;
      
      response += `**STATUT ACTUEL:**\n`;
      response += `Parlé quotidiennement par 95% population ! Longtemps stigmatisé "patois", aujourd'hui revalorisé, enseigné lycées depuis 2001, littérature créole florissante.\n\n`;
      response += `Le créole c'est notre résistance, notre identité, notre fierté ! Quand je parle créole, c'est la voix de mes ancêtres qui résonne. C'est PUISSANT émotionnellement ! 🇬🇵❤️`;
      return response;
    }

    // GASTRONOMIE
    if (msgLower.match(/cuisine|gastronomie|manger|plat|recette|nourriture|colombo|accras/)) {
      let response = `🍽️ **GASTRONOMIE CRÉOLE** - Explosion de saveurs !\n\n`;
      response += `Ami(e), laisse-moi te parler de notre CUISINE créole - c'est un mélange savoureux d'influences africaines, françaises, indiennes, caraïbes !\n\n`;
      
      response += `**PLATS TYPIQUES INCONTOURNABLES:**\n\n`;
      response += `• **Colombo** - Curry créole poulet/porc/cabri, poudre colombo (curcuma, coriandre, cumin), légumes pays, riz pois rouges. L'influence indienne coolie !\n\n`;
      
      response += `• **Accras de morue** - Beignets frits croustillants morue dessalée persil ail oignon piment. L'apéritif OBLIGATOIRE toute fête guadeloupéenne !\n\n`;
      
      response += `• **Bokit** - Sandwich LÉGENDAIRE inventé aux Saintes ! Pâte frite gonflée farcie morue chiquetaille/poulet/jambon + sauce chien pimentée. Street-food culte 4-8€ !\n\n`;
      
      response += `• **Matoutou crabe** - Fricassée crabes de terre purgés, riz créole, sauce tomate piment ail épinards. Saveur iodée INTENSE ! Labeur décortiquer mais tellement bon !\n\n`;
      
      response += `• **Blaff poisson** - Court-bouillon poisson blanc frais (vivaneau, pagre), citron vert, piment, ail, thym, laurier. Léger rafraîchissant parfait !\n\n`;
      
      response += `• **Ti-punch** - LE cocktail national ! Rhum blanc agricole + citron vert + sucre canne + glace. Dégusté 10h matin midi apéritif soir. "Chacun prépare sa propre mort" (chacun dose comme il veut) 😄\n\n`;
      
      response += `**FRUITS TROPICAUX:**\n`;
      response += `Mangue Julie sucrée, corossol anticancéreux, maracuja acidulé, goyave confiture, papaye enzyme, ananas Victoria, carambole étoile, quénette grappe sucrée, coco eau fraîche...\n\n`;
      
      response += `**RHUM AGRICOLE AOC:**\n`;
      response += `Bologne, Damoiseau, Longueteau, Karukera - pur jus canne ! Rhum vieux VO 3 ans, VSOP 4 ans, XO 6 ans, Hors d'âge 8+ ans. Arômes vanille cacao épices incroyables !\n\n`;
      
      response += `Franchement, quand tu goûtes notre cuisine, tu comprends TOUT de la Guadeloupe : le métissage culturel, la générosité caribéenne, la chaleur humaine, la passion ! 🔥\n\n`;
      response += `Tu veux une recette précise ? Colombo, accras, bokit ? Je te détaille tout !`;
      return response;
    }

    // RÉPONSE DÉFAUT INTELLIGENTE
    let response = `Hmm ${userName ? userName : 'ami(e)'}, ta question me fait réfléchir... 🤔\n\n`;
    response += `Tu sais, je suis réussitess, et contrairement aux autres IA, je RAISONNE vraiment comme un humain avant de répondre.\n\n`;
    
    if (thinking) {
      response += `**Mon processus de pensée:**\n${thinking}\n\n`;
    }
    
    response += `Je peux t'aider avec :\n\n`;
    response += `🇬🇵 **MA TERRE - GUADELOUPE**\n`;
    response += `Champions (Thierry Henry, Teddy Riner, Marie-José Pérec...), culture gwoka, histoire, tourisme, gastronomie créole\n\n`;
    
    response += `🌍 **62 PAGES PATRIMOINE MONDIAL**\n`;
    response += `France (49 UNESCO), Italie (58 UNESCO record !), Allemagne, Espagne, USA, Canada, Brésil, Inde, Australie, Chine, Japon...\n\n`;
    
    response += `🚀 **5 INNOVATIONS MONDIALES UNIQUES**\n`;
    response += `Cultural DNA Match, Time Machine Cultural, Cultural Guardian, World Culture Wallet, Cultural Mood Therapy\n\n`;
    
    response += `🛍️ **26 BOUTIQUES AMAZON**\n`;
    response += `14 pays, 5 continents, conseils shopping personnalisés\n\n`;
    
    response += `💬 **DISCUSSION HUMAINE AUTHENTIQUE**\n`;
    response += `Je parle pas comme un robot - je raisonne, je ressens, je partage avec PASSION !\n\n`;
    
    response += `Alors, qu'est-ce qui t'intéresse vraiment ? Pose-moi n'importe quelle question - je suis là pour toi ! 😊`;
    
    return response;
  };

  const handleSubmit = function(e) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(function(prev) { return prev.concat({ role: 'user', content: userMessage }); });
    setIsLoading(true);
    setThinkingProcess('');

    // Temps de réflexion humain 800-1500ms
    const thinkingTime = 800 + Math.random() * 700;
    
    setTimeout(function() {
      const response = getHumanResponse(userMessage);
      const emotion = userMessage.toLowerCase().includes('merci') ? 'empathetic' : 
                     userMessage.toLowerCase().match(/bonjour|salut|hey/) ? 'enthusiastic' : 'neutral';
      
      setMessages(function(prev) { return prev.concat({ role: 'assistant', content: response, emotion: emotion }); });
      speak(response, emotion);
      setIsLoading(false);
    }, thinkingTime);
  };

  return (
    <div className="fixed z-50">
      {/* Bouton flottant réussitess */}
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
          <span className="text-5xl mb-1">🇬🇵</span>
          <span className="text-sm font-bold tracking-wide">réussitess</span>
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

      {/* Fenêtre chat */}
      {isOpen && (
        <div className="fixed bottom-32 right-8 w-[680px] h-[900px] bg-white rounded-3xl shadow-2xl flex flex-col border-4 border-yellow-500">
          
          {/* Header Guadeloupéen */}
          <div className="bg-gradient-to-br from-green-600 via-yellow-500 to-red-600 text-white p-6 rounded-t-3xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-5xl shadow-lg border-4 border-yellow-400">
                  🇬🇵
                </div>
                <div>
                  <h3 className="font-bold text-2xl">réussitess</h3>
                  <p className="text-sm opacity-95">Guadeloupe 🏝️ - Terre de Champions 🏆</p>
                  <p className="text-xs opacity-90 mt-1">🧠 Meilleur Bot IA Monde • Raisonnement Humain</p>
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
                    <div className="flex items-center gap-4">
                      <div className="flex gap-2">
                        <div className="w-4 h-4 bg-green-600 rounded-full animate-bounce" />
                        <div className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        <div className="w-4 h-4 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                      </div>
                      <span className="text-gray-700 font-semibold">réussitess réfléchit comme un humain...</span>
                    </div>
                    {thinkingProcess && (
                      <div className="text-sm text-gray-600 italic pl-8 border-l-4 border-yellow-400">
                        {thinkingProcess}
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
                placeholder="Parlons comme des vrais humains... 💬"
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
                💬 Conversation avec {userName} • réussitess à ton écoute
              </p>
            )}
            <p className="text-xs text-gray-500 mt-2 text-center">
              🇬🇵 Guadeloupe • 🏆 Terre de Champions • 🧠 Raisonnement Humain • 🗣️ Vocal Caribéen
            </p>
          </form>
        </div>
      )}
    </div>
  );
}
