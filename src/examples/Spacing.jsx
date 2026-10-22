import { spacing } from '../tokens/spacing.js';

export const SpacingScale = () => (
  <div style={{ fontFamily: 'IBM Plex Sans' }}>
    {Object.entries(spacing).map(([name, value]) => (
      <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: 4 }}>
        <span style={{ width: 90, fontSize: 11, fontFamily: 'IBM Plex Mono' }}>{name}</span>
        <span style={{ width: 60, fontSize: 11, color: '#6f6f6f' }}>{value}</span>
        <span style={{ background: '#0f62fe', height: 16, width: value }} />
      </div>
    ))}
  </div>
);
