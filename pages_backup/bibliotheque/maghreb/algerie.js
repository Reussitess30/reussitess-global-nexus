import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <Head><title>Algérie | Bibliothèque REUSSITESS®</title></Head>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 mb-6">
              <Link href="/" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition">🏠 Accueil</Link>
              <Link href="/bibliotheque" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition">← Bibliothèque</Link>
            </div>
            <div className="flex items-center gap-6 mb-6">
              <span className="text-9xl">🇩🇿</span>
              <div>
                <h1 className="text-6xl font-bold mb-2">Algérie</h1>
                <p className="text-2xl">Pays des Braves • Afrique du Nord</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-green-600">🏛️ Informations Générales</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div><p className="font-bold text-gray-700 mb-2">Capitale</p><p className="text-xl">Alger</p></div>
              <div><p className="font-bold text-gray-700 mb-2">Population</p><p className="text-xl">~44 millions</p></div>
              <div><p className="font-bold text-gray-700 mb-2">Superficie</p><p className="text-xl">2,381,741 km²</p></div>
              <div><p className="font-bold text-gray-700 mb-2">Langues</p><p className="text-xl">Arabe, Berbère Tamazight, Français</p></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-green-600">🎭 Culture</h2>
            <p className="text-lg leading-relaxed">Plus vaste pays africain. Héritage berbère amazigh millénaire (Kabylie, Aurès), culture arabo-méditerranéenne riche, Sahara majestueux couvrant 80% territoire national.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-green-600">🏛️ Patrimoine</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <div><h3 className="font-bold text-xl mb-1">Casbah d'Alger UNESCO - Médina historique ottomane, résistance anticoloniale, architecture blanche</h3></div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <div><h3 className="font-bold text-xl mb-1">Timgad UNESCO - Cité romaine Trajan parfaitement conservée, Pompéi africaine, forum arc triomphe</h3></div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <div><h3 className="font-bold text-xl mb-1">Tassili n'Ajjer UNESCO - Art rupestre préhistorique 10,000 ans, peintures gravures sahariennes</h3></div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-green-600">💡 Savoir & Innovation</h2>
            <p className="text-lg leading-relaxed">Histoire antique berbère-romaine-numide glorieuse, musique raï contemporaine (Cheb Khaled ambassadeur), gaz naturel GNL (10e producteur mondial exportateur), patrimoine amazigh préservé.</p>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl shadow-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">🛍️ Découvrir les Produits</h2>
            <p className="text-lg mb-6">Explorez notre sélection de produits en lien avec Algérie</p>
            <a href="https://reussitess-global-nexus-jfgk.vercel.app/" className="bg-white text-green-600 px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all inline-block">
              Voir les boutiques
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Page;
