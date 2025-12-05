export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({error: 'POST only'});
  const { message = "", country = "fr" } = req.body;
  
  let response = "🌴 **SuperBot Reussitess® INFLUENCER PRO** 🛒

";
  
  // 🛒 26 BOUTIQUES AMAZON
  if (message.toLowerCase().includes("amazon") || message.toLowerCase().includes("boutique")) {
    response += `**${country.toUpperCase()}** - 26 Boutiques 14 pays :
`;
    response += "🇫🇷FR 🇮🇹IT 🇩🇪DE 🇸🇪SE | 🇸🇬SG 🇦🇺AU 🇪🇸ES 🇧🇷BR
";
    response += "🇬🇧UK 🇮🇳IN 🇨🇦CA 🇧🇪BE 🇳🇱NL 🇺🇸US

";
    response += "**FBA Pan-EU**: 1 stock Allemagne → 9 pays Europe
";
    response += "**Règles Amazon**: Lien affilié transparent | Paiement Amazon 100%
";
  }
  
  // 🏝️ DOM-TOM
  else if (message.toLowerCase().includes("dom") || message.toLowerCase().includes("guadeloupe")) {
    response += "**DOM-TOM Amazon** depuis Gwada :
";
    response += "✅ **GUADELOUPE**: Amazon.fr → Prime 2-4j
";
    response += "✅ **MARTINIQUE**: FBA Basse-Terre stock local
";
    response += "✅ **GUYANE**: FBA Cayenne réduction transport
";
    response += "✅ **RÉUNION**: Prime 3j Océan Indien

";
    response += "**Réduction 10% FBA DOM 2025** !";
  }
  
  // 🎯 Quiz
  else if (message.toLowerCase().includes("quiz")) {
    const quizzes = [
      "FBA Pan-EU = ? A) 1 stock 9 pays",
      "Amazon commission = ? A) 4-12%",
      "Gwada livraison = ? A) Prime 2-4j"
    ];
    response += "🎯 **QUIZZ INFLUENCER**:
" + quizzes[Math.floor(Math.random() * quizzes.length)];
  }
  
  // 🙋‍♂️ Accueil
  else {
    response += "**Choisis**:
• 'amazon de' → Allemagne FBA
• 'dom guadeloupe' → DOM-TOM
• 'quiz' → Test vendeur

";
    response += "🔒 **SÉCURITÉ**: Tous liens → Amazon officiel
Paiement Amazon SEUL !";
  }
  
  response += "

**réussitess971 excellence innovation Succès Positivité à l'infini Boudoume 🛒🔒🏝️✨**";
  res.json({ message: response });
}
