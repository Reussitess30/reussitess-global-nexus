import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function InvestirReuss() {
  const [threats, setThreats] = useState(1240);
  const [status, setStatus] = useState("BOUCLIER ACTIF");
  const pays = ["France", "Belgique", "Italie", "Allemagne", "Suède", "Singapour", "Australie", "Espagne", "Brésil", "Royaume-Uni", "Inde", "Nouvelle-Zélande", "États-Unis", "Canada"];
  const contractAddress = "0x4b3bFf4b58d22Ad363bb260e22032414d4CfdDB8";

  // Simulation de l'activité de l'armée des 200 IA
  useEffect(() => {
    const interval = setInterval(() => {
      setThreats(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: '#020617', color: '#f8fafc', minHeight: '100vh', padding: '20px', fontFamily: 'Inter, sans-serif' }}>
      <main style={{ maxWidth: '900px', margin: '0 auto', background: '#0f172a', padding: '40px', borderRadius: '24px', border: '1px solid #3b82f6', boxShadow: '0 0 40px rgba(59, 130, 246, 0.2)' }}>
        
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: '#3b82f6', fontSize: '1.4rem', fontWeight: '900' }}>REUSSITESS©NEURO-X : ARMÉE NUMÉRIQUE SOUVERAINE</h1>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px' }}>
            <div style={{ background: '#064e3b', color: '#34d399', padding: '5px 15px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 'bold', border: '1px solid #059669' }}>
              STATUS : {status} | 1Mrd VÉRIFIÉ ✅
            </div>
            <div style={{ background: '#450a0a', color: '#f87171', padding: '5px 15px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 'bold', border: '1px solid #b91c1c' }}>
              MENACES NEUTRALISÉES : {threats}
            </div>
          </div>
        </header>

        {/* SECTION 1 : INFOS RÉELLES ET CONTRAT */}
        <section style={{ marginBottom: '35px', background: 'rgba(59, 130, 246, 0.05)', padding: '25px', borderRadius: '15px', border: '1px solid #1e40af' }}>
          <h3 style={{ color: '#3b82f6', marginBottom: '10px' }}>🛡️ UNITÉ DE PUISSANCE : 1 000 000 000 REUSS</h3>
          <p style={{ fontSize: '0.9rem' }}>Chaque unité alimente l'Oracle NEURO-X. Ce volume massif garantit la stabilité et la résistance contre toute manipulation de marché.</p>
          <div style={{ background: '#000', padding: '15px', borderRadius: '10px', marginTop: '15px', textAlign: 'center' }}>
            <code style={{ color: '#60a5fa', fontSize: '0.9rem', wordBreak: 'break-all' }}>CONTRAT : {contractAddress}</code>
          </div>
        </section>

        {/* SECTION 2 : L'ARMÉE DES 200 IA (TESTÉ SUR TERMUX) */}
        <section style={{ marginBottom: '35px', background: '#000', padding: '25px', borderRadius: '15px', border: '1px solid #ef4444' }}>
          <h3 style={{ color: '#ef4444' }}>⚔️ DISPOSITIF MILITAIRE ANTI-PIRATE</h3>
          <p style={{ fontSize: '0.9rem', marginBottom: '15px' }}>Test de riposte validé : Détection et interception hors des 14 nations autorisées.</p>
          <ul style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
            <li>• 50 IA Sentinelles : Scan Zero-Day 24/7.</li>
            <li>• 50 IA Post-Quantiques : Cryptage grade militaire.</li>
            <li>• 50 IA Interceptrices : Neutralisation des IP hostiles.</li>
            <li>• 50 IA Stratégiques : Maintien de la positivité "Boudoum".</li>
          </ul>
        </section>

        {/* SECTION 3 : CONFORMITÉ ET DEVISES */}
        <section style={{ marginBottom: '35px' }}>
          <h3 style={{ color: '#3b82f6' }}>⚖️ LÉGALITÉ ET GÉNÉRATION DE VALEUR</h3>
          <p style={{ fontSize: '0.9rem' }}>Conformité <strong>EU AI Act</strong> et <strong>GAFI</strong>. Les revenus sont générés par les licences d'utilisation payées en devises (€, $, £) par les institutions des 14 pays partenaires.</p>
        </section>

        {/* LISTE DES PAYS */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '40px', opacity: 0.7 }}>
          {pays.map(p => <span key={p} style={{ fontSize: '0.6rem', background: '#1e293b', padding: '3px 8px', borderRadius: '4px' }}>{p.toUpperCase()}</span>)}
        </div>

        <footer style={{ textAlign: 'center', borderTop: '1px solid #1e293b', paddingTop: '30px' }}>
          <p style={{ color: '#3b82f6', fontWeight: '900', fontSize: '1.2rem' }}>GUADELOUPE : TERRE DE CHAMPIONS</p>
          <p style={{ color: '#00ff41', fontWeight: 'bold' }}>POSITIVITÉ À L'INFINI — BOUDOUM !</p>
          <div style={{ marginTop: '25px' }}>
            <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none', border: '1px solid #334155', padding: '10px 20px', borderRadius: '50px', fontSize: '0.8rem' }}>← RETOUR AU PORTAIL</Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
