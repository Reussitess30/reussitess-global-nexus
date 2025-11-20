import React from 'react';
import './Footer.css';

const SHOP_DATA = [
  // Boutiques personnelles
  { name: "[Personnel] France", flag: "🇫🇷", link: "https://amzlink.to/personnel-FR" },
  { name: "[Personnel] Italie", flag: "🇮🇹", link: "https://amzlink.to/personnel-IT" },
  { name: "[Personnel] Allemagne", flag: "🇩🇪", link: "https://amzlink.to/personnel-DE" },
  { name: "[Personnel] Suède", flag: "🇸🇪", link: "https://amzlink.to/personnel-SE" },
  { name: "[Personnel] Singapour", flag: "🇸🇬", link: "https://amzlink.to/personnel-SG" },
  { name: "[Personnel] Australie", flag: "🇦🇺", link: "https://amzlink.to/personnel-AU" },
  { name: "[Personnel] Espagne", flag: "🇪🇸", link: "https://amzlink.to/personnel-ES" },
  { name: "[Personnel] Brésil", flag: "🇧🇷", link: "https://amzlink.to/personnel-BR" },
  { name: "[Personnel] Royaume-Uni", flag: "🇬🇧", link: "https://amzlink.to/personnel-UK" },
  { name: "[Personnel] Inde", flag: "🇮🇳", link: "https://amzlink.to/personnel-IN" },
  { name: "[Personnel] Nouvelle-Zélande", flag: "🇳🇿", link: "https://amzlink.to/personnel-NZ" },
  { name: "[Personnel] États-Unis", flag: "🇺🇸", link: "https://amzlink.to/personnel-US" },
  { name: "[Personnel] Canada", flag: "🇨🇦", link: "https://amzlink.to/personnel-CA" },
  { name: "[Personnel] Belgique", flag: "🇧🇪", link: "https://amzlink.to/personnel-BE" },
  // Boutiques influenceurs
  { name: "[Influenceur] Italie", flag: "🇮🇹", link: "https://amzlink.to/influenceur-IT" },
  { name: "[Influenceur] Allemagne", flag: "🇩🇪", link: "https://amzlink.to/influenceur-DE" },
  { name: "[Influenceur] Suède", flag: "🇸🇪", link: "https://amzlink.to/influenceur-SE" },
  { name: "[Influenceur] Singapour", flag: "🇸🇬", link: "https://amzlink.to/influenceur-SG" },
  { name: "[Influenceur] Australie", flag: "🇦🇺", link: "https://amzlink.to/influenceur-AU" },
  { name: "[Influenceur] Espagne", flag: "🇪🇸", link: "https://amzlink.to/influenceur-ES" },
  { name: "[Influenceur] Royaume-Uni", flag: "🇬🇧", link: "https://amzlink.to/influenceur-UK" },
  { name: "[Influenceur] Inde", flag: "🇮🇳", link: "https://amzlink.to/influenceur-IN" },
  { name: "[Influenceur] Nouvelle-Zélande", flag: "🇳🇿", link: "https://amzlink.to/influenceur-NZ" },
  { name: "[Influenceur] États-Unis", flag: "🇺🇸", link: "https://amzlink.to/influenceur-US" },
  { name: "[Influenceur] Belgique", flag: "🇧🇪", link: "https://amzlink.to/influenceur-BE" },
  { name: "[Influenceur] Belgique (Code BEI)", flag: "🇧🇪", link: "https://www.amazon.com.be/shop/influencer-fb942837" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          <strong>REUSSITESS®30</strong> — <a href="mailto:influenceur@reussitess.fr">influenceur@reussitess.fr</a> | © 2025 REUSSITESS® Global Nexus
        </p>
        <div className="social-links">
          <a href="https://www.instagram.com/reussitess30" target="_blank" rel="noopener noreferrer">Instagram</a>
          {" | "}
          <a href="https://twitter.com/reussitess30" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <div className="boutiques-list">
          <h4>🏪 Boutiques Amazon</h4>
          <ul>
            {SHOP_DATA.map((store, idx) => (
              <li key={idx} style={{display:"inline-block", margin:"0 10px 6px 0"}}>
                <a href={store.link} target="_blank" rel="nofollow sponsored noopener">
                  <span style={{fontSize:"1em"}}>{store.flag}</span>{" "}{store.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
