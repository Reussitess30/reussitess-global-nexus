import Layout from "../components/Layout";
import { useState } from "react";

export default function NeuroX() {
  const [activeData, setActiveData] = useState("SÉLECTIONNEZ UNE ÉTAPE OU PARLEZ À NEURO-BOT.");
  const [chatInput, setChatInput] = useState("");
  const [chatResponse, setChatResponse] = useState("Honoré de vous accueillir Champion. Je suis NEURO-BOT. Comment puis-je servir votre succès ?");
  const [lang, setLang] = useState("fr-FR");

  const steps = [
    { n: "1", t: "Opportunités Afrique (BAD)", u: "https://www.afdb.org/fr", d: "Exploration des marchés émergents africains." },
    { n: "2", t: "Aide Internationale (ONU)", u: "https://www.un.org/fr", d: "Programmes mondiaux de développement." },
    { n: "3", t: "Boutique en Ligne (Commerce)", u: "https://www.economie.gouv.fr", d: "Guide pour le e-commerce mondial." },
    { n: "4", t: "Logistique Mondiale (Douanes)", u: "https://www.douane.gouv.fr", d: "Maîtrise des flux d'exportation." },
    { n: "5", t: "Identité & Langue (CNRS)", u: "https://www.cnrs.fr", d: "Richesse linguistique et créole." },
    { n: "6", t: "Patrimoine Caraïbe (UNESCO)", u: "https://whc.unesco.org", d: "Culture et héritage de la Caraïbe." },
    { n: "7", t: "Propriété Intellectuelle (INPI)", u: "https://www.inpi.fr", d: "Protection de vos innovations." },
    { n: "8", t: "Innovation & IA (Etalab)", u: "https://www.etalab.gouv.fr", d: "Futur technologique et données." },
    { n: "9", t: "Dépassement de Soi (OMS)", u: "https://www.who.int/fr", d: "Potentiel humain et santé mentale." },
    { n: "10", t: "Épanouissement (ODD)", u: "https://www.un.org/sustainabledevelopment/fr/", d: "Objectifs de réussite durable." }
  ];

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(chatResponse);
    utterance.lang = lang;
    window.speechSynthesis.speak(utterance);
  };

  const handleChat = (e) => {
    e.preventDefault();
    const input = chatInput.toLowerCase();
    if (input.includes("guadeloupe") || input.includes("971")) {
      setChatResponse("Respect au Champion de Guadeloupe ! 🇬🇵 Ici, l'innovation devient succès.");
    } else {
      setChatResponse("Je suis à votre service pour l'excellence mondiale. Quel pilier activons-nous ?");
    }
    setChatInput("");
  };

  const languages = [
    { code: "fr-FR", flag: "🇫🇷", name: "FR" },
    { code: "en-US", flag: "🇺🇸", name: "EN" },
    { code: "es-ES", flag: "es", name: "ES" },
    { code: "pt-BR", flag: "🇧🇷", name: "PT" },
    { code: "de-DE", flag: "🇩🇪", name: "DE" },
    { code: "it-IT", flag: "🇮🇹", name: "IT" },
    { code: "zh-CN", flag: "🇨🇳", name: "ZH" }
  ];

  return (
    <Layout>
      <div style={{ minHeight: "100vh", background: "#000", color: "#fff", padding: "2rem 1rem", fontFamily: "sans-serif" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          <header style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h1 style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: "900", color: "#2563eb" }}>REUSSITESS® NEURO-X</h1>
            <p style={{ color: "#3b82f6", fontWeight: "bold" }}>GUADELOUPE, TERRE DE CHAMPIONS 🇬🇵</p>
          </header>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            
            {/* LES 10 PILIERS */}
            <div style={{ border: "1px solid #1e40af", borderRadius: "20px", padding: "1.5rem", background: "rgba(30, 64, 175, 0.1)" }}>
              <h3 style={{ color: "#3b82f6", marginBottom: "1rem", textAlign: "center" }}>AXES DE DIRECTION</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {steps.map((s) => (
                  <button key={s.n} onClick={() => setActiveData(s.d)} style={{ textAlign: "left", background: "#111", border: "1px solid #333", color: "#fff", padding: "8px", borderRadius: "8px", cursor: "pointer", fontSize: "0.85rem" }}>
                    <a href={s.u} target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "none" }}>{s.n}. {s.t}</a>
                  </button>
                ))}
              </div>
            </div>

            {/* NEURO-BOT AVEC VOCAL ET DRAPEAUX */}
            <div style={{ background: "#050505", border: "2px solid #2563eb", borderRadius: "20px", padding: "1.5rem", boxShadow: "0 0 30px rgba(37, 99, 235, 0.2)" }}>
              <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "1rem", flexWrap: "wrap" }}>
                {languages.map(l => (
                  <button key={l.code} onClick={() => setLang(l.code)} style={{ background: lang === l.code ? "#2563eb" : "#111", border: "1px solid #333", borderRadius: "5px", padding: "5px", cursor: "pointer", fontSize: "1.2rem" }}>
                    {l.flag}
                  </button>
                ))}
              </div>

              <div style={{ padding: "1rem", border: "1px solid #1e40af", borderRadius: "10px", background: "rgba(37, 99, 235, 0.05)", marginBottom: "1rem", position: "relative" }}>
                <p style={{ fontSize: "1rem", color: "#e2e8f0", paddingRight: "40px" }}>{chatResponse}</p>
                <button onClick={speak} style={{ position: "absolute", top: "10px", right: "10px", background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer", color: "#2563eb" }}>🔊</button>
              </div>

              <form onSubmit={handleChat} style={{ display: "flex", gap: "10px" }}>
                <input value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Posez votre question..." style={{ flexGrow: 1, padding: "10px", borderRadius: "8px", border: "1px solid #333", background: "#111", color: "#fff" }} />
                <button type="submit" style={{ background: "#2563eb", color: "#fff", border: "none", padding: "10px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}>PARLER</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
