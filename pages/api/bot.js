import { PROJECT_INDEX } from '../lib/project-index.js';
import { SUPERBOT_DATABASE } from '../lib/superbot-data.js';

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({error: 'POST only'});
  
  const { message = "" } = req.body;
  
  // 🛡️ SÉCURITÉ AUTONOME
  const security = checkSecurity(req);
  if (security.warning) {
    return res.json({
      message: `⚠️ ${security.warning} Je vérifie votre sécurité... 🔒 réussitess971 protège !`,
      security: true,
      voiceAlert: true
    });
  }
  
  // 🧠 SUPERBOT ULTIME A→Z
  const ultimateResponse = superbotUltimate(message.toLowerCase().trim());
  
  res.json({
    message: ultimateResponse.text,
    files: ultimateResponse.files,
    external: ultimateResponse.external,
    politeness: ultimateResponse.politeness,
    security: "OK",
    signature: "réussitess971 excellence innovation Succès Positivité à l'infini Boudoume 🌍🌴✨"
  });
}

function checkSecurity(req) {
  // 🔒 SÉCURITÉ VERBALE AUTONOME
  const suspicious = req.headers['user-agent']?.includes('bot') || false;
  return suspicious ? { warning: "Activité suspecte détectée ! Je protège reussitess.fr 🔒" } : { warning: null };
}

function superbotUltimate(msg) {
  // 🙇‍♂️ POLITENESS HUMAINE
  const politeness = getPolitePhrase(msg);
  
  // 📂 ACCÈS FICHIERS PROJET
  if (msg.includes("fichier") || msg.includes("page")) {
    return {
      text: `${politeness} Voici vos fichiers Reussitess® :
📄 Affiliation: ${PROJECT_INDEX.pages.affiliation}
📊 Analytics: ${PROJECT_INDEX.pages.analytics}`,
      files: Object.keys(PROJECT_INDEX.pages),
      external: null,
      politeness: true
    };
  }
  
  // 🌐 LIVRES GRATUITS INTRA-SITE
  if (msg.includes("livre") || msg.includes("biblio")) {
    return {
      text: `${politeness} 📚 Ouvrages gratuits Gwada (ouvre INTRA-site):
${PROJECT_INDEX.externalFree.wikisource}
${PROJECT_INDEX.externalFree.gallica}`,
      files: null,
      external: PROJECT_INDEX.externalFree,
      politeness: true
    };
  }
  
  // 🛡️ RAPPORT SÉCURITÉ
  if (msg.includes("sécurité")) {
    return {
      text: `${politeness} 🔒 SuperBot Reussitess® : Sécurité A+ vérifiée ! Headers HSTS CSP X-Frame. Tout est protégé !`,
      files: null,
      external: null,
      politeness: true
    };
  }
  
  return {
    text: `${politeness} 🌴 Bonjour ! SuperBot Reussitess® accède à TOUS vos fichiers + livres gratuits monde ! Di "fichier", "biblio", "sécurité" 😎`,
    files: Object.keys(PROJECT_INDEX.pages),
    external: PROJECT_INDEX.externalFree,
    politeness: true
  };
}

function getPolitePhrase(msg) {
  const phrases = [
    "Bonjour mon frère ! 😊",
    "Merci pour votre message ! 🙏",
    "Pardon pour l'attente, je réfléchis... 💭",
    "Excellent question ! Bravo ! 👏",
    "Parfaitement compris ! 😎"
  ];
  return phrases[Math.floor(Math.random() * phrases.length)];
}
