import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Affiliation() {
    const router = useRouter();

    return (<>
        <Head>
            <title>Programme d'Affiliation - Reussitess® Global Nexus</title>
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
            
            <h1 style={{ color: '#667eea', marginBottom: '20px' }}>💰 Programme d'Affiliation</h1>
            
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
                    <li>Recevez vos liens d'affiliation personnalisés</li>
                    <li>Partagez sur vos réseaux sociaux, blog, email...</li>
                    <li>Gagnez des commissions sur chaque vente générée</li>
                </ol>
                
                <a 
                    href="https://affiliate-program.amazon.com/influencers"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
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
                        margin: '30px auto 0',
                        textDecoration: 'none',
                        textAlign: 'center'
                    }}>S'inscrire au Programme Influenceur Amazon</a>
            </div>
        </div>
    </>);
}
