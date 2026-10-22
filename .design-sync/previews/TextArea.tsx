import { TextInput, TextArea, PasswordInput, FormGroup } from '@carbon/react';

export const Multiline = () => (
  <div style={{ maxWidth: '20rem' }}>
    <TextArea id="ta-1" labelText="Description" rows={4} placeholder="Tell us more" helperText="Max 500 characters" />
    <PasswordInput id="pw-1" labelText="Password" helperText="At least 12 characters" />
  </div>
);
