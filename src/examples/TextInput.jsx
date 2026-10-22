import { TextInput, TextArea, PasswordInput, FormGroup } from '@carbon/react';

export const States = () => (
  <FormGroup legendText="Text input states" style={{ maxWidth: '20rem' }}>
    <TextInput id="ti-default" labelText="Default" placeholder="Placeholder text" helperText="Optional helper text" />
    <TextInput id="ti-invalid" labelText="Invalid" invalid invalidText="This field is required" defaultValue="Bad value" />
    <TextInput id="ti-warn" labelText="Warning" warn warnText="This value may be out of date" defaultValue="Check me" />
    <TextInput id="ti-disabled" labelText="Disabled" disabled defaultValue="Cannot edit" />
    <TextInput id="ti-readonly" labelText="Read only" readOnly defaultValue="Read only value" />
  </FormGroup>
);

export const Sizes = () => (
  <div style={{ maxWidth: '20rem' }}>
    <TextInput id="ti-sm" size="sm" labelText="Small" />
    <TextInput id="ti-md" size="md" labelText="Medium" />
    <TextInput id="ti-lg" size="lg" labelText="Large" />
  </div>
);

export const Multiline = () => (
  <div style={{ maxWidth: '20rem' }}>
    <TextArea id="ta-1" labelText="Description" rows={4} placeholder="Tell us more" helperText="Max 500 characters" />
    <PasswordInput id="pw-1" labelText="Password" helperText="At least 12 characters" />
  </div>
);
