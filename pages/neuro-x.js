import Layout from "../components/Layout";
import { useState } from "react";

export default function NeuroX() {
  const [activeData, setActiveData] = useState("SÉLECTIONNEZ UNE ÉTAPE POUR ACCÉDER AUX RESSOURCES OFFICIELLES MONDIALES.");

  const steps = [
    { n: "1", t: "Opportunités Afrique (BAD)", u: "https://www.afdb.org/fr/projects-and-operations", d: "Accès direct au portail des projets et opérations de la Banque Africaine de Développement." },
    { n: "2", t: "Aide Internationale (ONU)", u: "https://www.un.org/fr/our-work/deliver-humanitarian-aid", d: "Ressources officielles des Nations Unies sur l'aide et le développement international." },
    { n: "3", t: "Boutique en Ligne (Commerce)", u: "https://www.economie.gouv.fr/entreprises/creer-site-internet-vente-en-ligne", d: "Guide officiel du Ministère de l'Économie pour réussir sa transition vers l'e-commerce." },
    { n: "4", t: "Logistique Mondiale (Douanes)", u: "https://www.douane.gouv.fr/fiche/les-fondamentaux-du-dedouanement", d: "Portail officiel des douanes pour maîtriser les flux d'exportation de marchandises." },
    { n: "5", t: "Identité & Langue (CNRS)", u: "https://www.cnrs.fr/fr/actualite/les-langues-creoles-un-laboratoire-pour-la-linguistique", d: "Analyses scientifiques du CNRS sur la richesse et l'évolution des langues créoles." },
    { n: "6", t: "Patrimoine Caraïbe (UNESCO)", u: "https://whc.unesco.org/fr/etatsparties/fr", d: "Patrimoine mondial de l'UNESCO dans la Caraïbe et protection des biens culturels." },
    { n: "7", t: "Propriété Intellectuelle (INPI)", u: "https://www.inpi.fr/proteger-vos-creations", d: "Site officiel de l'INPI pour le dépôt de marques, brevets et la protection du succès." },
    { n: "8", t: "Innovation & IA (Etalab)", u: "https://www.etalab.gouv.fr/", d: "Portail officiel de la politique des données et de l'intelligence artificielle." },
    { n: "9", t: "Dépassement de Soi (Santé)", u: "https://www.who.int/fr/news-room/fact-sheets/detail/mental-health-strengthening-our-response", d: "Directives de l'OMS sur la santé mentale et le renforcement du potentiel humain." },
    { n: "10", t: "Épanouissement (ODD)", u: "https://www.un.org/sustainabledevelopment/fr/objectifs-de-developpement-durable/", d: "Les 17 objectifs mondiaux pour réussir un futur durable et équitable." }
  ];

  return (
    <Layout>
      <div style={{ minHeight: "100vh", background: "#000", color: "#fff", padding: "2rem 1rem", fontFamily: "sans-serif" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          <header style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h1 style={{ fontSize: "clamp(2rem, 8vw, 4rem)", fontWeight: "900", color: "#2563eb", marginBottom: "10px" }}>REUSSITESS® NEURO-X</h1>
            <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#fff", textTransform: "uppercase", letterSpacing: "3px" }}>L'excellence • L'innovation • Le succès</div>
            <p style={{ color: "#3b82f6", fontWeight: "bold", marginTop: "10px" }}>GUADELOUPE, TERRE DE CHAMPIONS</p>
          </header>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            
            <div style={{ border: "1px solid #1e40af", borderRadius: "20px", padding: "1.5rem", background: "rgba(30, 64, 175, 0.1)" }}>
              <h3 style={{ color: "#3b82f6", marginBottom: "1.5rem", textAlign: "center", fontSize: "1.2rem" }}>LES 10 AXES DE DIRECTION</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {steps.map((step) => (
                  <button 
                    key={step.n} 
                    onClick={() => setActiveData(step.d)} 
                    style={{ textAlign: "left", background: "#111", border: "1px solid #333", color: "#fff", padding: "12px", borderRadius: "10px", cursor: "pointer", transition: "0.2s" }}
                  >
                    <span style={{ color: "#2563eb", fontWeight: "900", marginRight: "10px" }}>{step.n}.</span>
                    <a href={step.u} target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>{step.t} ➜</a>
                  </button>
                ))}
              </div>
            </div>

            <div style={{ background: "#050505", border: "2px solid #2563eb", borderRadius: "20px", padding: "2.5rem", display: "flex", flexDirection: "column", justifyContent: "center", boxShadow: "0 0 40px rgba(37, 99, 235, 0.2)" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "900", marginBottom: "1.5rem", color: "#3b82f6", textAlign: "center" }}>MONITEUR SOUVERAIN</h2>
              <div style={{ padding: "1.5rem", border: "1px solid #1e40af", borderRadius: "10px", minHeight: "180px", background: "rgba(37, 99, 235, 0.05)", display: "flex", alignItems: "center" }}>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#e2e8f0", textAlign: "center" }}>{activeData}</p>
              </div>
              <p style={{ marginTop: "2rem", textAlign: "center", color: "#444", fontSize: "0.7rem" }}>SOURCES VÉRIFIÉES • NEURO-X PROTOCOL</p>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
