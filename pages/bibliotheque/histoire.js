import Head from "next/head";
import { useRouter } from "next/router";

export default function Histoire() {
  const router = useRouter();

  const sections = [
    {
      title: "🌍 Histoire de l'Afrique",
      content: [
        "L'Afrique précoloniale : royaumes, empires et civilisations (Ghana, Mali, Songhaï, Éthiopie, Zimbabwe)",
        "La traite négrière atlantique (XVIe-XIXe siècles) et ses conséquences",
        "La colonisation européenne et le partage de l'Afrique (Conférence de Berlin, 1884-1885)",
        "Les mouvements de résistance et les luttes pour l'indépendance (XXe siècle)",
        "L'Afrique post-coloniale : défis et développements contemporains",
      ],
    },
    {
      title: "🏝️ Histoire des Caraïbes",
      content: [
        "Populations autochtones : Taïnos, Caraïbes, Arawaks avant l'arrivée des Européens",
        "L'arrivée de Christophe Colomb (1492) et la colonisation espagnole",
        "La colonisation française, britannique et néerlandaise des îles",
        "L'économie de plantation et l'esclavage dans les Caraïbes",
        "Les révoltes d'esclaves et la révolution haïtienne (1791-1804)",
        "L'abolition de l'esclavage : dates et processus par territoire",
      ],
    },
    {
      title: "🇲🇶 Histoire de la Martinique",
      content: [
        "1502 : Arrivée de Christophe Colomb en Martinique",
        "1635 : Colonisation française, Belain d'Esnambuc prend possession de l'île",
        "Développement de l'économie sucrière et esclavage (XVIIe-XIXe)",
        "1848 : Abolition de l'esclavage (décret de Victor Schœlcher)",
        "1902 : Éruption de la Montagne Pelée détruisant Saint-Pierre",
        "1946 : La Martinique devient un département français d'outre-mer",
        "Aujourd'hui : Région ultrapériphérique de l'Union européenne",
      ],
    },
    {
      title: "🇬🇵 Histoire de la Guadeloupe",
      content: [
        "1493 : Découverte par Christophe Colomb lors de son second voyage",
        "1635 : Colonisation française par L'Olive et Duplessis",
        "Développement des plantations de canne à sucre et esclavage",
        "1794 : Première abolition de l'esclavage (Convention)",
        "1802 : Rétablissement de l'esclavage par Napoléon Bonaparte",
        "1848 : Abolition définitive de l'esclavage",
        "1946 : Départementalisation de la Guadeloupe",
        "Statut actuel : Département et région d'outre-mer",
      ],
    },
    {
      title: "🇬🇫 Histoire de la Guyane",
      content: [
        "Populations autochtones : Amérindiens (Wayanas, Kalinas, Palikurs, etc.)",
        "1604 : Premières tentatives de colonisation française",
        "1676 : Installation définitive de la France en Guyane",
        "L'économie agricole et minière (or) sous le régime colonial",
        "1848 : Abolition de l'esclavage en Guyane",
        "1852-1953 : La Guyane, terre de bagne (Îles du Salut, Saint-Laurent-du-Maroni)",
        "1946 : Transformation en département français",
        "Aujourd'hui : Centre Spatial Guyanais (Kourou), biodiversité exceptionnelle",
      ],
    },
    {
      title: "🇫🇷 Anciennes Colonies Françaises",
      content: [
        "Afrique du Nord : Algérie (1830-1962), Tunisie, Maroc",
        "Afrique subsaharienne : AOF (Afrique-Occidentale française), AEF (Afrique-Équatoriale française)",
        "Indochine française : Vietnam, Laos, Cambodge",
        "Océan Indien : Madagascar, Réunion, Mayotte, Comores",
        "Pacifique : Nouvelle-Calédonie, Polynésie française, Wallis-et-Futuna",
        "Processus de décolonisation (années 1950-1960)",
        "Relations post-coloniales et Francophonie",
      ],
    },
  ];

  const figures = [
    {
      name: "Toussaint Louverture",
      role: "Leader de la révolution haïtienne",
      period: "1743-1803",
    },
    {
      name: "Victor Schœlcher",
      role: "Abolitionniste français",
      period: "1804-1893",
    },
    {
      name: "Aimé Césaire",
      role: "Poète, écrivain et homme politique martiniquais",
      period: "1913-2008",
    },
    {
      name: "Léopold Sédar Senghor",
      role: "Poète et premier président du Sénégal",
      period: "1906-2001",
    },
    {
      name: "Frantz Fanon",
      role: "Psychiatre et essayiste martiniquais",
      period: "1925-1961",
    },
    {
      name: "Félix Éboué",
      role: "Premier gouverneur noir de l'Empire colonial français",
      period: "1884-1944",
    },
  ];

  return (
    <>
      <Head>
        <title>
          📖 Histoire Africaine & Outre-Mers - Bibliothèque Mondiale
        </title>
        <meta
          name="description"
          content="Histoire de l'Afrique, des Caraïbes, de la Martinique, Guadeloupe, Guyane et des anciennes colonies françaises"
        />
      </Head>

      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
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
              fontWeight: "bold",
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
            <h1
              style={{
                fontSize: "3em",
                marginBottom: "10px",
                color: "#d97706",
              }}
            >
              📖 Histoire Africaine & Outre-Mers
            </h1>
            <p
              style={{ fontSize: "1.2em", color: "#666", marginBottom: "40px" }}
            >
              Chronologies, contextes culturels et biographies des territoires
              africains, caraïbes et ultra-marins
            </p>

            {/* Sections historiques */}
            {sections.map((section, i) => (
              <div
                key={i}
                style={{
                  background: "#fef3c7",
                  padding: "30px",
                  borderRadius: "15px",
                  marginBottom: "25px",
                  borderLeft: "5px solid #f59e0b",
                }}
              >
                <h2
                  style={{
                    color: "#d97706",
                    marginBottom: "20px",
                    fontSize: "1.8em",
                  }}
                >
                  {section.title}
                </h2>
                <ul style={{ lineHeight: "2", fontSize: "1.05em" }}>
                  {section.content.map((item, j) => (
                    <li key={j} style={{ marginBottom: "10px" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Figures historiques */}
            <h2
              style={{
                color: "#d97706",
                marginTop: "50px",
                marginBottom: "25px",
                fontSize: "2em",
              }}
            >
              👤 Figures Historiques Marquantes
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px",
              }}
            >
              {figures.map((figure, i) => (
                <div
                  key={i}
                  style={{
                    background: "#fff7ed",
                    padding: "20px",
                    borderRadius: "12px",
                    borderTop: "3px solid #f59e0b",
                  }}
                >
                  <h3 style={{ color: "#d97706", marginBottom: "10px" }}>
                    {figure.name}
                  </h3>
                  <p style={{ fontSize: "0.95em", marginBottom: "5px" }}>
                    {figure.role}
                  </p>
                  <p
                    style={{
                      fontSize: "0.9em",
                      color: "#666",
                      fontStyle: "italic",
                    }}
                  >
                    {figure.period}
                  </p>
                </div>
              ))}
            </div>

            {/* Ressources */}
            <div
              style={{
                background: "#f59e0b",
                color: "white",
                padding: "30px",
                borderRadius: "15px",
                marginTop: "40px",
              }}
            >
              <h2 style={{ marginBottom: "20px", fontSize: "1.8em" }}>
                📚 Ressources Complémentaires
              </h2>
              <p style={{ marginBottom: "15px", fontSize: "1.1em" }}>
                Pour approfondir vos connaissances, consultez également :
              </p>
              <ul style={{ lineHeight: "2", fontSize: "1.05em" }}>
                <li>
                  Les fiches pays détaillées (Martinique, Guadeloupe, Guyane,
                  France)
                </li>
                <li>Les ressources pédagogiques pour professeurs</li>
                <li>
                  Les actualités internationales et évolutions culturelles
                </li>
                <li>
                  La section réglementation pour les aspects juridiques
                  contemporains
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
