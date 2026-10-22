import { FormGroup, Stack, TextInput, Select, SelectItem } from '@carbon/react';

export const Grouped = () => (
  <div style={{ maxWidth: '22rem' }}>
    <FormGroup legendText="Service details">
      <Stack gap={5}>
        <TextInput id="fg-name" labelText="Service name" placeholder="my-service" />
        <Select id="fg-region" labelText="Region" defaultValue="us-south">
          <SelectItem value="us-south" text="Dallas (us-south)" />
          <SelectItem value="eu-de" text="Frankfurt (eu-de)" />
        </Select>
      </Stack>
    </FormGroup>
  </div>
);
