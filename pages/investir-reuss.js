import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function InvestirReuss() {
  const [learningLevel, setLearningLevel] = useState(94.8);
  const [armyPower, setArmyPower] = useState(1200500);
  const [threats, setThreats] = useState(1480);
  
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

  return (
    <div style={{ backgroundColor: '#020617', color: '#f8fafc', minHeight: '100vh', padding: '15px', fontFamily: 'Inter, sans-serif' }}>
      <main style={{ maxWidth: '850px', margin: '0 auto', background: '#0f172a', padding: '30px', borderRadius: '24px', border: '2px solid #3b82f6' }}>
        
        <header style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ color: '#3b82f6', fontSize: '1.7rem', fontWeight: '900' }}>REUSSITESS© NEURO-X</h1>
          <p style={{ color: '#00ff41', fontWeight: 'bold' }}>GUADELOUPE - TERRES DE CHAMPIONS</p>
        </header>

        {/* MONITORING SYSTÈME */}
        <section style={{ marginBottom: '25px', background: '#000', padding: '20px', borderRadius: '15px', border: '1px solid #00ff41' }}>
          <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>AUTO-APPRENTISSAGE : {learningLevel}% | MENACES BLOQUÉES : {threats}</p>
          <div style={{ width: '100%', background: '#1e293b', height: '8px', borderRadius: '4px', marginTop: '10px' }}>
            <div style={{ width: `${learningLevel}%`, background: '#00ff41', height: '100%' }}></div>
          </div>
        </section>

        {/* CONTRAT ET BLOCKCHAIN */}
        <section style={{ marginBottom: '25px', padding: '20px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '15px', border: '1px solid #3b82f6' }}>
          <h3 style={{ color: '#fff', fontSize: '1.1rem' }}>💎 OFFRE TOTALE : 1 000 000 000 REUSS</h3>
          <a href={`https://polygonscan.com/token/${contractAddress}`} target="_blank" rel="noopener noreferrer" style={{ display: 'block', background: '#3b82f6', color: '#fff', textAlign: 'center', padding: '12px', borderRadius: '8px', marginTop: '15px', textDecoration: 'none', fontWeight: 'bold' }}>
            VOIR LE CONTRAT SUR LA BLOCKCHAIN →
          </a>
        </section>

        {/* RUBRIQUE JURIDIQUE */}
        <section style={{ marginBottom: '30px', padding: '20px', background: '#000', borderRadius: '15px', border: '2px solid #ef4444' }}>
          <h3 style={{ color: '#ef4444', fontSize: '1rem', marginBottom: '10px', fontWeight: 'bold' }}>⚖️ PROTECTION JURIDIQUE & RESPONSABILITÉ</h3>
          <div style={{ fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.6' }}>
            <p><strong>1. Nature du Projet :</strong> Le projet REUSSITESS© est une infrastructure technologique expérimentale basée en Guadeloupe.</p>
            <p><strong>2. Non-Investissement :</strong> L'acquisition d'unités REUSS ne constitue pas un produit financier ou un investissement régulé.</p>
            <p><strong>3. Responsabilité :</strong> Vous êtes seul responsable de la sécurisation de vos actifs. Aucun remboursement n'est possible une fois la transaction gravée sur la blockchain Polygon.</p>
          </div>
        </section>

        {/* TOILE D'ARAIGNÉE SOCIALE */}
        <section style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#3b82f6', marginBottom: '15px' }}>🕸️ RÉSEAU MONDIAL (14 PAYS)</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px' }}>
            {socialLinks.tiktok.map((tk, i) => (
              <a key={i} href={tk.url} target="_blank" rel="noopener noreferrer" style={{ background: '#000', padding: '10px', borderRadius: '8px', border: '1px solid #ff0050', color: '#fff', fontSize: '0.7rem', textDecoration: 'none', textAlign: 'center' }}>TIKTOK {tk.name}</a>
            ))}
          </div>
        </section>

        {/* BOUTON DE RETOUR (PLUS PETIT) */}
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <Link href="/" style={{ background: '#1e293b', color: '#fff', padding: '8px 20px', borderRadius: '30px', border: '1px solid #3b82f6', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.8rem', transition: '0.3s' }}>
            ↩ Retour
          </Link>
        </div>

        <footer style={{ textAlign: 'center', borderTop: '1px solid #1e293b', paddingTop: '20px' }}>
          <p style={{ color: '#00ff41', fontWeight: 'bold' }}>POSITIVITÉ À L'INFINI — BOUDOUM !</p>
        </footer>
      </main>
    </div>
  );
}
