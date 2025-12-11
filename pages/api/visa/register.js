import fs from 'fs'
import path from 'path'

const dataPath = path.join(process.cwd(), 'data', 'visas.json')

function readData() {
  try {
    const dataDir = path.join(process.cwd(), 'data')
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }
    if (!fs.existsSync(dataPath)) {
      fs.writeFileSync(dataPath, JSON.stringify({ visas: [], stats: { totalVisas: 0, totalPays: 0 } }))
    }
    const data = fs.readFileSync(dataPath, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    return { visas: [], stats: { totalVisas: 0, totalPays: 0 } }
  }
}

function writeData(data) {
  try {
    const dataDir = path.join(process.cwd(), 'data')
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
    return true
  } catch (error) {
    return false
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method === 'POST') {
    try {
      const visaData = req.body

      const data = readData()
      
      const nouveauVisa = {
        ...visaData,
        id: `VISA-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        timestamp: Date.now()
      }

      data.visas.push(nouveauVisa)

      const paysUniques = new Set(data.visas.map(v => v.pays.code))
      data.stats = {
        totalVisas: data.visas.length,
        totalPays: paysUniques.size,
        lastUpdate: new Date().toISOString()
      }

      const saved = writeData(data)

      if (saved) {
        return res.status(201).json({
          success: true,
          message: 'VISA enregistré avec succès',
          visa: nouveauVisa,
          stats: data.stats
        })
      } else {
        return res.status(500).json({
          success: false,
          message: 'Erreur lors de la sauvegarde'
        })
      }

    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Erreur serveur',
        error: error.message
      })
    }
  } else {
    return res.status(405).json({ message: 'Méthode non autorisée' })
  }
}
