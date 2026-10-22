import { Tag, DismissibleTag, SelectableTag, OperationalTag } from '@carbon/react';

export const Types = () => (
  <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
    {['red','magenta','purple','blue','cyan','teal','green','gray','cool-gray','warm-gray','high-contrast','outline'].map(t => (
      <Tag key={t} type={t}>{t}</Tag>
    ))}
  </div>
);

export const Sizes = () => (
  <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
    <Tag type="blue" size="sm">Small</Tag>
    <Tag type="blue" size="md">Medium</Tag>
    <Tag type="blue" size="lg">Large</Tag>
  </div>
);

export const Interactive = () => (
  <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
    <DismissibleTag type="teal" text="Dismissible" />
    <SelectableTag text="Selectable" />
    <OperationalTag text="Operational" type="gray" />
  </div>
);
