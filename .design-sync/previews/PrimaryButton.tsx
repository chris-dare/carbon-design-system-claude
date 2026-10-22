import { PrimaryButton } from '@carbon/react';

// PrimaryButton is a thin alias for <Button kind="primary">.
export const InContext = () => (
  <div style={{ display: 'flex', gap: '.5rem', padding: '1rem' }}>
    <PrimaryButton>Save</PrimaryButton>
    <PrimaryButton disabled>Disabled</PrimaryButton>
  </div>
);
