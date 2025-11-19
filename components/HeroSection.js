import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [botPosition, setBotPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    
    // Animation de mouvement subtil du bot
    const interval = setInterval(() => {
      setBotPosition({
        x: Math.sin(Date.now() / 1000) * 10,
        y: Math.cos(Date.now() / 1500) * 8
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Fond animé avec dégradé */}
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        {/* Contenu principal */}
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-text-section">
            {/* Badge Reussitess® */}
            <div className="brand-badge">
              <span className="badge-icon">🌍</span>
              <span className="badge-text">Reussitess®</span>
              <span className="badge-status">
                <span className="status-dot"></span>
                En ligne
              </span>
            </div>

            {/* Titre principal impactant */}
            <h1 className="hero-title">
              <span className="title-line-1">Votre Passerelle</span>
              <span className="title-line-2">E-Commerce Mondiale</span>
              <span className="title-highlight">Sécurisée & Certifiée</span>
            </h1>

            {/* Slogan sécurité internationale */}
            <p className="hero-slogan">
              <span className="slogan-icon">🔒</span>
              Transactions internationales sécurisées sur 26 boutiques Amazon
              <br />
              <span className="slogan-highlight">14 pays • 5 continents • Protection maximale</span>
            </p>

            {/* Call-to-Action fort */}
            <div className="cta-section">
              <a href="#boutiques" className="cta-primary">
                <span className="cta-icon">🚀</span>
                <span className="cta-text">Accéder aux Boutiques</span>
                <span className="cta-arrow">→</span>
              </a>
              <a href="#fonctionnement" className="cta-secondary">
                <span className="cta-icon">ℹ️</span>
                <span>Comment ça marche ?</span>
              </a>
            </div>

            {/* Badges de confiance */}
            <div className="trust-badges">
              <div className="trust-badge">
                <span className="trust-icon">✓</span>
                <span>Paiements sécurisés</span>
              </div>
              <div className="trust-badge">
                <span className="trust-icon">✓</span>
                <span>Données cryptées</span>
              </div>
              <div className="trust-badge">
                <span className="trust-icon">✓</span>
                <span>Conformité RGPD</span>
              </div>
            </div>
          </div>

          {/* Section visuelle avec mascotte IA */}
          <div className="hero-visual-section">
            {/* Mascotte IA principale */}
            <div className="mascot-container">
              <div className="mascot-glow"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/ia-mascot-animated.svg" 
                alt="Mascotte IA Reussitess"
                className="mascot-image"
                width={200}
                height={200}
              />
            </div>

            {/* Bot Avatar animé avec micro-interaction */}
            <div 
              className="bot-avatar-container"
              style={{
                transform: `translate(${botPosition.x}px, ${botPosition.y}px)`
              }}
            >
              <div className="bot-pulse"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/bot-avatar-animated.svg" 
                alt="Bot IA Assistant"
                className="bot-avatar"
                width={120}
                height={120}
              />
              <div className="bot-message">
                <span className="bot-message-text">Je suis là pour vous aider !</span>
              </div>
            </div>

            {/* Particules décoratives */}
            <div className="decorative-particles">
              <div className="particle particle-1"></div>
              <div className="particle particle-2"></div>
              <div className="particle particle-3"></div>
              <div className="particle particle-4"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%);
        }

        .hero-container {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          padding: 2rem;
          width: 100%;
        }

        /* Fond animé avec orbes de dégradé */
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
          animation: float 20s ease-in-out infinite;
        }

        .orb-1 {
          width: 500px;
          height: 500px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          top: -150px;
          left: -100px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #10b981, #06b6d4);
          bottom: -100px;
          right: -50px;
          animation-delay: -7s;
        }

        .orb-3 {
          width: 350px;
          height: 350px;
          background: linear-gradient(135deg, #f59e0b, #e11d48);
          top: 50%;
          right: 20%;
          animation-delay: -14s;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(50px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-30px, 30px) scale(0.9);
          }
        }

        /* Contenu principal */
        .hero-content {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease-out;
        }

        .hero-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-text-section {
          z-index: 2;
        }

        /* Badge Reussitess® */
        .brand-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          margin-bottom: 2rem;
          animation: slideInLeft 0.8s ease-out;
        }

        .badge-icon {
          font-size: 1.5rem;
          animation: spin 20s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .badge-text {
          font-weight: 700;
          font-size: 1.1rem;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .badge-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #22d3ee;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #22d3ee;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }

        /* Titre principal */
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          animation: slideInLeft 0.8s ease-out 0.2s backwards;
        }

        .title-line-1,
        .title-line-2 {
          display: block;
          background: linear-gradient(135deg, #ffffff, #e2e8f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .title-highlight {
          display: block;
          background: linear-gradient(135deg, #fbbf24, #f59e0b, #e11d48);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-top: 0.5rem;
          font-size: 2.5rem;
        }

        /* Slogan */
        .hero-slogan {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #cbd5e1;
          margin-bottom: 2.5rem;
          animation: slideInLeft 0.8s ease-out 0.4s backwards;
        }

        .slogan-icon {
          font-size: 1.5rem;
          margin-right: 0.5rem;
          vertical-align: middle;
        }

        .slogan-highlight {
          color: #22d3ee;
          font-weight: 600;
          display: block;
          margin-top: 0.5rem;
        }

        /* Call-to-Action */
        .cta-section {
          display: flex;
          gap: 1rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
          animation: slideInLeft 0.8s ease-out 0.6s backwards;
        }

        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, #e11d48, #f59e0b, #3b82f6);
          background-size: 200% 200%;
          color: white;
          padding: 1.25rem 2.5rem;
          border-radius: 50px;
          font-size: 1.2rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(225, 29, 72, 0.4);
          animation: gradientShift 5s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px rgba(225, 29, 72, 0.6);
        }

        .cta-arrow {
          transition: transform 0.3s ease;
        }

        .cta-primary:hover .cta-arrow {
          transform: translateX(5px);
        }

        .cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 1.25rem 2rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-2px);
        }

        /* Badges de confiance */
        .trust-badges {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          animation: slideInLeft 0.8s ease-out 0.8s backwards;
        }

        .trust-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
          font-size: 0.95rem;
        }

        .trust-icon {
          color: #22d3ee;
          font-weight: bold;
          font-size: 1.1rem;
        }

        /* Section visuelle */
        .hero-visual-section {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2;
        }

        /* Mascotte IA */
        .mascot-container {
          position: relative;
          animation: slideInRight 1s ease-out;
        }

        .mascot-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent);
          border-radius: 50%;
          animation: glowPulse 3s ease-in-out infinite;
        }

        @keyframes glowPulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.3;
          }
        }

        .mascot-image {
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 10px 30px rgba(59, 130, 246, 0.5));
        }

        /* Bot Avatar avec micro-interaction */
        .bot-avatar-container {
          position: absolute;
          bottom: -50px;
          right: -50px;
          transition: transform 0.1s ease-out;
          animation: slideInRight 1s ease-out 0.3s backwards;
        }

        .bot-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.3), transparent);
          border-radius: 50%;
          animation: glowPulse 2s ease-in-out infinite;
        }

        .bot-avatar {
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 5px 15px rgba(16, 185, 129, 0.5));
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .bot-avatar:hover {
          transform: scale(1.1);
        }

        .bot-message {
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.95);
          padding: 0.75rem 1.25rem;
          border-radius: 20px 20px 20px 0;
          margin-bottom: 10px;
          white-space: nowrap;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          animation: bounceIn 0.6s ease-out 1.5s backwards;
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: translateX(-50%) scale(0.5);
          }
          70% {
            transform: translateX(-50%) scale(1.1);
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) scale(1);
          }
        }

        .bot-message-text {
          color: #1e293b;
          font-weight: 600;
          font-size: 0.9rem;
        }

        /* Particules décoratives */
        .decorative-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          opacity: 0.6;
        }

        .particle-1 {
          background: #22d3ee;
          top: 20%;
          left: 10%;
          animation: floatParticle 8s ease-in-out infinite;
        }

        .particle-2 {
          background: #fbbf24;
          top: 60%;
          right: 15%;
          animation: floatParticle 10s ease-in-out infinite -2s;
        }

        .particle-3 {
          background: #8b5cf6;
          bottom: 30%;
          left: 20%;
          animation: floatParticle 12s ease-in-out infinite -4s;
        }

        .particle-4 {
          background: #10b981;
          top: 40%;
          right: 25%;
          animation: floatParticle 9s ease-in-out infinite -6s;
        }

        @keyframes floatParticle {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.6;
          }
          50% {
            transform: translate(20px, -20px);
            opacity: 0.3;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .title-highlight {
            font-size: 2rem;
          }

          .hero-visual-section {
            order: -1;
          }

          .bot-avatar-container {
            bottom: -30px;
            right: -30px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: auto;
            padding: 3rem 0;
          }

          .hero-title {
            font-size: 2rem;
          }

          .title-highlight {
            font-size: 1.5rem;
          }

          .hero-slogan {
            font-size: 1rem;
          }

          .cta-section {
            flex-direction: column;
          }

          .cta-primary,
          .cta-secondary {
            width: 100%;
            justify-content: center;
          }

          .mascot-image {
            width: 150px;
            height: 150px;
          }

          .bot-avatar {
            width: 80px;
            height: 80px;
          }

          .bot-avatar-container {
            bottom: -20px;
            right: -20px;
          }

          .trust-badges {
            flex-direction: column;
            gap: 0.75rem;
          }
        }
      `}</style>
    </section>
  )
}
