import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

export default function HubInternational() {
  return (
    <Layout>
      <Head>
        <title>Hub International REUSSITESS</title>
        <meta
          name="description"
          content="Découvrez un Hub International complet : légal, pédagogique, et innovant, par REUSSITESS & Amazon."
        />
      </Head>

      <div
        style={{
          minHeight: "100vh",
          background: "radial-gradient(circle at 20% 50%, #1f2937 0%, #111827 100%)",
          color: "white",
          padding: "3rem 1.5rem",
          textAlign: "center",
        }}
      >
        {/* Titre principal */}
        <h1
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: "bold",
            lineHeight: "1.2",
            marginBottom: "2rem",
            background: "linear-gradient(135deg, #eab308, #f59e0b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          🚀 Hub International
          <br />
          REUSSITESS & Amazon
        </h1>

        {/* Bandeau de description */}
        <p style={{ fontSize: "1.2rem", marginBottom: "3rem" }}>
          Des ressources internationales légales, éducatives et innovantes,
          pensées pour l’excellence.
        </p>

        {/* Bouton central — lien interne (remplacez "/hub-reussitess" si nécessaire) */}
        <div style={{ textAlign: "center", margin: "3rem 0" }}>
          
    <Link href="/vamazon"><a style={{display: "inline-block", padding: "0.9rem 1.8rem", background: "linear-gradient(90deg,#06b6d4,#3b82f6)", color: "white", borderRadius: 999, textDecoration: "none", fontWeight: 800, boxShadow: "0 6px 18px rgba(59,130,246,0.25)"}}>🚀 Booster REUSSITESS & Amazon</a></Link>
  
        </div>
      </div>

      {/* Section Légale et Éducative */}
      <section style={{ padding: "2rem", background: "#1f2833", color: "white" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#00d1b2",
          }}
        >
          🌍 Ressources Légales et Éducatives
        </h2>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8rem", fontSize: "1.15rem" }}>
          <li>
            🔗{" "}
            <a
              rel="noopener noreferrer"
              href="https://sustainability.aboutamazon.com/amazon-supply-chain-standards-english.pdf"
              target="_blank"
              style={{ color: "#00d1b0", textDecoration: "none" }}
            >
              Amazon Supply Chain Standards
            </a>
          </li>
          <li>
            🔗{" "}
            <a
              rel="noopener noreferrer"
              href="https://www.linnworks.com/blog/international-ecommerce-laws/"
              target="_blank"
              style={{ color: "#00d1b0", textDecoration: "none" }}
            >
              Guide des Lois Internationales du E-commerce
            </a>
          </li>
          <li>
            📘{" "}
            <a
              rel="noopener noreferrer"
              href="https://amzscout.net/blog/amazon-marketplaces/"
              target="_blank"
              style={{ color: "#00d1b0", textDecoration: "none" }}
            >
              Amazon Marketplaces : Astuces Multilingues
            </a>
          </li>
        </ul>
        <p style={{ textAlign: "center", marginTop: "2rem", color: "#dddddd" }}>
          🌟 Explorez ces ressources pour renforcer vos compétences dans les marketplaces internationales.
        </p>
      </section>

      {/* Ressources éducatives et logistiques */}
      <div style={{ padding: "2rem", background: "#111827", color: "white", marginTop: "2rem" }}>
        <h2 style={{ textAlign: "center", color: "#3b82f6", marginBottom: "2rem", fontSize: "2rem" }}>
          🌐 Bonnes Pratiques & Ressources Mondiales
        </h2>
        <ul style={{ lineHeight: "1.8", fontSize: "1.15rem" }}>
          <li>
            📘{" "}
            <a rel="noopener noreferrer" href="https://amzscout.net/blog/amazon-marketplaces/" target="_blank" style={{ color: "#3b82f6", textDecoration: "none" }}>
              Guide Amazon Multimarketplace
            </a>
          </li>
          <li>
            📜{" "}
            <a rel="noopener noreferrer" href="https://gdpr-info.eu/" target="_blank" style={{ color: "#3b82f6", textDecoration: "none" }}>
              RGPD & Sécurité des Données (Europe)
            </a>
          </li>
          <li>
            🌟{" "}
            <a rel="noopener noreferrer" href="https://riverbendconsulting.com/blog/amazon-international-marketplaces/" target="_blank" style={{ color: "#3b82f6", textDecoration: "none" }}>
              Meilleures Pratiques Amazon International
            </a>
          </li>
          <li>
            📦{" "}
            <a rel="noopener noreferrer" href="https://www.junglescout.com/resources/articles/amazon-marketplaces/" target="_blank" style={{ color: "#3b82f6", textDecoration: "none" }}>
              FBA & Logistique Mondiale
            </a>
          </li>
          <li>
            🎥{" "}
            <a rel="noopener noreferrer" href="https://sellercentral.amazon.com/learn" target="_blank" style={{ color: "#3b82f6", textDecoration: "none" }}>
              Amazon Seller University
            </a>
          </li>
        </ul>
        <p style={{ color: "#94a3b8", textAlign: "center", marginTop: "1.5rem" }}>
          Ces ressources vous permettront d'améliorer votre maîtrise des marketplaces à l'échelle mondiale en restant conforme aux lois.
        </p>
      </div>

      {/* Section des outils de traduction avec drapeaux */}
      <section style={{ padding: "2rem", background: "#1f2937", color: "white", marginTop: "2rem" }}>
        <h2 style={{ textAlign: "center", color: "#93c5fd", marginBottom: "2rem", fontSize: "2rem" }}>
          🌍 Outils Multilingues avec Drapeaux
        </h2>
        <p style={{ textAlign: "center", marginBottom: "2rem" }}>
          Choisissez votre langue préférée grâce à nos outils de traduction :
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <a rel="noopener noreferrer" href="#" style={{ textDecoration: "none" }}>
            <img src="/flags/france.png" alt="Français" style={{ width: "40px", borderRadius: "50%" }} />
          </a>
          <a rel="noopener noreferrer" href="#" style={{ textDecoration: "none" }}>
            <img src="/flags/usa.png" alt="English" style={{ width: "40px", borderRadius: "50%" }} />
          </a>
          <a rel="noopener noreferrer" href="#" style={{ textDecoration: "none" }}>
            <img src="/flags/spain.png" alt="Español" style={{ width: "40px", borderRadius: "50%" }} />
          </a>
          <a rel="noopener noreferrer" href="#" style={{ textDecoration: "none" }}>
            <img src="/flags/germany.png" alt="Deutsch" style={{ width: "40px", borderRadius: "50%" }} />
          </a>
        </div>
      </section>

      {/* Ressources éducatives et légales internationales */}
      <section style={{ padding: "2rem", background: "#111827", color: "white", marginTop: "2rem" }}>
        <h2 style={{ textAlign: "center", color: "#34d399", marginBottom: "2rem", fontSize: "2rem" }}>
          📘 Ressources Globales Légales et Best Practices
        </h2>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8", fontSize: "1.15rem" }}>
          <li>
            🔗{" "}
            <a rel="noopener noreferrer" href="https://learn.subkit.com/global-e-commerce-laws-guide-to-international-expansion-for-e-commerce-brands" target="_blank" style={{ color: "#4c71bb", fontWeight: "bold" }}>
              Guide Global des Lois d'E-commerce
            </a>
            : Conformité aux lois internationales.
          </li>
          <li>
            🔗{" "}
            <a rel="noopener noreferrer" href="https://www.bigcommerce.com/articles/ecommerce/multilingual-ecommerce/" target="_blank" style={{ color: "#4c71bb", fontWeight: "bold" }}>
              Multilinguisme et Marketplaces
            </a>
            : Adopter plusieurs langues pour atteindre de nouveaux publics.
          </li>
          <li>
            🌟{" "}
            <a rel="noopener noreferrer" href="https://www.rewixecommerce.com/en/magazine/international-ecommerce-guide-expand-your-online-business" target="_blank" style={{ color: "#4c71bb", fontWeight: "bold" }}>
              SEO multilingue
            </a>
            : Optimisation pour moteurs de recherche internationaux.
          </li>
          <li>
            📜{" "}
            <a rel="noopener noreferrer" href="https://www.clarity-ventures.com/ecommerce/international-marketplace/international-ecommerce-legal-considerations" target="_blank" style={{ color: "#4c71bb", fontWeight: "bold" }}>
              Considérations légales marketplace
            </a>
            : Gestion de la confidentialité et des taxes internationales.
          </li>
          <li>
            🎓{" "}
            <a rel="noopener noreferrer" href="https://www.coursera.org/" target="_blank" style={{ color: "#4c71bb", fontWeight: "bold" }}>
              Coursera International
            </a>
            : Cours éducatifs multilingues.
          </li>
        </ul>
      </section>
    </Layout>
  );
}
