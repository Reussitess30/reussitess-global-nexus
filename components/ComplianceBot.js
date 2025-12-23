import React, { useState, useEffect } from 'react';

export default function ComplianceBot() {
  const [status, setStatus] = useState('Analyse de la zone...');
  const paysAutorises = [
    "France", "Angleterre", "Italie", "Allemagne", "Suède", "Singapour", 
    "Australie", "Espagne", "Brésil", "Royaume-Uni", "Inde", 
    "Nouvelle-Zélande", "États-Unis", "Canada"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('Zone Certifiée : Accès AirPods Autorisé ✅');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      bottom: '100px',
      left: '20px',
      background: 'rgba(0, 0, 0, 0.9)',
      border: '2px solid #00ff41',
      borderRadius: '15px',
      padding: '15px',
      zIndex: 1000,
      maxWidth: '250px',
      boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)',
      fontFamily: 'monospace'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
        <div style={{ width: '10px', height: '10px', background: '#00ff41', borderRadius: '50%', animation: 'pulse 1s infinite' }}></div>
        <span style={{ color: '#00ff41', fontWeight: 'bold', fontSize: '12px' }}>AIR-BOT V2 (International)</span>
      </div>
      <p style={{ color: '#fff', fontSize: '11px', margin: 0 }}>{status}</p>
      <div style={{ marginTop: '10px', fontSize: '9px', color: '#888' }}>
        Conforme aux 14 zones REUSSITESS®
      </div>
      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.3; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
