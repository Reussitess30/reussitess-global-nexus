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
    
    // Désactiver raccourcis clavier (avec exceptions pour l'accessibilité)
    const handleKeyDown = (e) => {
      // Bloquer F12 et outils développeur
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
      
      // Bloquer Ctrl+Shift+I (outils développeur)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
      }
      
      // Bloquer Ctrl+U (voir source)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
      }
      
      // Bloquer Ctrl+S (sauvegarder)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
      }
      
      // Bloquer Ctrl+C (copier) sauf dans les champs de formulaire
      // pour permettre aux utilisateurs de copier leurs propres données
      if (e.ctrlKey && e.key === 'c') {
        const target = e.target;
        const isFormField = target.tagName === 'INPUT' || 
                           target.tagName === 'TEXTAREA' || 
                           target.isContentEditable;
        if (!isFormField) {
          e.preventDefault();
          return false;
        }
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
