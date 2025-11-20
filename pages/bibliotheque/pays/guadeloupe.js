import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Guadeloupe() {
    const router = useRouter();

    return (<>
        <Head>
            <title>🇬🇵 Guadeloupe - Bibliothèque Mondiale Reussitess®</title>
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
                    
                    <h1 style={{ fontSize: '3em', marginBottom: '10px' }}>🇬🇵 Guadeloupe</h1>
                    <p style={{ fontSize: '1.2em', color: '#666', marginBottom: '30px' }}>
                        Département français d&apos;outre-mer - Ressources e-commerce et culture
                    </p>

                    {/* Statistiques clés */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                        {[
                            { label: 'Population', value: '384K' },
                            { label: 'Superficie', value: '1,628 km²' },
                            { label: 'Capitale', value: 'Basse-Terre' },
                            { label: 'Monnaie', value: 'Euro (€)' }
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
                    <h2 style={{ color: '#667eea' }}>🛒 E-commerce en Guadeloupe</h2>
                    <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        <p><strong>Marché :</strong> Accès au marché français (amazon.fr)</p>
                        <p><strong>Livraison :</strong> Délais 5-10 jours depuis la métropole</p>
                        <p><strong>Particularités :</strong> TVA DOM réduite (8.5% vs 20%)</p>
                        <p><strong>Programme Affiliation :</strong> Amazon Associates France</p>
                    </div>

                    {/* Culture & Histoire */}
                    <h2 style={{ color: '#667eea' }}>🌴 Culture & Histoire</h2>
                    <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        <ul style={{ lineHeight: '2' }}>
                            <li>🏝️ Archipel en forme de papillon : Grande-Terre et Basse-Terre</li>
                            <li>🗣️ Langues : Français (officiel), Créole guadeloupéen</li>
                            <li>🎭 Riche tradition du Gwo Ka (musique et danse)</li>
                            <li>🎵 Carnaval de Guadeloupe (janvier-mars)</li>
                            <li>🌺 Parc National de la Guadeloupe (volcan de la Soufrière)</li>
                            <li>📚 Terre de Maryse Condé, écrivaine Prix Nobel de littérature alternative</li>
                        </ul>
                    </div>

                    {/* Ressources éducatives */}
                    <h2 style={{ color: '#667eea' }}>📖 Ressources Éducatives</h2>
                    <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        <p>🏫 <strong>Académie de Guadeloupe</strong> : Système éducatif français adapté</p>
                        <p>📚 <strong>Archives départementales</strong> : Histoire et patrimoine guadeloupéen</p>
                        <p>🎓 <strong>Université des Antilles</strong> : Campus de Pointe-à-Pitre et Fouillole</p>
                        <p>🌍 <strong>Mémorial ACTe</strong> : Centre caribéen d&apos;expression sur la traite et l&apos;esclavage</p>
                    </div>

                    {/* Ressources officielles */}
                    <h2 style={{ color: '#667eea' }}>🔗 Ressources Officielles</h2>
                    <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '10px' }}>
                        <p>📄 <a href="https://www.guadeloupe-archipel.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#667eea' }}>
                            Région Guadeloupe
                        </a></p>
                        <p>📄 <a href="https://www.ac-guadeloupe.fr/" target="_blank" rel="noopener noreferrer" style={{ color: '#667eea' }}>
                            Académie de Guadeloupe
                        </a></p>
                        <p>📄 <a href="https://www.amazon.fr" target="_blank" rel="noopener noreferrer" style={{ color: '#667eea' }}>
                            Amazon.fr (Livraison Guadeloupe)
                        </a></p>
                        <p>📄 <a href="https://partenaires.amazon.fr" target="_blank" rel="noopener noreferrer" style={{ color: '#667eea' }}>
                            Programme Partenaires Amazon France
                        </a></p>
                    </div>

                </div>
            </div>
        </div>
    </>);
}
