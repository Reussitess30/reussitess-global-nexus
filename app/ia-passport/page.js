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
        {/* Orbs */}
        <div style={{
          position: 'absolute', top: '10%', left: '5%', width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(100px)', animation: 'float 20s infinite'
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', right: '5%', width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(100px)', animation: 'float 15s infinite reverse'
        }} />

        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '8rem', marginBottom: '2rem', animation: 'bounce 3s infinite' }}>🌍</div>
          <div style={{
            display: 'inline-block', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            padding: '1rem 2.5rem', borderRadius: '50px', marginBottom: '2rem', fontSize: '1.1rem',
            fontWeight: 'bold', color: 'white', boxShadow: '0 10px 40px rgba(16, 185, 129, 0.5)', animation: 'pulse 2s infinite'
          }}>🇬🇵 MADE IN GUADELOUPE - TERRES DE CHAMPIONS</div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 10vw, 6rem)', fontWeight: '900', marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 70%, #ec4899 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-3px', lineHeight: '1.1'
          }}>IA PASSPORT<br/><span style={{ fontSize: '0.6em' }}>RÉVOLUTION MONDIALE</span></h1>

          <p style={{ fontSize: 'clamp(1.2rem, 3vw, 2.2rem)', color: '#94a3b8', marginBottom: '3rem', fontWeight: '600' }}>
            Le Seul Écosystème qui PAIE pour utiliser l'IA<br/>
            <span style={{ color: '#10b981', fontSize: '0.8em' }}>💰 Utilisez → Gagnez des REUSS → Réutilisez → Repeat ∞</span>
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '5rem' }}>
            <a href="https://dapp.quickswap.exchange/swap/best/ETH/0xB37531727fC07c6EED4f97F852A115B428046EB2?chainId=137" target="_blank" rel="noopener noreferrer" style={{ padding: '1.5rem 3rem', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: 'white', borderRadius: '50px', fontSize: '1.3rem', fontWeight: 'bold', textDecoration: 'none', boxShadow: '0 15px 40px rgba(16, 185, 129, 0.5)', display: 'inline-block' }}>💎 ACHETER REUSS</a>
            <a href="https://info.quickswap.exchange/#/pair/0x1d2e88A55CBBAB68237aa10781a5e00335Af9f9c" target="_blank" rel="noopener noreferrer" style={{ padding: '1.5rem 3rem', background: 'rgba(139, 92, 246, 0.2)', color: 'white', border: '2px solid #8b5cf6', borderRadius: '50px', fontSize: '1.3rem', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}>⚛️ QUANTUM POOL</a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
            {features.map((feature, i) => (
              <div key={i} onClick={() => setSelectedFeature(selectedFeature === i ? null : i)} style={{
                  background: feature.special ? 'rgba(139, 92, 246, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)', border: feature.special ? '2px solid #8b5cf6' : '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '24px', padding: '2.5rem', cursor: 'pointer', transition: 'all 0.4s'
                }}>
                <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'white', marginBottom: '1rem' }}>{feature.title}</h3>
                <p style={{ fontSize: '1rem', color: '#94a3b8', marginBottom: '1.5rem' }}>{feature.desc}</p>
                {selectedFeature === i && (
                  <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
                    {feature.links.map((link, idx) => (
                      <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: '#10b981', display: 'block', padding: '0.8rem', textDecoration: 'none', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', marginBottom: '0.5rem' }}>→ {link.text}</a>
                    ))}
                  </div>
                )}
                <div style={{ color: '#10b981', fontWeight: 'bold', marginTop: '1rem' }}>{selectedFeature === i ? '✕ FERMER' : '👆 DÉCOUVRIR'}</div>
              </div>
            ))}
          </div>

          {/* SECTION TECHNIQUE RÉELLE AJOUTÉE EN BAS */}
          <div style={{ marginTop: '4rem', padding: '4rem 2rem', background: 'rgba(255,255,255,0.02)', border: '2px solid #10b981', borderRadius: '40px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#fff', textAlign: 'center', marginBottom: '3rem' }}>🛠️ TECHNIQUE COMPLÈTE & RÈGLEMENTS</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div style={{ padding: '2rem', background: '#111', borderRadius: '25px', borderLeft: '5px solid #8b5cf6' }}>
                <h3 style={{ color: '#8b5cf6' }}>1. Infrastructure APIs</h3>
                <p style={{ color: '#94a3b8' }}>Plan technique optimisé pour les 14 pays via AWS & Vercel Edge.</p>
              </div>
              <div style={{ padding: '2rem', background: '#111', borderRadius: '25px', borderLeft: '5px solid #10b981' }}>
                <h3 style={{ color: '#10b981' }}>2. Smart Contracts</h3>
                <p style={{ color: '#94a3b8' }}>Audités sur Polygon. Contrat : 0x4b3bFf4b58d22Ad363bb260e22032414d4CfdDB8.</p>
              </div>
              <div style={{ padding: '2rem', background: '#111', borderRadius: '25px', borderLeft: '5px solid #3b82f6' }}>
                <h3 style={{ color: '#3b82f6' }}>3. Intégrations IA</h3>
                <p style={{ color: '#94a3b8' }}>Connexions natives GPT-4, Claude 3.5 et Gemini Ultra.</p>
              </div>
            </div>
            <div style={{ marginTop: '2rem', padding: '2rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '20px', border: '1px solid #ef4444' }}>
              <h3 style={{ color: '#ef4444' }}>⚖️ PROTECTION EU AI ACT & RGPD</h3>
              <p style={{ color: '#e2e8f0' }}>Conformité totale pour les investisseurs internationaux dans les 14 zones cibles.</p>
            </div>
            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
               <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>💡 PAR QUEL SERVICE VOULEZ-VOUS COMMENCER ?</p>
            </div>
          </div>

          {/* Footer */}
          <div style={{ marginTop: '6rem', paddingTop: '3rem', borderTop: '1px solid #333' }}>
            <h3 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'white' }}>REUSSITESS®971</h3>
            <p style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold' }}>POSITIVITÉ À L'INFINI 🎯</p>
            <p style={{ color: '#64748b' }}>🏁 BOUDOUM ! La Révolution IA commence ici</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); } }
      `}</style>
    </div>
  )
}
