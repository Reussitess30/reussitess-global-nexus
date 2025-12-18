const fetch = require("node-fetch");

async function getGlobalNews(topic = "innovation", countryCode = "FR") {
  const url = `https://gnews.io/api/v4/search?q=${topic}&lang=fr&country=${countryCode}&token=YOUR_GNEWS_TOKEN`;
  try {
    const res = await fetch(url);
    const newsData = await res.json();
    return newsData.articles ? newsData.articles.slice(0, 3) : [];
  } catch {
    return [];
  }
}

async function getWeather(city = "Paris", countryCode = "FR") {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&lang=fr&appid=YOUR_OWM_TOKEN&units=metric`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.weather
      ? data.weather[0].description
      : "Aucune donnée météo disponible";
  } catch {
    return "Erreur météo";
  }
}

async function getQuote() {
  const url =
    "https://api.quotable.io/random?tags=success|innovation|inspiration";
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.content
      ? data.content
      : "Réussite et innovation t’accompagnent !";
  } catch {
    return "Tu es la source de ta propre inspiration.";
  }
}

async function getBusinessTip() {
  const tips = [
    "Investir dans les idées innovantes est la clé du succès global.",
    "Le réseautage international multiplie tes chances de réussite.",
    "La connaissance des marchés mondiaux est un atout absolu.",
  ];
  return tips[Math.floor(Math.random() * tips.length)];
}

module.exports = {
  getGlobalNews,
  getWeather,
  getQuote,
  getBusinessTip,
};
