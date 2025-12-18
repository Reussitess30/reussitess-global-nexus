#!/usr/bin/env node
"use strict";
/*
  bot-supervisor.js - non intrusive supervisor/orchestrator
  Note: this file is created but will NOT be started automatically by this setup script.
  Start it manually only when you want the supervisor to run.
*/
const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const taskRunner = require("./bot-utils/taskRunner");
const aiReasoner = require("./bot-utils/aiReasoner");

const DEFAULT_CANDIDATES = [
  "./global-nexus-bot.js",
  "./global-nexus-bot.cjs",
  "./global-nexus-bot.mjs",
  "./global-nexus-bot/index.js",
  "./public/reussitess971_v2/global-nexus-bot.js",
  "./global-nexus-bot.js",
];

function discoverModules() {
  const envList = process.env.SUPREME_MODULES;
  let modules = [];
  if (envList) {
    modules = envList
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  } else {
    const pkgJsonPath = path.join(process.cwd(), "package.json");
    if (fs.existsSync(pkgJsonPath)) {
      try {
        const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, "utf8"));
        if (pkg.main) modules.push("./" + pkg.main);
        if (pkg.scripts && pkg.scripts.start) modules.push({ npmStart: true });
      } catch (e) {}
    }
    modules = modules.concat(DEFAULT_CANDIDATES);
  }
  const resolved = [];
  for (const m of modules) {
    if (typeof m === "object" && m.npmStart) {
      resolved.push(m);
      continue;
    }
    const p = path.resolve(process.cwd(), m);
    if (fs.existsSync(p)) resolved.push(p);
  }
  return resolved;
}

function loadModuleAsSkill(p) {
  if (typeof p === "object" && p.npmStart) {
    return {
      name: "npm-start",
      type: "npm",
      run: async (ctx) =>
        runChildProcess("npm", ["start"], {
          cwd: process.cwd(),
          timeout: ctx.timeout || 60000,
        }),
    };
  }
  const rel = path.relative(process.cwd(), p);
  try {
    const mod = require(p);
    const fns = [];
    if (typeof mod === "function") fns.push({ name: "default", fn: mod });
    if (mod && typeof mod === "object") {
      ["run", "runBot", "start", "default", "main"].forEach((k) => {
        if (typeof mod[k] === "function") fns.push({ name: k, fn: mod[k] });
      });
      Object.keys(mod).forEach((k) => {
        if (typeof mod[k] === "function") fns.push({ name: k, fn: mod[k] });
      });
    }
    if (fns.length) {
      return {
        name: `module:${rel}`,
        type: "function",
        run: async (ctx) => {
          try {
            const fn = fns[0].fn;
            const out = await Promise.resolve(fn(ctx));
            return { ok: true, output: out };
          } catch (e) {
            return { ok: false, error: e.message || String(e) };
          }
        },
      };
    }
  } catch (e) {
    // ignore require error - fallback to script
  }
  if (fs.existsSync(p)) {
    return {
      name: `script:${rel}`,
      type: "script",
      run: async (ctx) =>
        runChildProcess("node", [p], {
          cwd: process.cwd(),
          timeout: ctx.timeout || 60000,
        }),
    };
  }
  return null;
}

function runChildProcess(cmd, args, opts = {}) {
  const timeout = opts.timeout || 60000;
  const cwd = opts.cwd || process.cwd();
  return new Promise((resolve) => {
    const cp = spawn(cmd, args, {
      cwd,
      env: process.env,
      stdio: ["ignore", "pipe", "pipe"],
    });
    let stdout = "",
      stderr = "";
    cp.stdout.on("data", (d) => (stdout += d.toString()));
    cp.stderr.on("data", (d) => (stderr += d.toString()));
    let killed = false;
    const t = setTimeout(() => {
      killed = true;
      try {
        cp.kill("SIGKILL");
      } catch (e) {}
      resolve({ ok: false, error: "timeout", stdout, stderr });
    }, timeout);
    cp.on("exit", (code) => {
      clearTimeout(t);
      if (killed) return;
      resolve({ ok: code === 0, code, stdout, stderr });
    });
    cp.on("error", (err) => {
      clearTimeout(t);
      resolve({ ok: false, error: err.message, stdout, stderr });
    });
  });
}

async function main() {
  console.log(
    "[SUPREME] (PASSIVE) Discovering skills - supervisor will NOT auto-run (this file was created in passive mode).",
  );
  const candidates = discoverModules();
  console.log(
    "[SUPREME] Candidates discovered:",
    candidates.map((c) =>
      typeof c === "string" ? path.relative(process.cwd(), c) : "npm-start",
    ),
  );
  // We do not start any scheduling loop here unless you explicitly start this file later (see README_SUPREME).
  console.log(
    "[SUPREME] To run the supervisor: node bot-supervisor.js (or use PM2).",
  );
}

main().catch((e) => {
  console.error("[SUPREME] Fatal", e);
  process.exit(1);
});
