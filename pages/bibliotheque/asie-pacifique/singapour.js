import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Singapour = () => {
  return (
    <>
      <Head><title>Singapour | Bibliothèque REUSSITESS®</title></Head>
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 mb-6">
              <Link href="/" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg">🏠 Accueil</Link>
              <Link href="/bibliotheque" className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg">← Bibliothèque</Link>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-9xl">🇸🇬</span>
              <div><h1 className="text-6xl font-bold mb-2">Singapour</h1><p className="text-2xl">Cité-État Jardin</p></div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-red-600">🏛️ Informations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div><p className="font-bold mb-2">Capitale</p><p className="text-xl">Singapour</p></div>
              <div><p className="font-bold mb-2">Population</p><p className="text-xl">~5.9 millions</p></div>
              <div><p className="font-bold mb-2">Superficie</p><p className="text-xl">728 km²</p></div>
              <div><p className="font-bold mb-2">Langues</p><p className="text-xl">Anglais, Mandarin, Malais, Tamoul</p></div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-red-600">🎭 Culture</h2>
            <p className="text-lg">Multiculturalisme harmonieux (Chinois, Malais, Indiens), hub financier asiatique, propreté légendaire stricte, architecture futuriste, gastronomie fusion hawker centers UNESCO.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-red-600">🏛️ Patrimoine</h2>
            <ul className="space-y-3">
              <li className="flex gap-3"><span className="text-2xl">🌳</span><div><h3 className="font-bold text-xl">Gardens by the Bay</h3><p>Supertrees futuristes 50m illuminés</p></div></li>
              <li className="flex gap-3"><span className="text-2xl">🏨</span><div><h3 className="font-bold text-xl">Marina Bay Sands</h3><p>Hôtel iconique piscine infinie panoramique</p></div></li>
              <li className="flex gap-3"><span className="text-2xl">🏮</span><div><h3 className="font-bold text-xl">Quartiers Ethniques</h3><p>Chinatown, Little India, Kampong Glam</p></div></li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-red-600">💡 Savoir</h2>
            <p className="text-lg">Hub financier technologique 3e mondial, port maritime plus actif monde conteneurs, gastronomie hawker UNESCO, efficacité infrastructures MRT, multilinguisme 4 langues.</p>
          </div>
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">🛍️ Découvrir</h2>
            <a href="https://reussitess-global-nexus-jfgk.vercel.app/" className="bg-white text-red-600 px-6 py-3 rounded-xl font-bold inline-block hover:scale-105 transition">Boutiques</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Singapour;
