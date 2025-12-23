import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PasseportMondial() {
  const [terminal, setTerminal] = useState(['[SYSTEM] Initialisation de la Matrice Reussitess©...']);
  const [step, setStep] = useState(0);
  const [activeIAs, setActiveIAs] = useState(0);
  const [isVerified, setIsVerified] = useState(false);

  // FONCTION SUPÉRIEURE : SYNC INTER-MODULAIRE (La Matrice)
  const activateTheMatrix = () => {
    return [
      "[MATRIX] Analyse des 4 piliers terminée.",
      "[MATRIX] IA Expert 1 (Quiz) : Synchronisée à 100%.",
      "[MATRIX] IA Expert 2 (Crypto) : Registre immuable prêt.",
      "[MATRIX] IA Expert 3 (Global) : Flux de données optimisé.",
      "[MATRIX] Les 100 IA de Protection : Bouclier actif."
    ];
  };

  useEffect(() => {
    if (step === 1 && activeIAs < 100) {
      const interval = setInterval(() => {
        setActiveIAs(prev => (prev >= 100 ? 100 : prev + 1));
      }, 25); // Vitesse supérieure
      return () => clearInterval(interval);
    }
  }, [step, activeIAs]);

  const startValidation = (country) => {
    setStep(1);
    const matrixLogs = activateTheMatrix();
    const sequence = [
      `[LOC] Accès depuis la zone : ${country}`,
      ...matrixLogs,
      "[KERNEL] Fusion des intelligences en cours...",
      "[SUCCESS] Reussitess© est désormais protégé par l'Essaim."
    ];

    sequence.forEach((msg, i) => {
      setTimeout(() => {
        setTerminal(prev => [...prev, msg]);
        if (i === sequence.length - 1) setIsVerified(true);
      }, (i + 1) * 800); // Réponse ultra-rapide
    });
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#00ff41', minHeight: '100vh', fontFamily: 'monospace', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <div style={{ width: '100%', maxWidth: '800px', background: '#050505', border: '3px solid #00ff41', padding: '40px', borderRadius: '10px', boxShadow: '0 0 100px rgba(0,255,65,0.3)', marginTop: '40px' }}>
        <h1 style={{ textAlign: 'center', color: '#fff', fontSize: '2rem', textShadow: '0 0 20px #00ff41' }}>💎 REUSSITESS© SUPREMACY</h1>
        
        {step === 0 ? (
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#00ff41', fontSize: '1.2rem', marginBottom: '30px' }}>DÉPLOYER LA MATRICE D'IA SUR VOTRE ZONE</p>
            <select onChange={(e) => startValidation(e.target.value)} style={{ width: '100%', padding: '20px', background: '#000', color: '#00ff41', border: '2px solid #00ff41', fontSize: '1.1rem', cursor: 'crosshair' }}>
              <option>-- SÉLECTIONNEZ UNE JURIDICTION --</option>
              {["France", "Angleterre", "Italie", "Allemagne", "Suède", "Singapour", "Australie", "Espagne", "Brésil", "Royaume-Uni", "Inde", "Nouvelle-Zélande", "États-Unis", "Canada"].map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>MATRICE ACTIVE : {activeIAs}%</span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(50, 1fr)', gap: '2px', marginTop: '10px' }}>
                {Array.from({ length: 100 }).map((_, i) => (
                  <div key={i} style={{ width: '100%', height: '8px', background: i < activeIAs ? '#00ff41' : '#111', boxShadow: i < activeIAs ? '0 0 10px #00ff41' : 'none' }}></div>
                ))}
              </div>
            </div>
            <div style={{ background: '#000', padding: '25px', border: '1px solid #333', height: '250px', overflowY: 'auto', borderRadius: '5px' }}>
              {terminal.map((line, i) => <div key={i} style={{ marginBottom: '10px', fontSize: '13px' }}>{`> ${line}`}</div>)}
            </div>
            {isVerified && (
              <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <Link href="/certificat" style={{ background: '#fff', color: '#000', padding: '20px 50px', borderRadius: '5px', fontWeight: '900', textDecoration: 'none', fontSize: '1.3rem', display: 'inline-block' }}>
                  GÉNÉRER LE PASSEPORT SUPRÊME
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
