import { useState } from 'react'
import Link from 'next/link'

export default function BibliothequeOutremer() {
  const [selectedTerritory, setSelectedTerritory] = useState('all')

  // Définition des territoires avec leurs ressources
  const territories = {
    guadeloupe: {
      name: 'Guadeloupe',
      emoji: '🇬🇵',
      color: '#3b82f6',
      resources: [
        {
          category: 'Culture',
          icon: '🎭',
          items: [
            { title: 'Culture Guadeloupéenne', link: '/ressources/culture-guadeloupe', type: 'Article' },
            { title: 'Musique Gwoka', link: '/ressources/culture-guadeloupe#gwoka', type: 'Culture' },
            { title: 'Patrimoine Local', link: '/ressources/culture-guadeloupe#patrimoine', type: 'Histoire' }
          ]
        },
        {
          category: 'Histoire',
          icon: '📚',
          items: [
            { title: 'Histoire de la Guadeloupe', link: '/ressources/culture-guadeloupe#histoire', type: 'Article' },
            { title: 'Personnalités Historiques', link: '/ressources/culture-guadeloupe#personnalites', type: 'Histoire' }
          ]
        },
        {
          category: 'Langue',
          icon: '🗣️',
          items: [
            { title: 'Créole Guadeloupéen', link: '/ressources/culture-guadeloupe#creole', type: 'Langue' },
            { title: 'Expressions Locales', link: '/ressources/culture-guadeloupe#expressions', type: 'Langue' }
          ]
        },
        {
          category: 'Business',
          icon: '💼',
          items: [
            { title: 'Entreprendre en Guadeloupe', link: '/outils#business-guadeloupe', type: 'Outil' },
            { title: 'Opportunités Économiques', link: '/outils#opportunites-guadeloupe', type: 'Business' }
          ]
        }
      ]
    },
    martinique: {
      name: 'Martinique',
      emoji: '🇲🇶',
      color: '#10b981',
      resources: [
        {
          category: 'Patrimoine',
          icon: '🏛️',
          items: [
            { title: 'Patrimoine Martiniquais', link: '/ressources/patrimoine-martinique', type: 'Article' },
            { title: 'Sites Historiques', link: '/ressources/patrimoine-martinique#sites', type: 'Histoire' },
            { title: 'Architecture Créole', link: '/ressources/patrimoine-martinique#architecture', type: 'Culture' }
          ]
        },
        {
          category: 'Culture',
          icon: '🎨',
          items: [
            { title: 'Art Martiniquais', link: '/ressources/patrimoine-martinique#art', type: 'Art' },
            { title: 'Musique Traditionnelle', link: '/ressources/patrimoine-martinique#musique', type: 'Musique' },
            { title: 'Danses Locales', link: '/ressources/patrimoine-martinique#danse', type: 'Culture' }
          ]
        },
        {
          category: 'Littérature',
          icon: '📖',
          items: [
            { title: 'Écrivains Martiniquais', link: '/ressources/patrimoine-martinique#litterature', type: 'Culture' },
            { title: 'Aimé Césaire', link: '/ressources/patrimoine-martinique#cesaire', type: 'Histoire' }
          ]
        },
        {
          category: 'Actualités',
          icon: '📰',
          items: [
            { title: 'Actualités Locales', link: '/ressources/patrimoine-martinique#actualites', type: 'Actualités' },
            { title: 'Événements Culturels', link: '/ressources/patrimoine-martinique#evenements', type: 'Culture' }
          ]
        }
      ]
    },
    guyane: {
      name: 'Guyane',
      emoji: '🇬🇫',
      color: '#f59e0b',
      resources: [
        {
          category: 'Nature & Biodiversité',
          icon: '🌿',
          items: [
            { title: 'Forêt Amazonienne', link: '/ressources/nature-guyane', type: 'Article' },
            { title: 'Faune & Flore', link: '/ressources/nature-guyane#biodiversite', type: 'Nature' },
            { title: 'Parcs Naturels', link: '/ressources/nature-guyane#parcs', type: 'Nature' }
          ]
        },
        {
          category: 'Cultures Autochtones',
          icon: '🏞️',
          items: [
            { title: 'Peuples Amérindiens', link: '/ressources/cultures-guyane', type: 'Culture' },
            { title: 'Langues Autochtones', link: '/ressources/cultures-guyane#langues', type: 'Langue' },
            { title: 'Traditions', link: '/ressources/cultures-guyane#traditions', type: 'Culture' }
          ]
        },
        {
          category: 'Spatial',
          icon: '🚀',
          items: [
            { title: 'Centre Spatial Guyanais', link: '/ressources/spatial-guyane', type: 'Article' },
            { title: 'Histoire du Spatial', link: '/ressources/spatial-guyane#histoire', type: 'Histoire' }
          ]
        },
        {
          category: 'Développement',
          icon: '🏗️',
          items: [
            { title: 'Projets de Développement', link: '/outils#developpement-guyane', type: 'Business' },
            { title: 'Outils Éducatifs', link: '/outils#education-guyane', type: 'Outil' }
          ]
        }
      ]
    },
    reunion: {
      name: 'Réunion',
      emoji: '🇷🇪',
      color: '#e11d48',
      resources: [
        {
          category: 'Patrimoine UNESCO',
          icon: '🏔️',
          items: [
            { title: 'Cirques & Pitons', link: '/ressources/patrimoine-reunion', type: 'Article' },
            { title: 'Patrimoine Naturel', link: '/ressources/patrimoine-reunion#nature', type: 'Nature' },
            { title: 'Sites Protégés', link: '/ressources/patrimoine-reunion#sites', type: 'Nature' }
          ]
        },
        {
          category: 'Cultures Créoles',
          icon: '🎵',
          items: [
            { title: 'Maloya & Séga', link: '/ressources/musique-reunion', type: 'Musique' },
            { title: 'Danses Traditionnelles', link: '/ressources/musique-reunion#danses', type: 'Culture' },
            { title: 'Créole Réunionnais', link: '/ressources/langue-reunion', type: 'Langue' }
          ]
        },
        {
          category: 'Gastronomie',
          icon: '🍛',
          items: [
            { title: 'Cuisine Réunionnaise', link: '/ressources/gastronomie-reunion', type: 'Culture' },
            { title: 'Recettes Traditionnelles', link: '/ressources/gastronomie-reunion#recettes', type: 'Culture' }
          ]
        },
        {
          category: 'Innovation',
          icon: '💡',
          items: [
            { title: 'Technologies Vertes', link: '/outils#innovation-reunion', type: 'Business' },
            { title: 'Startups Locales', link: '/outils#startups-reunion', type: 'Business' }
          ]
        }
      ]
    },
    mayotte: {
      name: 'Mayotte',
      emoji: '🇾🇹',
      color: '#8b5cf6',
      resources: [
        {
          category: 'Culture Mahoraise',
          icon: '🏝️',
          items: [
            { title: 'Traditions Mahoraises', link: '/ressources/culture-mayotte', type: 'Culture' },
            { title: 'Langue Shimaoré', link: '/ressources/culture-mayotte#shimaore', type: 'Langue' },
            { title: 'Musique Traditionnelle', link: '/ressources/culture-mayotte#musique', type: 'Musique' }
          ]
        },
        {
          category: 'Environnement',
          icon: '🐠',
          items: [
            { title: 'Lagon de Mayotte', link: '/ressources/nature-mayotte', type: 'Nature' },
            { title: 'Faune Marine', link: '/ressources/nature-mayotte#faune', type: 'Nature' },
            { title: 'Protection Environnementale', link: '/ressources/nature-mayotte#protection', type: 'Nature' }
          ]
        },
        {
          category: 'Histoire',
          icon: '📜',
          items: [
            { title: 'Histoire de Mayotte', link: '/ressources/histoire-mayotte', type: 'Histoire' },
            { title: 'Patrimoine Historique', link: '/ressources/histoire-mayotte#patrimoine', type: 'Histoire' }
          ]
        },
        {
          category: 'Développement Local',
          icon: '📈',
          items: [
            { title: 'Projets Locaux', link: '/outils#developpement-mayotte', type: 'Business' },
            { title: 'Éducation', link: '/outils#education-mayotte', type: 'Outil' }
          ]
        }
      ]
    },
    afrique: {
      name: 'Afrique',
      emoji: '🌍',
      color: '#059669',
      resources: [
        {
          category: 'Histoire',
          icon: '📚',
          items: [
            { title: 'Histoire de l\'Afrique', link: '/ressources/histoire-afrique', type: 'Article' },
            { title: 'Civilisations Anciennes', link: '/ressources/histoire-afrique#civilisations', type: 'Histoire' },
            { title: 'Grands Empires', link: '/ressources/histoire-afrique#empires', type: 'Histoire' }
          ]
        },
        {
          category: 'Culture & Arts',
          icon: '🎨',
          items: [
            { title: 'Arts Africains', link: '/ressources/arts-afrique', type: 'Art' },
            { title: 'Musiques Africaines', link: '/ressources/musique-afrique', type: 'Musique' },
            { title: 'Littérature Africaine', link: '/ressources/litterature-afrique', type: 'Culture' }
          ]
        },
        {
          category: 'Langues',
          icon: '🗣️',
          items: [
            { title: 'Langues Africaines', link: '/ressources/langues-afrique', type: 'Langue' },
            { title: 'Swahili', link: '/ressources/langues-afrique#swahili', type: 'Langue' },
            { title: 'Wolof', link: '/ressources/langues-afrique#wolof', type: 'Langue' }
          ]
        },
        {
          category: 'Business & Innovation',
          icon: '🚀',
          items: [
            { title: 'Entrepreneuriat en Afrique', link: '/outils#business-afrique', type: 'Business' },
            { title: 'Startups Africaines', link: '/outils#startups-afrique', type: 'Business' },
            { title: 'Innovation Technologique', link: '/outils#tech-afrique', type: 'Business' }
          ]
        }
      ]
    },
    caraibes: {
      name: 'Caraïbes',
      emoji: '🏖️',
      color: '#06b6d4',
      resources: [
        {
          category: 'Culture Caribéenne',
          icon: '🎺',
          items: [
            { title: 'Musique Caribéenne', link: '/ressources/musique-caraibes', type: 'Musique' },
            { title: 'Reggae & Calypso', link: '/ressources/musique-caraibes#reggae', type: 'Musique' },
            { title: 'Carnavals', link: '/ressources/culture-caraibes#carnaval', type: 'Culture' }
          ]
        },
        {
          category: 'Histoire Régionale',
          icon: '⚓',
          items: [
            { title: 'Histoire des Caraïbes', link: '/ressources/histoire-caraibes', type: 'Histoire' },
            { title: 'Peuples Autochtones', link: '/ressources/histoire-caraibes#autochtones', type: 'Histoire' },
            { title: 'Patrimoine Colonial', link: '/ressources/histoire-caraibes#colonial', type: 'Histoire' }
          ]
        },
        {
          category: 'Langues Créoles',
          icon: '💬',
          items: [
            { title: 'Créoles des Caraïbes', link: '/ressources/langues-caraibes', type: 'Langue' },
            { title: 'Créole Haïtien', link: '/ressources/langues-caraibes#haitien', type: 'Langue' },
            { title: 'Créole Jamaïcain', link: '/ressources/langues-caraibes#jamaicain', type: 'Langue' }
          ]
        },
        {
          category: 'Tourisme & Business',
          icon: '🌴',
          items: [
            { title: 'Opportunités Touristiques', link: '/outils#tourisme-caraibes', type: 'Business' },
            { title: 'Développement Durable', link: '/outils#developpement-caraibes', type: 'Business' }
          ]
        }
      ]
    },
    diaspora: {
      name: 'Diaspora',
      emoji: '✈️',
      color: '#dc2626',
      resources: [
        {
          category: 'Communautés',
          icon: '👥',
          items: [
            { title: 'Diaspora en France', link: '/ressources/diaspora-france', type: 'Article' },
            { title: 'Diaspora en Europe', link: '/ressources/diaspora-europe', type: 'Article' },
            { title: 'Diaspora en Amérique', link: '/ressources/diaspora-amerique', type: 'Article' }
          ]
        },
        {
          category: 'Culture & Identité',
          icon: '🎭',
          items: [
            { title: 'Préservation Culturelle', link: '/ressources/culture-diaspora', type: 'Culture' },
            { title: 'Associations Culturelles', link: '/ressources/culture-diaspora#associations', type: 'Culture' },
            { title: 'Événements Communautaires', link: '/ressources/culture-diaspora#evenements', type: 'Actualités' }
          ]
        },
        {
          category: 'Réseaux & Business',
          icon: '🤝',
          items: [
            { title: 'Réseaux Professionnels', link: '/outils#reseaux-diaspora', type: 'Business' },
            { title: 'Entrepreneuriat Diaspora', link: '/outils#business-diaspora', type: 'Business' },
            { title: 'Investissements', link: '/outils#investissements-diaspora', type: 'Business' }
          ]
        },
        {
          category: 'Retour aux Sources',
          icon: '🏡',
          items: [
            { title: 'Projets de Retour', link: '/ressources/retour-sources', type: 'Article' },
            { title: 'Guides Pratiques', link: '/ressources/retour-sources#guides', type: 'Outil' },
            { title: 'Témoignages', link: '/ressources/retour-sources#temoignages', type: 'Article' }
          ]
        }
      ]
    }
  }

  // Filtrer les territoires selon la sélection
  const displayedTerritories = selectedTerritory === 'all' 
    ? Object.keys(territories)
    : [selectedTerritory]

  return (
    <div className="bibliotheque-outremer">
      {/* En-tête */}
      <div className="bibliotheque-header">
        <h1 className="bibliotheque-title">
          📚 Bibliothèque Outremer & Diaspora
        </h1>
        <p className="bibliotheque-subtitle">
          Accès gratuit et structuré à toutes les ressources sur les territoires d'Outremer, l'Afrique, la Caraïbe et la diaspora
        </p>
      </div>

      {/* Filtres par territoire */}
      <div className="territory-filters">
        <button 
          onClick={() => setSelectedTerritory('all')}
          className={`filter-btn ${selectedTerritory === 'all' ? 'active' : ''}`}
        >
          🌍 Tous
        </button>
        {Object.entries(territories).map(([key, territory]) => (
          <button
            key={key}
            onClick={() => setSelectedTerritory(key)}
            className={`filter-btn ${selectedTerritory === key ? 'active' : ''}`}
            style={{ '--territory-color': territory.color }}
          >
            {territory.emoji} {territory.name}
          </button>
        ))}
      </div>

      {/* Grille des territoires et ressources */}
      <div className="territories-grid">
        {displayedTerritories.map((territoryKey) => {
          const territory = territories[territoryKey]
          return (
            <div key={territoryKey} className="territory-section">
              <div className="territory-header" style={{ borderColor: territory.color }}>
                <h2>
                  <span className="territory-emoji">{territory.emoji}</span>
                  {territory.name}
                </h2>
              </div>

              <div className="resources-grid">
                {territory.resources.map((resourceCategory, idx) => (
                  <div key={idx} className="resource-category">
                    <h3 className="category-title">
                      <span className="category-icon">{resourceCategory.icon}</span>
                      {resourceCategory.category}
                    </h3>
                    <ul className="resource-list">
                      {resourceCategory.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="resource-item">
                          <Link href={item.link} className="resource-link">
                            <span className="resource-title">{item.title}</span>
                            <span className="resource-type">{item.type}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Styles */}
      <style jsx>{`
        .bibliotheque-outremer {
          padding: 2rem 0;
        }

        .bibliotheque-header {
          text-align: center;
          margin-bottom: 3rem;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          backdrop-filter: blur(10px);
        }

        .bibliotheque-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #f59e0b, #e11d48, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .bibliotheque-subtitle {
          font-size: 1.1rem;
          opacity: 0.9;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .territory-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 3rem;
          padding: 0 1rem;
        }

        .filter-btn {
          padding: 0.75rem 1.5rem;
          border: 2px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.05);
          color: white;
          border-radius: 50px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .filter-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.1);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, var(--territory-color, #3b82f6), rgba(255, 255, 255, 0.2));
          border-color: var(--territory-color, #3b82f6);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .territories-grid {
          display: grid;
          gap: 3rem;
        }

        .territory-section {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .territory-section:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .territory-header {
          border-left: 5px solid;
          padding-left: 1.5rem;
          margin-bottom: 2rem;
        }

        .territory-header h2 {
          font-size: 2rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .territory-emoji {
          font-size: 2.5rem;
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .resource-category {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 15px;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .resource-category:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .category-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #f59e0b;
        }

        .category-icon {
          font-size: 1.5rem;
        }

        .resource-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .resource-item {
          margin-bottom: 0.75rem;
        }

        .resource-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 8px;
          text-decoration: none;
          color: white;
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }

        .resource-link:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateX(5px);
        }

        .resource-title {
          font-size: 0.95rem;
          font-weight: 500;
        }

        .resource-type {
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          background: rgba(59, 130, 246, 0.3);
          border-radius: 20px;
          color: #93c5fd;
          font-weight: 600;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .bibliotheque-title {
            font-size: 1.8rem;
          }

          .bibliotheque-subtitle {
            font-size: 1rem;
          }

          .territory-filters {
            gap: 0.5rem;
          }

          .filter-btn {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }

          .territory-header h2 {
            font-size: 1.5rem;
          }

          .resources-grid {
            grid-template-columns: 1fr;
          }

          .resource-link {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  )
}
