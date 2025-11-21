'use client'
import { useEffect } from 'react'

// Liste centralisée des domaines Amazon légitimes
const AMAZON_DOMAINS = [
  'amazon.com', 'amazon.fr', 'amazon.de', 'amazon.co.uk',
  'amazon.it', 'amazon.es', 'amazon.ca', 'amazon.in',
  'amazon.nl', 'amazon.se', 'amazon.sg', 'amazon.com.au',
  'amazon.com.be', 'amazon.com.br'
]

export default function AntiCopyProtection() {
  useEffect(() => {
    let styleElement = null

    // Vérifier si une URL pointe vers un domaine Amazon légitime
    const isAmazonDomain = (url) => {
      try {
        const hostname = new URL(url).hostname.toLowerCase()
        return AMAZON_DOMAINS.some(domain => 
          hostname === domain || hostname === `www.${domain}`
        )
      } catch {
        return false
      }
    }

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
      if (e.target.tagName.toLowerCase() === 'a' && e.target.href) {
        if (isAmazonDomain(e.target.href)) {
          e.preventDefault()
          return false
        }
      }
    }

    // Désactiver les raccourcis clavier dangereux (sauf Ctrl+S pour accessibilité)
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase()
      // Ctrl+C, Ctrl+X, F12, DevTools shortcuts
      if (
        (e.ctrlKey && (key === 'c' || key === 'x' || key === 'u')) ||
        key === 'f12' ||
        (e.ctrlKey && e.shiftKey && (key === 'i' || key === 'j' || key === 'c'))
      ) {
        e.preventDefault()
        console.warn('🔒 Action bloquée - Protection activée')
        return false
      }
    }

    // Désactiver le glisser-déposer
    const handleDragStart = (e) => {
      const tagName = e.target.tagName.toLowerCase()
      if (tagName === 'a' || tagName === 'img') {
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

    // Générer les sélecteurs CSS dynamiquement
    const amazonSelectors = AMAZON_DOMAINS.flatMap(domain => [
      `a[href*="${domain}"]`,
      `a[href*="www.${domain}"]`
    ]).join(',\n      ')

    // Ajouter une protection CSS limitée pour ne pas impacter l'accessibilité
    styleElement = document.createElement('style')
    styleElement.textContent = `
      ${amazonSelectors} {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
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
