import { Menu, MenuItem, MenuItemDivider, MenuItemSelectable, MenuItemRadioGroup, MenuButton, ComboButton } from '@carbon/react';

export const Buttons = () => (
  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
    <MenuButton label="Actions">
      <MenuItem label="Restart" />
      <MenuItem label="Duplicate" />
      <MenuItemDivider />
      <MenuItem label="Delete" kind="danger" />
    </MenuButton>
    <MenuButton label="Danger" kind="danger">
      <MenuItem label="Force delete" kind="danger" />
    </MenuButton>
    <ComboButton label="Deploy">
      <MenuItem label="Deploy to staging" />
      <MenuItem label="Deploy to production" />
    </ComboButton>
  </div>
);

export const Standalone = () => (
  <Menu open label="Context menu" style={{ position: 'static' }}>
    <MenuItem label="Copy" shortcut="⌘C" />
    <MenuItem label="Paste" shortcut="⌘V" />
    <MenuItemDivider />
    <MenuItemSelectable label="Show gridlines" defaultSelected />
    <MenuItemRadioGroup label="Density" items={['Compact', 'Normal', 'Spacious']} defaultSelectedItem="Normal" />
  </Menu>
);
