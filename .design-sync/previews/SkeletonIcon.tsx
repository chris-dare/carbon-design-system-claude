import { SkeletonIcon, SkeletonText } from '@carbon/react';

// Paired with SkeletonText so the icon has something to size against.
export const Loading = () => (
  <div style={{
    width: '20rem',
    padding: '1rem',
    background: '#f4f4f4',
    border: '1px solid #c6c6c6',
  }}>
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
      <SkeletonIcon />
      <SkeletonText heading width="60%" />
    </div>
    <SkeletonText paragraph lineCount={3} />
  </div>
);
