export default function AffiliateDisclaimer() {
  return (
    <>
      {/* Fixed Top Banner */}
      <div className="affiliate-banner-top">
        <div className="banner-content">
          <span className="banner-icon">⚠️</span>
          <p className="banner-text">
            <strong>Partenaire Amazon</strong> • En tant qu'Affiliée Amazon, je
            réalise un bénéfice sur les achats remplissant les conditions
            requises
          </p>
        </div>
      </div>

      {/* Bottom Disclaimer (kept for legal completeness) */}
      <div className="affiliate-disclaimer">
        <p>
          ⚠️ <strong>Avertissement :</strong> Ce site contient des liens
          d'affiliation Amazon. Nous pouvons recevoir une commission sur les
          achats effectués via ces liens, sans frais supplémentaires pour vous.
        </p>
      </div>

      <style jsx>{`
        /* Fixed Top Banner */
        .affiliate-banner-top {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          border-bottom: 3px solid #d97706;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .banner-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .banner-icon {
          font-size: 20px;
          animation: pulse 2s ease-in-out infinite;
        }

        .banner-text {
          margin: 0;
          color: #78350f;
          font-size: 14px;
          font-weight: 500;
          text-align: center;
          line-height: 1.4;
        }

        .banner-text strong {
          color: #451a03;
          font-weight: 700;
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        /* Push content below fixed banner */
        :global(body) {
          padding-top: 48px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .banner-content {
            padding: 10px 15px;
            flex-direction: column;
            gap: 8px;
          }

          .banner-text {
            font-size: 12px;
          }

          .banner-icon {
            font-size: 18px;
          }

          :global(body) {
            padding-top: 65px;
          }
        }

        /* Bottom disclaimer (existing) */
        .affiliate-disclaimer {
          background: #fef3c7;
          border-left: 4px solid #f59e0b;
          padding: 15px 20px;
          margin: 20px 0;
          border-radius: 8px;
          font-size: 14px;
          line-height: 1.6;
        }

        .affiliate-disclaimer p {
          margin: 0;
          color: #92400e;
        }

        .affiliate-disclaimer strong {
          color: #78350f;
        }
      `}</style>
    </>
  );
}
