// Static build: copies the page and its assets into dist/ for hosting (Bolt publish, Netlify, any static host).
import { cpSync, rmSync, mkdirSync } from 'node:fs';
rmSync('dist', { recursive: true, force: true });
mkdirSync('dist');
for (const f of ['index.html', 'assets']) cpSync(f, `dist/${f}`, { recursive: true });
console.log('Built dist/');
