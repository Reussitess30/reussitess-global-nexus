"use strict";
const https = require("https");

function create(opts = {}) {
  const apiKey = opts.apiKey || process.env.OPENAI_API_KEY || null;
  const canCallRemote = !!apiKey;

  async function suggestPlan(payload) {
    if (!canCallRemote) {
      const funcFirst = payload.tasks
        .filter((t) => t.meta && t.meta.type === "function")
        .map((t) => t.id);
      const scripts = payload.tasks
        .filter((t) => !t.meta || t.meta.type !== "function")
        .map((t) => t.id);
      return { order: funcFirst.concat(scripts) };
    }
    try {
      const prompt = `You are a scheduler. Given tasks in JSON, return an order array of ids prioritizing tasks that are functions over scripts. Input JSON: ${JSON.stringify(payload)}`;
      const body = JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful scheduler." },
          { role: "user", content: prompt },
        ],
        max_tokens: 200,
      });
      const res = await fetchOpenAI(body, apiKey);
      if (
        res &&
        res.choices &&
        res.choices[0] &&
        res.choices[0].message &&
        res.choices[0].message.content
      ) {
        const txt = res.choices[0].message.content;
        const m = txt.match(/\[([^\]]+)\]/);
        if (m) {
          const ids = m[0].replace(/\n/g, "").trim();
          try {
            const parsed = JSON.parse(ids);
            if (Array.isArray(parsed)) return { order: parsed };
          } catch (e) {}
        }
      }
    } catch (e) {}
    return null;
  }

  return { canCallRemote, suggestPlan };
}

function fetchOpenAI(body, apiKey) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "api.openai.com",
      path: "/v1/chat/completions",
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(body),
      },
    };
    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (d) => (data += d.toString()));
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    });
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

module.exports = { create };
