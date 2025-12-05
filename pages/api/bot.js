import { SUPERBOT_DATABASE } from '../lib/superbot-data.js';
import { WORLD_HUB } from '../lib/world-hub.js';

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({error: 'POST only'});
  
  const { message = "", lang = "fr", country = "gwada" } = req.body;
  
  // 🌍 **WORLD POPUP® INÉDIT** - Liens externes INTRA-site
  const worldPopup = generateWorldPopup(message.toLowerCase().trim(), lang, country);
  
  res.json({ 
    message: worldPopup.message,
    popupLinks: worldPopup.links,
    gwadaHub: "GUADELOUPE = NOMBRIL DU MONDE®",
    langue: lang,
    signature: "réussitess971 excellence innovation Succès Positivité à l'infini Boudoume 🌍🌴✨"
  });
}

function generateWorldPopup(msg, lang, country) {
  const gwadaMsg = WORLD_HUB.gwadaCentral.message;
  const langueMsg = WORLD_HUB.langues[lang] || WORLD_HUB.langues.fr;
  
  let links = {
    gwada: WORLD_HUB.gwadaCentral.liensExternals.wikipedia,
    amazon: WORLD_HUB.gwadaCentral.liensExternals.amazonGwada,
    culture: WORLD_HUB.gwadaCentral.liensExternals.culture
  };
  
  // 🎯 FONCTIONS MONDIALES
  if (msg.includes("quiz")) {
    const quiz = SUPERBOT_DATABASE.quizz[Math.floor(Math.random() * SUPERBOT_DATABASE.quizz.length)];
    return {
      message: `${langueMsg}

${gwadaMsg}

🎯 QUIZZ: ${quiz.q}
A) ${quiz.a}`,
      links: {...links, quiz: "https://reussitess.fr/quiz"}
    };
  }
  
  if (msg.includes("amazon") || msg.includes("boutique")) {
    return {
      message: `${langueMsg}

${gwadaMsg}

🌍 26 BOUTIQUES depuis GUADELOUPE → Monde entier !`,
      links: {...links, boutiques: "https://reussitess.fr/boutiques"}
    };
  }
  
  if (msg.includes("culture") || msg.includes("afrique")) {
    return {
      message: `${langueMsg}

🌴 Gwada = Zouk + Afrobeats Hub mondial !`,
      links: {...links, culture: WORLD_HUB.gwadaCentral.liensExternals.culture}
    };
  }
  
  // 🌟 BIENVENUE MONDIALE GWAda CENTRALE
  return {
    message: `${langueMsg}

${gwadaMsg}

**Di "quiz", "amazon", "culture" pou monde entier depuis Gwada !** 😎`,
    links: links
  };
}
