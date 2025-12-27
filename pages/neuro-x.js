import Layout from "../components/Layout";
import { useState } from "react";

export default function NeuroX() {
  const [activeStep, setActiveStep] = useState(null);
  const [chatResponse, setChatResponse] = useState("Expert REUSSITESS® prêt. Cliquez sur un titre pour accéder aux sources officielles ou interrogez-moi.");
  const [chatInput, setChatInput] = useState("");
  const [lang, setLang] = useState("fr-FR");

  const steps = [
    { n: "1", t: "Afrique", links: [{ n: "BAD Officiel", u: "https://www.afdb.org/fr" }, { n: "ZLECAF", u: "https://au-afcfta.org/fr/" }], d: "Expansion stratégique sur le continent africain." },
    { n: "2", t: "ONU", links: [{ n: "Objectifs ODD", u: "https://www.un.org/sustainabledevelopment/fr/" }], d: "Diplomatie et impact global." },
    { n: "3", t: "E-commerce", links: [{ n: "Vendre en ligne", u: "https://www.economie.gouv.fr/entreprises/vendre-en-ligne" }], d: "Commerce numérique mondial." },
    { n: "4", t: "Logistique", links: [{ n: "Douanes", u: "https://www.douane.gouv.fr" }], d: "Optimisation des flux physiques." },
    { 
      n: "5", t: "Langue Créole", 
      isSpecial: true,
      d: "Le créole est une langue riche et vivante, parlée dans le monde entier." 
    },
    { n: "6", t: "UNESCO", links: [{ n: "Patrimoine", u: "https://whc.unesco.org/fr/list/" }], d: "Soft-power et culture." },
    { n: "7", t: "INPI", links: [{ n: "Protection", u: "https://www.inpi.fr" }], d: "Sécurisation de l'adresse 0x69f4...1549." },
    { n: "8", t: "Tech/IA", links: [{ n: "Data Gouv", u: "https://www.data.gouv.fr" }], d: "Innovation technologique." },
    { n: "9", t: "Psychologie", links: [{ n: "OMS", u: "https://www.who.int/fr" }], d: "Performance mentale." },
    { n: "10", t: "Épanouissement", links: [{ n: "Impact", u: "https://www.avise.org" }], d: "Réussite et bien-être." }
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
    let r = "Je maîtrise les enjeux des 14 pays cibles. Posez-moi une question spécifique.";
    if (input.includes("créole") || input.includes("guadeloupe")) {
      r = "La Guadeloupe et la langue créole sont au cœur de l'identité Reussitess. C'est un levier de croissance unique.";
    }
    setChatResponse(r); speak(r);
  };

  const ListItem = ({ title, url, color = "#22c55e" }) => (
    <li style={{ marginBottom: "12px" }}>
      <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: "#ccc", textDecoration: "none", fontSize: "0.95rem" }}>
        <strong style={{ color }}>{title.split(":")[0]} :</strong> {title.split(":")[1]} ➜
      </a>
    </li>
  );

  return (
    <Layout>
      <div style={{ minHeight: "100vh", background: "#050505", color: "#fff", padding: "40px 20px" }}>
        <h1 style={{ textAlign: "center", fontSize: "2.8rem", fontWeight: "900", color: "#3b82f6", marginBottom: "40px" }}>REUSSITESS® NEURO-X</h1>
        
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
                <span onClick={() => changeLang("fr-FR", "Bonjour.")} style={{ fontSize: "2rem", cursor: "pointer" }}>🇫🇷</span>
                <span onClick={() => changeLang("en-US", "Hello.")} style={{ fontSize: "2rem", cursor: "pointer" }}>🇺🇸</span>
                <span onClick={() => changeLang("es-ES", "Hola.")} style={{ fontSize: "2rem", cursor: "pointer" }}>🇪🇸</span>
                <span onClick={() => changeLang("it-IT", "Buongiorno.")} style={{ fontSize: "2rem", cursor: "pointer" }}>🇮🇹</span>
                <span onClick={() => changeLang("pt-BR", "Olá.")} style={{ fontSize: "2rem", cursor: "pointer" }}>🇧🇷</span>
                <span onClick={() => changeLang("de-DE", "Hallo.")} style={{ fontSize: "2rem", cursor: "pointer" }}>🇩🇪</span>
              </div>
              <div style={{ background: "#000", padding: "15px", borderRadius: "12px", border: "1px solid #222" }}>
                <p style={{ color: "#ddd" }}>{chatResponse}</p>
              </div>
              <form onSubmit={(e) => { e.preventDefault(); processInput(chatInput); setChatInput(""); }} style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
                <input value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Interroger NEURO-X..." style={{ flexGrow: 1, background: "#111", border: "1px solid #333", color: "#fff", padding: "12px", borderRadius: "10px" }} />
                <button type="submit" style={{ background: "#2563eb", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "10px", cursor: "pointer" }}>OK</button>
              </form>
            </div>

            {activeStep && activeStep.n === "5" && (
              <div style={{ background: "#111", border: "1px solid #3b82f6", borderRadius: "24px", padding: "25px", animation: "fadeIn 0.5s" }}>
                <h4 style={{ color: "#22c55e", marginBottom: "15px", fontSize: "1.1rem" }}>🌴 DOM-TOM : Opportunités, Culture et Identité</h4>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <ListItem title="Guadeloupe : Région et opportunités économiques" url="https://www.regionguadeloupe.fr/entreprises-et-economie/" />
                  <ListItem title="Martinique : Tourisme et patrimoine" url="https://www.martinique.org" />
                  <ListItem title="Guyane : Guides économiques (Chambre de commerce)" url="https://www.guyane.cci.fr" />
                  <ListItem title="La Réunion : Investissements et croissance" url="https://www.regionreunion.com/economie" />
                </ul>

                <h4 style={{ color: "#a855f7", marginTop: "20px", marginBottom: "15px", fontSize: "1.1rem" }}>🗣️ Langue et Culture Créoles</h4>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <ListItem title="Potomitan : Dictionnaire créole" url="https://www.potomitan.info" color="#a855f7" />
                  <ListItem title="Lexilogos : Portail créole" url="https://www.lexilogos.com/creole_dictionnaire.htm" color="#a855f7" />
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>{` @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } `}</style>
    </Layout>
  );
}
