'use client';

import React from 'react';
import { Globe, Home, BarChart3, Lock, FileText, ShoppingBag, Smartphone, Activity, BarChart, TestTube, TrendingUp } from 'lucide-react';

export default function NexusDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-purple-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Globe className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-800">Reussitess® Global Nexus</h1>
          </div>
          <p className="text-gray-600 text-lg">Le Hub Central du Réseau Mondial</p>
        </div>

        {/* Welcome Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Bienvenue au cœur du réseau Reussitess® Global.
          </h2>
          {/* CONTENU CORRIGÉ ET DÉTAILLÉ */}
          <p className="text-gray-700">
            Ce hub central connecte nos 26 boutiques Amazon à travers 14 pays (France, Angleterre, Italie, Allemagne, Suède, Singapour, Australie, Espagne, Brésil, Royaume-Uni, Inde, Nouvelle-Zélande, États-Unis, Canada), offrant un accès unifié à notre écosystème mondial d'excellence et d'innovation.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-5xl font-bold text-blue-600 mb-2">26</div>
            <div className="text-gray-600 font-medium">Boutiques Amazon</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-5xl font-bold text-purple-600 mb-2">14</div>
            <div className="text-gray-600 font-medium">Pays Connectés</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-5xl font-bold text-indigo-600 mb-2">5</div>
            <div className="text-gray-600 font-medium">Continents</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-5xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Disponibilité</div>
          </div>
        </div>

        {/* Quick Access Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Activity className="w-7 h-7 text-blue-600" />
            Accès Rapide au Réseau
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Page d'Accueil */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-md">
              <div className="flex justify-center mb-4">
                <Home className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Page d'Accueil</h3>
              <p className="text-sm text-gray-600 mb-4">
                Découvrez notre vitrine principale avec vue d'ensemble du réseau global
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition">
                Accéder
              </button>
            </div>

            {/* Tableau de Bord */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 shadow-md">
              <div className="flex justify-center mb-4">
                <BarChart3 className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Tableau de Bord</h3>
              <p className="text-sm text-gray-600 mb-4">
                Gérez et suivez vos activités sur notre plateforme sécurisée
              </p>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition">
                Accéder
              </button>
            </div>

            {/* Connexion */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 shadow-md">
              <div className="flex justify-center mb-4">
                <Lock className="w-12 h-12 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Connexion</h3>
              <p className="text-sm text-gray-600 mb-4">
                Accédez à votre espace personnel sécurisé
              </p>
              <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-lg transition">
                Se Connecter
              </button>
            </div>

            {/* Inscription */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 shadow-md">
              <div className="flex justify-center mb-4">
                <FileText className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Inscription</h3>
              <p className="text-sm text-gray-600 mb-4">
                Rejoignez le réseau Reussitess® Global
              </p>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition">
                S'inscrire
              </button>
            </div>
          </div>

          {/* Boutiques & App */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Boutiques Mondiales */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 shadow-md">
              <div className="flex justify-center mb-4">
                <ShoppingBag className="w-12 h-12 text-pink-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Boutiques Mondiales</h3>
              <p className="text-sm text-gray-600 mb-4">
                Explorez nos 26 boutiques Amazon dans 14 pays
              </p>
              <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition">
                Découvrir
              </button>
            </div>

            {/* Application PWA */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 shadow-md">
              <div className="flex justify-center mb-4">
                <Smartphone className="w-12 h-12 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Application PWA</h3>
              <p className="text-sm text-gray-600 mb-4">
                Installez notre app pour un accès hors ligne
              </p>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition">
                Installer
              </button>
            </div>
          </div>
        </div>

        {/* Actions Rapides */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Actions Rapides</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition">
              <Home className="w-5 h-5" />
              Accueil
            </button>
            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition">
              <BarChart className="w-5 h-5" />
              Dashboard
            </button>
            <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition">
              <TestTube className="w-5 h-5" />
              Test Connexion
            </button>
            <button className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition">
              <TrendingUp className="w-5 h-5" />
              Statistiques
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Reussitess® Global Nexus</h3>
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
