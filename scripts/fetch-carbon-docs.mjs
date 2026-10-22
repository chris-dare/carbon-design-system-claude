// Downloads the Carbon website's own MDX source, which is what gen-guides.mjs
// and enrich-docs.mjs convert. Without this the guidance pipeline depends on a
// scratch directory that does not survive the session.
//
// Source of truth: github.com/carbon-design-system/carbon-website, src/pages/**
// Destination: .design-sync/carbon-docs/ (gitignored — it is regenerable).
import { mkdirSync, existsSync, writeFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';

const OUT = process.env.CARBON_DOCS || '.design-sync/carbon-docs';
const REPO = 'carbon-design-system/carbon-website';
const SECTIONS = new Set(['patterns', 'data-visualization', 'guidelines', 'elements', 'components']);

const tree = await (await fetch(`https://api.github.com/repos/${REPO}/git/trees/main?recursive=1`)).json();
if (!tree.tree) { console.error('GitHub tree fetch failed:', tree.message ?? tree); process.exit(1); }
if (tree.truncated) console.error('  ! GitHub tree was truncated — some pages may be missing');

const want = tree.tree
  .map((e) => e.path)
  .filter((p) => p.startsWith('src/pages/') && p.endsWith('.mdx') && SECTIONS.has(p.split('/')[2]));

console.log(`fetching ${want.length} MDX pages -> ${OUT}`);
let got = 0, cached = 0, failed = [];

// Modest concurrency: raw.githubusercontent is fine with this and it keeps the
// whole fetch under a few seconds.
const queue = [...want];
await Promise.all(Array.from({ length: 12 }, async () => {
  while (queue.length) {
    const p = queue.shift();
    const dest = join(OUT, p.slice('src/pages/'.length));
    if (existsSync(dest) && statSync(dest).size > 0) { cached++; continue; }
    try {
      const r = await fetch(`https://raw.githubusercontent.com/${REPO}/main/${p}`);
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      mkdirSync(dirname(dest), { recursive: true });
      writeFileSync(dest, await r.text());
      got++;
    } catch (e) { failed.push(`${p}: ${e.message}`); }
  }
}));

console.log(`  downloaded ${got}, cached ${cached}, failed ${failed.length}`);
for (const f of failed.slice(0, 10)) console.error('  !', f);
if (failed.length) process.exit(1);
