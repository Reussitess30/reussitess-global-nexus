import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const BibliothequeIndex = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const regions = {
    'DOM-TOM': {
      icon: '🇫🇷',
      color: 'from-blue-600 to-blue-800',
      pays: [
        { name: 'Guyane', flag: '🇬🇫', slug: 'guyane' },
        { name: 'Réunion', flag: '🇷🇪', slug: 'reunion' },
        { name: 'Mayotte', flag: '🇾🇹', slug: 'mayotte' },
        { name: 'Guadeloupe', flag: '🇬🇵', slug: 'guadeloupe' },
        { name: 'Martinique', flag: '🇲🇶', slug: 'martinique' },
        { name: 'Polynésie', flag: '🇵🇫', slug: 'polynesie' },
        { name: 'Nouvelle-Calédonie', flag: '🇳🇨', slug: 'nouvelle-caledonie' },
        { name: 'St-Pierre-Miquelon', flag: '🇵🇲', slug: 'saint-pierre' },
        { name: 'Wallis-Futuna', flag: '🇼🇫', slug: 'wallis-futuna' },
        { name: 'Saint-Martin', flag: '🇲🇫', slug: 'saint-martin' },
        { name: 'Saint-Barthélemy', flag: '🇧🇱', slug: 'saint-barthelemy' }
      ]
    },
    'Afrique': {
      icon: '🌍',
      color: 'from-green-600 to-green-800',
      pays: [
        { name: 'Sénégal', flag: '🇸🇳', slug: 'senegal' },
        { name: 'Côte d\'Ivoire', flag: '🇨🇮', slug: 'cote-ivoire' },
        { name: 'Cameroun', flag: '🇨🇲', slug: 'cameroun' },
        { name: 'Madagascar', flag: '🇲🇬', slug: 'madagascar' },
        { name: 'Mali', flag: '🇲🇱', slug: 'mali' },
        { name: 'RD Congo', flag: '🇨🇩', slug: 'rdc' },
        { name: 'Rwanda', flag: '🇷🇼', slug: 'rwanda' }
      ]
    },
    'Maghreb': {
      icon: '🏜️',
      color: 'from-orange-600 to-orange-800',
      pays: [
        { name: 'Maroc', flag: '🇲🇦', slug: 'maroc' },
        { name: 'Algérie', flag: '🇩🇿', slug: 'algerie' },
        { name: 'Tunisie', flag: '🇹🇳', slug: 'tunisie' },
        { name: 'Liban', flag: '🇱🇧', slug: 'liban' }
      ]
    },
    'Asie-Pacifique': {
      icon: '🌏',
      color: 'from-red-600 to-red-800',
      pays: [
        { name: 'Vietnam', flag: '🇻🇳', slug: 'vietnam' },
        { name: 'Cambodge', flag: '🇰🇭', slug: 'cambodge' },
        { name: 'Laos', flag: '🇱🇦', slug: 'laos' },
        { name: 'Vanuatu', flag: '🇻🇺', slug: 'vanuatu' }
      ]
    },
    'Amériques': {
      icon: '🌎',
      color: 'from-purple-600 to-purple-800',
      pays: [
        { name: 'Québec', flag: '🇨🇦', slug: 'quebec' },
        { name: 'Haïti', flag: '🇭🇹', slug: 'haiti' },
        { name: 'Louisiane', flag: '🇺🇸', slug: 'louisiane' }
      ]
    },
    'Europe': {
      icon: '🇪🇺',
      color: 'from-indigo-600 to-indigo-800',
      pays: [
        { name: 'Belgique', flag: '🇧🇪', slug: 'belgique' },
        { name: 'Suisse', flag: '🇨🇭', slug: 'suisse' },
        { name: 'Luxembourg', flag: '🇱🇺', slug: 'luxembourg' },
        { name: 'Monaco', flag: '🇲🇨', slug: 'monaco' }
      ]
    }
  };

  return (
    <>
      <Head>
        <title>Bibliothèque Mondiale | REUSSITESS® - Excellence • Innovation • Succès</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6">📚 Bibliothèque Culturelle Mondiale</h1>
            <p className="text-3xl font-semibold mb-4">Excellence • Innovation • Succès</p>
            <p className="text-xl mb-8">Valoriser le savoir, la connaissance et la culture mondiale</p>
            
            <input
              type="text"
              placeholder="🔍 Rechercher un pays..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-2xl px-6 py-4 rounded-full text-gray-800 text-lg"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {Object.entries(regions).map(([regionName, regionData]) => (
            <div key={regionName} className="mb-16">
              <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
                <span className="text-5xl">{regionData.icon}</span>
                {regionName}
                <span className="text-2xl text-gray-500">({regionData.pays.length})</span>
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {regionData.pays
                  .filter(pays => 
                    searchTerm === '' || 
                    pays.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((pays) => (
                  <Link 
                    key={pays.slug} 
                    href={`/bibliotheque/${regionName.toLowerCase().replace(/[^a-z]/g, '-')}/${pays.slug}`}
                  >
                    <div className={`bg-gradient-to-br ${regionData.color} rounded-2xl p-6 text-white hover:scale-105 transition-all cursor-pointer shadow-xl`}>
                      <div className="text-6xl mb-4 text-center">{pays.flag}</div>
                      <h3 className="text-xl font-bold text-center">{pays.name}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-16">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">40+</div>
              <div className="text-xl">Pays & Territoires</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-xl">Langues</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">200+</div>
              <div className="text-xl">Sites UNESCO</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">∞</div>
              <div className="text-xl">Savoirs</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BibliothequeIndex;
