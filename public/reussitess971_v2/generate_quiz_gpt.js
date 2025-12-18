const fs = require("fs");
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

async function generateQuiz(domain) {
  const prompt = `Génère un quiz de culture générale, 10 questions avec trois propositions et la réponse correcte. Domaine : ${domain}. Format : tableau d’objets {question,answers:[...],correct,explanation}.`;
  const result = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 1200,
  });
  return result.data.choices[0].message.content;
}

(async () => {
  const domains = [
    "Histoire",
    "Sciences",
    "Géographie",
    "Sport",
    "Cinéma",
    "Innovations",
    "Business",
    "Langue",
    "Santé",
    "Gastronomie",
    "Découvertes",
    "Art",
    "Tech",
    "Environnement",
    "Politique",
    "Musique",
    "Personnalités",
    "Monuments",
    "Maths",
    "Culture_du_Monde",
  ];
  for (const domain of domains) {
    const quizContent = await generateQuiz(domain);
    fs.writeFileSync(
      `quiz_${domain}_gpt.js`,
      `module.exports = { domain: "${domain}", questions: ${quizContent}, tips: ["réussitess971 : positivité à l'infini boudoume."] };`,
    );
    console.log(`quiz_${domain}_gpt.js créé et enrichi 🎉`);
  }
})();
