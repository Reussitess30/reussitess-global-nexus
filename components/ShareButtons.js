"use client";

export default function ShareButtons() {
  const shareUrl = "https://www.reussitess.fr/investir-reuss";
  const shareText = "🚀 REUSSITESS®NEURO-X : L'Oracle IA qui redéfinit la DeFi dans les 14 nations partenaires. #Crypto #AI #Web3 #REUSSITESS";

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Lien copié ! Prêt à être partagé dans vos groupes Crypto.");
  };

  const socialButtons = [
    { name: "X (Crypto-Twitter)", color: "#000000", url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}&hashtags=Crypto,AI,DeFi` },
    { name: "Telegram (Groups)", color: "#0088cc", url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}` },
    { name: "Reddit (r/Crypto)", color: "#FF4500", url: `https://www.reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent("Nouveau Projet IA Souveraine : REUSSITESS®NEURO-X")}` },
    { name: "LinkedIn (Finance)", color: "#0077b5", url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}` },
    { name: "Facebook (Whales)", color: "#1877f2", url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` }
  ];

  return (
    <div style={{ marginTop: "2.5rem", padding: "1.5rem", background: "rgba(0, 255, 65, 0.05)", borderRadius: "20px", border: "1px solid #00ff41" }}>
      <p style={{ textAlign: "center", fontSize: "0.8rem", color: "#00ff41", marginBottom: "1rem", fontWeight: "bold", textTransform: "uppercase" }}>
        🚀 PROPAGATION DANS LES RÉSEAUX CRYPTO (14 PAYS)
      </p>
      
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
        {socialButtons.map((btn) => (
          <a key={btn.name} href={btn.url} target="_blank" rel="noopener noreferrer" 
             style={{ background: btn.color, color: "white", padding: "10px 18px", borderRadius: "8px", textDecoration: "none", fontSize: "0.75rem", fontWeight: "bold", boxShadow: "0 4px 10px rgba(0,0,0,0.3)" }}>
            {btn.name}
          </a>
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap", marginTop: "12px" }}>
        <button onClick={() => alert("Copiez le lien et taguez #CryptoNews #AI sur TikTok/Instagram !")} 
                style={{ background: "linear-gradient(45deg, #f09433, #bc1888)", color: "white", border: "none", padding: "10px 18px", borderRadius: "8px", cursor: "pointer", fontSize: "0.75rem", fontWeight: "bold" }}>
          TikTok / Insta (Crypto)
        </button>
        <button onClick={copyLink} style={{ background: "#00ff41", color: "black", border: "none", padding: "10px 18px", borderRadius: "8px", cursor: "pointer", fontSize: "0.75rem", fontWeight: "bold" }}>
          Copier le lien direct
        </button>
      </div>
      
      <div style={{ textAlign: "center", marginTop: "15px", fontSize: "0.65rem", color: "#94a3b8" }}>
        Cible prioritaire : <span style={{ color: "#00ff41" }}>Communautés Blockchain & IA (14 Nations)</span>
      </div>
    </div>
  );
}
