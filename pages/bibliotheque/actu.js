import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Actualites() {
    const router = useRouter();

    const newsCategories = [
        {
            title: '🌍 E-commerce International',
            items: [
                'Croissance du e-commerce mondial : +8.5% prévus en 2025',
                'Amazon continue son expansion avec de nouveaux marchés en Afrique',
                'Les marketplaces européennes harmonisent leurs régulations TVA',
                'Le mobile-first commerce atteint 75% des transactions en ligne'
            ]
        },
        {
            title: '🇪🇺 Union Européenne',
            items: [
                'Nouvelles directives sur la protection des consommateurs en ligne',
                'Harmonisation des taux de TVA pour le commerce électronique',
                'Le Digital Services Act (DSA) entre en application complète',
                'Initiative pour le commerce équitable numérique'
            ]
        },
        {
            title: '🏝️ Outre-Mers & Caraïbes',
            items: [
                'Développement de l\'infrastructure numérique dans les DOM-TOM',
                'Programmes de soutien au e-commerce local en Martinique et Guadeloupe',
                'Initiative régionale pour la transformation digitale des Caraïbes',
                'Projets de coopération économique entre territoires ultramarins'
            ]
        },
        {
            title: '📱 Technologies & Innovation',
            items: [
                'L\'Intelligence Artificielle révolutionne le service client',
                'Blockchain et traçabilité des produits : nouveaux standards',
                'Réalité augmentée dans le shopping en ligne : adoption massive',
                'Paiements numériques : nouvelles solutions pour l\'international'
            ]
        }
    ];

    const trends = [
        { 
            icon: '📊', 
            title: 'Tendances 2025',
            description: 'Commerce vocal, personnalisation IA, durabilité, social commerce'
        },
        { 
            icon: '🎯', 
            title: 'Marchés Émergents',
            description: 'Afrique subsaharienne, Asie du Sud-Est, nouveaux consommateurs digitaux'
        },
        { 
            icon: '🔒', 
            title: 'Sécurité & Confidentialité',
            description: 'RGPD renforcé, authentification biométrique, protection des données'
        },
        { 
            icon: '🌱', 
            title: 'E-commerce Durable',
            description: 'Livraisons vertes, emballages écologiques, circuits courts'
        }
    ];

    const keyDates = [
        { date: '2025 Q1', event: 'Nouvelles réglementations TVA européennes' },
        { date: '2025 Q2', event: 'Sommet international du e-commerce à Paris' },
        { date: '2025 Q3', event: 'Lancement programme Amazon Outre-Mers' },
        { date: '2025 Q4', event: 'Révision des commissions marketplace EU' }
    ];

    return (<>
        <Head>
            <title>📰 Actualités & Évolutions - Bibliothèque Mondiale</title>
            <meta name="description" content="Actualités du secteur e-commerce, évolutions du marché international et faits marquants" />
        </Head>

        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', padding: '20px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                
                <button onClick={() => router.push('/bibliotheque')} style={{
                    padding: '10px 20px',
                    background: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginBottom: '20px',
                    fontWeight: 'bold'
                }}>← Retour à la Bibliothèque</button>

                <div style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }}>
                    
                    <h1 style={{ fontSize: '3em', marginBottom: '10px', color: '#059669' }}>
                        📰 Actualités & Évolutions
                    </h1>
                    <p style={{ fontSize: '1.2em', color: '#666', marginBottom: '10px' }}>
                        Actualités du secteur, évolutions du marché et faits marquants internationaux
                    </p>
                    <p style={{ fontSize: '0.95em', color: '#999', marginBottom: '40px', fontStyle: 'italic' }}>
                        Dernière mise à jour : Novembre 2024
                    </p>

                    {/* Tendances clés */}
                    <h2 style={{ color: '#059669', marginBottom: '25px', fontSize: '2em' }}>
                        🎯 Tendances Clés 2025
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                        {trends.map((trend, i) => (
                            <div key={i} style={{ 
                                background: '#d1fae5', 
                                padding: '25px', 
                                borderRadius: '12px',
                                textAlign: 'center',
                                borderTop: '4px solid #10b981'
                            }}>
                                <div style={{ fontSize: '3em', marginBottom: '10px' }}>{trend.icon}</div>
                                <h3 style={{ color: '#059669', marginBottom: '10px', fontSize: '1.2em' }}>{trend.title}</h3>
                                <p style={{ fontSize: '0.95em', color: '#666' }}>{trend.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Actualités par catégorie */}
                    {newsCategories.map((category, i) => (
                        <div key={i} style={{ 
                            background: '#ecfdf5', 
                            padding: '30px', 
                            borderRadius: '15px', 
                            marginBottom: '25px',
                            borderLeft: '5px solid #10b981'
                        }}>
                            <h2 style={{ color: '#059669', marginBottom: '20px', fontSize: '1.8em' }}>
                                {category.title}
                            </h2>
                            <ul style={{ lineHeight: '2', fontSize: '1.05em' }}>
                                {category.items.map((item, j) => (
                                    <li key={j} style={{ marginBottom: '10px' }}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Dates clés */}
                    <h2 style={{ color: '#059669', marginTop: '50px', marginBottom: '25px', fontSize: '2em' }}>
                        📅 Dates Clés à Retenir
                    </h2>
                    <div style={{ background: '#f0fdf4', padding: '30px', borderRadius: '15px' }}>
                        {keyDates.map((item, i) => (
                            <div key={i} style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                padding: '15px',
                                borderBottom: i < keyDates.length - 1 ? '1px solid #d1fae5' : 'none'
                            }}>
                                <div style={{ 
                                    background: '#10b981', 
                                    color: 'white', 
                                    padding: '10px 20px', 
                                    borderRadius: '8px',
                                    fontWeight: 'bold',
                                    minWidth: '120px',
                                    textAlign: 'center',
                                    marginRight: '20px'
                                }}>
                                    {item.date}
                                </div>
                                <div style={{ fontSize: '1.1em' }}>{item.event}</div>
                            </div>
                        ))}
                    </div>

                    {/* Sources et veille */}
                    <div style={{ 
                        background: '#10b981', 
                        color: 'white', 
                        padding: '30px', 
                        borderRadius: '15px', 
                        marginTop: '40px' 
                    }}>
                        <h2 style={{ marginBottom: '20px', fontSize: '1.8em' }}>🔍 Sources & Veille</h2>
                        <p style={{ marginBottom: '15px', fontSize: '1.1em' }}>
                            Nous suivons en permanence les évolutions du secteur via :
                        </p>
                        <ul style={{ lineHeight: '2', fontSize: '1.05em' }}>
                            <li>Publications officielles des institutions européennes et internationales</li>
                            <li>Rapports sectoriels des principales marketplaces (Amazon, eBay, etc.)</li>
                            <li>Études de marché des cabinets spécialisés en e-commerce</li>
                            <li>Médias économiques et technologiques de référence</li>
                            <li>Retours terrain de nos partenaires dans les différents territoires</li>
                        </ul>
                        <p style={{ marginTop: '20px', fontSize: '0.95em', fontStyle: 'italic' }}>
                            💡 Cette section est mise à jour régulièrement. N'hésitez pas à consulter notre assistant 
                            pour des questions sur des actualités spécifiques.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </>);
}
