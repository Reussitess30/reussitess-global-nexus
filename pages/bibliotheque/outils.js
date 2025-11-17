                    </div>

                    {/* Convertisseur de devises */}
                    <h2 style={{ color: '#667eea', marginBottom: '20px' }}>💱 Convertisseur de Devises</h2>
                    <div style={{ background: '#f0f4ff', padding: '30px', borderRadius: '15px', marginBottom: '30px' }}>
                        <p style={{ fontSize: '1.1em', marginBottom: '20px' }}>
                            Taux de change approximatifs (EUR base)
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
                            {[
                                { currency: 'USD', rate: '1.09', flag: '🇺🇸' },
                                { currency: 'GBP', rate: '0.86', flag: '🇬🇧' },
                                { currency: 'CAD', rate: '1.47', flag: '🇨🇦' },
                                { currency: 'AUD', rate: '1.64', flag: '🇦🇺' },
                                { currency: 'INR', rate: '90.5', flag: '🇮🇳' },
                                { currency: 'BRL', rate: '5.45', flag: '🇧🇷' },
                                { currency: 'SEK', rate: '11.3', flag: '🇸🇪' },
                                { currency: 'SGD', rate: '1.45', flag: '🇸🇬' }
                            ].map((c, i) => (
                                <div key={i} style={{ background: 'white', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
                                    <div style={{ fontSize: '2em' }}>{c.flag}</div>
                                    <div style={{ fontWeight: 'bold', fontSize: '1.1em', marginTop: '5px' }}>{c.currency}</div>
                                    <div style={{ color: '#667eea', marginTop: '5px' }}>1 EUR = {c.rate}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Estimateur de revenus mensuels */}
                    <h2 style={{ color: '#667eea', marginBottom: '20px' }}>📈 Estimateur de Revenus Mensuels</h2>
                    <div style={{ background: '#f9fafb', padding: '30px', borderRadius: '15px' }}>
                        <p style={{ fontSize: '1.1em', marginBottom: '20px' }}>
                            Estimez vos revenus potentiels en affiliation Amazon
                        </p>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid #e0e0e0' }}>
                                    <th style={{ padding: '15px', textAlign: 'left' }}>Clics/mois</th>
                                    <th style={{ padding: '15px', textAlign: 'left' }}>Taux conversion</th>
                                    <th style={{ padding: '15px', textAlign: 'left' }}>Panier moyen</th>
                                    <th style={{ padding: '15px', textAlign: 'left' }}>Commission</th>
                                    <th style={{ padding: '15px', textAlign: 'left', color: '#10b981', fontWeight: 'bold' }}>Revenu estimé</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { clics: 1000, conversion: '3%', panier: '50€', commission: '5%', revenu: '75€' },
                                    { clics: 5000, conversion: '3%', panier: '50€', commission: '5%', revenu: '375€' },
                                    { clics: 10000, conversion: '3%', panier: '50€', commission: '5%', revenu: '750€' },
                                    { clics: 50000, conversion: '3%', panier: '50€', commission: '5%', revenu: '3,750€' }
                                ].map((row, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid #f0f0f0' }}>
                                        <td style={{ padding: '15px' }}>{row.clics}</td>
                                        <td style={{ padding: '15px' }}>{row.conversion}</td>
                                        <td style={{ padding: '15px' }}>{row.panier}</td>
                                        <td style={{ padding: '15px' }}>{row.commission}</td>
                                        <td style={{ padding: '15px', fontWeight: 'bold', color: '#10b981', fontSize: '1.1em' }}>
                                            {row.revenu}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p style={{ fontSize: '0.9em', color: '#666', marginTop: '20px', fontStyle: 'italic' }}>
                            * Ces estimations sont indicatives et basées sur des moyennes du marché
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </>);
}
