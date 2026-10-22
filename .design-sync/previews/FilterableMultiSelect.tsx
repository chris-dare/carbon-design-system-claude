import { FilterableMultiSelect } from '@carbon/react';

// FilterableMultiSelect is MultiSelect plus type-to-filter.
export const InContext = () => (
  <div style={{ maxWidth: '22rem' }}>
    <FilterableMultiSelect
      id="fms-1"
      titleText="Regions"
      placeholder="Filter regions"
      items={['us-south', 'us-east', 'eu-de', 'jp-tok']}
      itemToString={(i) => i}
      initialSelectedItems={['eu-de']}
    />
  </div>
);
