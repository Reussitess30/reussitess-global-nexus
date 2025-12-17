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
        <p style={{ textAlign: "center", color: "#374151", marginBottom: "2rem" }}>
          Ici, tu trouveras toutes les ressources : guides pas à pas, checklists, templates, et liens utiles pour booster tes ventes via Amazon et l'écosystème REUSSITESS.
        </p>

        <section style={{ maxWidth: 900, margin: "0 auto", background: "white", padding: "1.5rem", borderRadius: 8, boxShadow: "0 6px 18px rgba(2,6,23,0.08)" }}>
          <h2 style={{ color: "#0ea5a4" }}>Contenu du dossier</h2>
          <ul style={{ lineHeight: "1.8" }}>
            <li>✅ Guide : Préparer vos fiches produits pour Amazon (SEO & images)</li>
            <li>✅ Checklist : Export / Douanes / Fulfillment</li>
            <li>✅ Templates : Description produit multilingue</li>
            <li>✅ Partenaires recommandés & outils</li>
            <li>✅ Tutoriels vidéo & webinaires</li>
          </ul>

          <p style={{ marginTop: "1rem" }}>
            Si tu veux revenir au hub :
            {" "}
            <Link href="/hub-international"><a style={{ color: "#3b82f6", textDecoration: "underline" }}>Retour Hub International</a></Link>
          </p>
        </section>
      </div>
    </Layout>
  );
}
