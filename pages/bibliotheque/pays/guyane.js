import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Guyane() {
    const router = useRouter();

    return (<>
        <Head>
            <title>🇬🇫 Guyane - Bibliothèque Mondiale Reussitess®</title>
            <meta name="description" content="Fiche complète Guyane française : population, marché e-commerce, TVA, Amazon, histoire et ressources" />
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
                    
                    <h1 style={{ fontSize: '3em', marginBottom: '10px' }}>🇬🇫 Guyane</h1>
                    <p style={{ fontSize: '1.2em', color: '#666', marginBottom: '30px' }}>
                        Département et région d'outre-mer français - Amérique du Sud
                    </p>

                    {/* Statistiques clés */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                        {[
                            { label: 'Population', value: '290K' },
                            { label: 'Superficie', value: '83 534 km²' },
                            { label: 'Chef-lieu', value: 'Cayenne' },
                            { label: 'Statut', value: 'DROM' }
                        ].map((stat, i) => (
                            <div key={i} style={{ background: '#f0f4ff', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                                <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#667eea' }}>{stat.value}</div>
                                <div style={{ fontSize: '0.9em', color: '#666' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Géographie */}
                    <h2 style={{ color: '#667eea', marginTop: '40px' }}>🌳 Géographie</h2>
                    <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        <p style={{ fontSize: '1.05em', lineHeight: '1.6', marginBottom: '15px' }}>
                            <strong>Particularités :</strong>
                        </p>
                        <ul style={{ lineHeight: '1.8', paddingLeft: '20px', fontSize: '1.05em' }}>
                            <li>Seul territoire français en Amérique du Sud continentale</li>
                            <li>96% du territoire couvert par la forêt amazonienne</li>
                            <li>Frontières : Suriname (ouest), Brésil (sud et est), océan Atlantique (nord)</li>
                            <li>Biodiversité exceptionnelle : réserves naturelles, Parc Amazonien</li>
                            <li>Fleuves : Maroni, Oyapock, Approuague</li>
                            <li>Centre Spatial Guyanais à Kourou (lanceur Ariane)</li>
                        </ul>
                    </div>

                    {/* Économie */}
                    <h2 style={{ color: '#667eea' }}>💼 Économie</h2>
                    <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        <p style={{ marginBottom: '15px', fontSize: '1.05em', lineHeight: '1.6' }}>
                            <strong>PIB :</strong> ~5 milliards d'euros<br/>
                            <strong>Secteurs principaux :</strong> Spatial (CSG Kourou), pêche, orpaillage, bois, tourisme<br/>
                            <strong>Taux de chômage :</strong> ~18% (2024)<br/>
                            <strong>Monnaie :</strong> Euro (€)<br/>
                            <strong>Port principal :</strong> Dégrad des Cannes (Cayenne)<br/>
                            <strong>Aéroport :</strong> Cayenne-Félix Eboué (CAY)
                        </p>
                    </div>

                    {/* Fiscalité & TVA */}
                    <h2 style={{ color: '#667eea' }}>⚖️ Fiscalité & TVA</h2>
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
                                    <td style={{ padding: '10px' }}>TVA Normale</td>
                                    <td style={{ padding: '10px', fontWeight: 'bold' }}>8.5%</td>
                                    <td style={{ padding: '10px' }}>Produits et services courants</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px' }}>TVA Réduite</td>
                                    <td style={{ padding: '10px', fontWeight: 'bold' }}>2.1%</td>
                                    <td style={{ padding: '10px' }}>Presse, médicaments</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px' }}>Octroi de mer</td>
                                    <td style={{ padding: '10px', fontWeight: 'bold' }}>Variable</td>
                                    <td style={{ padding: '10px' }}>Taxe locale sur marchandises importées</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* E-commerce & Amazon */}
                    <h2 style={{ color: '#667eea' }}>🛒 E-commerce & Amazon</h2>
                    <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        <p style={{ marginBottom: '10px' }}><strong>Marketplace :</strong> Amazon.fr (avec restrictions livraison)</p>
                        <p style={{ marginBottom: '10px' }}><strong>Défis spécifiques :</strong></p>
                        <ul style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
                            <li>Frais de livraison parmi les plus élevés des DOM-TOM</li>
                            <li>Délais de livraison très longs (2-4 semaines)</li>
                            <li>Nombreux vendeurs n'expédient pas en Guyane</li>
                            <li>Alternative : marketplaces sud-américaines (Mercado Libre, etc.)</li>
                            <li>Commerce local : développement du e-commerce guyanais en cours</li>
                            <li>Logistique complexe due à l'isolement géographique</li>
                        </ul>
                    </div>

                    {/* Histoire résumée */}
                    <h2 style={{ color: '#667eea' }}>📖 Histoire Résumée</h2>
                    <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        <ul style={{ lineHeight: '2', fontSize: '1.05em' }}>
                            <li><strong>Avant colonisation :</strong> Populations amérindiennes (Wayanas, Kalinas, Palikurs, Wayampis, etc.)</li>
                            <li><strong>1604 :</strong> Premières tentatives françaises de colonisation</li>
                            <li><strong>1676 :</strong> Installation définitive française</li>
                            <li><strong>XVIIe-XIXe :</strong> Agriculture (canne, café, cacao), orpaillage</li>
                            <li><strong>1848 :</strong> Abolition de l'esclavage</li>
                            <li><strong>1852-1953 :</strong> Terre de bagne (Îles du Salut dont l'île du Diable, Saint-Laurent-du-Maroni)</li>
                            <li><strong>1946 :</strong> Départementalisation</li>
                            <li><strong>1964 :</strong> Installation du Centre Spatial Guyanais à Kourou</li>
                            <li><strong>Aujourd'hui :</strong> DROM, région ultrapériphérique UE, porte spatiale européenne</li>
                        </ul>
                    </div>

                    {/* Culture & Démographie */}
                    <h2 style={{ color: '#667eea' }}>🎭 Culture & Démographie</h2>
                    <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        <p style={{ marginBottom: '10px' }}><strong>Langues :</strong> Français (officiel), Créole guyanais, langues amérindiennes</p>
                        <p style={{ marginBottom: '10px' }}><strong>Population très diverse :</strong></p>
                        <ul style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
                            <li>Créoles guyanais, Métropolitains</li>
                            <li>Amérindiens (environ 6 peuples autochtones)</li>
                            <li>Businenge (descendants d'esclaves marrons)</li>
                            <li>Hmongs (réfugiés du Laos, années 1970)</li>
                            <li>Brésiliens, Surinamais, Haïtiens</li>
                        </ul>
                        <p style={{ marginTop: '15px', marginBottom: '10px' }}><strong>Points d'intérêt :</strong></p>
                        <ul style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
                            <li>Centre Spatial Guyanais (Kourou) - visites publiques</li>
                            <li>Îles du Salut (ancien bagne, patrimoine historique)</li>
                            <li>Cayenne : Marché, Fort Cépérou, Place des Palmistes</li>
                            <li>Parc Amazonien de Guyane (réserves naturelles)</li>
                            <li>Saint-Laurent-du-Maroni (Camp de la Transportation)</li>
                            <li>Carnaval de Guyane (janvier-mars)</li>
                        </ul>
                    </div>

                    {/* Ressources officielles */}
                    <h2 style={{ color: '#667eea' }}>🔗 Ressources Institutionnelles</h2>
                    <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '10px' }}>
                        <p style={{ marginBottom: '10px' }}>📄 Collectivité Territoriale de Guyane (CTG)</p>
                        <p style={{ marginBottom: '10px' }}>📄 Préfecture de la Guyane</p>
                        <p style={{ marginBottom: '10px' }}>📄 CCI de la Guyane</p>
                        <p style={{ marginBottom: '10px' }}>📄 Comité du Tourisme de la Guyane</p>
                        <p style={{ marginBottom: '10px' }}>📄 Centre Spatial Guyanais (CNES/ESA/Arianespace)</p>
                        <p>📄 Parc Amazonien de Guyane</p>
                    </div>

                </div>
            </div>
        </div>
    </>);
}
