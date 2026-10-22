import { Switcher, SwitcherItem, SwitcherDivider } from '@carbon/react';

// A divider alone renders as a 1px line. Shown inside a Switcher so the rule it
// draws between groups is legible.
export const InSwitcher = () => (
  <div style={{ width: '16rem', background: '#f4f4f4', padding: '0.5rem 0' }}>
    <Switcher aria-label="Switcher container">
      <SwitcherItem aria-label="My account" href="#">My account</SwitcherItem>
      <SwitcherDivider />
      <SwitcherItem aria-label="Administration" href="#">Administration</SwitcherItem>
      <SwitcherItem aria-label="Log out" href="#">Log out</SwitcherItem>
    </Switcher>
  </div>
);
