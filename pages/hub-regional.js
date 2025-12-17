import Head from "next/head";
import Layout from "../components/Layout";

export default function HubRegional() {
  return (
    <Layout>
      <Head>
        <title>Hub Régional — Langue & Culture Créole | REUSSITESS</title>
        <meta
          name="description"
          content="Langue et culture créole, ressources logistiques internationales, marketing & SEO international pour DOM‑TOM — opportunités et identité culturelle par REUSSITESS."
        />
      </Head>

      <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", color: "white", background: "#0b1220" }}>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", textAlign: "center", marginBottom: "1rem" }}>
          🌺 Hub Régional — Langue & Culture Créole
        </h1>
        <p style={{ textAlign: "center", color: "#cbd5e1", marginBottom: "2rem" }}>
          Ressources pour les territoires ultramarins (Martinique, Guadeloupe, Guyane, Réunion, Mayotte) :
          langue, identité culturelle, logistique internationale, marketing & SEO pour les marchés DOM‑TOM.
        </p>

        <section style={{ background: "#071029", padding: "1.5rem", borderRadius: 8, marginBottom: "1.5rem" }}>
          <h2 style={{ color: "#fbbf24" }}>Langue & Culture Créole</h2>
          <p style={{ color: "#e2e8f0" }}>
            Documents, guides et contenus en créole pour valoriser l'identité locale dans vos fiches produits,
            campagnes marketing et parcours clients.
          </p>
          <ul style={{ color: "#cbd5e1" }}>
            <li>Traductions créoles (FR ↔ CRÉOLE) pour fiches produits et description marketing</li>
            <li>Guides culturels pour images, tonalité et visuels adaptés aux DOM‑TOM</li>
            <li>Ressources pédagogiques : ateliers, webinaires et interviews locales</li>
          </ul>
        </section>

        <section style={{ background: "#071029", padding: "1.5rem", borderRadius: 8, marginBottom: "1.5rem" }}>
          <h2 style={{ color: "#34d399" }}>Ressources — Logistique & Douanes</h2>
          <p style={{ color: "#e2e8f0" }}>
            Meilleures pratiques pour expédier vers/depuis les DOM‑TOM : gestion des délais, règles douanières,
            optimisation FBA/expédition internationale, partenaires locaux et options de fulfillment.
          </p>
          <ul style={{ color: "#cbd5e1" }}>
            <li>Checklist douanière et documents nécessaires</li>
            <li>Comparatif transporteurs et options économiques</li>
            <li>Optimisation des frais et préparation pour FBA international</li>
          </ul>
        </section>

        <section style={{ background: "#071029", padding: "1.5rem", borderRadius: 8, marginBottom: "1.5rem" }}>
          <h2 style={{ color: "#60a5fa" }}>Marketing & SEO International (DOM‑TOM)</h2>
          <p style={{ color: "#e2e8f0" }}>
            Stratégies SEO & marketing ciblées pour les marchés ultramarins : mots‑clés locaux,
            schema/structured data, campagnes ads adaptées et opportunités saisonnières.
          </p>
          <ul style={{ color: "#cbd5e1" }}>
            <li>Recherche de mots‑clés locale et optimisation multi‑langue</li>
            <li>Fiches produits optimisées pour taux de conversion local</li>
            <li>Campagnes publicitaires ciblées (social, SEA) par territoire</li>
          </ul>
        </section>

        <section style={{ background: "#071029", padding: "1.5rem", borderRadius: 8, marginBottom: "2rem" }}>
          <h2 style={{ color: "#f97316" }}>Opportunités & Identité Culturelle</h2>
          <p style={{ color: "#e2e8f0" }}>
            Identifier les niches et opportunités liées à l'identité culturelle (produits artisanaux, alimentation,
            beauté, tourisme local). Conseils pour co‑création avec acteurs locaux et respect des pratiques culturelles.
          </p>
          <ul style={{ color: "#cbd5e1" }}>
            <li>Études de marché DOM‑TOM et tendances consommateurs</li>
            <li>Partenariats locaux et sourcing responsable</li>
            <li>Boîte à outils pour valoriser l'authenticité culturelle</li>
          </ul>
        </section>

        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <a
            href="/hub-international"
            style={{
              display: "inline-block",
              padding: "0.8rem 1.6rem",
              background: "linear-gradient(90deg,#06b6d4,#3b82f6)",
              color: "white",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            🔙 Retour au Hub International
          </a>
        </div>
      </div>
    </Layout>
  );
}
