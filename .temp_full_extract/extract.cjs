const fs = require('fs');
const path = require('path');
const src = path.join(process.cwd(), 'components', 'SuperBotData.tsx');
if (!fs.existsSync(src)) { console.error('MISSING_SRC'); process.exit(2); }
const s = fs.readFileSync(src, 'utf8');
const key = 'const FULL_KNOWLEDGE';
const idx = s.indexOf(key);
if (idx === -1) { console.error('FULL_KNOWLEDGE_NOT_FOUND'); process.exit(2); }
const eq = s.indexOf('=', idx);
if (eq === -1) { console.error('EQ_NOT_FOUND'); process.exit(2); }
let i = s.indexOf('{', eq);
if (i === -1) { console.error('START_BRACE_NOT_FOUND'); process.exit(2); }
let depth = 0;
let inSingle = false, inDouble = false, inBack = false, escaped = false;
let end = -1;
for (let p = i; p < s.length; p++) {
  const ch = s[p];
  if (escaped) { escaped = false; continue; }
  if (ch === '\\\\') { escaped = true; continue; }
  if (!inDouble && !inBack && ch === "'") { inSingle = !inSingle; continue; }
  if (!inSingle && !inBack && ch === '"') { inDouble = !inDouble; continue; }
  if (!inSingle && !inDouble && ch === '`') { inBack = !inBack; continue; }
  if (inSingle || inDouble || inBack) continue;
  if (ch === '{') depth++;
  else if (ch === '}') {
    depth--;
    if (depth === 0) { end = p; break; }
  }
}
if (end === -1) { console.error('END_BRACE_NOT_FOUND'); process.exit(2); }
const objText = s.slice(i, end + 1);

// Evaluate safely in CJS context and stringify
try {
  // eslint-disable-next-line no-eval
  const obj = eval('(' + objText + ')');
  // Remove functions and undefined when stringifying by replacer
  const json = JSON.stringify(obj, function replacer(k, v) {
    if (typeof v === 'function' || typeof v === 'undefined') return null;
    return v;
  });
  process.stdout.write(json);
} catch (e) {
  console.error('EVAL_ERROR', e && e.message ? e.message : e);
  process.exit(2);
}
