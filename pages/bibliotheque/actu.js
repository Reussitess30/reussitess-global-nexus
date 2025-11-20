import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Actualites() {
    const router = useRouter();

    return (<>
        <Head>
            <title>📰 Actualités Internationales - Bibliothèque Reussitess®</title>
        </Head>

        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', padding: '20px' }}>
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
                    
                    <h1 style={{ fontSize: '3em', marginBottom: '10px' }}>📰 Actualités Internationales</h1>
                    <p style={{ fontSize: '1.2em', color: '#666', marginBottom: '30px' }}>
                        Restez informé des tendances e-commerce et actualités internationales
                    </p>

                    {/* E-commerce International */}
                    <h2 style={{ color: '#4facfe', marginTop: '40px' }}>🌍 Tendances E-commerce Mondial</h2>
                    <div style={{ background: '#f0f9ff', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        <h3>Marché Global 2025</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                            {[
                                { label: 'Marché mondial', value: '$6.3T' },
                                { label: 'Croissance annuelle', value: '+11.2%' },
                                { label: 'Acheteurs en ligne', value: '2.77Mrd' },
                                { label: 'Mobile commerce', value: '72%' }
                            ].map((stat, i) => (
                                <div key={i} style={{ background: 'white', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                                    <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#4facfe' }}>{stat.value}</div>
                                    <div style={{ fontSize: '0.9em', color: '#666' }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <h3>Top Tendances 2025</h3>
                        <ul style={{ lineHeight: '2' }}>
                            <li>🤖 <strong>IA et Personnalisation</strong> - Recommandations intelligentes et chatbots avancés</li>
                            <li>🛒 <strong>Social Commerce</strong> - Ventes directes via Instagram, TikTok et Facebook</li>
                            <li>🌱 <strong>Commerce Durable</strong> - Produits éco-responsables et emballages écologiques</li>
                            <li>📱 <strong>Commerce Vocal</strong> - Achats via assistants vocaux (Alexa, Google Home)</li>
                            <li>🎮 <strong>Métavers Commerce</strong> - Boutiques virtuelles et NFTs</li>
                            <li>💳 <strong>Paiements Flexibles</strong> - Buy Now Pay Later, cryptomonnaies</li>
                        </ul>
                    </div>

                    {/* Amazon Actualités */}
                    <h2 style={{ color: '#4facfe' }}>📦 Amazon - Actualités & Évolutions</h2>
                    <div style={{ background: '#f0f9ff', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        <h3>Programme Partenaires Amazon 2025</h3>
                        <p style={{ marginBottom: '15px' }}>
                            Amazon continue d&apos;étendre son programme d&apos;affiliation avec de nouvelles fonctionnalités :
                        </p>
                        <ul style={{ lineHeight: '2' }}>
                            <li>📊 Nouveaux outils d&apos;analyse et de tracking</li>
                            <li>🎯 Commissions dynamiques basées sur la performance</li>
                            <li>🌐 Expansion dans 26 pays (14 pays, 5 continents)</li>
                            <li>📱 Outils mobiles améliorés pour les affiliés</li>
                            <li>🤝 Programme Influenceur renforcé</li>
                        </ul>

                        <h3>Amazon par Région</h3>
                        <div style={{ marginTop: '20px' }}>
                            <p><strong>🇪🇺 Europe :</strong> Amazon.fr, .de, .it, .es, .nl, .se, .be</p>
                            <p><strong>🌎 Amériques :</strong> Amazon.com (USA), .ca (Canada), .com.br (Brésil)</p>
                            <p><strong>🌏 Asie-Pacifique :</strong> Amazon.in (Inde), .sg (Singapour), .com.au (Australie)</p>
                            <p><strong>🇬🇧 UK :</strong> Amazon.co.uk</p>
                        </div>
                    </div>

                    {/* Réglementation */}
                    <h2 style={{ color: '#4facfe' }}>⚖️ Réglementations & Conformité</h2>
                    <div style={{ background: '#f0f9ff', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        <h3>RGPD (Europe)</h3>
                        <p style={{ marginBottom: '15px' }}>
                            Le Règlement Général sur la Protection des Données s&apos;applique à tous les sites e-commerce opérant en Europe.
                        </p>

                        <h3>DSA (Digital Services Act)</h3>
                        <p style={{ marginBottom: '15px' }}>
                            Nouvelles obligations pour les marketplaces et plateformes en ligne depuis 2024.
                        </p>

                        <h3>TVA Transfrontalière</h3>
                        <p style={{ marginBottom: '15px' }}>
                            Règles harmonisées pour la TVA sur les ventes en ligne dans l&apos;UE depuis juillet 2021.
                        </p>
                    </div>

                    {/* Ressources */}
                    <h2 style={{ color: '#4facfe' }}>🔗 Sources & Ressources</h2>
                    <div style={{ background: '#f0f9ff', padding: '20px', borderRadius: '10px' }}>
                        <p>📊 <a href="https://www.statista.com/topics/871/online-shopping/" target="_blank" style={{ color: '#4facfe' }}>
                            Statista - E-commerce Statistics
                        </a></p>
                        <p>📰 <a href="https://www.ecommercetimes.com" target="_blank" style={{ color: '#4facfe' }}>
                            E-commerce Times
                        </a></p>
                        <p>🌐 <a href="https://partenaires.amazon.fr" target="_blank" style={{ color: '#4facfe' }}>
                            Programme Partenaires Amazon
                        </a></p>
                        <p>⚖️ <a href="https://www.cnil.fr" target="_blank" style={{ color: '#4facfe' }}>
                            CNIL - Protection des Données
                        </a></p>
                    </div>

                </div>
            </div>
        </div>
    </>);
}
