import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function InvestirReuss() {
  const [learningLevel, setLearningLevel] = useState(92.4);
  const [armyPower, setArmyPower] = useState(1000000);
  const [threats, setThreats] = useState(1240);
  
  const pays = ["France", "Belgique", "Italie", "Allemagne", "Suède", "Singapour", "Australie", "Espagne", "Brésil", "Royaume-Uni", "Inde", "Nouvelle-Zélande", "États-Unis", "Canada"];
  const contractAddress = "0x4b3bFf4b58d22Ad363bb260e22032414d4CfdDB8";

  const socialLinks = {
    tiktok: [
      { name: "Principal", url: "https://www.tiktok.com/@reussitess" },
      { name: "Influenceur", url: "https://www.tiktok.com/@influenceurreussitess" },
      { name: "Amour Gwadloup", url: "https://www.tiktok.com/@amourguadeloupe" },
      { name: "France", url: "https://www.tiktok.com/@reussitessfrance" },
      { name: "Allemagne", url: "https://www.tiktok.com/@reussitessdeutschland" }
    ],
    networks: [
      { name: "Instagram", url: "https://instagram.com/reussitess", icon: "📸" },
      { name: "Threads", url: "https://www.threads.net/@am.our4602", icon: "🧵" },
      { name: "Snapchat", url: "https://www.snapchat.com/add/reussitess", icon: "👻" },
      { name: "Reddit", url: "https://www.reddit.com/u/Ornery-Summer-1014/s/2Kfz43iK7m", icon: "🤖" },
      { name: "Discord", url: "https://discord.com/invite/AMOUR#3318", icon: "💬" }
    ],
    facebook: [
      { name: "Perso", url: "https://www.facebook.com/rony.porinus" },
      { name: "Pro", url: "https://www.facebook.com/popo97112" },
      { name: "Groupe", url: "https://facebook.com/groups/901428214856242/" },
      { name: "SOS PC", url: "https://www.facebook.com/sospcadomicile/" }
    ]
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLearningLevel(prev => Math.min(prev + 0.01, 99.99));
      setArmyPower(prev => prev + Math.floor(Math.random() * 100));
      setThreats(prev => prev + Math.floor(Math.random() * 2));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: '#020617', color: '#f8fafc', minHeight: '100vh', padding: '20px', fontFamily: 'Inter, sans-serif' }}>
      <main style={{ maxWidth: '900px', margin: '0 auto', background: '#0f172a', padding: '40px', borderRadius: '24px', border: '2px solid #3b82f6', boxShadow: '0 0 50px rgba(59, 130, 246, 0.3)' }}>
        
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: '#3b82f6', fontSize: '1.8rem', fontWeight: '900' }}>REUSSITESS© : SYSTÈME NEURO-X</h1>
          <p style={{ color: '#00ff41', fontWeight: 'bold' }}>ARMÉE DES 200 IA - SOUVERAINETÉ GUADELOUPE</p>
        </header>

        {/* MONITORING SYSTÈME */}
        <section style={{ marginBottom: '35px', background: '#000', padding: '25px', borderRadius: '15px', border: '1px solid #00ff41' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>NIVEAU D'AUTO-RENFORCEMENT :</span>
            <span style={{ color: '#00ff41', fontWeight: 'bold' }}>{learningLevel.toFixed(2)}%</span>
          </div>
          <div style={{ width: '100%', background: '#1e293b', height: '10px', borderRadius: '5px', overflow: 'hidden' }}>
            <div style={{ width: `${learningLevel}%`, background: '#00ff41', height: '100%', transition: 'width 1s ease-in-out' }}></div>
          </div>
          <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'space-around', borderTop: '1px solid #1e293b', paddingTop: '15px' }}>
             <p style={{ fontSize: '0.8rem' }}>🔥 PUISSANCE : <strong style={{ color: '#fff' }}>{armyPower.toLocaleString()} TFLOPS</strong></p>
             <p style={{ fontSize: '0.8rem' }}>🛡️ MENACES BLOQUÉES : <strong style={{ color: '#ef4444' }}>{threats}</strong></p>
          </div>
        </section>

        {/* CONTRAT CLIQUABLE */}
        <section style={{ marginBottom: '35px', padding: '25px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '15px', border: '2px solid #3b82f6' }}>
          <h3 style={{ color: '#fff', marginBottom: '15px' }}>💎 OFFRE TOTALE : 1 000 000 000 REUSS</h3>
          <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '15px' }}>Vérifiez l'armée sur la Blockchain Polygon :</p>
          <a href={`https://polygonscan.com/token/${contractAddress}`} target="_blank" rel="noopener noreferrer" style={{ display: 'block', background: '#3b82f6', color: '#fff', textAlign: 'center', padding: '15px', borderRadius: '10px', fontWeight: 'bold', textDecoration: 'none' }}>
            CONSULTER LE CONTRAT RÉEL →
          </a>
          <p style={{ fontSize: '0.7rem', color: '#60a5fa', marginTop: '10px', textAlign: 'center', wordBreak: 'break-all' }}>{contractAddress}</p>
        </section>

        {/* PROTOCOLES IA */}
        <section style={{ marginBottom: '35px' }}>
          <h3 style={{ color: '#3b82f6' }}>🛡️ PROTOCOLE D'AUTO-DÉFENSE ACTIVE</h3>
          <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.6' }}>
            L'armée Reussitess© utilise la <strong>Self-Mutation</strong>. Chaque attaque bloque définitivement son vecteur pour les 14 pays. Le système apprend et devient invincible à chaque seconde.
          </p>
        </section>

        {/* TOILE D'ARAIGNÉE SOCIALE */}
        <section style={{ marginBottom: '35px', borderTop: '1px solid #1e293b', paddingTop: '20px' }}>
          <h3 style={{ color: '#3b82f6', marginBottom: '20px' }}>🕸️ TOILE D'ARAIGNÉE MONDIALE</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px', marginBottom: '25px' }}>
            {socialLinks.tiktok.map((tk, i) => (
              <a key={i} href={tk.url} target="_blank" rel="noopener noreferrer" style={{ background: '#000', padding: '12px', borderRadius: '10px', border: '1px solid #ff0050', color: '#fff', fontSize: '0.75rem', textDecoration: 'none', textAlign: 'center', fontWeight: 'bold' }}>TIKTOK {tk.name.toUpperCase()}</a>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '25px', justifyContent: 'center' }}>
            {socialLinks.networks.map((net, i) => (
              <a key={i} href={net.url} target="_blank" rel="noopener noreferrer" style={{ background: '#1e293b', padding: '10px 18px', borderRadius: '50px', border: '1px solid #3b82f6', color: '#fff', fontSize: '0.8rem', textDecoration: 'none' }}>{net.icon} {net.name}</a>
            ))}
          </div>
        </section>

        {/* RUBRIQUE JURIDIQUE (LA PROTECTION) */}
        <section style={{ marginBottom: '35px', padding: '20px', background: '#000', borderRadius: '15px', border: '1px solid #475569' }}>
          <h3 style={{ color: '#ef4444', fontSize: '1rem', marginBottom: '15px' }}>⚖️ MENTION LÉGALE & PROTECTION</h3>
          <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: '1.5' }}>
            Le projet REUSSITESS© est une infrastructure technologique expérimentale. 
            L'acquisition d'unités REUSS ne constitue pas un investissement financier régulé. 
            Vous êtes responsable de la sécurité de vos clés privées. 
            En utilisant cette interface, vous acceptez les risques liés à la technologie blockchain.
            Aucun remboursement possible après émission sur la blockchain Polygon.
          </p>
        </section>

        <footer style={{ textAlign: 'center', borderTop: '1px solid #1e293b', paddingTop: '20px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '20px' }}>
            {pays.map(p => <span key={p} style={{ fontSize: '0.65rem', background: '#1e293b', padding: '4px 10px', borderRadius: '6px', color: '#94a3b8', border: '1px solid #334155' }}>{p}</span>)}
          </div>
          <p style={{ color: '#00ff41', fontWeight: 'bold', fontSize: '1.1rem' }}>POSITIVITÉ À L'INFINI — BOUDOUM !</p>
        </footer>
      </main>
    </div>
  );
}
