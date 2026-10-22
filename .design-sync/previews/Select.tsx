import { Select, SelectItem, SelectItemGroup } from '@carbon/react';

export const States = () => (
  <div style={{ maxWidth: '20rem' }}>
    <Select id="sel-1" labelText="Region" defaultValue="us-south" helperText="Where your workload runs">
      <SelectItem value="us-south" text="Dallas (us-south)" />
      <SelectItem value="eu-de" text="Frankfurt (eu-de)" />
      <SelectItem value="jp-tok" text="Tokyo (jp-tok)" />
    </Select>
    <Select id="sel-2" labelText="Invalid" invalid invalidText="Select a region">
      <SelectItem value="" text="Choose an option" />
    </Select>
    <Select id="sel-3" labelText="Disabled" disabled>
      <SelectItem value="" text="Unavailable" />
    </Select>
  </div>
);

export const Grouped = () => (
  <div style={{ maxWidth: '20rem' }}>
    <Select id="sel-4" labelText="Instance">
      <SelectItemGroup label="Standard">
        <SelectItem value="s1" text="Standard 1x2" />
        <SelectItem value="s2" text="Standard 2x4" />
      </SelectItemGroup>
      <SelectItemGroup label="Memory optimized">
        <SelectItem value="m1" text="Memory 2x16" />
      </SelectItemGroup>
    </Select>
  </div>
);
