import { Dropdown, ComboBox, MultiSelect, FilterableMultiSelect } from '@carbon/react';

const items = [
  { id: 'us-south', label: 'Dallas (us-south)' },
  { id: 'eu-de', label: 'Frankfurt (eu-de)' },
  { id: 'jp-tok', label: 'Tokyo (jp-tok)' }
];
const toString = (i) => (i ? i.label : '');

export const Combo = () => (
  <div style={{ maxWidth: '20rem' }}>
    <ComboBox id="cb-1" titleText="Searchable region" placeholder="Filter regions" items={items} itemToString={toString} />
    <MultiSelect id="ms-1" titleText="Regions" label="Select regions" items={items} itemToString={toString} />
    <FilterableMultiSelect id="fms-1" titleText="Filterable regions" placeholder="Filter" items={items} itemToString={toString} />
  </div>
);
