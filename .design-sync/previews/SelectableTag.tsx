import { SelectableTag } from '@carbon/react';

// SelectableTag is a filter chip — shown unselected and selected.
export const InContext = () => (
  <div style={{ display: 'flex', gap: '.5rem', padding: '1rem', flexWrap: 'wrap' }}>
    <SelectableTag text="Running" />
    <SelectableTag text="Stopped" selected />
    <SelectableTag text="Failed" />
  </div>
);
