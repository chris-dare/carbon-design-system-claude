// Builds guides/*.md from the downloaded Carbon website MDX. These ship into
// ds-bundle/guidelines/ via cfg.guidelinesGlob.
//
// NAMING: guidelinesGlob collapses any matched file that lives outside PKG_DIR
// to its BASENAME at the destination (lib/docs.mjs), so two files named
// `overview.md` in different sections would collide and the second is skipped.
// Every emitted name is therefore prefixed with its section.
import { readdirSync, mkdirSync, writeFileSync, existsSync, statSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { readMdx } from './mdx-to-md.mjs';

const SRC = process.env.CARBON_DOCS ||
  '.design-sync/carbon-docs';
const OUT = 'guides';

const SECTIONS = {
  patterns: { prefix: 'pattern', label: 'Pattern' },
  'data-visualization': { prefix: 'dataviz', label: 'Data visualization' },
  guidelines: { prefix: 'guideline', label: 'Guideline' },
  elements: { prefix: 'element', label: 'Element' },
};

// Walk a section dir: entries are either `<slug>/index.mdx` or `<slug>.mdx`,
// and one level deeper for `guidelines/accessibility/overview.mdx`.
function collect(dir, base = []) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...collect(p, [...base, e.name]));
    else if (e.name.endsWith('.mdx')) {
      const slug = e.name === 'index.mdx' ? base : [...base, e.name.replace(/\.mdx$/, '')];
      if (slug.length) out.push({ path: p, slug });
    }
  }
  return out;
}

if (existsSync(OUT)) rmSync(OUT, { recursive: true });
mkdirSync(OUT, { recursive: true });

const index = [];
let n = 0;
for (const [section, { prefix, label }] of Object.entries(SECTIONS)) {
  const dir = join(SRC, section);
  if (!existsSync(dir) || !statSync(dir).isDirectory()) {
    console.error(`  ! ${section}: not downloaded — skipped`);
    continue;
  }
  for (const { path, slug } of collect(dir)) {
    const { title, description, body: rawBody } = readMdx(path);
    // Page-relative image paths (`images/foo.png`) resolve against the page URL
    // on the Carbon site; absolutize them so they still work out of context.
    const body = rawBody.replace(/\]\(images\//g, `](https://carbondesignsystem.com/${section}/${slug.join('/')}/images/`);
    const name = `${prefix}-${slug.join('-')}.md`;
    const url = `https://carbondesignsystem.com/${section}/${slug.join('/')}/`;
    const head = [
      '---',
      `title: ${JSON.stringify(title || slug.join(' '))}`,
      `section: ${section}`,
      `source: ${url}`,
      '---',
      '',
      `# ${title || slug.join(' ')}`,
      '',
      `> ${label} — from the official IBM Carbon Design System documentation.`,
      `> Source: ${url}`,
      '',
      description ? `${description}\n` : '',
    ].join('\n');
    writeFileSync(join(OUT, name), head + '\n' + body + '\n');
    index.push({ name, title: title || slug.join(' '), section, url });
    n++;
  }
}

// A human/agent-readable index. guidelinesGlob also emits its own index.md at
// the destination listing filenames; this one carries titles and sections.
const bySection = {};
for (const e of index) (bySection[e.section] ??= []).push(e);
writeFileSync(join(OUT, 'carbon-guidance-index.md'), [
  '---', 'title: "Carbon guidance index"', 'section: index', '---', '',
  '# Carbon guidance index', '',
  'Official IBM Carbon Design System guidance, converted from the Carbon website source.',
  'These describe *how to compose* the components in this design system.', '',
  ...Object.entries(bySection).flatMap(([s, items]) => [
    `## ${s} (${items.length})`, '',
    ...items.sort((a, b) => a.title.localeCompare(b.title))
      .map((e) => `- **${e.title}** — \`${e.name}\` — ${e.url}`),
    '',
  ]),
].join('\n'));

console.log(`wrote ${n} guide(s) + index to ${OUT}/`);
for (const [s, items] of Object.entries(bySection)) console.log(`  ${s}: ${items.length}`);
