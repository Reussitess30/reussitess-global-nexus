import franc from 'franc';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'Missing message' });

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Missing API key' });

  // Détection automatique de la langue du texte
  const detectedLang = franc(message); // ex "fra", "eng", "spa", etc.
  const langLabel =
    detectedLang === 'fra' ? 'français' :
    detectedLang === 'eng' ? 'anglais' :
    detectedLang === 'spa' ? 'espagnol' :
    detectedLang === 'deu' ? 'allemand' :
    detectedLang !== 'und' ? detectedLang : 'langue utilisateur';

  // Prompt international
  const prompt = `Réponds dans la même langue que la question (${langLabel}) : ${message}`;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  const data = await response.json();
  if (data.error) return res.status(400).json({ error: data.error.message });
  res.status(200).json({ reply: data.choices[0].message.content });
}
