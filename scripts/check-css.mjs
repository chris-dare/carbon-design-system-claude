// The compiled stylesheet referenced IBM Plex through Carbon's default
// '~@ibm/plex' path — a webpack-only prefix that plain CSS cannot resolve,
// so every @font-face silently 404'd and Carbon fell back to system fonts.
// Nothing failed loudly. This check makes that class of bug fail the build.
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const cssPath = fileURLToPath(new URL('../styles/carbon.css', import.meta.url));
if (!existsSync(cssPath)) {
  console.error('styles/carbon.css not built — run `npm run build:css` first.');
  process.exit(1);
}
const css = readFileSync(cssPath, 'utf8');
const base = dirname(cssPath);

const urls = [...css.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g)].map(m => m[1]);
const broken = [];
let remote = 0, inline = 0, local = 0;

for (const u of new Set(urls)) {
  if (u.startsWith('data:')) { inline++; continue; }
  if (/^https?:\/\//.test(u)) { remote++; continue; }
  if (u.startsWith('~')) { broken.push(`${u}  (webpack-only '~' prefix)`); continue; }
  if (existsSync(resolve(base, u.split('?')[0]))) local++;
  else broken.push(u);
}

const fontFaces = (css.match(/@font-face/g) || []).length;
const hasWebFont = /fonts\.googleapis\.com|@font-face/.test(css);

console.log(`css assets — ${remote} remote, ${local} local, ${inline} inline, ${broken.length} broken`);
console.log(`@font-face rules: ${fontFaces}; web font source present: ${hasWebFont}`);

if (!hasWebFont) {
  console.error('\nNo web font source — Carbon would render in fallback system fonts.');
  process.exit(1);
}
if (broken.length) {
  console.error('\nBroken asset references:');
  broken.forEach(b => console.error('  ' + b));
  process.exit(1);
}
console.log('all css assets resolve');
