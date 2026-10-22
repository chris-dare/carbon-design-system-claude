import { OperationalTag } from '@carbon/react';

// OperationalTag is a tag that opens something (a menu or overflow list).
export const InContext = () => (
  <div style={{ display: 'flex', gap: '.5rem', padding: '1rem', flexWrap: 'wrap' }}>
    <OperationalTag text="+3 more" />
    <OperationalTag type="blue" text="View all regions" />
  </div>
);
