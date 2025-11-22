import Layout from '../../components/Layout'

export default function PatrimoineMartinique() {
  return (
    <Layout>
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-center mb-8">🏝️ Patrimoine Martiniquais</h1>
            
            <div className="card" style={{ marginBottom: '30px' }}>
              <h2>🌺 L'Île aux Fleurs - Madinina</h2>
              <p>
                La Martinique, surnommée "Madinina" (l'île aux fleurs) par les Caraïbes, est un département 
                français d'outre-mer de 360 000 habitants. Elle incarne un patrimoine culturel riche, 
                mêlant influences africaines, européennes, indiennes et caraïbes.
              </p>

              <h3 style={{ marginTop: '20px' }}>🏛️ Histoire et Patrimoine</h3>
              <p>
                <strong>Période précolombienne:</strong> Peuplée par les Arawaks puis les Caraïbes
              </p>
              <p>
                <strong>1502:</strong> Découverte par Christophe Colomb
              </p>
              <p>
                <strong>1635:</strong> Colonisation française par Pierre Belain d'Esnambuc
              </p>
              <p>
                <strong>1848:</strong> Abolition de l'esclavage, Victor Schoelcher
              </p>
              <p>
                <strong>1902:</strong> Éruption de la Montagne Pelée (30 000 victimes à Saint-Pierre)
              </p>
              <p>
                <strong>1946:</strong> Devient département français
              </p>

              <h3 style={{ marginTop: '20px' }}>🎭 Culture Martiniquaise</h3>
              <ul style={{ lineHeight: '2' }}>
                <li><strong>Langue</strong> - Créole martiniquais, français</li>
                <li><strong>Musique</strong> - Bèlè, Mazurka, Zouk, Compas</li>
                <li><strong>Danse</strong> - Bèlè traditionnel, danses de salon créoles</li>
                <li><strong>Littérature</strong> - Aimé Césaire, Édouard Glissant, Patrick Chamoiseau</li>
                <li><strong>Gastronomie</strong> - Colombo, accras, boudin créole, ti-punch</li>
              </ul>

              <h3 style={{ marginTop: '20px' }}>🌟 Personnalités Martiniquaises</h3>
              <ul style={{ lineHeight: '2' }}>
                <li><strong>Aimé Césaire</strong> - Poète, fondateur de la Négritude, maire de Fort-de-France</li>
                <li><strong>Frantz Fanon</strong> - Psychiatre, écrivain anticolonialiste</li>
                <li><strong>Édouard Glissant</strong> - Philosophe, écrivain, concept de créolisation</li>
                <li><strong>Patrick Chamoiseau</strong> - Écrivain, Prix Goncourt 1992</li>
                <li><strong>Joséphine de Beauharnais</strong> - Impératrice des Français, épouse de Napoléon</li>
                <li><strong>Thierry Omeyer</strong> - Handballeur, multiple champion du monde et olympique</li>
              </ul>

              <h3 style={{ marginTop: '20px' }}>🏰 Sites Patrimoniaux</h3>
              <ul style={{ lineHeight: '2' }}>
                <li><strong>Bibliothèque Schoelcher</strong> - Architecture métallique Art nouveau</li>
                <li><strong>Habitation Clément</strong> - Distillerie historique, patrimoine</li>
                <li><strong>Saint-Pierre</strong> - Ancienne capitale, ruines de l'éruption</li>
                <li><strong>Montagne Pelée</strong> - Volcan actif (1397m), site historique</li>
                <li><strong>Fort Saint-Louis</strong> - Fortification du XVIIe siècle</li>
                <li><strong>Jardin de Balata</strong> - Jardin botanique tropical</li>
              </ul>

              <h3 style={{ marginTop: '20px' }}>🎨 Arts et Artisanat</h3>
              <p>
                La Martinique est réputée pour son artisanat traditionnel: poterie caraïbe, 
                vannerie, bijoux créoles (collier-chou), madras, costumes traditionnels.
              </p>

              <h3 style={{ marginTop: '20px' }}>🥃 Patrimoine du Rhum</h3>
              <p>
                Le rhum agricole martiniquais bénéficie d'une <strong>AOC (Appellation d'Origine Contrôlée)</strong> 
                depuis 1996, unique pour un rhum. Distilleries emblématiques: Clément, Trois Rivières, 
                Neisson, Saint-James, La Mauny.
              </p>

              <h3 style={{ marginTop: '20px' }}>🌴 Nature et Paysages</h3>
              <ul style={{ lineHeight: '2' }}>
                <li><strong>Nord Caraïbe</strong> - Montagne Pelée, forêt tropicale, Saint-Pierre</li>
                <li><strong>Sud</strong> - Plages paradisiaques, Sainte-Anne, Diamant</li>
                <li><strong>Presqu'île de la Caravelle</strong> - Réserve naturelle</li>
                <li><strong>Route de la Trace</strong> - Traversée de la forêt tropicale</li>
              </ul>
            </div>

            <div style={{ 
              background: 'linear-gradient(135deg, #ec4899, #8b5cf6)', 
              color: 'white', 
              padding: '30px', 
              borderRadius: '15px' 
            }}>
              <h2 style={{ marginBottom: '20px' }}>🔗 Ressources et Liens Utiles</h2>
              <div style={{ display: 'grid', gap: '15px' }}>
                <a 
                  href="https://www.martinique.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    background: 'white', 
                    color: '#ec4899', 
                    padding: '15px', 
                    borderRadius: '10px',
                    textDecoration: 'none',
                    display: 'block',
                    fontWeight: 'bold'
                  }}
                >
                  🏝️ Office du Tourisme de Martinique
                </a>
                <a 
                  href="https://www.collectivitedemartinique.mq/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    background: 'white', 
                    color: '#ec4899', 
                    padding: '15px', 
                    borderRadius: '10px',
                    textDecoration: 'none',
                    display: 'block',
                    fontWeight: 'bold'
                  }}
                >
                  🏛️ Collectivité Territoriale de Martinique (Officiel)
                </a>
                <a 
                  href="https://www.cesaire.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    background: 'white', 
                    color: '#ec4899', 
                    padding: '15px', 
                    borderRadius: '10px',
                    textDecoration: 'none',
                    display: 'block',
                    fontWeight: 'bold'
                  }}
                >
                  📚 Fondation Aimé Césaire
                </a>
                <a 
                  href="https://www.rhum-agricole-martinique.fr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    background: 'white', 
                    color: '#ec4899', 
                    padding: '15px', 
                    borderRadius: '10px',
                    textDecoration: 'none',
                    display: 'block',
                    fontWeight: 'bold'
                  }}
                >
                  🥃 AOC Rhum Agricole Martinique
                </a>
                <a 
                  href="/bibliotheque/pays/martinique" 
                  style={{ 
                    background: 'rgba(255,255,255,0.3)', 
                    color: 'white', 
                    padding: '15px', 
                    borderRadius: '10px',
                    textDecoration: 'none',
                    display: 'block',
                    fontWeight: 'bold'
                  }}
                >
                  📊 Fiche Pays Martinique Complète
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  )
}
