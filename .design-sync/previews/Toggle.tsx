import { Toggle } from '@carbon/react';

export const States = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
    <Toggle id="tg-1" labelText="Auto-scaling" labelA="Off" labelB="On" />
    <Toggle id="tg-2" labelText="Public endpoint" labelA="Off" labelB="On" defaultToggled />
    <Toggle id="tg-3" labelText="Disabled" labelA="Off" labelB="On" disabled />
  </div>
);

export const Sizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
    <Toggle id="tg-sm" size="sm" labelText="Small toggle" labelA="Off" labelB="On" defaultToggled />
    <Toggle id="tg-md" size="md" labelText="Medium toggle" labelA="Off" labelB="On" defaultToggled />
  </div>
);
