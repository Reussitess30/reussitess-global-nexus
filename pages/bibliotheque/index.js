import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

const COUNTRIES = [
    { code: 'US', name: 'États-Unis', flag: '🇺🇸', vat: 'Sales Tax variable', amazon: 'amazon.com' },
    { code: 'FR', name: 'France', flag: '🇫🇷', vat: '20%', amazon: 'amazon.fr' },
    { code: 'DE', name: 'Allemagne', flag: '🇩🇪', vat: '19%', amazon: 'amazon.de' },
    { code: 'GB', name: 'Royaume-Uni', flag: '🇬🇧', vat: '20%', amazon: 'amazon.co.uk' },
    { code: 'IT', name: 'Italie', flag: '🇮🇹', vat: '22%', amazon: 'amazon.it' },
    { code: 'ES', name: 'Espagne', flag: '🇪🇸', vat: '21%', amazon: 'amazon.es' },
    { code: 'CA', name: 'Canada', flag: '🇨🇦', vat: 'GST 5% + PST variable', amazon: 'amazon.ca' },
    { code: 'IN', name: 'Inde', flag: '🇮🇳', vat: 'GST 18%', amazon: 'amazon.in' },
    { code: 'NL', name: 'Pays-Bas', flag: '🇳🇱', vat: '21%', amazon: 'amazon.nl' },
    { code: 'SE', name: 'Suède', flag: '🇸🇪', vat: '25%', amazon: 'amazon.se' },
    { code: 'SG', name: 'Singapour', flag: '🇸🇬', vat: 'GST 8%', amazon: 'amazon.sg' },
    { code: 'AU', name: 'Australie', flag: '🇦🇺', vat: 'GST 10%', amazon: 'amazon.com.au' },
    { code: 'BE', name: 'Belgique', flag: '🇧🇪', vat: '21%', amazon: 'amazon.com.be' },
    { code: 'BR', name: 'Brésil', flag: '🇧🇷', vat: 'ICMS variable', amazon: 'amazon.com.br' }
];

