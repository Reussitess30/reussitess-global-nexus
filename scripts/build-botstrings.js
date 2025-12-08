#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
  console.error('data directory not found:', dataDir);
  process.exit(1);
}

const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js') && !f.startsWith('botStrings.merged'));
let merged = {};

files.forEach(file => {
  const filePath = path.join(dataDir, file);
  const src = fs.readFileSync(filePath, 'utf8');

  let obj = null;

  let m = src.match(/export\s+default\s+({[\s\S]*});?\s*$/m);
  if (m) {
    try { obj = (new vm.Script('(' + m[1] + ')')).runInNewContext({}); } catch (_) { obj = null; }
  }

  if (!obj) {
    m = src.match(/(?:const|let|var)\s+([A-Za-z0-9_$]+)\s*=\s*({[\s\S]*?});\s*export\s+default\s+\1/);
    if (m) { try { obj = (new vm.Script('(' + m[2] + ')')).runInNewContext({}); } catch (_) { obj = null; } }
  }

  if (!obj) {
    m = src.match(/module\.exports\s*=\s*({[\s\S]*?});/);
    if (m) { try { obj = (new vm.Script('(' + m[1] + ')')).runInNewContext({}); } catch (_) { obj = null; } }
  }

  if (!obj) {
    console.warn('skip (no object export found):', file);
    return;
  }

  if (obj && typeof obj === 'object') {
    merged = Object.assign(merged, obj);
    console.log('merged:', file, Object.keys(obj).length, 'keys');
  } else {
    console.warn('no object parsed from', file);
  }
});

const outPathEsm = path.join(dataDir, 'botStrings.merged.js');
const outPathCjs = path.join(dataDir, 'botStrings.merged.cjs');
const outPathJson = path.join(dataDir, 'botStrings.merged.json');

const outContentEsm = `// AUTO-GENERATED (ESM)
const botStrings = ${JSON.stringify(merged, null, 2)};
export default botStrings;
`;
fs.writeFileSync(outPathEsm, outContentEsm, 'utf8');
console.log('WROTE', outPathEsm);

const outContentCjs = `// AUTO-GENERATED (CJS)
const botStrings = ${JSON.stringify(merged, null, 2)};
module.exports = botStrings;
`;
fs.writeFileSync(outPathCjs, outContentCjs, 'utf8');
console.log('WROTE', outPathCjs);

fs.writeFileSync(outPathJson, JSON.stringify(merged, null, 2), 'utf8');
console.log('WROTE', outPathJson);
