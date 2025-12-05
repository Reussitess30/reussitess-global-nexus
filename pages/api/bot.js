export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({error: 'POST only'});
  
  const { message = "", country = "fr" } = req.body;
  const hubResponse = worldCultureHub(message.toLowerCase().trim(), country);
  
  res.json({
    message: hubResponse.message,
    legal: hubResponse.legal[country],
    revenue: hubResponse.revenue,
    culture: hubResponse.culture,
    signature: "réussitess971 excellence innovation Succès Positivité à l'infini Boudoume 🌍📚💰✨"
  });
}

function worldCultureHub(msg, country) {
  // 🌍 CONNAISSANCES MONDIALES (14 pays)
  const culture = {
    fr: "🇫🇷 **France** : Louvre Mona Lisa | Versailles | Eiffel Tower",
    de: "🇩🇪 **Allemagne** : Berlin Wall | Oktoberfest | Neuschwanstein",
    us: "🇺🇸 **USA** : Statue Liberty | Grand Canyon | Silicon Valley",
    br: "🇧🇷 **Brésil** : Christ Rio | Amazon Rainforest | Carnival Rio",
    gwada: "🇬🇵 **Guadeloupe** : Zouk Kassav' | Gwoka Gwo Ka | Bois Bandé"
  };
  
  // 🛡️ LÉGAL PAR PAYS
  const legal = {
    fr: "🇫🇷 **France** : RGPD | LCEN | Affiliation déclarée CNIL",
    de: "🇩🇪 **Allemagne** : DSGVO | UWG | Impressum obligatoire",
    us: "🇺🇸 **USA** : FTC Disclosure | CAN-SPAM | TCPA",
    br: "🇧🇷 **Brésil** : LGPD | Marco Civil | Nota Fiscal",
    all: "✅ **Paiement Amazon/Google Ads** | ✅ Liens officiels | ✅ Transparence 100%"
  };
  
  // 💰 REVENUS MENSUELS
  const revenue = {
    affiliates: "Amazon 4-12% | Google Adsense | TikTok Shop",
    premium: "Abonnement 4.99€/mois contenu exclusif",
    sponsors: "Sponsored Products Amazon | Display Ads",
    dom: "FBA DOM-TOM réduction 10% + Prime 2-4j"
  };
  
  if (msg.includes("culture") || msg.includes("histoire")) {
    return { message: `🌍 **CENTRE CULTUREL MONDIAL** depuis GUADELOUPE !

${culture[country] || culture.gwada}`, legal, revenue, culture: true };
  }
  
  if (msg.includes("legal") || msg.includes("loi")) {
    return { message: `⚖️ **LÉGISLATION ${country.toUpperCase()} RESPECTÉE** :

${legal[country] || legal.all}`, legal, revenue, culture: false };
  }
  
  if (msg.includes("revenu") || msg.includes("argent")) {
    return { message: `💰 **HUB MONÉTISATION MENSUELLE** :

${revenue.affiliates}
${revenue.premium}
${revenue.sponsors}

**Gwada → 14 pays = Revenus passifs !**`, legal, revenue, culture: false };
  }
  
  return {
    message: `🌍 **SUPERBOT CENTRE DU MONDE®** réussitess971

**Culture** : "culture de"
**Legal** : "legal us"
**Revenus** : "revenu"

**GUADELOUPE = Hub mondial légal rentable !**`,
    legal, revenue, culture: true
  };
}
