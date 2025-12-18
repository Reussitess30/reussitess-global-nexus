import React from "react";
import Head from "next/head";
import Link from "next/link";

const Vietnam = () => {
  return (
    <>
      <Head>
        <title>Vietnam | Bibliothèque REUSSITESS®</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-yellow-50">
        <div className="bg-gradient-to-r from-red-600 to-yellow-600 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 mb-6">
              <Link
                href="/"
                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition"
              >
                🏠 Accueil
              </Link>
              <Link
                href="/bibliotheque"
                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition"
              >
                ← Bibliothèque
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-9xl">🇻🇳</span>
              <div>
                <h1 className="text-6xl font-bold mb-2">Vietnam</h1>
                <p className="text-2xl">Dragon Ascendant</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-red-600">
              🏛️ Informations
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-bold mb-2">Capitale</p>
                <p className="text-xl">Hanoï</p>
              </div>
              <div>
                <p className="font-bold mb-2">Population</p>
                <p className="text-xl">~98 millions</p>
              </div>
              <div>
                <p className="font-bold mb-2">Superficie</p>
                <p className="text-xl">331,212 km²</p>
              </div>
              <div>
                <p className="font-bold mb-2">Langues</p>
                <p className="text-xl">Vietnamien</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-yellow-600">
              🎭 Culture
            </h2>
            <p className="text-lg">
              Influence française Indochine, culture millénaire
              sino-vietnamienne, résilience historique. Cuisine phở bánh mì,
              café robusta, dynamisme économique dragon asiatique émergent.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-red-600">
              🏛️ Patrimoine
            </h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-2xl">🏝️</span>
                <div>
                  <h3 className="font-bold text-xl">Baie d'Hạ Long UNESCO</h3>
                  <p>1,600 îles karstiques, paysage féerique maritime</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">🏮</span>
                <div>
                  <h3 className="font-bold text-xl">Hội An UNESCO</h3>
                  <p>Architecture fusion, lanternes colorées</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">🏯</span>
                <div>
                  <h3 className="font-bold text-xl">Cité Huế UNESCO</h3>
                  <p>Palais impérial dynastie Nguyễn</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-yellow-600">
              💡 Savoir
            </h2>
            <p className="text-lg">
              Cuisine fusion renommée, café robusta 2e producteur mondial,
              économie manufacturière textile électronique, éducation valorisée.
            </p>
          </div>
          <div className="bg-gradient-to-r from-red-600 to-yellow-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">🛍️ Découvrir</h2>
            <a
              href="https://reussitess-global-nexus-jfgk.vercel.app/"
              className="bg-white text-red-600 px-6 py-3 rounded-xl font-bold inline-block hover:scale-105 transition"
            >
              Boutiques
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Vietnam;
