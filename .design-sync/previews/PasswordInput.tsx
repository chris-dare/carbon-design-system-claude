import { PasswordInput } from '@carbon/react';

// PasswordInput is a TextInput with a visibility toggle.
export const InContext = () => (
  <div style={{ maxWidth: '22rem' }}>
    <PasswordInput id="pw-1" labelText="API key" defaultValue="s3cr3t-value" />
  </div>
);
