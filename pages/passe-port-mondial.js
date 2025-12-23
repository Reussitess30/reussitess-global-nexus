import React from 'react';

export default function PasseportMondial() {
  const paysAutorises = [
    "France", "Angleterre", "Italie", "Allemagne", "Suède", "Singapour", 
    "Australie", "Espagne", "Brésil", "Royaume-Uni", "Inde", 
    "Nouvelle-Zélande", "États-Unis", "Canada"
  ];

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '20px', fontFamily: 'monospace' }}>
      <h1 style={{ color: '#00ff41', borderBottom: '1px solid #00ff41', paddingBottom: '10px' }}>
        MENU PASSEPORT GLOBAL
      </h1>

      <div style={{ margin: '30px 0', padding: '15px', background: '#111', border: '1px dashed #00ff41' }}>
        <p style={{ color: '#888', fontSize: '12px' }}>[ LIEN EXTERNE SÉCURISÉ ]</p>
        <a href="https://www.reussitess.fr/airpods" style={{
          display: 'inline-block',
          marginTop: '10px',
          color: '#000',
          backgroundColor: '#00ff41',
          padding: '10px 20px',
          textDecoration: 'none',
          fontWeight: 'bold',
          borderRadius: '3px'
        }}>
          ACCÈDER AUX AIRPODS PRO
        </a>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '14px', color: '#00ff41' }}>ZONES DE VALIDITÉ (14) :</h2>
        <ul style={{ listStyle: 'none', padding: 0, opacity: 0.8 }}>
          {paysAutorises.map(p => <li key={p} style={{ margin: '5px 0' }}>• {p}</li>)}
        </ul>
      </div>
    </div>
  );
}
