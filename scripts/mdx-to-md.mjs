// Converts Carbon website MDX (carbon-design-system/carbon-website) into plain
// markdown suitable for ds-bundle/guidelines/ and .design-sync/docs/.
//
// The MDX is ~90% ordinary markdown wrapped in layout JSX (Row/Column), plus a
// handful of semantic components whose *content* is the guidance we want:
//   <DoDont caption="..."> is the do/don't rule itself, so it becomes text.
//   <Caption> annotates the image above it, so it becomes italics.
//   <AnchorLinks> is a table of contents for the website nav — dropped.
// Everything else that is pure layout is unwrapped, keeping its children.
import { readFileSync } from 'node:fs';

const DROP_BLOCK = /^(AnchorLinks|AnchorLink|ArtDirection|GifPlayer|ImageGallery|ImageGalleryImage|ChartDemoGroup|GlossaryComponent|MdxIcon|StatusIndicatorTable|ColorPalette|KalturaVideo|ColorBlock)$/;
const UNWRAP = /^(Row|Column|PageDescription|Tabs|Tab|Title|Aside|InlineNotification|UnorderedList|ListItem|StructuredList\w*)$/;

export function mdxToMd(src, { title, description } = {}) {
  let s = src;

  // Frontmatter: capture then strip. Some titles/descriptions wrap across lines.
  const fm = /^---\n([\s\S]*?)\n---\n/.exec(s);
  let fmTitle = title, fmDesc = description;
  if (fm) {
    const body = fm[1];
    // YAML folds long values onto indented continuation lines, so a value runs
    // until the next line that starts a new key at column 0.
    const t = /^title:[ \t]*((?:.*)(?:\n[ \t]+.*)*)/m.exec(body);
    const d = /^description:[ \t]*((?:.*)(?:\n[ \t]+.*)*)/m.exec(body);
    if (t) fmTitle ??= t[1].trim().replace(/\s+/g, ' ').replace(/^['"]|['"]$/g, '');
    if (d) fmDesc ??= d[1].trim().replace(/\s+/g, ' ').replace(/^['"]|['"]$/g, '');
    s = s.slice(fm[0].length);
  }

  // ESM import/export statements (single- and multi-line).
  s = s.replace(/^import\s+[\s\S]*?from\s+['"][^'"]+['"];?\s*$/gm, '');
  s = s.replace(/^import\s+['"][^'"]+['"];?\s*$/gm, '');
  s = s.replace(/^export\s+(const|default|\{)[\s\S]*?;\s*$/gm, '');

  // Card components carry their label in `title`/`subTitle` and their target in
  // `href` — that IS the content (e.g. the chart-type gallery is entirely
  // OverviewCards). Turn each into a list item link; their image children then
  // fall away with the generic image/tag cleanup.
  s = s.replace(/<(OverviewCard|ResourceCard|ImageCard)\b([\s\S]*?)>/g, (m, tag, attrs) => {
    const pick = (k) => {
      const r = new RegExp(k + '=(?:["\']([^"\']*)["\']|\\{["\'`]([^"\'`]*)["\'`]\\})').exec(attrs);
      return r ? (r[1] ?? r[2]) : null;
    };
    const title = pick('title'), sub = pick('subTitle'), href = pick('href');
    if (!title && !sub) return '';
    const label = [title, sub].filter(Boolean).join(' — ');
    const url = href && href.startsWith('/') ? 'https://carbondesignsystem.com' + href : href;
    return '\n- ' + (url ? `[${label}](${url})` : label) + '\n';
  });
  s = s.replace(/<\/(OverviewCard|ResourceCard|ImageCard)>/g, '');

  // Images inside those cards are decorative gallery thumbnails.
  s = s.replace(/^!\[GATSBY_EMPTY_ALT\]\([^)]*\)\s*$/gm, '');

  // <DoDont caption="..."> — the caption IS the rule. type="do"/"dont" (default do).
  s = s.replace(/<DoDont\b([^>]*?)\/?>/g, (m, attrs) => {
    const cap = /caption=["']([^"']*)["']/.exec(attrs) || /caption=\{["'`]([^"'`]*)["'`]\}/.exec(attrs);
    const type = /type=["']dont["']/.test(attrs) ? "Don't" : 'Do';
    return cap ? `\n**${type}:** ${cap[1]}\n` : '';
  });
  s = s.replace(/<\/DoDont>/g, '');

  // <Caption>text</Caption> -> italic annotation of the preceding image.
  s = s.replace(/<Caption[^>]*>([\s\S]*?)<\/Caption>/g, (m, t) => {
    const inner = t.trim();
    return inner ? `\n*${inner.replace(/\s+/g, ' ')}*\n` : '';
  });

  // Blocks whose content is website chrome, not guidance.
  s = s.replace(new RegExp(`<(${DROP_BLOCK.source.slice(2, -2)})\\b[^>]*>[\\s\\S]*?<\\/\\1>`, 'g'), '');
  s = s.replace(new RegExp(`<(${DROP_BLOCK.source.slice(2, -2)})\\b[^>]*\\/>`, 'g'), '');

  // Layout wrappers: drop the tags, keep the children.
  s = s.replace(new RegExp(`<\\/?(${UNWRAP.source.slice(2, -2)})\\b[^>]*>`, 'g'), '');

  // Any remaining lone JSX tag on its own line.
  s = s.replace(/^\s*<\/?[A-Z][A-Za-z0-9]*\b[^>]*>\s*$/gm, '');

  // Relative site images -> absolute, so the URL still resolves out of context.
  s = s.replace(/\]\(\/images\//g, '](https://carbondesignsystem.com/images/');
  s = s.replace(/\]\(\/(components|patterns|elements|guidelines|data-visualization)\//g,
                '](https://carbondesignsystem.com/$1/');

  // JSX expression leftovers and collapsed whitespace.
  s = s.replace(/^\s*\{\/\*[\s\S]*?\*\/\}\s*$/gm, '');
  s = s.replace(/\n{3,}/g, '\n\n').trim();

  return { title: fmTitle, description: fmDesc, body: s };
}

export function readMdx(path, extra) {
  return mdxToMd(readFileSync(path, 'utf8'), extra);
}
