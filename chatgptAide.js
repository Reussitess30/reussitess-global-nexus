// chatgptAide.js
export async function callChatGPTAPI(prompt) {
  // À adapter selon ton API ChatGPT déjà intégrée (endpoint, clé, etc.)
  return fetch("/api/chatgpt", {
    method: "POST",
    body: JSON.stringify({ prompt }),
    headers: { "Content-Type": "application/json" },
  }).then((r) => r.json());
}

export async function handleAide(context) {
  const prompt = `Tu es le bot Reussitess expert Amazon. Voici le contexte: ${JSON.stringify(context)}. Donne une aide personnalisée, une astuce ou une anecdote.`;
  const result = await callChatGPTAPI(prompt);
  return result.text;
}
