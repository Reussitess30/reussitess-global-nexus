import Head from 'next/head';
import { useRouter } from 'next/router';

export default function France() {
    const router = useRouter();

    return (<>
        <Head>
            <title>🇫🇷 France - Bibliothèque Mondiale Reussitess®</title>
        </Head>

        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '20px' }}>
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
                    
                    <h1 style={{ fontSize: '3em', marginBottom: '10px' }}>🇫🇷 France</h1>
                    <p style={{ fontSize: '1.2em', color: '#666', marginBottom: '30px' }}>
                        Fiche complète du marché e-commerce français
                    </p>

                    {/* Statistiques clés */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                        {[
                            { label: 'Population', value: '67.7M' },
                            { label: 'E-commerce', value: '€147Mrd' },
                            { label: 'Acheteurs en ligne', value: '42M' },
                            { label: 'Croissance 2025', value: '+8.5%' }
                        ].map((stat, i) => (
                            <div key={i} style={{ background: '#f0f4ff', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                                <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#667eea' }}>{stat.value}</div>
                                <div style={{ fontSize: '0.9em', color: '#666' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Fiscalité */}
                    <h2 style={{ color: '#667eea', marginTop: '40px' }}>⚖️ Fiscalité & TVA</h2>
                    <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
                                    <th style={{ padding: '10px', textAlign: 'left' }}>Type</th>
                                    <th style={{ padding: '10px', textAlign: 'left' }}>Taux</th>
                                    <th style={{ padding: '10px', textAlign: 'left' }}>Détails</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '10px' }}>TVA Standard</td>
                                    <td style={{ padding: '10px', fontWeight: 'bold' }}>20%</td>
                                    <td style={{ padding: '10px' }}>Majorité des produits</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px' }}>TVA Réduite</td>
                                    <td style={{ padding: '10px', fontWeight: 'bold' }}>5.5%</td>
                                    <td style={{ padding: '10px' }}>Livres, alimentation</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px' }}>TVA Super-réduite</td>
                                    <td style={{ padding: '10px', fontWeight: 'bold' }}>2.1%</td>
                                    <td style={{ padding: '10px' }}>Presse, médicaments</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Amazon France */}
                    <h2 style={{ color: '#667eea' }}>🛒 Amazon.fr</h2>
                    <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        <p><strong>Marketplace :</strong> amazon.fr</p>
                        <p><strong>Vendeurs actifs :</strong> ~185,000</p>
                        <p><strong>Commission moyenne :</strong> 8-15%</p>
                        <p><strong>Programme Affiliation :</strong> 1-10% selon catégorie</p>
                    </div>

                    {/* Commissions par catégorie */}
                    <h2 style={{ color: '#667eea' }}>💰 Commissions Amazon Associates France</h2>
                    <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        <ul style={{ lineHeight: '2' }}>
                            <li>📚 Livres physiques : <strong>7%</strong></li>
                            <li>📱 Électronique : <strong>3%</strong></li>
                            <li>👕 Mode : <strong>10%</strong></li>
                            <li>🏠 Maison & Jardin : <strong>8%</strong></li>
                            <li>🎮 Jeux vidéo & Jouets : <strong>5%</strong></li>
                            <li>💄 Beauté : <strong>10%</strong></li>
                        </ul>
                    </div>

                    {/* Ressources officielles */}
                    <h2 style={{ color: '#667eea' }}>🔗 Ressources Officielles</h2>
                    <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '10px' }}>
                        <p>📄 <a href="https://www.economie.gouv.fr/entreprises/tva-taux-applicables" target="_blank" style={{ color: '#667eea' }}>
                            Taux de TVA - Ministère de l&apos;Économie
                        </a></p>
                        <p>📄 <a href="https://sellercentral-europe.amazon.com" target="_blank" style={{ color: '#667eea' }}>
                            Amazon Seller Central Europe
                        </a></p>
                        <p>📄 <a href="https://partenaires.amazon.fr" target="_blank" style={{ color: '#667eea' }}>
                            Programme Partenaires Amazon France
                        </a></p>
                    </div>

                </div>
            </div>
        </div>
    </>);
}
