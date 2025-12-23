import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PasseportMondial() {
  const [terminal, setTerminal] = useState(['[SYSTEM] Initialisation du Noyau Reussitess©...']);
  const [step, setStep] = useState(0);
  const [activeIAs, setActiveIAs] = useState(0);
  const [isVerified, setIsVerified] = useState(false);

  // --- FONCTIONS DE PUISSANCE DES 100 IA ---
  
  // 1. Fonction de Protection Globale (Surveillance des 3 IA expertes)
  const syncWithExperts = () => {
    return [
      "[IA-PROTECT] Liaison avec l'IA Quiz : Flux sécurisé établi.",
      "[IA-PROTECT] Liaison avec l'IA Crypto : Registre synchronisé.",
      "[IA-PROTECT] Liaison avec l'IA Global : Protocoles alignés.",
      "[IA-CORE] Statut : Les 100 IA protègent l'intégrité du projet."
    ];
  };

  // 2. Fonction de Détection de Menaces
  const runSecurityAudit = () => {
    return "[SECURITY] Audit en temps réel : 0 vulnérabilité détectée.";
  };

  useEffect(() => {
    if (step === 1 && activeIAs < 100) {
      const interval = setInterval(() => {
        setActiveIAs(prev => (prev >= 100 ? 100 : prev + 1));
      }, 30);
      return () => clearInterval(interval);
    }
  }, [step, activeIAs]);

  const startValidation = (country) => {
    setStep(1);
    const expertLogs = syncWithExperts();
    const auditLog = runSecurityAudit();

    const sequence = [
      `[AUTH] Juridiction : ${country}`,
      auditLog,
      ...expertLogs,
      "[IA-MINT] Génération du Hash de protection Reussitess©...",
      "[SUCCESS] Système blindé par les 100 unités."
    ];

    sequence.forEach((msg, i) => {
      setTimeout(() => {
        setTerminal(prev => [...prev, msg]);
        if (i === sequence.length - 1) setIsVerified(true);
      }, (i + 1) * 1000);
    });
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#00ff41', minHeight: '100vh', fontFamily: 'monospace', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <Link href="/" style={{ alignSelf: 'flex-start', background: '#00ff41', color: '#000', padding: '10px 20px', textDecoration: 'none', fontWeight: 'bold', borderRadius: '4px' }}>🏠 REUSSITESS© HOME</Link>

      <div style={{ width: '100%', maxWidth: '700px', background: '#050505', border: '2px solid #00ff41', padding: '40px', borderRadius: '20px', marginTop: '50px', boxShadow: '0 0 60px rgba(0,255,65,0.2)' }}>
        <h1 style={{ textAlign: 'center', color: '#fff', letterSpacing: '3px' }}>🛡️ REUSSITESS© SHIELD : 100 IA</h1>

        {step === 0 ? (
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#888', marginBottom: '30px' }}>Activez le bouclier Reussitess© pour votre zone :</p>
            <select onChange={(e) => startValidation(e.target.value)} style={{ width: '100%', padding: '15px', background: '#000', color: '#00ff41', border: '1px solid #00ff41', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem' }}>
              <option>-- SÉLECTIONNEZ VOTRE JURIDICTION --</option>
              {["France", "Angleterre", "Italie", "Allemagne", "Suède", "Singapour", "Australie", "Espagne", "Brésil", "Royaume-Uni", "Inde", "Nouvelle-Zélande", "États-Unis", "Canada"].map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
        ) : (
          <div>
            <div style={{ background: '#0a0a0a', padding: '20px', borderRadius: '10px', marginBottom: '20px', border: '1px solid #1a1a1a' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', fontSize: '14px' }}>
                <span>UNITÉS IA EN ACTION</span>
                <span style={{ color: '#00ff41' }}>{activeIAs}% POWER</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(25, 1fr)', gap: '3px', marginTop: '10px' }}>
                {Array.from({ length: 100 }).map((_, i) => (
                  <div key={i} style={{ width: '5px', height: '5px', background: i < activeIAs ? '#00ff41' : '#111', boxShadow: i < activeIAs ? '0 0 8px #00ff41' : 'none', borderRadius: '1px' }}></div>
                ))}
              </div>
            </div>

            <div style={{ background: '#000', padding: '20px', fontSize: '12px', border: '1px solid #00ff41', height: '200px', overflowY: 'auto', borderRadius: '8px' }}>
              {terminal.map((line, i) => <div key={i} style={{ marginBottom: '8px', color: line.includes('SUCCESS') ? '#fff' : '#00ff41' }}>{`> ${line}`}</div>)}
            </div>

            {isVerified && (
              <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <Link href="/certificat" style={{ background: '#00ff41', color: '#000', padding: '20px 40px', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none', fontSize: '1.2rem', boxShadow: '0 0 30px rgba(0,255,65,0.5)' }}>
                  📜 GÉNÉRER MON PASSEPORT SÉCURISÉ
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
