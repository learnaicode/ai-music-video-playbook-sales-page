// Zero-dependency static server for local preview and Bolt's WebContainer.
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
const root = process.argv[2] || '.';
const port = Number(process.env.PORT) || 5173;
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.json': 'application/json' };
http.createServer(async (req, res) => {
  try {
    let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (p.endsWith('/')) p += 'index.html';
    const file = join(root, normalize(p).replace(/^(\.\.[/\\])+/, ''));
    const s = await stat(file).catch(() => null);
    const target = s && s.isFile() ? file : join(root, 'index.html');
    res.writeHead(200, { 'Content-Type': types[extname(target).toLowerCase()] || 'application/octet-stream' });
    res.end(await readFile(target));
  } catch (e) { res.writeHead(500); res.end(String(e)); }
}).listen(port, '0.0.0.0', () => console.log(`Serving ${root} on http://localhost:${port}`));
