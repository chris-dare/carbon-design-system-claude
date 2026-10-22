import { Switcher, SwitcherItem, SwitcherDivider } from '@carbon/react';

// Switcher is the UI Shell right-panel switcher list.
export const InContext = () => (
  <div style={{ width: '16rem', background: '#f4f4f4', padding: '0.5rem 0' }}>
    <Switcher aria-label="Switcher container">
      <SwitcherItem aria-label="My account" href="#">My account</SwitcherItem>
      <SwitcherDivider />
      <SwitcherItem aria-label="Administration" href="#">Administration</SwitcherItem>
    </Switcher>
  </div>
);
