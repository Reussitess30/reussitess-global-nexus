import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PasseportMondial() {
  const [terminal, setTerminal] = useState(['[SYSTEM] Initialisation du protocole Nexus-Compliance...']);
  const [step, setStep] = useState(0);
  const [isVerified, setIsVerified] = useState(false);
  const [protocolId, setProtocolId] = useState('');

  const pays = ["France", "Angleterre", "Italie", "Allemagne", "Suède", "Singapour", "Australie", "Espagne", "Brésil", "Royaume-Uni", "Inde", "Nouvelle-Zélande", "États-Unis", "Canada"];

  const generateProtocol = () => {
    return 'NXS-' + Math.random().toString(36).toUpperCase().substring(2, 12);
  };

  const startValidation = (country) => {
    setStep(1);
    const pId = generateProtocol();
    setProtocolId(pId);

    const sequence = [
      `[JURIDIQUE] Analyse de conformité zone : ${country}`,
      "[IA-CORE] Vérification des protocoles de transport internationaux...",
      "[LEGAL] Application des normes ISO-27001 & RGPD...",
      `[MINT] Création du certificat Nexus ID : ${pId}`,
      "[FINISH] Votre droit de possession est inscrit sur le registre."
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
      
      <div style={{ position: 'fixed', top: '20px', left: '20px', zIndex: 100 }}>
        <Link href="/" style={{ background: '#00ff41', color: '#000', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', fontSize: '12px' }}>
          🏠 RETOUR ACCUEIL
        </Link>
      </div>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: '600px', background: '#050505', border: '1px solid #00ff41', padding: '30px', borderRadius: '15px', boxShadow: '0 0 50px rgba(0,255,65,0.2)' }}>
          <h1 style={{ fontSize: '1.4rem', textAlign: 'center', color: '#fff' }}>🛡️ NEXUS GLOBAL COMPLIANCE</h1>

          {step === 0 ? (
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <p style={{ marginBottom: '20px', color: '#888' }}>Sélectionnez votre juridiction pour validation légale :</p>
              <select onChange={(e) => startValidation(e.target.value)} style={{ background: '#000', color: '#00ff41', border: '1px solid #00ff41', padding: '12px', width: '100%', cursor: 'pointer' }}>
                <option>-- ZONE INTERNATIONALE --</option>
                {pays.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
          ) : (
            <div>
              <div style={{ background: '#000', padding: '15px', borderRadius: '5px', fontSize: '11px', margin: '20px 0', border: '1px solid #111' }}>
                {terminal.map((line, i) => <div key={i} style={{ marginBottom: '5px' }}>{`> ${line}`}</div>)}
              </div>
              
              {isVerified && (
                <div style={{ textAlign: 'center', border: '1px solid #00ff41', padding: '20px', background: 'rgba(0,255,65,0.05)' }}>
                  <p style={{ color: '#fff', fontWeight: 'bold', fontSize: '14px' }}>CERTIFICAT DE CONFORMITÉ ÉMIS</p>
                  <p style={{ fontSize: '12px', color: '#00ff41', marginTop: '10px' }}>
                    ID PROTOCOLE : {protocolId}
                  </p>
                  <div style={{ marginTop: '20px', padding: '10px', background: '#00ff41', color: '#000', fontWeight: 'bold', borderRadius: '4px' }}>
                    ✅ ACCÈS GLOBAL NEXUS VALIDÉ
                  </div>
                  <p style={{ fontSize: '9px', color: '#555', marginTop: '15px' }}>
                    Ce certificat respecte les traités internationaux de transfert de données et les régulations de l'OMC.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
