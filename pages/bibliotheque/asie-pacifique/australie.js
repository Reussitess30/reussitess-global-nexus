import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Australie = () => {
  return (
    <>
      <Head><title>Australie | Bibliothèque REUSSITESS®</title></Head>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 mb-6">
              <Link href="/" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg">🏠 Accueil</Link>
              <Link href="/bibliotheque" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg">← Bibliothèque</Link>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-9xl">🇦🇺</span>
              <div><h1 className="text-6xl font-bold mb-2">Australie</h1><p className="text-2xl">Terre Kangourous</p></div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-yellow-600">🏛️ Informations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div><p className="font-bold mb-2">Capitale</p><p className="text-xl">Canberra</p></div>
              <div><p className="font-bold mb-2">Population</p><p className="text-xl">~26 millions</p></div>
              <div><p className="font-bold mb-2">Superficie</p><p className="text-xl">7,692,024 km²</p></div>
              <div><p className="font-bold mb-2">Langues</p><p className="text-xl">Anglais</p></div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-orange-600">🎭 Culture</h2>
            <p className="text-lg">Culture aborigène 65,000 ans (plus ancienne au monde), Dreamtime, multiculturalisme, style de vie décontracté, passion sport cricket rugby surf.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-yellow-600">🏛️ Patrimoine</h2>
            <ul className="space-y-3">
              <li className="flex gap-3"><span className="text-2xl">🪸</span><div><h3 className="font-bold text-xl">Grande Barrière Corail UNESCO</h3><p>Plus grand récif monde 2,300 km</p></div></li>
              <li className="flex gap-3"><span className="text-2xl">🎭</span><div><h3 className="font-bold text-xl">Opéra Sydney UNESCO</h3><p>Architecture iconique voiles blanches</p></div></li>
              <li className="flex gap-3"><span className="text-2xl">🪨</span><div><h3 className="font-bold text-xl">Uluru (Ayers Rock)</h3><p>Monolithe sacré aborigène 348m</p></div></li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-orange-600">💡 Savoir</h2>
            <p className="text-lg">Art aborigène ancestral, ressources minières immenses (fer, or), vins réputés Barossa Valley, faune unique endémique 80%, qualité vie élevée.</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">🛍️ Découvrir</h2>
            <a href="https://reussitess-global-nexus-jfgk.vercel.app/" className="bg-white text-orange-600 px-6 py-3 rounded-xl font-bold inline-block hover:scale-105 transition">Boutiques</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Australie;
