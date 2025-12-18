export const genererPlanAction = (objectif, duree = 7) => {
  const plans = {
    carriere: {
      7: [
        {
          jour: 1,
          titre: "Audit de compétences",
          description:
            "Listez vos compétences actuelles et identifiez celles à développer",
        },
        {
          jour: 2,
          titre: "Objectifs SMART",
          description:
            "Définissez 3 objectifs professionnels clairs et mesurables",
        },
        {
          jour: 3,
          titre: "CV & LinkedIn",
          description:
            "Mettez à jour votre CV et optimisez votre profil LinkedIn",
        },
        {
          jour: 4,
          titre: "Réseau professionnel",
          description: "Contactez 5 personnes de votre réseau ou secteur cible",
        },
        {
          jour: 5,
          titre: "Formation continue",
          description: "Identifiez une formation ou certification pertinente",
        },
        {
          jour: 6,
          titre: "Projet personnel",
          description: "Lancez un mini-projet pour démontrer vos compétences",
        },
        {
          jour: 7,
          titre: "Plan d'action 30 jours",
          description: "Créez votre roadmap détaillée pour le mois à venir",
        },
      ],
    },
    business: {
      7: [
        {
          jour: 1,
          titre: "Idée & Validation",
          description: "Définissez votre concept et validez le besoin marché",
        },
        {
          jour: 2,
          titre: "Business Model",
          description: "Créez votre business model canvas simplifié",
        },
        {
          jour: 3,
          titre: "Cible & Persona",
          description: "Identifiez précisément votre client idéal",
        },
        {
          jour: 4,
          titre: "MVP",
          description: "Définissez votre produit minimum viable",
        },
        {
          jour: 5,
          titre: "Stratégie Marketing",
          description: "Planifiez vos premiers canaux d'acquisition",
        },
        {
          jour: 6,
          titre: "Identité de marque",
          description: "Créez nom, logo et positionnement",
        },
        {
          jour: 7,
          titre: "Lancement",
          description: "Préparez votre plan de lancement sur 30 jours",
        },
      ],
    },
    etudes: {
      7: [
        {
          jour: 1,
          titre: "Organisation",
          description: "Créez votre planning d'études optimisé",
        },
        {
          jour: 2,
          titre: "Méthode",
          description: "Adoptez une technique d'apprentissage efficace",
        },
        {
          jour: 3,
          titre: "Synthèses",
          description: "Créez des fiches de révision visuelles",
        },
        {
          jour: 4,
          titre: "Pratique active",
          description: "Faites des exercices et tests blancs",
        },
        {
          jour: 5,
          titre: "Groupe d'étude",
          description: "Organisez une session de travail collaboratif",
        },
        {
          jour: 6,
          titre: "Ressources",
          description: "Identifiez livres, vidéos et outils complémentaires",
        },
        {
          jour: 7,
          titre: "Bilan",
          description: "Évaluez vos progrès et ajustez votre méthode",
        },
      ],
    },
    sante: {
      7: [
        {
          jour: 1,
          titre: "Bilan santé",
          description: "Évaluez votre condition physique actuelle",
        },
        {
          jour: 2,
          titre: "Objectifs santé",
          description: "Fixez 3 objectifs mesurables",
        },
        {
          jour: 3,
          titre: "Nutrition",
          description: "Planifiez des repas équilibrés pour la semaine",
        },
        {
          jour: 4,
          titre: "Activité physique",
          description: "Démarrez une routine d'exercices (20 min/jour)",
        },
        {
          jour: 5,
          titre: "Hydratation",
          description: "Buvez 2L d'eau par jour, suivez votre consommation",
        },
        {
          jour: 6,
          titre: "Sommeil",
          description: "Établissez une routine de sommeil régulière",
        },
        {
          jour: 7,
          titre: "Mindfulness",
          description: "Pratiquez 10 min de méditation ou respiration",
        },
      ],
    },
    creativite: {
      7: [
        {
          jour: 1,
          titre: "Inspiration",
          description: "Créez un mood board de vos influences créatives",
        },
        {
          jour: 2,
          titre: "Pratique quotidienne",
          description: "Engagez-vous à créer quelque chose chaque jour",
        },
        {
          jour: 3,
          titre: "Nouvelle technique",
          description: "Apprenez un nouvel outil ou méthode créative",
        },
        {
          jour: 4,
          titre: "Sortie de zone",
          description: "Essayez un medium différent de votre habitude",
        },
        {
          jour: 5,
          titre: "Feedback",
          description: "Partagez votre travail et récoltez des retours",
        },
        {
          jour: 6,
          titre: "Collaboration",
          description: "Trouvez un partenaire créatif pour un projet",
        },
        {
          jour: 7,
          titre: "Portfolio",
          description: "Commencez à documenter votre processus créatif",
        },
      ],
    },
    finance: {
      7: [
        {
          jour: 1,
          titre: "Bilan financier",
          description: "Calculez votre patrimoine net actuel",
        },
        {
          jour: 2,
          titre: "Budget mensuel",
          description: "Créez un budget détaillé revenus/dépenses",
        },
        {
          jour: 3,
          titre: "Dettes",
          description: "Listez vos dettes et priorisez leur remboursement",
        },
        {
          jour: 4,
          titre: "Épargne",
          description: "Ouvrez un compte épargne et automatisez 10% de revenus",
        },
        {
          jour: 5,
          titre: "Revenus passifs",
          description: "Identifiez 3 sources de revenus passifs possibles",
        },
        {
          jour: 6,
          titre: "Formation finance",
          description: "Apprenez les bases de l'investissement",
        },
        {
          jour: 7,
          titre: "Plan 12 mois",
          description: "Créez votre stratégie financière annuelle",
        },
      ],
    },
    leadership: {
      7: [
        {
          jour: 1,
          titre: "Auto-évaluation",
          description: "Identifiez vos forces et axes d'amélioration",
        },
        {
          jour: 2,
          titre: "Vision",
          description: "Définissez votre vision de leadership",
        },
        {
          jour: 3,
          titre: "Communication",
          description: "Pratiquez l'écoute active et le feedback constructif",
        },
        {
          jour: 4,
          titre: "Inspiration",
          description: "Étudiez 3 leaders que vous admirez",
        },
        {
          jour: 5,
          titre: "Initiative",
          description: "Prenez une responsabilité dans un projet",
        },
        {
          jour: 6,
          titre: "Mentorat",
          description: "Trouvez un mentor ou mentorez quelqu'un",
        },
        {
          jour: 7,
          titre: "Impact",
          description:
            "Planifiez une action à impact positif pour votre équipe",
        },
      ],
    },
    innovation: {
      7: [
        {
          jour: 1,
          titre: "Veille",
          description: "Identifiez 5 tendances dans votre secteur",
        },
        {
          jour: 2,
          titre: "Problèmes",
          description: "Listez 10 problèmes non résolus autour de vous",
        },
        {
          jour: 3,
          titre: "Idéation",
          description: "Générez 20 idées de solutions (brainstorming)",
        },
        {
          jour: 4,
          titre: "Prototype",
          description: "Créez un prototype rapide de votre meilleure idée",
        },
        {
          jour: 5,
          titre: "Test",
          description: "Testez votre prototype avec 5 personnes",
        },
        {
          jour: 6,
          titre: "Itération",
          description: "Améliorez basé sur les retours",
        },
        {
          jour: 7,
          titre: "Pitch",
          description: "Préparez une présentation de 3 minutes",
        },
      ],
    },
  };

  return plans[objectif]?.[duree] || plans.business[duree];
};

