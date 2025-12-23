import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PasseportMondial() {
  const [terminal, setTerminal] = useState(['[SYSTEM] Initialisation...', '[INFO] Vérification des 14 zones...']);
  const [isVerified, setIsVerified] = useState(false);
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVerified(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Si l'utilisateur a cliqué sur Réclamer, on affiche la page dans le cadre sécurisé
  if (showIframe) {
    return (
      <div style={{ backgroundColor: '#000', height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '10px', background: '#0a0a0a', borderBottom: '2px solid #00ff41', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#00ff41', fontWeight: 'bold', fontSize: '12px' }}>🛡️ NAVIGATION SÉCURISÉE REUSSITESS®</span>
          <Link href="/" style={{ background: '#00ff41', color: '#000', padding: '8px 15px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', fontSize: '12px' }}>
            🏠 RETOUR ACCUEIL
          </Link>
        </div>
        <iframe 
          src="https://www.reussitess.fr/airpods" 
          style={{ width: '100%', flex: 1, border: 'none' }} 
          title="AirPods Shop"
        />
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#000', color: '#00ff41', minHeight: '100vh', fontFamily: 'monospace', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ width: '100%', maxWidth: '600px', background: '#050505', border: '1px solid #333', padding: '30px', borderRadius: '15px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>🛂 PROTOCOLE AIR-BOT</h1>
        
        <div style={{ textAlign: 'left', marginBottom: '20px', fontSize: '13px' }}>
          {terminal.map((line, i) => (
            <div key={i} style={{ marginBottom: '5px' }}>{`> ${line}`}</div>
          ))}
        </div>

        {isVerified && (
          <button 
            onClick={() => setShowIframe(true)}
            style={{ width: '100%', background: '#00ff41', color: '#000', padding: '18px', border: 'none', fontWeight: '900', borderRadius: '8px', fontSize: '1.2rem', cursor: 'pointer', animation: 'pulse 1.5s infinite' }}
          >
            🎧 RÉCLAMER MES AIRPODS PRO
          </button>
        )}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
