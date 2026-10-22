import { AISkeletonIcon, AISkeletonText } from '@carbon/react';

// Paired with AISkeletonText so the icon has something to size against —
// alone it is a 16px grey square and reads as an empty card.
export const Loading = () => (
  <div style={{
    width: '20rem',
    padding: '1rem',
    background: '#f4f4f4',
    border: '1px solid #c6c6c6',
  }}>
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
      <AISkeletonIcon />
      <AISkeletonText heading width="60%" />
    </div>
    <AISkeletonText paragraph lineCount={3} />
  </div>
);
