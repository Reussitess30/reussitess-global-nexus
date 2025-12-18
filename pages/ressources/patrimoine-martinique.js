import Layout from "../../components/Layout";
import Link from "next/link";

export default function PatrimoineMartinique() {
  return (
    <Layout>
      <div
        style={{
          background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
          minHeight: "100vh",
          padding: "4rem 1rem",
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          <Link
            href="/bibliotheque"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1.1rem",
              display: "inline-block",
              marginBottom: "2rem",
              opacity: 0.9,
            }}
          >
            ← Retour aux Ressources
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
                background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              🏝️ Patrimoine Martiniquais
            </h1>
            <p
              style={{
                textAlign: "center",
                fontSize: "1.2rem",
                color: "#64748b",
                marginBottom: "3rem",
              }}
            >
              Le patrimoine culturel et historique de la Martinique
            </p>

            {/* Introduction */}
            <div style={{ marginBottom: "3rem" }}>
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "#8b5cf6",
                  marginBottom: "1rem",
                }}
              >
                🌺 L'Île aux Fleurs
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#475569",
                }}
              >
                La Martinique, surnommée "Madinina" (l'île aux fleurs) ou "l'Île
                aux Fleurs", possède un patrimoine exceptionnel mêlant
                influences caribéennes, africaines, européennes et indiennes. De
                Saint-Pierre, "la Perle des Antilles", aux plages paradisiaques,
                en passant par une gastronomie raffinée, la Martinique est un
                joyau culturel des Caraïbes.
              </p>
            </div>

            {/* Histoire */}
            <div style={{ marginBottom: "3rem" }}>
              <h2
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  color: "#ec4899",
                  marginBottom: "1rem",
                }}
              >
                🏛️ Histoire et Repères Historiques
              </h2>
              <div
                style={{
                  background: "#fdf2f8",
                  padding: "2rem",
                  borderRadius: "15px",
                  borderLeft: "4px solid #ec4899",
                }}
              >
                <ul
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: "2",
                    color: "#475569",
                  }}
                >
                  <li>
                    <strong>1502</strong> : Christophe Colomb découvre l'île
                  </li>
                  <li>
                    <strong>1635</strong> : Colonisation française,
                    développement de la canne à sucre
                  </li>
                  <li>
                    <strong>1848</strong> : Abolition de l'esclavage (Victor
                    Schœlcher)
                  </li>
                  <li>
                    <strong>1902</strong> : Éruption de la Montagne Pelée,
                    destruction de Saint-Pierre
                  </li>
                  <li>
                    <strong>1946</strong> : La Martinique devient un département
                    français
                  </li>
                </ul>
              </div>
            </div>

            {/* Patrimoine Culturel */}
            <div style={{ marginBottom: "3rem" }}>
              <h2
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  color: "#f59e0b",
                  marginBottom: "1rem",
                }}
              >
                🎭 Patrimoine Culturel
              </h2>
              <div
                style={{
                  background: "#fffbeb",
                  padding: "2rem",
                  borderRadius: "15px",
                  borderLeft: "4px solid #f59e0b",
                }}
              >
                <ul
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: "2",
                    color: "#475569",
                  }}
                >
                  <li>
                    <strong>Créole martiniquais</strong> : Langue locale riche
                    et expressive
                  </li>
                  <li>
                    <strong>Bèlè</strong> : Danse et musique traditionnelle
                  </li>
                  <li>
                    <strong>Zouk</strong> : Musique moderne (Kassav')
                  </li>
                  <li>
                    <strong>Madras</strong> : Tissu traditionnel coloré, symbole
                    identitaire
                  </li>
                  <li>
                    <strong>Carnaval</strong> : Défilés de groupes, mariages
                    burlesques
                  </li>
                </ul>
              </div>
            </div>

            {/* Gastronomie */}
            <div style={{ marginBottom: "3rem" }}>
              <h2
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  color: "#10b981",
                  marginBottom: "1rem",
                }}
              >
                🍽️ Gastronomie Raffinée
              </h2>
              <div
                style={{
                  background: "#f0fdf4",
                  padding: "2rem",
                  borderRadius: "15px",
                  borderLeft: "4px solid #10b981",
                }}
              >
                <ul
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: "2",
                    color: "#475569",
                  }}
                >
                  <li>
                    <strong>Colombo de porc</strong> : Plat épicé au curry
                  </li>
                  <li>
                    <strong>Accras de morue</strong> : Beignets croustillants
                  </li>
                  <li>
                    <strong>Ti-punch</strong> : Cocktail au rhum agricole
                  </li>
                  <li>
                    <strong>Rhum AOC</strong> : Production reconnue mondialement
                  </li>
                  <li>
                    <strong>Boudin créole</strong> : Spécialité de charcuterie
                    épicée
                  </li>
                  <li>
                    <strong>Flan coco</strong> : Dessert traditionnel
                  </li>
                </ul>
              </div>
            </div>

            {/* Sites Patrimoniaux */}
            <div style={{ marginBottom: "3rem" }}>
              <h2
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  color: "#3b82f6",
                  marginBottom: "1rem",
                }}
              >
                🗺️ Sites Patrimoniaux Majeurs
              </h2>
              <div
                style={{
                  background: "#eff6ff",
                  padding: "2rem",
                  borderRadius: "15px",
                  borderLeft: "4px solid #3b82f6",
                }}
              >
                <ul
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: "2",
                    color: "#475569",
                  }}
                >
                  <li>
                    <strong>Saint-Pierre</strong> : Ancienne capitale, vestiges
                    de l'éruption de 1902
                  </li>
                  <li>
                    <strong>Habitation Clément</strong> : Distillerie historique
                    et jardins
                  </li>
                  <li>
                    <strong>Montagne Pelée</strong> : Volcan actif, point
                    culminant (1397m)
                  </li>
                  <li>
                    <strong>Les Trois-Îlets</strong> : Village natal de
                    Joséphine de Beauharnais
                  </li>
                  <li>
                    <strong>Fort-de-France</strong> : Capitale, Bibliothèque
                    Schœlcher
                  </li>
                  <li>
                    <strong>Jardin de Balata</strong> : Jardin botanique
                    exceptionnel
                  </li>
                </ul>
              </div>
            </div>

            {/* Personnalités */}
            <div style={{ marginBottom: "3rem" }}>
              <h2
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  color: "#f43f5e",
                  marginBottom: "1rem",
                }}
              >
                ⭐ Personnalités Martiniquaises
              </h2>
              <div
                style={{
                  background: "#fff1f2",
                  padding: "2rem",
                  borderRadius: "15px",
                  borderLeft: "4px solid #f43f5e",
                }}
              >
                <ul
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: "2",
                    color: "#475569",
                  }}
                >
                  <li>
                    <strong>Aimé Césaire</strong> : Poète, écrivain, homme
                    politique, co-fondateur de la Négritude
                  </li>
                  <li>
                    <strong>Frantz Fanon</strong> : Psychiatre, écrivain
                    anticolonialiste
                  </li>
                  <li>
                    <strong>Joséphine de Beauharnais</strong> : Impératrice de
                    France
                  </li>
                  <li>
                    <strong>Patrick Chamoiseau</strong> : Écrivain, Prix
                    Goncourt 1992
                  </li>
                  <li>
                    <strong>Thierry Henry</strong> : Footballeur, champion du
                    monde 1998
                  </li>
                </ul>
              </div>
            </div>

            {/* Ressources */}
            <div
              style={{
                background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
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
                📚 En Savoir Plus
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
                  href="https://www.martinique.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "white",
                    color: "#8b5cf6",
                    padding: "0.8rem 2rem",
                    borderRadius: "50px",
                    textDecoration: "none",
                    fontWeight: "600",
                    display: "inline-block",
                  }}
                >
                  🗺️ Site Officiel Tourisme
                </a>
                <Link
                  href="/bibliotheque"
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                    padding: "0.8rem 2rem",
                    borderRadius: "50px",
                    textDecoration: "none",
                    fontWeight: "600",
                    display: "inline-block",
                    border: "2px solid white",
                  }}
                >
                  ← Retour aux Ressources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
