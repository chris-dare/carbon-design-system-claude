// Smoke test: renders every exported variant of every example file to
// static HTML and reports any that fail or come back suspiciously thin.
import { readdirSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const dir = new URL('../src/examples/', import.meta.url);
const files = readdirSync(dir).filter(f => f.endsWith('.jsx')).sort();

const THIN_BYTES = 120; // catches empty wrappers; a real card clears this easily
let total = 0, bad = 0, thin = 0, variantsIdentical = 0;
const failures = [];
const report = [];

for (const file of files) {
  const mod = await import(new URL(file, dir));
  const seen = new Map(); // hash -> first variant name, per file
  for (const [name, Comp] of Object.entries(mod)) {
    if (typeof Comp !== 'function') continue;
    total++;
    try {
      const html = renderToStaticMarkup(createElement(Comp));
      if (html.length < THIN_BYTES) {
        thin++;
        failures.push(`THIN  ${file}:${name} (${html.length} bytes)`);
      }
      // Variants that render byte-identical markup are not distinct cards.
      const hash = createHash('sha1').update(html).digest('hex');
      if (seen.has(hash)) {
        variantsIdentical++;
        failures.push(`SAME  ${file}:${name} renders identically to ${seen.get(hash)}`);
      } else {
        seen.set(hash, name);
      }
      report.push({ file, name, bytes: html.length, hash });
    } catch (e) {
      bad++;
      failures.push(`FAIL  ${file}:${name} — ${e.message.split('\n')[0]}`);
    }
  }
}

const counts = { total, bad, thin, variantsIdentical, iterations: 1 };
writeFileSync(new URL('../.examples-check.json', import.meta.url), JSON.stringify({ counts, report }, null, 2));

console.log(`\n${files.length} files, ${total} variants — ${bad} failed, ${thin} thin, ${variantsIdentical} identical`);
if (failures.length) { console.log(); failures.forEach(f => console.log(f)); process.exit(1); }
console.log('all variants render distinctly');
