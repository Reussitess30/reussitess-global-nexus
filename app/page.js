'use client';

export default function NexusDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header avec bordure bleue */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center" style={{border: '4px solid #1e40af'}}>
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-5xl">🌐</span>
            <h1 className="text-4xl font-bold" style={{color: '#5b21b6'}}>Reussitess® Global Nexus</h1>
          </div>
          <p className="text-gray-600 text-lg">Le Hub Central du Réseau Mondial</p>
        </div>

        {/* Bienvenue avec bordure arrondie */}
        <div className="bg-white rounded-3xl shadow-xl p-6" style={{border: '3px solid #93c5fd'}}>
          <h2 className="text-xl font-bold text-center mb-3" style={{color: '#1e3a8a'}}>
            Bienvenue au cœur du réseau Reussitess® Global.
          </h2>
          <p className="text-center text-gray-700">
            Ce hub central connecte nos 26 boutiques Amazon à travers 14 pays, offrant un accès unifié à notre écosystème mondial d'excellence et d'innovation.
          </p>
        </div>

        {/* Stats avec bordures */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-3xl shadow-lg p-6 text-center" style={{border: '3px solid #dbeafe'}}>
            <div className="text-6xl font-bold mb-2" style={{color: '#5b21b6'}}>26</div>
            <div className="text-gray-700 font-semibold text-sm">Boutiques Amazon</div>
          </div>
          <div className="bg-white rounded-3xl shadow-lg p-6 text-center" style={{border: '3px solid #dbeafe'}}>
            <div className="text-6xl font-bold mb-2" style={{color: '#5b21b6'}}>14</div>
            <div className="text-gray-700 font-semibold text-sm">Pays Connectés</div>
          </div>
          <div className="bg-white rounded-3xl shadow-lg p-6 text-center" style={{border: '3px solid #dbeafe'}}>
            <div className="text-6xl font-bold mb-2" style={{color: '#5b21b6'}}>5</div>
            <div className="text-gray-700 font-semibold text-sm">Continents</div>
          </div>
          <div className="bg-white rounded-3xl shadow-lg p-6 text-center" style={{border: '3px solid #dbeafe'}}>
            <div className="text-6xl font-bold mb-2" style={{color: '#5b21b6'}}>24/7</div>
            <div className="text-gray-700 font-semibold text-sm">Disponibilité</div>
          </div>
        </div>

        {/* Accès Rapide */}
        <div className="bg-white rounded-3xl shadow-xl p-6" style={{border: '3px solid #93c5fd'}}>
          <h2 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2" style={{color: '#1e3a8a'}}>
            <span className="text-3xl">🔗</span>
            Accès Rapide au Réseau
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-3xl p-6 shadow-md" style={{border: '2px solid #e5e7eb'}}>
              <div className="flex justify-center mb-4">
                <span className="text-6xl">🏠</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Page d'Accueil</h3>
              <p className="text-sm text-gray-600 mb-4 text-center">
                Découvrez notre vitrine principale avec vue d'ensemble du réseau global
              </p>
              <button className="w-full text-white font-bold py-2 px-4 rounded-lg transition" style={{backgroundColor: '#6b21a8'}}>
                Accéder
              </button>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-md" style={{border: '2px solid #e5e7eb'}}>
              <div className="flex justify-center mb-4">
                <span className="text-6xl">📊</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Tableau de Bord</h3>
              <p className="text-sm text-gray-600 mb-4 text-center">
                Gérez et suivez vos activités sur notre plateforme sécurisée
              </p>
              <button className="w-full text-white font-bold py-2 px-4 rounded-lg transition" style={{backgroundColor: '#6b21a8'}}>
                Accéder
              </button>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-md" style={{border: '2px solid #e5e7eb'}}>
              <div className="flex justify-center mb-4">
                <span className="text-6xl">🔐</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Connexion</h3>
              <p className="text-sm text-gray-600 mb-4 text-center">
                Accédez à votre espace personnel sécurisé
              </p>
              <button className="w-full text-white font-bold py-2 px-4 rounded-lg transition" style={{backgroundColor: '#6b21a8'}}>
                Se Connecter
              </button>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-md" style={{border: '2px solid #e5e7eb'}}>
              <div className="flex justify-center mb-4">
                <span className="text-6xl">📝</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Inscription</h3>
              <p className="text-sm text-gray-600 mb-4 text-center">
                Rejoignez le réseau Reussitess® Global
              </p>
              <button className="w-full text-white font-bold py-2 px-4 rounded-lg transition" style={{backgroundColor: '#6b21a8'}}>
                S'inscrire
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-3xl p-6 shadow-md" style={{border: '2px solid #e5e7eb'}}>
              <div className="flex justify-center mb-4">
                <span className="text-6xl">🛍️</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Boutiques Mondiales</h3>
              <p className="text-sm text-gray-600 mb-4 text-center">
                Explorez nos 26 boutiques Amazon dans 14 pays
              </p>
              <button className="w-full text-white font-bold py-2 px-4 rounded-lg transition" style={{backgroundColor: '#6b21a8'}}>
                Découvrir
              </button>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-md" style={{border: '2px solid #e5e7eb'}}>
              <div className="flex justify-center mb-4">
                <span className="text-6xl">📱</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Application PWA</h3>
              <p className="text-sm text-gray-600 mb-4 text-center">
                Installez notre app pour un accès hors ligne
              </p>
              <button className="w-full text-white font-bold py-2 px-4 rounded-lg transition" style={{backgroundColor: '#6b21a8'}}>
                Installer
              </button>
            </div>
          </div>
        </div>

        {/* Actions Rapides */}
        <div className="bg-white rounded-3xl shadow-xl p-6" style={{border: '3px solid #93c5fd'}}>
          <h2 className="text-2xl font-bold mb-6 text-center" style={{color: '#1e3a8a'}}>Actions Rapides</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 text-white font-bold py-3 px-6 rounded-full shadow-lg transition" style={{backgroundColor: '#6b21a8'}}>
              <span>🏠</span> Accueil
            </button>
            <button className="flex items-center gap-2 text-white font-bold py-3 px-6 rounded-full shadow-lg transition" style={{backgroundColor: '#3b82f6'}}>
              <span>📊</span> Dashboard
            </button>
            <button className="flex items-center gap-2 text-white font-bold py-3 px-6 rounded-full shadow-lg transition" style={{backgroundColor: '#6b21a8'}}>
              <span>🔧</span> Test Connexion
            </button>
            <button className="flex items-center gap-2 text-white font-bold py-3 px-6 rounded-full shadow-lg transition" style={{backgroundColor: '#6b21a8'}}>
              <span>📈</span> Statistiques
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white rounded-3xl shadow-xl p-6 text-center" style={{border: '3px solid #93c5fd'}}>
          <h3 className="text-xl font-bold mb-2" style={{color: '#1e3a8a'}}>Reussitess® Global Nexus</h3>
          <p className="text-gray-600 mb-2">Hub Central du Réseau Mondial</p>
          <div className="flex items-center justify-center gap-2 text-green-600 mb-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-semibold">Connecté au réseau global</span>
          </div>
          <p className="text-gray-500 text-sm">© 2024 Tous droits réservés</p>
        </div>

      </div>
    </div>
  );
}
