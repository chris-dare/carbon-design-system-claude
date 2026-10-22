import { OverflowMenu, OverflowMenuItem } from '@carbon/react';

// OverflowMenuItem only renders inside an open OverflowMenu.
export const InContext = () => (
  <div style={{ padding: '1rem' }}>
    <OverflowMenu aria-label="Row actions" open flipped>
      <OverflowMenuItem itemText="Open" />
      <OverflowMenuItem itemText="Rename" />
      <OverflowMenuItem itemText="Delete" isDelete hasDivider />
    </OverflowMenu>
  </div>
);
