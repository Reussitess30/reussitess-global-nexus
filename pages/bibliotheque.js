import Head from 'next/head';
import { useRouter } from 'next/router';
import BotAssistant from '../components/BotAssistant';

export default function Bibliotheque() {
  const router = useRouter();

  const sections = [
    {
      title: '🧮 Outils & Calculateurs',
      description: 'Simulateurs, calculateurs TVA, commissions et marges commerciales',
      link: '/bibliotheque/outils',
      color: '#667eea'
    },
    {
      title: '📖 Histoire Africaine & Outre-Mers',
      description: 'Afrique, Caraïbes, DOM-TOM, anciennes colonies françaises : chronologies, biographies, contextes culturels',
      link: '/bibliotheque/histoire',
      color: '#f59e0b'
    },
    {
      title: '📰 Actualités & Évolutions',
      description: 'Actualités du secteur, évolutions du marché, faits marquants internationaux',
      link: '/bibliotheque/actu',
      color: '#10b981'
    },
    {
      title: '👨‍🏫 Ressources Professeurs',
      description: 'Pédagogie, ressources pour l\'enseignement, guides méthodologiques',
      link: '/bibliotheque/prof',
      color: '#ef4444'
    },
    {
      title: '⚖️ Réglementation Internationale',
      description: 'Lois, normes, réglementations à jour pour le commerce international',
      link: '/bibliotheque/reglementation',
      color: '#8b5cf6'
    }
  ];

  const countries = [
    { flag: '🇫🇷', name: 'France', link: '/bibliotheque/pays/fr' },
    { flag: '🇲🇶', name: 'Martinique', link: '/bibliotheque/pays/martinique' },
    { flag: '🇬🇵', name: 'Guadeloupe', link: '/bibliotheque/pays/guadeloupe' },
    { flag: '🇬🇫', name: 'Guyane', link: '/bibliotheque/pays/guyane' }
  ];

  return (<>
    <Head>
      <title>📚 Bibliothèque Internationale - Reussitess Global Nexus</title>
      <meta name="description" content="Portail documentaire international : outils, histoire africaine et outre-mers, actualités, ressources pédagogiques et réglementations" />
    </Head>

    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', padding: '20px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
          <button onClick={() => router.push('/')} style={{
            padding: '10px 20px',
            background: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginBottom: '20px'
          }}>← Retour à l'accueil</button>

          <h1 style={{ fontSize: '3em', marginBottom: '10px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            📚 Bibliothèque Internationale
          </h1>
          <p style={{ fontSize: '1.3em', color: '#666', marginBottom: '20px' }}>
            Portail central de ressources documentaires pour élèves, professeurs, chercheurs et curieux
          </p>
          <p style={{ fontSize: '1.1em', color: '#888', lineHeight: '1.6' }}>
            Explorez nos sections thématiques dédiées aux outils pratiques, à l'histoire africaine et des outre-mers, 
            aux actualités internationales, aux ressources pédagogiques et aux réglementations. 
            Chaque section est enrichie de contenus vérifiés et constamment mis à jour.
          </p>
        </div>

        {/* Sections principales */}
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '2em', marginBottom: '20px', color: '#333', textAlign: 'center' }}>
            🗂️ Sections Thématiques
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {sections.map((section, i) => (
              <div 
                key={i}
                onClick={() => router.push(section.link)}
                style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '15px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  borderLeft: `5px solid ${section.color}`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
              >
                <h3 style={{ fontSize: '1.5em', marginBottom: '10px', color: section.color }}>
                  {section.title}
                </h3>
                <p style={{ color: '#666', lineHeight: '1.5' }}>
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fiches Pays */}
        <div style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '2em', marginBottom: '20px', color: '#333', textAlign: 'center' }}>
            🌍 Fiches Pays
          </h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
            Informations détaillées par pays : population, marché, TVA, Amazon, ressources institutionnelles, histoire
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
            {countries.map((country, i) => (
              <div
                key={i}
                onClick={() => router.push(country.link)}
                style={{
                  background: 'linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)',
                  padding: '20px',
                  borderRadius: '12px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div style={{ fontSize: '3em', marginBottom: '10px' }}>{country.flag}</div>
                <div style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#667eea' }}>{country.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bot Assistant */}
        <div style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '2em', marginBottom: '10px', color: '#333', textAlign: 'center' }}>
            🤖 Assistant Intelligent
          </h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '20px', fontSize: '1.1em' }}>
            Posez vos questions sur tous les sujets de la bibliothèque
          </p>
          <div style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '30px',
            borderRadius: '15px',
            textAlign: 'center',
            color: 'white'
          }}>
            <p style={{ fontSize: '1.2em', marginBottom: '15px' }}>
              💬 Notre assistant conversationnel est disponible pour vous aider !
            </p>
            <p style={{ fontSize: '1em', opacity: '0.9' }}>
              Cliquez sur l'icône 🤖 en bas à droite pour démarrer une conversation
            </p>
          </div>
        </div>

      </div>
    </div>

    {/* Bot Assistant Component */}
    <BotAssistant />
  </>);
}
