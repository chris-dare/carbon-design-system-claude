import { CopyButton } from '@carbon/react';

export const Default = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem' }}>
    <code style={{ fontFamily: 'IBM Plex Mono', fontSize: 13 }}>npm i @carbon/react</code>
    <CopyButton iconDescription="Copy to clipboard" />
  </div>
);
