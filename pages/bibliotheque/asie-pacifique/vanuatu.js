import React from "react";
import Head from "next/head";
import Link from "next/link";

const Vanuatu = () => {
  return (
    <>
      <Head>
        <title>Vanuatu | Bibliothèque REUSSITESS®</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 mb-6">
              <Link
                href="/"
                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg"
              >
                🏠 Accueil
              </Link>
              <Link
                href="/bibliotheque"
                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg"
              >
                ← Bibliothèque
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-9xl">🇻🇺</span>
              <div>
                <h1 className="text-6xl font-bold mb-2">Vanuatu</h1>
                <p className="text-2xl">République Heureuse</p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-green-600">
              🏛️ Informations
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-bold mb-2">Capitale</p>
                <p className="text-xl">Port-Vila</p>
              </div>
              <div>
                <p className="font-bold mb-2">Population</p>
                <p className="text-xl">~310,000</p>
              </div>
              <div>
                <p className="font-bold mb-2">Superficie</p>
                <p className="text-xl">12,189 km²</p>
              </div>
              <div>
                <p className="font-bold mb-2">Langues</p>
                <p className="text-xl">Bislama, Français, Anglais</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">
              🎭 Culture
            </h2>
            <p className="text-lg">
              Mélanésie authentique, condominium franco-britannique, 113 langues
              record mondial, kastom coutumes.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-green-600">
              🏛️ Patrimoine
            </h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-2xl">🌋</span>
                <div>
                  <h3 className="font-bold text-xl">Volcans Yasur Ambrym</h3>
                  <p>Accès facile, éruptions spectacle</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">🤿</span>
                <div>
                  <h3 className="font-bold text-xl">Plongée Classe Mondiale</h3>
                  <p>SS President Coolidge épave</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">🪂</span>
                <div>
                  <h3 className="font-bold text-xl">Nagol Saut Gavia</h3>
                  <p>Ancêtre saut élastique</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">💡 Savoir</h2>
            <p className="text-lg">
              Bislama créole unique, 113 langues densité record, indice bonheur
              élevé, paradis fiscal.
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">🛍️ Découvrir</h2>
            <a
              href="https://reussitess-global-nexus-jfgk.vercel.app/"
              className="bg-white text-green-600 px-6 py-3 rounded-xl font-bold inline-block hover:scale-105 transition"
            >
              Boutiques
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Vanuatu;
