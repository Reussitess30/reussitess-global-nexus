import React from 'react';
import './Footer.css';

const SHOP_DATA = [
  // Boutiques personnelles (14)
  { name: "[Personnel] États-Unis", flag: "🇺🇸", link: "https://amzlink.to/az0LY0DXMG6dR" },
  { name: "[Personnel] France", flag: "🇫🇷", link: "https://amzlink.to/az0RLMqtXqC2d" },
  { name: "[Personnel] Italie", flag: "🇮🇹", link: "https://amzlink.to/az0tV67jW36S7" },
  { name: "[Personnel] Espagne", flag: "🇪🇸", link: "https://amzlink.to/az085o25FtlRd" },
  { name: "[Personnel] Allemagne", flag: "🇩🇪", link: "https://amzlink.to/az00VtRPRGpmm" },
  { name: "[Personnel] Canada", flag: "🇨🇦", link: "https://amzlink.to/az0MvN3FRKKQQ" },
  { name: "[Personnel] Inde", flag: "🇮🇳", link: "https://amzlink.to/az0GVe8b9O7cF" },
  { name: "[Personnel] Pays-Bas", flag: "🇳🇱", link: "https://amzlink.to/az0G27sb8ZVbI" },
  { name: "[Personnel] Suède", flag: "🇸🇪", link: "https://amzlink.to/az0Ig0XgFkR8o" },
  { name: "[Personnel] Singapour", flag: "🇸🇬", link: "https://amzlink.to/az0b3TpUdq32r" },
  { name: "[Personnel] Royaume-Uni", flag: "🇬🇧", link: "https://amzlink.to/az03r8CJgliMq" },
  { name: "[Personnel] Australie", flag: "🇦🇺", link: "https://amzlink.to/az05kTTrYJ06L" },
  { name: "[Personnel] Belgique", flag: "🇧🇪", link: "https://www.amazon.com.be/shop/influencer-fb942837" },
  { name: "[Personnel] Brésil", flag: "🇧🇷", link: "https://amzlink.to/az0ymmoCLHvyA" },
  // Boutiques influenceurs (12)
  { name: "[Influenceur] États-Unis", flag: "🇺🇸", link: "https://amzlink.to/az0G6w0uuYRlg" },
  { name: "[Influenceur] Italie", flag: "🇮🇹", link: "https://amzlink.to/az0yC7BiDQmPg" },
  { name: "[Influenceur] Espagne", flag: "🇪🇸", link: "https://amzlink.to/az0DKsP6Zr5IL" },
  { name: "[Influenceur] Allemagne", flag: "🇩🇪", link: "https://amzlink.to/az0PuGdrA0kgh" },
  { name: "[Influenceur] Canada", flag: "🇨🇦", link: "https://amzlink.to/az0YFa3j2fsnv" },
  { name: "[Influenceur] Inde", flag: "🇮🇳", link: "https://amzlink.to/az0Qry9pNlCkw" },
  { name: "[Influenceur] Pays-Bas", flag: "🇳🇱", link: "https://amzlink.to/az0v9jdbSf7Km" },
  { name: "[Influenceur] Suède", flag: "🇸🇪", link: "https://amzlink.to/az0Q5qEXfyqk5" },
  { name: "[Influenceur] Singapour", flag: "🇸🇬", link: "https://amzlink.to/az05gMuq73i99" },
  { name: "[Influenceur] Royaume-Uni", flag: "🇬🇧", link: "https://amzlink.to/az0VutIAPP8MY" },
  { name: "[Influenceur] Australie", flag: "🇦🇺", link: "https://amzlink.to/az0on91nKaQvh" },
  { name: "[Influenceur] Belgique", flag: "🇧🇪", link: "https://www.amazon.com.be/shop/influencer-fb942837" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          <strong>Reussitess30</strong> — <a href="mailto:influenceur@reussitess.fr">influenceur@reussitess.fr</a> | © 2025 Reussitess Global Nexus
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
