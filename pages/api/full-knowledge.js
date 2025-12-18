const { SuperBotData } = require("../../components/SuperBotData.js");

export default function handler(req, res) {
  res.status(200).json(SuperBotData);
}
