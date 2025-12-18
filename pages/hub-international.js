import Head from "next/head";
import Link from "next/link";

const marketplaces = [
  // --- Comptes personnels AmourGuadeloupe ---
  { code: "US", type: "Personnel", label: "Amazon USA - AmourGuadeloupe", url: "https://www.amazon.com/shop/amourguadeloupe" },
  { code: "IT", type: "Personnel", label: "Amazon Italie - AmourGuadeloupe", url: "https://www.amazon.it/shop/amourguadeloupe" },
  { code: "FR", type: "Personnel", label: "Amazon France - AmourGuadeloupe", url: "https://www.amazon.fr/shop/amourguadeloupe" },
  { code: "ES", type: "Personnel", label: "Amazon Espagne - AmourGuadeloupe", url: "https://www.amazon.es/shop/amourguadeloupe" },
  { code: "DE", type: "Personnel", label: "Amazon Allemagne - AmourGuadeloupe", url: "https://www.amazon.de/shop/amourguadeloupe" },
  { code: "CA", type: "Personnel", label: "Amazon Canada - AmourGuadeloupe", url: "https://www.amazon.ca/shop/amourguadeloupe" },
  { code: "IN", type: "Personnel", label: "Amazon Inde - AmourGuadeloupe", url: "https://www.amazon.in/shop/amourguadeloupe" },
  { code: "NL", type: "Personnel", label: "Amazon Pays-Bas - AmourGuadeloupe", url: "https://www.amazon.nl/shop/amourguadeloupe" },
  { code: "SE", type: "Personnel", label: "Amazon Suède - AmourGuadeloupe", url: "https://www.amazon.se/shop/amourguadeloupe" },
  { code: "SG", type: "Personnel", label: "Amazon Singapour - AmourGuadeloupe", url: "https://www.amazon.sg/shop/amourguadeloupe" },
  { code: "UK", type: "Personnel", label: "Amazon Royaume-Uni - AmourGuadeloupe", url: "https://www.amazon.co.uk/shop/amourguadeloupe" },
  { code: "AU", type: "Personnel", label: "Amazon Australie - AmourGuadeloupe", url: "https://www.amazon.com.au/shop/amourguadeloupe" },
  { code: "BE", type: "Personnel", label: "Amazon Belgique - AmourGuadeloupe", url: "https://www.amazon.com.be/shop/amourguadeloupe" },
  { code: "BR", type: "Personnel", label: "Amazon Brésil - AmourGuadeloupe", url: "https://www.amazon.com.br/shop/amourguadeloupe" },

  // --- Comptes Influenceur fb942837 ---
  { code: "AU", type: "Influenceur", label: "Amazon Australie - Influencer fb942837", url: "https://www.amazon.com.au/shop/influencer-fb942837" },
  { code: "US", type: "Influenceur", label: "Amazon USA - Influencer fb942837", url: "https://www.amazon.com/shop/influencer-fb942837" },
  { code: "UK", type: "Influenceur", label: "Amazon Royaume-Uni - Influencer fb942837", url: "https://www.amazon.co.uk/shop/influencer-fb942837" },
  { code: "IN", type: "Influenceur", label: "Amazon Inde - Influencer fb942837", url: "https://www.amazon.in/shop/influencer-fb942837" },
  { code: "SE", type: "Influenceur", label: "Amazon Suède - Influencer fb942837", url: "https://www.amazon.se/shop/influencer-fb942837" },
  { code: "SG", type: "Influenceur", label: "Amazon Singapour - Influencer fb942837", url: "https://www.amazon.sg/shop/influencer-fb942837" },
  { code: "BE", type: "Influenceur", label: "Amazon Belgique - Influencer fb942837", url: "https://www.amazon.com.be/shop/influencer-fb942837" },
  { code: "ES", type: "Influenceur", label: "Amazon Espagne - Influencer fb942837", url: "https://www.amazon.es/shop/influencer-fb942837" },
  { code: "DE", type: "Influenceur", label: "Amazon Allemagne - Influencer fb942837", url: "https://www.amazon.de/shop/influencer-fb942837" },
  { code: "CA", type: "Influenceur", label: "Amazon Canada - Influencer fb942837", url: "https://www.amazon.ca/shop/influencer-fb942837" },
  { code: "NL", type: "Influenceur", label: "Amazon Pays-Bas - Influencer fb942837", url: "https://www.amazon.nl/shop/influencer-fb942837" },
  { code: "FR", type: "Influenceur", label: "Amazon France - Influencer fb942837", url: "https://www.amazon.fr/shop/influencer-fb942837" },
];

