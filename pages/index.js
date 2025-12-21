import Layout from '../components/Layout'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  const quizCategories = [
    { id: 'Gastronomie', title: '🍳 Gastronomie', color: 'from-orange-400 to-red-500' },
    { id: 'Histoire', title: '📜 Histoire', color: 'from-amber-700 to-yellow-900' },
    { id: 'Geographie', title: '🌍 Géographie', color: 'from-blue-400 to-emerald-500' },
    { id: 'Sciences', title: '🧬 Sciences', color: 'from-cyan-400 to-blue-600' },
    { id: 'Art', title: '🎨 Art & Culture', color: 'from-purple-400 to-pink-600' },
    { id: 'Musique', title: '🎵 Musique', color: 'from-indigo-400 to-purple-600' },
    { id: 'Cinema', title: '🎬 Cinéma', color: 'from-red-500 to-orange-600' },
    { id: 'Sport', title: '⚽ Sport', color: 'from-green-400 to-emerald-600' },
    { id: 'Tech', title: '💻 Technologie', color: 'from-slate-600 to-slate-800' },
    { id: 'Langue', title: '🗣️ Langues', color: 'from-yellow-400 to-orange-500' },
    { id: 'Maths', title: '🔢 Mathématiques', color: 'from-blue-600 to-indigo-700' },
    { id: 'Politique', title: '🏛️ Politique', color: 'from-zinc-700 to-zinc-900' },
    { id: 'Philosophie', title: '🧠 Philosophie', color: 'from-stone-500 to-stone-700' },
    { id: 'Innovations', title: '🚀 Innovations', color: 'from-sky-400 to-blue-500' },
    { id: 'Environnement', title: '🌱 Environnement', color: 'from-emerald-500 to-green-700' },
    { id: 'Sante', title: '🏥 Santé', color: 'from-rose-400 to-red-500' },
    { id: 'Business', title: '💼 Business', color: 'from-blue-800 to-slate-900' },
    { id: 'Monuments', title: '🗼 Monuments', color: 'from-orange-300 to-amber-500' },
    { id: 'Personnalites', title: '👤 Célébrités', color: 'from-violet-500 to-purple-700' },
    { id: 'Culture_du_Monde', title: '🎎 Cultures', color: 'from-red-600 to-rose-700' },
    { id: 'Decouvertes', title: '🔭 Découvertes', color: 'from-blue-300 to-cyan-500' },
    { id: 'Internet', title: '🌐 Internet', color: 'from-blue-500 to-indigo-600' },
    { id: 'Positivite', title: '✨ Positivité', color: 'from-yellow-300 to-orange-400' },
    { id: 'Amazon_Affiliation', title: '🛒 Affiliation', color: 'from-orange-400 to-amber-600' },
    { id: 'Boutique_Motivation', title: '💪 Motivation', color: 'from-red-500 to-orange-700' }
  ]

  return (
    <Layout>
      <Head>
        <title>REUSSITESS® Global Nexus - Quiz & Boutiques</title>
        <link rel="alternate" href="https://www.reussitess.fr/" hrefLang="fr-FR" />
        <link rel="alternate" href="https://www.reussitess.fr/" hrefLang="en-US" />
        <link rel="alternate" href="https://www.reussitess.fr/" hrefLang="en-GB" />
        <link rel="alternate" href="https://www.reussitess.fr/" hrefLang="en-CA" />
        <link rel="alternate" href="https://www.reussitess.fr/" hrefLang="en-AU" />
        <link rel="alternate" href="https://www.reussitess.fr/" hrefLang="en-NZ" />
        <link rel="alternate" href="https://www.reussitess.fr/" hrefLang="en-IN" />
        <link rel="alternate" href="https://www.reussitess.fr/" hrefLang="en-SG" />
        <link rel="alternate" href="https://www.reussitess.fr/" hrefLang="it-IT" />
        <link rel="alternate" href="https://www.reussitess.fr/" hrefLang="de-DE" />
        <link rel="alternate" href="https://www.reussitess.fr/" hrefLang="es-ES" />
        <link rel="alternate" href="https://www.reussitess.fr/" hrefLang="pt-BR" />
        <link rel="alternate" href="https://www.reussitess.fr/" hrefLang="sv-SE" />
      </Head>

      <div className="hero-section">
        <div className="container">
          <h1>Explorez le Savoir Global</h1>
          <p>25 Catégories de Quiz • 26 Boutiques Internationales</p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/boutiques" className="cta-button">🛍️ Voir les Boutiques</Link>
          </div>
        </div>
      </div>

      <div className="quiz-grid-container">
        <div className="quiz-grid">
          {quizCategories.map((cat) => (
            <Link key={cat.id} href={`/quiz/${cat.id}`} className="quiz-card-link">
              <div className={`quiz-card bg-gradient-to-br ${cat.color}`}>
                <h3>{cat.title}</h3>
                <span>Jouer →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}
