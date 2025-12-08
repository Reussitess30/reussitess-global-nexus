import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

export default function handler(req, res) {
  try {
    const src = path.join(process.cwd(), 'components', 'SuperBotData.tsx');
    if (!fs.existsSync(src)) {
      res.status(500).json({ error: 'Source introuvable: components/SuperBotData.tsx' });
      return;
    }
    const content = fs.readFileSync(src, 'utf8');
    const re = /const\s+FULL_KNOWLEDGE\s*=\s*({[\s\S]*?})\s*;/s;
    const m = content.match(re);
    if (!m) {
      res.status(500).json({ error: 'FULL_KNOWLEDGE not found by regex' });
      return;
    }
    const objText = m[1];
    const tmpDir = path.join(process.cwd(), '.temp_full_knowledge');
    if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });
    const tmpFile = path.join(tmpDir, 'export_full_knowledge.cjs');
    const tmpContent = 'const obj = ' + objText + ';\n' +
                       'try { console.log(JSON.stringify(obj)); } catch(e) { console.error("JSON stringify failed", e); process.exit(2); }\n';
    fs.writeFileSync(tmpFile, tmpContent, 'utf8');
    const out = execSync(`node "${tmpFile}"`, { encoding: 'utf8', maxBuffer: 200 * 1024 * 1024 });
    const json = JSON.parse(out);
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.status(200).send(json);
  } catch (err) {
    console.error('full-knowledge api error:', err);
    res.status(500).json({ error: String(err && err.message ? err.message : err) });
  }
}
