"use client";
import Link from "next/link";

export default function Investir() {
  return (
    <div style={{ minHeight: "100vh", padding: "2rem", background: "#0f172a", color: "white", fontFamily: "sans-serif", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div style={{ maxWidth: "600px", width: "100%", background: "rgba(255,255,255,0.05)", padding: "2.5rem", borderRadius: "30px", border: "2px solid #ffd700", boxShadow: "0 0 20px rgba(255, 215, 0, 0.2)" }}>
        <h1 style={{ fontSize: "2rem", color: "#ffd700", fontWeight: "900", marginBottom: "1rem", textTransform: "uppercase" }}>Investissement REUSSITESS©</h1>
        
        <div style={{ marginBottom: "2rem" }}>
          <h2 style={{ color: "#00ff41", fontSize: "1.2rem" }}>💎 PACTE REUSS-VENTURE 1.0</h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.5", opacity: 0.9, marginTop: "1rem" }}>
            Accédez à l'écosystème fermé MedTech & Finance. 
            Exclusivité pour les 14 pays partenaires.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "2rem", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem" }}>
          <div>
            <p style={{ color: "#ffd700", fontSize: "0.8rem", margin: 0 }}>OFFRE TOTALE</p>
            <p style={{ fontWeight: "bold" }}>1 000 000 000</p>
          </div>
          <div>
            <p style={{ color: "#ffd700", fontSize: "0.8rem", margin: 0 }}>RÉSEAU</p>
            <p style={{ fontWeight: "bold" }}>14 PAYS</p>
          </div>
        </div>

        <div style={{ background: "#000", padding: "1rem", borderRadius: "15px", marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.7rem", color: "#888", marginBottom: "5px" }}>SMART CONTRACT OFFICIEL</p>
          <code style={{ fontSize: "0.8rem", color: "#00ff41", wordBreak: "break-all" }}>0x4b3bFf4b58d22Ad363bb260e22032414d4CfdDB8</code>
        </div>

        <Link href="/" style={{ display: "inline-block", background: "#ffd700", color: "#000", padding: "0.8rem 2rem", borderRadius: "50px", textDecoration: "none", fontWeight: "bold" }}>
          RETOUR À L'ACCUEIL
        </Link>
      </div>
    </div>
  );
}
