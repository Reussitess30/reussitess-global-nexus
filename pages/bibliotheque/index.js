import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Bibliotheque() {
    const router = useRouter();

    return (<>
        <Head>
            <title>📚 Bibliothèque Mondiale - Reussitess®</title>
        </Head>

        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '20px' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                
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

                <div style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 15px 50px rgba(0,0,0,0.2)' }}>
                    <h1 style={{ fontSize: '3em', color: '#667eea' }}>📚 Bibliothèque Mondiale</h1>
                    <p style={{ fontSize: '1.3em', color: '#666' }}>Centre de ressources e-commerce mondial</p>
                </div>

            </div>
        </div>
    </>);
}
