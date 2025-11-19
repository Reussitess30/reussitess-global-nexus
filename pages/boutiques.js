import Layout from '../components/Layout'
import Head from 'next/head'

export default function Boutiques() {
  // Boutiques personnelles (14 pays)
  const boutiquesPersonnelles = [
    { flag: '🇺🇸', name: 'United States', link: 'https://amzlink.to/az0LY0DXMG6dR' },
    { flag: '🇫🇷', name: 'France', link: 'https://amzlink.to/az0RLMqtXqC2d' },
    { flag: '🇮🇹', name: 'Italia', link: 'https://amzlink.to/az0tV67jW36S7' },
    { flag: '🇪🇸', name: 'España', link: 'https://amzlink.to/az085o25FtlRd' },
    { flag: '🇩🇪', name: 'Deutschland', link: 'https://amzlink.to/az00VtRPRGpmm' },
    { flag: '🇨🇦', name: 'Canada', link: 'https://amzlink.to/az0MvN3FRKKQQ' },
    { flag: '🇮🇳', name: 'भारत', link: 'https://amzlink.to/az0GVe8b9O7cF' },
    { flag: '🇳🇱', name: 'Nederland', link: 'https://amzlink.to/az0G27sb8ZVbI' },
    { flag: '🇸🇪', name: 'Sverige', link: 'https://amzlink.to/az0Ig0XgFkR8o' },
    { flag: '🇸🇬', name: 'Singapore', link: 'https://amzlink.to/az0b3TpUdq32r' },
    { flag: '🇬🇧', name: 'United Kingdom', link: 'https://amzlink.to/az03r8CJgliMq' },
    { flag: '🇦🇺', name: 'Australia', link: 'https://amzlink.to/az05kTTrYJ06L' },
    { flag: '🇧🇪', name: 'België/Belgique', link: 'https://amzlink.to/az08ZB76xWpGm' },
    { flag: '🇧🇷', name: 'Brasil', link: 'https://amzlink.to/az0ymmoCLHvyA' }
  ]

  // Boutiques influenceur (12 pays)
  const boutiquesInfluenceur = [
    { flag: '🇺🇸', name: 'USA', link: 'https://amzlink.to/az0G6w0uuYRlg' },
    { flag: '🇮🇹', name: 'Italia', link: 'https://amzlink.to/az0yC7BiDQmPg' },
    { flag: '🇪🇸', name: 'España', link: 'https://amzlink.to/az0DKsP6Zr5IL' },
    { flag: '🇩🇪', name: 'Deutschland', link: 'https://amzlink.to/az0PuGdrA0kgh' },
    { flag: '🇨🇦', name: 'Canada', link: 'https://amzlink.to/az0YFa3j2fsnv' },
    { flag: '🇮🇳', name: 'India', link: 'https://amzlink.to/az0Qry9pNlCkw' },
    { flag: '🇳🇱', name: 'Nederland', link: 'https://amzlink.to/az0v9jdbSf7Km' },
    { flag: '🇸🇪', name: 'Sverige', link: 'https://amzlink.to/az0Q5qEXfyqk5' },
    { flag: '🇸🇬', name: 'Singapore', link: 'https://amzlink.to/az05gMuq73i99' },
    { flag: '🇬🇧', name: 'UK', link: 'https://amzlink.to/az0VutIAPP8MY' },
    { flag: '🇦🇺', name: 'Australia', link: 'https://amzlink.to/az0on91nKaQvh' },
    { flag: '🇧🇪', name: 'Belgique', link: 'https://www.amazon.com.be/shop/influencer-fb942837' }
  ]

  return (
    <Layout>
      <Head>
        <title>🌍 Les 26 Boutiques Amazon Reussitess®</title>
        <meta name="description" content="Accédez à nos 26 boutiques Amazon réparties dans 14 pays - 14 boutiques personnelles et 12 boutiques influenceur" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              🌍 Les 26 Boutiques Amazon Reussitess®
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Découvrez nos boutiques réparties dans 14 pays
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <div className="text-3xl font-bold text-blue-400">26</div>
                <div className="text-sm text-gray-300">Boutiques</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <div className="text-3xl font-bold text-purple-400">14</div>
                <div className="text-sm text-gray-300">Pays</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                <div className="text-3xl font-bold text-pink-400">5</div>
                <div className="text-sm text-gray-300">Continents</div>
              </div>
            </div>
          </div>

          {/* Boutiques Personnelles Section */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Boutiques Personnelles
              </h2>
              <p className="text-blue-300 text-lg">14 boutiques dans 14 pays</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {boutiquesPersonnelles.map((boutique, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 hover:border-blue-400 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4">{boutique.flag}</div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {boutique.name}
                    </h3>
                    <a
                      href={boutique.link}
                      target="_blank"
                      rel="noopener noreferrer nofollow sponsored"
                      className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
                    >
                      🛍️ Accéder
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Boutiques Influenceur Section */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Boutiques Influenceur
              </h2>
              <p className="text-pink-300 text-lg">12 boutiques dans 12 pays</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {boutiquesInfluenceur.map((boutique, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30 hover:border-pink-400 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20"
                >
                  <div className="text-center">
                    <div className="text-6xl mb-4">{boutique.flag}</div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {boutique.name}
                    </h3>
                    <a
                      href={boutique.link}
                      target="_blank"
                      rel="noopener noreferrer nofollow sponsored"
                      className="block w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/50"
                    >
                      🛍️ Accéder
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Info Section */}
          <section className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                💡 Comment ça fonctionne ?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div>
                  <div className="text-5xl mb-3">🌍</div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-2">Choisissez</h4>
                  <p className="text-gray-300">Sélectionnez la boutique de votre pays</p>
                </div>
                <div>
                  <div className="text-5xl mb-3">🛍️</div>
                  <h4 className="text-xl font-semibold text-purple-400 mb-2">Achetez</h4>
                  <p className="text-gray-300">Faites vos achats comme d&apos;habitude</p>
                </div>
                <div>
                  <div className="text-5xl mb-3">💰</div>
                  <h4 className="text-xl font-semibold text-pink-400 mb-2">Soutenez</h4>
                  <p className="text-gray-300">Vous nous soutenez via l&apos;affiliation</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}
