export default function handler(req, res) {
  const { id } = req.query;
  const agentId = id || "001";
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({
    id: agentId,
    brand: "REUSSITESS®",
    status: "Verified Excellence",
    origin: "Guadeloupe (971)",
    signature: "0x69f4...",
    message: "Agent " + agentId + " is active. 1 Billion REUS tokens secured."
  });
}
