import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Certificat() {
  const router = useRouter();
  const { id, zone } = router.query;
  const [date, setDate] = useState('');

  useEffect(() => {
    setDate(new Date().toLocaleString('fr-FR', { timeZone: 'UTC' }));
  }, []);

  return (
    <div style={{ backgroundColor: '#f9f9f9', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px', fontFamily: '"Times New Roman", Times, serif' }}>
      
      <div style={{ width: '100%', maxWidth: '850px', background: '#fff', border: '2px solid #000', padding: '50px', position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', borderRadius: '2px' }}>
        
        {/* SCEAU OFFICIEL NEXUS */}
        <div style={{ position: 'absolute', top: '20px', right: '20px', width: '100px', height: '100px', border: '2px solid #00ff41', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00ff41', fontWeight: 'bold', fontSize: '10px', textAlign: 'center', transform: 'rotate(15deg)' }}>
          VALIDÉ PAR<br/>100 IA<br/>NEXUS
        </div>

        <div style={{ textAlign: 'center', borderBottom: '3px double #000', paddingBottom: '20px', marginBottom: '30px' }}>
          <h1 style={{ margin: 0, fontSize: '32px', textTransform: 'uppercase', letterSpacing: '4px' }}>CERTIFICAT DE CONFORMITÉ</h1>
          <p style={{ margin: '10px 0', fontSize: '16px', fontWeight: 'bold' }}>Protocole d'Éligibilité Numérique Global Nexus</p>
        </div>

        <div style={{ fontSize: '19px', lineHeight: '1.8', color: '#333' }}>
          <p>Par la présente, le système <strong>Air-Bot v2.5</strong> certifie que l'entité identifiée par le protocole sécurisé :</p>
          <div style={{ textAlign: 'center', margin: '30px 0' }}>
            <span style={{ fontSize: '24px', background: '#000', color: '#00ff41', padding: '10px 30px', borderRadius: '5px', fontFamily: 'monospace' }}>{id || 'NXS-PENDING-00'}</span>
          </div>
          <p>A été validée avec succès pour la zone de conformité internationale suivante :</p>
          <h2 style={{ textAlign: 'center', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>{zone || 'ZONE INTERNATIONALE'}</h2>
        </div>

        <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
          <div>
            <strong>Date d'Horodatage :</strong> {date}<br />
            <strong>Registre :</strong> Blockchain Nexus-Mainnet
          </div>
          <div style={{ textAlign: 'right' }}>
            <strong>Hash de Validation :</strong><br />
            <span style={{ fontSize: '11px', color: '#666', fontFamily: 'monospace' }}>0x{id ? id.split('-')[1] : '7a2b9c'}...f8e2d1</span>
          </div>
        </div>

        {/* --- CLAUSE DE NON-RESPONSABILITÉ LÉGALE (DISCLAIMER) --- */}
        <div style={{ marginTop: '60px', borderTop: '1px solid #000', paddingTop: '15px', fontSize: '10px', color: '#444', textAlign: 'justify', lineHeight: '1.4' }}>
          <strong>DISCLAIMER JURIDIQUE :</strong> Ce document est un certificat numérique de conformité émis exclusivement dans le cadre de l'écosystème REUSSITESS Global Nexus. 
          Il ne constitue pas un document d'identité étatique, un titre de transport officiel ou un instrument financier régulé. 
          L'obtention de ce certificat atteste de la réussite d'un processus de validation par intelligence artificielle (100 IA) et garantit le respect de l'anonymat selon les directives du RGPD. 
          Toute utilisation frauduleuse de ce certificat en dehors du réseau Global Nexus n'engage pas la responsabilité de l'émetteur. 
          Le hash associé fait foi de preuve de transaction numérique au sein de notre registre décentralisé.
        </div>
      </div>

      <div style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
        <button onClick={() => window.print()} style={{ padding: '12px 25px', cursor: 'pointer', background: '#000', color: '#fff', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}>🖨️ IMPRIMER / PDF</button>
        <Link href="/" style={{ padding: '12px 25px', background: '#00ff41', color: '#000', textDecoration: 'none', fontWeight: 'bold', borderRadius: '5px' }}>🏠 QUITTER</Link>
      </div>
    </div>
  );
}
