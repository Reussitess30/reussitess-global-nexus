'use client'
import { useEffect } from 'react'

export default function AntiCopyProtection() {
  useEffect(() => {
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

    // Désactiver la sélection de texte pour les liens d'affiliation
    const handleSelectStart = (e) => {
      if (e.target.tagName === 'A' && e.target.href.includes('amazon')) {
        e.preventDefault()
        return false
      }
    }

    // Désactiver les raccourcis clavier dangereux
    const handleKeyDown = (e) => {
      // Ctrl+C, Ctrl+X, Ctrl+U, Ctrl+S, F12
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'u' || e.key === 's')) ||
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

    // Ajouter une protection CSS
    const style = document.createElement('style')
    style.textContent = `
      * {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      input, textarea {
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
      }
      a[href*="amazon"] {
        pointer-events: auto;
        cursor: pointer;
      }
    `
    document.head.appendChild(style)

    // Nettoyage lors du démontage
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('copy', handleCopy)
      document.removeEventListener('cut', handleCopy)
      document.removeEventListener('selectstart', handleSelectStart)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('dragstart', handleDragStart)
      document.head.removeChild(style)
    }
  }, [])

  return null
}
