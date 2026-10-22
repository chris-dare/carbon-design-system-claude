import { ProgressBar } from '@carbon/react';

export const Statuses = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '24rem' }}>
    <ProgressBar label="Uploading image" helperText="42% complete" value={42} />
    <ProgressBar label="Indeterminate" helperText="Working…" />
    <ProgressBar label="Finished" status="finished" value={100} />
    <ProgressBar label="Error" status="error" helperText="Upload failed" />
  </div>
);

export const Sizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '24rem' }}>
    <ProgressBar label="Small" size="small" value={60} />
    <ProgressBar label="Big" size="big" value={60} />
    <ProgressBar label="Inline" type="inline" value={60} />
  </div>
);
