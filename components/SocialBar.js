import { useState } from "react";

export default function SocialBar() {
  const [isOpen, setIsOpen] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";
  const title =
    "REUSSITESS® Global Nexus - La référence mondiale e-commerce Amazon";

  const socials = [
    {
      name: "Facebook",
      icon: "📘",
      color: "#1877f2",
      link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      name: "WhatsApp",
      icon: "💬",
      color: "#25d366",
      link: `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
    },
    {
      name: "Twitter/X",
      icon: "🐦",
      color: "#1da1f2",
      link: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
    {
      name: "LinkedIn",
      icon: "💼",
      color: "#0077b5",
      link: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      name: "Telegram",
      icon: "✈️",
      color: "#0088cc",
      link: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
  ];

  return (
    <>
      <div
        style={{
          position: "fixed",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            border: "none",
            cursor: "pointer",
            fontSize: "1.8em",
            boxShadow: "0 4px 20px rgba(102, 126, 234, 0.5)",
          }}
        >
          {isOpen ? "✖️" : "🔗"}
        </button>

        {isOpen &&
          socials.map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              title={`Partager sur ${social.name}`}
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "50%",
                background: social.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "1.5em",
                textDecoration: "none",
                cursor: "pointer",
                boxShadow: `0 4px 15px ${social.color}80`,
              }}
            >
              {social.icon}
            </a>
          ))}
      </div>
    </>
  );
}
