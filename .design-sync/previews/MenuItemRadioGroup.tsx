import { Menu, MenuItem, MenuItemDivider, MenuItemGroup, MenuItemSelectable, MenuItemRadioGroup } from '@carbon/react';

// MenuItemRadioGroup only renders inside an open Menu — the Menu is forced open here.
export const InContext = () => (
  <div style={{ position: 'relative', height: '18rem' }}>
    <Menu open label="Row actions" x={8} y={8}>
      <MenuItem label="Open" />
      <MenuItem label="Rename" />
      <MenuItemDivider />
      <MenuItemGroup label="View">
        <MenuItemSelectable label="Show details" defaultSelected />
        <MenuItemSelectable label="Show hidden" />
      </MenuItemGroup>
      <MenuItemDivider />
      <MenuItemRadioGroup
        label="Sort by"
        items={['Name', 'Date', 'Size']}
        defaultSelectedItem="Name"
        itemToString={(i) => i}
      />
      <MenuItemDivider />
      <MenuItem label="Delete" kind="danger" />
    </Menu>
  </div>
);
