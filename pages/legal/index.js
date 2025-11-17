import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Legal() {
    const router = useRouter();

    return (<>
        <Head>
            <title>Conformité & Fiscalité - Reussitess® Global Nexus</title>
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
            
            <h1 style={{ color: '#667eea', marginBottom: '20px' }}>⚖️ Conformité & Fiscalité</h1>
            
            <div style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <h2>Guides TVA et Exigences Légales</h2>
                <p>Documentation complète sur la conformité fiscale pour les 14 marchés Amazon.</p>
                
                <div style={{ marginTop: '30px' }}>
                    <h3 style={{ color: '#667eea', marginBottom: '15px' }}>📋 Par Pays</h3>
                    
                    {[
                        { country: '🇺🇸 États-Unis', vat: 'Pas de TVA fédérale', info: 'Sales Tax par état' },
                        { country: '🇫🇷 France', vat: 'TVA 20%', info: 'Déclaration mensuelle' },
                        { country: '🇩🇪 Allemagne', vat: 'TVA 19%', info: 'Reverse charge pour UE' },
                        { country: '🇬🇧 Royaume-Uni', vat: 'TVA 20%', info: 'Post-Brexit rules' },
                        { country: '🇮🇹 Italie', vat: 'TVA 22%', info: 'Facture électronique obligatoire' },
                        { country: '🇪🇸 Espagne', vat: 'TVA 21%', info: 'Sistema Inmediato de Información' }
                    ].map(item => (
                        <div key={item.country} style={{ 
                            padding: '20px', 
                            marginBottom: '15px', 
                            background: '#f9fafb', 
                            borderRadius: '10px',
                            borderLeft: '4px solid #667eea'
                        }}>
                            <h4 style={{ marginBottom: '10px' }}>{item.country}</h4>
                            <p><strong>Taux :</strong> {item.vat}</p>
                            <p><strong>Info :</strong> {item.info}</p>
                        </div>
                    ))}
                </div>
                
                <div style={{ marginTop: '40px', padding: '20px', background: '#fef3c7', borderRadius: '10px' }}>
                    <h3>⚠️ Important</h3>
                    <p>Consultez toujours un expert-comptable local pour votre situation spécifique.</p>
                </div>
            </div>
        </div>
    </>);
}
