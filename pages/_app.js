import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Désactiver clic droit
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };
    
    // Désactiver sélection de texte
    const handleSelectStart = (e) => {
      e.preventDefault();
      return false;
    };
    
    // Désactiver copie
    const handleCopy = (e) => {
      e.preventDefault();
      return false;
    };
    
    // Désactiver raccourcis clavier
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's')) ||
        (e.key === 'F12') ||
        (e.ctrlKey && e.shiftKey && e.key === 'I')
      ) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
