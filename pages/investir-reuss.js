import React from 'react';
import Link from 'next/link';

export default function InvestirReuss() {
  return (
    <div style={{ backgroundColor: '#020617', color: '#f8fafc', minHeight: '100vh', padding: '20px', fontFamily: 'Inter, sans-serif', lineHeight: '1.8' }}>
      <main style={{ maxWidth: '900px', margin: '0 auto', background: '#0f172a', padding: '50px', borderRadius: '24px', border: '1px solid #3b82f6' }}>
        
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: '#3b82f6', fontSize: '1.4rem', fontWeight: '900' }}>REUSSITESS®NEURO-X : ARCHITECTURE DES 1 000 000 000 UNITÉS</h1>
          <p style={{ color: '#94a3b8' }}>Pourquoi un milliard ? L'explication stratégique.</p>
        </header>

        {/* NOUVELLE SECTION : UTILITÉ DU MILLIARD */}
        <section style={{ marginBottom: '50px', background: 'rgba(0, 255, 65, 0.05)', padding: '30px', borderRadius: '20px', border: '1px solid #00ff41' }}>
          <h3 style={{ color: '#00ff41', fontSize: '1.3rem', fontWeight: '900', marginBottom: '20px' }}>
            ⚡ L'UTILITÉ TECHNIQUE DU MILLIARD D'UNITÉS
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div>
              <h4 style={{ color: '#fff', fontSize: '1rem' }}>Carburant IA</h4>
              <p style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>Chaque unité sert de "Fuel" pour activer les 200 IA. Le volume de 1 milliard permet de traiter des trillions de calculs prédictifs pour les 14 nations sans saturation du réseau.</p>
            </div>
            <div>
              <h4 style={{ color: '#fff', fontSize: '1rem' }}>Accessibilité Mondiale</h4>
              <p style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>Répartir la puissance sur 14 pays (USA, Inde, Brésil, etc.) nécessite une masse monétaire suffisante pour que chaque institution et investisseur puisse accéder à l'Oracle NEURO-X.</p>
            </div>
            <div>
              <h4 style={{ color: '#fff', fontSize: '1rem' }}>Anti-Manipulation</h4>
              <p style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>Une offre totale d'un milliard protège le projet contre la volatilité extrême, assurant une croissance saine et une stabilité souveraine pilotée depuis la Guadeloupe.</p>
            </div>
          </div>
        </section>

        {/* RAPPEL SÉCURITÉ ET ORIGINE */}
        <section style={{ textAlign: 'center', marginBottom: '40px', padding: '20px', background: '#000', borderRadius: '15px' }}>
          <p style={{ fontSize: '0.9rem' }}>Contrat : <code>0x4b3bFf4b58d22Ad363bb260e22032414d4CfdDB8</code></p>
          <p style={{ color: '#3b82f6', fontWeight: 'bold', marginTop: '10px' }}>GUADELOUPE TERRES DE CHAMPIONS - BOUDOUM !</p>
        </section>

        <div style={{ textAlign: 'center' }}>
          <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>← RETOUR AU PORTAIL</Link>
        </div>
      </main>
    </div>
  );
}
