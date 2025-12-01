import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Sécurité : autorise seulement une liste blanche de fichiers
  const { filename } = req.query;

  const allowedFiles = [
    'next.config.js',
    'components/Badges.js',
    'components/QuizBank.js',
    'components/VisitorStats.js',
    'pages/analytics.js',
    'pages/affiliation.js'
  ];

  if (!filename || !allowedFiles.includes(filename)) {
    return res.status(400).json({ error: 'Fichier non autorisé ou nom absent.' });
  }

  // Chemin complet depuis la racine du projet
  const filePath = path.join(process.cwd(), filename);

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    res.status(200).json({ content: fileContent });
  } catch (err) {
    res.status(404).json({ error: 'Fichier introuvable.' });
  }
}