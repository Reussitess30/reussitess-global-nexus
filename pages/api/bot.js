export default function handler(req, res) {
  const { message = "", session = {}, context = "general" } = req.body || {};
  console.log("🧠 SuperBot analyse:", message);
  const analysis = analyzeHumanMessage(message.toLowerCase().trim(), session);
  let response = generateHumanResponse(analysis, session);
  const newSession = { ...session, lastTopic: analysis.topic, mood: analysis.sentiment };
  res.status(200).json({ 
    message: response,
    analysis: analysis.topic,
    session: newSession,
    signature: "réussitess971 excellence innovation Succès Positivité à l'infini Boudoume 🌴✨",
    human: true,
    capabilities: ["26 boutiques", "25 quizz", "culture mondyal", "bibliotèk gratis"]
  });
}

function analyzeHumanMessage(msg, session) {
  const words = msg.split(/s+/);
  return {
    topic: detectTopic(words),
    sentiment: detectSentiment(msg),
    intent: detectIntent(words),
    keywords: extractKeywords(words),
    urgency: msg.includes("!") || msg.includes("?") ? "high" : "normal"
  };
}

function detectTopic(words) {
  if (words.some(w => ["quiz", "question", "test", "savoir"].includes(w))) return "quiz";
  if (words.some(w => ["boutique", "amazon", "achat", "shop"].includes(w))) return "boutiques";
  if (words.some(w => ["culture", "antille", "afrique", "créole"].includes(w))) return "culture";
  if (words.some(w => ["biblio", "livre", "lire"].includes(w))) return "bibliotheque";
  return session.lastTopic || "general";
}

function generateHumanResponse(analysis, session) {
  const moods = { positive: "😊 Mwen kontan !", neutral: "💭 Mwen réfléchis...", negative: "😇 Pa enkyete !" };
  switch(analysis.topic) {
    case "quiz": return launchAdvancedQuiz(session);
    case "boutiques": return present26Boutiques();
    case "culture": return cultureMondialeResponse();
    case "bibliotheque": return bibliothequeMondialeGratuite();
    default: return welcomeSuperBot(session, moods.neutral);
  }
}

function present26Boutiques() {
  return `🌍 **26 BOUTIQUES AMAZON** réussitess971 - 14 PEYI 5 KONTINAN !
🇫🇷FR 🇮🇹IT 🇩🇪DE 🇸🇪SE | 🇸🇬SG 🇦🇺AU 🇪🇸ES 🇧🇷BR | 🇬🇧UK 🇮🇳IN 🇨🇦CA 🇧🇪BE 🇳🇱NL 🇺🇸US
**Influenceur → Lien → Achat → Commission 4-12%** ! Ki peyi ou bezwen ? 💰`;
}

function launchAdvancedQuiz(session) {
  const quizzes = [
    { q: "Ki bann Zouk ?", a: "Kassav'", c: "🎶" },
    { q: "Afrobeats = ?", a: "Nigeria", c: "🇳🇬" },
    { q: "Amazon % = ?", a: "4-12%", c: "💰" }
  ];
  const quiz = quizzes[Math.floor(Math.random() * quizzes.length)];
  session.currentQuiz = quiz;
  return `🎯 QUIZZ: ${quiz.q}
A) ${quiz.a} B) Fòs C) Pa sa
**Di repons !** ${quiz.c}`;
}

function bibliothequeMondialeGratuite() {
  return `📚 **BIBLIYOTÈK GRATIS** : Wikipédia + Open Library
**Komann** : "biblio zouk" → Liv gratis ! 📖`;
}

function welcomeSuperBot(session, mood) {
  return `${mood} **Bonjour** ! 🌞 réussitess971 Guadeloupéen 26 boutik Amazon !
💼 "amazon" | 🌍 "culture" | 🎯 "quiz" | 📚 "biblio"
**Ki sa ou bezwen ?** 😎

réussitess971 excellence innovation Succès Positivité à l'infini Boudoume 🌴✨`;
}

function detectSentiment(msg) { return msg.includes("merci") ? "positive" : "neutral"; }
function detectIntent(words) { return "info"; }
function extractKeywords(words) { return words.slice(0,3); }