export default function HubInternational() {
  return (
    <>
      <Head>
        <title>Hub International REUSSITESS x Amazon</title>
        <meta
          name="description"
          content="Hub International REUSSITESS x Amazon : accès direct à vos vraies boutiques Amazon personnelles et influenceur, avec transparence, pédagogie et traduction instantanée."
        />
      </Head>

      <div
        style={{
          minHeight: "100vh",
          background: "radial-gradient(circle at top, #0f172a 0%, #020617 55%, #000 100%)",
          color: "white",
          padding: "4rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
              fontWeight: "900",
              textAlign: "center",
              marginBottom: "1rem",
              background: "linear-gradient(135deg, #f97316 0%, #22c55e 50%, #0ea5e9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hub International REUSSITESS x Amazon
          </h1>

          <p
            style={{
              textAlign: "center",
              fontSize: "0.95rem",
              opacity: 0.85,
              marginBottom: "1.5rem",
            }}
          >
            Conçu par un créateur guadeloupéen, né sur des Terres de champions, ce hub
            rassemble des ressources Amazon et internationales avec une énergie 100 %
            positivité et succès, pensée pour le monde entier.
          </p>

          <p
            style={{
              textAlign: "center",
              maxWidth: "780px",
              margin: "0 auto 2rem",
              fontSize: "1.05rem",
              opacity: 0.9,
            }}
          >
            Chaque boutique ci‑dessous est une page Amazon officielle reliée à nos contenus
            (TikTok, YouTube, blog). Vous y trouvez des sélections thématiques, des idées de
            listes et des produits testés, classés par pays pour optimiser délais, frais et
            disponibilité, sans jamais dépasser votre propre budget.
          </p>

          {/* Filtre visuel Personnel / Influenceur */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginBottom: "2rem",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                padding: "0.4rem 1rem",
                borderRadius: "999px",
                background: "rgba(34,197,94,0.15)",
                border: "1px solid rgba(34,197,94,0.6)",
                fontSize: "0.9rem",
              }}
            >
              🧡 Comptes personnels AmourGuadeloupe
            </span>
            <span
              style={{
                padding: "0.4rem 1rem",
                borderRadius: "999px",
                background: "rgba(59,130,246,0.15)",
                border: "1px solid rgba(59,130,246,0.6)",
                fontSize: "0.9rem",
              }}
            >
              💠 Comptes Influenceur fb942837
            </span>
          </div>

          {/* Bloc pédagogique */}
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto 2rem",
              padding: "1.5rem 1.25rem",
              borderRadius: "1.25rem",
              background: "rgba(15,23,42,0.85)",
              border: "1px solid rgba(148,163,184,0.5)",
              fontSize: "0.95rem",
              lineHeight: 1.6,
            }}
          >
            <h2 style={{ fontSize: "1.15rem", marginBottom: "0.6rem", fontWeight: 700 }}>
              Comment utiliser intelligemment ces boutiques Amazon
            </h2>
            <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
              <li>
                Comparez les boutiques par pays pour vérifier prix, délais de livraison et
                éventuels frais d&apos;import avant d&apos;acheter.
              </li>
              <li>
                Lisez toujours attentivement les avis clients, les questions/réponses et les
                descriptifs produits pour confirmer que l&apos;article correspond à votre besoin.
              </li>
              <li>
                Utilisez les listes d&apos;idées comme point de départ, mais gardez le contrôle
                de votre budget et de vos priorités.
              </li>
            </ul>
          </div>

          {/* Encart pour les experts */}
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto 2rem",
              padding: "1.5rem 1.25rem",
              borderRadius: "1.25rem",
              background: "rgba(15,23,42,0.9)",
              border: "1px solid rgba(56,189,248,0.6)",
              fontSize: "0.9rem",
              lineHeight: 1.6,
            }}
          >
            <h2 style={{ fontSize: "1.1rem", marginBottom: "0.6rem", fontWeight: 700 }}>
              Pour les experts et stratèges Amazon
            </h2>
            <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
              <li>
                Approfondir les mécaniques d&apos;influence sur Amazon avec des guides récents
                sur l&apos;authenticité et la transparence des créateurs en 2025, afin de bâtir
                une relation long terme avec votre audience.
              </li>
              <li>
                Étudier des analyses complètes sur l&apos;influence marketing Amazon afin de
                construire des campagnes claires, honnêtes et mesurables, avec un focus sur
                la qualité plutôt que sur les chiffres gonflés.
              </li>
              <li>
                Découvrir les solutions d&apos;anti-contrefaçon comme le programme Transparency
                d&apos;Amazon pour protéger les marques et garantir l&apos;authenticité des
                produits aux clients.
              </li>
            </ul>
          </div>

          {/* Traducteur Google */}
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p style={{ marginBottom: "0.75rem", fontWeight: 600 }}>
              🌐 Traduisez instantanément cette page
            </p>
            <div
              id="google_translate_element"
              style={{
                display: "inline-block",
                padding: "0.75rem 1.5rem",
                borderRadius: "999px",
                background: "rgba(15, 23, 42, 0.9)",
                border: "1px solid rgba(148, 163, 184, 0.5)",
              }}
            ></div>
            <p
              style={{
                fontSize: "0.8rem",
                opacity: 0.6,
                textAlign: "center",
                marginTop: "0.5rem",
              }}
            >
              Les traductions sont générées automatiquement par Google Translate et peuvent
              comporter des imprécisions. En cas de doute, référez‑vous à la version française.
            </p>
          </div>

          {/* Bouton Amazon Booster */}
          <div style={{ textAlign: "center", margin: "2rem 0" }}>
            <Link
              href="https://www.amazon.fr/shop/booster"
              style={{
                display: "inline-block",
                padding: "1rem 2.5rem",
                background:
                  "linear-gradient(135deg, #ff9800 0%, #ff5722 100%)",
                color: "white",
                borderRadius: "50px",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: "bold",
                boxShadow: "0 10px 30px rgba(255, 87, 34, 0.5)",
                transition: "all 0.3s ease",
              }}
            >
              🚀 Booster Amazon
            </Link>
          </div>

          {/* Grille des vraies boutiques */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            {marketplaces.map((mkt, index) => (
              <a
                key={mkt.code + mkt.type + index}
                href={mkt.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  padding: "1.4rem 1.2rem",
                  borderRadius: "1.25rem",
                  background:
                    "linear-gradient(135deg, rgba(15,23,42,1) 0%, rgba(15,23,42,0.4) 100%)",
                  border:
                    mkt.type === "Personnel"
                      ? "1px solid rgba(34, 197, 94, 0.6)"
                      : "1px solid rgba(59, 130, 246, 0.6)",
                  textDecoration: "none",
                  color: "white",
                  boxShadow: "0 18px 45px rgba(15, 23, 42, 0.7)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                }}
              >
                <div style={{ fontSize: "0.85rem", opacity: 0.7, marginBottom: "0.2rem" }}>
                  {mkt.code} · {mkt.type}
                </div>
                <div style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.4rem" }}>
                  {mkt.label}
                </div>
                <div style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                  Accédez à cette boutique Amazon officielle avec l&apos;accompagnement REUSSITESS.
                </div>
              </a>
            ))}
          </div>

          {/* Bloc ressources & transparence */}
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto 2rem",
              padding: "1.5rem 1.25rem",
              borderRadius: "1.25rem",
              background: "rgba(15,23,42,0.85)",
              border: "1px solid rgba(148,163,184,0.5)",
              fontSize: "0.9rem",
              lineHeight: 1.6,
            }}
          >
            <h2 style={{ fontSize: "1.1rem", marginBottom: "0.6rem", fontWeight: 700 }}>
              Aller plus loin de façon professionnelle
            </h2>
            <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
              <li>
                Comprendre le cadre officiel du{" "}
                <a
                  href="https://affiliate-program.amazon.com/influencers/signup/SelectAccount"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Amazon Influencer Program
                </a>{" "}
                et des programmes Amazon Associates.
              </li>
              <li>
                Vérifier les règles internationales d&apos;affiliation et de transparence en
                consultant les{" "}
                <a
                  href="https://affiliate-program.amazon.sg/help/operating/policies"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Program Policies Amazon
                </a>
                .
              </li>
              <li>
                Approfondir les exigences de disclosure et de bonnes pratiques grâce à des
                ressources spécialisées comme{" "}
                <a
                  href="https://azonpress.com/key-amazon-affiliate-requirements/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ce guide sur les obligations des affiliés Amazon
                </a>
                .
              </li>
              <li>
                Comparer intelligemment les prix Amazon entre plusieurs pays européens avec des
                outils externes comme{" "}
                <a
                  href="https://www.tastech.fr/amazon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tastech (comparateur Amazon Europe)
                </a>{" "}
                pour optimiser vos achats.
              </li>
              <li>
                Respecter les conditions d&apos;utilisation de la traduction automatique en
                consultant les{" "}
                <a
                  href="https://docs.cloud.google.com/translate/attribution"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  règles d&apos;attribution Google Cloud Translation
                </a>
                .
              </li>
            </ul>
          </div>

          {/* Disclosure légal Amazon */}
          <p
            style={{
              maxWidth: "820px",
              margin: "0.5rem auto 2rem",
              fontSize: "0.85rem",
              opacity: 0.75,
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            Cette page contient des liens vers des boutiques Amazon personnelles et
            influenceur. En tant que participant aux programmes Amazon (Associates et
            Influencer), REUSSITESS et AmourGuadeloupe peuvent percevoir une commission
            sur les achats éligibles, sans coût supplémentaire pour vous. Merci de
            soutenir ce travail.
          </p>

          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <Link
              href="/"
              style={{
                display: "inline-block",
                padding: "0.9rem 2.2rem",
                borderRadius: "999px",
                border: "1px solid rgba(148, 163, 184, 0.5)",
                textDecoration: "none",
                color: "white",
                fontWeight: 600,
                fontSize: "0.98rem",
                background:
                  "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.6) 100%)",
              }}
            >
              ⬅️ Retour à REUSSITESS
            </Link>
          </div>
        </div>
      </div>

      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                {pageLanguage: 'fr'},
                'google_translate_element'
              );
            }
          `,
        }}
      />
      <script
        type="text/javascript"
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      />
    </>
  );
}
