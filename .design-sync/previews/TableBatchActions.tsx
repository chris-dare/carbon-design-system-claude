import { TableContainer, Table, TableHead, TableBody, TableRow, TableHeader, TableCell,
  TableToolbar, TableToolbarContent, TableToolbarSearch, TableToolbarMenu, TableToolbarAction,
  TableExpandHeader, TableExpandRow, TableExpandedRow, TableSelectAll, TableSelectRow,
  TableBatchActions, TableBatchAction } from '@carbon/react';

// TableBatchActions appears in the DataTable toolbar once rows are selected — shown with shouldShowBatchActions forced on.
export const InContext = () => (
  <TableContainer title="Services">
    <TableToolbar>
      <TableBatchActions shouldShowBatchActions totalSelected={2} onCancel={() => {}}>
        <TableBatchAction onClick={() => {}}>Restart</TableBatchAction>
        <TableBatchAction onClick={() => {}}>Delete</TableBatchAction>
      </TableBatchActions>
    </TableToolbar>
    <Table>
      <TableHead>
        <TableRow>
          <TableSelectAll id="ba-all" name="all" ariaLabel="Select all" checked onSelect={() => {}} />
          <TableHeader>Name</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableSelectRow id="ba-1" name="r1" ariaLabel="Select row" checked onSelect={() => {}} />
          <TableCell>api-gateway</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
