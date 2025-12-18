const OpenAI = require("openai");
const client = new OpenAI();

(async () => {
  try {
    const chatCompletion = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: "Dis moi : clé OK si OpenAI fonctionne." },
      ],
    });
    console.log(
      "✅ La clé fonctionne : ",
      chatCompletion.choices[0].message.content,
    );
  } catch (e) {
    console.error("❌ Clé invalide :", e);
  }
})();
