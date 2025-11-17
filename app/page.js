'use client';

export default function NexusDashboard() {
  // 14 BOUTIQUES PERSONNELLES
  const personalStores = [
    { name: "États-Unis", flag: "🇺🇸", link: "https://amzlink.to/az0LY0DXMG6dR", domain: "Amazon.com" },
    { name: "France", flag: "🇫🇷", link: "https://amzlink.to/az0RLMqtXqC2d", domain: "Amazon.fr" },
    { name: "Italie", flag: "🇮🇹", link: "https://amzlink.to/az0tV67jW36S7", domain: "Amazon.it" },
    { name: "Espagne", flag: "🇪🇸", link: "https://amzlink.to/az085o25FtlRd", domain: "Amazon.es" },
    { name: "Allemagne", flag: "🇩🇪", link: "https://amzlink.to/az00VtRPRGpmm", domain: "Amazon.de" },
    { name: "Canada", flag: "🇨🇦", link: "https://amzlink.to/az0MvN3FRKKQQ", domain: "Amazon.ca" },
    { name: "Inde", flag: "🇮🇳", link: "https://amzlink.to/az0GVe8b9O7cF", domain: "Amazon.in" },
    { name: "Pays-Bas", flag: "🇳🇱", link: "https://amzlink.to/az0G27sb8ZVbI", domain: "Amazon.nl" },
    { name: "Suède", flag: "🇸🇪", link: "https://amzlink.to/az0Ig0XgFkR8o", domain: "Amazon.se" },
    { name: "Singapour", flag: "🇸🇬", link: "https://amzlink.to/az0b3TpUdq32r", domain: "Amazon.sg" },
    { name: "Royaume-Uni", flag: "🇬🇧", link: "https://amzlink.to/az03r8CJgliMq", domain: "Amazon.co.uk" },
    { name: "Australie", flag: "🇦🇺", link: "https://amzlink.to/az05kTTrYJ06L", domain: "Amazon.com.au" },
    { name: "Belgique", flag: "🇧🇪", link: "https://amzlink.to/az08ZB76xWpGm", domain: "Amazon.com.be" },
    { name: "Brésil", flag: "🇧🇷", link: "https://amzlink.to/az0ymmoCLHvyA", domain: "Amazon.com.br" }
  ];

  // 12 BOUTIQUES INFLUENCEUR
  const influencerStores = [
    { name: "États-Unis", flag: "🇺🇸", link: "https://amzlink.to/az0G6w0uuYRlg", domain: "Amazon.com" },
    { name: "Italie", flag: "🇮🇹", link: "https://amzlink.to/az0yC7BiDQmPg", domain: "Amazon.it" },
    { name: "Espagne", flag: "🇪🇸", link: "https://amzlink.to/az0DKsP6Zr5IL", domain: "Amazon.es" },
    { name: "Allemagne", flag: "🇩🇪", link: "https://amzlink.to/az0PuGdrA0kgh", domain: "Amazon.de" },
    { name: "Canada", flag: "🇨🇦", link: "https://amzlink.to/az0YFa3j2fsnv", domain: "Amazon.ca" },
    { name: "Inde", flag: "🇮🇳", link: "https://amzlink.to/az0Qry9pNlCkw", domain: "Amazon.in" },
    { name: "Pays-Bas", flag: "🇳🇱", link: "https://amzlink.to/az0v9jdbSf7Km", domain: "Amazon.nl" },
    { name: "Suède", flag: "🇸🇪", link: "https://amzlink.to/az0Q5qEXfyqk5", domain: "Amazon.se" },
    { name: "Singapour", flag: "🇸🇬", link: "https://amzlink.to/az05gMuq73i99", domain: "Amazon.sg" },
    { name: "Royaume-Uni", flag: "🇬🇧", link: "https://amzlink.to/az0VutIAPP8MY", domain: "Amazon.co.uk" },
    { name: "Australie", flag: "🇦🇺", link: "https://amzlink.to/az0on91nKaQvh", domain: "Amazon.com.au" },
    { name: "Belgique", flag: "🇧🇪", link: "https://www.amazon.com.be/shop/influencer-fb942837", domain: "Amazon.com.be" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center border-4 border-blue-700">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-5xl">🌐</span>
            <h1 className="text-4xl font-bold text-purple-800">Reussitess® Global Nexus</h1>
          </div>
          <p className="text-gray-600 text-lg">Le Hub Central du Réseau Mondial</p>
        </div>

        {/* Bienvenue */}
        <div className="bg-white rounded-3xl shadow-xl p-6 border-2 border-blue-300">
          <h2 className="text-xl font-bold text-center text-blue-900 mb-3">
            Bienvenue au cœur du réseau Reussitess® Global.
          </h2>
          <p className="text-center text-gray-700">
            Ce hub central connecte nos 26 boutiques Amazon à travers 14 pays, offrant un accès unifié à notre écosystème mondial d'excellence et d'innovation.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-3xl shadow-lg p-6 text-center border-2 border-blue-200">
            <div className="text-6xl font-bold text-purple-700 mb-2">26</div>
            <div className="text-gray-700 font-semibold text-sm">Boutiques Amazon</div>
          </div>
          <div className="bg-white rounded-3xl shadow-lg p-6 text-center border-2 border-blue-200">
            <div className="text-6xl font-bold text-purple-700 mb-2">14</div>
            <div className="text-gray-700 font-semibold text-sm">Pays Connectés</div>
          </div>
          <div className="bg-white rounded-3xl shadow-lg p-6 text-center border-2 border-blue-200">
            <div className="text-6xl font-bold text-purple-700 mb-2">5</div>
            <div className="text-gray-700 font-semibold text-sm">Continents</div>
          </div>
          <div className="bg-white rounded-3xl shadow-lg p-6 text-center border-2 border-blue-200">
            <div className="text-6xl font-bold text-purple-700 mb-2">24/7</div>
            <div className="text-gray-700 font-semibold text-sm">Disponibilité</div>
          </div>
        </div>

        {/* Boutiques Personnelles */}
        <div className="bg-white rounded-3xl shadow-xl p-6 border-2 border-blue-300">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            🛍️ Boutiques Personnelles (14)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {personalStores.map((shop, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 shadow-md border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl">{shop.flag}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{shop.name}</h3>
                    <p className="text-xs text-gray-600">{shop.domain}</p>
                  </div>
                </div>
                <a 
                  href={shop.link} 
                  target="_blank" 
                  rel="nofollow sponsored"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-center py-2 px-3 rounded-lg transition text-sm"
                >
                  Visiter
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Boutiques Influenceur */}
        <div className="bg-white rounded-3xl shadow-xl p-6 border-2 border-purple-300">
          <h2 className="text-2xl font-bold text-purple-900 mb-6 text-center">
            ⭐ Boutiques Influenceur (12)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {influencerStores.map((shop, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-4 shadow-md border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl transition">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl">{shop.flag}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{shop.name}</h3>
                    <p className="text-xs text-gray-600">{shop.domain}</p>
                  </div>
                </div>
                <a 
                  href={shop.link} 
                  target="_blank" 
                  rel="nofollow sponsored"
                  className="block w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-center py-2 px-3 rounded-lg transition text-sm"
                >
                  Visiter
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white rounded-3xl shadow-xl p-6 text-center border-2 border-blue-300">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Reussitess® Global Nexus</h3>
          <p className="text-gray-600 mb-2">Hub Central du Réseau Mondial</p>
          <div className="flex items-center justify-center gap-2 text-green-600 mb-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-semibold">Connecté au réseau global - 26 boutiques actives</span>
          </div>
          <p className="text-gray-500 text-sm">© 2024 Tous droits réservés</p>
        </div>

      </div>
    </div>
  );
}
