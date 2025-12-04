import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <Head><title>Saint-Pierre-et-Miquelon | Bibliothèque REUSSITESS®</title></Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 mb-6">
              <Link href="/" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition">🏠 Accueil</Link>
              <Link href="/bibliotheque" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition">← Bibliothèque</Link>
            </div>
            <div className="flex items-center gap-6 mb-6">
              <span className="text-9xl">🇵🇲</span>
              <div>
                <h1 className="text-6xl font-bold mb-2">Saint-Pierre-et-Miquelon</h1>
                <p className="text-2xl">Archipel • Amérique du Nord</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-indigo-600">🏛️ Informations Générales</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div><p className="font-bold text-gray-700 mb-2">Capitale</p><p className="text-xl">Saint-Pierre</p></div>
              <div><p className="font-bold text-gray-700 mb-2">Population</p><p className="text-xl">~6,000 habitants</p></div>
              <div><p className="font-bold text-gray-700 mb-2">Superficie</p><p className="text-xl">242 km²</p></div>
              <div><p className="font-bold text-gray-700 mb-2">Langues</p><p className="text-xl">Français</p></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-indigo-600">🎭 Culture</h2>
            <p className="text-lg leading-relaxed">Dernier vestige français en Amérique du Nord depuis 1536. Culture franco-canadienne unique, patrimoine maritime basque et breton, traditions de pêcheurs morutiers séculaires.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-indigo-600">🏛️ Patrimoine</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <div><h3 className="font-bold text-xl mb-1">Architecture colorée unique - Maisons en bois influences européennes et nord-américaines mêlées</h3></div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <div><h3 className="font-bold text-xl mb-1">Patrimoine grande pêche morue - Histoire maritime séculaire, conserveries, tradition pêche bancs Terre-Neuve</h3></div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <div><h3 className="font-bold text-xl mb-1">Île aux Marins - Village musée abandonné 1965, témoignage émouvant vie pêcheurs, patrimoine préservé</h3></div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-indigo-600">💡 Savoir & Innovation</h2>
            <p className="text-lg leading-relaxed">Histoire grande pêche morutière internationale, culture acadienne métissée, phares historiques guidant navires, nature subarctique préservée, prohibition américaine années 1920.</p>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl shadow-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">🛍️ Découvrir les Produits</h2>
            <p className="text-lg mb-6">Explorez notre sélection de produits en lien avec Saint-Pierre-et-Miquelon</p>
            <a href="https://reussitess-global-nexus-jfgk.vercel.app/" className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all inline-block">
              Voir les boutiques
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Page;
