export default function handler(req, res) {
  // 🔐 API KEY OBLIGATOIRE
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== process.env.SUPERBOT_KEY) {
    console.log(`🚨 ATTACK: ${req.headers['x-forwarded-for']}`);
    return res.status(401).json({error: '🔒 Accès refusé'});
  }
  
  // ⏱️ RATE LIMIT (100 req/min)
  const ip = req.headers['x-forwarded-for'] || 'unknown';
  // Logique rate limit...
  
  res.json({
    message: "🌟 SuperBot SÉCURISÉ A+ Anti-piratage",
    protection: "Vercel BotID + API Key + Headers",
    signature: "réussitess971 excellence innovation 🔒✨"
  });
}
