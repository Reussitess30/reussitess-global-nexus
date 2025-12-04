import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Laos = () => {
  return (
    <>
      <Head><title>Laos | Bibliothèque REUSSITESS®</title></Head>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 mb-6">
              <Link href="/" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg">🏠 Accueil</Link>
              <Link href="/bibliotheque" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg">← Bibliothèque</Link>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-9xl">🇱🇦</span>
              <div><h1 className="text-6xl font-bold mb-2">Laos</h1><p className="text-2xl">Million Éléphants</p></div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-orange-600">🏛️ Informations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div><p className="font-bold mb-2">Capitale</p><p className="text-xl">Vientiane</p></div>
              <div><p className="font-bold mb-2">Population</p><p className="text-xl">~7 millions</p></div>
              <div><p className="font-bold mb-2">Superficie</p><p className="text-xl">236,800 km²</p></div>
              <div><p className="font-bold mb-2">Langues</p><p className="text-xl">Lao</p></div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-yellow-600">🎭 Culture</h2>
            <p className="text-lg">Sérénité bouddhiste theravada, influence française, traditions intactes, royaume Lane Xang.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-orange-600">🏛️ Patrimoine</h2>
            <ul className="space-y-3">
              <li className="flex gap-3"><span className="text-2xl">🏛️</span><div><h3 className="font-bold text-xl">Luang Prabang UNESCO</h3><p>Ville royale temples dorés</p></div></li>
              <li className="flex gap-3"><span className="text-2xl">🗿</span><div><h3 className="font-bold text-xl">Plaine Jarres</h3><p>Site mystérieux mégalithes</p></div></li>
              <li className="flex gap-3"><span className="text-2xl">🕉️</span><div><h3 className="font-bold text-xl">Vat Phou UNESCO</h3><p>Temple khmer montagne</p></div></li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-yellow-600">💡 Savoir</h2>
            <p className="text-lg">Bouddhisme authentique, soie traditionnelle, Mékong, café robusta qualité.</p>
          </div>
          <div className="bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">🛍️ Découvrir</h2>
            <a href="https://reussitess-global-nexus-jfgk.vercel.app/" className="bg-white text-orange-600 px-6 py-3 rounded-xl font-bold inline-block hover:scale-105 transition">Boutiques</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Laos;
