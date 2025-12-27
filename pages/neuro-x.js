import Layout from "../components/Layout";
import { useState } from "react";

export default function NeuroX() {
  const [activeData, setActiveData] = useState("DÉPLOYER LE PLAN D'EXCELLENCE EN 10 ÉTAPES...");

  const sections = [
    { 
      title: "🌍 1. Opportunités Afrique & International", 
      links: [
        { n: "Financements BAD", u: "https://www.afdb.org/fr/topics-and-sectors/sectors/private-sector-development" },
        { n: "ZLECAF - Exportation Afrique", u: "https://au-afcfta.org/fr/" }
      ],
      desc: "Étape 1 & 2 : Identifier les marchés porteurs et sécuriser les aides internationales pour l'entrepreneuriat Sud-Sud."
    },
    { 
      title: "🚀 2. Business & Boutique en Ligne", 
      links: [
        { n: "Logistique Mondiale (DHL/FedEx)", u: "https://www.dhl.com/fr-fr/home/solutions-logistiques.html" },
        { n: "Créer sa Boutique (Shopify)", u: "https://www.shopify.com/fr/blog/creer-boutique-en-ligne" }
      ],
      desc: "Étape 3 & 4 : Maîtriser les flux numériques et la logistique pour vendre vos produits de la Guadeloupe au monde entier."
    },
    { 
      title: "🧠 3. Culture & Force du Mental", 
      links: [
        { n: "Études Créoles (Potomitan)", u: "http://www.potomitan.info/" },
        { n: "Dépassement de soi (TED)", u: "https://www.ted.com/topics/self-improvement" }
      ],
      desc: "Étape 5 & 6 : L'identité comme levier de puissance. Un champion qui connaît son histoire est invincible."
    },
    { 
      title: "⚖️ 4. Propriété & Succès Durable", 
      links: [
        { n: "INPI - Protéger son Invention", u: "https://www.inpi.fr/" },
        { n: "Success Stories Forbes", u: "https://www.forbes.com/leadership/" }
      ],
      desc: "Étape 7 & 8 : Sécuriser vos innovations et s'inspirer des plus grands bâtisseurs mondiaux."
    },
    { 
      title: "🏅 5. Réseau & Épanouissement Humain", 
      links: [
        { n: "CCI Guadeloupe - Réseau", u: "https://www.guadeloupe.cci.fr/" },
        { n: "Objectifs de Développement (ONU)", u: "https://www.un.org/sustainabledevelopment/fr/" }
      ],
      desc: "Étape 9 & 10 : Collaborer avec les champions locaux et viser l'épanouissement total de l'homme."
    }
  ];

  return (
    <Layout>
      <div style={{ minHeight: "100vh", background: "#000", color: "#fff", padding: "2rem 1rem", fontFamily: "sans-serif" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          <header style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h1 style={{ fontSize: "clamp(2rem, 8vw, 4rem)", fontWeight: "900", color: "#2563eb", marginBottom: "10px" }}>REUSSITESS® NEURO-X</h1>
            <div style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#fff", textTransform: "uppercase", letterSpacing: "3px" }}>
              L'excellence • L'innovation • Le succès
            </div>
            <p style={{ color: "#3b82f6", marginTop: "10px", fontWeight: "bold" }}>GUADELOUPE, TERRE DE CHAMPIONS</p>
          </header>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            
            <div style={{ border: "1px solid #1e40af", borderRadius: "20px", padding: "1.5rem", background: "rgba(30, 64, 175, 0.1)" }}>
              {sections.map((sec) => (
                <div key={sec.title} style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ color: "#3b82f6", borderBottom: "1px solid #333", paddingBottom: "5px", fontSize: "1rem" }}>{sec.title}</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginTop: "10px" }}>
                    {sec.links.map(link => (
                      <button key={link.n} onClick={() => setActiveData(sec.desc)} style={{ textAlign: "left", background: "#111", border: "1px solid #333", color: "#fff", padding: "10px", borderRadius: "8px", cursor: "pointer" }}>
                        <a href={link.u} target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none", fontSize: "0.85rem" }}>{link.n} ➜</a>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: "#050505", border: "2px solid #2563eb", borderRadius: "20px", padding: "2rem" }}>
              <h2 style={{ fontSize: "1.3rem", fontWeight: "900", marginBottom: "1rem", color: "#3b82f6", textAlign: "center" }}>PLAN D'ACTION NEURO-X</h2>
              <div style={{ padding: "1rem", border: "1px solid #1e40af", borderRadius: "10px", background: "rgba(37, 99, 235, 0.05)", marginBottom: "1.5rem" }}>
                <p style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#e2e8f0" }}>{activeData}</p>
              </div>
              
              <div style={{ fontSize: "0.85rem", color: "#94a3b8" }}>
                <p style={{ color: "#fff", fontWeight: "bold" }}>LES 10 COMMANDEMENTS DU SUCCÈS :</p>
                <ol style={{ paddingLeft: "20px" }}>
                  <li>Analyser les opportunités mondiales</li>
                  <li>Capter les aides internationales</li>
                  <li>Structurer son offre numérique</li>
                  <li>Maîtriser la logistique export</li>
                  <li>Fortifier son mental de champion</li>
                  <li>Honorer ses racines culturelles</li>
                  <li>Protéger juridiquement ses idées</li>
                  <li>Apprendre des succès d'autrui</li>
                  <li>Bâtir un réseau d'excellence</li>
                  <li>Viser l'épanouissement humain global</li>
                </ol>
              </div>
            </div>
          </div>
          <footer style={{ marginTop: "3rem", textAlign: "center", color: "#444" }}>
             Reussitess®971 - L'innovation au service de la réussite mondiale.
          </footer>
        </div>
      </div>
    </Layout>
  );
}
