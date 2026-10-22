import { IconButton } from '@carbon/react';
import { Add, TrashCan, Settings } from '@carbon/icons-react';

// IconButton is an icon-only button; `label` is required and becomes its tooltip.
export const InContext = () => (
  <div style={{ display: 'flex', gap: '.5rem', padding: '2rem' }}>
    <IconButton label="Add" kind="primary"><Add /></IconButton>
    <IconButton label="Settings" kind="ghost"><Settings /></IconButton>
    <IconButton label="Delete" kind="danger"><TrashCan /></IconButton>
  </div>
);
