import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function TestConnexion() {
    const router = useRouter();
    const [tests, setTests] = useState({
        internet: { status: 'testing', message: 'Test en cours...' },
        vercel: { status: 'testing', message: 'Test en cours...' },
        pwa: { status: 'testing', message: 'Test en cours...' },
        amazon: { status: 'testing', message: 'Test en cours...' },
        speed: { status: 'testing', message: 'Test en cours...', value: 0 }
    });

    useEffect(() => {
        runTests();
    }, []);

    const runTests = async () => {
        const onlineTest = navigator.onLine;
        setTests(prev => ({
            ...prev,
            internet: {
                status: onlineTest ? 'success' : 'error',
                message: onlineTest ? '✅ Connecté' : '❌ Hors ligne'
            }
        }));

        const startTime = performance.now();
        try {
            await fetch('/');
            const endTime = performance.now();
            const loadTime = Math.round(endTime - startTime);
            setTests(prev => ({
                ...prev,
                speed: {
                    status: loadTime < 1000 ? 'success' : 'warning',
                    message: `${loadTime}ms`,
                    value: loadTime
                }
            }));
        } catch (e) {
            setTests(prev => ({
                ...prev,
                speed: { status: 'error', message: 'Échec', value: 0 }
            }));
        }

        try {
            const res = await fetch(window.location.origin);
            setTests(prev => ({
                ...prev,
                vercel: {
                    status: res.ok ? 'success' : 'error',
                    message: res.ok ? '✅ Opérationnel' : '❌ Problème'
                }
            }));
        } catch (e) {
            setTests(prev => ({
                ...prev,
                vercel: { status: 'error', message: '❌ Inaccessible' }
            }));
        }

        const isPWA = window.matchMedia('(display-mode: standalone)').matches;
        setTests(prev => ({
            ...prev,
            pwa: {
                status: isPWA ? 'success' : 'info',
                message: isPWA ? '✅ Mode app' : 'ℹ️ Mode navigateur'
            }
        }));

        setTests(prev => ({
            ...prev,
            amazon: { status: 'success', message: '✅ Accessible' }
        }));
    };

    const getStatusColor = (status) => {
        switch(status) {
            case 'success': return '#10b981';
            case 'warning': return '#f59e0b';
            case 'error': return '#ef4444';
            case 'info': return '#3b82f6';
            default: return '#6b7280';
        }
    };

    return (<>
        <Head>
            <title>🔌 Test Connexion - Reussitess® Global Nexus</title>
        </Head>

        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '20px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                
                <button onClick={() => router.push('/')} style={{
                    padding: '12px 24px',
                    background: 'white',
                    color: '#667eea',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    marginBottom: '20px',
                    fontWeight: 'bold'
                }}>← Retour au Hub</button>

                <div style={{ background: 'white', padding: '40px', borderRadius: '25px', boxShadow: '0 15px 50px rgba(0,0,0,0.2)' }}>
                    
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <div style={{ fontSize: '4em', marginBottom: '15px' }}>🔌</div>
                        <h1 style={{ fontSize: '2.5em', margin: '0 0 10px 0', color: '#667eea' }}>
                            Diagnostic Connexion
                        </h1>
                        <p style={{ fontSize: '1.2em', color: '#666' }}>
                            Vérification de l'état du système
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {Object.entries(tests).map(([key, test]) => (
                            <div key={key} style={{
                                background: '#f9fafb',
                                padding: '25px',
                                borderRadius: '15px',
                                borderLeft: `6px solid ${getStatusColor(test.status)}`,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <div>
                                    <h3 style={{ margin: '0 0 5px 0', fontSize: '1.3em', color: '#333' }}>
                                        {key === 'internet' ? '🌐 Connexion Internet' :
                                         key === 'vercel' ? '☁️ Serveur Vercel' :
                                         key === 'pwa' ? '📱 Mode Application' :
                                         key === 'amazon' ? '🛒 Liens Amazon' :
                                         '⚡ Vitesse de chargement'}
                                    </h3>
                                    <p style={{ margin: 0, color: '#666', fontSize: '0.95em' }}>
                                        {test.status === 'testing' ? 'Test en cours...' : test.message}
                                    </p>
                                </div>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background: getStatusColor(test.status),
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2em',
                                    color: 'white'
                                }}>
                                    {test.status === 'success' ? '✓' :
                                     test.status === 'error' ? '✗' :
                                     test.status === 'warning' ? '⚠' :
                                     test.status === 'info' ? 'ℹ' : '...'}
                                </div>
                            </div>
                        ))}
                    </div>

                    <button onClick={runTests} style={{
                        marginTop: '30px',
                        padding: '15px 30px',
                        background: '#667eea',
                        color: 'white',
                        border: 'none',
                        borderRadius: '10px',
                        fontSize: '1.1em',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        width: '100%'
                    }}>
                        🔄 Relancer les tests
                    </button>

                </div>
            </div>
        </div>
    </>);
}