export default function Bibliotheque() {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCountries = COUNTRIES.filter(c => 
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (<>
        <Head>
            <title>📚 Bibliothèque Mondiale - Reussitess® Global Nexus</title>
            <meta name="description" content="Centre de ressources mondial sur le e-commerce Amazon" />
        </Head>

        <div style={{ 
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '20px'
        }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                
                {/* Header */}
                <div style={{
                    background: 'rgba(255,255,255,0.95)',
                    padding: '30px',
                    borderRadius: '20px',
                    marginBottom: '30px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
                }}>
                    <button onClick={() => router.push('/')} style={{
                        padding: '10px 20px',
                        background: '#667eea',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        marginBottom: '20px'
                    }}>← Retour au Hub</button>
                    
                    <h1 style={{ 
                        fontSize: '2.5em',
                        margin: '0 0 10px 0',
                        background: 'linear-gradient(45deg, #667eea, #764ba2)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>📚 Bibliothèque Mondiale Reussitess®</h1>
                    <p style={{ fontSize: '1.2em', color: '#666' }}>
                        Votre centre de ressources complet sur le e-commerce Amazon dans 14 pays
                    </p>
                </div>

                {/* Navigation Rapide */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '20px',
                    marginBottom: '30px'
                }}>
                    {[
                        { icon: '🌍', title: 'Explorer par Pays', desc: '14 fiches détaillées', link: '#pays' },
                        { icon: '📊', title: 'Statistiques Live', desc: 'Données en temps réel', link: '#stats' },
                        { icon: '💡', title: 'Guides Pratiques', desc: 'Formations gratuites', link: '/bibliotheque/guides' },
                        { icon: '🧮', title: 'Outils & Calculateurs', desc: 'TVA, commissions, profits', link: '/bibliotheque/outils' },
                        { icon: '📖', title: 'Glossaire Multilingue', desc: 'Termes e-commerce', link: '/bibliotheque/glossaire' },
                        { icon: '⚖️', title: 'Conformité Légale', desc: 'Règles par pays', link: '/legal' }
                    ].map((item, i) => (
                        <div key={i} onClick={() => router.push(item.link)} style={{
                            background: 'linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%)',
                            padding: '25px',
                            borderRadius: '15px',
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                            boxShadow: '0 8px 30px rgba(102, 126, 234, 0.3)'
                        }}>
                            <div style={{ fontSize: '3em', marginBottom: '10px' }}>{item.icon}</div>
                            <h3 style={{ margin: '0 0 10px 0', color: '#667eea' }}>{item.title}</h3>
                            <p style={{ margin: 0, color: '#666', fontSize: '0.9em' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Recherche Pays */}
                <div id="pays" style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%)',
                    padding: '30px',
                    borderRadius: '20px',
                    marginBottom: '30px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                }}>
                    <h2 style={{ color: '#667eea', marginBottom: '20px' }}>🌍 Explorer par Pays</h2>
                    
                    <input 
                        type="text"
                        placeholder="🔍 Rechercher un pays..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '15px',
                            fontSize: '1.1em',
                            border: '2px solid #e0e0e0',
                            borderRadius: '10px',
                            marginBottom: '20px'
                        }}
                    />

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '20px'
                    }}>
                        {filteredCountries.map(country => (
                            <div key={country.code} onClick={() => router.push(`/bibliotheque/pays/${country.code.toLowerCase()}`)} style={{
                                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                                padding: '25px',
                                borderRadius: '15px',
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                                border: '2px solid transparent'
                            }}>
                                <div style={{ fontSize: '3em', marginBottom: '10px' }}>{country.flag}</div>
                                <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{country.name}</h3>
                                <div style={{ fontSize: '0.9em', color: '#666' }}>
                                    <p style={{ margin: '5px 0' }}><strong>TVA:</strong> {country.vat}</p>
                                    <p style={{ margin: '5px 0' }}><strong>Amazon:</strong> {country.amazon}</p>
                                </div>
                                <div style={{ 
                                    marginTop: '15px',
                                    padding: '8px',
                                    background: '#667eea',
                                    color: 'white',
                                    borderRadius: '8px',
                                    textAlign: 'center',
                                    fontSize: '0.9em',
                                    fontWeight: 'bold'
                                }}>
                                    Voir la fiche complète →
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Statistiques Globales */}
                <div id="stats" style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%)',
                    padding: '30px',
                    borderRadius: '20px',
                    marginBottom: '30px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                }}>
                    <h2 style={{ color: '#667eea', marginBottom: '20px' }}>📊 Statistiques E-commerce Mondiales 2025</h2>
                    
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '20px'
                    }}>
                        {[
                            { label: 'Marché mondial e-commerce', value: '$6.3T', change: '+10.4%' },
                            { label: 'Vendeurs Amazon actifs', value: '9.7M', change: '+15%' },
                            { label: 'Produits sur Amazon', value: '350M+', change: '+8%' },
                            { label: 'Prime Members', value: '200M+', change: '+12%' }
                        ].map((stat, i) => (
                            <div key={i} style={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                color: 'white',
                                padding: '25px',
                                borderRadius: '15px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '2.5em', fontWeight: 'bold', marginBottom: '10px' }}>
                                    {stat.value}
                                </div>
                                <div style={{ fontSize: '0.9em', opacity: 0.9, marginBottom: '5px' }}>
                                    {stat.label}
                                </div>
                                <div style={{ 
                                    fontSize: '1.1em',
                                    fontWeight: 'bold',
                                    color: '#4ade80'
                                }}>
                                    {stat.change}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Divulgation */}
                <div style={{
                    background: '#fff3cd',
                    padding: '20px',
                    borderRadius: '10px',
                    borderLeft: '4px solid #ffc107',
                    textAlign: 'center'
                }}>
                    <p style={{ margin: 0, fontSize: '0.9em', color: '#856404' }}>
                        ⚠️ <strong>Divulgation :</strong> En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises.
                    </p>
                </div>

            </div>
        </div>
    </>);
}
