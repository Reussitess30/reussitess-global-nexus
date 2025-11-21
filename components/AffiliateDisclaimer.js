export default function AffiliateDisclaimer() {
  return (
    <div className="affiliate-disclaimer">
      <div className="disclaimer-content">
        <h3>📋 Avertissement Important - Amazon Associates</h3>
        <p>
          <strong>REUSSITESS® Global Nexus</strong> est un participant au Programme Partenaires d'Amazon EU et Amazon.com, 
          des programmes de publicité d'affiliation conçus pour permettre à des sites de percevoir une rémunération 
          grâce à la création de liens vers Amazon.fr, Amazon.com et sites Amazon associés.
        </p>
        <p>
          En tant que Partenaire Amazon, nous réalisons un bénéfice sur les achats qualifiés. 
          Les prix et la disponibilité des produits ne sont pas garantis et peuvent changer sans préavis.
        </p>
        <p className="ftc-compliance">
          ⚖️ <strong>Conformité FTC :</strong> Ce site contient des liens d'affiliation. 
          Nous pouvons recevoir une commission sur vos achats, sans frais supplémentaires pour vous.
        </p>
      </div>
      <style jsx>{`
        .affiliate-disclaimer {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          border: 2px solid #f59e0b;
          border-radius: 12px;
          padding: 20px 25px;
          margin: 30px 0;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .disclaimer-content h3 {
          color: #92400e;
          font-size: 18px;
          margin: 0 0 15px 0;
          font-weight: 700;
        }
        .disclaimer-content p {
          margin: 10px 0;
          color: #78350f;
          font-size: 14px;
          line-height: 1.8;
        }
        .disclaimer-content strong {
          color: #92400e;
          font-weight: 600;
        }
        .ftc-compliance {
          margin-top: 15px;
          padding-top: 15px;
          border-top: 1px solid #f59e0b;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .affiliate-disclaimer {
            padding: 15px 20px;
          }
          .disclaimer-content h3 {
            font-size: 16px;
          }
          .disclaimer-content p {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
}
