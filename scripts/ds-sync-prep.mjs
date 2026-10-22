// The converter bounds cfg.cssEntry to the package directory, but Carbon ships
// its compiled CSS in the sibling @carbon/styles package (and charts ships its
// own in @carbon/charts). Concatenate both into one file INSIDE
// node_modules/@carbon/react so cssEntry can reach it.
//
// MUST be re-run after every `npm i` — npm prunes the staged file.
import { copyFileSync, existsSync, readFileSync, writeFileSync, statSync } from 'node:fs';

const DEST = 'node_modules/@carbon/react/_ds_carbon_styles.css';

// Order matters: Carbon core first so charts can override, and so the theme
// class definitions of --cds-* land before anything consumes them.
const PARTS = [
  { src: 'node_modules/@carbon/styles/css/styles.css', required: true, label: 'core' },
  { src: 'node_modules/@carbon/charts/styles.css', required: false, label: 'charts' },
];

const chunks = [];
for (const { src, required, label } of PARTS) {
  if (!existsSync(src)) {
    if (required) { console.error(`missing ${src} — run npm i first`); process.exit(1); }
    console.error(`  (skipping ${label}: ${src} not installed)`);
    continue;
  }
  chunks.push(`/* ---- ${label}: ${src} ---- */\n` + readFileSync(src, 'utf8'));
  console.log(`  + ${label} (${Math.round(statSync(src).size / 1024)} KB)`);
}

let css = chunks.join('\n');

// ---------------------------------------------------------------------------
// 1. Root-level token fallback.
//
// Carbon defines its ~327 theme tokens on the THEME CLASS selectors
// (.cds--white / .cds--g10 / .cds--g90 / .cds--g100) and NOT on :root. That is
// deliberate — it is what lets two themes coexist on one page — but it means a
// bare `var(--cds-*)` outside any <Theme> resolves to nothing, and because an
// unresolvable var() invalidates the whole declaration, a `border` shorthand
// using one vanishes with no error. (That silently broke 32 previews once.)
//
// The fix is ADDITIVE, never a flattening: copy the default white theme onto
// :root and PREPEND it. Everything still works because
//   - later same-specificity rules win, so Carbon's own :root rules override;
//   - custom properties inherit from the NEAREST ancestor that sets them, so
//     <Theme theme="g100"> still beats :root for its subtree.
// Flattening the theme classes into :root instead (as a naive "move tokens to
// :root" would) collapses all four themes into whichever is declared last.
const whiteBlock = /(?:^|\})\s*\.cds--white\s*\{([^}]*)\}/.exec(css);
if (!whiteBlock) {
  console.error('  ! .cds--white theme block not found — root token fallback SKIPPED');
} else {
  const decls = whiteBlock[1]
    .split(';')
    .map((d) => d.trim())
    .filter((d) => /^--[A-Za-z0-9-]+\s*:/.test(d));
  css =
    `/* ---- ds-sync: default (white) theme mirrored onto :root ---- */\n` +
    `/* Makes bare var(--cds-*) resolve outside a <Theme> scope, and makes the\n` +
    `   token set extractable. Theme classes still win by proximity. */\n` +
    `:root {\n  ${decls.join(';\n  ')};\n}\n\n` +
    css;
  console.log(`  + :root fallback (${decls.length} tokens mirrored from .cds--white)`);
}

// ---------------------------------------------------------------------------
// 2. The --cds-grid-* family is layout plumbing (column counts, gutters,
// margins), not themeable design tokens, so the token export has no category
// for any of them. Mark the WHOLE family intentionally uncategorised —
// annotating only --cds-grid-columns leaves the other seven properties
// (gutter, gutter-start/-end, column-hang, mode-start/-end, margin, bg) still
// flagged.
//
// This is comment-only: it cannot change rendering. It deliberately does NOT
// move these declarations to :root — see NOTES.md, that provably breaks the
// condensed grid (gutters go 1px -> 32px) because
// `calc(var(--cds-grid-gutter) / 2)` must be substituted on the same element
// that the variant sets --cds-grid-gutter on.
let annotated = 0;
css = css.replace(/(--cds-grid-[A-Za-z0-9-]+\s*:\s*[^;]+;)(?!\s*\/\* @kind)/g, (m, d) => {
  annotated++;
  return `${d} /* @kind other */`;
});
console.log(`  + annotated ${annotated} --cds-grid-* declaration(s) with @kind other`);

writeFileSync(DEST, css);
console.log(`staged ${DEST} (${Math.round(statSync(DEST).size / 1024)} KB)`);
