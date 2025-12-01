export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Missing message' });
  }

  const apiKey = process.env.OPENAI_API_KEY; // Jamais la clé en dur !
  if (!apiKey) {
    return res.status(500).json({ error: 'Missing API key' });
  }

  // Appel API OpenAI (node-fetch requis: npm install node-fetch, si besoin)
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    }),
  });

  const data = await response.json();
  if (data.error) {
    return res.status(400).json({ error: data.error.message });
  }
  // Renvoyer la réponse du bot
  return res.status(200).json({ reply: data.choices[0].message.content });
}
