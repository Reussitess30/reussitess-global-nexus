import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const FIXED_14_COUNTRIES = [
    { name: "États-Unis", flag: "🇺🇸", link: "https://amzlink.to/az0LY0DXMG6dR" },
    { name: "France", flag: "🇫🇷", link: "https://amzlink.to/az0RLMqtXqC2d" },
    { name: "Italie", flag: "🇮🇹", link: "https://amzlink.to/az0tV67jW36S7" },
    { name: "Espagne", flag: "🇪🇸", link: "https://amzlink.to/az085o25FtlRd" },
    { name: "Allemagne", flag: "🇩🇪", link: "https://amzlink.to/az00VtRPRGpmm" },
    { name: "Canada", flag: "🇨🇦", link: "https://amzlink.to/az0MvN3FRKKQQ" },
    { name: "Inde", flag: "🇮🇳", link: "https://amzlink.to/az0GVe8b9O7cF" },
    { name: "Pays-Bas", flag: "🇳🇱", link: "https://amzlink.to/az0G27sb8ZVbI" },
    { name: "Suède", flag: "🇸🇪", link: "https://amzlink.to/az0Ig0XgFkR8o" },
    { name: "Singapour", flag: "🇸🇬", link: "https://amzlink.to/az0b3TpUdq32r" },
    { name: "Royaume-Uni", flag: "🇬🇧", link: "https://amzlink.to/az03r8CJgliMq" },
    { name: "Australie", flag: "🇦🇺", link: "https://amzlink.to/az05kTTrYJ06L" },
    { name: "Belgique", flag: "🇧🇪", link: "https://www.amazon.com.be/shop/influencer-fb942837" },
    { name: "Brésil", flag: "🇧🇷", link: "https://amzlink.to/az0ymmoCLHvyA" }
];

const personalStores = FIXED_14_COUNTRIES.map(c => ({ name: c.name, flag: c.flag, link: c.link }));

const influencerStores = [
    { name: "États-Unis", flag: "🇺🇸", link: "https://amzlink.to/az0G6w0uuYRlg" },
    { name: "Italie", flag: "🇮🇹", link: "https://amzlink.to/az0yC7BiDQmPg" },
    { name: "Espagne", flag: "🇪🇸", link: "https://amzlink.to/az0DKsP6Zr5IL" },
    { name: "Allemagne", flag: "🇩🇪", link: "https://amzlink.to/az0PuGdrA0kgh" },
    { name: "Canada", flag: "🇨🇦", link: "https://amzlink.to/az0YFa3j2fsnv" },
    { name: "Inde", flag: "🇮🇳", link: "https://amzlink.to/az0Qry9pNlCkw" },
    { name: "Pays-Bas", flag: "🇳🇱", link: "https://amzlink.to/az0v9jdbSf7Km" },
    { name: "Suède", flag: "🇸🇪", link: "https://amzlink.to/az0Q5qEXfyqk5" },
    { name: "Singapour", flag: "🇸🇬", link: "https://amzlink.to/az05gMuq73i99" },
    { name: "Royaume-Uni", flag: "🇬🇧", link: "https://amzlink.to/az0VutIAPP8MY" },
    { name: "Australie", flag: "🇦🇺", link: "https://amzlink.to/az0on91nKaQvh" },
    { name: "Belgique", flag: "🇧🇪", link: "https://www.amazon.com.be/shop/influencer-fb942837" }
];

const STATS = {
    totalShops: 26,
    totalCountries: 14,
    totalContinents: 5
};

