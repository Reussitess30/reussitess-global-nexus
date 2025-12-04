import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Outils() {
    const router = useRouter();
    const [prix, setPrix] = useState(100);
    const [tva, setTva] = useState(20);
    const [commission, setCommission] = useState(8);

    const prixHT = prix / (1 + tva/100);
    const montantTVA = prix - prixHT;
    const montantCommission = prix * (commission/100);
    const gain = prix - montantCommission;

    return (<>
        <Head>
            <title>🧮 Outils & Calculateurs - Bibliothèque Mondiale</title>
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
                    
                    <h1 style={{ fontSize: '2.5em', marginBottom: '10px' }}>🧮 Outils & Calculateurs</h1>
                    <p style={{ fontSize: '1.2em', color: '#666', marginBottom: '30px' }}>
                        Calculez vos marges, TVA, commissions et profits en temps réel
                    </p>

                    <div style={{ background: '#f0f4ff', padding: '30px', borderRadius: '15px', marginBottom: '30px' }}>
                        <h2 style={{ color: '#667eea', marginBottom: '20px' }}>💰 Calculateur de Profit Amazon</h2>
                        
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
                                Prix de vente TTC : {prix.toFixed(2)}€
                            </label>
                            <input 
                                type="range" 
                                min="10" 
                                max="500" 
                                value={prix}
                                onChange={(e) => setPrix(Number(e.target.value))}
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
                                Taux TVA : {tva}%
                            </label>
                            <input 
                                type="range" 
                                min="0" 
                                max="25" 
                                value={tva}
                                onChange={(e) => setTva(Number(e.target.value))}
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div style={{ marginBottom: '30px' }}>
                            <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
                                Commission Amazon : {commission}%
                            </label>
                            <input 
                                type="range" 
                                min="3" 
                                max="15" 
                                value={commission}
                                onChange={(e) => setCommission(Number(e.target.value))}
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
                            gap: '15px' 
                        }}>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
                                <div style={{ fontSize: '0.9em', color: '#666', marginBottom: '5px' }}>Prix HT</div>
                                <div style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#667eea' }}>
                                    {prixHT.toFixed(2)}€
                                </div>
                            </div>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
                                <div style={{ fontSize: '0.9em', color: '#666', marginBottom: '5px' }}>TVA</div>
                                <div style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#f59e0b' }}>
                                    {montantTVA.toFixed(2)}€
                                </div>
                            </div>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
                                <div style={{ fontSize: '0.9em', color: '#666', marginBottom: '5px' }}>Commission</div>
                                <div style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#ef4444' }}>
                                    {montantCommission.toFixed(2)}€
                                </div>
                            </div>
                            <div style={{ background: 'white', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
                                <div style={{ fontSize: '0.9em', color: '#666', marginBottom: '5px' }}>Votre Gain</div>
                                <div style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#10b981' }}>
                                    {gain.toFixed(2)}€
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 style={{ color: '#667eea', marginBottom: '20px' }}>📊 Taux de TVA par Pays (2025)</h2>
                    <div style={{ background: '#f9fafb', padding: '20px', borderRadius: '10px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
                            {[
                                { flag: '🇫🇷', country: 'France', rate: '20%' },
                                { flag: '🇩🇪', country: 'Allemagne', rate: '19%' },
                                { flag: '🇬🇧', country: 'Royaume-Uni', rate: '20%' },
                                { flag: '🇮🇹', country: 'Italie', rate: '22%' },
                                { flag: '🇪🇸', country: 'Espagne', rate: '21%' },
                                { flag: '🇳🇱', country: 'Pays-Bas', rate: '21%' },
                                { flag: '🇧🇪', country: 'Belgique', rate: '21%' },
                                { flag: '🇸🇪', country: 'Suède', rate: '25%' },
                                { flag: '🇦🇺', country: 'Australie', rate: '10%' },
                                { flag: '🇨🇦', country: 'Canada', rate: '5-15%' },
                                { flag: '🇸🇬', country: 'Singapour', rate: '8%' },
                                { flag: '🇮🇳', country: 'Inde', rate: '18%' }
                            ].map((c, i) => (
                                <div key={i} style={{ background: 'white', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
                                    <div style={{ fontSize: '2em' }}>{c.flag}</div>
                                    <div style={{ fontSize: '0.9em', marginTop: '5px' }}>{c.country}</div>
                                    <div style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#667eea', marginTop: '5px' }}>
                                        {c.rate}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>);
}
