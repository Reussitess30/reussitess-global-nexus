import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Professeurs() {
    const router = useRouter();

    const resources = [
        {
            title: '📚 Économie & Commerce International',
            materials: [
                'Séquences pédagogiques sur le e-commerce et les marketplaces',
                'Études de cas Amazon : stratégies, modèles économiques',
                'Exercices pratiques de calcul TVA et marges commerciales',
                'Simulations d\'implantation sur marchés internationaux',
                'Fiches synthèse sur la mondialisation du commerce'
            ]
        },
        {
            title: '🌍 Histoire & Géographie',
            materials: [
                'Séquences sur l\'histoire de la colonisation et décolonisation',
                'Dossiers documentaires Afrique, Caraïbes, DOM-TOM',
                'Cartes interactives des anciennes colonies françaises',
                'Chronologies comparatives par territoire',
                'Études de personnages historiques marquants',
                'Ressources sur l\'histoire économique des territoires ultramarins'
            ]
        },
        {
            title: '💼 Enseignement Professionnel',
            materials: [
                'Modules de formation au commerce électronique',
                'Guides pratiques affiliation et marketing digital',
                'Ateliers création de boutiques en ligne',
                'Études de marché par pays et secteurs',
                'Outils d\'analyse de la concurrence',
                'Projets tutorés réels sur marketplaces'
            ]
        },
        {
            title: '🎓 Enseignement Supérieur',
            materials: [
                'Cas d\'école stratégies d\'internationalisation',
                'Analyses comparatives réglementations internationales',
                'Projets de recherche sur économie digitale',
                'Méthodologies d\'études de marché',
                'Ressources pour mémoires et thèses'
            ]
        }
    ];

    const tools = [
        { 
            icon: '🧮', 
            name: 'Calculateurs',
            description: 'Outils de calcul TVA, commissions, marges par pays'
        },
        { 
            icon: '📊', 
            name: 'Données Pays',
            description: 'Fiches complètes avec statistiques actualisées'
        },
        { 
            icon: '⚖️', 
            name: 'Réglementations',
            description: 'Textes de loi et normes à jour'
        },
        { 
            icon: '📖', 
            name: 'Bibliothèque Histoire',
            description: 'Ressources historiques documentées'
        }
    ];

    const pedagogicalApproaches = [
        {
            title: '🎯 Pédagogie Active',
            description: 'Projets concrets, simulations, études de cas réels avec notre bibliothèque de ressources'
        },
        {
            title: '🤝 Travail Collaboratif',
            description: 'Supports pour travaux de groupe, projets interdisciplinaires, recherches collaboratives'
        },
        {
            title: '💻 Numérique Éducatif',
            description: 'Ressources digitales, outils en ligne, données actualisées, assistant IA'
        },
        {
            title: '🌐 Approche Internationale',
            description: 'Vision globale, comparaisons inter-pays, perspectives multiculturelles'
        }
    ];

    return (<>
        <Head>
            <title>👨‍🏫 Ressources Professeurs - Bibliothèque Mondiale</title>
            <meta name="description" content="Ressources pédagogiques pour enseignants : séquences, outils, guides méthodologiques" />
        </Head>

        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', padding: '20px' }}>
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
                    
                    <h1 style={{ fontSize: '3em', marginBottom: '10px', color: '#dc2626' }}>
                        👨‍🏫 Ressources pour Professeurs
                    </h1>
                    <p style={{ fontSize: '1.2em', color: '#666', marginBottom: '40px' }}>
                        Outils pédagogiques, séquences de cours et guides méthodologiques pour tous niveaux
                    </p>

                    {/* Approches pédagogiques */}
                    <h2 style={{ color: '#dc2626', marginBottom: '25px', fontSize: '2em' }}>
                        🎓 Approches Pédagogiques
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                        {pedagogicalApproaches.map((approach, i) => (
                            <div key={i} style={{ 
                                background: '#fee2e2', 
                                padding: '25px', 
                                borderRadius: '12px',
                                borderTop: '4px solid #ef4444'
                            }}>
                                <h3 style={{ color: '#dc2626', marginBottom: '10px', fontSize: '1.2em' }}>
                                    {approach.title}
                                </h3>
                                <p style={{ fontSize: '0.95em', color: '#666', lineHeight: '1.5' }}>
                                    {approach.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Ressources par discipline */}
                    {resources.map((resource, i) => (
                        <div key={i} style={{ 
                            background: '#fef2f2', 
                            padding: '30px', 
                            borderRadius: '15px', 
                            marginBottom: '25px',
                            borderLeft: '5px solid #ef4444'
                        }}>
                            <h2 style={{ color: '#dc2626', marginBottom: '20px', fontSize: '1.8em' }}>
                                {resource.title}
                            </h2>
                            <ul style={{ lineHeight: '2', fontSize: '1.05em' }}>
                                {resource.materials.map((material, j) => (
                                    <li key={j} style={{ marginBottom: '10px' }}>
                                        {material}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Outils disponibles */}
                    <h2 style={{ color: '#dc2626', marginTop: '50px', marginBottom: '25px', fontSize: '2em' }}>
                        🛠️ Outils à Disposition
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                        {tools.map((tool, i) => (
                            <div key={i} style={{ 
                                background: '#fee2e2', 
                                padding: '20px', 
                                borderRadius: '12px',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '3em', marginBottom: '10px' }}>{tool.icon}</div>
                                <h3 style={{ color: '#dc2626', marginBottom: '10px' }}>{tool.name}</h3>
                                <p style={{ fontSize: '0.9em', color: '#666' }}>{tool.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Niveaux d'enseignement */}
                    <h2 style={{ color: '#dc2626', marginBottom: '25px', fontSize: '2em' }}>
                        🎯 Adaptation par Niveau
                    </h2>
                    <div style={{ background: '#fef2f2', padding: '30px', borderRadius: '15px', marginBottom: '30px' }}>
                        <div style={{ marginBottom: '20px' }}>
                            <h3 style={{ color: '#dc2626', marginBottom: '10px' }}>🏫 Collège</h3>
                            <p style={{ fontSize: '1.05em', lineHeight: '1.6' }}>
                                Introduction à la géographie mondiale, histoire de la colonisation simplifiée, 
                                découverte du commerce international, exercices ludiques avec les calculateurs.
                            </p>
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <h3 style={{ color: '#dc2626', marginBottom: '10px' }}>🎓 Lycée</h3>
                            <p style={{ fontSize: '1.05em', lineHeight: '1.6' }}>
                                Approfondissement histoire coloniale et post-coloniale, économie internationale, 
                                études de cas marketplaces, projets de groupe sur stratégies commerciales.
                            </p>
                        </div>
                        <div>
                            <h3 style={{ color: '#dc2626', marginBottom: '10px' }}>🏛️ Supérieur</h3>
                            <p style={{ fontSize: '1.05em', lineHeight: '1.6' }}>
                                Analyses poussées réglementations, stratégies d'internationalisation, 
                                recherches sur économie digitale, projets professionnalisants réels.
                            </p>
                        </div>
                    </div>

                    {/* Guide d'utilisation */}
                    <div style={{ 
                        background: '#ef4444', 
                        color: 'white', 
                        padding: '30px', 
                        borderRadius: '15px' 
                    }}>
                        <h2 style={{ marginBottom: '20px', fontSize: '1.8em' }}>📋 Guide d'Utilisation</h2>
                        <ol style={{ lineHeight: '2', fontSize: '1.05em', paddingLeft: '20px' }}>
                            <li>Explorez les différentes sections de la bibliothèque selon vos besoins</li>
                            <li>Utilisez les fiches pays pour des études de cas comparatives</li>
                            <li>Intégrez les calculateurs dans vos exercices pratiques</li>
                            <li>Consultez la section Histoire pour vos cours d'histoire-géographie</li>
                            <li>Vérifiez les réglementations pour des données juridiques à jour</li>
                            <li>Utilisez l'assistant IA pour des questions spécifiques</li>
                        </ol>
                        <p style={{ marginTop: '20px', fontSize: '0.95em', fontStyle: 'italic' }}>
                            💡 Toutes nos ressources sont régulièrement mises à jour et peuvent être utilisées 
                            librement dans un cadre pédagogique.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </>);
}
