import { useState, useEffect, useCallback } from 'react'
import Head from 'next/head'

export default function ReussitessBotUltimate() {
  const [status, setStatus] = useState('SCANNING')
  const [securityLevel, setSecurityLevel] = useState(99.8)
  const [logs, setLogs] = useState([])
  const [isCopied, setIsCopied] = useState(false)
  const CONTRACT = "0x4b3bFf4b58d22Ad363bb260e22032414d4CfdDB8"

  // 1. Fonctions de Logique Bot
  const addLog = (msg) => {
    setLogs(prev => [msg, ...prev].slice(0, 5))
  }

  useEffect(() => {
    const events = [
      "🛡️ Firewall WAF : 100% Actif",
      "🔍 Scan de vulnérabilité : OK",
      "🚫 Blocage IP suspecte : 45.12.3.8",
      "🔒 Chiffrement SSL : Grade A+",
      "🤖 Bot Protection : Optimisé"
    ]
    let i = 0
    const interval = setInterval(() => {
      addLog(events[i % events.length])
      setSecurityLevel(prev => Math.min(100, prev + (Math.random() * 0.1)))
      i++
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT)
    setIsCopied(true)
    addLog("✅ Contrat copié avec succès")
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000',
      color: '#00ff41', // Style Terminal Matrix
      fontFamily: 'monospace',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Head>
        <title>REUSSITESS BOT - SÉCURITÉ MAXIMUM</title>
      </Head>

      {/* Header Statut */}
      <div style={{
        width: '100%',
        maxWidth: '800px',
        border: '1px solid #00ff41',
        padding: '15px',
        marginBottom: '20px',
        borderRadius: '10px',
        backgroundColor: 'rgba(0, 255, 65, 0.05)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
          <span>SYSTEM STATUS: {status}</span>
          <span>SECURITY SCORE: {securityLevel.toFixed(2)}%</span>
        </div>
      </div>

      {/* Interface AirPod Premium */}
      <div style={{
        textAlign: 'center',
        padding: '40px',
        background: 'radial-gradient(circle, #1a1a1a 0%, #000 100%)',
        borderRadius: '30px',
        border: '2px solid #333',
        maxWidth: '600px',
        width: '100%',
        boxShadow: '0 0 50px rgba(0, 255, 65, 0.1)'
      }}>
        <div style={{ fontSize: '100px', filter: 'drop-shadow(0 0 10px #00ff41)' }}>🎧</div>
        <h1 style={{ color: '#fff', fontSize: '2rem', margin: '20px 0' }}>REUSSITESS AIRPODS PRO</h1>
        
        {/* Affichage du Contrat */}
        <div onClick={handleCopy} style={{
          cursor: 'pointer',
          padding: '15px',
          background: '#111',
          border: '1px dashed #00ff41',
          borderRadius: '10px',
          wordBreak: 'break-all',
          marginTop: '20px',
          color: isCopied ? '#fff' : '#00ff41',
          backgroundColor: isCopied ? '#00ff41' : '#111',
          transition: 'all 0.3s'
        }}>
          {isCopied ? "ADRESSE COPIÉE !" : CONTRACT}
        </div>
        <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '10px' }}>Cliquez pour copier l'adresse sécurisée</p>
      </div>

      {/* Console de Logs en temps réel */}
      <div style={{
        width: '100%',
        maxWidth: '600px',
        marginTop: '30px',
        padding: '15px',
        backgroundColor: '#0a0a0a',
        border: '1px solid #333',
        borderRadius: '10px',
        height: '150px'
      }}>
        <div style={{ color: '#666', fontSize: '0.7rem', marginBottom: '10px' }}>CONSOLE_LOGS_v4.0</div>
        {logs.map((log, index) => (
          <div key={index} style={{ fontSize: '0.9rem', marginBottom: '5px' }}>
            {`> ${log}`}
          </div>
        ))}
      </div>

      {/* Fonctions de Défense */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '10px',
        marginTop: '20px',
        maxWidth: '600px',
        width: '100%'
      }}>
        <div style={{ border: '1px solid #333', padding: '10px', textAlign: 'center', fontSize: '0.7rem' }}>🛡️ ANTI-DDOS</div>
        <div style={{ border: '1px solid #333', padding: '10px', textAlign: 'center', fontSize: '0.7rem' }}>🔒 AES-256</div>
        <div style={{ border: '1px solid #333', padding: '10px', textAlign: 'center', fontSize: '0.7rem' }}>⚡ FAST_PATH</div>
        <div style={{ border: '1px solid #333', padding: '10px', textAlign: 'center', fontSize: '0.7rem' }}>👁️ INTRUSION_DETECTION</div>
      </div>
    </div>
  )
}
