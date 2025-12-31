"use client";
import Link from "next/link";

export default function Investir() {
  return (
    <div style={{ minHeight: "100vh", padding: "2rem", background: "#0f172a", color: "white", fontFamily: "sans-serif", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ maxWidth: "850px", width: "100%", background: "rgba(255,255,255,0.05)", padding: "2.5rem", borderRadius: "30px", border: "1px solid #ffd700", boxShadow: "0 0 30px rgba(0, 0, 0, 0.5)" }}>
        
        <h1 style={{ fontSize: "2rem", color: "#ffd700", fontWeight: "900", textAlign: "center", marginBottom: "2rem" }}>CADRE JURIDIQUE & INVESTISSEMENT</h1>

        <div style={{ background: "rgba(255,0,0,0.1)", borderLeft: "4px solid #ff4b2b", padding: "1rem", marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.85rem", color: "#ff8c7a", margin: 0 }}>
            <strong>AVERTISSEMENT :</strong> L'investissement dans les actifs numériques comporte des risques de perte en capital. 
            Le projet REUSSITESS© est régi par les lois en vigueur dans nos 14 pays partenaires.
          </p>
        </div>

        <section style={{ marginBottom: "2rem" }}>
          <h3 style={{ color: "#ffd700" }}>1. Statut du Jeton (Utility Token)</h3>
          <p style={{ fontSize: "0.9rem", color: "#ccc", lineHeight: "1.6" }}>
            L'unité REUSSITESS© (Contrat: 0x4b3b...) est définie comme un jeton utilitaire donnant accès à l'écosystème MedTech MLC Health et aux services exclusifs du groupe. 
            Il ne constitue pas un titre financier (Security) au sens de la directive MiCA (Europe).
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h3 style={{ color: "#ffd700" }}>2. Conformité Géographique (14 Pays)</h3>
          <p style={{ fontSize: "0.9rem", color: "#ccc", lineHeight: "1.6" }}>
            L'offre est strictement limitée aux résidents fiscaux des pays suivants : 
            France, Belgique, Canada, États-Unis, Allemagne, Italie, Suède, Singapour, Australie, Espagne, Brésil, Inde, Nouvelle-Zélande, Royaume-Uni.
            Tout utilisateur hors zone est responsable de sa propre conformité.
          </p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h3 style={{ color: "#ffd700" }}>3. Transparence de l'Offre</h3>
          <ul style={{ fontSize: "0.9rem", color: "#ccc", lineHeight: "1.8" }}>
            <li><strong>Offre Max :</strong> 1 000 000 000 unités (Hard Cap).</li>
            <li><strong>Audibilité :</strong> Transactions traçables sur la blockchain via l'adresse officielle.</li>
            <li><strong>Propriété :</strong> Le détenteur initial (0x69f4...) assure la distribution initiale.</li>
          </ul>
        </section>

        <div style={{ background: "#000", padding: "1.5rem", borderRadius: "15px", textAlign: "center", marginBottom: "2rem" }}>
          <p style={{ fontSize: "0.7rem", color: "#888", marginBottom: "10px" }}>VÉRIFICATION BLOCKCHAIN</p>
          <code style={{ fontSize: "0.8rem", color: "#00ff41", wordBreak: "break-all" }}>0x4b3bFf4b58d22Ad363bb260e22032414d4CfdDB8</code>
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/" style={{ display: "inline-block", border: "1px solid #ffd700", color: "#ffd700", padding: "0.8rem 2rem", borderRadius: "50px", textDecoration: "none", fontWeight: "bold" }}>
            ACCEPTER ET RETOURNER
          </Link>
        </div>
      </div>
      <p style={{ marginTop: "2rem", fontSize: "0.7rem", opacity: 0.5 }}>© 2025 REUSSITESS - Direction Juridique Internationale</p>
    </div>
  );
}
