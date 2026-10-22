import { StructuredListSkeleton } from '@carbon/react';

// Constrained frame so the loading bars read as deliberate in a card.
// Token values inlined: --cds-* does not resolve outside a theme scope.
export const Default = () => (
  <div style={{ width: '20rem', padding: '1rem', background: '#f4f4f4', border: '1px solid #c6c6c6' }}>
    <StructuredListSkeleton />
  </div>
);

export const InContext = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <div style={{ width: '20rem', padding: '1rem', background: '#f4f4f4', border: '1px solid #c6c6c6' }}><StructuredListSkeleton /></div>
    <div style={{ width: '20rem', padding: '1rem', background: '#f4f4f4', border: '1px solid #c6c6c6' }}><StructuredListSkeleton /></div>
  </div>
);
