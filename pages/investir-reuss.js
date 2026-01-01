import React from 'react';
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
        
        {/* --- 1. LES INFORMATIONS INITIALES (VOTRE TEXTE PRIORITAIRE) --- */}
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: '#3b82f6', fontSize: '1.4rem', fontWeight: '900' }}>REUSSITESS®NEURO-X : L'IA PRÉDICTIVE SOUVERAINE DES 14 NATIONS</h1>
          <h2 style={{ color: '#94a3b8', fontSize: '1.1rem' }}>GUIDE OPÉRATIONNEL ET CONFORMITÉ JURIDIQUE</h2>
        </header>

        <section style={{ marginBottom: '35px' }}>
          <h3 style={{ color: '#3b82f6' }}>1. QU'EST-CE QUE LE PROJET NEURO-X ?</h3>
          <p>Le projet REUSSITESS®NEURO-X est une infrastructure d'Intelligence Artificielle de troisième génération. Contrairement aux IA génératives classiques, NEURO-X fonctionne comme un <strong>Oracle de calcul de probabilités</strong>.</p>
          <p style={{ marginTop: '10px' }}>Il analyse en temps réel les données économiques, technologiques et sanitaires des 14 pays partenaires pour identifier des cycles de croissance avant qu'ils ne deviennent publics.</p>
        </section>

        <section style={{ marginBottom: '35px', background: '#000', padding: '25px', borderRadius: '15px', border: '1px solid #3b82f6' }}>
          <h3 style={{ color: '#3b82f6' }}>2. COMMENT CONFIGURER VOTRE WALLET</h3>
          <p>Copiez et collez l'adresse officielle du contrat ci-dessous :</p>
          <div style={{ background: '#1e293b', padding: '15px', borderRadius: '10px', textAlign: 'center', marginTop: '10px', border: '1px dashed #3b82f6' }}>
            <code style={{ color: '#60a5fa', fontSize: '1.1rem', fontWeight: 'bold', wordBreak: 'break-all' }}>0x4b3bFf4b58d22Ad363bb260e22032414d4CfdDB8</code>
          </div>
          <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '10px' }}>* Le symbole (REUSS) et les décimales (18) s'afficheront automatiquement.</p>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h3 style={{ color: '#3b82f6' }}>3. DÉMARCHES POUR L'INVESTISSEUR</h3>
          <p><strong>Étape A : Éligibilité</strong><br />Résider dans l'un des 14 pays autorisés (France, Belgique, Canada, USA, Italie, Allemagne, Suède, Singapour, Australie, Espagne, Brésil, UK, Inde, NZ).</p>
          <p style={{ marginTop: '10px' }}><strong>Étape B : Acquisition</strong><br />Les jetons sont distribués selon le calendrier de l'offre totale (1 000 000 000 unités).</p>
        </section>

        <footer style={{ background: '#1e293b', padding: '20px', borderRadius: '10px', fontSize: '0.8rem', marginBottom: '40px' }}>
          <strong>CADRE JURIDIQUE :</strong> Ce document ne constitue pas une offre publique de titres financiers. Le token REUSS est un jeton utilitaire. Projet provenant de la <strong>Guadeloupe</strong>.
        </footer>

        <hr style={{ border: '0', borderTop: '2px solid #3b82f6', marginBottom: '50px', opacity: 0.2 }} />

        {/* --- 2. EXPLICATION TECHNIQUE DU MILLIARD (À LA SUITE) --- */}
        <section style={{ marginBottom: '50px', background: 'rgba(0, 255, 65, 0.05)', padding: '30px', borderRadius: '20px', border: '1px solid #00ff41' }}>
          <h3 style={{ color: '#00ff41', fontSize: '1.3rem', fontWeight: '900', marginBottom: '20px' }}>⚡ POURQUOI 1 000 000 000 UNITÉS ?</h3>
          <p style={{ fontSize: '0.95rem', marginBottom: '15px' }}>Ce volume est calculé pour répondre aux besoins de l'Oracle mondial :</p>
          <ul style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
            <li><strong>Puissance de calcul :</strong> Chaque unité est une réserve d'énergie pour les 200 IA. Un milliard permet de maintenir le réseau actif sur 14 nations sans interruption.</li>
            <li><strong>Stabilité Institutionnelle :</strong> Le volume garantit que les banques et institutions des pays partenaires peuvent intégrer le système sans créer de pénurie artificielle.</li>
          </ul>
        </section>

        {/* --- 3. DÉTAIL DES 200 IA (À LA SUITE) --- */}
        <section style={{ marginBottom: '50px' }}>
          <h3 style={{ color: '#3b82f6', fontSize: '1.3rem', fontWeight: '900', marginBottom: '20px' }}>🤖 LES 200 IA EN ACTION</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#111827', padding: '15px', borderRadius: '12px', border: '1px solid #1e293b' }}>
              <h4 style={{ color: '#fff' }}>60 IA Prédictives</h4>
              <p style={{ fontSize: '0.75rem' }}>Analyse des flux financiers mondiaux en temps réel.</p>
            </div>
            <div style={{ background: '#111827', padding: '15px', borderRadius: '12px', border: '1px solid #1e293b' }}>
              <h4 style={{ color: '#fff' }}>140 IA Stratégiques</h4>
              <p style={{ fontSize: '0.75rem' }}>Gestion de la positivité et des cycles de croissance par pays.</p>
            </div>
          </div>
        </section>

        {/* --- 4. PROTECTION MILITAIRE ANTI-PIRATE (À LA SUITE) --- */}
        <section style={{ marginBottom: '50px', background: 'linear-gradient(135deg, #0f172a 0%, #7f1d1d 100%)', padding: '30px', borderRadius: '20px', border: '2px solid #ef4444' }}>
          <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '900', textAlign: 'center' }}>🛡️ SÉCURITÉ MILITAIRE ANTI-INTRUSION</h3>
          <p style={{ fontSize: '0.9rem', textAlign: 'center', marginTop: '10px' }}>Protection par cryptographie post-quantique. Les algorithmes sont protégés dans des enceintes Air-Gapped (hors-ligne), rendant le piratage physiquement impossible.</p>
        </section>

        <section style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ color: '#60a5fa', fontStyle: 'italic', fontSize: '1.2rem' }}>"Positivité à l'infini — BOUDOUM !"</p>
          <p style={{ fontWeight: 'bold' }}>GUADELOUPE : TERRE DE CHAMPIONS</p>
        </section>

        <div style={{ textAlign: 'center' }}>
          <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none', border: '1px solid #334155', padding: '10px 20px', borderRadius: '50px' }}>
            ← RETOUR AU PORTAIL REUSSITESS©
          </Link>
        </div>
      </main>
    </div>
  );
}
