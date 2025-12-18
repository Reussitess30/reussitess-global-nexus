import Layout from "../../../components/Layout";

export default function Bresil() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-8xl mb-4">🇧🇷</div>
            <h1 className="text-5xl font-bold text-green-900 mb-4">Brésil</h1>
            <div className="flex justify-center gap-8 text-lg">
              <div>
                <span className="font-semibold">Capitale:</span> Brasília
              </div>
              <div>
                <span className="font-semibold">Population:</span> 215 millions
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              🏛️ Patrimoine UNESCO (23 sites)
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-xl">
                <h3 className="font-bold text-green-900 mb-2">
                  🗿 Rio de Janeiro
                </h3>
                <p className="text-gray-700">
                  Christ Rédempteur - Pain de Sucre - Paysages culturels
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-xl">
                <h3 className="font-bold text-green-900 mb-2">🌳 Amazonie</h3>
                <p className="text-gray-700">
                  Plus grande forêt tropicale monde - Poumon planète
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-xl">
                <h3 className="font-bold text-green-900 mb-2">
                  💧 Chutes Iguaçu
                </h3>
                <p className="text-gray-700">
                  275 cascades spectaculaires - Merveille naturelle
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-xl">
                <h3 className="font-bold text-green-900 mb-2">🎉 Carnaval</h3>
                <p className="text-gray-700">
                  Plus grande fête monde - Samba Rio
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/bibliotheque"
              className="inline-block bg-gradient-to-r from-green-600 to-yellow-600 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition text-lg"
            >
              ← Retour Bibliothèque
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
