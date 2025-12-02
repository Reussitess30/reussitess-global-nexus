const OpenAI = require("openai");
const client = new OpenAI();

(async () => {
  // Test d'une requête simple à GPT (remplace "gpt-3.5-turbo" si tu veux un autre modèle)
  const chatCompletion = await client.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "Tu es un bot qui répond en mode succès et motivation." },
      { role: "user", content: "Donne-moi une citation motivante réussitess971 !" }
    ]
  });

  console.log("Réponse GPT :", chatCompletion.choices[0].message.content);
})();
