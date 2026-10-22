import {
  TableContainer, Table, TableHead, TableBody, TableRow, TableHeader, TableCell,
  TableToolbar, TableBatchActions, TableBatchAction, TableActionList,
  TableSelectAll, TableSelectRow,
} from '@carbon/react';

// TableActionList groups the buttons inside TableBatchActions. The toolbar is
// forced into its selected state so the actions are visible.
export const InTable = () => (
  <TableContainer title="Services">
    <TableToolbar>
      <TableBatchActions shouldShowBatchActions totalSelected={2} onCancel={() => {}}>
        <TableActionList>
          <TableBatchAction onClick={() => {}}>Restart</TableBatchAction>
          <TableBatchAction onClick={() => {}}>Delete</TableBatchAction>
        </TableActionList>
      </TableBatchActions>
    </TableToolbar>
    <Table>
      <TableHead>
        <TableRow>
          <TableSelectAll id="tal-all" name="all" ariaLabel="Select all" checked onSelect={() => {}} />
          <TableHeader>Name</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableSelectRow id="tal-1" name="r1" ariaLabel="Select row" checked onSelect={() => {}} />
          <TableCell>api-gateway</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
