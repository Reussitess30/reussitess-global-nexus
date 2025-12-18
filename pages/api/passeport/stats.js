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
      const initialData = {
        passeports: [],
        stats: {
          totalPays: 127,
          totalChampions: 15247,
          parPays: {},
          parObjectif: {},
          recentChampions: [],
        },
      };
      fs.writeFileSync(dataPath, JSON.stringify(initialData));
    }
    const data = fs.readFileSync(dataPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return {
      passeports: [],
      stats: {
        totalPays: 127,
        totalChampions: 15247,
        parPays: {},
        parObjectif: {},
        recentChampions: [],
      },
    };
  }
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "GET") {
    try {
      const data = readData();

      const recentChampions = data.passeports
        .sort((a, b) => b.timestamp - a.timestamp)
        .slice(0, 10)
        .map((p) => ({
          pays: p.pays,
          objectif: p.objectif,
          date: new Date(p.date).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
        }));

      const topPays = Object.entries(data.stats.parPays || {})
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([pays, count]) => ({ pays, count }));

      const topObjectifs = Object.entries(data.stats.parObjectif || {})
        .sort((a, b) => b[1] - a[1])
        .map(([objectif, count]) => ({ objectif, count }));

      const response = {
        totalPays: data.stats.totalPays || 127,
        totalChampions: data.stats.totalChampions || 15247,
        recentChampions,
        topPays,
        topObjectifs,
        lastUpdate: data.stats.lastUpdate,
      };

      return res.status(200).json(response);
    } catch (error) {
      console.error("Erreur API stats:", error);
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
