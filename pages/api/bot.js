export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({error: 'POST only'});
  const { message = "" } = req.body;
  let response = "🌴 **SuperBot Reussitess®** Guadeloupéen !

";
  
  if (message.toLowerCase().includes("amazon") || message.toLowerCase().includes("boutique")) {
    response += "🛒 **26 BOUTIQUES** FR🇫🇷 DE🇩🇪 US🇺🇸 BR🇧🇷 14 pays 5 continents !
";
  } else if (message.toLowerCase().includes("quiz")) {
    const quizzes = ["Ki bann Zouk? A) Kassav'", "Afrobeats = Nigeria🇳🇬", "Gwoka = Guadeloupe🥁"];
    response += "🎯 **QUIZZ**: " + quizzes[Math.floor(Math.random() * quizzes.length)] + "
";
  } else if (message.toLowerCase().includes("bonjour") || message.toLowerCase().includes("salut")) {
    response += "😊 Bonjour mon frère ! Ki sa ou bezwen ? Di 'amazon', 'quiz', 'culture' !
";
  } else {
    response += "🌍 GUADELOUPE = NOMBRIL DU MONDE® ! Di 'amazon' 🛒 | 'quiz' 🎯 | 'culture' 🌴
";
  }
  
  response += "
**réussitess971 excellence innovation Succès Positivité à l'infini Boudoume 🌴✨**";
  res.json({ message: response });
}
