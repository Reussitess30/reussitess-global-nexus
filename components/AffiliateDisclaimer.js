export default function AffiliateDisclaimer() {
  return (
    <div className="affiliate-disclaimer">
      <p>
        ⚠️ <strong>Avertissement :</strong> Ce site contient des liens d'affiliation Amazon. 
        Nous pouvons recevoir une commission sur les achats effectués via ces liens, 
        sans frais supplémentaires pour vous.
      </p>
      <style jsx>{`
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
    </div>
  );
}
