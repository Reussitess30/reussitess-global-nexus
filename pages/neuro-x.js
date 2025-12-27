import Layout from "../components/Layout";
import { useState } from "react";

export default function NeuroX() {
  const [activeStep, setActiveStep] = useState(null);
  const [chatResponse, setChatResponse] = useState("Intelligence REUSSITESS® activée. Je maîtrise les aires créolophones : Guadeloupe, Martinique, Guyane, Réunion et Haïti.");
  const [chatInput, setChatInput] = useState("");
  const [lang, setLang] = useState("fr-FR");

  const steps = [
    { n: "1", t: "Afrique", links: [{ n: "BAD Secteur Privé", u: "https://www.afdb.org/fr" }, { n: "ZLECAF Officiel", u: "https://au-afcfta.org/fr/" }], d: "Expansion stratégique et marchés émergents." },
    { n: "2", t: "ONU", links: [{ n: "Agenda 2030", u: "https://www.un.org/sustainabledevelopment/fr/" }, { n: "Pacte Mondial", u: "https://pactemondial.org" }], d: "Cadre de diplomatie économique mondiale." },
    { n: "3", t: "E-commerce", links: [{ n: "Vendre en ligne", u: "https://www.economie.gouv.fr/entreprises/vendre-en-ligne" }], d: "Commerce global sécurisé en Reussitess©." },
    { n: "4", t: "Logistique", links: [{ n: "Douanes FR", u: "https://www.douane.gouv.fr" }, { n: "Port Caraïbes", u: "http://www.guadeloupe-portcaraibes.com" }], d: "Optimisation du hub logistique de Jarry." },
    { 
      n: "5", t: "Langue Créole", 
      isSpecial: true,
      links: [
        { n: "Potomitan (Dictionnaire)", u: "https://www.potomitan.info" },
        { n: "Campus Creole (Cours)", u: "https://www.campus-creole.com" },
        { n: "Lexilogos (Portail)", u: "https://www.lexilogos.com/creole_reunionnais.htm" }
      ], 
      d: "Le créole est une langue riche et vivante, parlée dans le monde entier." 
    },
    { n: "6", t: "UNESCO", links: [{ n: "Patrimoine Mondial", u: "https://whc.unesco.org/fr/list/" }], d: "Soft-power et excellence culturelle." },
    { n: "7", t: "INPI", links: [{ n: "Marques & Brevets", u: "https://www.inpi.fr" }], d: "Protection de l'adresse 0x69f4...1549." },
    { n: "8", t: "Tech/IA", links: [{ n: "IA Souveraine", u: "https://www.etalab.gouv.fr" }], d: "Algorithmes pour les 14 pays souverains." },
    { n: "9", t: "Psychologie", links: [{ n: "Santé Mentale OMS", u: "https://www.who.int/fr" }], d: "Performance mentale des leaders." },
    { n: "10", t: "Épanouissement", links: [{ n: "Impact Social", u: "https://www.avise.org" }], d: "Harmonie entre réussite et bien-être." }
  ];

  const changeLang = (l, msg) => {
    setLang(l); setChatResponse(msg); speak(msg, l);
  };

  const speak = (msg, lCode = lang) => {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(msg);
    u.lang = lCode; u.rate = 0.95;
    window.speechSynthesis.speak(u);
  };

  const processInput = (text) => {
    const input = text.toLowerCase();
    let r = "Je suis prêt à vous guider sur les 10 piliers Reussitess©.";
    if (input.includes("créole") || input.includes("guadeloupe") || input.includes("martinique") || input.includes("guyane") || input.includes("réunion") || input.includes("haïti")) {
      r = "Le créole unit nos territoires. De la Guadeloupe à la Réunion, c'est le socle de notre identité et de nos opportunités économiques.";
    }
    setChatResponse(r); speak(r);
  };

  return (
    <Layout>
      <div style={{ minHeight: "100vh", background: "#050505", color: "#fff", padding: "40px 20px" }}>
        <h1 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "900", color: "#3b82f6", marginBottom: "40px" }}>REUSSITESS® NEURO-X</h1>
        
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "30px" }}>
          
          <div style={{ background: "#0f0f0f", border: "1px solid #1e40af", borderRadius: "24px", padding: "25px" }}>
            <h3 style={{ color: "#3b82f6", marginBottom: "20px" }}>10 PILIERS STRATÉGIQUES</h3>
            {steps.map(s => (
              <button key={s.n} onClick={() => { setActiveStep(s); speak(s.d); }} style={{ width: "100%", textAlign: "left", background: activeStep?.n === s.n ? "#1e40af" : "#1a1a1a", border: "1px solid #333", color: "#fff", padding: "14px", borderRadius: "12px", marginBottom: "10px", cursor: "pointer" }}>
                <span style={{ fontWeight: "bold", color: "#3b82f6", marginRight: "10px" }}>{s.n}.</span> {s.t}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
            <div style={{ background: "#0a0a0a", border: "2px solid #2563eb", borderRadius: "24px", padding: "25px" }}>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "20px" }}>
                {["fr-FR", "en-US", "es-ES", "it-IT", "pt-BR", "de-DE"].map((l, i) => (
                  <span key={i} onClick={() => changeLang(l, "Mode multilingue activé.")} style={{ fontSize: "2rem", cursor: "pointer" }}>
                    {l === "fr-FR" ? "🇫🇷" : l === "en-US" ? "🇺🇸" : l === "es-ES" ? "🇪🇸" : l === "it-IT" ? "🇮🇹" : l === "pt-BR" ? "🇧🇷" : "🇩🇪"}
                  </span>
                ))}
              </div>
              <div style={{ background: "#000", padding: "15px", borderRadius: "12px", border: "1px solid #222" }}>
                <p style={{ color: "#ddd" }}>{chatResponse}</p>
              </div>
              <form onSubmit={(e) => { e.preventDefault(); processInput(chatInput); setChatInput(""); }} style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
                <input value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Posez une question..." style={{ flexGrow: 1, background: "#111", border: "1px solid #333", color: "#fff", padding: "12px", borderRadius: "10px" }} />
                <button type="submit" style={{ background: "#2563eb", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "10px", cursor: "pointer" }}>OK</button>
              </form>
            </div>

            {activeStep && (
              <div style={{ background: "#111", border: "1px solid #3b82f6", borderRadius: "24px", padding: "25px" }}>
                <h3 style={{ color: "#3b82f6", marginBottom: "12px" }}>{activeStep.t} : ANALYSE</h3>
                
                {activeStep.isSpecial && (
                  <div style={{ marginBottom: "20px" }}>
                    <h4 style={{ color: "#22c55e", marginBottom: "10px" }}>🌴 DOM-TOM : Opportunités, Culture et Identité</h4>
                    <ul style={{ color: "#ccc", fontSize: "0.9rem", listStyle: "disc", paddingLeft: "20px" }}>
                      <li>Guadeloupe : Région et opportunités économiques.</li>
                      <li>Martinique : Tourisme et patrimoine.</li>
                      <li>Guyane : Guides économiques (Chambre de commerce).</li>
                      <li>La Réunion : Investissements et croissance.</li>
                    </ul>
                  </div>
                )}

                <p style={{ color: "#ccc", marginBottom: "20px" }}>{activeStep.d}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {activeStep.links.map((link, idx) => (
                    <a key={idx} href={link.u} target="_blank" rel="noopener noreferrer" style={{ background: "#000", padding: "15px", borderRadius: "10px", border: "1px solid #2563eb", color: "#fff", textDecoration: "none", fontWeight: "bold", textAlign: "center" }}>
                      {link.n} ➜
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
