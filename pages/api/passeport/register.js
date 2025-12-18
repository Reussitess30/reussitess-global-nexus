import fs from "fs";
import path from "path";

const dataPath = path.join(process.cwd(), "data", "passeports.json");

function readData() {
  try {
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    if (!fs.existsSync(dataPath)) {
      fs.writeFileSync(
        dataPath,
        JSON.stringify({
          passeports: [],
          stats: { totalPays: 0, totalChampions: 0 },
        }),
      );
    }
    const data = fs.readFileSync(dataPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return { passeports: [], stats: { totalPays: 0, totalChampions: 0 } };
  }
}

function writeData(data) {
  try {
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    return false;
  }
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "POST") {
    try {
      const { pays, objectif, date } = req.body;

      if (!pays || !objectif || !date) {
        return res.status(400).json({
          success: false,
          message: "Données manquantes",
        });
      }

      const data = readData();

      const nouveauPasseport = {
        id: `PSP-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        pays,
        objectif,
        date: new Date(date).toISOString(),
        timestamp: Date.now(),
      };

      data.passeports.push(nouveauPasseport);

      const paysUniques = new Set(data.passeports.map((p) => p.pays));
      data.stats = {
        totalPays: paysUniques.size,
        totalChampions: data.passeports.length,
        lastUpdate: new Date().toISOString(),
      };

      const statsPays = {};
      data.passeports.forEach((p) => {
        statsPays[p.pays] = (statsPays[p.pays] || 0) + 1;
      });
      data.stats.parPays = statsPays;

      const statsObjectifs = {};
      data.passeports.forEach((p) => {
        statsObjectifs[p.objectif] = (statsObjectifs[p.objectif] || 0) + 1;
      });
      data.stats.parObjectif = statsObjectifs;

      const saved = writeData(data);

      if (saved) {
        return res.status(201).json({
          success: true,
          message: "Passeport enregistré avec succès",
          passeport: nouveauPasseport,
          stats: data.stats,
        });
      } else {
        return res.status(500).json({
          success: false,
          message: "Erreur lors de la sauvegarde",
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Erreur serveur",
        error: error.message,
      });
    }
  } else {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }
}
