import { MultiSelect } from '@carbon/react';

// MultiSelect selects several values from a fixed list.
export const InContext = () => (
  <div style={{ maxWidth: '22rem' }}>
    <MultiSelect
      id="ms-1"
      titleText="Environments"
      label="Choose environments"
      items={['Development', 'Staging', 'Production']}
      itemToString={(i) => i}
      initialSelectedItems={['Staging']}
    />
  </div>
);
