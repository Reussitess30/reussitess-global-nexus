import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Analytics() {
    const router = useRouter();

    return (<>
        <Head>
            <title>Analyse de Performance - Reussitess® Global Nexus</title>
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
            
            <h1 style={{ color: '#667eea', marginBottom: '20px' }}>📈 Analyse de Performance</h1>
            
            <div style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <h2>Suivi en temps réel</h2>
                <p>Suivez les clics, conversions et revenus par pays pour vos 26 boutiques Amazon.</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '30px' }}>
                    <div style={{ background: '#f0f4ff', padding: '20px', borderRadius: '10px' }}>
                        <h3 style={{ color: '#667eea' }}>Total Clics</h3>
                        <p style={{ fontSize: '2em', fontWeight: 'bold', color: '#667eea' }}>12,547</p>
                    </div>
                    <div style={{ background: '#f0f4ff', padding: '20px', borderRadius: '10px' }}>
                        <h3 style={{ color: '#667eea' }}>Conversions</h3>
                        <p style={{ fontSize: '2em', fontWeight: 'bold', color: '#667eea' }}>1,892</p>
                    </div>
                    <div style={{ background: '#f0f4ff', padding: '20px', borderRadius: '10px' }}>
                        <h3 style={{ color: '#667eea' }}>Revenus</h3>
                        <p style={{ fontSize: '2em', fontWeight: 'bold', color: '#667eea' }}>$45,230</p>
                    </div>
                </div>
                
                <h3 style={{ marginTop: '40px' }}>Performance par Pays</h3>
                <div style={{ marginTop: '20px' }}>
                    {['🇺🇸 États-Unis', '🇫🇷 France', '🇩🇪 Allemagne', '🇬🇧 Royaume-Uni'].map(country => (
                        <div key={country} style={{ 
                            padding: '15px', 
                            marginBottom: '10px', 
                            background: '#f9fafb', 
                            borderRadius: '8px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <span>{country}</span>
                            <span style={{ fontWeight: 'bold', color: '#10b981' }}>+12.5%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>);
}


