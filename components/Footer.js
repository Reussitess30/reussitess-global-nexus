import React from "react";
import "./Footer.css";

const SHOP_DATA = [
  // Boutiques personnelles
  {
    name: "[Personnel] États-Unis",
    flag: "🇺🇸",
    link: "https://www.amazon.com/shop/amourguadeloupe",
  },
  {
    name: "[Personnel] Italie",
    flag: "🇮🇹",
    link: "https://www.amazon.it/shop/amourguadeloupe",
  },
  {
    name: "[Personnel] France",
    flag: "🇫🇷",
    link: "https://www.amazon.fr/shop/amourguadeloupe",
  },
  {
    name: "[Personnel] Espagne",
    flag: "🇪🇸",
    link: "https://www.amazon.es/shop/amourguadeloupe",
  },
  {
    name: "[Personnel] Allemagne",
    flag: "🇩🇪",
    link: "https://www.amazon.de/shop/amourguadeloupe",
  },
  {
    name: "[Personnel] Canada",
    flag: "🇨🇦",
    link: "https://www.amazon.ca/shop/amourguadeloupe",
  },
  {
    name: "[Personnel] Inde",
    flag: "🇮🇳",
    link: "https://www.amazon.in/shop/amourguadeloupe",
  },
  {
    name: "[Personnel] Pays-Bas",
    flag: "🇳🇱",
    link: "https://www.amazon.nl/shop/amourguadeloupe",
  },
  {
    name: "[Personnel] Suède",
    flag: "🇸🇪",
    link: "https://www.amazon.se/shop/amourguadeloupe",
  },
  {
    name: "[Personnel] Singapour",
    flag: "🇸🇬",
    link: "https://www.amazon.sg/shop/amourguadeloupe",
  },
  {
    name: "[Personnel] Royaume-Uni",
    flag: "🇬🇧",
    link: "https://www.amazon.co.uk/shop/amourguadeloupe",
  },
  {
    name: "[Personnel] Australie",
    flag: "🇦🇺",
    link: "https://www.amazon.com.au/shop/amourguadeloupe",
  },
  {
    name: "[Personnel] Belgique",
    flag: "🇧🇪",
    link: "https://www.amazon.com.be/shop/amourguadeloupe",
  },
  {
    name: "[Personnel] Brésil",
    flag: "🇧🇷",
    link: "https://www.amazon.com.br/shop/amourguadeloupe",
  },
  // Boutiques influenceurs
  {
    name: "[Influenceur] Australie",
    flag: "🇦🇺",
    link: "https://www.amazon.com.au/shop/influencer-fb942837",
  },
  {
    name: "[Influenceur] États-Unis",
    flag: "🇺🇸",
    link: "https://www.amazon.com/shop/influencer-fb942837",
  },
  {
    name: "[Influenceur] Royaume-Uni",
    flag: "🇬🇧",
    link: "https://www.amazon.co.uk/shop/influencer-fb942837",
  },
  {
    name: "[Influenceur] Inde",
    flag: "🇮🇳",
    link: "https://www.amazon.in/shop/influencer-fb942837",
  },
  {
    name: "[Influenceur] Suède",
    flag: "🇸🇪",
    link: "https://www.amazon.se/shop/influencer-fb942837",
  },
  {
    name: "[Influenceur] Singapour",
    flag: "🇸🇬",
    link: "https://www.amazon.sg/shop/influencer-fb942837",
  },
  {
    name: "[Influenceur] Belgique",
    flag: "🇧🇪",
    link: "https://www.amazon.com.be/shop/influencer-fb942837",
  },
  {
    name: "[Influenceur] Espagne",
    flag: "🇪🇸",
    link: "https://www.amazon.es/shop/influencer-fb942837",
  },
  {
    name: "[Influenceur] Allemagne",
    flag: "🇩🇪",
    link: "https://www.amazon.de/shop/influencer-fb942837",
  },
  {
    name: "[Influenceur] Canada",
    flag: "🇨🇦",
    link: "https://www.amazon.ca/shop/influencer-fb942837",
  },
  {
    name: "[Influenceur] Pays-Bas",
    flag: "🇳🇱",
    link: "https://www.amazon.nl/shop/influencer-fb942837",
  },
  {
    name: "[Influenceur] France",
    flag: "🇫🇷",
    link: "https://www.amazon.fr/shop/influencer-fb942837",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          <strong>REUSSITESS®30</strong> —{" "}
          <a href="mailto:influenceur@reussitess.fr">
            influenceur@reussitess.fr
          </a>{" "}
          | © 2025 REUSSITESS® Global Nexus
        </p>
        <div className="social-links">
          <a
            href="https://www.instagram.com/reussitess30"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          {" | "}
          <a
            href="https://twitter.com/reussitess30"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
        <div className="boutiques-list">
          <h4>🏪 Boutiques Amazon</h4>
          <ul>
            {SHOP_DATA.map((store, idx) => (
              <li
                key={idx}
                style={{ display: "inline-block", margin: "0 10px 6px 0" }}
              >
                <a
                  href={store.link}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                >
                  <span style={{ fontSize: "1em" }}>{store.flag}</span>{" "}
                  {store.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
