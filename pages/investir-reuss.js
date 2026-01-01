import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function InvestirReuss() {
  const paysPartenaires = [
    "France", "Belgique", "Italie", "Allemagne", "Suède", 
    "Singapour", "Australie", "Espagne", "Brésil", "Royaume-Uni", 
    "Inde", "Nouvelle-Zélande", "États-Unis", "Canada"
  ];

  const [activeIa, setActiveIa] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIa((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: '#020617', color: '#f8fafc', minHeight: '100vh', padding: '20px', fontFamily: 'Inter, sans-serif', lineHeight: '1.8' }}>
      <main style={{ maxWidth: '900px', margin: '0 auto', background: '#0f172a', padding: '50px', borderRadius: '24px', border: '1px solid #3b82f6', boxShadow: '0 0 40px rgba(59, 130, 246, 0.2)' }}>
        
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: '#3b82f6', fontSize: '1.4rem', fontWeight: '900' }}>REUSSITESS®NEURO-X : L'IA PRÉDICTIVE SOUVERAINE DES 14 NATIONS</h1>
          <h2 style={{ color: '#94a3b8', fontSize: '1.1rem' }}>GUIDE OPÉRATIONNEL ET CONFORMITÉ JURIDIQUE</h2>
        </header>

        {/* SECTION 1: DÉFINITION RÉELLE */}
        <section style={{ marginBottom: '35px' }}>
          <h3 style={{ color: '#3b82f6' }}>1. QU'EST-CE QUE LE PROJET NEURO-X ?</h3>
          <p>Infrastructure d'IA de troisième génération, agissant comme un Oracle de probabilités pour 14 pays partenaires stratégiques.</p>
        </section>

        {/* SECTION SÉCURITÉ MILITAIRE (AJOUT CRUCIAL) */}
        <section style={{ marginBottom: '50px', background: 'linear-gradient(135deg, #0f172a 0%, #7f1d1d 100%)', padding: '30px', borderRadius: '20px', border: '2px solid #ef4444' }}>
          <h3 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: '900', marginBottom: '20px', textAlign: 'center' }}>
            🛡️ PROTOCOLE DE PROTECTION DE GRADE MILITAIRE
          </h3>
          <p style={{ color: '#fecaca', fontSize: '0.95rem', marginBottom: '20px', textAlign: 'center' }}>
            Contre le piratage et l'espionnage industriel, NEURO-X déploie un bouclier actif :
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '15px', borderRadius: '12px' }}>
              <h4 style={{ color: '#ef4444', fontSize: '0.9rem' }}>CRYPTOGRAPHIE POST-QUANTIQUE</h4>
              <p style={{ fontSize: '0.8rem' }}>Algorithmes de chiffrement de niveau défense nationale, protégeant les transactions REUSS contre toute tentative de brute-force.</p>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '15px', borderRadius: '12px' }}>
              <h4 style={{ color: '#ef4444', fontSize: '0.9rem' }}>ESSAIM ANTI-INTRUSION</h4>
              <p style={{ fontSize: '0.8rem' }}>Les 200 IA intègrent des modules de contre-mesures cyber, neutralisant les vecteurs d'attaque avant qu'ils n'atteignent le contrat global.</p>
            </div>
          </div>
          <p style={{ marginTop: '20px', fontSize: '0.85rem', textAlign: 'center', fontWeight: 'bold', color: '#fff' }}>
            SÉCURITÉ ABSOLUE : ZÉRO TOLÉRANCE POUR LE PIRATAGE.
          </p>
        </section>

        {/* SECTION 200 IA EN ACTION */}
        <section style={{ marginBottom: '50px' }}>
          <h3 style={{ color: '#00ff41', textAlign: 'center', marginBottom: '30px', fontSize: '1.3rem', fontWeight: '900' }}>PUISSANCE DE FEU DES 200 IA</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ borderLeft: '4px solid #3b82f6', paddingLeft: '20px' }}>
              <h4 style={{ color: '#fff' }}>FORCE DE CALCUL PRÉDICTIF</h4>
              <p style={{ fontSize: '0.9rem' }}>Analyse exhaustive des flux pour les 14 pays (France, Belgique, USA, Canada, Brésil, etc.).</p>
            </div>
            <div style={{ borderLeft: '4px solid #00ff41', paddingLeft: '20px' }}>
              <h4 style={{ color: '#fff' }}>POSITIVITÉ À L'INFINI (BOUDOUM)</h4>
              <p style={{ fontSize: '0.9rem' }}>Technologie exclusive de la Guadeloupe pour la performance mondiale.</p>
            </div>
          </div>
        </section>

        {/* STATUT PAYS */}
        <section style={{ marginBottom: '40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
            {paysPartenaires.map((p) => (
              <div key={p} style={{ border: '1px solid #1e293b', padding: '8px', fontSize: '0.75rem', textAlign: 'center', borderRadius: '5px' }}>
                <span style={{ color: '#00ff41' }}>●</span> {p.toUpperCase()}
              </div>
            ))}
          </div>
        </section>

        <footer style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.8rem' }}>
          <p>Origine : Guadeloupe "Terres De Champions" - BOUDOUM !</p>
          <div style={{ marginTop: '30px' }}>
            <Link href="/" style={{ color: '#3b82f6', textDecoration: 'none' }}>← RETOUR AU PORTAIL</Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
