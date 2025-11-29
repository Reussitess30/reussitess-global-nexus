import { useState, useEffect } from 'react';

export default function PWAInstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Vérifier si déjà installé
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      setShowPrompt(false);
      return;
    }

    // Vérifier si l'utilisateur a déjà fermé la bannière
    const dismissed = localStorage.getItem('pwa-banner-dismissed');
    if (dismissed === 'true') {
      setShowPrompt(false);
      return;
    }

    // Sinon, afficher la bannière
    setShowPrompt(true);

    // Écouter l'événement d'installation
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) {
      // Si pas de prompt natif, rediriger vers la page PWA
      window.location.href = '/pwa-app';
      return;
    }
    
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setIsInstalled(true);
      setShowPrompt(false);
      localStorage.setItem('pwa-banner-dismissed', 'true');
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('pwa-banner-dismissed', 'true');
  };

  // Ne rien afficher si déjà installé ou si fermé
  if (!showPrompt || isInstalled) {
    return null;
  }

  return (
    <>
      <div className="pwa-banner">
        <div className="pwa-banner-content">
          <span className="pwa-banner-text">
            📱 Installez notre app pour un accès hors ligne
          </span>
          <div className="pwa-banner-buttons">
            <button onClick={handleInstall} className="pwa-install-btn-banner">
              Installer maintenant
            </button>
            <button onClick={handleDismiss} className="pwa-later-btn-banner">
              Plus tard
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pwa-banner {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1rem 2rem;
          text-align: center;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          animation: slideDown 0.5s ease-out;
        }

        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .pwa-banner-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto;
        }

        .pwa-banner-text {
          font-size: 1.2rem;
          font-weight: 600;
        }

        .pwa-banner-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .pwa-install-btn-banner {
          background: white;
          color: #667eea;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 25px;
          font-weight: bold;
          cursor: pointer;
          font-size: 1rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s;
        }

        .pwa-install-btn-banner:hover {
          transform: scale(1.05);
        }

        .pwa-later-btn-banner {
          background: transparent;
          color: white;
          border: 2px solid white;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: all 0.2s;
        }

        .pwa-later-btn-banner:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .pwa-banner {
            padding: 0.75rem 1rem;
          }

          .pwa-banner-text {
            font-size: 1rem;
          }

          .pwa-install-btn-banner,
          .pwa-later-btn-banner {
            padding: 0.6rem 1.5rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}
