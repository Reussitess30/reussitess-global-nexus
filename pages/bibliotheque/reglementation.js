import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Reglementation() {
    const router = useRouter();

    return (<>
        <Head>
            <title>⚖️ Réglementation Internationale - Bibliothèque Reussitess®</title>
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
                    
                    <h1 style={{ fontSize: '3em', marginBottom: '10px' }}>⚖️ Réglementation Internationale</h1>
                    <p style={{ fontSize: '1.2em', color: '#666', marginBottom: '30px' }}>
                        Règles et conformité pour le commerce électronique international
                    </p>

                    {/* RGPD */}
                    <h2 style={{ color: '#667eea', marginTop: '40px' }}>🔒 RGPD (Règlement Général sur la Protection des Données)</h2>
                    <div style={{ background: '#f5f7ff', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        
                        <h3>Principes Fondamentaux</h3>
                        <ul style={{ lineHeight: '2', marginBottom: '20px' }}>
                            <li>✅ <strong>Consentement explicite</strong> - Accord clair et informé de l&apos;utilisateur</li>
                            <li>🎯 <strong>Finalité limitée</strong> - Données collectées pour un usage spécifique</li>
                            <li>⏱️ <strong>Conservation limitée</strong> - Durée de stockage définie</li>
                            <li>🔐 <strong>Sécurité</strong> - Protection contre les violations de données</li>
                            <li>👤 <strong>Droits des personnes</strong> - Accès, rectification, effacement</li>
                        </ul>

                        <h3>Obligations pour les Sites E-commerce</h3>
                        <ul style={{ lineHeight: '2' }}>
                            <li>📋 Politique de confidentialité claire et accessible</li>
                            <li>🍪 Gestion des cookies conforme</li>
                            <li>📧 Opt-in pour les communications marketing</li>
                            <li>🔒 Sécurisation des données personnelles</li>
                            <li>📝 Registre des traitements de données</li>
                            <li>⚠️ Notification des violations dans les 72h</li>
                        </ul>

                        <h3>Sanctions</h3>
                        <p style={{ background: '#ffeeee', padding: '15px', borderRadius: '5px', marginTop: '15px' }}>
                            <strong>Amendes jusqu&apos;à :</strong> 20 millions € ou 4% du chiffre d&apos;affaires annuel mondial
                        </p>
                    </div>

                    {/* TVA Internationale */}
                    <h2 style={{ color: '#667eea' }}>💰 TVA et Fiscalité Internationale</h2>
                    <div style={{ background: '#f5f7ff', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        
                        <h3>Union Européenne</h3>
                        <ul style={{ lineHeight: '2', marginBottom: '20px' }}>
                            <li>🇪🇺 <strong>Guichet unique OSS</strong> - Déclaration simplifiée de la TVA UE</li>
                            <li>📦 <strong>Ventes à distance</strong> - Seuil de 10,000€ par an</li>
                            <li>🌍 <strong>Pays de destination</strong> - TVA du pays client appliquée</li>
                            <li>📱 <strong>Services numériques</strong> - TVA obligatoire dès le 1er euro</li>
                        </ul>

                        <h3>Taux de TVA par Pays (Sélection)</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '20px' }}>
                            {[
                                { pays: '🇫🇷 France', taux: '20%' },
                                { pays: '🇩🇪 Allemagne', taux: '19%' },
                                { pays: '🇪🇸 Espagne', taux: '21%' },
                                { pays: '🇮🇹 Italie', taux: '22%' },
                                { pays: '🇧🇪 Belgique', taux: '21%' },
                                { pays: '🇳🇱 Pays-Bas', taux: '21%' },
                                { pays: '🇸🇪 Suède', taux: '25%' },
                                { pays: '🇬🇧 UK', taux: '20%' }
                            ].map((item, i) => (
                                <div key={i} style={{ background: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}>
                                    <div style={{ fontWeight: 'bold' }}>{item.pays}</div>
                                    <div style={{ fontSize: '1.3em', color: '#667eea', marginTop: '5px' }}>{item.taux}</div>
                                </div>
                            ))}
                        </div>

                        <p style={{ marginTop: '20px', fontSize: '0.9em', color: '#666' }}>
                            💡 Utilisez notre <a href="/bibliotheque/outils" style={{ color: '#667eea' }}>Calculateur de TVA</a> pour vos calculs
                        </p>
                    </div>

                    {/* Protection Consommateur */}
                    <h2 style={{ color: '#667eea' }}>🛡️ Protection du Consommateur</h2>
                    <div style={{ background: '#f5f7ff', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        
                        <h3>Directive Européenne E-commerce</h3>
                        <ul style={{ lineHeight: '2' }}>
                            <li>↩️ <strong>Droit de rétractation</strong> - 14 jours sans justification</li>
                            <li>📋 <strong>Informations obligatoires</strong> - Prix TTC, frais de livraison, délais</li>
                            <li>✉️ <strong>Confirmation de commande</strong> - Par email immédiatement</li>
                            <li>🔄 <strong>Retours gratuits</strong> - Si défaut ou non-conformité</li>
                            <li>⚠️ <strong>Garantie légale</strong> - 2 ans minimum dans l&apos;UE</li>
                        </ul>

                        <h3>Mentions Légales Obligatoires</h3>
                        <ul style={{ lineHeight: '2' }}>
                            <li>🏢 Raison sociale et forme juridique</li>
                            <li>📍 Adresse du siège social</li>
                            <li>📱 Coordonnées de contact</li>
                            <li>💼 Numéro SIRET/TVA intracommunautaire</li>
                            <li>👤 Directeur de publication</li>
                            <li>🌐 Hébergeur du site</li>
                        </ul>
                    </div>

                    {/* DSA (Digital Services Act) */}
                    <h2 style={{ color: '#667eea' }}>🆕 DSA - Digital Services Act (2024)</h2>
                    <div style={{ background: '#f5f7ff', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        
                        <h3>Principales Obligations pour les Marketplaces</h3>
                        <ul style={{ lineHeight: '2' }}>
                            <li>🔍 <strong>Traçabilité des vendeurs</strong> - Vérification d&apos;identité obligatoire</li>
                            <li>⚠️ <strong>Signalement de contenus illégaux</strong> - Système de notification</li>
                            <li>📊 <strong>Transparence des algorithmes</strong> - Explication du classement</li>
                            <li>🛡️ <strong>Protection des mineurs</strong> - Contrôles renforcés</li>
                            <li>📝 <strong>Rapports de transparence</strong> - Publication régulière</li>
                        </ul>

                        <h3>Impact sur Amazon et Affiliés</h3>
                        <p style={{ marginTop: '15px' }}>
                            Amazon, en tant que très grande plateforme en ligne, doit se conformer à des obligations renforcées,
                            notamment en matière de modération de contenu et de transparence algorithmique.
                        </p>
                    </div>

                    {/* Réglementation par Pays */}
                    <h2 style={{ color: '#667eea' }}>🌍 Spécificités par Pays</h2>
                    <div style={{ background: '#f5f7ff', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        
                        <h3>🇺🇸 États-Unis - Sales Tax</h3>
                        <p style={{ marginBottom: '15px' }}>
                            Taxe de vente variant par État (0% à 10%). Amazon gère automatiquement pour les vendeurs FBA.
                        </p>

                        <h3>🇨🇦 Canada - GST/HST</h3>
                        <p style={{ marginBottom: '15px' }}>
                            TPS fédérale de 5% + TVP provinciale variable (0% à 10%)
                        </p>

                        <h3>🇦🇺 Australie - GST</h3>
                        <p style={{ marginBottom: '15px' }}>
                            Taxe sur les biens et services de 10% sur toutes les importations
                        </p>

                        <h3>🇧🇷 Brésil - ICMS</h3>
                        <p style={{ marginBottom: '15px' }}>
                            Système complexe avec taux variant de 7% à 25% selon l&apos;État et le produit
                        </p>
                    </div>

                    {/* Ressources */}
                    <h2 style={{ color: '#667eea' }}>📖 Ressources et Documentation</h2>
                    <div style={{ background: '#f5f7ff', padding: '20px', borderRadius: '10px' }}>
                        <ul style={{ lineHeight: '2' }}>
                            <li>🔗 <a href="https://www.cnil.fr" target="_blank" style={{ color: '#667eea' }}>
                                CNIL - Commission Nationale Informatique et Libertés
                            </a></li>
                            <li>🔗 <a href="https://europa.eu/youreurope/business/" target="_blank" style={{ color: '#667eea' }}>
                                Portail Europa - Faire des affaires en Europe
                            </a></li>
                            <li>🔗 <a href="https://www.economie.gouv.fr/dgccrf" target="_blank" style={{ color: '#667eea' }}>
                                DGCCRF - Protection du consommateur
                            </a></li>
                            <li>📋 <a href="/legal" style={{ color: '#667eea' }}>
                                Nos Mentions Légales (6 langues)
                            </a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </>);
}
