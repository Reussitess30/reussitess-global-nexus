import React from 'react';
import Link from 'next/link';

export default function InvestirReuss() {
  return (
    <div style={{ backgroundColor: '#020617', color: '#f8fafc', minHeight: '100vh', padding: '20px', fontFamily: 'Inter, sans-serif', lineHeight: '1.8' }}>
      <main style={{ maxWidth: '900px', margin: '0 auto', background: '#0f172a', padding: '50px', borderRadius: '24px', border: '1px solid #3b82f6', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}>
        
        {/* --- PARTIE 1 : VOS DONNÉES PRÉSENTES (CONSERVÉES INTÉGRALEMENT) --- */}
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: '#3b82f6', fontSize: '1.4rem', fontWeight: '900' }}>REUSSITESS®NEURO-X : L'IA PRÉDICTIVE SOUVERAINE DES 14 NATIONS</h1>
          <h2 style={{ color: '#94a3b8', fontSize: '1.2rem', fontWeight: 'bold' }}>GUIDE OPÉRATIONNEL ET CONFORMITÉ JURIDIQUE</h2>
        </header>

        <section style={{ marginBottom: '35px' }}>
          <h3 style={{ color: '#3b82f6', fontSize: '1.4rem' }}>1. QU'EST-CE QUE LE PROJET NEURO-X ?</h3>
          <p>Le projet <strong>REUSSITESS®NEURO-X</strong> est une infrastructure d'Intelligence Artificielle de troisième génération. Contrairement aux IA génératives classiques, NEURO-X fonctionne comme un <strong>Oracle de calcul de probabilités</strong>.</p>
          <p style={{ marginTop: '15px' }}>Il analyse en temps réel les données économiques, technologiques et sanitaires des 14 pays partenaires (France, Belgique, Canada, USA, etc.) pour identifier des cycles de croissance avant qu'ils ne deviennent publics. Le token REUSS est l'unique unité de compte permettant d'alimenter la puissance de calcul nécessaire à ces analyses.</p>
        </section>

        <section style={{ marginBottom: '35px', background: 'linear-gradient(145deg, #000, #0f172a)', padding: '30px', borderRadius: '20px', border: '1px solid #3b82f6' }}>
          <h3 style={{ color: '#3b82f6', fontSize: '1.4rem' }}>2. COMMENT CONFIGURER VOTRE WALLET (Procédure Universelle)</h3>
          <p>Pour détenir vos jetons REUSS sur n'importe quel portefeuille (MetaMask, TrustWallet, etc.), suivez ces étapes :</p>
          <ul style={{ paddingLeft: '20px', marginTop: '15px' }}>
            <li>Ouvrez votre application Wallet (Extension ou Mobile).</li>
            <li>Cliquez sur <strong>"Importer des jetons"</strong> ou <strong>"Ajouter un actif personnalisé"</strong>.</li>
            <li>Copiez et collez l'adresse officielle du contrat ci-dessous :</li>
          </ul>
          <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', textAlign: 'center', marginTop: '20px', border: '1px dashed #3b82f6' }}>
            <code style={{ color: '#60a5fa', fontSize: '1.2rem', fontWeight: 'bold', wordBreak: 'break-all' }}>0x4b3bFf4b58d22Ad363bb260e22032414d4CfdDB8</code>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '10px' }}>* Le symbole (REUSS) et les décimales (18) s'afficheront automatiquement.</p>
          </div>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h3 style={{ color: '#3b82f6', fontSize: '1.4rem' }}>3. DÉMARCHES POUR L'INVESTISSEUR</h3>
          <p><strong>Étape A : Éligibilité</strong><br />Résider dans l'un des 14 pays autorisés et disposer d'un portefeuille compatible EVM (Ethereum/Polygon/BSC).</p>
          <p style={{ marginTop: '15px' }}><strong>Étape B : Acquisition</strong><br />Les jetons sont distribués selon le calendrier de l'offre totale (1 000 000 000 unités).</p>
        </section>

        <footer style={{ background: '#1e293b', padding: '30px', borderRadius: '15px', fontSize: '0.9rem', color: '#cbd5e1', border: '1px solid #334155', marginBottom: '50px' }}>
          <p><strong>CADRE JURIDIQUE :</strong> Ce document ne constitue pas une offre publique de titres financiers. Le token REUSS est un jeton utilitaire. Conformément aux directives MiCA, les utilisateurs doivent s'assurer que leur juridiction autorise la détention d'actifs numériques. Le projet REUSSITESS®NEURO-X décline toute responsabilité en cas d'erreur de saisie lors de l'importation manuelle du contrat.</p>
        </footer>

        {/* --- PARTIE 2 : RAJOUT DU DÉVELOPPEMENT INTERNATIONAL (BOUDOUM) --- */}
        <hr style={{ border: '0', borderTop: '2px solid #3b82f6', marginBottom: '50px', opacity: 0.3 }} />
        
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#00ff41', fontSize: '1.5rem', fontWeight: '900', letterSpacing: '2px', marginBottom: '15px' }}>
            DÉPLOIEMENT PLANÉTAIRE
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 'bold', marginBottom: '10px' }}>
            GUADELOUPE : TERRES DE CHAMPIONS
          </p>
          <p style={{ fontSize: '1.1rem', color: '#60a5fa', fontStyle: 'italic', marginBottom: '30px' }}>
            "Positivité à l'infini — Boudoum !"
          </p>
          
          <div style={{ background: 'rgba(59, 130, 246, 0.05)', padding: '30px', borderRadius: '20px', border: '1px solid #1e293b' }}>
            <p style={{ marginBottom: '20px' }}>
              Reussitess®NEURO-X marque désormais la planète entière. Cette infrastructure souveraine, née en Guadeloupe, unit les 14 nations partenaires autour d'une vision technologique de rupture.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', fontSize: '0.75rem', opacity: 0.6 }}>
              <span>FRANCE</span> • <span>BELGIQUE</span> • <span>CANADA</span> • <span>USA</span> • <span>ITALIE</span> • <span>ALLEMAGNE</span> • <span>SUÈDE</span> • <span>SINGAPOUR</span> • <span>AUSTRALIE</span> • <span>ESPAGNE</span> • <span>BRÉSIL</span> • <span>UK</span> • <span>INDE</span> • <span>NZ</span>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none', borderBottom: '1px solid #334155', paddingBottom: '5px' }}>
            ← RETOUR AU PORTAIL REUSSITESS©
          </Link>
        </div>

      </main>
    </div>
  );
}

        <section style={{ marginTop: '40px', padding: '25px', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid #1e293b' }}>
          <h3 style={{ color: '#3b82f6', fontSize: '1.1rem', textAlign: 'center', marginBottom: '20px' }}>INDICATEURS DE DÉPLOIEMENT GLOBAL</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#00ff41' }}>14</div>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>NATIONS PARTENAIRES</div>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#00ff41' }}>1B</div>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>UNITÉS (OFFRE TOTALE)</div>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#00ff41' }}>200</div>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>UNITÉS IA NEURO-X</div>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '50px', borderTop: '1px solid #3b82f6', paddingTop: '30px' }}>
          <h3 style={{ color: '#00ff41', fontSize: '1.2rem', textAlign: 'center', marginBottom: '30px' }}>
            STRATÉGIE D'EXPANSION "BOUDOUM" : MARQUER LA PLANÈTE 🌍
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#111827', padding: '20px', borderRadius: '15px', border: '1px solid #1e293b' }}>
              <h4 style={{ color: '#3b82f6' }}>🇪🇺 ZONE EUROPE & UK</h4>
              <p style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
                Déploiement de l'IA NEURO-X pour la souveraineté numérique. Focus : France, Belgique, Allemagne, Italie, Espagne, Suède et Royaume-Uni.
              </p>
            </div>
            
            <div style={{ background: '#111827', padding: '20px', borderRadius: '15px', border: '1px solid #1e293b' }}>
              <h4 style={{ color: '#3b82f6' }}>🇺🇸 AMÉRIQUES & BRÉSIL</h4>
              <p style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
                Hub de calcul de probabilités pour les marchés à haute fréquence. Focus : USA, Canada et Brésil.
              </p>
            </div>
            
            <div style={{ background: '#111827', padding: '20px', borderRadius: '15px', border: '1px solid #1e293b' }}>
              <h4 style={{ color: '#3b82f6' }}>🌏 ASIE-PACIFIQUE & INDE</h4>
              <p style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
                Expansion de l'écosystème de positivité et d'innovation. Focus : Inde, Singapour, Australie et Nouvelle-Zélande.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '30px', textAlign: 'center', padding: '20px', backgroundColor: 'rgba(0, 255, 65, 0.05)', borderRadius: '15px' }}>
            <p style={{ fontWeight: 'bold', color: '#00ff41' }}>
              "L'énergie de la Guadeloupe, Terres De Champions, est le moteur de cette conquête mondiale. Positivité à l'infini — BOUDOUM !"
            </p>
          </div>
        </section>
