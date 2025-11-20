import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Affiliation() {
    const router = useRouter();

    return (<>
        <Head>
            <title>Programme d&apos;Affiliation - Reussitess® Global Nexus</title>
        </Head>
        <div style={{ padding: '50px', maxWidth: '1200px', margin: '0 auto' }}>
            <button onClick={() => router.push('/')} style={{
                padding: '10px 20px',
                background: '#667eea',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                marginBottom: '30px'
            }}>← Retour au Hub</button>
            
            <h1 style={{ color: '#667eea', marginBottom: '20px' }}>💰 Programme d&apos;Affiliation</h1>
            
            <div style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <h2>Gagnez des revenus passifs</h2>
                <p style={{ fontSize: '1.2em', marginBottom: '30px' }}>Partagez nos 26 boutiques Amazon et recevez des commissions sur chaque vente.</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '30px' }}>
                    <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '30px', borderRadius: '15px', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '3em', margin: '0' }}>4-10%</h3>
                        <p>Commission sur chaque vente</p>
                    </div>
                    <div style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white', padding: '30px', borderRadius: '15px', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '3em', margin: '0' }}>24h</h3>
                        <p>Cookie de tracking</p>
                    </div>
                    <div style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white', padding: '30px', borderRadius: '15px', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '3em', margin: '0' }}>14</h3>
                        <p>Pays disponibles</p>
                    </div>
                </div>
                
                <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>Comment ça marche ?</h3>
                <ol style={{ fontSize: '1.1em', lineHeight: '2' }}>
                    <li>Inscrivez-vous gratuitement au programme</li>
                    <li>Recevez vos liens d&apos;affiliation personnalisés</li>
                    <li>Partagez sur vos réseaux sociaux, blog, email...</li>
                    <li>Gagnez des commissions sur chaque vente générée</li>
                </ol>
                
                <a href="https://partenaires.amazon.fr/influencers" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button style={{
                        marginTop: '30px',
                        padding: '15px 40px',
                        background: 'linear-gradient(45deg, #ff9500, #ffb84d)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '30px',
                        fontSize: '1.2em',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        width: '100%',
                        maxWidth: '400px',
                        display: 'block',
                        margin: '30px auto 0'
                    }}>🚀 Rejoindre le Programme Amazon Influenceur</button>
                </a>
                
                <h3 style={{ marginTop: '50px', marginBottom: '20px', color: '#667eea' }}>📚 Ressources pour Réussir</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
                    <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', border: '2px solid #e9ecef' }}>
                        <h4 style={{ color: '#667eea', marginBottom: '15px' }}>🧮 Outils E-commerce</h4>
                        <p style={{ fontSize: '0.95em', marginBottom: '15px' }}>Calculateurs TVA, commissions, profits pour optimiser vos revenus</p>
                        <button onClick={() => router.push('/bibliotheque/outils')} style={{
                            padding: '10px 20px',
                            background: '#667eea',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            width: '100%'
                        }}>Accéder aux Outils →</button>
                    </div>
                    
                    <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', border: '2px solid #e9ecef' }}>
                        <h4 style={{ color: '#667eea', marginBottom: '15px' }}>⚖️ Réglementation</h4>
                        <p style={{ fontSize: '0.95em', marginBottom: '15px' }}>RGPD, TVA internationale, conformité légale e-commerce</p>
                        <button onClick={() => router.push('/bibliotheque/reglementation')} style={{
                            padding: '10px 20px',
                            background: '#667eea',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            width: '100%'
                        }}>En savoir plus →</button>
                    </div>
                    
                    <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', border: '2px solid #e9ecef' }}>
                        <h4 style={{ color: '#667eea', marginBottom: '15px' }}>📰 Actualités E-commerce</h4>
                        <p style={{ fontSize: '0.95em', marginBottom: '15px' }}>Dernières tendances, stratégies marketing, conseils d&apos;experts</p>
                        <button onClick={() => router.push('/bibliotheque/actu')} style={{
                            padding: '10px 20px',
                            background: '#667eea',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            width: '100%'
                        }}>Lire les actualités →</button>
                    </div>
                </div>
                
                <h3 style={{ marginTop: '50px', marginBottom: '20px', color: '#667eea' }}>🌍 Marchés Internationaux</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
                    <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '25px', borderRadius: '12px', cursor: 'pointer' }} onClick={() => router.push('/bibliotheque/pays/fr')}>
                        <h4 style={{ margin: '0 0 10px 0' }}>🇫🇷 France</h4>
                        <p style={{ fontSize: '0.9em', margin: 0 }}>Ressources, TVA, réglementations françaises</p>
                    </div>
                    
                    <div style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white', padding: '25px', borderRadius: '12px', cursor: 'pointer' }} onClick={() => router.push('/bibliotheque/pays/guadeloupe')}>
                        <h4 style={{ margin: '0 0 10px 0' }}>🇬🇵 Guadeloupe</h4>
                        <p style={{ fontSize: '0.9em', margin: 0 }}>Spécificités DOM-TOM, culture locale</p>
                    </div>
                    
                    <div style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white', padding: '25px', borderRadius: '12px', cursor: 'pointer' }} onClick={() => router.push('/bibliotheque/pays/martinique')}>
                        <h4 style={{ margin: '0 0 10px 0' }}>🇲🇶 Martinique</h4>
                        <p style={{ fontSize: '0.9em', margin: 0 }}>Guide complet Martinique, ressources</p>
                    </div>
                    
                    <div style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', color: 'white', padding: '25px', borderRadius: '12px', cursor: 'pointer' }} onClick={() => router.push('/bibliotheque/pays/guyane')}>
                        <h4 style={{ margin: '0 0 10px 0' }}>🇬🇫 Guyane</h4>
                        <p style={{ fontSize: '0.9em', margin: 0 }}>Opportunités e-commerce Guyane française</p>
                    </div>
                </div>
                
                <h3 style={{ marginTop: '50px', marginBottom: '20px', color: '#667eea' }}>👨‍🏫 Formation & Support Pédagogique</h3>
                <div style={{ background: '#fff3cd', padding: '25px', borderRadius: '12px', border: '2px solid #ffc107' }}>
                    <h4 style={{ color: '#856404', marginBottom: '15px' }}>Ressources pour Enseignants & Formateurs</h4>
                    <p style={{ fontSize: '1.05em', marginBottom: '20px' }}>Guides pédagogiques, supports de cours, exercices pratiques pour enseigner le e-commerce et l&apos;affiliation Amazon.</p>
                    <button onClick={() => router.push('/bibliotheque/prof')} style={{
                        padding: '12px 30px',
                        background: '#ffc107',
                        color: '#000',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '1.05em'
                    }}>📖 Accéder aux ressources pédagogiques →</button>
                </div>
                
                <h3 style={{ marginTop: '50px', marginBottom: '20px', color: '#667eea' }}>📚 Culture & Histoire</h3>
                <div style={{ background: '#d1ecf1', padding: '25px', borderRadius: '12px', border: '2px solid #17a2b8' }}>
                    <h4 style={{ color: '#0c5460', marginBottom: '15px' }}>Histoire Africaine & Outremer</h4>
                    <p style={{ fontSize: '1.05em', marginBottom: '20px' }}>Découvrez l&apos;histoire et la culture des territoires français d&apos;outremer, patrimoine africain et diaspora.</p>
                    <button onClick={() => router.push('/bibliotheque/histoire')} style={{
                        padding: '12px 30px',
                        background: '#17a2b8',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '1.05em'
                    }}>🌍 Explorer l&apos;histoire →</button>
                </div>
                
                <div style={{ marginTop: '50px', padding: '30px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', borderRadius: '15px', textAlign: 'center' }}>
                    <h3 style={{ margin: '0 0 15px 0' }}>📧 Besoin d&apos;aide ?</h3>
                    <p style={{ fontSize: '1.1em', marginBottom: '20px' }}>Notre équipe est disponible 24/7 pour répondre à vos questions</p>
                    <a href="mailto:influenceur@reussitess.fr" style={{ textDecoration: 'none' }}>
                        <button style={{
                            padding: '12px 30px',
                            background: 'white',
                            color: '#667eea',
                            border: 'none',
                            borderRadius: '25px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            fontSize: '1.1em'
                        }}>✉️ influenceur@reussitess.fr</button>
                    </a>
                </div>
            </div>
        </div>
    </>);
}
