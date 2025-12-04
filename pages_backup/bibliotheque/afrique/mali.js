import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <Head><title>Mali | Bibliothèque REUSSITESS®</title></Head>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
        <div className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 mb-6">
              <Link href="/" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition">🏠 Accueil</Link>
              <Link href="/bibliotheque" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition">← Bibliothèque</Link>
            </div>
            <div className="flex items-center gap-6 mb-6">
              <span className="text-9xl">🇲🇱</span>
              <div>
                <h1 className="text-6xl font-bold mb-2">Mali</h1>
                <p className="text-2xl">Empire des Mandingues • Afrique de l'Ouest</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-amber-600">🏛️ Informations Générales</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div><p className="font-bold text-gray-700 mb-2">Capitale</p><p className="text-xl">Bamako</p></div>
              <div><p className="font-bold text-gray-700 mb-2">Population</p><p className="text-xl">~21 millions</p></div>
              <div><p className="font-bold text-gray-700 mb-2">Superficie</p><p className="text-xl">1,240,192 km²</p></div>
              <div><p className="font-bold text-gray-700 mb-2">Langues</p><p className="text-xl">Français, Bambara, Peul, Songhaï</p></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-amber-600">🎭 Culture</h2>
            <p className="text-lg leading-relaxed">Empire mandingue glorieux (Soundiata Keïta, Charte Manden 1236). Tradition orale ancestrale des griots gardiens mémoire, musique mandingue kora mondialement appréciée, culture nomade touarègue.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-amber-600">🏛️ Patrimoine</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <div><h3 className="font-bold text-xl mb-1">Tombouctou UNESCO - Cité mythique des 333 saints, manuscrits anciens précieux, université islamique</h3></div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <div><h3 className="font-bold text-xl mb-1">Falaises de Bandiagara pays Dogon UNESCO - Culture dogon millénaire unique, cosmogonie, greniers</h3></div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <div><h3 className="font-bold text-xl mb-1">Grande Mosquée de Djenné - Plus grande construction terre crue (banco) monde, architecture soudanaise</h3></div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-amber-600">💡 Savoir & Innovation</h2>
            <p className="text-lg leading-relaxed">Manuscrits anciens Tombouctou (300,000+ préservés), musique mandingue traditionnelle (kora, ngoni, balafon), architecture banco unique, or (3e producteur africain exploitation).</p>
          </div>

          <div className="bg-gradient-to-r from-amber-600 to-amber-800 rounded-2xl shadow-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">🛍️ Découvrir les Produits</h2>
            <p className="text-lg mb-6">Explorez notre sélection de produits en lien avec Mali</p>
            <a href="https://reussitess-global-nexus-jfgk.vercel.app/" className="bg-white text-amber-600 px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all inline-block">
              Voir les boutiques
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Page;
