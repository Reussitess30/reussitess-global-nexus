'use client'

import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function VisaUniversel() {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    pays: '',
    ville: '',
    domaine: '',
    niveau: '',
    besoin: '',
    contribution: ''
  })
  const [showVisa, setShowVisa] = useState(false)
  const [visaData, setVisaData] = useState(null)
  const [opportunities, setOpportunities] = useState([])

  const pays = [
    { code: 'GP', nom: 'Guadeloupe', emoji: '🇬🇵', continent: 'Caraïbes' },
    { code: 'FR', nom: 'France', emoji: '🇫🇷', continent: 'Europe' },
    { code: 'MQ', nom: 'Martinique', emoji: '🇲🇶', continent: 'Caraïbes' },
    { code: 'GF', nom: 'Guyane', emoji: '🇬🇫', continent: 'Amérique du Sud' },
    { code: 'RE', nom: 'Réunion', emoji: '🇷🇪', continent: 'Océan Indien' },
    { code: 'US', nom: 'États-Unis', emoji: '🇺🇸', continent: 'Amérique du Nord' },
    { code: 'CA', nom: 'Canada', emoji: '🇨🇦', continent: 'Amérique du Nord' },
    { code: 'GB', nom: 'Royaume-Uni', emoji: '🇬🇧', continent: 'Europe' },
    { code: 'DE', nom: 'Allemagne', emoji: '🇩🇪', continent: 'Europe' },
    { code: 'ES', nom: 'Espagne', emoji: '🇪🇸', continent: 'Europe' },
    { code: 'IT', nom: 'Italie', emoji: '🇮🇹', continent: 'Europe' },
    { code: 'BE', nom: 'Belgique', emoji: '🇧🇪', continent: 'Europe' },
    { code: 'CH', nom: 'Suisse', emoji: '🇨🇭', continent: 'Europe' },
    { code: 'BR', nom: 'Brésil', emoji: '🇧🇷', continent: 'Amérique du Sud' },
    { code: 'MA', nom: 'Maroc', emoji: '🇲🇦', continent: 'Afrique' },
    { code: 'DZ', nom: 'Algérie', emoji: '🇩🇿', continent: 'Afrique' },
    { code: 'TN', nom: 'Tunisie', emoji: '🇹🇳', continent: 'Afrique' },
    { code: 'SN', nom: 'Sénégal', emoji: '🇸🇳', continent: 'Afrique' },
    { code: 'CI', nom: 'Côte d\'Ivoire', emoji: '🇨🇮', continent: 'Afrique' },
    { code: 'CM', nom: 'Cameroun', emoji: '🇨🇲', continent: 'Afrique' },
    { code: 'HT', nom: 'Haïti', emoji: '🇭🇹', continent: 'Caraïbes' },
    { code: 'IN', nom: 'Inde', emoji: '🇮🇳', continent: 'Asie' },
    { code: 'AU', nom: 'Australie', emoji: '🇦🇺', continent: 'Océanie' },
    { code: 'SG', nom: 'Singapour', emoji: '🇸🇬', continent: 'Asie' },
    { code: 'SE', nom: 'Suède', emoji: '🇸🇪', continent: 'Europe' },
    { code: 'NL', nom: 'Pays-Bas', emoji: '🇳🇱', continent: 'Europe' }
  ]

  const domaines = [
    { value: 'tech', label: 'Technologie & Innovation', icon: '💻' },
    { value: 'business', label: 'Entrepreneuriat & Business', icon: '💼' },
    { value: 'education', label: 'Éducation & Enseignement', icon: '📚' },
    { value: 'sante', label: 'Santé & Bien-être', icon: '⚕️' },
    { value: 'art', label: 'Arts & Créativité', icon: '🎨' },
    { value: 'finance', label: 'Finance & Investissement', icon: '💰' },
    { value: 'agriculture', label: 'Agriculture & Environnement', icon: '🌱' },
    { value: 'tourisme', label: 'Tourisme & Hôtellerie', icon: '✈️' },
    { value: 'social', label: 'Impact Social', icon: '🤝' },
    { value: 'sport', label: 'Sport & Performance', icon: '⚽' }
  ]

  const niveaux = [
    { value: 'debutant', label: 'Débutant - Je démarre', icon: '🌱' },
    { value: 'intermediaire', label: 'Intermédiaire - En progression', icon: '📈' },
    { value: 'avance', label: 'Avancé - Expert', icon: '🏆' },
    { value: 'professionnel', label: 'Professionnel établi', icon: '💎' }
  ]

  const besoins = [
    { value: 'mentorat', label: 'Mentorat & Accompagnement', icon: '🎓' },
    { value: 'financement', label: 'Financement & Investissement', icon: '💵' },
    { value: 'formation', label: 'Formation & Certification', icon: '📜' },
    { value: 'emploi', label: 'Opportunité d\'emploi', icon: '💼' },
    { value: 'reseau', label: 'Réseau professionnel', icon: '🌐' },
    { value: 'partenariat', label: 'Partenariat business', icon: '🤝' },
    { value: 'visibilite', label: 'Visibilité & Marketing', icon: '📢' },
    { value: 'technologie', label: 'Outils & Technologie', icon: '🛠️' }
  ]

  const genererNumeroVisa = () => {
    const date = new Date()
    const year = date.getFullYear()
    const random = Math.floor(Math.random() * 999999).toString().padStart(6, '0')
    return `VU-971-${year}-${random}`
  }

  const genererOpportunites = (pays, domaine, besoin) => {
    const opportunitesGlobales = {
      tech: [
        { titre: "Google Developer Scholarship", type: "Formation gratuite", lien: "https://www.google.com/", global: true },
        { titre: "GitHub Campus Program", type: "Outils gratuits", lien: "https://education.github.com/", global: true },
        { titre: "AWS Activate", type: "Crédits cloud gratuits", lien: "https://aws.amazon.com/activate/", global: true }
      ],
      business: [
        { titre: "Tony Elumelu Foundation", type: "Financement $5000", lien: "https://www.tonyelumelufoundation.org/", global: true },
        { titre: "Seedstars Accelerator", type: "Programme accélération", lien: "https://www.seedstars.com/", global: true },
        { titre: "Visa Everywhere Initiative", type: "Compétition startup", lien: "https://www.visa.com/everywhere-initiative/", global: true }
      ],
      education: [
        { titre: "Chevening Scholarships", type: "Bourse UK complète", lien: "https://www.chevening.org/", global: true },
        { titre: "Fulbright Program", type: "Bourse USA", lien: "https://foreign.fulbrightonline.org/", global: true },
        { titre: "Coursera Financial Aid", type: "Cours gratuits certifiés", lien: "https://www.coursera.org/", global: true }
      ],
      sante: [
        { titre: "WHO Young Leaders", type: "Programme leadership", lien: "https://www.who.int/", global: true },
        { titre: "Gates Foundation Grants", type: "Financement santé", lien: "https://www.gatesfoundation.org/", global: true }
      ],
      finance: [
        { titre: "Kiva Microloan", type: "Micro-crédit 0% intérêt", lien: "https://www.kiva.org/", global: true },
        { titre: "Accion Opportunity Fund", type: "Prêt entrepreneurs", lien: "https://aofund.org/", global: true }
      ]
    }

    return opportunitesGlobales[domaine] || opportunitesGlobales.business
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const paysData = pays.find(p => p.code === formData.pays)
    const domaineData = domaines.find(d => d.value === formData.domaine)
    const niveauData = niveaux.find(n => n.value === formData.niveau)
    const besoinData = besoins.find(b => b.value === formData.besoin)

    const visa = {
      ...formData,
      numeroVisa: genererNumeroVisa(),
      pays: paysData,
      domaine: domaineData,
      niveau: niveauData,
      besoin: besoinData,
      dateEmission: new Date().toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      validiteAnnees: 5
    }

    setVisaData(visa)
    setShowVisa(true)
    setOpportunities(genererOpportunites(formData.pays, formData.domaine, formData.besoin))

    // Enregistrer dans l'API
    try {
      await fetch('/api/visa/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(visa)
      })
    } catch (error) {
      console.error('Erreur:', error)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Layout>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        padding: '5rem 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '6rem', marginBottom: '1rem' }}>🌍</div>
          
          <h1 style={{
            fontSize: 'clamp(2rem, 6vw, 4.5rem)',
            fontWeight: '900',
            color: 'white',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            textShadow: '0 4px 30px rgba(0,0,0,0.3)'
          }}>
            VISA UNIVERSEL DE RÉUSSITE
          </h1>

          <div style={{
            fontSize: '1.8rem',
            color: 'white',
            fontWeight: '700',
            marginBottom: '1rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.2)'
          }}>
            REUSSITESS®971
          </div>

          <p style={{
            fontSize: '1.5rem',
            color: 'white',
            fontWeight: '600',
            marginBottom: '2rem',
            maxWidth: '900px',
            margin: '0 auto 2rem',
            lineHeight: '1.6',
            opacity: 0.95
          }}>
            🇬🇵 Né en Guadeloupe, Terre de Champions<br/>
            Connectant le monde entier aux opportunités de réussite
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '3rem auto 0',
            padding: '0 2rem'
          }}>
            {[
              { icon: '🎓', num: '10K+', label: 'Bourses Disponibles' },
              { icon: '💼', num: '50K+', label: 'Opportunités Emploi' },
              { icon: '🤝', num: '5K+', label: 'Mentors Actifs' },
              { icon: '💰', num: '100M+', label: 'Fonds Accessibles' }
            ].map((stat, i) => (
              <div key={i} style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                padding: '2rem',
                borderRadius: '20px',
                border: '2px solid rgba(255, 255, 255, 0.3)'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                <div style={{ fontSize: '2rem', fontWeight: '900', color: 'white' }}>{stat.num}</div>
                <div style={{ fontSize: '1rem', color: 'white', opacity: 0.9, marginTop: '0.5rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {!showVisa ? (
        /* Formulaire */
        <div style={{
          maxWidth: '900px',
          margin: '5rem auto',
          padding: '0 2rem'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            borderRadius: '30px',
            padding: '3rem',
            boxShadow: '0 30px 90px rgba(0,0,0,0.3)',
            border: '3px solid rgba(102, 126, 234, 0.3)'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '900',
              color: '#667eea',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              🌟 Obtenez Votre VISA UNIVERSEL
            </h2>

            <p style={{
              textAlign: 'center',
              color: '#94a3b8',
              fontSize: '1.2rem',
              marginBottom: '3rem',
              lineHeight: '1.6'
            }}>
              Accédez à un réseau mondial d'opportunités<br/>
              <strong style={{ color: '#ffd700' }}>Positivité à l'infini • Boudoum 🇬🇵</strong>
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                
                {/* Prénom */}
                <div>
                  <label style={{ display: 'block', color: '#94a3b8', fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    📝 Prénom
                  </label>
                  <input
                    type="text"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                    placeholder="Votre prénom..."
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontSize: '1.1rem',
                      borderRadius: '15px',
                      border: '2px solid rgba(102, 126, 234, 0.3)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Nom */}
                <div>
                  <label style={{ display: 'block', color: '#94a3b8', fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    📝 Nom
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom..."
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontSize: '1.1rem',
                      borderRadius: '15px',
                      border: '2px solid rgba(102, 126, 234, 0.3)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Email */}
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', color: '#94a3b8', fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    📧 Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre@email.com"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontSize: '1.1rem',
                      borderRadius: '15px',
                      border: '2px solid rgba(102, 126, 234, 0.3)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Pays */}
                <div>
                  <label style={{ display: 'block', color: '#94a3b8', fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    🌍 Pays
                  </label>
                  <select
                    name="pays"
                    value={formData.pays}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontSize: '1.1rem',
                      borderRadius: '15px',
                      border: '2px solid rgba(102, 126, 234, 0.3)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="">Sélectionnez...</option>
                    {pays.map(p => (
                      <option key={p.code} value={p.code} style={{ background: '#1e293b' }}>
                        {p.emoji} {p.nom}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Ville */}
                <div>
                  <label style={{ display: 'block', color: '#94a3b8', fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    🏙️ Ville
                  </label>
                  <input
                    type="text"
                    name="ville"
                    value={formData.ville}
                    onChange={handleChange}
                    required
                    placeholder="Votre ville..."
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontSize: '1.1rem',
                      borderRadius: '15px',
                      border: '2px solid rgba(102, 126, 234, 0.3)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Domaine */}
                <div>
                  <label style={{ display: 'block', color: '#94a3b8', fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    💼 Domaine d'expertise
                  </label>
                  <select
                    name="domaine"
                    value={formData.domaine}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontSize: '1.1rem',
                      borderRadius: '15px',
                      border: '2px solid rgba(102, 126, 234, 0.3)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="">Sélectionnez...</option>
                    {domaines.map(d => (
                      <option key={d.value} value={d.value} style={{ background: '#1e293b' }}>
                        {d.icon} {d.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Niveau */}
                <div>
                  <label style={{ display: 'block', color: '#94a3b8', fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    📊 Niveau d'expérience
                  </label>
                  <select
                    name="niveau"
                    value={formData.niveau}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontSize: '1.1rem',
                      borderRadius: '15px',
                      border: '2px solid rgba(102, 126, 234, 0.3)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="">Sélectionnez...</option>
                    {niveaux.map(n => (
                      <option key={n.value} value={n.value} style={{ background: '#1e293b' }}>
                        {n.icon} {n.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Besoin */}
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', color: '#94a3b8', fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    🎯 Besoin principal
                  </label>
                  <select
                    name="besoin"
                    value={formData.besoin}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontSize: '1.1rem',
                      borderRadius: '15px',
                      border: '2px solid rgba(102, 126, 234, 0.3)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="">Sélectionnez...</option>
                    {besoins.map(b => (
                      <option key={b.value} value={b.value} style={{ background: '#1e293b' }}>
                        {b.icon} {b.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Contribution */}
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', color: '#94a3b8', fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                    💫 Comment pouvez-vous aider la communauté ?
                  </label>
                  <textarea
                    name="contribution"
                    value={formData.contribution}
                    onChange={handleChange}
                    required
                    placeholder="Partagez vos compétences, votre expérience..."
                    rows="4"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontSize: '1.1rem',
                      borderRadius: '15px',
                      border: '2px solid rgba(102, 126, 234, 0.3)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '1.5rem',
                  fontSize: '1.4rem',
                  fontWeight: '900',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  boxShadow: '0 10px 40px rgba(102, 126, 234, 0.4)',
                  transition: 'all 0.3s ease',
                  marginTop: '2rem'
                }}
              >
                🌍 Obtenir Mon VISA UNIVERSEL
              </button>
            </form>
          </div>
        </div>
      ) : (
        /* Affichage du VISA + Opportunités */
        <div style={{ maxWidth: '1200px', margin: '5rem auto', padding: '0 2rem' }}>
          
          {/* VISA Card */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '30px',
            padding: '3rem',
            marginBottom: '3rem',
            boxShadow: '0 30px 90px rgba(102, 126, 234, 0.4)',
            border: '5px solid rgba(255, 255, 255, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '300px',
              height: '300px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              filter: 'blur(60px)'
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                <div>
                  <div style={{ fontSize: '1.5rem', color: 'white', fontWeight: '700', marginBottom: '0.5rem' }}>
                    VISA UNIVERSEL DE RÉUSSITE
                  </div>
                  <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                    REUSSITESS®971 • Guadeloupe Terre de Champions
                  </div>
                </div>
                <div style={{ fontSize: '4rem' }}>🌍</div>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                padding: '2rem',
                borderRadius: '20px',
                marginBottom: '2rem'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
                  {visaData?.pays?.emoji}
                </div>
                <h2 style={{
                  fontSize: '2.5rem',
                  fontWeight: '900',
                  color: 'white',
                  textAlign: 'center',
                  marginBottom: '0.5rem'
                }}>
                  {visaData?.prenom} {visaData?.nom}
                </h2>
                <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem' }}>
                  {visaData?.ville}, {visaData?.pays?.nom}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', color: 'white' }}>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>N° VISA</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '700' }}>{visaData?.numeroVisa}</div>
                </div>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>DOMAINE</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '700' }}>{visaData?.domaine?.icon} {visaData?.domaine?.label}</div>
                </div>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>NIVEAU</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '700' }}>{visaData?.niveau?.icon} {visaData?.niveau?.label}</div>
                </div>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>ÉMIS LE</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '700' }}>{visaData?.dateEmission}</div>
                </div>
              </div>

              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: 'rgba(255, 215, 0, 0.2)',
                borderRadius: '15px',
                textAlign: 'center',
                border: '2px solid rgba(255, 215, 0, 0.4)'
              }}>
                <div style={{ fontSize: '1.3rem', fontWeight: '700', color: '#ffd700', marginBottom: '0.5rem' }}>
                  ✨ POSITIVITÉ À L'INFINI • BOUDOUM 🇬🇵 ✨
                </div>
                <div style={{ color: 'white', fontSize: '1rem' }}>
                  Validité : {visaData?.validiteAnnees} ans • Accès illimité aux opportunités mondiales
                </div>
              </div>
            </div>
          </div>

          {/* Opportunités disponibles */}
          <div>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '900',
              color: '#667eea',
              textAlign: 'center',
              marginBottom: '3rem'
            }}>
              🎯 Vos Opportunités Personnalisées
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {opportunities.map((opp, index) => (
                <div key={index} style={{
                  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                  padding: '2rem',
                  borderRadius: '20px',
                  border: '2px solid rgba(102, 126, 234, 0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#667eea', marginBottom: '1rem' }}>
                    {opp.titre}
                  </h3>
                  <div style={{
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    background: 'rgba(102, 126, 234, 0.2)',
                    borderRadius: '20px',
                    color: '#94a3b8',
                    fontSize: '0.9rem',
                    marginBottom: '1.5rem'
                  }}>
                    {opp.type}
                  </div>
                  <a
                    href={opp.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      padding: '1rem',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      textAlign: 'center',
                      borderRadius: '50px',
                      textDecoration: 'none',
                      fontWeight: '700',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    🚀 Postuler maintenant
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Boutons d'action */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '3rem'
          }}>
            <button
              onClick={() => alert('Fonction téléchargement VISA en PDF à venir')}
              style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                boxShadow: '0 5px 15px rgba(16, 185, 129, 0.3)'
              }}
            >
              📥 Télécharger Mon VISA
            </button>

            <button
              onClick={() => {
                const text = `🌍 J'ai obtenu mon VISA UNIVERSEL DE RÉUSSITE REUSSITESS®971 ! 🇬🇵\nDomaine: ${visaData?.domaine?.label}\n#REUSSITESS971 #VisaUniversel #GuadeloupeTerreDeChampions #PositiviteInfini`
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank')
              }}
              style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #1da1f2 0%, #0d8bd9 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                boxShadow: '0 5px 15px rgba(29, 161, 242, 0.3)'
              }}
            >
              🐦 Partager sur Twitter
            </button>

            <Link
              href="/"
              style={{
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: '0 5px 15px rgba(102, 126, 234, 0.3)'
              }}
            >
              🏠 Retour à l'accueil
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        input:focus, select:focus, textarea:focus {
          border-color: #667eea !important;
          box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
        }
      `}</style>
    </Layout>
  )
}
