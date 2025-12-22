module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  const knowledgeBase = {
    brand: "REUSSITESS®",
    signature: "0x69f4...",
    assets: {
      amazon_stores: 26,
      ai_legion: 100,
      token_supply: "1,000,000,000 REUS"
    },
    countries: ["France", "England", "Italy", "Germany", "Sweden", "Singapore", "Australia", "Spain", "Brazil", "UK", "India", "New Zealand", "USA", "Canada"],
    security: "Audit CodeQL & AES-256",
    status: "EXCELLENCE OPÉRATIONNELLE"
  };

  res.status(200).send(JSON.stringify(knowledgeBase));
};
