// Carbon defines its --cds-* custom properties under theme-class selectors
// (.cds--white / .cds--g10 / .cds--g90 / .cds--g100), NOT on :root — only 31
// declarations land on :root. The preview harness puts no theme class on
// <html>/<body>, so inline `var(--cds-*)` in an authored preview resolves to
// nothing. Worse, an unresolvable var inside the `border` shorthand
// invalidates the whole declaration, so the frame disappears entirely with no
// error. Carbon's own component CSS is unaffected because it compiles to
// literal hex — which is why components looked correctly themed while
// authored wrapper chrome silently vanished.
// Substitute the literal .cds--white values for preview chrome.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const MAP = {
  '--cds-layer-01': '#f4f4f4',
  '--cds-border-subtle-01': '#c6c6c6',
  '--cds-background-inverse': '#393939',
  '--cds-notification-background-info': '#edf5ff',
  '--cds-support-info': '#0043ce',
  '--cds-text-inverse': '#ffffff'
};

let changed = 0, missed = new Set();
for (const f of readdirSync('.design-sync/previews').filter(f => f.endsWith('.tsx'))) {
  const p = `.design-sync/previews/${f}`;
  let s = readFileSync(p, 'utf8');
  if (!s.includes('var(--cds-')) continue;
  const before = s;
  s = s.replace(/var\((--cds-[a-z0-9-]+)\)/g, (m, tok) => MAP[tok] ?? (missed.add(tok), m));
  if (s !== before) { writeFileSync(p, s); changed++; }
}
console.log(`rewrote ${changed} previews`);
if (missed.size) console.log('UNMAPPED tokens still present:', [...missed].join(', '));