export default function Home() {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const update = () => setIsOnline(navigator.onLine);
        if (typeof window !== 'undefined') {
            window.addEventListener('online', update);
            window.addEventListener('offline', update);
            update();
        }
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('online', update);
                window.removeEventListener('offline', update);
            }
        };
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            var Tawk_API = Tawk_API || {};
            (function(){
                var s1 = document.createElement("script");
                s1.async = true;
                s1.src = 'https://embed.tawk.to/6738b4f02480f5b4f59f0f47/1icsoqkl4';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin', '*');
                var s0 = document.getElementsByTagName("script")[0];
                s0.parentNode.insertBefore(s1, s0);
            })();
        }
    }, []);

    return (<>
        <Head>
            <title>🏆 Reussitess® Global Nexus 🏆</title>
            <meta name="description" content="Hub Central du Réseau Mondial" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className="container">
            <header className="header">
                <h1>🏆 Reussitess® Global Nexus 🏆</h1>
                <p className="status-indicator">
                    Statut : {isOnline ? '🟢 En ligne' : '🔴 Hors ligne'}
                </p>
            </header>

            <section className="welcome-section">
                <h2>Bienvenue au cœur du réseau Reussitess® Global</h2>
                <p>Ce hub central connecte nos <strong>{STATS.totalShops} boutiques Amazon</strong> à travers <strong>{STATS.totalCountries} pays</strong>, offrant un accès unifié à notre écosystème mondial d'excellence et d'innovation.</p>
            </section>

            <section className="stats-dashboard">
                <h2>Statistiques Globales</h2>
                <div className="stats-grid">
                    <div className="stat-card">
                        <h3>{STATS.totalShops}</h3>
                        <p>Boutiques Amazon</p>
                    </div>
                    <div className="stat-card">
                        <h3>{STATS.totalCountries}</h3>
                        <p>Pays Connectés</p>
                    </div>
                    <div className="stat-card">
                        <h3>{STATS.totalContinents}</h3>
                        <p>Continents</p>
                    </div>
                    <div className="stat-card">
                        <h3>24/7</h3>
                        <p>Disponibilité</p>
                    </div>
                </div>
            </section>

            <section className="shop-list">
                <h2>🛍️ Boutiques Personnelles ({personalStores.length})</h2>
                <div className="shops-grid">
                    {personalStores.map((shop, index) => (
                        <div key={index} className="shop-item">
                            <span className="shop-flag">{shop.flag}</span>
                            <h4>{shop.name}</h4>
                            <a href={shop.link} target="_blank" rel="nofollow sponsored noopener noreferrer" className="shop-link-btn">
                                🛒 Visiter
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <section className="shop-list">
                <h2>⭐ Boutiques Influenceur ({influencerStores.length})</h2>
                <div className="shops-grid">
                    {influencerStores.map((shop, index) => (
                        <div key={index} className="shop-item influencer">
                            <span className="shop-flag">{shop.flag}</span>
                            <h4>{shop.name}</h4>
                            <a href={shop.link} target="_blank" rel="nofollow sponsored noopener noreferrer" className="shop-link-btn influencer-btn">
                                ⭐ Visiter
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <section className="shop-list">
                <h2>🔗 Accès Rapide au Réseau</h2>
                <div className="quick-access-grid">
                    <div className="quick-access-item">
                        <div className="item-icon">🏠</div>
                        <h4>Page d'Accueil</h4>
                        <p>Découvrez notre vitrine principale avec vue d'ensemble du réseau global</p>
                        <a href="https://reussitess-global-pwa.vercel.app" className="item-btn btn-consult">Accéder</a>
                    </div>
                    <div className="quick-access-item">
                        <div className="item-icon">📊</div>
                        <h4>Tableau de Bord</h4>
                        <p>Gérez et suivez vos activités sur notre plateforme sécurisée</p>
                        <a href="https://reussitess-global-pwa.vercel.app" className="item-btn btn-consult">Accéder</a>
                    </div>
                    <div className="quick-access-item">
                        <div className="item-icon">🔐</div>
                        <h4>Connexion</h4>
                        <p>Accédez à votre espace personnel sécurisé</p>
                        <a href="https://reussitess-global-pwa.vercel.app" className="item-btn btn-join">Se Connecter</a>
                    </div>
                    <div className="quick-access-item">
                        <div className="item-icon">📝</div>
                        <h4>Inscription</h4>
                        <p>Rejoignez le réseau Reussitess® Global</p>
                        <a href="https://reussitess-global-pwa.vercel.app" className="item-btn btn-join">S'inscrire</a>
                    </div>
                    <div className="quick-access-item">
                        <div className="item-icon">🛍️</div>
                        <h4>Boutiques Mondiales</h4>
                        <p>Explorez nos {STATS.totalShops} boutiques Amazon dans {STATS.totalCountries} pays</p>
                        <a href="https://reussitess-global-pwa.vercel.app" className="item-btn btn-consult">Découvrir</a>
                    </div>
                    <div className="quick-access-item">
                        <div className="item-icon">📱</div>
                        <h4>Application PWA</h4>
                        <p>Installez notre app pour un accès hors ligne</p>
                        <a href="https://reussitess-global-pwa.vercel.app" className="item-btn btn-join">Installer</a>
                    </div>
                    <div className="quick-access-item">
                        <div className="item-icon">📈</div>
                        <h4>Analyse de Performance</h4>
                        <p>Suivi en temps réel des clics, conversions et revenus par pays</p>
                        <a href="/analytics" className="item-btn btn-join">Consulter</a>
                    </div>
                    <div className="quick-access-item">
                        <div className="item-icon">⚖️</div>
                        <h4>Conformité & Fiscalité</h4>
                        <p>Guides sur la TVA et exigences légales des 14 marchés</p>
                        <a href="/legal" className="item-btn btn-consult">Consulter</a>
                    </div>
                </div>
            </section>

            <section className="shop-list">
                <h2>🛍️ Boutiques Personnelles ({personalStores.length})</h2>
                <div className="shops-grid">
                    {personalStores.map((shop, index) => (
                        <div key={index} className="shop-item">
                            <span className="shop-flag">{shop.flag}</span>
                            <h4>{shop.name}</h4>
                            <a href={shop.link} target="_blank" rel="nofollow sponsored noopener noreferrer" className="shop-link-btn">
                                🛒 Visiter
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <section className="shop-list">
                <h2>⭐ Boutiques Influenceur ({influencerStores.length})</h2>
                <div className="shops-grid">
                    {influencerStores.map((shop, index) => (
                        <div key={index} className="shop-item influencer">
                            <span className="shop-flag">{shop.flag}</span>
                            <h4>{shop.name}</h4>
                            <a href={shop.link} target="_blank" rel="nofollow sponsored noopener noreferrer" className="shop-link-btn influencer-btn">
                                ⭐ Visiter
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <section className="shop-list">
                <h2>Actions Rapides</h2>
                <div className="quick-actions">
                    <button className="action-btn">🏠 Accueil</button>
                    <button className="action-btn">📊 Dashboard</button>
                    <button className="action-btn">🔌 Test Connexion</button>
                    <button className="action-btn">📈 Statistiques</button>
                </div>
            </section>

            <footer className="footer">
                <p><strong>Reussitess® Global Nexus</strong></p>
                <p>Hub Central du Réseau Mondial</p>
                <p className="status-badge">🟢 Connecté au réseau global</p>
                <p>© 2024 Tous droits réservés</p>
                <p>Développé avec Next.js et Workbox (PWA)</p>
            </footer>
        </div>

        <style jsx global>{`
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: #333;
                margin: 0;
                padding: 0;
                min-height: 100vh;
            }
            .container {
                max-width: 1400px;
                margin: 0 auto;
                padding: 20px;
            }
            .header {
                background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
                color: white;
                padding: 40px;
                border-radius: 20px;
                margin-bottom: 30px;
                text-align: center;
                box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            }
            .header h1 {
                margin: 0 0 10px 0;
                font-size: 2.8em;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
            }
            .status-indicator {
                font-size: 1em;
                opacity: 0.95;
            }
            .welcome-section {
                background: rgba(255,255,255,0.95);
                padding: 30px;
                border-radius: 20px;
                margin-bottom: 30px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.1);
            }
            .welcome-section h2 {
                color: #4a4a4a;
                margin-bottom: 15px;
            }
            .stats-dashboard {
                margin-bottom: 40px;
                background: rgba(255,255,255,0.95);
                padding: 30px;
                border-radius: 20px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.1);
            }
            .stats-dashboard h2 {
                text-align: center;
                color: #4a4a4a;
                margin: 0 0 30px 0;
                font-size: 2em;
            }
            .stats-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                gap: 20px;
            }
            .stat-card {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 30px 20px;
                border-radius: 15px;
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
                text-align: center;
                transition: transform 0.3s;
            }
            .stat-card:hover {
                transform: translateY(-5px);
            }
            .stat-card h3 {
                margin: 0;
                font-size: 3em;
                font-weight: bold;
            }
            .stat-card p {
                margin: 10px 0 0 0;
                font-size: 1em;
                opacity: 0.95;
            }
            .shop-list {
                background: rgba(255,255,255,0.95);
                padding: 30px;
                border-radius: 20px;
                margin-bottom: 30px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.1);
            }
            .shop-list h2 {
                color: #4a4a4a;
                margin: 0 0 25px 0;
                font-size: 1.8em;
                border-bottom: 3px solid #667eea;
                padding-bottom: 15px;
            }
            .quick-access-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 20px;
            }
            .quick-access-item {
                background: white;
                padding: 20px;
                border-radius: 12px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
                text-align: center;
                transition: all 0.3s;
            }
            .quick-access-item:hover {
                transform: translateY(-5px);
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            }
            .item-icon {
                font-size: 2em;
                margin-bottom: 10px;
            }
            .quick-access-item h4 {
                color: #2575fc;
                margin: 10px 0 5px 0;
            }
            .quick-access-item p {
                font-size: 0.9em;
                color: #666;
                min-height: 40px;
                margin-bottom: 15px;
            }
            .item-btn {
                display: block;
                width: 100%;
                padding: 10px;
                border-radius: 8px;
                text-decoration: none;
                font-weight: bold;
                transition: opacity 0.3s;
                border: none;
                cursor: pointer;
            }
            .btn-consult {
                background-color: #00bcd4;
                color: white;
            }
            .btn-join {
                background-color: #ff9800;
                color: white;
            }
            .quick-actions {
                display: flex;
                flex-wrap: wrap;
                gap: 15px;
                justify-content: center;
            }
            .action-btn {
                padding: 12px 25px;
                background: linear-gradient(45deg, #667eea, #764ba2);
                color: white;
                border: none;
                border-radius: 25px;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s;
            }
            .action-btn:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            }
            .footer {
                text-align: center;
                margin-top: 40px;
                padding: 30px;
                background: rgba(255,255,255,0.95);
                border-radius: 20px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.1);
                color: #666;
            }
            .footer p {
                margin: 5px 0;
            }
            .status-badge {
                color: #10b981;
                font-weight: bold;
            }
            @media (max-width: 768px) {
                .header h1 { font-size: 2em; }
                .stats-grid { grid-template-columns: repeat(2, 1fr); }
                .quick-access-grid { grid-template-columns: 1fr; }
            }
                .shops-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 20px;
                    margin-top: 20px;
                }
                .shop-item {
                    background: white;
                    padding: 25px;
                    border-radius: 15px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    transition: all 0.3s;
                }
                .shop-item:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
                }
                .shop-item.influencer {
                    background: linear-gradient(135deg, #fff5e6 0%, #ffe6cc 100%);
                }
                .shop-flag {
                    font-size: 2.5em;
                    margin-right: 15px;
                }
                .shop-item h4 {
                    margin: 0;
                    flex-grow: 1;
                    font-size: 1.2em;
                }
                .shop-link-btn {
                    background: linear-gradient(45deg, #ff9500, #ffb84d);
                    color: white;
                    padding: 12px 20px;
                    border-radius: 25px;
                    text-decoration: none;
                    font-weight: bold;
                    white-space: nowrap;
                }
                .shop-link-btn:hover {
                    background: linear-gradient(45deg, #e6860a, #ff9500);
                }
                .influencer-btn {
                    background: linear-gradient(45deg, #9333ea, #c084fc);
                }
                .influencer-btn:hover {
                    background: linear-gradient(45deg, #7e22ce, #9333ea);
                }
        `}</style>
    </>);
}
