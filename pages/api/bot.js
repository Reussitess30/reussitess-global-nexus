export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({error: 'POST only'});
  const msg = (req.body && req.body.message ? req.body.message.toLowerCase().trim() : '');
  const ua = req.headers['user-agent'] || '';
  if (ua.includes('curl') || ua.includes('bot')) return res.status(403).json({error: 'Bot'});
  let response = 'SUPERBOT LIVE 2025';
  if (msg.includes('amazon')) response += ' - 26 BOUTIQUES FR DE US BR FBA Prime';
  else if (msg.includes('culture')) response += ' - GUADELOUPE Zouk Gwoka';
  else if (msg.includes('quiz')) response += ' - Zouk Kassav';
  else response += ' - amazon culture quiz';
  res.json({message: response, status: 'OK'});
}
