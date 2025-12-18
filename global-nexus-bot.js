const {
  SuperBotData,
  getGreeting,
} = require("./components/SuperBotData_DATA.js");

const { pronounceSuccessSignature } = require("./superbot-signature");
const config = require("./reussitess-global-config.json");
const {
  getGlobalNews,
  getWeather,
  getQuote,
  getBusinessTip,
} = require("./external-api");
const { askChatGPT } = require("./chatgpt-module");

async function runBot(
  country = "France",
  city = "Paris",
  topic = "innovation",
) {
  if (!config.supportedCountries.includes(country)) {
    console.log(`Ce pays n'est pas encore pris en charge.`);
    return;
  }
  console.log(`=== Bot mondial activé pour : ${country} ===`);
  console.log(config.excellenceMessage);
  pronounceSuccessSignature();

  const news = await getGlobalNews(topic, country.slice(0, 2).toUpperCase());
  const weather = await getWeather(city, country.slice(0, 2).toUpperCase());
  const quote = await getQuote();
  const tip = await getBusinessTip();

  console.log("📰 Actu :", news);
  console.log("🌦 Météo :", weather);
  console.log("💡 Citation :", quote);
  console.log("🌍 Business tip :", tip);

  // Exemples de question vers GPT
  const gptMsg = await askChatGPT(
    `En une phrase motivante, inspire le pays ${country} autour du sujet "${topic}"`,
  );
  console.log("🤖 GPT Inspiration :", gptMsg);
}

module.exports = { runBot };
async function main() {
  const message = getGreeting("fr-FR");
  console.log("[BOT ASSISTANT] Greeting :", message);
  console.log("[BOT ASSISTANT] Greetings dispos :");

  // ... ici tu gardes/ajoutes ta logique existante (boucles, timers, etc.)
}

main();
