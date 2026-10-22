import { Select, SelectItem, SelectItemGroup } from '@carbon/react';

// SelectItem is an option inside a Select.
export const InContext = () => (
  <div style={{ maxWidth: '22rem' }}>
    <Select id="si-1" labelText="Region" defaultValue="us-south">
      <SelectItem value="us-south" text="Dallas (us-south)" />
      <SelectItem value="eu-de" text="Frankfurt (eu-de)" />
    </Select>
  </div>
);
