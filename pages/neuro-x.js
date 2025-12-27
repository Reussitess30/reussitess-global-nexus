import Layout from "../components/Layout";
import Link from "next/link";
import { useState } from "react";

export default function NeuroX() {
  const [activeStep, setActiveStep] = useState(null);
  const [chatResponse, setChatResponse] = useState("Intelligence Giga-Base Activée. Je maîtrise désormais 1000 axes stratégiques sur les 14 pays de votre empire. Comment puis-je servir votre succès ?");
  const [chatInput, setChatInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [lang, setLang] = useState("fr-FR");

  // Matrice de connaissances (Simulant les 1000 axes par catégories exhaustives)
  const knowledgeMatrix = {
    finance: ["PIB", "Trading", "Venture Capital", "BAD", "Bourse", "Crypto-actif", "Souveraineté budgétaire", "Fonds souverains Singapour", "Wall Street", "City London"],
    legal: ["INPI", "Copyright", "Brevets internationaux", "Droit des contrats", "ZLECAF", "Protection Reussitess©", "Juridiction Canada", "Lois Suède"],
    culture: ["Héritage Créole", "UNESCO", "Patrimoine Brésil", "Identité Inde", "Philosophie Australie", "Tradition Allemagne", "Art Italie"],
    tech: ["IA Générative", "Blockchain", "Data Center Canada", "Quantum Computing", "Algorithmes", "Souveraineté numérique", "Innovation France"],
    logistics: ["DHL", "Incoterms", "Fret maritime", "Supply Chain Inde", "Douanes Australie", "Hub Singapour", "Transit Brésil"]
  };

  const steps = [
    { n: "1", t: "Afrique", u: "https://www.afdb.org/fr", d: "Axe de croissance majeur : Financements BAD et développement des infrastructures privées." },
    { n: "2", t: "ONU", u: "https://www.un.org/fr", d: "Gouvernance mondiale : Objectifs de développement durable et diplomatie économique." },
    { n: "3", t: "E-commerce", u: "https://www.economie.gouv.fr/entreprises/vendre-en-ligne", d: "Digitalisation : Stratégies de vente omnicanale pour les 14 pays cibles." },
    { n: "4", t: "Logistique", u: "https://www.douane.gouv.fr", d: "Flux : Maîtrise des corridors de transport mondiaux et gestion douanière." },
    { n: "5", t: "Langue Créole", u: "https://www.culture.gouv.fr", d: "Identité : Le créole comme socle de communication universelle et culturelle." },
    { n: "6", t: "UNESCO", u: "https://whc.unesco.org/fr", d: "Rayonnement : Protection des biens culturels et excellence historique." },
    { n: "7", t: "INPI", u: "https://www.inpi.fr", d: "Sécurité : Enregistrement des actifs intellectuels pour le compte de l'adresse 0x69f4...1549." },
    { n: "8", t: "Tech/IA", u: "https://www.etalab.gouv.fr", d: "Futur : Déploiement de l'intelligence artificielle souveraine NEURO-X." },
    { n: "9", t: "Psychologie", u: "https://www.who.int/fr", d: "Leadership : Force mentale et neuro-sciences appliquées à la réussite." },
    { n: "10", t: "Épanouissement", u: "https://www.un.org/sustainabledevelopment/fr/", d: "Impact : Réussite humaine totale et harmonie avec les 17 objectifs mondiaux." }
  ];

  const speak = (msg, voiceLang) => {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(msg);
    u.lang = voiceLang;
    u.rate = 0.9;
    window.speechSynthesis.speak(u);
  };

  const startListening = () => {
    const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;
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
    let reply = "Ma base de 1000 axes analyse votre requête. C'est une question de stratégie internationale de haut niveau.";

    if (input.includes("guadeloupe") || input.includes("champion")) {
      reply = "Gwadloup sé tè a chanypon. Votre projet Reussitess© s'inscrit dans l'excellence mondiale, de Singapour au Canada.";
    } else if (input.includes("pays") || input.includes("monde")) {
      reply = "Je surveille les 14 pays clés : France, Angleterre, Italie, Allemagne, Suède, Singapour, Australie, Espagne, Brésil, Royaume-Uni, Inde, Nouvelle-Zélande, USA, Canada.";
    }

    setChatResponse(reply);
    speak(reply, lang);
  };

  return (
    <Layout>
      <div style={{ minHeight: "100vh", background: "#010409", color: "#e6edf3", padding: "1.5rem" }}>
        
        <header style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
          <Link href="/"><button style={{ background: "#238636", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}>🏠 ACCUEIL</button></Link>
          <h1 style={{ color: "#2f81f7", fontSize: "1.5rem" }}>NEURO-X SUPRÊME</h1>
        </header>

        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "2rem" }}>
          
          <div style={{ background: "#0d1117", border: "1px solid #30363d", borderRadius: "12px", padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "1rem", color: "#8b949e" }}>PLAN SOUVERAIN (10 PILIERS)</h3>
            {steps.map(s => (
              <button key={s.n} onClick={() => { setActiveStep(s); speak(s.d, lang); }} style={{ width: "100%", textAlign: "left", background: activeStep?.n === s.n ? "#1f6feb" : "transparent", border: "1px solid #30363d", color: "#fff", padding: "10px", borderRadius: "6px", marginBottom: "8px", cursor: "pointer" }}>
                {s.n}. {s.t}
              </button>
            ))}
          </div>

          <div style={{ background: "#0d1117", border: "2px solid #2f81f7", borderRadius: "12px", padding: "2rem" }}>
            <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginBottom: "1.5rem" }}>
              {["🇫🇷", "🇺🇸", "🇬🇵", "🇧🇷", "🇮🇳", "🇨🇦", "🇸🇬", "🇦🇺"].map((f, i) => (
                <button key={i} onClick={() => setLang("fr-FR")} style={{ background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer" }}>{f}</button>
              ))}
            </div>

            <div style={{ background: "#010409", padding: "1.5rem", borderRadius: "8px", border: "1px solid #30363d", minHeight: "150px", marginBottom: "1.5rem", position: "relative" }}>
              <p style={{ color: "#c9d1d9", fontSize: "1.1rem" }}>{chatResponse}</p>
              <button onClick={() => speak(chatResponse, lang)} style={{ position: "absolute", bottom: "10px", right: "10px", background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer" }}>🔊</button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); processInput(chatInput); setChatInput(""); }} style={{ display: "flex", gap: "10px" }}>
              <button type="button" onClick={startListening} style={{ background: isListening ? "#da3633" : "#238636", border: "none", borderRadius: "50%", width: "45px", height: "45px", cursor: "pointer" }}>🎤</button>
              <input value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Interrogez la Giga-Base..." style={{ flexGrow: 1, background: "#0d1117", border: "1px solid #30363d", color: "#fff", padding: "12px", borderRadius: "6px" }} />
              <button type="submit" style={{ background: "#2f81f7", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "6px", cursor: "pointer" }}>ANALYSER</button>
            </form>
          </div>

        </div>
      </div>
    </Layout>
  );
}
