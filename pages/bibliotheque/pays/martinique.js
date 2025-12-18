import Head from "next/head";
import { useRouter } from "next/router";

export default function Martinique() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>🇲🇶 Martinique - Bibliothèque Mondiale REUSSITESS®</title>
        <meta
          name="description"
          content="Fiche complète Martinique : population, marché e-commerce, TVA, Amazon, histoire et ressources"
        />
      </Head>

      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          padding: "20px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <button
            onClick={() => router.push("/bibliotheque")}
            style={{
              padding: "10px 20px",
              background: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            ← Retour à la Bibliothèque
          </button>

          <div
            style={{
              background: "white",
              padding: "40px",
              borderRadius: "20px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
            }}
          >
            <h1 style={{ fontSize: "3em", marginBottom: "10px" }}>
              🇲🇶 Martinique
            </h1>
            <p
              style={{ fontSize: "1.2em", color: "#666", marginBottom: "30px" }}
            >
              Département et région d'outre-mer français - Caraïbes
            </p>

            {/* Statistiques clés */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "20px",
                marginBottom: "40px",
              }}
            >
              {[
                { label: "Population", value: "360K" },
                { label: "Superficie", value: "1 128 km²" },
                { label: "Chef-lieu", value: "Fort-de-France" },
                { label: "Statut", value: "DROM" },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: "#f0f4ff",
                    padding: "20px",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2em",
                      fontWeight: "bold",
                      color: "#667eea",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "0.9em", color: "#666" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Économie */}
            <h2 style={{ color: "#667eea", marginTop: "40px" }}>💼 Économie</h2>
            <div
              style={{
                background: "#f9fafb",
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "30px",
              }}
            >
              <p
                style={{
                  marginBottom: "15px",
                  fontSize: "1.05em",
                  lineHeight: "1.6",
                }}
              >
                <strong>PIB :</strong> ~10 milliards d'euros
                <br />
                <strong>Secteurs principaux :</strong> Services (tourisme),
                commerce, agriculture (banane, rhum)
                <br />
                <strong>Taux de chômage :</strong> ~16% (2024)
                <br />
                <strong>Monnaie :</strong> Euro (€)
              </p>
            </div>

            {/* Fiscalité & TVA */}
            <h2 style={{ color: "#667eea" }}>⚖️ Fiscalité & TVA</h2>
            <div
              style={{
                background: "#f9fafb",
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "30px",
              }}
            >
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid #e0e0e0" }}>
                    <th style={{ padding: "10px", textAlign: "left" }}>Type</th>
                    <th style={{ padding: "10px", textAlign: "left" }}>Taux</th>
                    <th style={{ padding: "10px", textAlign: "left" }}>
                      Détails
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "10px" }}>TVA Normale</td>
                    <td style={{ padding: "10px", fontWeight: "bold" }}>
                      8.5%
                    </td>
                    <td style={{ padding: "10px" }}>
                      Majorité des produits et services
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px" }}>TVA Réduite</td>
                    <td style={{ padding: "10px", fontWeight: "bold" }}>
                      2.1%
                    </td>
                    <td style={{ padding: "10px" }}>
                      Presse, médicaments, spectacles
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px" }}>Octroi de mer</td>
                    <td style={{ padding: "10px", fontWeight: "bold" }}>
                      0-30%
                    </td>
                    <td style={{ padding: "10px" }}>
                      Taxe locale sur importations
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* E-commerce & Amazon */}
            <h2 style={{ color: "#667eea" }}>🛒 E-commerce & Amazon</h2>
            <div
              style={{
                background: "#f9fafb",
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "30px",
              }}
            >
              <p style={{ marginBottom: "10px" }}>
                <strong>Marketplace :</strong> Amazon.fr (livraison possible
                mais coûts élevés)
              </p>
              <p style={{ marginBottom: "10px" }}>
                <strong>Particularités :</strong>
              </p>
              <ul style={{ lineHeight: "1.8", paddingLeft: "20px" }}>
                <li>Frais de livraison depuis métropole souvent élevés</li>
                <li>
                  Délais de livraison plus longs (7-15 jours généralement)
                </li>
                <li>Certains vendeurs ne livrent pas en outre-mer</li>
                <li>Amazon Prime disponible avec conditions spécifiques</li>
                <li>Développement du e-commerce local en cours</li>
              </ul>
            </div>

            {/* Histoire résumée */}
            <h2 style={{ color: "#667eea" }}>📖 Histoire Résumée</h2>
            <div
              style={{
                background: "#f9fafb",
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "30px",
              }}
            >
              <ul style={{ lineHeight: "2", fontSize: "1.05em" }}>
                <li>
                  <strong>1502 :</strong> Découverte par Christophe Colomb
                </li>
                <li>
                  <strong>1635 :</strong> Colonisation française (Belain
                  d'Esnambuc)
                </li>
                <li>
                  <strong>XVIIe-XIXe :</strong> Économie sucrière et esclavage
                </li>
                <li>
                  <strong>1848 :</strong> Abolition de l'esclavage (Victor
                  Schœlcher)
                </li>
                <li>
                  <strong>1902 :</strong> Éruption de la Montagne Pelée
                  détruisant Saint-Pierre
                </li>
                <li>
                  <strong>1946 :</strong> Départementalisation
                </li>
                <li>
                  <strong>Aujourd'hui :</strong> DROM et région
                  ultrapériphérique UE
                </li>
              </ul>
            </div>

            {/* Culture */}
            <h2 style={{ color: "#667eea" }}>🎭 Culture & Patrimoine</h2>
            <div
              style={{
                background: "#f9fafb",
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "30px",
              }}
            >
              <p style={{ marginBottom: "10px" }}>
                <strong>Langues :</strong> Français (officiel), Créole
                martiniquais
              </p>
              <p style={{ marginBottom: "10px" }}>
                <strong>Patrimoine UNESCO :</strong> Aucun site actuellement
              </p>
              <p style={{ marginBottom: "15px" }}>
                <strong>Points d&apos;intérêt :</strong>
              </p>
              <ul style={{ lineHeight: "1.8", paddingLeft: "20px" }}>
                <li>Montagne Pelée et ruines de Saint-Pierre</li>
                <li>Plages des Salines et presqu'île de la Caravelle</li>
                <li>Distilleries de rhum (rhum agricole AOC)</li>
                <li>
                  Fort-de-France : Bibliothèque Schœlcher, Fort Saint-Louis
                </li>
                <li>Jardins de Balata, habitations coloniales</li>
              </ul>
            </div>

            {/* Ressources officielles */}
            <h2 style={{ color: "#667eea" }}>
              🔗 Ressources Institutionnelles
            </h2>
            <div
              style={{
                background: "#f9fafb",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <p style={{ marginBottom: "10px" }}>
                📄 Collectivité Territoriale de Martinique
              </p>
              <p style={{ marginBottom: "10px" }}>
                📄 Préfecture de Martinique
              </p>
              <p style={{ marginBottom: "10px" }}>
                📄 CCI Martinique (Chambre de Commerce et d'Industrie)
              </p>
              <p style={{ marginBottom: "10px" }}>
                📄 Comité Martiniquais du Tourisme
              </p>
              <p>
                📄 AMPI (Agence Martiniquaise de Promotion de
                l&apos;Investissement)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
