// The *Skeleton components render real Carbon loading bars, but full-bleed
// grey-on-white compresses below the render check's 5KB "blank" threshold and
// presents badly in a card. Give each one a constrained, bordered frame so the
// card reads as deliberate and the check sees real pixels.
import { writeFileSync } from 'node:fs';
import { readFileSync } from 'node:fs';

const bad = JSON.parse(readFileSync('ds-bundle/.render-check.json', 'utf8'))
  .filter(e => e.bad).map(e => e.name)
  .filter(n => /Skeleton$/.test(n));

const frame = `{ width: '20rem', padding: '1rem', background: 'var(--cds-layer-01)', border: '1px solid var(--cds-border-subtle-01)' }`;

for (const n of bad) {
  writeFileSync(`.design-sync/previews/${n}.tsx`, `import { ${n} } from '@carbon/react';

export const Default = () => (
  <div style={${frame}}>
    <${n} />
  </div>
);

export const InContext = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <div style={${frame}}><${n} /></div>
    <div style={${frame}}><${n} /></div>
  </div>
);
`);
}
console.log(`wrote ${bad.length} skeleton previews:`, bad.join(', '));
