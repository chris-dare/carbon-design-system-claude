import { Loading, InlineLoading, Button } from '@carbon/react';

export const Spinners = () => (
  <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', height: '6rem' }}>
    <Loading withOverlay={false} />
    <Loading withOverlay={false} small />
    <Loading withOverlay={false} active={false} />
  </div>
);
