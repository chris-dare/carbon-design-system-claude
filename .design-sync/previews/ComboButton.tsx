import { ComboButton, MenuItem } from '@carbon/react';

// ComboButton pairs a default action with a menu of alternatives.
export const InContext = () => (
  <div style={{ padding: '1rem' }}>
    <ComboButton label="Deploy">
      <MenuItem label="Deploy to staging" />
      <MenuItem label="Deploy to production" />
    </ComboButton>
  </div>
);
