import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <Head><title>Louisiane | Bibliothèque REUSSITESS®</title></Head>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 mb-6">
              <Link href="/" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition">🏠 Accueil</Link>
              <Link href="/bibliotheque" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition">← Bibliothèque</Link>
            </div>
            <div className="flex items-center gap-6 mb-6">
              <span className="text-9xl">🇺🇸</span>
              <div>
                <h1 className="text-6xl font-bold mb-2">Louisiane</h1>
                <p className="text-2xl">Bayou State • Sud des États-Unis</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-purple-600">🏛️ Informations Générales</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div><p className="font-bold text-gray-700 mb-2">Capitale</p><p className="text-xl">Baton Rouge</p></div>
              <div><p className="font-bold text-gray-700 mb-2">Population</p><p className="text-xl">~4.6 millions</p></div>
              <div><p className="font-bold text-gray-700 mb-2">Superficie</p><p className="text-xl">135,659 km²</p></div>
              <div><p className="font-bold text-gray-700 mb-2">Langues</p><p className="text-xl">Anglais, Français cadien cajun</p></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-purple-600">🎭 Culture</h2>
            <p className="text-lg leading-relaxed">Héritage français Louisiana Purchase 1803 Napoléon. Cultures cajun (Acadiens déportés) et créole afro-caribéenne fusionnées harmonieusement, musique jazz berceau mondial, Mardi Gras Nouvelle-Orléans carnaval festif.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-purple-600">🏛️ Patrimoine</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <div><h3 className="font-bold text-xl mb-1">Jazz Nouvelle-Orléans - Berceau jazz musical mondial, Louis Armstrong Preservation Hall, improvisations</h3></div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <div><h3 className="font-bold text-xl mb-1">Bayous marécageux mystérieux - Écosystème unique zones humides, alligators, cyprès chauves mousse espagnole</h3></div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <div><h3 className="font-bold text-xl mb-1">Mardi Gras Nouvelle-Orléans - Carnaval légendaire américain, parades somptueuses, masques costumes tradition</h3></div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-purple-600">💡 Savoir & Innovation</h2>
            <p className="text-lg leading-relaxed">Jazz originel Nouvelle-Orléans rayonnement mondial, cuisine cajun-créole fusion gastronomique (gumbo jambalaya po'boy), français cadien langue préservée, écrevisses élevage, pétrole offshore golfe.</p>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl shadow-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">🛍️ Découvrir les Produits</h2>
            <p className="text-lg mb-6">Explorez notre sélection de produits en lien avec Louisiane</p>
            <a href="https://reussitess-global-nexus-jfgk.vercel.app/" className="bg-white text-purple-600 px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all inline-block">
              Voir les boutiques
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Page;
