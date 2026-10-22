import { AspectRatio } from '@carbon/react';

// AspectRatio reserves height with a percentage padding-block-start, so a child
// with height:100% resolves to auto and the box collapses. The child must be
// positioned absolutely against the padded parent instead.
const cell = {
  position: 'absolute' as const,
  inset: 0,
  background: '#f4f4f4',
  border: '1px solid #c6c6c6',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'IBM Plex Mono, monospace',
  fontSize: 13,
  color: '#161616',
};

export const Ratios = () => (
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', padding: '1rem' }}>
    {['16x9', '4x3', '1x1'].map((r) => (
      <div key={r} style={{ width: '12rem', position: 'relative' }}>
        <AspectRatio ratio={r}>
          <div style={cell}>{r}</div>
        </AspectRatio>
      </div>
    ))}
  </div>
);
