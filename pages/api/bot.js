import { SUPERBOT_DATABASE } from '../lib/superbot-data.js';
import { GEO_SURVIE } from '../lib/geo-survie.js';

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({error: 'POST only'});
  
  const { message = "", country = "auto", session = {} } = req.body;
  
  // 🌍 **INVENTION GEO-SURVIE®** - Brevetable international
  const geoSurvie = detectGeoSurvie(country);
  const response = superbotGeoSurvieThink(message.toLowerCase().trim(), geoSurvie, session);
  
  res.json({ 
    message: response,
    geoSurvie: geoSurvie.besoin,
    invention: "GEO-SURVIE® réussitess971 - 14 pays",
    signature: "réussitess971 excellence innovation Succès Positivité à l'infini Boudoume 🌍✨"
  });
}

function detectGeoSurvie(country) {
  // IA détecte pays → Besoin #1 local + Produit Amazon Reussitess®
  const data = GEO_SURVIE[country] || GEO_SURVIE.guadeloupe; // Default Gwada
  return {
    pays: country.toUpperCase(),
    besoin: data.besoin,
    produit: data.produit,
    amazon: `https://amazon.${country}.dp/${data.amazon}`
  };
}

function superbotGeoSurvieThink(msg, geo, session) {
  // 🌟 GEO-SURVIE® ACTIVÉ - Universel 14 pays
  const prefix = `🌍 **GEO-SURVIE® ${geo.pays}** : ${geo.besoin} → ${geo.produit}
🔗 ${geo.amazon}`;
  
  if (msg.includes("quiz")) {
    const quiz = SUPERBOT_DATABASE.quizz[Math.floor(Math.random() * SUPERBOT_DATABASE.quizz.length)];
    return `${prefix}

🎯 QUIZZ: ${quiz.q}
A) ${quiz.a} → **${quiz.c}**`;
  }
  
  if (msg.includes("amazon") || msg.includes("boutique")) {
    return `${prefix}

🛒 **26 BOUTIQUES** : ${Object.keys(SUPERBOT_DATABASE.boutiques.europe).length} Europe + 10 mondial !`;
  }
  
  return `${prefix}

🌞 **Bonjour ${geo.pays}** ! SuperBot Reussitess® adapte pou ou lokalman ! Di "quiz", "amazon", "culture" 😎`;
}
