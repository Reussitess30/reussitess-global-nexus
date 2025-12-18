"use strict";
const pLimit = require("p-limit");

async function runTaskWithCtx(task, opts = {}) {
  const ctx = { timeout: opts.timeout || 60000, env: process.env };
  const start = Date.now();
  try {
    const res = await task.run(ctx);
    const duration = Date.now() - start;
    return { id: task.id, name: task.name, ok: true, res, duration };
  } catch (e) {
    const duration = Date.now() - start;
    return {
      id: task.id,
      name: task.name,
      ok: false,
      error: e.message || String(e),
      duration,
    };
  }
}

async function runTasks(tasks, options = {}) {
  const concurrency =
    options.concurrency && options.concurrency > 0 ? options.concurrency : 2;
  const limit = pLimit(concurrency);
  const promises = tasks.map((t) => limit(() => runTaskWithCtx(t, options)));
  const results = await Promise.all(promises);
  return results;
}

module.exports = { runTasks };
