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
    { name: "Belgique", flag: "🇧🇪", link: "https://amzlink.to/az08ZB76xWpGm" },
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
    { name: "Belgique", flag: "🇧🇪", link: "https://amzlink.to/az08ZB76xWpGm" }
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

    return (<>
        <Head>
            <title>🌐 Reussitess® Global Nexus</title>
            <meta name="description" content="Hub Central - 26 Boutiques Amazon" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className="dash">
            <header className="hdr">
                <div className="ic">🌐</div>
                <h1>Reussitess® Global Nexus</h1>
                <p>Le Hub Central du Réseau Mondial</p>
            </header>
            <section className="wel">
                <h2>Bienvenue au réseau Reussitess® Global</h2>
                <p>Hub central avec <strong>{STATS.totalShops} boutiques</strong> dans <strong>{STATS.totalCountries} pays</strong></p>
            </section>
            <section className="sts">
                <div className="sc"><div className="n">{STATS.totalShops}</div><div className="l">Boutiques</div></div>
                <div className="sc"><div className="n">{STATS.totalCountries}</div><div className="l">Pays</div></div>
                <div className="sc"><div className="n">{STATS.totalContinents}</div><div className="l">Continents</div></div>
                <div className="sc"><div className="n">24/7</div><div className="l">Disponibilité</div></div>
            </section>
            <footer className="ftr">
                <h3>Reussitess® Global Nexus</h3>
                <p>© 2024 Tous droits réservés</p>
            </footer>
        </div>
        <style jsx global>{`
            *{margin:0;padding:0;box-sizing:border-box}
            body{font-family:Arial;background:linear-gradient(135deg,#1e3c72,#7e22ce);min-height:100vh;color:#fff}
            .dash{max-width:1400px;margin:0 auto;padding:20px}
            .hdr{background:rgba(255,255,255,0.1);backdrop-filter:blur(10px);border-radius:24px;padding:40px;text-align:center;margin-bottom:30px}
            .ic{font-size:4em;margin-bottom:10px}
            .hdr h1{font-size:3em;margin-bottom:10px}
            .wel{background:rgba(255,255,255,0.1);border-radius:20px;padding:30px;margin-bottom:30px}
            .wel h2{color:#fbbf24;margin-bottom:15px}
            .sts{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin-bottom:40px}
            .sc{background:linear-gradient(135deg,#8b5cf6,#6d28d9);border-radius:20px;padding:40px 30px;text-align:center;transition:transform 0.3s}
            .sc:hover{transform:translateY(-10px)}
            .n{font-size:4em;font-weight:bold;margin-bottom:10px}
            .l{font-size:1.1em}
            .ftr{background:rgba(255,255,255,0.1);border-radius:20px;padding:40px;text-align:center}
        `}</style>
    </>);
}
