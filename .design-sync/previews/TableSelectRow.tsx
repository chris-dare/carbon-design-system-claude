import {
  TableContainer, Table, TableHead, TableBody, TableRow,
  TableHeader, TableCell, TableSelectAll, TableSelectRow,
} from '@carbon/react';

// Selection controls only render meaningfully inside a table row, so the whole
// table is shown with one row selected and one not.
export const InTable = () => (
  <TableContainer title="Services">
    <Table>
      <TableHead>
        <TableRow>
          <TableSelectAll id="sa-1" name="select-all" ariaLabel="Select all rows" checked={false} onSelect={() => {}} />
          <TableHeader>Name</TableHeader>
          <TableHeader>Status</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableSelectRow id="sr-1" name="select-1" ariaLabel="Select row" checked={false} onSelect={() => {}} />
          <TableCell>api-gateway</TableCell>
          <TableCell>Running</TableCell>
        </TableRow>
        <TableRow>
          <TableSelectRow id="sr-2" name="select-2" ariaLabel="Select row" checked onSelect={() => {}} />
          <TableCell>auth-service</TableCell>
          <TableCell>Running</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
