import Layout from "../components/Layout";
import { useState } from "react";

export default function NeuroX() {
  const [decision, setDecision] = useState("Veuillez sélectionner une zone de projection...");
  
  const analyzeZone = (zone) => {
    const impacts = {
      "Afrique": "OPTIMISATION : Développement des infrastructures solaires et éducation numérique.",
      "Europe": "OPTIMISATION : Transition écologique et souveraineté technologique.",
      "Asie": "OPTIMISATION : Accélération de l'intelligence artificielle et logistique mondiale.",
      "Amérique": "OPTIMISATION : Innovation fintech et réseaux de connectivité.",
      "Océanie": "OPTIMISATION : Préservation des écosystèmes et économie bleue."
    };
    setDecision(impacts[zone]);
  };

  return (
    <Layout>
      <div style={{ minHeight: "100vh", background: "#000", color: "#00ff41", padding: "2rem", fontFamily: "'Courier New', monospace" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", border: "2px solid #1e40af", padding: "2rem", borderRadius: "10px", boxShadow: "0 0 50px rgba(30, 64, 175, 0.5)" }}>
          
          <div style={{ textAlign: "center", borderBottom: "1px solid #1e40af", marginBottom: "2rem", paddingBottom: "1rem" }}>
            <h1 style={{ color: "#fff", fontSize: "2.5rem", margin: 0 }}>REUSSITESS® NEURO-X</h1>
            <p style={{ color: "#3b82f6", letterSpacing: "5px" }}>UNITÉ DE DÉCISION STRATÉGIQUE</p>
          </div>

          <div style={{ background: "rgba(30, 64, 175, 0.05)", padding: "2rem", borderRadius: "10px", marginBottom: "2rem", textAlign: "center" }}>
            <h2 style={{ color: "#fff", fontSize: "1.2rem", marginBottom: "1.5rem" }}>{decision}</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
              {["Afrique", "Europe", "Asie", "Amérique", "Océanie"].map(zone => (
                <button 
                  key={zone}
                  onClick={() => analyzeZone(zone)}
                  style={{ background: "#111", border: "1px solid #1e40af", color: "#fff", padding: "10px 20px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}
                >
                  SCAN {zone.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div style={{ fontSize: "0.8rem", color: "#3b82f6", border: "1px dashed #1e40af", padding: "1rem", textAlign: "center" }}>
            [INFO] : L'invention utilise l'intelligence souveraine pour équilibrer les flux mondiaux.
          </div>

        </div>
      </div>
    </Layout>
  );
}
