import Link from 'next/link'
import BotIA from '../components/BotIA'

export default function Bibliotheque() {
  return (
    <>
      {/* Bot IA Multilingue avec Synthèse Vocale */}
      <BotIA />
      
      {/* Boutons de Navigation */}
      <div style={{background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)', padding: '1.5rem 2rem'}}>
        <div className="container" style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center'}}>
          <Link href="/" style={{textDecoration: 'none'}}>
            <button style={{
              background: 'linear-gradient(135deg, #10b981, #059669)',
              color: 'white',
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '25px',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}>
              🏠 Retour au Hub
            </button>
          </Link>
          
          <a href="https://partenaires.amazon.fr/influencers" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
            <button style={{
              background: 'linear-gradient(135deg, #f59e0b, #d97706)',
              color: 'white',
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '25px',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}>
              💰 Programme Amazon
            </button>
          </a>
          
          <a href="mailto:influenceur@reussitess.fr" style={{textDecoration: 'none'}}>
            <button style={{
              background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
              color: 'white',
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '25px',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}>
              📧 Nous Joindre
            </button>
          </a>
        </div>
      </div>
      
      <div className="hero" style={{minHeight: '300px', padding: '3rem 0'}}>
        <div className="container">
          <h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>📚 Bibliothèque Ressources</h1>
          <p className="subtitle" style={{fontSize: '1.3rem', color: '#fff'}}>
            Explorez nos outils, calculateurs et ressources pour réussir
          </p>
        </div>
      </div>

      <div className="container" style={{padding: '4rem 2rem'}}>
        {/* Section Outils et Calculateurs */}
        <section style={{marginBottom: '4rem'}}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #f59e0b, #e11d48)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '2rem'
          }}>
            🧮 Outils & Calculateurs
          </h2>
          
          <div className="grid-boutiques">
            <Link href="/bibliotheque/outils" style={{textDecoration: 'none'}}>
              <div className="boutique-card" style={{cursor: 'pointer'}}>
                <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                  💰 Calculateurs Financiers
                </h3>
                <p style={{color: '#666', marginBottom: '1rem'}}>
                  Calculateurs de TVA, commissions Amazon, profits et marges
                </p>
                <span className="btn-boutique" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontWeight: '600'
                }}>
                  Accéder aux Outils →
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Section Ressources par Pays */}
        <section style={{marginBottom: '4rem'}}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '2rem'
          }}>
            🌍 Ressources par Pays
          </h2>
          
          <div className="grid-boutiques">
            <Link href="/bibliotheque/pays/fr" style={{textDecoration: 'none'}}>
              <div className="boutique-card" style={{cursor: 'pointer'}}>
                <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                  🇫🇷 Ressources France
                </h3>
                <p style={{color: '#666', marginBottom: '1rem'}}>
                  Guides et ressources spécifiques au marché français
                </p>
                <span className="btn-boutique" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #e11d48, #f59e0b)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontWeight: '600'
                }}>
                  Voir les Ressources →
                </span>
              </div>
            </Link>

            <Link href="/bibliotheque/pays/guadeloupe" style={{textDecoration: 'none'}}>
              <div className="boutique-card" style={{cursor: 'pointer'}}>
                <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                  🇬🇵 Ressources Guadeloupe
                </h3>
                <p style={{color: '#666', marginBottom: '1rem'}}>
                  Culture, économie et opportunités en Guadeloupe
                </p>
                <span className="btn-boutique" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #e11d48, #f59e0b)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontWeight: '600'
                }}>
                  Découvrir →
                </span>
              </div>
            </Link>

            <Link href="/bibliotheque/pays/martinique" style={{textDecoration: 'none'}}>
              <div className="boutique-card" style={{cursor: 'pointer'}}>
                <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                  🇲🇶 Ressources Martinique
                </h3>
                <p style={{color: '#666', marginBottom: '1rem'}}>
                  Patrimoine et e-commerce en Martinique
                </p>
                <span className="btn-boutique" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #e11d48, #f59e0b)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontWeight: '600'
                }}>
                  Découvrir →
                </span>
              </div>
            </Link>

            <Link href="/bibliotheque/pays/guyane" style={{textDecoration: 'none'}}>
              <div className="boutique-card" style={{cursor: 'pointer'}}>
                <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                  🇬🇫 Ressources Guyane
                </h3>
                <p style={{color: '#666', marginBottom: '1rem'}}>
                  Opportunités et ressources en Guyane française
                </p>
                <span className="btn-boutique" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #e11d48, #f59e0b)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontWeight: '600'
                }}>
                  Découvrir →
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Section Assistant Intelligent */}
        <section style={{marginBottom: '4rem'}}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '2rem'
          }}>
            🤖 Assistant Intelligent
          </h2>
          
          <div className="grid-boutiques">
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                💬 Bot IA Multilingue
              </h3>
              <p style={{color: '#666', marginBottom: '1rem'}}>
                Assistant virtuel avec synthèse vocale en 6 langues pour vous guider
              </p>
              <ul style={{color: '#666', marginLeft: '1.5rem'}}>
                <li>Réponses intelligentes 24/7</li>
                <li>Support vocal naturel</li>
                <li>Détection automatique de langue</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section Fiches Pays */}
        <section style={{marginBottom: '4rem'}}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '2rem'
          }}>
            🗺️ Fiches Pays
          </h2>
          
          <div className="grid-boutiques">
            <Link href="/bibliotheque/pays/fr" style={{textDecoration: 'none'}}>
              <div className="boutique-card" style={{cursor: 'pointer'}}>
                <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                  🇫🇷 France
                </h3>
                <p style={{color: '#666', marginBottom: '1rem'}}>
                  Marché français, TVA 20%, comportement consommateur, logistique
                </p>
                <span className="btn-boutique" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontWeight: '600'
                }}>
                  Consulter →
                </span>
              </div>
            </Link>
            
            <Link href="/bibliotheque/pays/guadeloupe" style={{textDecoration: 'none'}}>
              <div className="boutique-card" style={{cursor: 'pointer'}}>
                <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                  🇬🇵 Guadeloupe
                </h3>
                <p style={{color: '#666', marginBottom: '1rem'}}>
                  Territoire français d&apos;outre-mer, marché caribéen, culture créole
                </p>
                <span className="btn-boutique" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontWeight: '600'
                }}>
                  Consulter →
                </span>
              </div>
            </Link>
            
            <Link href="/bibliotheque/pays/martinique" style={{textDecoration: 'none'}}>
              <div className="boutique-card" style={{cursor: 'pointer'}}>
                <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                  🇲🇶 Martinique
                </h3>
                <p style={{color: '#666', marginBottom: '1rem'}}>
                  Île aux fleurs, patrimoine historique, économie insulaire
                </p>
                <span className="btn-boutique" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontWeight: '600'
                }}>
                  Consulter →
                </span>
              </div>
            </Link>

            <Link href="/bibliotheque/pays/guyane" style={{textDecoration: 'none'}}>
              <div className="boutique-card" style={{cursor: 'pointer'}}>
                <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                  🇬🇫 Guyane
                </h3>
                <p style={{color: '#666', marginBottom: '1rem'}}>
                  Territoire amazonien, espace spatial, biodiversité exceptionnelle
                </p>
                <span className="btn-boutique" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontWeight: '600'
                }}>
                  Consulter →
                </span>
              </div>
            </Link>

            <Link href="/bibliotheque/outils" style={{textDecoration: 'none'}}>
              <div className="boutique-card" style={{cursor: 'pointer'}}>
                <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                  🧮 Outils E-commerce
                </h3>
                <p style={{color: '#666', marginBottom: '1rem'}}>
                  Calculateurs TVA, commissions, profits pour vos boutiques Amazon
                </p>
                <span className="btn-boutique" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontWeight: '600'
                }}>
                  Utiliser les outils →
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Section Règlement International */}
        <section style={{marginBottom: '4rem'}}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #dc2626, #f59e0b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '2rem'
          }}>
            ⚖️ Règlement International
          </h2>
          
          <div className="grid-boutiques">
            <Link href="/bibliotheque/reglementation" style={{textDecoration: 'none'}}>
              <div className="boutique-card" style={{cursor: 'pointer'}}>
                <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                  🇪🇺 RGPD Européen
                </h3>
                <p style={{color: '#666', marginBottom: '1rem'}}>
                  Protection des données, conformité GDPR, droits des consommateurs
                </p>
                <span className="btn-boutique" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #dc2626, #f59e0b)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontWeight: '600'
                }}>
                  Consulter →
                </span>
              </div>
            </Link>
            
            <Link href="/bibliotheque/reglementation" style={{textDecoration: 'none'}}>
              <div className="boutique-card" style={{cursor: 'pointer'}}>
                <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                  💰 TVA & Taxes
                </h3>
                <p style={{color: '#666', marginBottom: '1rem'}}>
                  Réglementation TVA par pays, déclarations, seuils OSS
                </p>
                <span className="btn-boutique" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #dc2626, #f59e0b)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontWeight: '600'
                }}>
                  En savoir plus →
                </span>
              </div>
            </Link>
            
            <Link href="/bibliotheque/reglementation" style={{textDecoration: 'none'}}>
              <div className="boutique-card" style={{cursor: 'pointer'}}>
                <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                  📦 Douanes & Import
                </h3>
                <p style={{color: '#666', marginBottom: '1rem'}}>
                  Réglementations douanières, codes HS, restrictions produits
                </p>
                <span className="btn-boutique" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #dc2626, #f59e0b)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontWeight: '600'
                }}>
                  Découvrir →
                </span>
              </div>
            </Link>

            <Link href="/bibliotheque/reglementation" style={{textDecoration: 'none'}}>
              <div className="boutique-card" style={{cursor: 'pointer'}}>
                <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                  🏷️ Propriété Intellectuelle
                </h3>
                <p style={{color: '#666', marginBottom: '1rem'}}>
                  Marques, brevets, droits d&apos;auteur, contrefaçon
                </p>
                <span className="btn-boutique" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #dc2626, #f59e0b)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontWeight: '600'
                }}>
                  Voir plus →
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Section Ressources Professeur */}
        <section style={{marginBottom: '4rem'}}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '2rem'
          }}>
            👨‍🏫 Ressources Professeur
          </h2>
          
          <div className="grid-boutiques">
            <Link href="/bibliotheque/prof" style={{textDecoration: 'none'}}>
              <div className="boutique-card" style={{cursor: 'pointer'}}>
                <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                  📊 Études de Cas
                </h3>
                <p style={{color: '#666', marginBottom: '1rem'}}>
                  Cas pratiques e-commerce, analyses marché, success stories
                </p>
                <span className="btn-boutique" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontWeight: '600'
                }}>
                  Consulter →
                </span>
              </div>
            </Link>
            
            <Link href="/bibliotheque/prof" style={{textDecoration: 'none'}}>
              <div className="boutique-card" style={{cursor: 'pointer'}}>
                <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                  📈 Analyses Stratégiques
                </h3>
                <p style={{color: '#666', marginBottom: '1rem'}}>
                  Stratégies marketing, pricing, positionnement international
                </p>
                <span className="btn-boutique" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontWeight: '600'
                }}>
                  Découvrir →
                </span>
              </div>
            </Link>
            
            <Link href="/bibliotheque/prof" style={{textDecoration: 'none'}}>
              <div className="boutique-card" style={{cursor: 'pointer'}}>
                <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                  🎓 Supports Pédagogiques
                </h3>
                <p style={{color: '#666', marginBottom: '1rem'}}>
                  Cours, présentations, exercices pratiques e-commerce
                </p>
                <span className="btn-boutique" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '25px',
                  fontWeight: '600'
                }}>
                  Accéder →
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Section Actualités et Évolution */}
        <section style={{marginBottom: '4rem'}}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #059669, #0891b2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '2rem'
          }}>
            📰 Actualités & Évolution
          </h2>
          
          <div className="grid-boutiques">
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                🔥 Tendances E-commerce
              </h3>
              <p style={{color: '#666'}}>
                Nouveautés Amazon, innovations marketplace, IA et automation
              </p>
            </div>
            
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                📊 Statistiques Marché
              </h3>
              <p style={{color: '#666'}}>
                Chiffres clés e-commerce mondial, croissance par région
              </p>
            </div>
            
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                ⚡ Changements Réglementaires
              </h3>
              <p style={{color: '#666'}}>
                Mises à jour législatives, nouvelles normes, compliance
              </p>
            </div>
          </div>
        </section>

        {/* Section Historique Afrique et Outre-mer */}
        <section style={{marginBottom: '4rem'}}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #f59e0b, #dc2626)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '2rem'
          }}>
            🌍 Historique Afrique & Outre-mer
          </h2>
          
          <div className="grid-boutiques">
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                🏛️ Histoire du Commerce
              </h3>
              <p style={{color: '#666'}}>
                Évolution commerce africain, routes commerciales historiques
              </p>
            </div>
            
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                🌴 Marchés Outre-mer
              </h3>
              <p style={{color: '#666'}}>
                DOM-TOM, spécificités fiscales, opportunités e-commerce
              </p>
            </div>
            
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                📚 Patrimoine Culturel
              </h3>
              <p style={{color: '#666'}}>
                Artisanat traditionnel, produits authentiques, valorisation
              </p>
            </div>

            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                🚀 E-commerce Africain
              </h3>
              <p style={{color: '#666'}}>
                Émergence marketplaces, mobile money, innovation locale
              </p>
            </div>
          </div>
        </section>

        {/* Section Guides et Tutoriels */}
        <section style={{marginBottom: '4rem'}}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #10b981, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '2rem'
          }}>
            📖 Guides & Tutoriels
          </h2>
          
          <div className="grid-boutiques">
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                📚 Guide du Débutant
              </h3>
              <p style={{color: '#666'}}>
                Tout ce qu&apos;il faut savoir pour démarrer sur Amazon
              </p>
            </div>
            
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                💼 Guide Affiliation
              </h3>
              <p style={{color: '#666'}}>
                Maximisez vos commissions avec le programme Amazon
              </p>
            </div>
            
            <div className="boutique-card">
              <h3 style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#1a1a2e'}}>
                🌐 Expansion Internationale
              </h3>
              <p style={{color: '#666'}}>
                Stratégies pour vendre sur les 14 pays Amazon
              </p>
            </div>
          </div>
        </section>

        <div style={{textAlign: 'center', marginTop: '3rem'}}>
          <Link href="/" className="btn-retour">
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>

      <style jsx>{`
        .grid-boutiques {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .boutique-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .boutique-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .btn-retour {
          display: inline-block;
          background: linear-gradient(135deg, #6b7280, #374151);
          color: white;
          padding: 1rem 2rem;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-retour:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .grid-boutiques {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

