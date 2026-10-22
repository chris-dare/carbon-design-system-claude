import { Button, ButtonSet, IconButton } from '@carbon/react';
import { Add, TrashCan, Download } from '@carbon/icons-react';

// Carbon ships its variant enums: ButtonKinds / ButtonSizes.
export const Kinds = () => (
  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
    <Button kind="primary">Primary</Button>
    <Button kind="secondary">Secondary</Button>
    <Button kind="tertiary">Tertiary</Button>
    <Button kind="ghost">Ghost</Button>
    <Button kind="danger">Danger</Button>
    <Button kind="danger--tertiary">Danger tertiary</Button>
    <Button kind="danger--ghost">Danger ghost</Button>
  </div>
);

export const Sizes = () => (
  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
    <Button size="xl">Extra large</Button>
    <Button size="2xl">2XL</Button>
  </div>
);

export const WithIcons = () => (
  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
    <Button renderIcon={Add}>Create</Button>
    <Button kind="secondary" renderIcon={Download}>Download</Button>
    <Button kind="danger" renderIcon={TrashCan}>Delete</Button>
    <IconButton label="Add" kind="primary"><Add /></IconButton>
    <IconButton label="Delete" kind="ghost"><TrashCan /></IconButton>
  </div>
);

export const States = () => (
  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
    <Button kind="primary">Enabled</Button>
    <Button kind="primary" disabled>Disabled</Button>
    <Button kind="secondary" disabled>Secondary disabled</Button>
    <Button kind="ghost" disabled>Ghost disabled</Button>
  </div>
);

export const Grouped = () => (
  <ButtonSet>
    <Button kind="secondary">Cancel</Button>
    <Button kind="primary">Save</Button>
  </ButtonSet>
);
