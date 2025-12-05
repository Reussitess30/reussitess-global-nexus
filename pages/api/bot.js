import { SUPERBOT_DATABASE } from '../lib/superbot-data.js';
import { WORLD_HUB } from '../lib/world-hub.js';

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({error: 'POST only'});
  
  const { message = "", lang = "fr" } = req.body;
  const response = worldBotThink(message.toLowerCase().trim(), lang);
  
  res.json({ 
    message: response,
    gwadaHub: "GUADELOUPE = NOMBRIL DU MONDE®",
    signature: "réussitess971 excellence innovation Succès Positivité à l'infini Boudoume 🌍🌴✨"
  });
}

function worldBotThink(msg, lang) {
  const gwadaMsg = WORLD_HUB.gwadaCentral.message;
  
  if (msg.includes("quiz")) {
    const quiz = SUPERBOT_DATABASE.quizz[Math.floor(Math.random() * SUPERBOT_DATABASE.quizz.length)];
    return `${WORLD_HUB.langues[lang] || "Bonjour Gwada !"} 🌴

${gwadaMsg}

🎯 QUIZZ: ${quiz.q}
A) ${quiz.a} → ${quiz.c}`;
  }
  
  if (msg.includes("amazon") || msg.includes("boutique")) {
    return `${WORLD_HUB.langues[lang] || "Bonjour Gwada !"} 🌴

${gwadaMsg}

🌍 **26 BOUTIQUES** depuis GUADELOUPE → Monde !`;
  }
  
  return `${WORLD_HUB.langues[lang] || "Bonjour Gwada !"} 🌴

${gwadaMsg}

**Di "quiz" 🎯 | "amazon" 🛒 | "culture" 🌍** 😎`;
}
