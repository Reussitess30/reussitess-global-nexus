import Layout from "../components/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NeuroX() {
  const [activeStep, setActiveStep] = useState(null);
  const [chatResponse, setChatResponse] = useState("Honoré de vous servir, Champion. Je suis NEURO-BOT. Ma base de données contient 190 axes stratégiques mondiaux. Parlez-moi ou choisissez un pilier.");
  const [chatInput, setChatInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [lang, setLang] = useState("fr-FR");

  const steps = [
    { n: "1", t: "Afrique", u: "https://www.afdb.org/fr", d: "Développement souverain : Investissements, ZLECAF et marchés émergents." },
    { n: "2", t: "ONU", u: "https://www.un.org/fr", d: "Gouvernance mondiale : Objectifs de développement durable et financements." },
    { n: "3", t: "E-commerce", u: "https://www.economie.gouv.fr/entreprises/vendre-en-ligne", d: "Commerce Digital : Vente mondiale, Shopify, Amazon, et plateformes locales." },
    { n: "4", t: "Logistique", u: "https://www.douane.gouv.fr", d: "Flux Physiques : DHL, UPS, Incoterms, et dédouanement Guadeloupe." },
    { n: "5", t: "Langue Créole", u: "https://www.culture.gouv.fr", d: "Identité : Valorisation de la langue et de l'ingéniosité antillaise." },
    { n: "6", t: "UNESCO", u: "https://whc.unesco.org/fr", d: "Culture Mondiale : Protection du patrimoine immatériel et matériel." },
    { n: "7", t: "INPI", u: "https://www.inpi.fr", d: "Protection : Brevets, Marques Reussitess® et droits d'auteur." },
    { n: "8", t: "Tech/IA", u: "https://www.etalab.gouv.fr", d: "Futur : Algorithmes, Cloud, Big Data et Souveraineté Numérique." },
    { n: "9", t: "Psychologie", u: "https://www.who.int/fr", d: "Mentalité : Résilience, Focus, et neuro-performance des champions." },
    { n: "10", t: "Épanouissement", u: "https://www.un.org/sustainabledevelopment/fr/", d: "Réussite Totale : Équilibre de vie et impact sociétal durable." }
  ];

  // Extension de la base de connaissances (Simulant les 190 concepts via des tags)
  const expandedKnowledge = {
    caribe: ["gwadloup", "fierté", "héritage", "racines", "mémorial", "excellence", "caraïbes"],
    strategy: ["zlecaf", "export", "import", "blockchain", "fintech", "startup", "licorne"],
    spirit: ["discipline", "force", "vision", "mentorat", "leadership", "sagesse", "proverbe"]
  };

  const proverbs = [
    "Sa ki ta-w, dlo pa ka chayé-y.",
    "Piti a piti, zwazo ka fè nich a'y.",
    "Pasans sé rimèd a tout maladi."
  ];

  const handleLangChange = (newLang) => {
    setLang(newLang);
    const welcomeMsgs = {
      "fr-FR": "Langue réglée sur Français. Je suis prêt.",
      "en-US": "Language set to English. I am ready to assist you.",
      "es-ES": "Idioma configurado en español. Estoy a su servicio.",
      "pt-BR": "Idioma definido para português. Estou pronto.",
      "ht-HT": "Mwen paré pou palé kréyòl avè-w!"
    };
    const msg = welcomeMsgs[newLang] || "Langue modifiée.";
    setChatResponse(msg);
    speak(msg, newLang);
  };

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("Microphone non supporté.");
    const rec = new SpeechRecognition();
    rec.lang = lang;
    rec.onstart = () => setIsListening(true);
    rec.onend = () => setIsListening(false);
    rec.onresult = (e) => {
      const text = e.results[0][0].transcript;
      setChatInput(text);
      processInput(text);
    };
    rec.start();
  };

  const processInput = (text) => {
    const input = text.toLowerCase();
    let reply = "Votre vision est immense. Utilisons nos 190 axes stratégiques pour la concrétiser.";
    
    if (input.includes("guadeloupe") || input.includes("champion")) {
      reply = `Respect Champion! ${proverbs[Math.floor(Math.random()*proverbs.length)]} Votre héritage est votre force.`;
    } else if (input.includes("afrique") || input.includes("onu")) {
      reply = "Les marchés mondiaux et l'ONU offrent des opportunités via les étapes 1 et 2. Parlons logistique.";
    }

    setChatResponse(reply);
    speak(reply, lang);
  };

  const speak = (msg, voiceLang) => {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(msg);
    u.lang = voiceLang;
    u.rate = 0.9;
    window.speechSynthesis.speak(u);
  };

  return (
    <Layout>
      <div style={{ minHeight: "100vh", background: "#020617", color: "#f8fafc", padding: "1rem" }}>
        
        {/* BOUTON RETOUR ACCUEIL */}
        <div style={{ maxWidth: "1200px", margin: "0 auto", marginBottom: "20px" }}>
          <Link href="/">
            <button style={{ background: "rgba(255,255,255,0.1)", border: "1px solid #3b82f6", color: "#fff", padding: "10px 20px", borderRadius: "10px", cursor: "pointer", fontWeight: "bold" }}>
              🏠 RETOUR ACCUEIL
            </button>
          </Link>
        </div>

        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "clamp(2rem, 6vw, 4rem)", fontWeight: "900", color: "#3b82f6" }}>REUSSITESS® NEURO-X</h1>
        </div>

        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
          
          {/* LES 10 TITRES */}
          <div style={{ background: "#0f172a", border: "1px solid #1e40af", borderRadius: "24px", padding: "1.5rem" }}>
            <h3 style={{ color: "#3b82f6", marginBottom: "1rem", textAlign: "center" }}>10 PILIERS STRATÉGIQUES</h3>
            {steps.map(s => (
              <button key={s.n} onClick={() => { setActiveStep(s); speak(s.d, lang); }} style={{ width: "100%", textAlign: "left", background: activeStep?.n === s.n ? "#1e40af" : "#1e293b", border: "1px solid #333", color: "#fff", padding: "12px", borderRadius: "12px", marginBottom: "8px", cursor: "pointer" }}>
                {s.n}. {s.t}
              </button>
            ))}
          </div>

          {/* NEURO-BOT INTERACTIF */}
          <div style={{ background: "linear-gradient(145deg, #1e293b, #020617)", border: "2px solid #3b82f6", borderRadius: "24px", padding: "2rem" }}>
            
            {/* DRAPEAUX / LANGUES */}
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "1.5rem" }}>
              {[
                {c: "fr-FR", f: "🇫🇷"}, {c: "en-US", f: "🇺🇸"}, {c: "es-ES", f: "🇪🇸"}, 
                {c: "pt-BR", f: "🇧🇷"}, {c: "de-DE", f: "🇩🇪"}, {c: "it-IT", f: "🇮🇹"}, 
                {c: "zh-CN", f: "🇨🇳"}, {c: "ht-HT", f: "🇬🇵"}
              ].map(l => (
                <button key={l.c} onClick={() => handleLangChange(l.c)} style={{ background: lang === l.c ? "#3b82f6" : "none", border: "1px solid #333", fontSize: "1.5rem", borderRadius: "5px", cursor: "pointer" }}>{l.f}</button>
              ))}
            </div>

            <div style={{ minHeight: "150px", background: "rgba(0,0,0,0.3)", padding: "1.5rem", borderRadius: "15px", border: "1px solid #1e3a8a", marginBottom: "1.5rem", position: "relative" }}>
              <p style={{ color: "#e2e8f0" }}>{chatResponse}</p>
              <button onClick={() => speak(chatResponse, lang)} style={{ position: "absolute", bottom: "10px", right: "10px", background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer" }}>🔊</button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); processInput(chatInput); setChatInput(""); }} style={{ display: "flex", gap: "10px" }}>
              <button type="button" onClick={startListening} style={{ background: isListening ? "#ef4444" : "#1e40af", border: "none", borderRadius: "50%", width: "50px", height: "50px", cursor: "pointer" }}>🎤</button>
              <input value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Posez votre question..." style={{ flexGrow: 1, padding: "10px", borderRadius: "10px", background: "#0f172a", color: "#fff", border: "1px solid #333" }} />
              <button type="submit" style={{ background: "#3b82f6", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "10px", cursor: "pointer" }}>ENVOYER</button>
            </form>

            {activeStep && (
              <div style={{ marginTop: "1.5rem", padding: "15px", background: "#1e40af33", borderRadius: "10px", border: "1px solid #3b82f6" }}>
                <a href={activeStep.u} target="_blank" rel="noopener noreferrer" style={{ color: "#fff", fontWeight: "bold", textDecoration: "underline" }}>Accès Officiel : {activeStep.t} ➜</a>
              </div>
            )}
          </div>

        </div>
      </div>
    </Layout>
  );
}