export const genererRessources = (objectif) => {
  const ressources = {
    carriere: [
      {
        titre: "LinkedIn Learning",
        lien: "https://www.linkedin.com/learning/",
        type: "Formation",
      },
      {
        titre: "Glassdoor",
        lien: "https://www.glassdoor.com/",
        type: "Recherche",
      },
      { boutique: "Livres développement professionnel", pays: "FR" },
    ],
    business: [
      {
        titre: "Y Combinator Startup School",
        lien: "https://www.startupschool.org/",
        type: "Formation",
      },
      {
        titre: "Business Model Canvas",
        lien: "https://www.strategyzer.com/",
        type: "Outil",
      },
      { boutique: "Livres entrepreneuriat", pays: "FR" },
    ],
    etudes: [
      {
        titre: "Khan Academy",
        lien: "https://www.khanacademy.org/",
        type: "Cours",
      },
      {
        titre: "Coursera",
        lien: "https://www.coursera.org/",
        type: "Formation",
      },
    ],
    sante: [
      {
        titre: "MyFitnessPal",
        lien: "https://www.myfitnesspal.com/",
        type: "Application",
      },
      {
        titre: "Headspace",
        lien: "https://www.headspace.com/",
        type: "Méditation",
      },
    ],
    creativite: [
      {
        titre: "Skillshare",
        lien: "https://www.skillshare.com/",
        type: "Formation",
      },
      {
        titre: "Behance",
        lien: "https://www.behance.net/",
        type: "Inspiration",
      },
    ],
    finance: [
      {
        titre: "Investopedia",
        lien: "https://www.investopedia.com/",
        type: "Éducation",
      },
      { titre: "YNAB", lien: "https://www.ynab.com/", type: "Budget" },
    ],
    leadership: [
      {
        titre: "TED Talks Leadership",
        lien: "https://www.ted.com/topics/leadership",
        type: "Inspiration",
      },
      {
        titre: "Harvard Business Review",
        lien: "https://hbr.org/",
        type: "Articles",
      },
    ],
    innovation: [
      {
        titre: "MIT OpenCourseWare",
        lien: "https://ocw.mit.edu/",
        type: "Cours",
      },
      {
        titre: "Product Hunt",
        lien: "https://www.producthunt.com/",
        type: "Veille",
      },
    ],
  };

  return ressources[objectif] || ressources.business;
};
