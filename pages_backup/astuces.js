import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Astuces = () => {
  const [activeTab, setActiveTab] = useState('amazon');

  return (
    <>
      <Head>
        <title>Astuces & Solutions | REUSSITESS® Global Nexus</title>
        <meta name="description" content="Astuces Amazon, business rentables, IA monétisation, remèdes naturels, plantes médicinales" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <Link href="/" className="inline-block bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition mb-6">
              🏠 Retour Accueil
            </Link>
            <h1 className="text-6xl font-bold mb-4">💡 Astuces & Solutions</h1>
            <p className="text-2xl">Votre guide pratique pour réussir en ligne et naturellement</p>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { id: 'amazon', label: '🛒 Amazon Pro', color: 'orange' },
              { id: 'business', label: '💼 Business 2025', color: 'blue' },
              { id: 'influenceurs', label: '⭐ Top Influenceurs', color: 'pink' },
              { id: 'ia', label: '🤖 Gagner avec IA', color: 'purple' },
              { id: 'remedes', label: '🌿 Remèdes Grand-Mère', color: 'green' },
              { id: 'plantes', label: '🍃 Plantes Médicinales', color: 'teal' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-bold transition-all ${
                  activeTab === tab.id
                    ? `bg-${tab.color}-600 text-white shadow-lg scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* AMAZON PRO */}
          {activeTab === 'amazon' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-4xl font-bold mb-6 text-orange-600">🛒 Astuces Amazon Pro</h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-orange-500 pl-6 py-4 bg-orange-50 rounded-r-xl">
                    <h3 className="text-2xl font-bold mb-3 text-orange-700">💰 Comment trouver les meilleures affaires</h3>
                    <ul className="space-y-2 text-lg">
                      <li>✅ <strong>Ventes Flash Lightning Deals</strong> : Consultez quotidiennement 6h-22h</li>
                      <li>✅ <strong>Warehouse Deals</strong> : Produits retours -20% à -50%</li>
                      <li>✅ <strong>Amazon Outlet</strong> : Surstock, fins de série, réductions massives</li>
                      <li>✅ <strong>Subscribe & Save</strong> : -15% sur abonnements produits récurrents</li>
                      <li>✅ <strong>Black Friday Cyber Monday</strong> : Novembre, réductions jusqu'à -70%</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-6 py-4 bg-yellow-50 rounded-r-xl">
                    <h3 className="text-2xl font-bold mb-3 text-yellow-700">📦 Amazon Prime : Rentabiliser</h3>
                    <ul className="space-y-2 text-lg">
                      <li>🚚 <strong>Livraison gratuite</strong> illimitée 1 jour ouvré</li>
                      <li>📺 <strong>Prime Video</strong> : Films séries inclus</li>
                      <li>🎵 <strong>Prime Music</strong> : 2 millions titres</li>
                      <li>📚 <strong>Prime Reading</strong> : Livres numériques Kindle gratuits</li>
                      <li>📸 <strong>Amazon Photos</strong> : Stockage illimité photos</li>
                      <li>💡 <strong>Astuce</strong> : Partagez avec famille (6 membres) = rentabilité max</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-xl">
                    <h3 className="text-2xl font-bold mb-3 text-red-700">🔍 Détecter les faux avis</h3>
                    <ul className="space-y-2 text-lg">
                      <li>⚠️ Méfiez-vous avis 5 étoiles tous identiques</li>
                      <li>⚠️ Vérifiez profil acheteurs (Achat Vérifié ✓)</li>
                      <li>⚠️ Utilisez Fakespot.com ou ReviewMeta.com</li>
                      <li>⚠️ Lisez avis 3-4 étoiles (plus authentiques)</li>
                      <li>✅ Privilégiez vendeurs "Expédié par Amazon"</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-6 py-4 bg-pink-50 rounded-r-xl">
                    <h3 className="text-2xl font-bold mb-3 text-pink-700">💎 Programmes Affiliés Amazon</h3>
                    <ul className="space-y-2 text-lg">
                      <li>💰 <strong>Amazon Associates</strong> : 1-10% commission sur ventes</li>
                      <li>📹 <strong>Amazon Influencer</strong> : Storefront personnalisé créateurs</li>
                      <li>📦 <strong>FBA</strong> : Vendre vos produits via Amazon logistique</li>
                      <li>📚 <strong>KDP Kindle</strong> : Publier eBooks, jusqu'à 70% royalties</li>
                      <li>🎨 <strong>Merch by Amazon</strong> : Vendre designs t-shirts sans stock</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-orange-600 to-pink-600 rounded-xl text-white">
                  <h3 className="text-2xl font-bold mb-3">🎯 Accédez aux 26 Boutiques REUSSITESS®</h3>
                  <p className="text-lg mb-4">Découvrez notre sélection experte de produits Amazon dans 14 pays</p>
                  <a href="https://reussitess-global-nexus-jfgk.vercel.app/" className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all text-xl">
                    Explorer les Boutiques →
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* BUSINESS 2025 */}
          {activeTab === 'business' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-4xl font-bold mb-6 text-blue-600">💼 Business Rentables 2025</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-2 border-blue-500 rounded-xl p-6 hover:shadow-2xl transition">
                    <div className="text-4xl mb-3">🤖</div>
                    <h3 className="text-2xl font-bold mb-3 text-blue-700">Services IA Automation</h3>
                    <p className="text-lg mb-3">Automatisation entreprises via ChatGPT API, workflows IA</p>
                    <p className="font-bold text-blue-600">💰 Revenu : 5,000€-20,000€/mois</p>
                    <p className="text-sm text-gray-600 mt-2">Compétences : Prompts IA, APIs, no-code</p>
                  </div>

                  <div className="border-2 border-green-500 rounded-xl p-6 hover:shadow-2xl transition">
                    <div className="text-4xl mb-3">📱</div>
                    <h3 className="text-2xl font-bold mb-3 text-green-700">Création Contenu TikTok/IG</h3>
                    <p className="text-lg mb-3">Créer contenu viral pour marques, UGC Creator</p>
                    <p className="font-bold text-green-600">💰 Revenu : 3,000€-15,000€/mois</p>
                    <p className="text-sm text-gray-600 mt-2">Outils : CapCut, Canva, téléphone</p>
                  </div>

                  <div className="border-2 border-purple-500 rounded-xl p-6 hover:shadow-2xl transition">
                    <div className="text-4xl mb-3">🎓</div>
                    <h3 className="text-2xl font-bold mb-3 text-purple-700">Formations en Ligne</h3>
                    <p className="text-lg mb-3">Vendre expertise via Teachable, Podia, Skool</p>
                    <p className="font-bold text-purple-600">💰 Revenu : 2,000€-50,000€/mois</p>
                    <p className="text-sm text-gray-600 mt-2">Plateforme : Teachable, Skool, Kajabi</p>
                  </div>

                  <div className="border-2 border-orange-500 rounded-xl p-6 hover:shadow-2xl transition">
                    <div className="text-4xl mb-3">🛍️</div>
                    <h3 className="text-2xl font-bold mb-3 text-orange-700">Dropshipping Shopify</h3>
                    <p className="text-lg mb-3">E-commerce sans stock via AliExpress, CJ Dropshipping</p>
                    <p className="font-bold text-orange-600">💰 Revenu : 1,000€-10,000€/mois</p>
                    <p className="text-sm text-gray-600 mt-2">Investissement départ : 500€-2,000€</p>
                  </div>

                  <div className="border-2 border-pink-500 rounded-xl p-6 hover:shadow-2xl transition">
                    <div className="text-4xl mb-3">✍️</div>
                    <h3 className="text-2xl font-bold mb-3 text-pink-700">Copywriting IA-Assisté</h3>
                    <p className="text-lg mb-3">Rédaction pages vente, emails, avec ChatGPT/Claude</p>
                    <p className="font-bold text-pink-600">💰 Revenu : 3,000€-12,000€/mois</p>
                    <p className="text-sm text-gray-600 mt-2">Clients : Startups, e-commerce, coaches</p>
                  </div>

                  <div className="border-2 border-teal-500 rounded-xl p-6 hover:shadow-2xl transition">
                    <div className="text-4xl mb-3">📊</div>
                    <h3 className="text-2xl font-bold mb-3 text-teal-700">Consulting Digital Marketing</h3>
                    <p className="text-lg mb-3">SEO, Google Ads, Meta Ads pour PME</p>
                    <p className="font-bold text-teal-600">💰 Revenu : 4,000€-20,000€/mois</p>
                    <p className="text-sm text-gray-600 mt-2">Outils : SEMrush, Google Analytics</p>
                  </div>
                </div>

                <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                  <h3 className="text-2xl font-bold mb-3 text-blue-700">🚀 Critères Business Rentable 2025</h3>
                  <ul className="space-y-2 text-lg">
                    <li>✅ <strong>Faible investissement départ</strong> (&lt;2,000€)</li>
                    <li>✅ <strong>Scalable</strong> : Revenu pas lié temps travaillé</li>
                    <li>✅ <strong>Demande forte</strong> : Résout problème urgent</li>
                    <li>✅ <strong>Marges élevées</strong> : 50-80% marge bénéficiaire</li>
                    <li>✅ <strong>Automatisable</strong> : IA, outils no-code</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TOP INFLUENCEURS */}
          {activeTab === 'influenceurs' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-4xl font-bold mb-6 text-pink-600">⭐ Top Influenceurs Mieux Payés 2025</h2>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-4">🏆 Top 10 Mondial - Revenus Annuels</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white/20 rounded-lg p-4">
                        <p className="text-xl font-bold">1. MrBeast (YouTube)</p>
                        <p className="text-3xl font-bold">💰 $82 millions</p>
                        <p className="text-sm">250M abonnés • Challenges extrêmes</p>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4">
                        <p className="text-xl font-bold">2. Charli D'Amelio (TikTok)</p>
                        <p className="text-3xl font-bold">💰 $17.5 millions</p>
                        <p className="text-sm">155M followers • Danse</p>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4">
                        <p className="text-xl font-bold">3. Addison Rae (TikTok)</p>
                        <p className="text-3xl font-bold">💰 $15 millions</p>
                        <p className="text-sm">88M followers • Lifestyle beauté</p>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4">
                        <p className="text-xl font-bold">4. Khaby Lame (TikTok)</p>
                        <p className="text-3xl font-bold">💰 $13 millions</p>
                        <p className="text-sm">162M followers • Humour silencieux</p>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4">
                        <p className="text-xl font-bold">5. Cristiano Ronaldo (IG)</p>
                        <p className="text-3xl font-bold">💰 $3.2M/post</p>
                        <p className="text-sm">636M followers • Sport</p>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4">
                        <p className="text-xl font-bold">6. Kylie Jenner (IG)</p>
                        <p className="text-3xl font-bold">💰 $2.4M/post</p>
                        <p className="text-sm">400M followers • Beauté mode</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border-2 border-red-500 rounded-xl p-6">
                      <h4 className="text-xl font-bold mb-3 text-red-600">📹 YouTube</h4>
                      <p className="mb-2"><strong>CPM moyen :</strong> 3-20€/1000 vues</p>
                      <p className="mb-2"><strong>Top niches :</strong></p>
                      <ul className="text-sm space-y-1">
                        <li>• Finance : 10-20€ CPM</li>
                        <li>• Tech : 8-15€ CPM</li>
                        <li>• Gaming : 2-5€ CPM</li>
                      </ul>
                      <p className="mt-3 font-bold text-red-600">Revenus 1M vues : 3,000-20,000€</p>
                    </div>

                    <div className="border-2 border-pink-500 rounded-xl p-6">
                      <h4 className="text-xl font-bold mb-3 text-pink-600">📱 TikTok</h4>
                      <p className="mb-2"><strong>Creator Fund :</strong> 0.02-0.04€/1000 vues</p>
                      <p className="mb-2"><strong>Revenus principaux :</strong></p>
                      <ul className="text-sm space-y-1">
                        <li>• Partenariats marques</li>
                        <li>• TikTok Shop affiliation</li>
                        <li>• Lives cadeaux virtuels</li>
                      </ul>
                      <p className="mt-3 font-bold text-pink-600">Brand deals : 5,000-100,000€</p>
                    </div>

                    <div className="border-2 border-purple-500 rounded-xl p-6">
                      <h4 className="text-xl font-bold mb-3 text-purple-600">📸 Instagram</h4>
                      <p className="mb-2"><strong>Micro (10-100K) :</strong> 100-500€/post</p>
                      <p className="mb-2"><strong>Mid-tier (100K-1M) :</strong> 500-5,000€/post</p>
                      <p className="mb-2"><strong>Mega (1M+) :</strong> 10,000-100,000€/post</p>
                      <p className="mt-3 font-bold text-purple-600">Engagement &gt; Followers</p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                    <h3 className="text-2xl font-bold mb-3 text-yellow-700">💡 Comment Devenir Influenceur Payé</h3>
                    <ul className="space-y-2 text-lg">
                      <li>1️⃣ <strong>Niche spécifique</strong> : Expertise pointue (fitness végan, tech IA, minimalisme...)</li>
                      <li>2️⃣ <strong>Consistance</strong> : Poster quotidiennement 3-6 mois minimum</li>
                      <li>3️⃣ <strong>Engagement authentique</strong> : Répondre commentaires, créer communauté</li>
                      <li>4️⃣ <strong>Qualité visuelle</strong> : Éclairage, montage pro (CapCut, Premiere)</li>
                      <li>5️⃣ <strong>Plateforme agence</strong> : AspireIQ, Upfluence, CreatorIQ</li>
                      <li>6️⃣ <strong>Media Kit</strong> : Stats, démo, tarifs clairs</li>
                      <li>7️⃣ <strong>Diversifier revenus</strong> : Affiliation, produits propres, formations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* GAGNER AVEC IA */}
          {activeTab === 'ia' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-4xl font-bold mb-6 text-purple-600">🤖 Gagner de l'Argent avec l'IA en 2025</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="border-2 border-purple-500 rounded-xl p-6 hover:shadow-2xl transition">
                    <div className="text-4xl mb-3">✍️</div>
                    <h3 className="text-2xl font-bold mb-3 text-purple-700">Rédaction IA (ChatGPT/Claude)</h3>
                    <p className="text-lg mb-3">Articles blog, scripts YouTube, emails marketing</p>
                    <p className="font-bold text-purple-600 mb-3">💰 50-200€/article • 2,000-8,000€/mois</p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="font-bold mb-2">Outils :</p>
                      <ul className="text-sm space-y-1">
                        <li>• ChatGPT Plus (20€/mois)</li>
                        <li>• Claude Pro (20€/mois)</li>
                        <li>• Jasper AI (40€/mois)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-2 border-blue-500 rounded-xl p-6 hover:shadow-2xl transition">
                    <div className="text-4xl mb-3">🎨</div>
                    <h3 className="text-2xl font-bold mb-3 text-blue-700">Création Visuels IA</h3>
                    <p className="text-lg mb-3">Logos, illustrations, posts réseaux sociaux</p>
                    <p className="font-bold text-blue-600 mb-3">💰 30-150€/visuel • 3,000-10,000€/mois</p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-bold mb-2">Outils :</p>
                      <ul className="text-sm space-y-1">
                        <li>• Midjourney (30€/mois)</li>
                        <li>• DALL-E 3 (ChatGPT)</li>
                        <li>• Stable Diffusion (gratuit)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-2 border-green-500 rounded-xl p-6 hover:shadow-2xl transition">
                    <div className="text-4xl mb-3">🎬</div>
                    <h3 className="text-2xl font-bold mb-3 text-green-700">Vidéos IA Automatisées</h3>
                    <p className="text-lg mb-3">Chaînes YouTube faceless automatiques</p>
                    <p className="font-bold text-green-600 mb-3">💰 500-5,000€/mois passif</p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="font-bold mb-2">Outils :</p>
                      <ul className="text-sm space-y-1">
                        <li>• Pictory AI (montage auto)</li>
                        <li>• ElevenLabs (voix IA)</li>
                        <li>• Runway ML (vidéo IA)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-2 border-orange-500 rounded-xl p-6 hover:shadow-2xl transition">
                    <div className="text-4xl mb-3">💻</div>
                    <h3 className="text-2xl font-bold mb-3 text-orange-700">Développement No-Code IA</h3>
                    <p className="text-lg mb-3">Apps, sites web, chatbots avec IA</p>
                    <p className="font-bold text-orange-600 mb-3">💰 500-5,000€/projet • 5,000-20,000€/mois</p>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="font-bold mb-2">Outils :</p>
                      <ul className="text-sm space-y-1">
                        <li>• Bubble + OpenAI API</li>
                        <li>• FlutterFlow + IA</li>
                        <li>• Voiceflow (chatbots)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-2 border-pink-500 rounded-xl p-6 hover:shadow-2xl transition">
                    <div className="text-4xl mb-3">📚</div>
                    <h3 className="text-2xl font-bold mb-3 text-pink-700">eBooks Amazon KDP IA</h3>
                    <p className="text-lg mb-3">Publier livres générés IA sur Kindle</p>
                    <p className="font-bold text-pink-600 mb-3">💰 200-2,000€/mois passif</p>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="font-bold mb-2">Process :</p>
                      <ul className="text-sm space-y-1">
                        <li>• ChatGPT : Écrire contenu</li>
                        <li>• Midjourney : Couverture</li>
                        <li>• Kindle Direct Publishing</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-2 border-teal-500 rounded-xl p-6 hover:shadow-2xl transition">
                    <div className="text-4xl mb-3">🔊</div>
                    <h3 className="text-2xl font-bold mb-3 text-teal-700">Voix Off & Doublage IA</h3>
                    <p className="text-lg mb-3">Audiobooks, podcasts, publicités</p>
                    <p className="font-bold text-teal-600 mb-3">💰 50-300€/projet • 2,000-8,000€/mois</p>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <p className="font-bold mb-2">Outils :</p>
                      <ul className="text-sm space-y-1">
                        <li>• ElevenLabs Pro</li>
                        <li>• Murf AI</li>
                        <li>• Play.ht</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-8">
                  <h3 className="text-3xl font-bold mb-4">🚀 Plan d'Action 30 Jours</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white/20 rounded-lg p-4">
                      <p className="font-bold text-xl mb-2">Jours 1-10</p>
                      <p>Apprendre outils IA (ChatGPT, Midjourney), tester prompts, créer portfolio 5 exemples</p>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <p className="font-bold text-xl mb-2">Jours 11-20</p>
                      <p>Trouver premiers clients (Fiverr, Upwork, LinkedIn), fixer prix bas départ, collecter témoignages</p>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <p className="font-bold text-xl mb-2">Jours 21-30</p>
                      <p>Augmenter tarifs +50%, automatiser process, viser 3,000€/mois objectif réaliste</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* REMÈDES GRAND-MÈRE */}
          {activeTab === 'remedes' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-4xl font-bold mb-6 text-green-600">🌿 Remèdes de Grand-Mère Efficaces</h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-50 rounded-r-xl">
                    <h3 className="text-2xl font-bold mb-3 text-green-700">🍯 Miel + Citron : Mal de Gorge</h3>
                    <p className="text-lg mb-2"><strong>Recette :</strong> 1 c. à soupe miel + jus 1/2 citron + eau tiède</p>
                    <p className="text-lg mb-2"><strong>Action :</strong> Antibactérien naturel, apaise inflammation</p>
                    <p className="text-lg"><strong>Usage :</strong> 3-4 fois/jour jusqu'à guérison</p>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-6 py-4 bg-yellow-50 rounded-r-xl">
                    <h3 className="text-2xl font-bold mb-3 text-yellow-700">🧄 Ail Cru : Booster Immunité</h3>
                    <p className="text-lg mb-2"><strong>Recette :</strong> 1-2 gousses ail écrasé à jeun</p>
                    <p className="text-lg mb-2"><strong>Action :</strong> Allicine antibiotique naturel puissant</p>
                    <p className="text-lg"><strong>Astuce :</strong> Mélanger miel pour adoucir goût</p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-6 py-4 bg-orange-50 rounded-r-xl">
                    <h3 className="text-2xl font-bold mb-3 text-orange-700">🥔 Pomme de Terre Crue : Brûlures Légères</h3>
                    <p className="text-lg mb-2"><strong>Recette :</strong> Tranches fines pomme de terre sur brûlure</p>
                    <p className="text-lg mb-2"><strong>Action :</strong> Amidon apaise, réduit douleur rapidement</p>
                    <p className="text-lg"><strong>Durée :</strong> 15-20 minutes, renouveler si nécessaire</p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-xl">
                    <h3 className="text-2xl font-bold mb-3 text-blue-700">🧂 Eau Salée : Infection Dentaire</h3>
                    <p className="text-lg mb-2"><strong>Recette :</strong> 1 c. à café sel dans verre eau tiède</p>
                    <p className="text-lg mb-2"><strong>Action :</strong> Désinfectant naturel, réduit inflammation gencives</p>
                    <p className="text-lg"><strong>Usage :</strong> Bain de bouche 3 fois/jour après brossage</p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50 rounded-r-xl">
                    <h3 className="text-2xl font-bold mb-3 text-purple-700">🍋 Bicarbonate + Citron : Digestion</h3>
                    <p className="text-lg mb-2"><strong>Recette :</strong> 1/2 c. à café bicarbonate + jus citron + eau</p>
                    <p className="text-lg mb-2"><strong>Action :</strong> Soulage brûlures estomac, ballonnements</p>
                    <p className="text-lg"><strong>⚠️ Attention :</strong> Max 2 fois/semaine (pH sanguin)</p>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-6 py-4 bg-pink-50 rounded-r-xl">
                    <h3 className="text-2xl font-bold mb-3 text-pink-700">🍎 Vinaigre Cidre : Cheveux Brillants</h3>
                    <p className="text-lg mb-2"><strong>Recette :</strong> 2 c. à soupe vinaigre cidre dans 1L eau froide</p>
                    <p className="text-lg mb-2"><strong>Action :</strong> Referme écailles cheveux, élimine calcaire</p>
                    <p className="text-lg"><strong>Usage :</strong> Rinçage final après shampoing</p>
                  </div>

                  <div className="border-l-4 border-teal-500 pl-6 py-4 bg-teal-50 rounded-r-xl">
                    <h3 className="text-2xl font-bold mb-3 text-teal-700">🌼 Camomille : Insomnie Stress</h3>
                    <p className="text-lg mb-2"><strong>Recette :</strong> Infusion 1 c. à soupe fleurs séchées 10 min</p>
                    <p className="text-lg mb-2"><strong>Action :</strong> Propriétés calmantes sédatives naturelles</p>
                    <p className="text-lg"><strong>Usage :</strong> 1 tasse 30 min avant coucher</p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-xl">
                    <h3 className="text-2xl font-bold mb-3 text-red-700">🥒 Concombre : Yeux Gonflés Fatigués</h3>
                    <p className="text-lg mb-2"><strong>Recette :</strong> Rondelles concombre frais réfrigéré</p>
                    <p className="text-lg mb-2"><strong>Action :</strong> Décongestionne, hydrate zone délicate yeux</p>
                    <p className="text-lg"><strong>Durée :</strong> 15 minutes yeux fermés allongé</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-red-50 border-2 border-red-500 rounded-xl">
                  <h3 className="text-2xl font-bold mb-3 text-red-700">⚠️ IMPORTANT - Précautions</h3>
                  <ul className="space-y-2 text-lg">
                    <li>❌ Ces remèdes <strong>ne remplacent PAS</strong> un avis médical professionnel</li>
                    <li>❌ Consultez médecin si symptômes persistent &gt;48h</li>
                    <li>❌ Allergies : testez petite zone peau avant usage</li>
                    <li>❌ Femmes enceintes/allaitantes : demander avis médical</li>
                    <li>✅ Remèdes complémentaires, pas traitements principaux</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* PLANTES MÉDICINALES */}
          {activeTab === 'plantes' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-4xl font-bold mb-6 text-teal-600">🍃 Guide Plantes Médicinales Essentielles</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-2 border-green-500 rounded-xl p-6 hover:shadow-xl transition">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl">🌿</span>
                      <h3 className="text-2xl font-bold text-green-700">ALOE VERA</h3>
                    </div>
                    <p className="text-lg mb-3"><strong>Bienfaits :</strong> Cicatrisant, hydratant, brûlures, digestion</p>
                    <p className="text-lg mb-3"><strong>Usage :</strong> Gel interne feuille sur peau / Jus interne oral</p>
                    <p className="text-lg"><strong>Culture :</strong> Facile intérieur, arrosage modéré, plein soleil</p>
                  </div>

                  <div className="border-2 border-purple-500 rounded-xl p-6 hover:shadow-xl transition">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl">💜</span>
                      <h3 className="text-2xl font-bold text-purple-700">LAVANDE</h3>
                    </div>
                    <p className="text-lg mb-3"><strong>Bienfaits :</strong> Anxiété, insomnie, maux de tête, antiseptique</p>
                    <p className="text-lg mb-3"><strong>Usage :</strong> Infusion, huile essentielle, sachet oreiller</p>
                    <p className="text-lg"><strong>Culture :</strong> Plein soleil, sol drainé, résistant sécheresse</p>
                  </div>

                  <div className="border-2 border-pink-500 rounded-xl p-6 hover:shadow-xl transition">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl">🌸</span>
                      <h3 className="text-2xl font-bold text-pink-700">ÉCHINACÉE</h3>
                    </div>
                    <p className="text-lg mb-3"><strong>Bienfaits :</strong> Immunité, rhumes, infections respiratoires</p>
                    <p className="text-lg mb-3"><strong>Usage :</strong> Infusion racine/fleurs, teinture, gélules</p>
                    <p className="text-lg"><strong>Culture :</strong> Vivace rustique, soleil mi-ombre, peu entretien</p>
                  </div>

                  <div className="border-2 border-yellow-500 rounded-xl p-6 hover:shadow-xl transition">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl">🌼</span>
                      <h3 className="text-2xl font-bold text-yellow-700">CAMOMILLE</h3>
                    </div>
                    <p className="text-lg mb-3"><strong>Bienfaits :</strong> Stress, insomnie, digestion, anti-inflammatoire</p>
                    <p className="text-lg mb-3"><strong>Usage :</strong> Infusion fleurs séchées, compresses externes</p>
                    <p className="text-lg"><strong>Culture :</strong> Annuelle facile, semis direct, récolte fleurs</p>
                  </div>

                  <div className="border-2 border-orange-500 rounded-xl p-6 hover:shadow-xl transition">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl">🔶</span>
                      <h3 className="text-2xl font-bold text-orange-700">CURCUMA</h3>
                    </div>
                    <p className="text-lg mb-3"><strong>Bienfaits :</strong> Anti-inflammatoire puissant, digestion, antioxydant</p>
                    <p className="text-lg mb-3"><strong>Usage :</strong> Poudre rhizome cuisine, golden milk, gélules</p>
                    <p className="text-lg"><strong>Culture :</strong> Tropical, pot intérieur, chaleur humidité</p>
                  </div>

                  <div className="border-2 border-blue-500 rounded-xl p-6 hover:shadow-xl transition">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl">🌱</span>
                      <h3 className="text-2xl font-bold text-blue-700">MENTHE POIVRÉE</h3>
                    </div>
                    <p className="text-lg mb-3"><strong>Bienfaits :</strong> Digestion, nausées, maux tête, rafraîchissant</p>
                    <p className="text-lg mb-3"><strong>Usage :</strong> Infusion feuilles fraîches/séchées, huile essentielle</p>
                    <p className="text-lg"><strong>Culture :</strong> Envahissant, pot conseillé, mi-ombre, arrosage régulier</p>
                  </div>

                  <div className="border-2 border-teal-500 rounded-xl p-6 hover:shadow-xl transition">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl">🍀</span>
                      <h3 className="text-2xl font-bold text-teal-700">GINGEMBRE</h3>
                    </div>
                    <p className="text-lg mb-3"><strong>Bienfaits :</strong> Nausées, digestion, anti-inflammatoire, circulation</p>
                    <p className="text-lg mb-3"><strong>Usage :</strong> Infusion rhizome frais, cuisine, jus</p>
                    <p className="text-lg"><strong>Culture :</strong> Pot intérieur, chaleur, récolte 8-10 mois</p>
                  </div>

                  <div className="border-2 border-red-500 rounded-xl p-6 hover:shadow-xl transition">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl">🌹</span>
                      <h3 className="text-2xl font-bold text-red-700">ROMARIN</h3>
                    </div>
                    <p className="text-lg mb-3"><strong>Bienfaits :</strong> Mémoire, concentration, circulation, antioxydant</p>
                    <p className="text-lg mb-3"><strong>Usage :</strong> Infusion feuilles, cuisine, huile essentielle</p>
                    <p className="text-lg"><strong>Culture :</strong> Méditerranéen, plein soleil, résistant sécheresse</p>
                  </div>
                </div>

                <div className="mt-8 space-y-6">
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                    <h3 className="text-2xl font-bold mb-3 text-green-700">🌱 Cultiver Son Jardin Médicinal</h3>
                    <ul className="space-y-2 text-lg">
                      <li>✅ <strong>Débutants :</strong> Menthe, basilic, romarin, thym (faciles)</li>
                      <li>✅ <strong>Pot balcon :</strong> Aloe vera, lavande, camomille</li>
                      <li>✅ <strong>Pleine terre :</strong> Échinacée, calendula, mélisse</li>
                      <li>✅ <strong>Récolte :</strong> Matin après rosée, séchage ombre ventilé</li>
                      <li>✅ <strong>Conservation :</strong> Bocaux verre hermétiques, lieu sec sombre</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-2 border-red-500 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold mb-3 text-red-700">⚠️ PRÉCAUTIONS ESSENTIELLES</h3>
                    <ul className="space-y-2 text-lg">
                      <li>❌ <strong>Interactions médicaments :</strong> Certaines plantes interagissent (ex: millepertuis + pilule)</li>
                      <li>❌ <strong>Identification botanique :</strong> 100% sûr espèce avant consommation</li>
                      <li>❌ <strong>Dosage :</strong> Respecter quantités recommandées (plantes = principes actifs)</li>
                      <li>❌ <strong>Grossesse/allaitement :</strong> Nombreuses plantes contre-indiquées</li>
                      <li>❌ <strong>Allergies :</strong> Tester petite dose avant usage régulier</li>
                      <li>✅ <strong>Consultation :</strong> Herboriste ou phytothérapeute qualifié conseillé</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-xl p-8">
                    <h3 className="text-3xl font-bold mb-4">📚 Ressources Apprentissage</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white/20 rounded-lg p-4">
                        <p className="font-bold text-xl mb-2">📖 Livres</p>
                        <p className="text-sm">Encyclopédie plantes médicinales (Larousse), Guide herboristerie familiale</p>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4">
                        <p className="font-bold text-xl mb-2">🎓 Formations</p>
                        <p className="text-sm">Herboristerie en ligne (ELPM, IFSH), stages terrain identification plantes</p>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4">
                        <p className="font-bold text-xl mb-2">📱 Apps</p>
                        <p className="text-sm">PlantNet (identification), Flora Incognita, Seek by iNaturalist</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer CTA */}
        <div className="max-w-6xl mx-auto px-4 pb-12">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">🌍 Découvrez les 26 Boutiques REUSSITESS®</h2>
            <p className="text-xl mb-6">14 pays • 5 continents • Sélection experte Amazon</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://reussitess-global-nexus-jfgk.vercel.app/" className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-xl hover:scale-105 transition-all">
                🛍️ Explorer Maintenant
              </a>
              <Link href="/bibliotheque" className="bg-white/20 hover:bg-white/30 px-8 py-4 rounded-xl font-bold text-xl transition-all">
                📚 Bibliothèque Mondiale
              </Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Astuces;
