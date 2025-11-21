'use client'
import { useEffect } from 'react'

export default function AntiCopyProtection() {
  useEffect(() => {
    let styleElement = null

    // Désactiver le clic droit
    const handleContextMenu = (e) => {
      e.preventDefault()
      console.warn('🔒 Protection du contenu activée')
      return false
    }

    // Désactiver la copie
    const handleCopy = (e) => {
      e.preventDefault()
      console.warn('🔒 Copie désactivée - Contenu protégé')
      return false
    }

    // Désactiver la sélection de texte pour les liens d'affiliation uniquement
    const handleSelectStart = (e) => {
      if (e.target.tagName === 'A' && e.target.href.includes('amazon')) {
        e.preventDefault()
        return false
      }
    }

    // Désactiver les raccourcis clavier dangereux (sauf Ctrl+S pour accessibilité)
    const handleKeyDown = (e) => {
      // Ctrl+C, Ctrl+X, F12, DevTools shortcuts
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'u')) ||
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))
      ) {
        e.preventDefault()
        console.warn('🔒 Action bloquée - Protection activée')
        return false
      }
    }

    // Désactiver le glisser-déposer
    const handleDragStart = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'IMG') {
        e.preventDefault()
        return false
      }
    }

    // Ajouter les écouteurs d'événements
    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('copy', handleCopy)
    document.addEventListener('cut', handleCopy)
    document.addEventListener('selectstart', handleSelectStart)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('dragstart', handleDragStart)

    // Ajouter une protection CSS limitée pour ne pas impacter l'accessibilité
    styleElement = document.createElement('style')
    styleElement.textContent = `
      a[href*="amazon"] {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      a[href*="amazon"] {
        pointer-events: auto;
        cursor: pointer;
      }
      img {
        -webkit-user-drag: none;
        user-drag: none;
      }
    `
    document.head.appendChild(styleElement)

    // Nettoyage lors du démontage
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('copy', handleCopy)
      document.removeEventListener('cut', handleCopy)
      document.removeEventListener('selectstart', handleSelectStart)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('dragstart', handleDragStart)
      if (styleElement && styleElement.parentNode) {
        document.head.removeChild(styleElement)
      }
    }
  }, [])

  return null
}
