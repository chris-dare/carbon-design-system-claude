import { AISkeletonText } from '@carbon/react';

// AISkeletonText is the AI-styled text placeholder — shown as a heading plus a paragraph.
export const InContext = () => (
  <div style={{ width: '20rem', padding: '1rem', background: '#f4f4f4', border: '1px solid #c6c6c6' }}>
    <AISkeletonText heading width="60%" />
    <AISkeletonText paragraph lineCount={3} />
  </div>
);
