import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PasseportMondial() {
  const [terminal, setTerminal] = useState(['[SYSTEM] Initialisation...', '[INFO] Vérification des 14 zones...']);
  const [isVerified, setIsVerified] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVerified(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleClaim = () => {
    setIsRedirecting(true);
    // Ouvre le lien dans un nouvel onglet pour ne pas bloquer l'utilisateur
    window.open("https://www.reussitess.fr/airpods", "_blank");
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#00ff41', minHeight: '100vh', fontFamily: 'monospace', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      
      <div style={{ width: '100%', maxWidth: '600px', background: '#050505', border: '1px solid #00ff41', padding: '30px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 0 30px rgba(0,255,65,0.2)' }}>
        
        {!isRedirecting ? (
          <>
            <h1 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>🛂 PROTOCOLE AIR-BOT</h1>
            <div style={{ textAlign: 'left', marginBottom: '20px', fontSize: '13px' }}>
              {terminal.map((line, i) => (
                <div key={i} style={{ marginBottom: '5px' }}>{`> ${line}`}</div>
              ))}
            </div>

            {isVerified && (
              <button 
                onClick={handleClaim}
                style={{ width: '100%', background: '#00ff41', color: '#000', padding: '18px', border: 'none', fontWeight: '900', borderRadius: '8px', fontSize: '1.2rem', cursor: 'pointer' }}
              >
                🎧 RÉCLAMER MES AIRPODS PRO
              </button>
            )}
          </>
        ) : (
          <>
            <h2 style={{ color: '#fff' }}>🚀 TRANSFERT EN COURS...</h2>
            <p style={{ margin: '20px 0' }}>La page de réclamation s'est ouverte dans une nouvelle fenêtre.</p>
            <div style={{ padding: '20px', border: '1px solid #333', borderRadius: '10px', marginBottom: '20px' }}>
              <p style={{ fontSize: '14px' }}>Si la page ne s'est pas ouverte, <a href="https://www.reussitess.fr/airpods" target="_blank" style={{ color: '#00ff41' }}>cliquez ici</a>.</p>
            </div>
          </>
        )}

        {/* CE BOUTON RESTE TOUJOURS LÀ POUR REVENIR À L'ACCUEIL */}
        <div style={{ marginTop: '30px', borderTop: '1px solid #222', paddingTop: '20px' }}>
          <Link href="/" style={{ background: 'transparent', color: '#00ff41', border: '1px solid #00ff41', padding: '12px 25px', display: 'inline-block', textDecoration: 'none', fontWeight: 'bold', borderRadius: '5px' }}>
            🏠 RETOUR À L'ACCUEIL REUSSITESS
          </Link>
        </div>
      </div>
    </div>
  );
}
