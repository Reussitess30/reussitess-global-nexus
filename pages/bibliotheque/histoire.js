import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Histoire() {
    const router = useRouter();

    return (<>
        <Head>
            <title>📚 Histoire Africaine & Outremer - Bibliothèque Reussitess®</title>
        </Head>

        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', padding: '20px' }}>
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
                    
                    <h1 style={{ fontSize: '3em', marginBottom: '10px' }}>📚 Histoire Africaine & Outremer</h1>
                    <p style={{ fontSize: '1.2em', color: '#666', marginBottom: '30px' }}>
                        Explorez l&apos;histoire riche et diverse de l&apos;Afrique et des territoires d&apos;outre-mer
                    </p>

                    {/* Histoire Africaine */}
                    <h2 style={{ color: '#f5576c', marginTop: '40px' }}>🌍 Histoire de l&apos;Afrique</h2>
                    <div style={{ background: '#fff5f5', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        <h3>Antiquité</h3>
                        <p style={{ marginBottom: '15px' }}>
                            L&apos;Afrique est le berceau de l&apos;humanité. Les premières civilisations africaines incluent l&apos;Égypte ancienne, 
                            le Royaume de Koush, et l&apos;Empire du Ghana.
                        </p>
                        
                        <h3>Royaumes et Empires Africains</h3>
                        <ul style={{ lineHeight: '2' }}>
                            <li><strong>Empire du Mali (1235-1670)</strong> - Célèbre pour Mansa Musa et Tombouctou</li>
                            <li><strong>Empire Songhaï (1464-1591)</strong> - Grand centre d&apos;apprentissage et de commerce</li>
                            <li><strong>Royaume du Bénin</strong> - Réputé pour ses bronzes et son organisation</li>
                            <li><strong>Royaume du Kongo</strong> - Puissant royaume d&apos;Afrique centrale</li>
                            <li><strong>Empire d&apos;Éthiopie</strong> - Une des plus anciennes nations du monde</li>
                        </ul>
                    </div>

                    {/* Histoire des Outre-mers */}
                    <h2 style={{ color: '#f5576c' }}>🏝️ Histoire des Territoires d&apos;Outre-mer</h2>
                    <div style={{ background: '#fff5f5', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        
                        <h3>Guadeloupe</h3>
                        <p style={{ marginBottom: '15px' }}>
                            <strong>Période précolombienne :</strong> Habitée par les Arawaks puis les Caraïbes
                            <br /><strong>1635 :</strong> Colonisation française
                            <br /><strong>1848 :</strong> Abolition de l&apos;esclavage
                            <br /><strong>1946 :</strong> Devient département français
                        </p>

                        <h3>Martinique</h3>
                        <p style={{ marginBottom: '15px' }}>
                            <strong>Peuples autochtones :</strong> Arawaks et Caraïbes
                            <br /><strong>1635 :</strong> Colonisation par la France
                            <br /><strong>1848 :</strong> Abolition de l&apos;esclavage proclamée par Victor Schoelcher
                            <br /><strong>1946 :</strong> Statut de département d&apos;outre-mer
                        </p>

                        <h3>Guyane</h3>
                        <p style={{ marginBottom: '15px' }}>
                            <strong>Peuples amérindiens :</strong> Multiples nations autochtones
                            <br /><strong>1604 :</strong> Premiers établissements français
                            <br /><strong>1848 :</strong> Abolition de l&apos;esclavage
                            <br /><strong>1946 :</strong> Département français
                        </p>

                        <h3>La Réunion</h3>
                        <p style={{ marginBottom: '15px' }}>
                            <strong>1663 :</strong> Colonisation française de l&apos;île inhabitée
                            <br /><strong>1848 :</strong> Abolition de l&apos;esclavage
                            <br /><strong>1946 :</strong> Devient département d&apos;outre-mer
                        </p>
                    </div>

                    {/* Personnalités Historiques */}
                    <h2 style={{ color: '#f5576c' }}>👑 Grandes Figures Historiques</h2>
                    <div style={{ background: '#fff5f5', padding: '20px', borderRadius: '10px', marginBottom: '30px' }}>
                        <ul style={{ lineHeight: '2' }}>
                            <li><strong>Mansa Musa</strong> - Empereur du Mali, l&apos;homme le plus riche de l&apos;histoire</li>
                            <li><strong>Soundiata Keïta</strong> - Fondateur de l&apos;Empire du Mali</li>
                            <li><strong>Reine Nzinga</strong> - Résistante à la colonisation portugaise</li>
                            <li><strong>Haïlé Sélassié</strong> - Empereur d&apos;Éthiopie</li>
                            <li><strong>Victor Schoelcher</strong> - Abolitionniste français</li>
                            <li><strong>Toussaint Louverture</strong> - Leader de la révolution haïtienne</li>
                            <li><strong>Aimé Césaire</strong> - Poète et homme politique martiniquais</li>
                        </ul>
                    </div>

                    {/* Ressources */}
                    <h2 style={{ color: '#f5576c' }}>📖 Ressources Complémentaires</h2>
                    <div style={{ background: '#fff5f5', padding: '20px', borderRadius: '10px' }}>
                        <p>🔗 <a href="/ressources/histoire-afrique" style={{ color: '#f5576c' }}>
                            Histoire complète de l&apos;Afrique
                        </a></p>
                        <p>🔗 <a href="/ressources/culture-guadeloupe" style={{ color: '#f5576c' }}>
                            Culture et Patrimoine Guadeloupéen
                        </a></p>
                        <p>🔗 <a href="/ressources/patrimoine-martinique" style={{ color: '#f5576c' }}>
                            Patrimoine Martiniquais
                        </a></p>
                    </div>

                </div>
            </div>
        </div>
    </>);
}
