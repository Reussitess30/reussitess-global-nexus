import Link from 'next/link'

export default function Bibliotheque() {
  return (
    <div className="container">
      <h1>📚 Bibliothèque</h1>
      <p>Explorez nos ressources et outils.</p>
      <Link href="/">← Retour à l&apos;accueil</Link>
    </div>
  )
}
