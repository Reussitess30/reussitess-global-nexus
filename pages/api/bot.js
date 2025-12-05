export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({error: 'POST only'});
  
  const { message = "", country = "fr" } = req.body;
  const vendeurResponse = amazonVendeurPro(message.toLowerCase().trim(), country);
  
  res.json({
    message: vendeurResponse.message,
    strategy: vendeurResponse.strategy,
    amazonRules: true,
    fba: vendeurResponse.fba,
    signature: "réussitess971 excellence innovation Succès Positivité à l'infini Boudoume 🌍🛒✨"
  });
}

function amazonVendeurPro(msg, country) {
  // 🛒 STRATÉGIES VENTE PAR PAYS (Règles Amazon OFFICIELLES)
  const strategies = {
    fr: { fba: "FBA France → Pan-EU", sponsored: "Sponsored Products FR", seo: "mots-clés français" },
    de: { fba: "FBA Allemagne #1 Europe", sponsored: "Sponsored DE", seo: "deutsch keywords" },
    us: { fba: "FBA USA → Lightning Deals", sponsored: "Amazon PPC US", seo: "long-tail english" },
    br: { fba: "FBA Brésil local", sponsored: "Sponsored BR", seo: "português BR" },
    in: { fba: "FBA Inde low-cost", sponsored: "Amazon Pay IN", seo: "hindi keywords" }
  };
  
  const strat = strategies[country] || strategies.fr;
  
  if (msg.includes("amazon") || msg.includes("boutique") || msg.includes("vente")) {
    return {
      message: `🛒 **26 BOUTIQUES INTERNATIONALES** réussitess971

**${country.toUpperCase()}**:
✅ ${strat.fba}
✅ ${strat.sponsored}
✅ ${strat.seo}

**FBA**: Amazon stocke/envoie → Prime badge !
**Sponsored**: CPC ciblé → Top ranking
**Règles Amazon**: ASIN unique, prix compétitifs, photos HD`,
      strategy: strat,
      fba: true
    };
  }
  
  if (msg.includes("quiz")) {
    return {
      message: `🎯 **QUIZZ VENDEUR AMAZON**

**${country.toUpperCase()}** → Quelle stratégie ?
A) ${strat.fba}
B) ${strat.sponsored}

**Repon pou boost ventes !** 💰`,
      strategy: strat,
      fba: true
    };
  }
  
  return {
    message: `🌍 **SUPERBOT VENDEUR** 26 boutiques 14 pays !

**Choisis pays**:
🇫🇷fr 🇩🇪de 🇺🇸us 🇧🇷br 🇮🇳in

Di "amazon de" → Stratégie Allemagne complète !
**FBA + Sponsored Products = Succès garanti** 🛒✨`,
    strategy: strategies,
    fba: true
  };
}
