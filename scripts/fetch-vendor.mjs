// Descarrega uma cópia local do motor 3D (Three.js r149) para web/vendor/.
// Assim o jogo funciona sem internet dentro da aplicação instalada.
import { createWriteStream, existsSync, mkdirSync, statSync, unlinkSync } from 'node:fs';
import { get } from 'node:https';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const URL_THREE = 'https://cdn.jsdelivr.net/npm/three@0.149.0/build/three.min.js';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dest = join(root, 'web', 'vendor', 'three.min.js');

if (existsSync(dest) && statSync(dest).size > 100000) {
  console.log('three.min.js já existe em web/vendor — nada a fazer.');
  process.exit(0);
}
mkdirSync(dirname(dest), { recursive: true });

function download (url, redirects = 0) {
  return new Promise((resolve, reject) => {
    get(url, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && redirects < 5) {
        res.resume(); return resolve(download(new URL(res.headers.location, url).href, redirects + 1));
      }
      if (res.statusCode !== 200) return reject(new Error('HTTP ' + res.statusCode));
      const file = createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
      file.on('error', reject);
    }).on('error', reject);
  });
}

try {
  await download(URL_THREE);
  if (statSync(dest).size < 100000) throw new Error('Ficheiro demasiado pequeno');
  console.log('three.min.js descarregado para web/vendor.');
} catch (err) {
  if (existsSync(dest)) unlinkSync(dest);
  console.error('Não foi possível descarregar o Three.js:', err.message);
  process.exit(1);
}
