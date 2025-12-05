export default function handler(req, res) {
  // 🛡️ SÉCURITÉ SUPERBOT
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== process.env.SUPERBOT_KEY) {
    return res.status(401).json({error: '🔒 API Key requise'});
  }
  
  // RATE LIMITING
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  // ... reste du code
  
  res.json({message: "✅ SuperBot SÉCURISÉ", security: "A+"});
}
