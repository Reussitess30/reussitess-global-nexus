import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function InvestirReuss() {
  const paysPartenaires = [
    "France", "Belgique", "Italie", "Allemagne", "Suède", 
    "Singapour", "Australie", "Espagne", "Brésil", "Royaume-Uni", 
    "Inde", "Nouvelle-Zélande", "États-Unis", "Canada"
  ];

  return (
    <div style={{ backgroundColor: '#020617', color: '#f8fafc', minHeight: '100vh', padding: '20px', fontFamily: 'Inter, sans-serif', lineHeight: '1.8' }}>
      <main style={{ maxWidth: '900px', margin: '0 auto', background: '#0f172a', padding: '50px', borderRadius: '24px', border: '1px solid #3b82f6', boxShadow: '0 0 40px rgba(59, 130, 246, 0.2)' }}>
        
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: '#3b82f6', fontSize: '1.4rem', fontWeight: '900' }}>REUSSITESS®NEURO-X : L'IA PRÉDICTIVE SOUVERAINE DES 14 NATIONS</h1>
          <h2 style={{ color: '#94a3b8', fontSize: '1.1rem' }}>SÉCURITÉ INFRASTRUCTURELLE ET SOUVERAINETÉ</h2>
        </header>

        {/* SECTION SÉCURITÉ MILITAIRE EXISTANTE */}
        <section style={{ marginBottom: '40px', background: 'linear-gradient(135deg, #0f172a 0%, #7f1d1d 100%)', padding: '30px', borderRadius: '20px', border: '2px solid #ef4444' }}>
          <h3 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: '900', marginBottom: '20px', textAlign: 'center' }}>
            🛡️ BOUCLIER CYBER DE GRADE MILITAIRE
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '15px', borderRadius: '12px' }}>
              <h4 style={{ color: '#ef4444', fontSize: '0.9rem' }}>CRYPTOGRAPHIE POST-QUANTIQUE</h4>
              <p style={{ fontSize: '0.8rem' }}>Protection totale contre le brute-force et l'espionnage d'État.</p>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '15px', borderRadius: '12px' }}>
              <h4 style={{ color: '#ef4444', fontSize: '0.9rem' }}>PROTOCOLES ANTI-PIRATES</h4>
              <p style={{ fontSize: '0.8rem' }}>Neutralisation instantanée des tentatives d'intrusion par l'essaim des 200 IA.</p>
            </div>
          </div>
        </section>

        {/* NOUVELLE SECTION : SOUVERAINETÉ ET STOCKAGE FROID */}
        <section style={{ marginBottom: '50px', background: 'rgba(59, 130, 246, 0.05)', padding: '30px', borderRadius: '20px', border: '1px solid #3b82f6' }}>
          <h3 style={{ color: '#3b82f6', fontSize: '1.3rem', fontWeight: '900', marginBottom: '20px' }}>
            📦 SOUVERAINETÉ DES DONNÉES & COLD STORAGE
          </h3>
          <div style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>
            <p style={{ marginBottom: '15px' }}>
              Pour garantir une sécurité inviolable, <strong>Reussitess®NEURO-X</strong> utilise une architecture de stockage hybride :
            </p>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}><strong>Air-Gapped Cold Storage :</strong> Les clés critiques du contrat et les algorithmes sources sont conservés sur des serveurs physiquement déconnectés de tout réseau internet.</li>
              <li style={{ marginBottom: '10px' }}><strong>Souveraineté Territoriale :</strong> Aucune donnée des 14 nations n'est stockée sur des serveurs tiers. L'infrastructure est la propriété exclusive du projet, opérée depuis la <strong>Guadeloupe</strong>.</li>
              <li><strong>Immuabilité Blockchain :</strong> Chaque calcul de probabilité est ancré de manière indélébile, rendant toute manipulation rétroactive impossible.</li>
            </ul>
          </div>
        </section>

        {/* RAPPEL DES 14 PAYS ET BOUDOUM */}
        <section style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ color: '#00ff41', fontWeight: 'bold', fontSize: '1.1rem' }}>
            FORCE - SÉCURITÉ - POSITIVITÉ : BOUDOUM !
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px', marginTop: '20px' }}>
            {paysPartenaires.map((p) => (
              <div key={p} style={{ border: '1px solid #1e293b', padding: '8px', fontSize: '0.7rem', borderRadius: '5px', opacity: 0.8 }}>
                {p.toUpperCase()}
              </div>
            ))}
          </div>
        </section>

        <footer style={{ textAlign: 'center', borderTop: '1px solid #334155', paddingTop: '20px' }}>
          <Link href="/" style={{ color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold' }}>← RETOUR AU PORTAIL SÉCURISÉ</Link>
        </footer>
      </main>
    </div>
  );
}
