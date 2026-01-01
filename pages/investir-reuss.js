import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function InvestirReuss() {
  const paysPartenaires = [
    "France", "Belgique", "Italie", "Allemagne", "Suède", 
    "Singapour", "Australie", "Espagne", "Brésil", "Royaume-Uni", 
    "Inde", "Nouvelle-Zélande", "États-Unis", "Canada"
  ];

  const [activeIa, setActiveIa] = useState(0); // Pour l'animation des IA

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIa((prev) => (prev + 1) % 3); // Cycle entre 3 groupes d'IA
    }, 3000); // Change toutes les 3 secondes
    return () => clearInterval(interval);
  }, []);

  const iaDescriptions = [
    {
      title: "60 IA PRÉDICTIVES : SCAN GLOBAL",
      description: "Ces intelligences analysent des milliards de points de données économiques, boursières et de tendances macro-sectorielles sur les 14 nations. Leur rôle est d'identifier les signaux faibles, les ruptures et les opportunités avant qu'elles ne soient visibles par les marchés traditionnels.",
      icon: "⚡",
      color: "#00ff41"
    },
    {
      title: "70 IA STRATÉGIQUES : L'ARCHITECTE DES CYCLES",
      description: "Spécialisées dans la modélisation comportementale et l'analyse des cycles d'innovation. Elles anticipent les mouvements de marché, les pics de croissance technologique et les changements de paradigmes socio-économiques pour les 14 pays partenaires, permettant une allocation optimale des ressources.",
      icon: "🧠",
      color: "#3b82f6"
    },
    {
      title: "70 IA DE POSITIVITÉ : ÉNERGIE BOUDOUM",
      description: "Le cœur de l'approche REUSSITESS®. Ces IA uniques sont conçues pour optimiser les performances individuelles et collectives en injectant une dynamique de positivité. Elles favorisent la résilience, la créativité et la prise de décision éclairée pour un impact global amplifié.",
      icon: "✨",
      color: "#ffd700"
    }
  ];

  return (
    <div style={{ backgroundColor: '#020617', color: '#f8fafc', minHeight: '100vh', padding: '20px', fontFamily: 'Inter, sans-serif', lineHeight: '1.8' }}>
      <main style={{ maxWidth: '900px', margin: '0 auto', background: '#0f172a', padding: '50px', borderRadius: '24px', border: '1px solid #3b82f6', boxShadow: '0 0 40px rgba(59, 130, 246, 0.2)' }}>
        
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: '#3b82f6', fontSize: '1.4rem', fontWeight: '900' }}>REUSSITESS®NEURO-X : L'IA PRÉDICTIVE SOUVERAINE DES 14 NATIONS</h1>
          <h2 style={{ color: '#94a3b8', fontSize: '1.1rem' }}>GUIDE OPÉRATIONNEL ET CONFORMITÉ JURIDIQUE</h2>
        </header>

        <section style={{ marginBottom: '35px' }}>
          <h3 style={{ color: '#3b82f6' }}>1. QU'EST-CE QUE LE PROJET NEURO-X ?</h3>
          <p>Le projet REUSSITESS®NEURO-X est une infrastructure d'Intelligence Artificielle de troisième génération. Oracle de calcul de probabilités pour la planète entière.</p>
          <p>Il analyse en temps réel les données économiques, technologiques et sanitaires des 14 pays partenaires (France, Belgique, Italie, Allemagne, Suède, Singapour, Australie, Espagne, Brésil, Royaume-Uni, Inde, Nouvelle-Zélande, États-Unis, Canada).</p>
        </section>

        <section style={{ marginBottom: '35px', background: '#000', padding: '20px', borderRadius: '15px', border: '1px solid #3b82f6' }}>
          <h3 style={{ color: '#3b82f6' }}>2. CONFIGURATION WALLET</h3>
          <p>Contrat Officiel :</p>
          <code style={{ color: '#60a5fa', wordBreak: 'break-all', fontSize: '1.1rem', fontWeight: 'bold' }}>0x4b3bFf4b58d22Ad363bb260e22032414d4CfdDB8</code>
        </section>

        <section style={{ marginBottom: '35px' }}>
          <h3 style={{ color: '#3b82f6' }}>3. DÉMARCHES INVESTISSEUR</h3>
          <p>Offre totale : <strong>1 000 000 000 unités</strong>.</p>
        </section>

        <footer style={{ background: '#1e293b', padding: '20px', fontSize: '0.8rem', borderRadius: '10px', marginBottom: '40px' }}>
          CADRE JURIDIQUE : Ce document ne constitue pas une offre publique de titres financiers. Projet provenant de la <strong>Guadeloupe</strong>.
        </footer>

        <hr style={{ border: '0', borderTop: '1px solid #3b82f6', marginBottom: '40px', opacity: '0.3' }} />

        <section style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ color: '#00ff41', fontSize: '1.8rem', fontWeight: '900', letterSpacing: '2px' }}>CONQUÊTE PLANÉTAIRE</h2>
          <p style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', marginTop: '10px' }}>GUADELOUPE : TERRES DE CHAMPIONS</p>
          <p style={{ color: '#60a5fa', fontStyle: 'italic', fontSize: '1.3rem', marginTop: '5px' }}>"Positivité à l'infini — BOUDOUM !"</p>
        </section>

        {/* NOUVEAU : NEURO-X EN ACTION : L'ORCHESTRE DES 200 IA */}
        <section style={{ marginBottom: '50px', background: '#111827', padding: '30px', borderRadius: '24px', border: '1px solid #3b82f6', boxShadow: '0 0 20px rgba(0,255,65,0.1)' }}>
          <h3 style={{ color: '#00ff41', textAlign: 'center', marginBottom: '30px', fontSize: '1.5rem', fontWeight: '900' }}>
            NEURO-X EN ACTION : L'ORCHESTRE DES 200 IA
          </h3>
          <p style={{ textAlign: 'center', color: '#cbd5e1', marginBottom: '30px' }}>
            Une symphonie d'intelligences artificielles opère en continu pour dynamiser les marchés des 14 nations.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {iaDescriptions.map((ia, index) => (
              <div 
                key={index} 
                style={{ 
                  background: index === activeIa ? `linear-gradient(90deg, ${ia.color}33 0%, transparent 100%)` : 'transparent', 
                  border: `1px solid ${index === activeIa ? ia.color : '#1e293b'}`, 
                  padding: '20px', 
                  borderRadius: '15px', 
                  transition: 'all 0.5s ease-in-out',
                  transform: index === activeIa ? 'scale(1.02)' : 'scale(1)',
                  boxShadow: index === activeIa ? `0 0 15px ${ia.color}66` : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '1.8rem', marginRight: '15px' }}>{ia.icon}</span>
                  <h4 style={{ color: index === activeIa ? ia.color : '#fff', fontSize: '1.2rem', fontWeight: 'bold' }}>{ia.title}</h4>
                </div>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>{ia.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '50px' }}>
          <h3 style={{ color: '#3b82f6', textAlign: 'center', marginBottom: '25px' }}>STATUT D'ACTIVATION DES 14 NATIONS PARTENAIRES</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
            {paysPartenaires.map((pays) => (
              <div key={pays} style={{ background: '#111827', padding: '10px', borderRadius: '8px', border: '1px solid #1e293b', textAlign: 'center', fontSize: '0.8rem' }}>
                <span style={{ color: '#00ff41', marginRight: '5px' }}>●</span> {pays.toUpperCase()}
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.7rem', marginTop: '15px' }}>STATUT : INFRASTRUCTURE NEURO-X OPÉRATIONNELLE</p>
        </section>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none', border: '1px solid #94a3b8', padding: '10px 25px', borderRadius: '50px' }}>
            ← RETOUR AU PORTAIL REUSSITESS©
          </Link>
        </div>
      </main>
    </div>
  );
}
