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
        { term: 'BSR', def: 'Best Sellers Rank - Classement des meilleures ventes par catégorie', cat: 'Statistiques' },
        { term: 'PPC', def: 'Pay Per Click - Publicité au clic sur Amazon (Sponsored Products)', cat: 'Publicité' },
        { term: 'Amazon Associates', def: 'Programme d\'affiliation Amazon (1-10% de commission)', cat: 'Affiliation' },
        { term: 'Prime', def: 'Programme d\'abonnement Amazon avec livraison gratuite et rapide', cat: 'Service' },
        { term: 'Seller Central', def: 'Interface de gestion pour les vendeurs Amazon', cat: 'Plateforme' },
        { term: 'Vendor Central', def: 'Interface pour les fournisseurs vendant directement à Amazon', cat: 'Plateforme' },
        { term: 'SKU', def: 'Stock Keeping Unit - Référence unique de gestion des stocks', cat: 'Technique' },
        { term: 'TVA', def: 'Taxe sur la Valeur Ajoutée - Impôt indirect sur la consommation', cat: 'Fiscalité' },
        { term: 'Reverse Charge', def: 'Mécanisme où l\'acheteur paie la TVA (ventes B2B UE)', cat: 'Fiscalité' },
        { term: 'RGPD', def: 'Règlement Général sur la Protection des Données (privacy EU)', cat: 'Légal' },
        { term: 'Feedback', def: 'Note et commentaire laissés par un client sur le vendeur', cat: 'Réputation' },
        { term: 'Review', def: 'Avis client sur un produit spécifique', cat: 'Réputation' },
        { term: 'Keywords', def: 'Mots-clés pour le référencement des produits sur Amazon', cat: 'SEO' },
        { term: 'Listing', def: 'Page produit complète sur Amazon', cat: 'Vente' },
        { term: 'Suppressed Listing', def: 'Listing désactivé pour non-conformité ou problème', cat: 'Technique' }
    ];

    const filteredTerms = terms.filter(t => 
        t.term.toLowerCase().includes(search.toLowerCase()) ||
        t.def.toLowerCase().includes(search.toLowerCase())
    );

    const categories = [...new Set(terms.map(t => t.cat))];

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

                    {/* Recherche */}
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

                    {/* Catégories */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
                        {categories.map(cat => (
                            <span key={cat} style={{
                                background: '#f0f4ff',
                                color: '#667eea',
                                padding: '8px 16px',
                                borderRadius: '20px',
                                fontSize: '0.9em',
                                cursor: 'pointer'
                            }}>
                                {cat} ({terms.filter(t => t.cat === cat).length})
                            </span>
                        ))}
                    </div>

                    {/* Liste des termes */}
                    <div>
                        {filteredTerms.length === 0 ? (
                            <p style={{ textAlign: 'center', color: '#666', padding: '40px' }}>
                                Aucun terme trouvé pour "{search}"
                            </p>
                        ) : (
                            filteredTerms.map((term, i) => (
                                <div key={i} style={{
                                    background: '#f9fafb',
                                    padding: '20px',
                                    borderRadius: '10px',
                                    marginBottom: '15px',
                                    borderLeft: '4px solid #667eea'
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                        <h3 style={{ color: '#667eea', margin: 0, fontSize: '1.3em' }}>{term.term}</h3>
                                        <span style={{
                                            background: '#667eea',
                                            color: 'white',
                                            padding: '5px 12px',
                                            borderRadius: '15px',
                                            fontSize: '0.8em'
                                        }}>
                                            {term.cat}
                                        </span>
                                    </div>
                                    <p style={{ margin: 0, color: '#666', lineHeight: '1.6' }}>{term.def}</p>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Stats */}
                    <div style={{ marginTop: '40px', textAlign: 'center', padding: '20px', background: '#f0f4ff', borderRadius: '10px' }}>
                        <p style={{ margin: 0, color: '#667eea', fontSize: '1.1em' }}>
                            📚 {terms.length} termes expliqués • {categories.length} catégories • Mis à jour régulièrement
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </>);
}
