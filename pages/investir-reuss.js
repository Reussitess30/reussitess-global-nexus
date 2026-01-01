import React from 'react';
import Link from 'next/link';

export default function InvestirReuss() {
  const pays = ["France", "Belgique", "Italie", "Allemagne", "Suède", "Singapour", "Australie", "Espagne", "Brésil", "Royaume-Uni", "Inde", "Nouvelle-Zélande", "États-Unis", "Canada"];
  const contractAddress = "0x4b3bFf4b58d22Ad363bb260e22032414d4CfdDB8";

  return (
    <div style={{ backgroundColor: '#020617', color: '#f8fafc', minHeight: '100vh', padding: '20px', fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
      <main style={{ maxWidth: '900px', margin: '0 auto', background: '#0f172a', padding: '40px', borderRadius: '24px', border: '1px solid #3b82f6', boxShadow: '0 0 40px rgba(59, 130, 246, 0.2)' }}>
        
        {/* SECTION 1 : VOS INFORMATIONS PRIORITAIRES */}
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: '#3b82f6', fontSize: '1.4rem', fontWeight: '900' }}>REUSSITESS©NEURO-X : L'IA PRÉDICTIVE SOUVERAINE DES 14 NATIONS</h1>
          <h2 style={{ color: '#94a3b8', fontSize: '1.1rem' }}>GUIDE OPÉRATIONNEL ET CONFORMITÉ JURIDIQUE</h2>
        </header>

        <section style={{ marginBottom: '35px' }}>
          <h3 style={{ color: '#3b82f6' }}>1. QU'EST-CE QUE LE PROJET NEURO-X ?</h3>
          <p>Le projet REUSSITESS©NEURO-X est une infrastructure d'Intelligence Artificielle de troisième génération. Oracle de calcul de probabilités pour la planète entière.</p>
          <p>Il analyse en temps réel les données économiques, technologiques et sanitaires des 14 pays partenaires pour identifier des cycles de croissance avant qu'ils ne soient publics.</p>
        </section>

        <section style={{ marginBottom: '35px', background: '#000', padding: '25px', borderRadius: '15px', border: '1px solid #3b82f6' }}>
          <h3 style={{ color: '#3b82f6' }}>2. CONFIGURATION DU CONTRAT (AUDIT RÉEL)</h3>
          <p>Adresse officielle du contrat :</p>
          <div style={{ background: '#1e293b', padding: '15px', borderRadius: '10px', textAlign: 'center', marginTop: '10px' }}>
            <code style={{ color: '#60a5fa', fontSize: '1rem', fontWeight: 'bold', wordBreak: 'break-all' }}>{contractAddress}</code>
          </div>
          <div style={{ textAlign: 'center', marginTop: '15px' }}>
            <a href={`https://polygonscan.com/token/${contractAddress}`} target="_blank" rel="noopener noreferrer" style={{ color: '#00ff41', fontSize: '0.8rem', textDecoration: 'underline' }}>VÉRIFIER LA VALIDITÉ SUR LA BLOCKCHAIN (RÉEL)</a>
          </div>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h3 style={{ color: '#3b82f6' }}>3. DÉMARCHES POUR L'INVESTISSEUR</h3>
          <p><strong>Étape A : Éligibilité</strong> - Résider dans l'un des 14 pays autorisés.</p>
          <p><strong>Étape B : Acquisition</strong> - Les jetons sont distribués selon le calendrier de l'offre totale (1 000 000 000 unités).</p>
        </section>

        {/* SECTION 2 : L'OFFRE TOTALE ET LES 200 IA */}
        <section style={{ marginBottom: '40px', background: 'rgba(0, 255, 65, 0.05)', padding: '25px', borderRadius: '15px', border: '1px solid #00ff41' }}>
          <h3 style={{ color: '#00ff41' }}>⚡ LE MILLIARD D'UNITÉS ET LES 200 IA</h3>
          <p style={{ fontSize: '0.9rem' }}>Les <strong>1 000 000 000 unités</strong> constituent le carburant de calcul (Fuel) pour les <strong>200 IA</strong> en action. Ce volume massif garantit la stabilité et empêche la manipulation du marché sur les 14 nations.</p>
        </section>

        {/* SECTION 3 : GÉNÉRATION DE DEVISES */}
        <section style={{ marginBottom: '40px', background: 'rgba(59, 130, 246, 0.1)', padding: '25px', borderRadius: '15px' }}>
          <h3 style={{ color: '#3b82f6' }}>💰 GÉNÉRATION DE VALEUR ET DEVISES</h3>
          <p style={{ fontSize: '0.9rem' }}>Le projet génère des devises réelles (€, $, £) via les redevances d'utilisation payées par les institutions des 14 pays pour accéder aux prédictions de l'IA NEURO-X.</p>
        </section>

        {/* SECTION 4 : SÉCURITÉ MILITAIRE ANTI-PIRATE */}
        <section style={{ marginBottom: '40px', background: 'linear-gradient(135deg, #0f172a 0%, #7f1d1d 100%)', padding: '25px', borderRadius: '15px', border: '1px solid #ef4444' }}>
          <h3 style={{ color: '#fff' }}>🛡️ PROTECTION MILITAIRE ANTI-PIRATE</h3>
          <p style={{ fontSize: '0.9rem' }}>Chiffrement post-quantique et protocoles de serveurs déconnectés (Air-Gapped). Protection absolue contre toute intrusion étrangère.</p>
        </section>

        {/* SECTION 5 : GLOSSAIRE JURIDIQUE RÉEL */}
        <section style={{ marginBottom: '40px', borderTop: '1px solid #334155', paddingTop: '20px' }}>
          <h3 style={{ fontSize: '1rem', color: '#94a3b8' }}>CONFORMITÉ RÉELLE DES 14 PAYS :</h3>
          <ul style={{ fontSize: '0.8rem', color: '#cbd5e1', marginTop: '10px' }}>
            <li><strong>EU AI ACT :</strong> Transparence algorithmique pour l'Europe (France, Belgique, etc.).</li>
            <li><strong>GAFI/FATF :</strong> Standard international de lutte contre la criminalité financière.</li>
            <li><strong>RGPD :</strong> Souveraineté et protection des données personnelles.</li>
          </ul>
        </section>

        {/* LISTE DES PAYS */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '40px' }}>
          {pays.map(p => <span key={p} style={{ fontSize: '0.65rem', background: '#1e293b', padding: '4px 8px', borderRadius: '4px' }}>{p.toUpperCase()}</span>)}
        </div>

        <footer style={{ textAlign: 'center' }}>
          <p style={{ color: '#00ff41', fontWeight: 'bold' }}>"Positivité à l'infini — BOUDOUM !"</p>
          <p style={{ fontSize: '0.9rem' }}>GUADELOUPE : TERRE DE CHAMPIONS</p>
          <div style={{ marginTop: '30px' }}>
            <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none', border: '1px solid #334155', padding: '10px 25px', borderRadius: '50px' }}>← RETOUR</Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
