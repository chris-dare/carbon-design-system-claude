import { ExpandableSearch } from '@carbon/react';

// ExpandableSearch collapses to an icon until focused — shown collapsed and expanded.
export const InContext = () => (
  <div style={{ padding: '1rem', display: 'flex', gap: '1rem' }}>
    <ExpandableSearch size="lg" labelText="Search" placeholder="Search services" />
    <ExpandableSearch size="lg" labelText="Search" placeholder="Search" isExpanded />
  </div>
);
