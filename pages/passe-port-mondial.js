import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PasseportMondial() {
  const router = useRouter();
  const [terminal, setTerminal] = useState(['[SYSTEM] Initialisation du protocole Nexus...']);
  const [step, setStep] = useState(0);
  const [isVerified, setIsVerified] = useState(false);
  const [protocolId, setProtocolId] = useState('');
  const [userZone, setUserZone] = useState('');

  const pays = ["France", "Angleterre", "Italie", "Allemagne", "Suède", "Singapour", "Australie", "Espagne", "Brésil", "Royaume-Uni", "Inde", "Nouvelle-Zélande", "États-Unis", "Canada"];

  const startValidation = (country) => {
    setUserZone(country);
    setStep(1);
    const pId = 'NXS-' + Math.random().toString(36).toUpperCase().substring(2, 12);
    setProtocolId(pId);

    const sequence = [
      `[IA-CORE] Analyse de zone : ${country}`,
      "[LEGAL] Vérification des traités internationaux...",
      "[BLOCKCHAIN] Minage du certificat de possession...",
      `[ID-GEN] Protocole ${pId} généré.`,
      "[SUCCESS] Validation terminée."
    ];
    
    sequence.forEach((msg, i) => {
      setTimeout(() => {
        setTerminal(prev => [...prev, msg]);
        if (i === sequence.length - 1) setIsVerified(true);
      }, (i + 1) * 1000);
    });
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#00ff41', minHeight: '100vh', fontFamily: 'monospace', padding: '20px', display: 'flex', flexDirection: 'column' }}>
      
      <Link href="/" style={{ position: 'fixed', top: '20px', left: '20px', background: '#00ff41', color: '#000', padding: '10px', textDecoration: 'none', fontWeight: 'bold', borderRadius: '5px', fontSize: '12px' }}>🏠 RETOUR</Link>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: '500px', border: '1px solid #00ff41', padding: '30px', borderRadius: '15px', background: '#050505' }}>
          <h1 style={{ textAlign: 'center', fontSize: '1.2rem', color: '#fff' }}>🛡️ NEXUS GLOBAL AIR-BOT</h1>

          {step === 0 ? (
            <select onChange={(e) => startValidation(e.target.value)} style={{ width: '100%', padding: '15px', background: '#000', color: '#00ff41', border: '1px solid #00ff41', marginTop: '20px' }}>
              <option>-- SÉLECTIONNEZ VOTRE PAYS --</option>
              {pays.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          ) : (
            <div>
              <div style={{ background: '#000', padding: '15px', fontSize: '12px', margin: '20px 0', border: '1px solid #111' }}>
                {terminal.map((line, i) => <div key={i} style={{ marginBottom: '5px' }}>{`> ${line}`}</div>)}
              </div>
              
              {isVerified && (
                <div style={{ textAlign: 'center' }}>
                  <p style={{ color: '#fff', fontSize: '14px', marginBottom: '15px' }}>✅ CERTIFICATION RÉUSSIE</p>
                  <Link href={`/certificat?id=${protocolId}&zone=${userZone}`} style={{ display: 'block', background: '#00ff41', color: '#000', padding: '15px', borderRadius: '5px', fontWeight: 'bold', textDecoration: 'none' }}>
                    📜 VOIR MON CERTIFICAT
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
