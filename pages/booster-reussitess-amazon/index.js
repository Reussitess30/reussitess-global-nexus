import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function BoosterReussitessAmazon() {
  return (
    <Layout>
      <Head>
        <title>Booster REUSSITESS & Amazon</title>
        <meta name="description" content="Dossier : Booster REUSSITESS & Amazon — guides, checklists, templates et ressources pratiques." />
      </Head>

      <div style={{ minHeight: "70vh", padding: "3rem 1.5rem", color: "#111827", background: "#f8fafc" }}>
        <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>🚀 Dossier — Booster REUSSITESS & Amazon</h1>
        <p style={{ textAlign: "center", color: "#374151", marginBottom: "1.25rem" }}>
          Chaque lien ci‑dessous ouvre une page d'explication externe (nouvel onglet) pour t'aider à optimiser tes ventes et ta conformité internationale.
        </p>

        <section style={{ maxWidth: 920, margin: "0 auto", background: "white", padding: "1.5rem", borderRadius: 8, boxShadow: "0 6px 18px rgba(2,6,23,0.08)" }}>
          <h2 style={{ color: "#0ea5a4", marginBottom: "0.75rem" }}>Ressources détaillées</h2>

          <ul style={{ lineHeight: "1.8", fontSize: "1.05rem", paddingLeft: "1rem" }}>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Préparer vos fiches produit (SEO & images)</strong> — 
              <a href="https://www.datafeedwatch.com/blog/product-content-optimization-amazon-listings" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8, color: "#1e40af" }}>
                Guide DataFeedWatch (optimisation, titres, bullets, images)
              </a>
              <div style={{ color: "#6b7280", marginTop: 6 }}>
                Conseils pratiques pour les mots‑clés Amazon, structure de fiche et exigences images.
              </div>
            </li>

            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Export / Douanes / Fulfillment (checklist)</strong> — 
              <a href="https://sellbery.com/blog/how-to-create-an-amazon-listing-a-complete-guide/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8, color: "#1e40af" }}>
                Guide Sellbery (export, conformité & options FBA/FBM)
              </a>
              <div style={{ color: "#6b7280", marginTop: 6 }}>
                Checklist pour douanes, taxes, exigences produit et choix de fulfillment pour ventes internationales.
              </div>
            </li>

            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Templates & descriptions multilingues</strong> — 
              <a href="https://www.sellerapp.com/blog/amazon-product-listing-guide/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8, color: "#1e40af" }}>
                SellerApp (exemples de templates et bonnes pratiques)
              </a>
              <div style={{ color: "#6b7280", marginTop: 6 }}>
                Modèles de titres/bullets/descriptions et conseils pour la localisation (traduction vs. adaptation).
              </div>
            </li>

            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Partenaires & outils recommandés</strong> — 
              <a href="https://www.helium10.com/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8, color: "#1e40af" }}>
                Helium 10
              </a>
              <span style={{ marginLeft: 10 }} />
              <a href="https://www.junglescout.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#1e40af" }}>
                Jungle Scout
              </a>
              <div style={{ color: "#6b7280", marginTop: 6 }}>
                Outils pour recherche produit, mots‑clés, suivi de concurrents et optimisation des ventes.
              </div>
            </li>

            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Tutoriels, vidéos & webinaires</strong> — 
              <a href="https://sellercentral.amazon.com/learn" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 8, color: "#1e40af" }}>
                Amazon Seller University (tutoriels officiels)
              </a>
              <div style={{ color: "#6b7280", marginTop: 6 }}>
                Vidéos officielles pas‑à‑pas : créer des listings, gérer FBA, A+ Content, politiques Amazon.
              </div>
            </li>
          </ul>

          <p style={{ marginTop: "1rem", color: "#374151" }}>
            Besoin d'autres ressources (par pays, PDF, ou modèles à télécharger) ? Dis‑moi lesquelles et je les ajoute.
          </p>

          <div style={{ marginTop: "1.25rem" }}>
            <Link href="/hub-international"><a style={{ color: "#3b82f6", textDecoration: "underline" }}>← Retour Hub International</a></Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
