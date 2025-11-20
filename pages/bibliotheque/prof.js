import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Professeurs() {
    const router = useRouter();

    return (<>
        <Head>
            <title>👨‍🏫 Ressources Professeurs - Bibliothèque Reussitess®</title>
        </Head>

        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', padding: '20px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                
                <button onClick={() => router.push('/bibliotheque')} style={{
                    padding: '10px 20px',
                    background: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginBottom: '20px'
                }}>← Retour à la Bibliothèque</button>

                <div style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }}>
                    
                    <h1 style={{ fontSize: '3em', marginBottom: '10px' }}>👨‍🏫 Ressources pour Professeurs</h1>
                    <p style={{ fontSize: '1.2em', color: '#666', marginBottom: '30px' }}>
                        Outils pédagogiques et ressources pour l&apos;enseignement du commerce international et de l&apos;entrepreneuriat
                    </p>

                    {/* Programmes Pédagogiques */}
                    <h2 style={{ color: '#fa709a', marginTop: '40px' }}>📚 Programmes Pédagogiques</h2>
                    <div style={{ background: '#fff9f5', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        
                        <h3>Commerce International & E-commerce</h3>
                        <ul style={{ lineHeight: '2', marginBottom: '20px' }}>
                            <li>📖 Introduction au commerce électronique mondial</li>
                            <li>🌍 Géographie économique et marchés internationaux</li>
                            <li>💼 Entrepreneuriat digital et innovation</li>
                            <li>📊 Analyse de marché et stratégie commerciale</li>
                            <li>💳 Systèmes de paiement internationaux</li>
                        </ul>

                        <h3>Programmes par Niveau</h3>
                        <div style={{ marginTop: '20px' }}>
                            <p><strong>Lycée :</strong> Initiation au commerce en ligne, découverte des marketplaces</p>
                            <p><strong>Université :</strong> Stratégies e-commerce, marketing digital, affiliation</p>
                            <p><strong>Formation Professionnelle :</strong> Gestion de boutiques en ligne, optimisation des ventes</p>
                        </div>
                    </div>

                    {/* Outils Pédagogiques */}
                    <h2 style={{ color: '#fa709a' }}>🔧 Outils Pédagogiques Disponibles</h2>
                    <div style={{ background: '#fff9f5', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        
                        <h3>Calculateurs Pratiques</h3>
                        <p style={{ marginBottom: '15px' }}>
                            Accédez à nos outils de calcul pour enseigner les aspects pratiques du commerce :
                        </p>
                        <ul style={{ lineHeight: '2' }}>
                            <li>🧮 <a href="/bibliotheque/outils" style={{ color: '#fa709a' }}>
                                Calculateur de TVA internationale
                            </a></li>
                            <li>💰 <a href="/bibliotheque/outils" style={{ color: '#fa709a' }}>
                                Calculateur de commissions d&apos;affiliation
                            </a></li>
                            <li>📊 <a href="/bibliotheque/outils" style={{ color: '#fa709a' }}>
                                Calculateur de profits et marges
                            </a></li>
                        </ul>

                        <h3>Fiches Pays</h3>
                        <p style={{ marginBottom: '15px' }}>
                            Études de cas détaillées par pays avec données économiques et culturelles :
                        </p>
                        <ul style={{ lineHeight: '2' }}>
                            <li>🇫🇷 <a href="/bibliotheque/pays/fr" style={{ color: '#fa709a' }}>
                                France - Marché E-commerce
                            </a></li>
                            <li>🌍 14 pays couverts sur 5 continents</li>
                            <li>📈 Statistiques actualisées régulièrement</li>
                        </ul>
                    </div>

                    {/* Études de Cas */}
                    <h2 style={{ color: '#fa709a' }}>💼 Études de Cas Amazon</h2>
                    <div style={{ background: '#fff9f5', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        
                        <h3>Cas Pratique : Programme d&apos;Affiliation Amazon</h3>
                        <p style={{ marginBottom: '15px' }}>
                            Utilisez notre réseau de 26 boutiques Amazon comme exemple concret :
                        </p>
                        <ul style={{ lineHeight: '2' }}>
                            <li>🛍️ <strong>14 Boutiques Personnel</strong> (amourguadeloupe) incluant France et Brésil</li>
                            <li>📱 <strong>12 Boutiques Influenceur</strong> (influencer-fb942837) sans France ni Brésil</li>
                            <li>🌐 Couverture de 14 pays sur 5 continents</li>
                            <li>💰 Analyse comparative des commissions par pays</li>
                        </ul>

                        <h3>Exercices Pratiques</h3>
                        <ul style={{ lineHeight: '2' }}>
                            <li>Calcul de rentabilité d&apos;une campagne d&apos;affiliation multi-pays</li>
                            <li>Comparaison des taux de TVA entre différents marchés</li>
                            <li>Stratégie de sélection de produits par marché</li>
                            <li>Analyse de la concurrence sur Amazon</li>
                        </ul>
                    </div>

                    {/* Ressources Complémentaires */}
                    <h2 style={{ color: '#fa709a' }}>📖 Ressources Complémentaires</h2>
                    <div style={{ background: '#fff9f5', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        
                        <h3>Histoire & Culture</h3>
                        <ul style={{ lineHeight: '2' }}>
                            <li>📚 <a href="/bibliotheque/histoire" style={{ color: '#fa709a' }}>
                                Histoire Africaine & Outremer
                            </a></li>
                            <li>🏝️ <a href="/ressources/culture-guadeloupe" style={{ color: '#fa709a' }}>
                                Culture Guadeloupéenne
                            </a></li>
                            <li>🌺 <a href="/ressources/patrimoine-martinique" style={{ color: '#fa709a' }}>
                                Patrimoine Martiniquais
                            </a></li>
                        </ul>

                        <h3>Réglementation & Conformité</h3>
                        <ul style={{ lineHeight: '2' }}>
                            <li>⚖️ <a href="/bibliotheque/reglementation" style={{ color: '#fa709a' }}>
                                RGPD et Protection des Données
                            </a></li>
                            <li>📋 Conformité fiscale internationale</li>
                            <li>🔒 Sécurité des paiements en ligne</li>
                        </ul>
                    </div>

                    {/* Guides Méthodologiques */}
                    <h2 style={{ color: '#fa709a' }}>📝 Guides Méthodologiques</h2>
                    <div style={{ background: '#fff9f5', padding: '20px', borderRadius: '10px' }}>
                        <ul style={{ lineHeight: '2' }}>
                            <li>📘 Guide du débutant en e-commerce</li>
                            <li>📗 Stratégies d&apos;affiliation avancées</li>
                            <li>📙 Marketing digital international</li>
                            <li>📕 Gestion multi-marchés sur Amazon</li>
                            <li>📔 Optimisation fiscale légale</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </>);
}
