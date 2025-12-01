import CopyBash from "../components/CopyBash";

const FILES = [
  {
    filename: "next.config.js",
    code: `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true,
  },
// ... (le reste du code NextConfig corrigé)
}
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})
module.exports = withPWA(nextConfig)`
  },
  {
    filename: "components/Badges.js",
    code: `export default [
  { id: 'globetrotter', label: 'Globetrotter', emoji: '🌍', condition: 'A posé 10 questions' },
  { id: 'culture-star', label: 'Culture Star', emoji: '🏆', condition: 'A réussi un quiz' },
  { id: 'amazon-master', label: 'Amazon Master', emoji: '🛍️', condition: 'A demandé 5 fois sur les boutiques' }
];`
  },
  // ... Ajoute tes autres fichiers comme précédemment
];

export default function FilesBash() {
  return (
    <div style={{
      maxWidth: 900,
      margin: "0 auto",
      padding: "2em 1em"
    }}>
      <h1 style={{ fontSize: "2em", textAlign: "center", marginBottom: "2rem" }}>
        🔥 Copie Bash pour créer chaque fichier
      </h1>
      <p style={{ textAlign: "center", marginBottom: "2em", color: "#444" }}>
        Clique sur <b>📋 Copier Bash</b> puis colle la commande dans ton terminal pour générer le fichier !
      </p>
      {FILES.map(f => (
        <CopyBash key={f.filename} filename={f.filename} code={f.code} />
      ))}
    </div>
  );
}