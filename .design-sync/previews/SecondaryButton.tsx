import { SecondaryButton } from '@carbon/react';

export const Default = () => (
  <div style={{ display: 'flex', gap: '0.5rem', padding: '1rem' }}>
    <SecondaryButton>Cancel</SecondaryButton>
    <SecondaryButton disabled>Disabled</SecondaryButton>
  </div>
);
