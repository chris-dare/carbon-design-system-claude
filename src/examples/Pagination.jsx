import { Pagination, PaginationNav } from '@carbon/react';

export const Basic = () => (
  <Pagination
    backwardText="Previous page"
    forwardText="Next page"
    itemsPerPageText="Items per page:"
    page={1}
    pageSize={10}
    pageSizes={[10, 20, 30, 40, 50]}
    totalItems={103}
    onChange={() => {}}
  />
);

export const Nav = () => (
  <PaginationNav totalItems={20} itemsShown={7} page={3} onChange={() => {}} />
);
