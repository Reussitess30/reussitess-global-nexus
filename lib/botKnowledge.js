// FONCTIONS AVANCÉES DU BOT

export const BOT_ADVANCED_FUNCTIONS = {
  // Analyse de sentiment
  analyzeSentiment: (text) => {
    const positive = [
      "merci",
      "super",
      "génial",
      "excellent",
      "parfait",
      "bravo",
      "top",
      "wow",
      "incroyable",
    ];
    const negative = [
      "problème",
      "erreur",
      "bug",
      "nul",
      "mauvais",
      "déçu",
      "difficile",
    ];

    const lowerText = text.toLowerCase();

    const positiveCount = positive.filter((word) =>
      lowerText.includes(word),
    ).length;
    const negativeCount = negative.filter((word) =>
      lowerText.includes(word),
    ).length;

    if (positiveCount > negativeCount) return "positive";
    if (negativeCount > positiveCount) return "negative";
    return "neutral";
  },

  // Détection de langue
  detectLanguage: (text) => {
    const patterns = {
      fr: /bonjour|merci|comment|pourquoi|ça|être|avoir/i,
      en: /hello|thank|how|why|what|is|are/i,
      es: /hola|gracias|como|por|que|es/i,
      de: /hallo|danke|wie|warum|ist/i,
    };

    for (const [lang, pattern] of Object.entries(patterns)) {
      if (pattern.test(text)) return lang;
    }
    return "fr"; // Par défaut
  },

  // Extraction d'entités (pays, objectifs, etc.)
  extractEntities: (text) => {
    const entities = {
      pays: [],
      objectifs: [],
      themes: [],
    };

    const lowerText = text.toLowerCase();

    // Pays
    const paysKeywords = [
      "france",
      "guadeloupe",
      "martinique",
      "canada",
      "usa",
      "allemagne",
      "espagne",
      "italie",
    ];
    entities.pays = paysKeywords.filter((p) => lowerText.includes(p));

    // Objectifs
    const objectifsKeywords = [
      "carrière",
      "business",
      "études",
      "santé",
      "créativité",
      "finance",
      "leadership",
      "innovation",
    ];
    entities.objectifs = objectifsKeywords.filter((o) => lowerText.includes(o));

    // Thèmes
    const themesKeywords = [
      "quiz",
      "passeport",
      "visa",
      "boutique",
      "bourse",
      "emploi",
      "formation",
    ];
    entities.themes = themesKeywords.filter((t) => lowerText.includes(t));

    return entities;
  },

  // Génération de réponse personnalisée
  generatePersonalizedResponse: (query, userContext = {}) => {
    const sentiment = BOT_ADVANCED_FUNCTIONS.analyzeSentiment(query);
    const entities = BOT_ADVANCED_FUNCTIONS.extractEntities(query);

    let response = "";
    let emoji = "💬";

    // Adapter selon le sentiment
    if (sentiment === "positive") {
      response = "🎉 Je suis ravi de votre enthousiasme ! ";
      emoji = "😊";
    } else if (sentiment === "negative") {
      response =
        "💪 Je comprends votre préoccupation. Laissez-moi vous aider ! ";
      emoji = "🤝";
    }

    // Adapter selon les entités détectées
    if (entities.themes.includes("quiz")) {
      response += "Nos 25 quiz sont parfaits pour tester vos connaissances. ";
    }
    if (entities.themes.includes("passeport")) {
      response +=
        "Le Passeport de Réussite vous attend pour officialiser votre engagement ! ";
    }
    if (entities.themes.includes("visa")) {
      response +=
        "Le VISA Universel ouvre les portes à des milliers d'opportunités mondiales ! ";
    }

    // Pays mentionné
    if (entities.pays.length > 0) {
      response += `\n\nVous êtes intéressé par ${entities.pays.join(", ")} ? Excellent choix ! `;
    }

    return {
      text: response || "Comment puis-je vous aider davantage ?",
      emoji: emoji,
      entities: entities,
      sentiment: sentiment,
    };
  },

  // Suggestions contextuelles intelligentes
  getSmartSuggestions: (query, conversationHistory = []) => {
    const entities = BOT_ADVANCED_FUNCTIONS.extractEntities(query);
    const suggestions = [];

    if (entities.themes.includes("quiz")) {
      suggestions.push(
        "Voir tous les quiz",
        "Commencer un quiz",
        "Mes catégories préférées",
      );
    } else if (entities.themes.includes("passeport")) {
      suggestions.push(
        "Créer mon passeport",
        "Voir des exemples",
        "Partager mon passeport",
      );
    } else if (entities.themes.includes("visa")) {
      suggestions.push(
        "Obtenir mon VISA",
        "Voir les opportunités",
        "Bourses disponibles",
      );
    } else if (entities.themes.includes("boutique")) {
      suggestions.push(
        "Voir les boutiques",
        "Produits recommandés",
        "Boutiques par pays",
      );
    } else {
      suggestions.push(
        "Découvrir les quiz",
        "Passeport de Réussite",
        "VISA Universel",
        "Boutiques Amazon",
      );
    }

    return suggestions.slice(0, 4);
  },

  // Historique de conversation
  saveConversation: (message, type) => {
    if (typeof window === "undefined") return;

    const history = JSON.parse(
      localStorage.getItem("bot_conversation_history") || "[]",
    );
    history.push({
      message,
      type,
      timestamp: new Date().toISOString(),
    });

    // Garder seulement les 50 derniers messages
    if (history.length > 50) {
      history.shift();
    }

    localStorage.setItem("bot_conversation_history", JSON.stringify(history));
  },

  getConversationHistory: () => {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem("bot_conversation_history") || "[]");
  },

  // Recherche rapide dans la base de connaissances
  quickSearch: (query) => {
    const results = [];
    const knowledge = REUSSITESS_KNOWLEDGE;
    const lowerQuery = query.toLowerCase();

    // Recherche dans les fonctionnalités
    for (const [key, value] of Object.entries(knowledge.fonctionnalites)) {
      if (
        value.description.toLowerCase().includes(lowerQuery) ||
        key.toLowerCase().includes(lowerQuery)
      ) {
        results.push({
          type: "fonctionnalite",
          titre: key,
          description: value.description,
          url: value.url,
        });
      }
    }

    // Recherche dans les mots-clés
    for (const [keyword, response] of Object.entries(knowledge.keywords)) {
      if (
        keyword.includes(lowerQuery) ||
        response.toLowerCase().includes(lowerQuery)
      ) {
        results.push({
          type: "keyword",
          titre: keyword,
          reponse: response.substring(0, 100) + "...",
        });
      }
    }

    return results.slice(0, 5);
  },
};

// Export des fonctions avancées
export default {
  ...REUSSITESS_KNOWLEDGE,
  ...BOT_ADVANCED_FUNCTIONS,
};
