import { PaginationSkeleton } from '@carbon/react';

// PaginationSkeleton is a full-width bar; in the default 20rem frame it is
// crushed to near-nothing, so this one gets a wider frame than the other
// skeletons.
const frame = { width: '44rem', maxWidth: '100%', background: '#f4f4f4', border: '1px solid #c6c6c6' };

export const Default = () => (
  <div style={frame}><PaginationSkeleton /></div>
);

export const InContext = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <div style={frame}><PaginationSkeleton /></div>
    <div style={frame}><PaginationSkeleton /></div>
  </div>
);
