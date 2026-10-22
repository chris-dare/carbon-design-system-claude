import { TableContainer, Table, TableHead, TableBody, TableRow, TableHeader, TableCell,
  TableToolbar, TableToolbarContent, TableToolbarSearch, TableToolbarMenu, TableToolbarAction,
  TableExpandHeader, TableExpandRow, TableExpandedRow, TableSelectAll, TableSelectRow,
  TableBatchActions, TableBatchAction } from '@carbon/react';

// TableToolbarSearch is a part of the DataTable composition — shown in a complete table.
export const InContext = () => (
  <TableContainer title="Services" description="Deployed workloads">
    <TableToolbar>
      <TableToolbarContent>
        <TableToolbarSearch onChange={() => {}} />
        <TableToolbarMenu light>
          <TableToolbarAction onClick={() => {}}>Export CSV</TableToolbarAction>
        </TableToolbarMenu>
      </TableToolbarContent>
    </TableToolbar>
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Status</TableHeader>
          <TableHeader>Region</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>api-gateway</TableCell>
          <TableCell>Running</TableCell>
          <TableCell>us-south</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>auth-service</TableCell>
          <TableCell>Running</TableCell>
          <TableCell>eu-de</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
