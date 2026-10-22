import { Dropdown, ComboBox, MultiSelect, FilterableMultiSelect } from '@carbon/react';

const items = [
  { id: 'us-south', label: 'Dallas (us-south)' },
  { id: 'eu-de', label: 'Frankfurt (eu-de)' },
  { id: 'jp-tok', label: 'Tokyo (jp-tok)' }
];
const toString = (i) => (i ? i.label : '');

export const Basic = () => (
  <div style={{ maxWidth: '20rem' }}>
    <Dropdown id="dd-1" titleText="Region" label="Choose a region" items={items} itemToString={toString} />
    <Dropdown id="dd-2" titleText="Invalid" label="Choose" items={items} itemToString={toString} invalid invalidText="Selection required" />
    <Dropdown id="dd-3" titleText="Disabled" label="Choose" items={items} itemToString={toString} disabled />
  </div>
);

export const Sizes = () => (
  <div style={{ maxWidth: '20rem' }}>
    <Dropdown id="dd-sm" size="sm" titleText="Small" label="Choose" items={items} itemToString={toString} />
    <Dropdown id="dd-md" size="md" titleText="Medium" label="Choose" items={items} itemToString={toString} />
    <Dropdown id="dd-lg" size="lg" titleText="Large" label="Choose" items={items} itemToString={toString} />
  </div>
);
