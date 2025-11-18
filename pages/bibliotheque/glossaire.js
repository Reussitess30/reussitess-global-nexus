import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Glossaire() {
    const router = useRouter();
    const [search, setSearch] = useState('');

    const terms = [
        { term: 'ASIN', def: 'Amazon Standard Identification Number - Identifiant unique de chaque produit sur Amazon', cat: 'Technique' },
        { term: 'FBA', def: 'Fulfillment by Amazon - Service de logistique Amazon (stockage, préparation, expédition)', cat: 'Logistique' },
        { term: 'FBM', def: 'Fulfillment by Merchant - Expédition gérée par le vendeur lui-même', cat: 'Logistique' },
        { term: 'Buy Box', def: 'Encart d\'achat principal sur une page produit Amazon (très convoité)', cat: 'Vente' },
        { term: 'A+ Content', def: 'Contenu enrichi avec images et texte formaté sur les pages produits', cat: 'Marketing' },
        { term: 'BSR', def: 'Best Sellers Rank - Classement des meilleures ventes par catégorie', cat: 'Statistiques' }
    ];

    const filteredTerms = terms.filter(t => 
        t.term.toLowerCase().includes(search.toLowerCase()) ||
        t.def.toLowerCase().includes(search.toLowerCase())
    );

    return (<>
        <Head>
            <title>📖 Glossaire E-commerce - Bibliothèque Mondiale</title>
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
                    
                    <h1 style={{ fontSize: '2.5em', marginBottom: '10px' }}>📖 Glossaire E-commerce</h1>
                    <p style={{ fontSize: '1.2em', color: '#666', marginBottom: '30px' }}>
                        Tous les termes du e-commerce Amazon expliqués simplement
                    </p>

                    <input 
                        type="text"
                        placeholder="🔍 Rechercher un terme..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '15px',
                            fontSize: '1.1em',
                            border: '2px solid #e0e0e0',
                            borderRadius: '10px',
                            marginBottom: '30px'
                        }}
                    />

                    <div>
                        {filteredTerms.map((term, i) => (
                            <div key={i} style={{
                                background: '#f9fafb',
                                padding: '20px',
                                borderRadius: '10px',
                                marginBottom: '15px',
                                borderLeft: '4px solid #667eea'
                            }}>
                                <h3 style={{ color: '#667eea', margin: '0 0 10px 0', fontSize: '1.3em' }}>{term.term}</h3>
                                <p style={{ margin: 0, color: '#666', lineHeight: '1.6' }}>{term.def}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    </>);
}
