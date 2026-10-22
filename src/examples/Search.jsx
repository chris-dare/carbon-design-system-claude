import { Search, ExpandableSearch } from '@carbon/react';

export const Sizes = () => (
  <div style={{ maxWidth: '24rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Search id="se-sm" size="sm" labelText="Small search" placeholder="Search resources" />
    <Search id="se-md" size="md" labelText="Medium search" placeholder="Search resources" />
    <Search id="se-lg" size="lg" labelText="Large search" placeholder="Search resources" />
  </div>
);

export const Variants = () => (
  <div style={{ maxWidth: '24rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Search id="se-val" labelText="With value" placeholder="Search" defaultValue="carbon" />
    <Search id="se-dis" labelText="Disabled" placeholder="Search" disabled />
    <ExpandableSearch id="se-exp" labelText="Expandable search" placeholder="Search" />
  </div>
);
