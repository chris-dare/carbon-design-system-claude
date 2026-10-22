import { Menu, MenuItem, MenuItemDivider, MenuItemSelectable, MenuItemRadioGroup, MenuButton, ComboButton } from '@carbon/react';

export const Standalone = () => (
  <Menu open label="Context menu" style={{ position: 'static' }}>
    <MenuItem label="Copy" shortcut="⌘C" />
    <MenuItem label="Paste" shortcut="⌘V" />
    <MenuItemDivider />
    <MenuItemSelectable label="Show gridlines" defaultSelected />
    <MenuItemRadioGroup label="Density" items={['Compact', 'Normal', 'Spacious']} defaultSelectedItem="Normal" />
  </Menu>
);
