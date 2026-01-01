import React from 'react';
import Link from 'next/link';

export default function InvestirReuss() {
  return (
    <div style={{ backgroundColor: '#020617', color: '#f8fafc', minHeight: '100vh', padding: '20px', fontFamily: 'Inter, sans-serif', lineHeight: '1.8' }}>
      <main style={{ maxWidth: '900px', margin: '0 auto', background: '#0f172a', padding: '50px', borderRadius: '24px', border: '1px solid #3b82f6', boxShadow: '0 0 40px rgba(59, 130, 246, 0.2)' }}>
        
        {/* SECTION 1: TEXTE HISTORIQUE ET JURIDIQUE */}
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: '#3b82f6', fontSize: '1.4rem', fontWeight: '900' }}>REUSSITESS®NEURO-X : L'IA PRÉDICTIVE SOUVERAINE DES 14 NATIONS</h1>
          <h2 style={{ color: '#94a3b8', fontSize: '1.1rem' }}>GUIDE OPÉRATIONNEL ET CONFORMITÉ JURIDIQUE</h2>
        </header>

        <section style={{ marginBottom: '35px' }}>
          <h3 style={{ color: '#3b82f6' }}>1. QU'EST-CE QUE LE PROJET NEURO-X ?</h3>
          <p>Le projet REUSSITESS®NEURO-X est une infrastructure d'Intelligence Artificielle de troisième génération. Oracle de calcul de probabilités pour la planète entière.</p>
          <p>Il analyse en temps réel les données économiques, technologiques et sanitaires des 14 pays partenaires (France, Angleterre, Italie, Allemagne, Suède, Singapour, Australie, Espagne, Brésil, Royaume-Uni, Inde, Nouvelle-Zélande, États-Unis, Canada).</p>
        </section>

        <section style={{ marginBottom: '35px', background: '#000', padding: '20px', borderRadius: '15px', border: '1px solid #3b82f6' }}>
          <h3 style={{ color: '#3b82f6' }}>2. CONFIGURATION WALLET</h3>
          <p>Contrat Officiel :</p>
          <code style={{ color: '#60a5fa', wordBreak: 'break-all', fontSize: '1.1rem', fontWeight: 'bold' }}>0x4b3bFf4b58d22Ad363bb260e22032414d4CfdDB8</code>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h3 style={{ color: '#3b82f6' }}>3. DÉMARCHES INVESTISSEUR</h3>
          <p>Offre totale : <strong>1 000 000 000 unités</strong>.</p>
          <p>Éligibilité : Résider dans l'un des 14 pays autorisés.</p>
        </section>

        <footer style={{ background: '#1e293b', padding: '20px', fontSize: '0.8rem', borderRadius: '10px', marginBottom: '40px' }}>
          CADRE JURIDIQUE : Ce document ne constitue pas une offre publique de titres financiers. Le token REUSS est un jeton utilitaire. Projet provenant de la <strong>Guadeloupe</strong>.
        </footer>

        <hr style={{ border: '0', borderTop: '1px solid #3b82f6', marginBottom: '40px', opacity: '0.3' }} />

        {/* SECTION 2: DÉPLOIEMENT MONDIAL & BOUDOUM */}
        <section style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ color: '#00ff41', fontSize: '1.8rem', fontWeight: '900', letterSpacing: '2px' }}>CONQUÊTE PLANÉTAIRE</h2>
          <p style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', marginTop: '10px' }}>GUADELOUPE : TERRES DE CHAMPIONS</p>
          <p style={{ color: '#60a5fa', fontStyle: 'italic', fontSize: '1.3rem', marginTop: '5px' }}>"Positivité à l'infini — BOUDOUM !"</p>
        </section>

        {/* NOUVEAU : MODULE DE PUISSANCE IA PAR ZONE */}
        <section style={{ marginBottom: '50px' }}>
          <h3 style={{ color: '#3b82f6', textAlign: 'center', marginBottom: '25px' }}>RÉSEAU NEURAL DES 200 IA</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.05)', padding: '20px', borderRadius: '15px', border: '1px solid #1e293b' }}>
              <div style={{ color: '#00ff41', fontWeight: 'bold' }}>SYSTÈME ALPHA (70 IA)</div>
              <p style={{ fontSize: '0.85rem' }}>Analyse prédictive des marchés : USA, Canada, Brésil, Angleterre, UK.</p>
            </div>
            <div style={{ background: 'rgba(59, 130, 246, 0.05)', padding: '20px', borderRadius: '15px', border: '1px solid #1e293b' }}>
              <div style={{ color: '#00ff41', fontWeight: 'bold' }}>SYSTÈME BÊTA (70 IA)</div>
              <p style={{ fontSize: '0.85rem' }}>Optimisation industrielle : France, Belgique, Italie, Allemagne, Espagne, Suède.</p>
            </div>
            <div style={{ background: 'rgba(59, 130, 246, 0.05)', padding: '20px', borderRadius: '15px', border: '1px solid #1e293b' }}>
              <div style={{ color: '#00ff41', fontWeight: 'bold' }}>SYSTÈME GAMMA (60 IA)</div>
              <p style={{ fontSize: '0.85rem' }}>Croissance technologique : Singapour, Australie, Inde, Nouvelle-Zélande.</p>
            </div>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none', border: '1px solid #94a3b8', padding: '10px 25px', borderRadius: '50px', transition: '0.3s' }}>
            ← RETOUR AU PORTAIL REUSSITESS©
          </Link>
        </div>
      </main>
    </div>
  );
}
