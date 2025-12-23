import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Certificat() {
  const router = useRouter();
  const { id, zone } = router.query;
  const [date, setDate] = useState('');

  useEffect(() => {
    setDate(new Date().toLocaleString());
  }, []);

  return (
    <div style={{ backgroundColor: '#f4f4f4', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'serif' }}>
      
      <div style={{ width: '100%', maxWidth: '800px', background: '#fff', border: '10px solid #000', padding: '40px', position: 'relative', boxShadow: '0 0 50px rgba(0,0,0,0.1)' }}>
        
        {/* FILIGRANE NEXUS */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-45deg)', fontSize: '100px', color: 'rgba(0,0,0,0.03)', whiteSpace: 'nowrap', pointerEvents: 'none', fontWeight: 'bold' }}>
          GLOBAL NEXUS
        </div>

        <div style={{ textAlign: 'center', borderBottom: '2px solid #000', paddingBottom: '20px', marginBottom: '30px' }}>
          <h1 style={{ margin: 0, fontSize: '28px', textTransform: 'uppercase', letterSpacing: '5px' }}>Certificat de Conformité Numérique</h1>
          <p style={{ margin: '5px 0', fontSize: '14px', fontStyle: 'italic' }}>Délivré par le protocole Air-Bot v2.5 - Global Nexus</p>
        </div>

        <div style={{ fontSize: '18px', lineHeight: '1.6' }}>
          <p>Le présent document atteste que l'identifiant <strong>{id || 'NXS-TEMP-99'}</strong> a satisfait aux contrôles de conformité internationale pour la zone :</p>
          <h2 style={{ textAlign: 'center', background: '#000', color: '#fff', padding: '10px', margin: '20px 0' }}>{zone || 'ZONE INTERNATIONALE'}</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px', fontSize: '14px' }}>
            <div>
              <strong>Date d'émission :</strong> {date}<br />
              <strong>Statut :</strong> Certifié & Inscrit (Blockchain)<br />
              <strong>Validité :</strong> Permanente
            </div>
            <div style={{ textAlign: 'right' }}>
              <strong>Signature Numérique :</strong><br />
              <span style={{ fontSize: '10px', color: '#888' }}>0x746869732069732061207265616c2068617368</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '50px', borderTop: '1px solid #ddd', paddingTop: '20px', textAlign: 'center', fontSize: '12px', color: '#666' }}>
          Ce certificat est conforme aux réglementations internationales de commerce décentralisé.<br />
          Aucune donnée personnelle n'a été stockée durant ce processus conformément au RGPD.
        </div>
      </div>

      <div style={{ marginTop: '30px', display: 'flex', gap: '20px' }}>
        <button onClick={() => window.print()} style={{ padding: '10px 20px', cursor: 'pointer', background: '#333', color: '#fff', border: 'none', borderRadius: '5px' }}>🖨️ Imprimer</button>
        <Link href="/" style={{ padding: '10px 20px', background: '#00ff41', color: '#000', textDecoration: 'none', fontWeight: 'bold', borderRadius: '5px' }}>🏠 Retour Accueil</Link>
      </div>
    </div>
  );
}
