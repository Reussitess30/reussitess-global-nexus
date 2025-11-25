import Layout from '../../components/Layout'
import Link from 'next/link'

export default function CultureGuadeloupe() {
  return (
    <Layout>
      <div style={{
        background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
        minHeight: '100vh',
        padding: '4rem 1rem'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Link href="/bibliotheque" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1rem',
            display: 'inline-block',
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            ← Retour aux Ressources
          </Link>

          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '20px',
            padding: '3rem',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
          }}>
            <h1 style={{
              textAlign: 'center',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '800',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              🌴 Culture Guadeloupéenne
            </h1>
            <p style={{
              textAlign: 'center',
              fontSize: '1.2rem',
              color: '#64748b',
              marginBottom: '3rem'
            }}>
              Découvrez la richesse culturelle de la Guadeloupe
            </p>

            {/* Introduction */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#10b981',
                marginBottom: '1rem'
              }}>
                🏝️ Une Culture Riche et Diversifiée
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#475569' }}>
                La Guadeloupe, surnommée "Karukera" (l'île aux belles eaux) par les Amérindiens, 
                possède une culture unique née du mélange des influences caribéennes, africaines, 
                européennes et indiennes. Terre de champions et d'artistes, elle rayonne à travers 
                le monde par sa musique, sa gastronomie et ses traditions.
              </p>
            </div>

            {/* Musique et Danse */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#3b82f6',
                marginBottom: '1rem'
              }}>
                🎵 Musique et Danse
              </h2>
              <div style={{
                background: '#f8fafc',
                padding: '2rem',
                borderRadius: '15px',
                borderLeft: '4px solid #3b82f6'
              }}>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#475569' }}>
                  <li><strong>Le Gwoka</strong> : Inscrit au patrimoine mondial de l'UNESCO, musique traditionnelle jouée sur des tambours ka</li>
                  <li><strong>Le Zouk</strong> : Musique moderne mondialement connue (Kassav', Zouk Machine)</li>
                  <li><strong>La Biguine</strong> : Danse et musique créole traditionnelle</li>
                  <li><strong>Le Quadrille</strong> : Danse de salon créolisée</li>
                </ul>
              </div>
            </div>

            {/* Gastronomie */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#f59e0b',
                marginBottom: '1rem'
              }}>
                🍽️ Gastronomie Créole
              </h2>
              <div style={{
                background: '#fffbeb',
                padding: '2rem',
                borderRadius: '15px',
                borderLeft: '4px solid #f59e0b'
              }}>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#475569' }}>
                  <li><strong>Colombo</strong> : Plat au curry d'origine indienne</li>
                  <li><strong>Accras de morue</strong> : Beignets épicés traditionnels</li>
                  <li><strong>Bokit</strong> : Sandwich frit typiquement guadeloupéen</li>
                  <li><strong>Rhum agricole</strong> : Production reconnue mondialement</li>
                  <li><strong>Fruits tropicaux</strong> : Mangues, goyaves, fruits de la passion</li>
                </ul>
              </div>
            </div>

            {/* Traditions */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#ec4899',
                marginBottom: '1rem'
              }}>
                🎭 Traditions et Fêtes
              </h2>
              <div style={{
                background: '#fdf2f8',
                padding: '2rem',
                borderRadius: '15px',
                borderLeft: '4px solid #ec4899'
              }}>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#475569' }}>
                  <li><strong>Carnaval</strong> : Grands défilés de janvier à mars, groupes à peau</li>
                  <li><strong>Tour de la Guadeloupe à la voile</strong> : Régate internationale</li>
                  <li><strong>Fête des Cuisinières</strong> : Célébration culinaire en août</li>
                  <li><strong>Chanté Nwel</strong> : Chants de Noël traditionnels</li>
                </ul>
              </div>
            </div>

            {/* Personnalités */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: '#8b5cf6',
                marginBottom: '1rem'
              }}>
                ⭐ Personnalités Guadeloupéennes
              </h2>
              <div style={{
                background: '#faf5ff',
                padding: '2rem',
                borderRadius: '15px',
                borderLeft: '4px solid #8b5cf6'
              }}>
                <ul style={{ fontSize: '1.05rem', lineHeight: '2', color: '#475569' }}>
                  <li><strong>Thierry Henry</strong> : Champion du monde de football 1998</li>
                  <li><strong>Lilian Thuram</strong> : Champion du monde de football 1998</li>
                  <li><strong>Maryse Condé</strong> : Écrivaine, Prix Nobel alternatif de littérature</li>
                  <li><strong>Gilles Floro</strong> : Coureur cycliste, multiple champion</li>
                  <li><strong>Teddy Riner</strong> : Judoka, champion olympique multiple</li>
                </ul>
              </div>
            </div>

            {/* Ressources */}
            <div style={{
              background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
              padding: '2rem',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                📚 En Savoir Plus
              </h3>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a 
                  href="https://www.guadeloupe.fr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    background: 'white',
                    color: '#10b981',
                    padding: '0.8rem 2rem',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    display: 'inline-block'
                  }}>
                  🏝️ Site Officiel Tourisme
                </a>
                <Link 
                  href="/bibliotheque" 
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    padding: '0.8rem 2rem',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    display: 'inline-block',
                    border: '2px solid white'
                  }}>
                  ← Retour aux Ressources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
