import React from "react";
import Head from "next/head";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <Head>
        <title>Saint-Martin | Bibliothèque REUSSITESS®</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
        <div className="bg-gradient-to-r from-pink-600 to-pink-800 text-white py-16 px-4">
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
            <div className="flex items-center gap-6 mb-6">
              <span className="text-9xl">🇲🇫</span>
              <div>
                <h1 className="text-6xl font-bold mb-2">Saint-Martin</h1>
                <p className="text-2xl">Friendly Island • Antilles</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-pink-600">
              🏛️ Informations Générales
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-bold text-gray-700 mb-2">Capitale</p>
                <p className="text-xl">Marigot</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 mb-2">Population</p>
                <p className="text-xl">~36,000 habitants</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 mb-2">Superficie</p>
                <p className="text-xl">53 km²</p>
              </div>
              <div>
                <p className="font-bold text-gray-700 mb-2">Langues</p>
                <p className="text-xl">Français, Anglais, Créole</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-pink-600">
              🎭 Culture
            </h2>
            <p className="text-lg leading-relaxed">
              Seule île au monde partagée entre deux nations souveraines
              (France/Pays-Bas depuis 1648). Multiculturalisme caribéen
              exceptionnel, diversité culturelle harmonieuse unique,
              cohabitation pacifique.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-pink-600">
              🏛️ Patrimoine
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <div>
                  <h3 className="font-bold text-xl mb-1">
                    Fort Louis - Fortification historique offrant vue
                    panoramique spectaculaire sur Marigot et Simpson Bay
                  </h3>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <div>
                  <h3 className="font-bold text-xl mb-1">
                    Plages paradisiaques renommées - Orient Bay naturiste, Baie
                    Rouge sauvage, Anse Marcel protégée
                  </h3>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <div>
                  <h3 className="font-bold text-xl mb-1">
                    Carnaval caribéen bilingue - Fusion culturelle
                    franco-néerlandaise festive, parades colorées costumées
                  </h3>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-pink-600">
              💡 Savoir & Innovation
            </h2>
            <p className="text-lg leading-relaxed">
              Coopération franco-néerlandaise unique au monde (traité 1648),
              tourisme durable développé, multilinguisme naturel (3 langues
              officielles coexistant), commerce duty-free.
            </p>
          </div>

          <div className="bg-gradient-to-r from-pink-600 to-pink-800 rounded-2xl shadow-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">
              🛍️ Découvrir les Produits
            </h2>
            <p className="text-lg mb-6">
              Explorez notre sélection de produits en lien avec Saint-Martin
            </p>
            <a
              href="https://reussitess-global-nexus-jfgk.vercel.app/"
              className="bg-white text-pink-600 px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all inline-block"
            >
              Voir les boutiques
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
