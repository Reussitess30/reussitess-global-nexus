import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Guyane() {
    const router = useRouter();

    return (<>
        <Head>
            <title>🇬🇫 Guyane - Bibliothèque Mondiale Reussitess®</title>
        </Head>

        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #00b09b 0%, #96c93d 100%)', padding: '20px' }}>
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
                    
                    <h1 style={{ fontSize: '3em', marginBottom: '10px' }}>🇬🇫 Guyane</h1>
                    <p style={{ fontSize: '1.2em', color: '#666', marginBottom: '30px' }}>
                        Département français d&apos;outre-mer en Amérique du Sud - Ressources e-commerce et culture
                    </p>

                    {/* Statistiques clés */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                        {[
                            { label: 'Population', value: '290K' },
                            { label: 'Superficie', value: '83,534 km²' },
                            { label: 'Capitale', value: 'Cayenne' },
                            { label: 'Monnaie', value: 'Euro (€)' }
                        ].map((stat, i) => (
                            <div key={i} style={{ background: '#f0fff4', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                                <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#00b09b' }}>{stat.value}</div>
                                <div style={{ fontSize: '0.9em', color: '#666' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Fiscalité */}
                    <h2 style={{ color: '#00b09b', marginTop: '40px' }}>⚖️ Fiscalité & TVA</h2>
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
                                    <td style={{ padding: '10px', fontWeight: 'bold' }}>8.5%</td>
                                    <td style={{ padding: '10px' }}>Taux normal DOM</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px' }}>TVA Réduite</td>
                                    <td style={{ padding: '10px', fontWeight: 'bold' }}>2.1%</td>
                                    <td style={{ padding: '10px' }}>Produits de première nécessité</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* E-commerce */}
                    <h2 style={{ color: '#00b09b' }}>🛒 E-commerce en Guyane</h2>
                    <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        <p><strong>Marché :</strong> Accès au marché français (amazon.fr)</p>
                        <p><strong>Livraison :</strong> Délais 7-14 jours depuis la métropole</p>
                        <p><strong>Particularités :</strong> TVA DOM réduite (8.5% vs 20%), territoire français le plus éloigné</p>
                        <p><strong>Programme Affiliation :</strong> Amazon Associates France</p>
                    </div>

                    {/* Culture & Histoire */}
                    <h2 style={{ color: '#00b09b' }}>🌴 Culture & Histoire</h2>
                    <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        <ul style={{ lineHeight: '2' }}>
                            <li>🚀 Centre Spatial Guyanais (Kourou) - Base de lancement Ariane</li>
                            <li>🌳 90% de forêt amazonienne - Biodiversité exceptionnelle</li>
                            <li>🗣️ Langues : Français (officiel), Créole guyanais, langues amérindiennes</li>
                            <li>🎭 Diversité culturelle : Amérindiens, Créoles, Bushinengués, Hmongs</li>
                            <li>🏝️ Îles du Salut - Ancien bagne colonial</li>
                            <li>📚 Carnaval de Guyane - Le plus long de France (janvier à mars)</li>
                        </ul>
                    </div>

                    {/* Ressources éducatives */}
                    <h2 style={{ color: '#00b09b' }}>📖 Ressources Éducatives</h2>
                    <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        <p>🏫 <strong>Académie de Guyane</strong> : Système éducatif français adapté au contexte amazonien</p>
                        <p>📚 <strong>Archives territoriales de Guyane</strong> : Histoire du bagne et patrimoine</p>
                        <p>🎓 <strong>Université de Guyane</strong> : Campus de Cayenne et Saint-Laurent du Maroni</p>
                        <p>🌍 <strong>Musée des Cultures Guyanaises</strong> : Histoire et diversité culturelle</p>
                    </div>

                    {/* Ressources officielles */}
                    <h2 style={{ color: '#00b09b' }}>🔗 Ressources Officielles</h2>
                    <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '10px' }}>
                        <p>📄 <a href="https://www.ctguyane.fr/" target="_blank" rel="noopener noreferrer" style={{ color: '#00b09b' }}>
                            Collectivité Territoriale de Guyane
                        </a></p>
                        <p>📄 <a href="https://www.ac-guyane.fr/" target="_blank" rel="noopener noreferrer" style={{ color: '#00b09b' }}>
                            Académie de Guyane
                        </a></p>
                        <p>📄 <a href="https://www.amazon.fr" target="_blank" rel="noopener noreferrer" style={{ color: '#00b09b' }}>
                            Amazon.fr (Livraison Guyane)
                        </a></p>
                        <p>📄 <a href="https://partenaires.amazon.fr" target="_blank" rel="noopener noreferrer" style={{ color: '#00b09b' }}>
                            Programme Partenaires Amazon France
                        </a></p>
                    </div>

                </div>
            </div>
        </div>
    </>);
}
