'use client'
import { useState, useEffect } from 'react'

export default function VisitorCounter() {
  const [visitorData, setVisitorData] = useState({
    totalVisits: 0,
    country: 'Chargement...',
    countryFlag: '🌍',
    city: '',
    region: '',
    ip: '',
    todayVisits: 0,
    uniqueCountries: 0,
    isLoading: true
  })

  const [recentVisitors, setRecentVisitors] = useState([])
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    // Récupérer les données de géolocalisation
    const fetchVisitorData = async () => {
      try {
        // Utiliser une API gratuite pour la géolocalisation
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()

        // Obtenir le drapeau du pays
        const countryFlags = {
          'FR': '🇫🇷', 'US': '🇺🇸', 'GB': '🇬🇧', 'DE': '🇩🇪', 'IT': '🇮🇹',
          'ES': '🇪🇸', 'CA': '🇨🇦', 'AU': '🇦🇺', 'BR': '🇧🇷', 'IN': '🇮🇳',
          'NL': '🇳🇱', 'SE': '🇸🇪', 'BE': '🇧🇪', 'SG': '🇸🇬', 'MQ': '🇲🇶',
          'GP': '🇬🇵', 'GF': '🇬🇫', 'CH': '🇨🇭', 'JP': '🇯🇵', 'CN': '🇨🇳',
          'MX': '🇲🇽', 'AR': '🇦🇷', 'PT': '🇵🇹', 'PL': '🇵🇱', 'RU': '🇷🇺'
        }

        const flag = countryFlags[data.country_code] || '🌍'

        // Gérer le compteur de visites (localStorage)
        const storageKey = 'reussitess_visits'
        const visitorsKey = 'reussitess_visitors'
        const todayKey = `reussitess_today_${new Date().toDateString()}`
        const countriesKey = 'reussitess_countries'

        // Total des visites
        let totalVisits = parseInt(localStorage.getItem(storageKey) || '0')
        totalVisits += 1
        localStorage.setItem(storageKey, totalVisits.toString())

        // Visites du jour
        let todayVisits = parseInt(localStorage.getItem(todayKey) || '0')
        todayVisits += 1
        localStorage.setItem(todayKey, todayVisits.toString())

        // Pays uniques
        let countries = JSON.parse(localStorage.getItem(countriesKey) || '[]')
        if (!countries.includes(data.country_name)) {
          countries.push(data.country_name)
          localStorage.setItem(countriesKey, JSON.stringify(countries))
        }

        // Visiteurs récents
        let visitors = JSON.parse(localStorage.getItem(visitorsKey) || '[]')
        const newVisitor = {
          country: data.country_name,
          flag: flag,
          city: data.city,
          time: new Date().toLocaleString('fr-FR'),
          countryCode: data.country_code
        }
        visitors.unshift(newVisitor)
        visitors = visitors.slice(0, 10) // Garder seulement les 10 derniers
        localStorage.setItem(visitorsKey, JSON.stringify(visitors))
        setRecentVisitors(visitors)

        setVisitorData({
          totalVisits: totalVisits,
          country: data.country_name || 'Inconnu',
          countryFlag: flag,
          city: data.city || '',
          region: data.region || '',
          ip: data.ip || '',
          todayVisits: todayVisits,
          uniqueCountries: countries.length,
          isLoading: false
        })
      } catch (error) {
        console.error('Erreur géolocalisation:', error)
        // Fallback en cas d'erreur
        let totalVisits = parseInt(localStorage.getItem('reussitess_visits') || '0')
        totalVisits += 1
        localStorage.setItem('reussitess_visits', totalVisits.toString())
        
        setVisitorData({
          totalVisits: totalVisits,
          country: 'Non disponible',
          countryFlag: '🌍',
          city: '',
          region: '',
          ip: '',
          todayVisits: 0,
          uniqueCountries: 0,
          isLoading: false
        })
      }
    }

    fetchVisitorData()
  }, [])

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      color: 'white',
      padding: '15px 20px',
      boxShadow: '0 -4px 20px rgba(0,0,0,0.3)',
      zIndex: 997,
      borderTop: '3px solid #10b981'
    }}>
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '15px'
      }}>
        {/* Informations principales */}
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', alignItems: 'center' }}>
          {/* Visiteur actuel */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px',
            background: 'rgba(16, 185, 129, 0.2)',
            padding: '8px 15px',
            borderRadius: '10px',
            border: '2px solid rgba(16, 185, 129, 0.4)'
          }}>
            <span style={{ fontSize: '24px' }}>{visitorData.countryFlag}</span>
            <div>
              <div style={{ fontSize: '11px', opacity: 0.8, fontWeight: '600' }}>Vous visitez depuis:</div>
              <div style={{ fontSize: '14px', fontWeight: '700' }}>
                {visitorData.isLoading ? 'Chargement...' : `${visitorData.city ? visitorData.city + ', ' : ''}${visitorData.country}`}
              </div>
            </div>
          </div>

          {/* Total visites */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            padding: '8px 15px',
            background: 'rgba(59, 130, 246, 0.2)',
            borderRadius: '10px',
            border: '2px solid rgba(59, 130, 246, 0.4)'
          }}>
            <span style={{ fontSize: '20px' }}>👥</span>
            <div>
              <div style={{ fontSize: '11px', opacity: 0.8, fontWeight: '600' }}>Total Visites</div>
              <div style={{ fontSize: '16px', fontWeight: '800', color: '#60a5fa' }}>
                {visitorData.totalVisits.toLocaleString('fr-FR')}
              </div>
            </div>
          </div>

          {/* Visites du jour */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            padding: '8px 15px',
            background: 'rgba(251, 191, 36, 0.2)',
            borderRadius: '10px',
            border: '2px solid rgba(251, 191, 36, 0.4)'
          }}>
            <span style={{ fontSize: '20px' }}>📊</span>
            <div>
              <div style={{ fontSize: '11px', opacity: 0.8, fontWeight: '600' }}>Aujourd'hui</div>
              <div style={{ fontSize: '16px', fontWeight: '800', color: '#fbbf24' }}>
                {visitorData.todayVisits}
              </div>
            </div>
          </div>

          {/* Pays uniques */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            padding: '8px 15px',
            background: 'rgba(239, 68, 68, 0.2)',
            borderRadius: '10px',
            border: '2px solid rgba(239, 68, 68, 0.4)'
          }}>
            <span style={{ fontSize: '20px' }}>🌍</span>
            <div>
              <div style={{ fontSize: '11px', opacity: 0.8, fontWeight: '600' }}>Pays Uniques</div>
              <div style={{ fontSize: '16px', fontWeight: '800', color: '#ef4444' }}>
                {visitorData.uniqueCountries}
              </div>
            </div>
          </div>
        </div>

        {/* Bouton détails */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          style={{
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            border: 'none',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '13px',
            fontWeight: '700',
            transition: 'all 0.3s',
            boxShadow: '0 4px 10px rgba(16, 185, 129, 0.3)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)'
            e.currentTarget.style.boxShadow = '0 6px 15px rgba(16, 185, 129, 0.5)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = '0 4px 10px rgba(16, 185, 129, 0.3)'
          }}
        >
          {showDetails ? '▼ Masquer Détails' : '▲ Voir Détails'}
        </button>
      </div>

      {/* Panneau de détails */}
      {showDetails && (
        <div style={{
          marginTop: '15px',
          padding: '20px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '12px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <h3 style={{ 
            fontSize: '16px', 
            marginBottom: '15px', 
            color: '#10b981',
            fontWeight: '800'
          }}>
            📍 Visiteurs Récents ({recentVisitors.length})
          </h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '10px',
            maxHeight: '200px',
            overflowY: 'auto'
          }}>
            {recentVisitors.length > 0 ? recentVisitors.map((visitor, index) => (
              <div 
                key={index}
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  padding: '12px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
              >
                <span style={{ fontSize: '24px' }}>{visitor.flag}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: '700' }}>
                    {visitor.city ? `${visitor.city}, ` : ''}{visitor.country}
                  </div>
                  <div style={{ fontSize: '11px', opacity: 0.7 }}>
                    {visitor.time}
                  </div>
                </div>
              </div>
            )) : (
              <p style={{ opacity: 0.7, fontSize: '13px' }}>Aucun visiteur récent enregistré</p>
            )}
          </div>

          <div style={{ 
            marginTop: '15px', 
            paddingTop: '15px', 
            borderTop: '1px solid rgba(255,255,255,0.2)',
            fontSize: '12px',
            opacity: 0.8,
            textAlign: 'center'
          }}>
            💡 Les données sont stockées localement dans votre navigateur • 
            Service de géolocalisation: ipapi.co
          </div>
        </div>
      )}
    </div>
  )
}
