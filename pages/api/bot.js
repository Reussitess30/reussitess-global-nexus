export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({error: 'POST only'});
  const { message = "", country = "fr" } = req.body;
  
  // 🔥 LES 3 OPTIONS SIMULTANÉES
  const response = superBotTripleOption(message.toLowerCase().trim(), country);
  
  res.json({
    message: response.message,
    option1: response.influenceur,
    option2: response.gwada,
    option3: response.complete,
    signature: "réussitess971 excellence innovation Succès Positivité à l'infini Boudoume 🌍🛒🌴✨"
  });
}

function superBotTripleOption(msg, country) {
  let response = "🌟 **SUPERBOT 3 OPTIONS** 🌟

";
  
  // OPTION 1: INFLUENCER AMAZON PRO
  if (msg.includes("amazon") || msg.includes("boutique") || msg.includes("vente")) {
    response += "🛒 **OPTION 1 - 26 BOUTIQUES**
";
    response += `🇫🇷FR 🇩🇪DE 🇺🇸US → FBA Pan-EU 1 stock 9 pays
`;
    response += "🔒 PAIEMENT Amazon | Lien affilié transparent

";
  }
  
  // OPTION 2: GUADELOUPE NOMBRIL DU MONDE
  if (msg.includes("culture") || msg.includes("gwada") || msg.includes("guadeloupe")) {
    response += "🌴 **OPTION 2 - GWAda HUB**
";
    response += "Zouk Kassav' | Gwoka Gwo Ka | Bois Bandé
";
    response += "GUADELOUPE = NOMBRIL DU MONDE® 14 pays !

";
  }
  
  // OPTION 3: A→Z COMPLET
  if (msg.includes("quiz") || msg.includes("test")) {
    const quizzes = ["Zouk = Kassav'", "FBA Pan-EU = 9 pays", "Gwada Prime = 2-4j"];
    response += "🎯 **OPTION 3 - QUIZZ**
";
    response += quizzes[Math.floor(Math.random() * quizzes.length)] + "

";
  }
  
  // ACCUEIL 3 OPTIONS
  if (!msg || msg === "bonjour") {
    response += "**CHOISISSEZ** :
";
    response += "• 'amazon' → 26 Boutiques FBA
";
    response += "• 'culture' → Gwada Zouk Afrobeats
";
    response += "• 'quiz' → Test connaissances

";
  }
  
  response += "🔒 **SÉCURITÉ A+** | 💰 **Revenus Amazon** | 🌍 **14 Pays**";
  return { message: response, influenceur: true, gwada: true, complete: true };
}
