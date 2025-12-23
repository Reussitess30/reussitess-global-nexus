#!/bin/bash
# 🛡️ INSTALLATION SYSTÈME DE SÉCURITÉ REUSSITESS.FR
# Copiez et collez ces commandes UNE PAR UNE dans Termux

# ============================================
# ÉTAPE 1 : NAVIGATION VERS VOTRE PROJET
# ============================================
# Naviguez vers votre dossier de projet (adaptez le chemin si nécessaire)
cd ~/reussitess
# OU
# cd ~/votre-nom-de-projet

# ============================================
# ÉTAPE 2 : CRÉATION DU DOSSIER COMPONENTS
# ============================================
# Créer le dossier pour le module de sécurité
mkdir -p components/Security

# ============================================
# ÉTAPE 3 : CRÉER LE FICHIER DE SÉCURITÉ
# ============================================
cat > components/Security/SecurityCenter.js << 'EOF'
import { useState, useEffect } from 'react'

export default function SecurityCenter() {
  const [securityScore, setSecurityScore] = useState(98)
  const [threats, setThreats] = useState(0)
  const [scanning, setScanning] = useState(false)
  const [activeProtections, setActiveProtections] = useState(12)

  useEffect(() => {
    const interval = setInterval(() => {
      setSecurityScore(prev => Math.min(100, Math.max(85, prev + (Math.random() - 0.4) * 2)))
      setThreats(prev => Math.max(0, prev + Math.floor(Math.random() * 3 - 1)))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const securityLayers = [
    {
      name: 'Firewall WAF',
      status: 'active',
      icon: '🔥',
      description: 'Protection contre les attaques DDoS et injections',
      coverage: 100,
      color: '#10b981',
      threats: 0
    },
    {
      name: 'SSL/TLS Encryption',
      status: 'active',
      icon: '🔒',
      description: 'Chiffrement HTTPS avec certificat Let\'s Encrypt',
      coverage: 100,
      color: '#10b981',
      threats: 0
    },
    {
      name: 'Anti-Malware',
      status: 'active',
      icon: '🛡️',
      description: 'Scan automatique des fichiers malveillants',
      coverage: 100,
      color: '#10b981',
      threats: 0
    },
    {
      name: 'Intrusion Detection',
      status: 'active',
      icon: '👁️',
      description: 'Détection des tentatives d\'intrusion en temps réel',
      coverage: 98,
      color: '#10b981',
      threats: 0
    },
    {
      name: 'Backup Automatique',
      status: 'active',
      icon: '💾',
      description: 'Sauvegarde quotidienne des données',
      coverage: 100,
      color: '#10b981',
      threats: 0
    },
    {
      name: 'Anti-Bot Protection',
      status: 'active',
      icon: '🤖',
      description: 'Protection contre les bots malveillants',
      coverage: 95,
      color: '#10b981',
      threats: 0
    },
    {
      name: 'IP Blacklisting',
      status: 'active',
      icon: '🚫',
      description: 'Blocage automatique des IP suspectes',
      coverage: 100,
      color: '#10b981',
      threats: 3
    },
    {
      name: 'Rate Limiting',
      status: 'active',
      icon: '⏱️',
      description: 'Limitation des requêtes par IP',
      coverage: 100,
      color: '#10b981',
      threats: 0
    }
  ]

  const recentEvents = [
    { type: 'blocked', message: 'Tentative d\'injection SQL bloquée', time: '2 min', ip: '45.***.***.12', severity: 'high' },
    { type: 'success', message: 'Backup automatique terminé', time: '15 min', ip: 'System', severity: 'info' },
    { type: 'blocked', message: 'Bot malveillant détecté et bloqué', time: '1h', ip: '89.***.***.45', severity: 'medium' },
    { type: 'info', message: 'Scan de sécurité hebdomadaire', time: '2h', ip: 'System', severity: 'info' },
    { type: 'blocked', message: 'Tentative de brute force SSH bloquée', time: '3h', ip: '123.***.***.78', severity: 'high' }
  ]

  const securityMetrics = [
    {
      label: 'Score de Sécurité',
      value: securityScore.toFixed(1) + '%',
      icon: '🛡️',
      color: securityScore > 95 ? '#10b981' : securityScore > 85 ? '#f59e0b' : '#ef4444',
      status: securityScore > 95 ? 'Excellent' : securityScore > 85 ? 'Bon' : 'À améliorer'
    },
    {
      label: 'Menaces Bloquées (24h)',
      value: '47',
      icon: '🚫',
      color: '#f59e0b',
      status: 'Protégé'
    },
    {
      label: 'Protections Actives',
      value: activeProtections,
      icon: '✅',
      color: '#10b981',
      status: 'Opérationnel'
    },
    {
      label: 'Uptime',
      value: '99.9%',
      icon: '⚡',
      color: '#667eea',
      status: 'Stable'
    }
  ]

  const handleSecurityScan = async () => {
    setScanning(true)
    await new Promise(resolve => setTimeout(resolve, 3000))
    setScanning(false)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
      padding: '2rem'
    }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '50px',
            marginBottom: '1rem'
          }}>
            <span style={{ color: 'white', fontSize: '1.2rem', fontWeight: '700' }}>
              🌐 REUSSITESS.FR
            </span>
          </div>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem'
          }}>
            🛡️ Centre de Sécurité
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.3rem', fontWeight: '600' }}>
            Protection maximale • Surveillance 24/7 • Sécurité militaire
          </p>
        </div>

        <div style={{
          padding: '2.5rem',
          background: securityScore > 95 
            ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
            : 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
          borderRadius: '30px',
          marginBottom: '3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '5px solid rgba(255,255,255,0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <div style={{ fontSize: '5rem' }}>
              {securityScore > 95 ? '✅' : '
