import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Presse() {
    const router = useRouter();

    const stats = [
        { label: 'Visiteurs mensuels', value: '100K+', icon: '👥' },
        { label: 'Pays couverts', value: '62', icon: '🌍' },
        { label: 'Guides gratuits', value: '50+', icon: '📚' },
        { label: 'Communauté', value: '10K+', icon: '💬' }
    ];

    return (<>
        <Head>
            <title>📰 Presse & Média - Reussitess® Global Nexus</title>
            <meta name="description" content="Kit presse, communiqués, statistiques et contacts média pour Reussitess® Global Nexus" />
        </Head>


        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '20px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                
                <button onClick={() => router.push('/')} style={{
                    padding: '12px 24px',
                    background: 'white',
                    color: '#667eea',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    marginBottom: '20px',
                    fontWeight: 'bold'
                }}>← Retour au Hub</button>

                <div style={{ background: 'white', padding: '50px', borderRadius: '25px', boxShadow: '0 15px 50px rgba(0,0,0,0.2)' }}>
                    
                    <h1 style={{ fontSize: '3em', marginBottom: '20px', color: '#667eea' }}>📰 Espace Presse & Média</h1>
                    <p style={{ fontSize: '1.3em', color: '#666', marginBottom: '40px' }}>
                        Ressources pour journalistes, blogueurs et créateurs de contenu
                    </p>

                    {/* Chiffres clés */}
                    <h2 style={{ color: '#667eea', fontSize: '2em', marginBottom: '25px' }}>📊 Reussitess® en chiffres</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '25px',
                        marginBottom: '50px'
                    }}>
                        {stats.map((stat, i) => (
                            <div key={i} style={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                color: 'white',
                                padding: '30px',
                                borderRadius: '15px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3em', marginBottom: '10px' }}>{stat.icon}</div>
                                <div style={{ fontSize: '2.5em', fontWeight: 'bold', marginBottom: '10px' }}>{stat.value}</div>
                                <div style={{ fontSize: '1em', opacity: 0.9 }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* À propos */}
                    <h2 style={{ color: '#667eea', fontSize: '2em', marginBottom: '25px' }}>📝 À propos</h2>
                    <div style={{ background: '#f9fafb', padding: '30px', borderRadius: '15px', marginBottom: '40px' }}>
                        <p style={{ fontSize: '1.2em', lineHeight: '1.8', marginBottom: '20px' }}>
                            <strong>Reussitess® Global Nexus</strong> est la référence mondiale francophone pour le e-commerce Amazon. 
                            Fondée en 2024, notre plateforme connecte 26 boutiques Amazon à travers 14 pays et 5 continents.
                        </p>
                        <p style={{ fontSize: '1.2em', lineHeight: '1.8' }}>
                            Nous sommes particulièrement engagés auprès des entrepreneurs d&apos;Afrique et des DOM-TOM (Guadeloupe, 
                            Martinique, Guyane, Réunion) avec des ressources adaptées à leurs marchés spécifiques.
                        </p>
                    </div>

                    {/* Kit média */}
                    <h2 style={{ color: '#667eea', fontSize: '2em', marginBottom: '25px' }}>📦 Kit Média</h2>
                    <div style={{ background: '#f9fafb', padding: '30px', borderRadius: '15px', marginBottom: '40px' }}>
                        <ul style={{ fontSize: '1.1em', lineHeight: '2.5' }}>
                            <li>📸 <strong>Logos haute résolution</strong> (PNG, SVG)</li>
                            <li>🎨 <strong>Charte graphique</strong> (couleurs, polices)</li>
                            <li>📊 <strong>Infographies</strong> (statistiques, marchés)</li>
                            <li>📷 <strong>Photos officielles</strong> (équipe, événements)</li>
                            <li>📄 <strong>Communiqués de presse</strong> (FR, EN)</li>
                        </ul>
                        <button style={{
                            marginTop: '20px',
                            padding: '15px 30px',
                            background: '#667eea',
                            color: 'white',
                            border: 'none',
                            borderRadius: '10px',
                            fontWeight: 'bold',
                            fontSize: '1.1em',
                            cursor: 'pointer'
                        }}>
                            📥 Télécharger le kit complet
                        </button>
                    </div>

                    {/* Contact presse */}
                    <h2 style={{ color: '#667eea', fontSize: '2em', marginBottom: '25px' }}>📧 Contact Presse</h2>
                    <div style={{ background: '#f9fafb', padding: '30px', borderRadius: '15px' }}>
                        <p style={{ fontSize: '1.2em', marginBottom: '15px' }}>
                            <strong>Relations Médias :</strong> presse@reussitess.global
                        </p>
                        <p style={{ fontSize: '1.2em', marginBottom: '15px' }}>
                            <strong>Partenariats :</strong> partenariats@reussitess.global
                        </p>
                        <p style={{ fontSize: '1em', color: '#666', marginTop: '20px' }}>
                            💡 Nous répondons sous 24h aux demandes média
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </>);
}
