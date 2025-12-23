import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PasseportMondial() {
  const [terminal, setTerminal] = useState(['[SYSTEM] Initialisation de Reussitess©...']);
  const [step, setStep] = useState(0);
  const [isVerified, setIsVerified] = useState(false);
  const [activeIAs, setActiveIAs] = useState(0);
  const [protocolId, setProtocolId] = useState('');
  const [userZone, setUserZone] = useState('');

  const pays = ["France", "Angleterre", "Italie", "Allemagne", "Suède", "Singapour", "Australie", "Espagne", "Brésil", "Royaume-Uni", "Inde", "Nouvelle-Zélande", "États-Unis", "Canada"];

  useEffect(() => {
    if (step === 1 && activeIAs < 100) {
      const interval = setInterval(() => {
        setActiveIAs(prev => (prev >= 100 ? 100 : prev + 1));
      }, 40);
      return () => clearInterval(interval);
    }
  }, [step, activeIAs]);

  const startValidation = (country) => {
    setUserZone(country);
    setStep(1);
    const pId = 'REU-' + Math.random().toString(36).toUpperCase().substring(2, 12);
    setProtocolId(pId);

    const messages = [
      `[IA-LOG] Déploiement des 100 unités sur la zone ${country}...`,
      "[IA-LOG] Analyse des protocoles de conformité Reussitess©...",
      "[IA-LOG] Sécurisation du tunnel de données RSA-4096...",
      "[IA-LOG] Minage du certificat de possession Blockchain...",
      "[IA-LOG] Validation finale par le noyau Reussitess©."
    ];

    messages.forEach((msg, i) => {
      setTimeout(() => {
        setTerminal(prev => [...prev, msg]);
        if (i === messages.length - 1) setIsVerified(true);
      }, (i + 1) * 1200);
    });
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#00ff41', minHeight: '100vh', fontFamily: 'monospace', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <Link href="/" style={{ alignSelf: 'flex-start', background: '#00ff41', color: '#000', padding: '8px 15px', textDecoration: 'none', fontWeight: 'bold', borderRadius: '4px', fontSize: '12px', marginBottom: '20px' }}>🏠 RETOUR</Link>

      <div style={{ width: '100%', maxWidth: '650px', background: '#050505', border: '1px solid #00ff41', padding: '30px', borderRadius: '15px', boxShadow: '0 0 40px rgba(0,255,65,0.1)' }}>
        <h1 style={{ textAlign: 'center', fontSize: '1.4rem', color: '#fff', marginBottom: '10px' }}>🛡️ AIR-BOT : MONITORING REUSSITESS©</h1>

        {step === 0 ? (
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#888', marginBottom: '20px' }}>Activation des 100 IA Reussitess© :</p>
            <select onChange={(e) => startValidation(e.target.value)} style={{ width: '100%', padding: '15px', background: '#000', color: '#00ff41', border: '1px solid #00ff41' }}>
              <option>-- CHOISIR PAYS --</option>
              {pays.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
        ) : (
          <div>
            <div style={{ background: '#111', padding: '15px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #222' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>UNITÉS IA REUSSITESS© : {activeIAs}/100</span>
                <span style={{ color: activeIAs === 100 ? '#00ff41' : '#ffcc00' }}>
                  {activeIAs === 100 ? '● SYNCHRONISÉ' : '○ CALCUL...'}
                </span>
              </div>
              <div style={{ height: '4px', background: '#333', width: '100%', borderRadius: '2px' }}>
                <div style={{ height: '100%', background: '#00ff41', width: `${activeIAs}%`, transition: 'width 0.1s' }}></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(20, 1fr)', gap: '4px', marginTop: '15px' }}>
                {Array.from({ length: 100 }).map((_, i) => (
                  <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', background: i < activeIAs ? '#00ff41' : '#222', boxShadow: i < activeIAs ? '0 0 5px #00ff41' : 'none' }}></div>
                ))}
              </div>
            </div>

            <div style={{ background: '#000', padding: '15px', fontSize: '11px', border: '1px solid #111', minHeight: '120px' }}>
              {terminal.map((line, i) => <div key={i} style={{ marginBottom: '5px' }}>{`> ${line}`}</div>)}
            </div>
            
            {isVerified && (
              <div style={{ textAlign: 'center', marginTop: '25px' }}>
                <Link href={`/certificat?id=${protocolId}&zone=${userZone}`} style={{ display: 'inline-block', background: '#00ff41', color: '#000', padding: '15px 30px', borderRadius: '5px', fontWeight: 'bold', textDecoration: 'none' }}>
                  📜 CERTIFICAT REUSSITESS©
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
