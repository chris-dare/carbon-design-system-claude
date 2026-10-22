import { DangerButton } from '@carbon/react';

// DangerButton is a thin alias for <Button kind="danger">.
export const InContext = () => (
  <div style={{ display: 'flex', gap: '.5rem', padding: '1rem' }}>
    <DangerButton>Delete</DangerButton>
    <DangerButton disabled>Disabled</DangerButton>
  </div>
);
