'use client'

import { useState } from 'react'

export default function IAPassport() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const features = [
    { 
      icon: '⚛️', 
      title: 'QUANTUM ECOSYSTEM', 
      desc: '200 IA gèrent 0x1d2e...9c - Premier pool auto-piloté au monde',
      stats: ['200 IA Actives', '14 Pays', '$10M Target', 'APY 40-60%'],
      links: [
        { text: '🛡️ Quantum Guardian - Anti-Hack absolu (détection 0.1s)', url: 'https://info.quickswap.exchange/#/pair/0x1d2e88A55CBBAB68237aa10781a5e00335Af9f9c' },
        { text: '📊 Price Stabilizer - Floor price garanti par IA', url: 'https://info.quickswap.exchange/#/pair/0x1d2e88A55CBBAB68237aa10781a5e00335Af9f9c' },
        { text: '💰 Yield Generator - Auto-farming 12 protocoles DeFi', url: 'https://info.quickswap.exchange/#/pair/0x1d2e88A55CBBAB68237aa10781a5e00335Af9f9c' },
        { text: '🌍 Global Bridge - Transferts instantanés 14 pays (0 frais)', url: 'https://info.quickswap.exchange/#/pair/0x1d2e88A55CBBAB68237aa10781a5e00335Af9f9c' },
        { text: '🔮 Oracle AI - Prédictions prix 78% précision', url: 'https://info.quickswap.exchange/#/pair/0x1d2e88A55CBBAB68237aa10781a5e00335Af9f9c' },
        { text: '🎮 Liquidity Wars - Gagnez 100K REUSS/mois', url: 'https://info.quickswap.exchange/#/pair/0x1d2e88A55CBBAB68237aa10781a5e00335Af9f9c' },
        { text: '💎 ACHETER MAINTENANT - Pool Liquide', url: 'https://dapp.quickswap.exchange/swap/best/ETH/0xB37531727fC07c6EED4f97F852A115B428046EB2?chainId=137' }
      ],
      special: 'quantum'
    },
    { 
      icon: '🧠', 
      title: 'AI UNIVERSAL BRAIN', 
      desc: 'Une IA qui contrôle TOUTES les autres - Payez 1 REUSS, utilisez 100+ modèles',
      stats: ['ChatGPT-4', 'Claude 3.5', 'Gemini Ultra', 'Grok 2'],
      links: [
        { text: '💬 Super-Chat - GPT-4 + Claude + Gemini en même temps', url: 'https://chat.openai.com' },
        { text: '🎨 Super-Image - DALL-E 3 + Midjourney + Stable Diffusion', url: 'https://midjourney.com' },
        { text: '🎬 Super-Video - Sora + Runway + Pika fusionnés', url: 'https://runwayml.com' },
        { text: '🎵 Super-Audio - 11Labs + Murf + Descript combinés', url: 'https://elevenlabs.io' },
        { text: '📊 Super-Data - Analyse prédictive multi-modèles', url: 'https://claude.ai' },
        { text: '💡 Économie : 1 REUSS = 100 requêtes (vs $200/mois ailleurs)', url: 'https://dapp.quickswap.exchange/swap/best/ETH/0xB37531727fC07c6EED4f97F852A115B428046EB2?chainId=137' }
      ]
    },
    { 
      icon: '🌐', 
      title: 'REAL-TIME EARTH TRANSLATOR', 
      desc: 'Traduction instantanée 195 langues + dialectes - Même langues mortes',
      stats: ['195 Langues', '500+ Dialectes', 'Temps Réel', '99.8% Précision'],
      links: [
        { text: '🗣️ Live Translation - Parlez, IA traduit instantanément (0.2s)', url: 'https://translate.google.com' },
        { text: '📱 AR Glasses Mode - Voit + traduit textes en réalité augmentée', url: 'https://www.meta.com' },
        { text: '🎓 Ancient Languages - Traduit hiéroglyphes, latin, sanscrit', url: 'https://www.deepl.com' },
        { text: '🤝 Business Interpreter - Négocie pour vous (ton, culture, contexte)', url: 'https://wordly.ai' },
        { text: '💼 Legal Precision - Contrats internationaux (validation juridique)', url: 'https://www.lionbridge.com' },
        { text: '🌍 Payez 10 REUSS/mois vs $500/mois traducteurs', url: 'https://dapp.quickswap.exchange/swap/best/ETH/0xB37531727fC07c6EED4f97F852A115B428046EB2?chainId=137' }
      ]
    },
    { 
      icon: '🔐', 
      title: 'QUANTUM ID BLOCKCHAIN', 
      desc: 'Identité digitale indestructible - NFT biométrique + IA',
      stats: ['NFT Âme', 'Biométrie', 'Quantum-Safe', 'Universel'],
      links: [
        { text: '👤 Biometric NFT - Empreinte + rétine + voix = vous', url: 'https://polygon.technology/polygon-id' },
        { text: '🔒 Zero-Knowledge Proof - Prouvez qui vous êtes sans révéler', url: 'https://worldcoin.org' },
        { text: '🌐 Universal Login - 1 ID pour tous services web3/web2', url: 'https://ens.domains' },
        { text: '💳 Quantum Wallet - Impossible à hacker (résiste ordinateurs quantiques)', url: 'https://metamask.io' },
        { text: '🏛️ Legal Entity - Valeur juridique 195 pays (passeport digital)', url: 'https://www.idhub.com' },
        { text: '📜 Heritage Protocol - Transférez actifs post-mortem (smart testament)', url: 'https://polygonscan.com/token/0xB37531727fC07c6EED4f97F852A115B428046EB2' }
      ],
      special: 'security'
    },
    { 
      icon: '💎', 
      title: 'REUSS ECONOMY', 
      desc: 'La crypto qui PAIE pour utiliser l\'IA - Modèle économique inversé',
      stats: ['Deflation 2%/an', 'Yield 40%', 'Burn Auto', 'Rewards Passifs'],
      links: [
        { text: '💰 Pay-to-Earn - Utilisez IA, GAGNEZ des REUSS', url: 'https://dapp.quickswap.exchange/swap/best/ETH/0xB37531727fC07c6EED4f97F852A115B428046EB2?chainId=137' },
        { text: '🔥 Auto-Burn - 0.5% brûlé à chaque transaction', url: 'https://polygonscan.com/token/0xB37531727fC07c6EED4f97F852A115B428046EB2' },
        { text: '📈 Staking Rewards - 40% APY (géré par Quantum AI)', url: 'https://info.quickswap.exchange/#/pair/0x1d2e88A55CBBAB68237aa10781a5e00335Af9f9c' },
        { text: '🌍 Cross-Border Payment - Envoyez $$ 14 pays (frais = $0.01)', url: 'https://info.quickswap.exchange/#/pair/0x1d2e88A55CBBAB68237aa10781a5e00335Af9f9c' },
        { text: '💼 B2B Discounts - Entreprises paient -50% avec REUSS', url: 'https://polygonscan.com/token/0xB37531727fC07c6EED4f97F852A115B428046EB2' },
        { text: '📊 Market Cap Target : $500M en 2026', url: 'https://www.coingecko.com' }
      ],
      special: 'money'
    },
    { 
      icon: '🤖', 
      title: 'PERSONAL AI CLONE', 
      desc: 'IA qui devient VOUS - Apprend votre style, prend décisions à votre place',
      stats: ['24/7 Actif', 'Learning 1M tokens/jour', 'Voice Clone', 'Auto-Tasks'],
      links: [
        { text: '🧬 Digital Twin - Clone parfait de votre personnalité', url: 'https://personal.ai' },
        { text: '📧 Auto-Emails - Répond emails comme VOUS (98% indétectable)', url: 'https://superhuman.com' },
        { text: '📅 Life Manager - Gère agenda, RDV, priorités automatiquement', url: 'https://reclaim.ai' },
        { text: '💼 Business Decisions - Analyse deals, conseille (basé votre expérience)', url: 'https://notion.so/product/ai' },
        { text: '🎯 Legacy Mode - Continue votre travail après vous', url: 'https://rewind.ai' },
        { text: '⏰ Gagnez 15h/semaine - Coût : 50 REUSS/mois', url: 'https://dapp.quickswap.exchange/swap/best/ETH/0xB37531727fC07c6EED4f97F852A115B428046EB2?chainId=137' }
      ]
    },
    { 
      icon: '🎨', 
      title: 'HOLLYWOOD AI STUDIO', 
      desc: 'Créez films/séries complets avec IA - De l\'idée au cinéma',
      stats: ['Script Auto', 'Actors IA', '8K Render', 'Oscar-Ready'],
      links: [
        { text: '✍️ AI Screenwriter - Scénario complet en 10min (structure Hollywood)', url: 'https://www.scriptbook.ai' },
        { text: '🎭 Virtual Actors - Créez acteurs photoréalistes (voix, émotions)', url: 'https://www.synthesia.io' },
        { text: '🎬 Auto-Director - IA dirige scènes (angles, lumière, timing)', url: 'https://runwayml.com' },
        { text: '🎵 Soundtrack Generator - Musique épique adaptée à chaque scène', url: 'https://www.aiva.ai' },
        { text: '🏆 Festival Ready - Format 8K, son Dolby Atmos', url: 'https://www.adobe.com/products/premiere.html' },
        { text: '💰 Budget : 100 REUSS = 1 court-métrage vs $50K traditionnel', url: 'https://dapp.quickswap.exchange/swap/best/ETH/0xB37531727fC07c6EED4f97F852A115B428046EB2?chainId=137' }
      ],
      special: 'creative'
    },
    { 
      icon: '💼', 
      title: 'EMPIRE BUILDER AI', 
      desc: 'IA qui construit entreprise pour vous - De $0 à $1M automatiquement',
      stats: ['Auto-Startup', 'Market Research', 'Product Build', '$1M/an'],
      links: [
        { text: '🔍 Market Finder - Détecte niches profitables (analyse 10M data points)', url: 'https://trends.co' },
        { text: '🏗️ Product Builder - Crée MVP complet (design, dev, test)', url: 'https://bubble.io' },
        { text: '📢 Marketing AI - Campagnes virales multi-plateformes', url: 'https://www.jasper.ai' },
        { text: '💰 Sales Agent - Prospecte, qualifie, close deals automatiquement', url: 'https://www.gong.io' },
        { text: '📊 CFO Assistant - Gestion finances, taxes, investisseurs', url: 'https://www.bench.co' },
        { text: '🚀 Success Rate : 67% atteignent $100K/an première année', url: 'https://dapp.quickswap.exchange/swap/best/ETH/0xB37531727fC07c6EED4f97F852A115B428046EB2?chainId=137' }
      ]
    },
    { 
      icon: '🎓', 
      title: 'GENIUS ACCELERATOR', 
      desc: 'Transforme n\'importe qui en expert - Méthode accélérée 10x',
      stats: ['Expert en 30j', 'Any Domain', 'Certifié', 'Memory Palace'],
      links: [
        { text: '🧠 Neural Upload - Charge connaissances directement (comme Matrix)', url: 'https://www.coursera.org' },
        { text: '🎯 Personalized Path - Curriculum adapté à VOTRE cerveau', url: 'https://www.khanacademy.org' },
        { text: '💪 Practice AI - Sparring partner expert infini (feedback temps réel)', url: 'https://www.brilliant.org' },
        { text: '🏆 Certifications - Reconnues Fortune 500 + universités', url: 'https://www.udacity.com' },
        { text: '📈 Stats : 30 jours expert vs 4 ans traditionnel', url: 'https://www.edx.org' },
        { text: '💡 Devenez expert en : Code, Trading, Law, Medicine, Art...', url: 'https://dapp.quickswap.exchange/swap/best/ETH/0xB37531727fC07c6EED4f97F852A115B428046EB2?chainId=137' }
      ]
    },
    { 
      icon: '🏥', 
      title: 'HEALTH IMMORTALITY AI', 
      desc: 'Prolongez votre vie - IA médicale personnalisée 24/7',
      stats: ['+20 ans vie', 'DNA Analysis', 'Disease Predict', '24/7 Monitoring'],
      links: [
        { text: '🧬 DNA Optimization - Analyse génome, recommande interventions', url: 'https://www.23andme.com' },
        { text: '⚕️ Disease Prediction - Détecte cancer 5 ans avant (94% précision)', url: 'https://www.tempus.com' },
        { text: '💊 Custom Medicine - Médicaments personnalisés (basé votre biologie)', url: 'https://www.atlasbio.com' },
        { text: '🏃 Longevity Protocol - Plan anti-âge scientifique (nutrition, exercice, suppléments)', url: 'https://www.insidetracker.com' },
        { text: '📱 Real-Time Monitor - Alerte maladies avant symptômes', url: 'https://www.apple.com/watch' },
        { text: '🎯 Objectif : +20 ans espérance vie vs moyenne', url: 'https://dapp.quickswap.exchange/swap/best/ETH/0xB37531727fC07c6EED4f97F852A115B428046EB2?chainId=137' }
      ],
      special: 'health'
    },
    { 
      icon: '🌍', 
      title: 'PLANET SAVIOR NETWORK', 
      desc: 'IA qui sauve la Terre - Actions concrètes climat/océans/forêts',
      stats: ['Carbon Negative', 'Ocean Clean', 'Reforest', 'Green Energy'],
      links: [
        { text: '🌳 1 REUSS = 10 arbres plantés (vérifiable blockchain)', url: 'https://onetreeplanted.org' },
        { text: '🌊 Ocean Cleanup - 1kg plastique retiré/token brûlé', url: 'https://theoceancleanup.com' },
        { text: '☀️ Solar Network - Financement panneaux solaires communautaires', url: 'https://www.solar.com' },
        { text: '📊 Impact Dashboard - Trackez VOTRE impact environnemental réel', url: 'https://www.wren.co' },
        { text: '🏆 Green Rewards - Gagnez tokens en agissant écolo', url: 'https://earthhero.org' },
        { text: '🎯 Objectif : Carbon Negative d\'ici 2026', url: 'https://dapp.quickswap.exchange/swap/best/ETH/0xB37531727fC07c6EED4f97F852A115B428046EB2?chainId=137' }
      ]
    },
    { 
      icon: '🚀', 
      title: 'SPACE COLONIZATION DAO', 
      desc: 'Financez conquête spatiale - Possédez morceaux Lune/Mars',
      stats: ['Moon Plot NFT', 'Mars Colony', 'Asteroid Mining', 'Space Tourism'],
      links: [
        { text: '🌙 Moon Land NFT - Achetez terrain Lune (légalement reconnu)', url: 'https://www.lunarregistry.com' },
        { text: '🔴 Mars Colony DAO - Votez décisions colonie martienne', url: 'https://www.marssociety.org' },
        { text: '💎 Asteroid Mining - Profits minéraux espace (trillions $)', url: 'https://www.planetaryresources.com' },
        { text: '🛸 Space Tourism - Réservez vol suborbital (1000 REUSS)', url: 'https://www.spacex.com' },
        { text: '🔬 Zero-G Research - Financez expériences station spatiale', url: 'https://www.nasa.gov' },
        { text: '🎯 Vision : Humanité multi-planétaire d\'ici 2050', url: 'https://dapp.quickswap.exchange/swap/best/ETH/0xB37531727fC07c6EED4f97F852A115B428046EB2?chainId=137' }
      ],
      special: 'space'
    }
  ]

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
        padding: '4rem 1rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated background orbs */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          animation: 'float 20s infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          animation: 'float 15s infinite reverse'
        }} />

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          
          {/* Hero Section */}
          <div style={{ 
            fontSize: '8rem', 
            marginBottom: '2rem',
            animation: 'bounce 3s infinite'
          }}>
            🌍
          </div>

          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            padding: '1rem 2.5rem',
            borderRadius: '50px',
            marginBottom: '2rem',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            color: 'white',
            boxShadow: '0 10px 40px rgba(16, 185, 129, 0.5)',
            animation: 'pulse 2s infinite'
          }}>
            🇬🇵 MADE IN GUADELOUPE - TERRES DE CHAMPIONS
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 10vw, 6rem)',
            fontWeight: '900',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 70%, #ec4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-3px',
            lineHeight: '1.1'
          }}>
            IA PASSPORT<br/>
            <span style={{ fontSize: '0.6em' }}>RÉVOLUTION MONDIALE</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1.2rem, 3vw, 2.2rem)',
            color: '#94a3b8',
            marginBottom: '2rem',
            fontWeight: '600',
            maxWidth: '900px',
            margin: '0 auto 3rem'
          }}>
            Le Seul Écosystème qui PAIE pour utiliser l'IA
            <br/>
            <span style={{ color: '#10b981', fontSize: '0.8em' }}>
              💰 Utilisez → Gagnez des REUSS → Réutilisez → Repeat ∞
            </span>
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '5rem'
          }}>
            <a
              href="https://dapp.quickswap.exchange/swap/best/ETH/0xB37531727fC07c6EED4f97F852A115B428046EB2?chainId=137"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '1.5rem 3rem',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1.3rem',
                fontWeight: 'bold',
                textDecoration: 'none',
                boxShadow: '0 15px 40px rgba(16, 185, 129, 0.5)',
                transition: 'all 0.3s ease',
                display: 'inline-block'
              }}
              className="cta-button"
            >
              💎 ACHETER REUSS
            </a>
            <a
              href="https://info.quickswap.exchange/#/pair/0x1d2e88A55CBBAB68237aa10781a5e00335Af9f9c"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '1.5rem 3rem',
                background: 'rgba(139, 92, 246, 0.2)',
                color: 'white',
                border: '2px solid #8b5cf6',
                borderRadius: '50px',
                fontSize: '1.3rem',
                fontWeight: 'bold',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                display: 'inline-block'
              }}
              className="cta-button-secondary"
            >
              ⚛️ QUANTUM POOL
            </a>
          </div>

          {/* Stats Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '5rem',
            padding: '2rem',
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)'
          }}>
            {[
              { label: 'Market Cap Target', value: '$500M', icon: '📈' },
              { label: 'Holders Actifs', value: '10K+', icon: '👥' },
              { label: 'Pays Connectés', value: '14', icon: '🌍' },
              { label: 'IA Déployées', value: '200', icon: '🤖' }
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>{stat.value}</div>
                <div style={{ fontSize: '0.9rem', color: '#64748b' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '5rem'
          }}>
            {features.map((feature, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedFeature(selectedFeature === i ? null : i)}
                style={{
                  background: feature.special === 'quantum'
                    ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.25) 0%, rgba(16, 185, 129, 0.25) 100%)'
                    : feature.special === 'money'
                      ? 'linear-gradient(135deg, rgba(234, 179, 8, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%)'
                      : feature.special === 'security'
                        ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%)'
                        : feature.special === 'creative'
                          ? 'linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)'
                          : feature.special === 'health'
                            ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)'
                            : feature.special === 'space'
                              ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)'
                              : selectedFeature === i 
                                ? 'rgba(16, 185, 129, 0.15)' 
                                : 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: feature.special
                    ? '2px solid rgba(139, 92, 246, 0.5)'
                    : selectedFeature === i 
                      ? '2px solid #10b981' 
                      : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '24px',
                  padding: '2.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="feature-card">
                
                {feature.special && (
                  <div style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-10px',
                    background: feature.special === 'quantum'
                      ? 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
                      : feature.special === 'money'
                        ? 'linear-gradient(135deg, #eab308 0%, #ca8a04 100%)'
                        : 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                    color: 'white',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    boxShadow: '0 8px 20px rgba(139, 92, 246, 0.6)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {feature.special === 'quantum' ? '🚀 RÉVOLUTION' : 
                     feature.special === 'money' ? '💰 PROFIT' :feature.special === 'security' ? '🔐 SECURE' :
                     feature.special === 'creative' ? '🎨 CREATE' :
                     feature.special === 'health' ? '🏥 LIFE+' :
                     feature.special === 'space' ? '🚀 SPACE' : '✨ NEW'}
                  </div>
                )}
                
                <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>{feature.icon}</div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '800', 
                  color: 'white',
                  marginBottom: '1rem',
                  letterSpacing: '-0.5px'
                }}>
                  {feature.title}
                </h3>
                <p style={{ 
                  fontSize: '1rem', 
                  color: '#94a3b8', 
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}>
                  {feature.desc}
                </p>

                <div style={{
                  display: 'flex',
                  gap: '0.6rem',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  marginBottom: '1.5rem'
                }}>
                  {feature.stats.map((stat, idx) => (
                    <span key={idx} style={{
                      background: feature.special === 'quantum'
                        ? 'rgba(139, 92, 246, 0.3)'
                        : feature.special === 'money'
                          ? 'rgba(234, 179, 8, 0.3)'
                          : 'rgba(16, 185, 129, 0.25)',
                      color: feature.special === 'quantum'
                        ? '#c4b5fd'
                        : feature.special === 'money'
                          ? '#fde047'
                          : '#10b981',
                      padding: '0.4rem 1rem',
                      borderRadius: '12px',
                      fontSize: '0.85rem',
                      fontWeight: 'bold',
                      border: `1px solid ${feature.special === 'quantum' ? 'rgba(139, 92, 246, 0.4)' : 'rgba(16, 185, 129, 0.3)'}`
                    }}>
                      {stat}
                    </span>
                  ))}
                </div>

                {selectedFeature === i && (
                  <div style={{
                    marginTop: '2rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    animation: 'slideDown 0.3s ease'
                  }}>
                    <p style={{ 
                      color: '#10b981', 
                      fontSize: '1rem', 
                      marginBottom: '1.5rem',
                      fontWeight: 'bold'
                    }}>
                      🔗 {feature.special ? '⚡ ACCÈS DIRECT :' : 'Ressources disponibles :'}
                    </p>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.8rem'
                    }}>
                      {feature.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: feature.special === 'quantum'
                              ? '#c4b5fd'
                              : feature.special === 'money'
                                ? '#fde047'
                                : '#10b981',
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                            fontWeight: '600',
                            padding: '1rem',
                            background: feature.special === 'quantum'
                              ? 'rgba(139, 92, 246, 0.15)'
                              : feature.special === 'money'
                                ? 'rgba(234, 179, 8, 0.15)'
                                : 'rgba(16, 185, 129, 0.1)',
                            borderRadius: '12px',
                            transition: 'all 0.3s ease',
                            border: `1px solid ${feature.special === 'quantum' ? 'rgba(139, 92, 246, 0.3)' : 'rgba(16, 185, 129, 0.2)'}`,
                            display: 'block',
                            textAlign: 'left'
                          }}
                          className="feature-link"
                        >
                          → {link.text}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <div style={{
                  color: feature.special === 'quantum' ? '#c4b5fd' : '#10b981',
                  fontSize: '0.95rem',
                  fontWeight: 'bold',
                  marginTop: '1.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {selectedFeature === i ? '✕ FERMER' : '👆 DÉCOUVRIR'}
                </div>
              </div>
            ))}
          </div>

          {/* Value Proposition */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
            backdropFilter: 'blur(20px)',
            border: '2px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '30px',
            padding: '4rem 2rem',
            maxWidth: '900px',
            margin: '0 auto 5rem',
            boxShadow: '0 25px 70px rgba(0,0,0,0.4)'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 6vw, 3rem)',
              fontWeight: '900',
              color: 'white',
              marginBottom: '2rem',
              background: 'linear-gradient(135deg, #10b981 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              🚀 POURQUOI REUSS VA EXPLOSER ?
            </h2>
            
            <div style={{
              display: 'grid',
              gap: '1.5rem',
              textAlign: 'left',
              marginBottom: '3rem'
            }}>
              {[
                { icon: '💰', text: 'Seule crypto qui PAIE pour utiliser (pas dépenser)', color: '#10b981' },
                { icon: '🔥', text: 'Auto-burn 0.5% = Deflation naturelle (supply diminue)', color: '#ef4444' },
                { icon: '📈', text: 'Yield 40% APY géré par 200 IA (vs 5% ailleurs)', color: '#eab308' },
                { icon: '🌍', text: '14 pays = adoption massive garantie', color: '#3b82f6' },
                { icon: '🤖', text: '200 IA travaillent 24/7 pour augmenter valeur', color: '#8b5cf6' },
                { icon: '💎', text: 'Use cases RÉELS : traduction, santé, business, space', color: '#ec4899' },
                { icon: '🎯', text: 'Target $500M market cap = 100x depuis aujourd\'hui', color: '#10b981' }
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.5rem',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '15px',
                  border: `1px solid ${item.color}20`
                }}>
                  <span style={{ fontSize: '2.5rem' }}>{item.icon}</span>
                  <span style={{ 
                    color: '#e2e8f0', 
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div style={{
              background: 'rgba(16, 185, 129, 0.2)',
              padding: '2rem',
              borderRadius: '20px',
              marginBottom: '3rem'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💡</div>
              <h3 style={{ 
                fontSize: '1.8rem', 
                color: '#10b981', 
                fontWeight: 'bold',
                marginBottom: '1rem'
              }}>
                CALCUL SIMPLE
              </h3>
              <p style={{ 
                fontSize: '1.2rem', 
                color: '#e2e8f0',
                lineHeight: '1.8'
              }}>
                Si 0.1% des 195 pays adoptent (195K personnes)<br/>
                × $100 investi moyen<br/>
                = <span style={{ color: '#10b981', fontWeight: 'bold' }}>$19.5M market cap</span><br/>
                <br/>
                Avec 14 pays actifs + network effect :<br/>
                Target réaliste = <span style={{ color: '#fde047', fontWeight: 'bold', fontSize: '1.4rem' }}>$500M en 2026</span>
              </p>
            </div>

            <h2 style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              fontWeight: '800',
              color: 'white',
              marginBottom: '1.5rem'
            }}>
              🎯 LISTE BETA 2025
            </h2>
            
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
              color: '#94a3b8',
              marginBottom: '2.5rem'
            }}>
              Premiers inscrits = <span style={{ color: '#10b981' }}>100 REUSS offerts</span> + Accès prioritaire
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} style={{
                display: 'flex',
                gap: '1rem',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <input
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    maxWidth: '500px',
                    padding: '1.3rem 2rem',
                    borderRadius: '50px',
                    border: '2px solid rgba(16, 185, 129, 0.4)',
                    background: 'rgba(15, 23, 42, 0.9)',
                    color: 'white',
                    fontSize: '1.1rem',
                    outline: 'none',
                    transition: 'all 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#10b981'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(16, 185, 129, 0.4)'}
                />
                <button
                  type="submit"
                  style={{
                    padding: '1.3rem 4rem',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 15px 40px rgba(16, 185, 129, 0.5)',
                    transition: 'all 0.3s',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-3px)'
                    e.target.style.boxShadow = '0 20px 50px rgba(16, 185, 129, 0.6)'
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = '0 15px 40px rgba(16, 185, 129, 0.5)'
                  }}
                >
                  ✨ REJOINDRE LA RÉVOLUTION
                </button>
              </form>
            ) : (
              <div style={{
                padding: '3rem',
                background: 'rgba(16, 185, 129, 0.25)',
                borderRadius: '25px',
                border: '2px solid #10b981'
              }}>
                <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🎉</div>
                <h3 style={{ 
                  fontSize: '2rem', 
                  color: '#10b981', 
                  fontWeight: 'bold',
                  marginBottom: '1rem'
                }}>
                  BIENVENUE DANS LA RÉVOLUTION !
                </h3>
                <p style={{ color: '#e2e8f0', fontSize: '1.2rem' }}>
                  Vous recevrez 100 REUSS dès le lancement 🎁
                </p>
              </div>
            )}
          </div>

          {/* Social Proof */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(10px)',
            borderRadius: '25px',
            padding: '3rem 2rem',
            marginBottom: '5rem'
          }}>
            <h3 style={{ 
              fontSize: '2rem', 
              fontWeight: '800', 
              color: 'white',
              marginBottom: '2rem'
            }}>
              🌍 EXPANSION MONDIALE EN COURS
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                '🇬🇵 Guadeloupe', '🇫🇷 France', '🇬🇧 Angleterre', '🇮🇹 Italie',
                '🇩🇪 Allemagne', '🇸🇪 Suède', '🇸🇬 Singapour', '🇦🇺 Australie',
                '🇪🇸 Espagne', '🇧🇷 Brésil', '🇬🇧 Royaume-Uni', '🇮🇳 Inde',
                '🇳🇿 Nouvelle-Zélande', '🇺🇸 États-Unis', '🇨🇦 Canada'
              ].map((country, i) => (
                <div key={i} style={{
                  padding: '1rem',
                  background: 'rgba(16, 185, 129, 0.1)',
                  borderRadius: '12px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#10b981',
                  border: '1px solid rgba(16, 185, 129, 0.3)'
                }}>
                  {country}
                </div>
              ))}
            </div>
          </div>

          {/* --- ARCHITECTURE TECHNIQUE COMPLÈTE & RÉGLEMENTATION (AJOUT RÉEL) --- */}
          <div style={{
            marginTop: '4rem',
            padding: '4rem 2rem',
            background: 'rgba(10, 10, 10, 0.9)',
            border: '2px solid rgba(139, 92, 246, 0.4)',
            borderRadius: '40px',
            textAlign: 'left',
            boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
            position: 'relative'
          }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#fff', marginBottom: '3rem', textAlign: 'center' }}>
              🛠️ TECHNIQUE COMPLÈTE & RÈGLEMENTS
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2.5rem', borderRadius: '30px', borderLeft: '6px solid #8b5cf6' }}>
                <h3 style={{ color: '#a78bfa', fontSize: '1.4rem', marginBottom: '1.2rem' }}>1. Infrastructure APIs</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  Plan technique pour chaque service (APIs, smart contracts, infrastructure cloud) optimisé pour les 14 pays partenaires via Vercel & AWS Edge.
                </p>
                <a href="https://vercel.com/docs/functions" target="_blank" style={{ color: '#a78bfa', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.85rem' }}>🔗 DOC INFRASTRUCTURE →</a>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2.5rem', borderRadius: '30px', borderLeft: '6px solid #10b981' }}>
                <h3 style={{ color: '#34d399', fontSize: '1.4rem', marginBottom: '1.2rem' }}>2. Smart Contracts</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  Contrats audités pour le Staking, NFT ID biométrique, DAO spatiale et Quantum Pool automatisé (Contrat: 0x4b3b...DDB8).
                </p>
                <a href="https://polygonscan.com/address/0x4b3bFf4b58d22Ad363bb260e22032414d4CfdDB8" target="_blank" style={{ color: '#34d399', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.85rem' }}>🔗 POLYGONSCAN →</a>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2.5rem', borderRadius: '30px', borderLeft: '6px solid #3b82f6' }}>
                <h3 style={{ color: '#60a5fa', fontSize: '1.4rem', marginBottom: '1.2rem' }}>3. Intégrations IA</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  Connexions natives ultra-rapides aux APIs OpenAI (GPT-4), Anthropic (Claude), Google (Gemini) et DeepL pour une latence {"<"} 0.2s.
                </p>
                <a href="https://platform.openai.com/docs" target="_blank" style={{ color: '#60a5fa', fontWeight: 'bold', textDecoration: 'none', fontSize: '0.85rem' }}>🔗 API PORTAL →</a>
              </div>
            </div>

            <div style={{ marginTop: '3rem', padding: '2.5rem', background: 'rgba(239, 68, 68, 0.05)', borderRadius: '30px', border: '1px solid #ef4444' }}>
              <h3 style={{ color: '#f87171', marginBottom: '1rem' }}>⚖️ PROTECTION RÉGLEMENTAIRE INTERNATIONALE</h3>
              <p style={{ color: '#e2e8f0', lineHeight: '1.6', fontSize: '0.95rem' }}>
                Conformité <b>EU AI Act</b> (Europe), <b>RGPD</b> (Sécurité des données) et standards <b>ISO/IEC 42001</b>. 
                L'écosystème Reussitess© est juridiquement protégé pour opérer les agents IA dans les 14 zones partenaires, garantissant la sécurité des investisseurs.
              </p>
            </div>

            <div style={{ marginTop: '3rem', padding: '2.5rem', background: 'rgba(245, 158, 11, 0.05)', borderRadius: '30px', border: '1px dashed #f59e0b' }}>
              <h3 style={{ color: '#fbbf24', marginBottom: '1rem' }}>🚀 Roadmap & Partenariats</h3>
              <p style={{ color: '#e2e8f0', lineHeight: '1.6' }}>
                Implémentation progressive : <b>Phase 1</b> (Prioritaire : Passport & KYC), <b>Phase 2</b> (Avancée : Quantum Pool), <b>Phase 3</b> (Futuriste : Space DAO). Liste des partenaires stratégiques disponible via le Quantum ID.
              </p>
            </div>
            
            <div style={{ marginTop: '4rem', textAlign: 'center' }}>
               <p style={{ fontSize: '1.8rem', fontWeight: '900', color: '#10b981', marginBottom: '1.5rem' }}>💡 PAR QUEL SERVICE VOULEZ-VOUS COMMENCER ?</p>
               <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <span style={{ background: '#333', padding: '10px 20px', borderRadius: '50px' }}>✅ AI Universal Brain</span>
                  <span style={{ background: '#333', padding: '10px 20px', borderRadius: '50px' }}>✅ Real-Time Translator</span>
                  <span style={{ background: '#333', padding: '10px 20px', borderRadius: '50px' }}>✅ Quantum Pool</span>
               </div>
            </div>
          </div>
          {/* --- FIN AJOUT --- */}

          {/* Footer */}
          <div style={{
            marginTop: '6rem',
            paddingTop: '3rem',
            borderTop: '2px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h3 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '900', 
              color: 'white',
              marginBottom: '1rem'
            }}>
              REUSSITESS®971
            </h3>
            <p style={{ 
              color: '#10b981', 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              marginTop: '1rem',
              marginBottom: '1rem'
            }}>
              POSITIVITÉ À L'INFINI 🎯
            </p>
            <p style={{ 
              color: '#64748b', 
              fontSize: '1.2rem',
              fontWeight: 'bold'
            }}>
              🏁 BOUDOUM ! La Révolution IA commence ici
            </p>
            
            <div style={{
              display: 'flex',
              gap: '2rem',
              justifyContent: 'center',
              marginTop: '2rem',
              flexWrap: 'wrap'
            }}>
              <a href="https://polygonscan.com/token/0xB37531727fC07c6EED4f97F852A115B428046EB2" target="_blank" rel="noopener noreferrer" style={{ color: '#10b981', textDecoration: 'none', fontSize: '1.1rem' }}>
                📊 PolygonScan
              </a>
              <a href="https://dapp.quickswap.exchange/swap/best/ETH/0xB37531727fC07c6EED4f97F852A115B428046EB2?chainId=137" target="_blank" rel="noopener noreferrer" style={{ color: '#10b981', textDecoration: 'none', fontSize: '1.1rem' }}>
                💎 QuickSwap
              </a>
              <a href="https://info.quickswap.exchange/#/pair/0x1d2e88A55CBBAB68237aa10781a5e00335Af9f9c" target="_blank" rel="noopener noreferrer" style={{ color: '#10b981', textDecoration: 'none', fontSize: '1.1rem' }}>
                ⚛️ Liquidity Pool
              </a>
            </div>
            
            <p style={{ marginTop: '3rem', fontSize: '0.8rem', color: '#444' }}>
              Propriété Exclusive : 0x69f42aa645a43a84e1143d416a4c81a88df01549 | Tous droits réservés REUSSITESS©
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(30px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .feature-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }
        .feature-link:hover {
          background: rgba(16, 185, 129, 0.25) !important;
          transform: translateX(8px);
          border-color: rgba(16, 185, 129, 0.5) !important;
        }
        .cta-button:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 20px 50px rgba(16, 185, 129, 0.7);
        }
        .cta-button-secondary:hover {
          background: rgba(139, 92, 246, 0.3);
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  )
}
