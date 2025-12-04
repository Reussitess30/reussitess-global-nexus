import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <Head><title>Polynésie Française | Bibliothèque REUSSITESS®</title></Head>
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white">
        <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 mb-6">
              <Link href="/" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition">🏠 Accueil</Link>
              <Link href="/bibliotheque" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition">← Bibliothèque</Link>
            </div>
            <div className="flex items-center gap-6 mb-6">
              <span className="text-9xl">🇵🇫</span>
              <div>
                <h1 className="text-6xl font-bold mb-2">Polynésie Française</h1>
                <p className="text-2xl">Fenua • Pacifique Sud</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-teal-600">🏛️ Informations Générales</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div><p className="font-bold text-gray-700 mb-2">Capitale</p><p className="text-xl">Papeete (Tahiti)</p></div>
              <div><p className="font-bold text-gray-700 mb-2">Population</p><p className="text-xl">~280,000 habitants</p></div>
              <div><p className="font-bold text-gray-700 mb-2">Superficie</p><p className="text-xl">4,167 km²</p></div>
              <div><p className="font-bold text-gray-700 mb-2">Langues</p><p className="text-xl">Français, Tahitien, Langues polynésiennes</p></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-teal-600">🎭 Culture</h2>
            <p className="text-lg leading-relaxed">Culture polynésienne ancestrale ma'ohi authentique. Danse tahitienne gracieuse, art du tatouage traditionnel sacré, navigation à voile ancienne, tradition orale millénaire.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-teal-600">🏛️ Patrimoine</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <div><h3 className="font-bold text-xl mb-1">Marae polynésiens - Sites sacrés ancestraux, temples en pierre, lieux de culte et cérémonies</h3></div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <div><h3 className="font-bold text-xl mb-1">Perles de Tahiti noires - Réputées mondialement, aquaculture perlière, qualité exceptionnelle</h3></div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <div><h3 className="font-bold text-xl mb-1">Heiva i Tahiti - Grand festival culturel, chants traditionnels, danses polynésiennes spectaculaires</h3></div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-teal-600">💡 Savoir & Innovation</h2>
            <p className="text-lg leading-relaxed">Navigation traditionnelle va'a (pirogue), culture ma'ohi préservée, perles noires d'exception, biodiversité marine corallienne, astronomie polynésienne ancestrale pratiquée.</p>
          </div>

          <div className="bg-gradient-to-r from-teal-600 to-teal-800 rounded-2xl shadow-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">🛍️ Découvrir les Produits</h2>
            <p className="text-lg mb-6">Explorez notre sélection de produits en lien avec Polynésie Française</p>
            <a href="https://reussitess-global-nexus-jfgk.vercel.app/" className="bg-white text-teal-600 px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all inline-block">
              Voir les boutiques
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Page;
