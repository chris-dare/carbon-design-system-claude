import { ControlledPasswordInput } from '@carbon/react';

// ControlledPasswordInput is the fully controlled form of PasswordInput — you own `value` and the visibility state.
export const InContext = () => (
  <div style={{ maxWidth: '22rem' }}>
    <ControlledPasswordInput id="cpw-1" labelText="API key" value="s3cr3t-value" onChange={() => {}} />
  </div>
);
