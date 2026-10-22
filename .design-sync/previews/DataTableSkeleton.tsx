import { DataTableSkeleton } from '@carbon/react';

// DataTableSkeleton is a full-width table placeholder, so it gets a wider frame than the other skeletons.
export const InContext = () => (
  <div style={{ width: '44rem', maxWidth: '100%' }}>
    <DataTableSkeleton columnCount={4} rowCount={4} showHeader showToolbar />
  </div>
);
