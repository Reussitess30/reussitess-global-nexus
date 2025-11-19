'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const TranslationContext = createContext()

export function TranslationProvider({ children }) {
  const [language, setLanguage] = useState('fr')
  const [userCountry, setUserCountry] = useState('')

  useEffect(() => {
    // Détection simplifiée du pays
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        setUserCountry(data.country_code)
        // Mapping pays -> langue
        const langMap = {
          'FR':'fr','BE':'fr','CA':'fr','CH':'fr',
          'US':'en','GB':'en','AU':'en','NZ':'en',
          'ES':'es','MX':'es','AR':'es','CO':'es',
          'DE':'de','AT':'de','IT':'it','PT':'pt',
          'BR':'pt','CN':'zh','JP':'ja','RU':'ru'
        }
        setLanguage(langMap[data.country_code] || 'en')
      })
      .catch(() => setLanguage('fr'))
  }, [])

  const translations = {
    fr: {
      home: "Accueil",
      boutiques: "Boutiques",
      welcome: "Bienvenue sur Reussitess Global Nexus",
      start: "Commencer",
      visitStore: "Visiter la Boutique"
    },
    en: {
      home: "Home", 
      boutiques: "Stores",
      welcome: "Welcome to Reussitess Global Nexus",
      start: "Get Started",
      visitStore: "Visit Store"
    },
    es: {
      home: "Inicio",
      boutiques: "Tiendas", 
      welcome: "Bienvenido a Reussitess Global Nexus",
      start: "Comenzar",
      visitStore: "Visitar Tienda"
    },
    de: {
      home: "Startseite",
      boutiques: "Geschäfte",
      welcome: "Willkommen bei Reussitess Global Nexus", 
      start: "Starten",
      visitStore: "Geschäft besuchen"
    }
  }

  const t = (key) => translations[language]?.[key] || key

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t, userCountry }}>
      {children}
    </TranslationContext.Provider>
  )
}

export const useTranslation = () => {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider')
  }
  return context
}
