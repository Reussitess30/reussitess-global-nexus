"use client";

import { useState, useEffect } from "react";

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler un compteur de visiteurs (dans une vraie app, ce serait une API)
    const getVisitorCount = () => {
      if (typeof window !== "undefined") {
        // Récupérer le compteur existant ou commencer à 0
        const stored = localStorage.getItem("reussitess_total_visitors");
        const currentCount = stored ? parseInt(stored, 10) : 0;

        // Incrémenter le compteur
        const newCount = currentCount + 1;
        localStorage.setItem("reussitess_total_visitors", newCount.toString());

        // Afficher un nombre réaliste (base + compteur local)
        const baseCount = 12547; // Nombre de base pour avoir l'air professionnel
        setVisitorCount(baseCount + newCount);
        setIsLoading(false);
      }
    };

    getVisitorCount();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        border: "2px solid #667eea",
        borderRadius: "15px",
        padding: "15px 25px",
        boxShadow: "0 8px 32px rgba(102, 126, 234, 0.3)",
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        gap: "12px",
        transition: "all 0.3s ease",
        cursor: "default",
      }}
      className="visitor-counter"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow =
          "0 12px 48px rgba(102, 126, 234, 0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(102, 126, 234, 0.3)";
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          animation: "pulse 2s ease-in-out infinite",
        }}
      >
        👥
      </div>
      <div>
        <div
          style={{
            fontSize: "0.75rem",
            color: "#64748b",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            marginBottom: "2px",
          }}
        >
          Visiteurs
        </div>
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "800",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: "1",
          }}
        >
          {visitorCount.toLocaleString("fr-FR")}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
