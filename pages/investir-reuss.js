import React from 'react';
import Link from 'next/link';

export default function InvestirReuss() {
  const pays = ["France", "Belgique", "Italie", "Allemagne", "Suède", "Singapour", "Australie", "Espagne", "Brésil", "Royaume-Uni", "Inde", "Nouvelle-Zélande", "États-Unis", "Canada"];

  return (
    <div style={{ backgroundColor: '#020617', color: '#f8fafc', minHeight: '100vh', padding: '20px', fontFamily: 'Inter, sans-serif' }}>
      <main style={{ maxWidth: '900px', margin: '0 auto', background: '#0f172a', padding: '40px', borderRadius: '24px', border: '1px solid #3b82f6' }}>
        
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: '#3b82f6', fontSize: '1.4rem', fontWeight: '900' }}>REUSSITESS®NEURO-X : CADRE LÉGAL ET CONFORMITÉ</h1>
          <p style={{ color: '#94a3b8' }}>Certification de souveraineté pour les 14 Nations Partenaires</p>
        </header>

        {/* SECTION LÉGALE STRICTE */}
        <section style={{ marginBottom: '40px', background: 'rgba(255, 255, 255, 0.03)', padding: '25px', borderRadius: '15px', borderLeft: '5px solid #00ff41' }}>
          <h3 style={{ color: '#00ff41', marginBottom: '15px' }}>📜 PROTOCOLES JURIDIQUES VÉRIFIÉS</h3>
          <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
            <p style={{ marginBottom: '10px' }}><strong>• Conformité EU AI Act :</strong> NEURO-X intègre les exigences de transparence et de gestion des risques pour les systèmes d'IA à haut impact, garantissant une auditabilité totale.</p>
            <p style={{ marginBottom: '10px' }}><strong>• Protection des Données (RGPD/CCPA) :</strong> Respect strict de la souveraineté numérique. Pas de transfert de données non consenti vers des juridictions tierces.</p>
            <p><strong>• Standard GAFI/FATF :</strong> Transparence des flux via le contrat intelligent officiel pour la lutte contre la criminalité financière internationale.</p>
          </div>
        </section>

        {/* DIFFÉRENCIATION VS IA CLASSIQUES */}
        <section style={{ marginBottom: '40px' }}>
          <h3 style={{ color: '#3b82f6' }}>DIFFÉRENCIATION STRATÉGIQUE</h3>
          <p style={{ fontSize: '0.9rem' }}>Contrairement aux modèles d'IA génératives non régulés, REUSSITESS® est conçu pour l'usage institutionnel et souverain. Nous ne collectons pas vos données pour entraîner des modèles tiers ; nous protégeons votre capital informationnel.</p>
        </section>

        {/* LISTE OFFICIELLE DES 14 PAYS */}
        <section style={{ textAlign: 'center', marginBottom: '40px', padding: '20px', background: '#000', borderRadius: '15px' }}>
          <h4 style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '15px' }}>JURIDICTIONS COUVERTES</h4>
          <div style={{ display: 'flex', wrap: 'wrap', justifyContent: 'center', gap: '10px', fontSize: '0.7rem' }}>
            {pays.map(p => <span key={p} style={{ background: '#1e293b', padding: '5px 10px', borderRadius: '5px' }}>{p.toUpperCase()}</span>)}
          </div>
        </section>

        <footer style={{ textAlign: 'center' }}>
          <p style={{ color: '#3b82f6', fontWeight: 'bold' }}>GUADELOUPE : TERRE DE CHAMPIONS - BOUDOUM !</p>
          <div style={{ marginTop: '30px' }}>
            <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none', border: '1px solid #334155', padding: '10px 25px', borderRadius: '50px' }}>← RETOUR AU PORTAIL</Link>
          </div>
        </footer>

      </main>
    </div>
  );
}
