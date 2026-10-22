import { Select, SelectItem, SelectItemGroup } from '@carbon/react';

// SelectItemGroup is an <optgroup> for a Select.
export const InContext = () => (
  <div style={{ maxWidth: '22rem' }}>
    <Select id="sig-1" labelText="Region" defaultValue="us-south">
      <SelectItemGroup label="Americas">
        <SelectItem value="us-south" text="Dallas" />
        <SelectItem value="us-east" text="Washington DC" />
      </SelectItemGroup>
      <SelectItemGroup label="Europe">
        <SelectItem value="eu-de" text="Frankfurt" />
      </SelectItemGroup>
    </Select>
  </div>
);
