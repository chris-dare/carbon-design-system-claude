import { OverflowMenu, OverflowMenuItem } from '@carbon/react';

export const Sizes = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <OverflowMenu size="sm" aria-label="Small overflow menu">
      <OverflowMenuItem itemText="Edit" />
      <OverflowMenuItem itemText="Duplicate" />
      <OverflowMenuItem itemText="Delete" isDelete hasDivider />
    </OverflowMenu>
    <OverflowMenu size="md" aria-label="Medium overflow menu">
      <OverflowMenuItem itemText="Edit" />
      <OverflowMenuItem itemText="Disabled" disabled />
    </OverflowMenu>
    <OverflowMenu size="lg" aria-label="Large overflow menu">
      <OverflowMenuItem itemText="Edit" />
    </OverflowMenu>
  </div>
);
