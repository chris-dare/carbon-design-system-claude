import { TableContainer, Table, TableHead, TableBody, TableRow, TableHeader, TableCell,
  TableToolbar, TableToolbarContent, TableToolbarSearch, TableToolbarMenu, TableToolbarAction,
  TableExpandHeader, TableExpandRow, TableExpandedRow, TableSelectAll, TableSelectRow,
  TableBatchActions, TableBatchAction } from '@carbon/react';

// TableExpandedRow only renders meaningfully inside an expandable DataTable.
export const InContext = () => (
  <TableContainer title="Services">
    <Table>
      <TableHead>
        <TableRow>
          <TableExpandHeader />
          <TableHeader>Name</TableHeader>
          <TableHeader>Status</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableExpandRow isExpanded onExpand={() => {}}>
          <TableCell>api-gateway</TableCell>
          <TableCell>Running</TableCell>
        </TableExpandRow>
        <TableExpandedRow colSpan={3}>
          <div style={{ padding: '1rem' }}>Replicas: 3 · Image: api-gateway:1.4.2</div>
        </TableExpandedRow>
        <TableExpandRow isExpanded={false} onExpand={() => {}}>
          <TableCell>auth-service</TableCell>
          <TableCell>Running</TableCell>
        </TableExpandRow>
      </TableBody>
    </Table>
  </TableContainer>
);
