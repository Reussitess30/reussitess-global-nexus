import Layout from "../components/Layout";
import Link from "next/link";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

export default function Outils() {
  return (
    <Layout>
      {/* Google Analytics (GA4) - charge le script après l'interaction */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { page_path: window.location.pathname });`}
      </Script>

      <div
        style={{
          background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
          minHeight: "100vh",
          padding: "4rem 1rem",
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          <Link
            href="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1.1rem",
              display: "inline-block",
              marginBottom: "2rem",
              opacity: 0.9,
            }}
          >
            ← Retour à l'accueil
          </Link>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              borderRadius: "20px",
              padding: "3rem",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: "800",
                marginBottom: "1rem",
                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              🛠️ Outils & Calculateurs
            </h1>
            <p
              style={{
                textAlign: "center",
                fontSize: "1.2rem",
                color: "#64748b",
                marginBottom: "3rem",
              }}
            >
              Optimisez votre e-commerce avec nos outils professionnels
            </p>

            {/* Catégories d'outils */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2rem",
                marginBottom: "3rem",
              }}
            >
              {/* Calculateurs Financiers */}
              <div
                style={{
                  background: "#f0f9ff",
                  padding: "2rem",
                  borderRadius: "15px",
                  border: "2px solid #3b82f6",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>💰</div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    color: "#3b82f6",
                    marginBottom: "1rem",
                    fontWeight: "700",
                  }}
                >
                  Calculateurs Financiers
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    color: "#475569",
                    lineHeight: "2",
                  }}
                >
                  <li>• Calculateur de TVA (14 pays)</li>
                  <li>• Marges bénéficiaires</li>
                  <li>• Commissions Amazon</li>
                  <li>• Conversion devises</li>
                </ul>
              </div>

              {/* Analyse de Marché */}
              <div
                style={{
                  background: "#fdf4ff",
                  padding: "2rem",
                  borderRadius: "15px",
                  border: "2px solid #8b5cf6",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📊</div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    color: "#8b5cf6",
                    marginBottom: "1rem",
                    fontWeight: "700",
                  }}
                >
                  Analyse de Marché
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    color: "#475569",
                    lineHeight: "2",
                  }}
                >
                  <li>• Comparateur de prix</li>
                  <li>• Tendances produits</li>
                  <li>• Analyse concurrence</li>
                  <li>• Prévisions ventes</li>
                </ul>
              </div>

              {/* Outils Techniques */}
              <div
                style={{
                  background: "#f0fdfa",
                  padding: "2rem",
                  borderRadius: "15px",
                  border: "2px solid #10b981",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔧</div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    color: "#10b981",
                    marginBottom: "1rem",
                    fontWeight: "700",
                  }}
                >
                  Outils Techniques
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    color: "#475569",
                    lineHeight: "2",
                  }}
                >
                  <li>• Optimisation SEO</li>
                  <li>• Test vitesse site</li>
                  <li>• Compression images</li>
                  <li>• Générateur de liens</li>
                </ul>
              </div>

              {/* Suivi Performance */}
              <div
                style={{
                  background: "#fff7ed",
                  padding: "2rem",
                  borderRadius: "15px",
                  border: "2px solid #f59e0b",
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📈</div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    color: "#f59e0b",
                    marginBottom: "1rem",
                    fontWeight: "700",
                  }}
                >
                  Suivi Performance
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    color: "#475569",
                    lineHeight: "2",
                  }}
                >
                  <li>• Dashboard analytics</li>
                  <li>• Taux de conversion</li>
                  <li>• ROI publicité</li>
                  <li>• KPIs e-commerce</li>
                </ul>
              </div>
            </div>

            {/* Liens Externes */}
            <div
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                padding: "2rem",
                borderRadius: "15px",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                🔗 Outils Externes Recommandés
              </h3>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="https://analytics.google.com/analytics/web/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "white",
                    color: "#3b82f6",
                    padding: "0.8rem 1.5rem",
                    borderRadius: "50px",
                    textDecoration: "none",
                    fontWeight: "600",
                    display: "inline-block",
                  }}
                >
                  📊 Google Analytics
                </a>
                <a
                  href="https://pagespeed.web.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "white",
                    color: "#3b82f6",
                    padding: "0.8rem 1.5rem",
                    borderRadius: "50px",
                    textDecoration: "none",
                    fontWeight: "600",
                    display: "inline-block",
                  }}
                >
                  ⚡ PageSpeed
                </a>
                <a
                  href="https://sellercentral.amazon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "white",
                    color: "#3b82f6",
                    padding: "0.8rem 1.5rem",
                    borderRadius: "50px",
                    textDecoration: "none",
                    fontWeight: "600",
                    display: "inline-block",
                  }}
                >
                  🛍️ Amazon Seller
                </a>

                {/* Lien interne corrigé — pointe vers la page locale existante */}
                <a
                    style={{
                      background: "rgba(255, 255, 255, 0.2)",
                      color: "white",
                      padding: "0.8rem 1.5rem",
                      borderRadius: "50px",
                      textDecoration: "none",
                      fontWeight: "600",
                      display: "inline-block",
                      border: "2px solid white",
                    }}
                   href="/hub-international">
                    🌟 Explorer Richesses
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
