import Layout from "../components/Layout";
import { useState } from "react";

export default function NeuroX() {
  const [activeData, setActiveData] = useState("EN ATTENTE DE SÉLECTION STRATÉGIQUE...");

  const globalNodes = [
    { name: "Souveraineté Économique", url: "https://www.imf.org/en/Data", desc: "Données financières mondiales en temps réel." },
    { name: "Nœuds Technologiques", url: "https://github.com/trending", desc: "Flux de développement open-source planétaire." },
    { name: "Ressources Énergétiques", url: "https://www.iea.org/data-and-statistics", desc: "Statistiques mondiales sur l'énergie." },
    { name: "Veille Géopolitique", url: "https://www.un.org/en/observances/data-protection-day", desc: "Protection des données et droits mondiaux." }
  ];

  return (
    <Layout>
      <div style={{ minHeight: "100vh", background: "#000", color: "#fff", padding: "3rem 1rem", fontFamily: "sans-serif" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          <header style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h1 style={{ fontSize: "clamp(2rem, 8vw, 4rem)", fontWeight: "900", color: "#2563eb", letterSpacing: "-2px" }}>REUSSITESS® NEURO-X</h1>
            <p style={{ color: "#94a3b8", letterSpacing: "5px", textTransform: "uppercase", fontSize: "0.8rem" }}>Système de Direction de Flux Réels</p>
          </header>

          <div style={{ display: "grid", mdGridTemplateColumns: "1fr 2fr", gap: "2rem" }}>
            
            {/* PANNEAU DE CONTRÔLE GAÀUCHE */}
            <div style={{ border: "1px solid #1e40af", borderRadius: "20px", padding: "1.5rem", background: "rgba(30, 64, 175, 0.05)" }}>
              <h3 style={{ fontSize: "1rem", color: "#3b82f6", marginBottom: "1.5rem" }}>UNITÉS DE DIRECTION</h3>
              {globalNodes.map((node) => (
                <div key={node.name} style={{ marginBottom: "1rem" }}>
                  <button 
                    onClick={() => setActiveData(node.desc)}
                    style={{ width: "100%", textAlign: "left", background: "#111", border: "1px solid #333", color: "#fff", padding: "15px", borderRadius: "10px", cursor: "pointer", transition: "0.3s" }}
                    onMouseOver={(e) => e.target.style.borderColor = "#2563eb"}
                    onMouseOut={(e) => e.target.style.borderColor = "#333"}
                  >
                    <strong>{node.name}</strong>
                    <br />
                    <a href={node.url} target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6", fontSize: "0.7rem", textDecoration: "none" }}>Ouvrir le flux réel →</a>
                  </button>
                </div>
              ))}
            </div>

            {/* MONITEUR DE VISION DROIT */}
            <div style={{ background: "#050505", border: "1px solid #1e40af", borderRadius: "20px", padding: "3rem", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "radial-gradient(circle at center, #1e40af11 0%, transparent 70%)" }}></div>
              <h2 style={{ fontSize: "2rem", fontWeight: "900", marginBottom: "1rem", color: "#3b82f6" }}>MONITEUR STRATÉGIQUE</h2>
              <div style={{ padding: "2rem", border: "1px dashed #333", borderRadius: "15px" }}>
                <p style={{ fontSize: "1.2rem", fontStyle: "italic", color: "#94a3b8" }}>{activeData}</p>
              </div>
              <p style={{ marginTop: "2rem", fontSize: "0.7rem", color: "#444" }}>DONNÉES VÉRIFIÉES - PROTOCOLE NEURO-X ACTIVE</p>
            </div>

          </div>

          <footer style={{ marginTop: "4rem", textAlign: "center", borderTop: "1px solid #111", paddingTop: "2rem" }}>
            <p style={{ color: "#333", fontSize: "0.8rem" }}>© 2025 REUSSITESS® NEURO-X - L'INVENTION AU SERVICE DE LA VÉRITÉ</p>
          </footer>
        </div>
      </div>
    </Layout>
  );
}
