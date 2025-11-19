import Layout from '../components/Layout'
import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Boutiques() {
  const [visitorCount, setVisitorCount] = useState(0)

  // Increment visitor counter on page load
  useEffect(() => {
    const currentCount = parseInt(localStorage.getItem('boutiquesVisitors') || '0', 10)
    const newCount = currentCount + 1
    localStorage.setItem('boutiquesVisitors', newCount.toString())
    setVisitorCount(newCount)
  }, [])

  // Boutiques personnelles (14 pays)
  const boutiquesPersonnelles = [
    { flag: '🇺🇸', name: 'United States', link: 'https://www.amazon.com/shop/amourguadeloupe' },
    { flag: '🇮🇹', name: 'Italia', link: 'https://www.amazon.it/shop/amourguadeloupe' },
    { flag: '🇫🇷', name: 'France', link: 'https://www.amazon.fr/shop/amourguadeloupe' },
    { flag: '🇪🇸', name: 'España', link: 'https://www.amazon.es/shop/amourguadeloupe' },
    { flag: '🇩🇪', name: 'Deutschland', link: 'https://www.amazon.de/shop/amourguadeloupe' },
    { flag: '🇨🇦', name: 'Canada', link: 'https://www.amazon.ca/shop/amourguadeloupe' },
    { flag: '🇮🇳', name: 'भारत', link: 'https://www.amazon.in/shop/amourguadeloupe' },
    { flag: '🇳🇱', name: 'Nederland', link: 'https://www.amazon.nl/shop/amourguadeloupe' },
    { flag: '🇸🇪', name: 'Sverige', link: 'https://www.amazon.se/shop/amourguadeloupe' },
    { flag: '🇸🇬', name: 'Singapore', link: 'https://www.amazon.sg/shop/amourguadeloupe' },
    { flag: '🇬🇧', name: 'United Kingdom', link: 'https://www.amazon.co.uk/shop/amourguadeloupe' },
    { flag: '🇦🇺', name: 'Australia', link: 'https://www.amazon.com.au/shop/amourguadeloupe' },
    { flag: '🇧🇪', name: 'België/Belgique', link: 'https://www.amazon.com.be/shop/amourguadeloupe' },
    { flag: '🇧🇷', name: 'Brasil', link: 'https://www.amazon.com.br/shop/amourguadeloupe' }
  ]

  // Boutiques influenceur (12 pays)
  const boutiquesInfluenceur = [
    { flag: '🇺🇸', name: 'USA', link: 'https://www.amazon.com/shop/influencer-fb942837' },
    { flag: '🇮🇹', name: 'Italia', link: 'https://www.amazon.it/shop/influencer-fb942837' },
    { flag: '🇪🇸', name: 'España', link: 'https://www.amazon.es/shop/influencer-fb942837' },
    { flag: '🇩🇪', name: 'Deutschland', link: 'https://www.amazon.de/shop/influencer-fb942837' },
    { flag: '🇨🇦', name: 'Canada', link: 'https://www.amazon.ca/shop/influencer-fb942837' },
    { flag: '🇮🇳', name: 'India', link: 'https://www.amazon.in/shop/influencer-fb942837' },
    { flag: '🇳🇱', name: 'Nederland', link: 'https://www.amazon.nl/shop/influencer-fb942837' },
    { flag: '🇸🇪', name: 'Sverige', link: 'https://www.amazon.se/shop/influencer-fb942837' },
    { flag: '🇸🇬', name: 'Singapore', link: 'https://www.amazon.sg/shop/influencer-fb942837' },
    { flag: '🇬🇧', name: 'UK', link: 'https://www.amazon.co.uk/shop/influencer-fb942837' },
    { flag: '🇦🇺', name: 'Australia', link: 'https://www.amazon.com.au/shop/influencer-fb942837' },
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
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-green-400/20 hover:border-green-400 transition-colors">
                <div className="text-3xl font-bold text-green-400">{visitorCount.toLocaleString()}</div>
                <div className="text-sm text-gray-300">👥 Visiteurs</div>
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

          {/* CTA Devenir Influenceur */}
          <section className="mt-16">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center shadow-2xl border border-purple-400/30">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  💼 Devenez Influenceur Amazon Reussitess®
                </h3>
                <p className="text-white/90 mb-6 text-lg md:text-xl">
                  Rejoignez notre programme d&apos;affiliation et gagnez des commissions sur vos recommandations de produits Amazon
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="/affiliation"
                    className="inline-block bg-white text-purple-600 font-bold py-4 px-8 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    🚀 Rejoindre le programme
                  </a>
                  <a 
                    href="/contact"
                    className="inline-block bg-purple-800/50 text-white font-semibold py-4 px-8 rounded-lg hover:bg-purple-800 transition-all duration-300 border border-white/30"
                  >
                    💬 En savoir plus
                  </a>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-white/80 text-sm">
                  <div>
                    <div className="text-2xl font-bold text-white">4-10%</div>
                    <div>Commission par vente</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">14</div>
                    <div>Pays disponibles</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div>Support dédié</div>
                  </div>
                </div>
              </div>
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
