import { Stack, TextInput } from '@carbon/react';

// Stack applies a Carbon spacing step between children. `gap` is a spacing token index, not px.
export const InContext = () => (
  <div style={{ maxWidth: '22rem' }}>
    <Stack gap={5}>
      <TextInput id="sk-1" labelText="Service name" />
      <TextInput id="sk-2" labelText="Owner" />
      <TextInput id="sk-3" labelText="Region" />
    </Stack>
  </div>
);
