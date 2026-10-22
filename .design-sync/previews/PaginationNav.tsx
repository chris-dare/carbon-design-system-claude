import { PaginationNav } from '@carbon/react';

// PaginationNav is the compact numeric pager — no page-size select.
export const InContext = () => (
  <div style={{ padding: '1rem' }}>
    <PaginationNav totalItems={10} itemsShown={7} page={2} onChange={() => {}} />
  </div>
);
