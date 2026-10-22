import {
  DataTable, Table, TableHead, TableRow, TableHeader, TableBody, TableCell,
  TableContainer, TableToolbar, TableToolbarContent, TableToolbarSearch,
  TableSelectAll, TableSelectRow, Button, DataTableSkeleton
} from '@carbon/react';

const headers = [
  { key: 'name', header: 'Name' },
  { key: 'status', header: 'Status' },
  { key: 'region', header: 'Region' },
  { key: 'updated', header: 'Last updated' }
];
const rows = [
  { id: 'a', name: 'api-gateway', status: 'Running', region: 'us-south', updated: '2 min ago' },
  { id: 'b', name: 'auth-service', status: 'Running', region: 'eu-de', updated: '18 min ago' },
  { id: 'c', name: 'batch-worker', status: 'Stopped', region: 'jp-tok', updated: '3 hr ago' }
];

export const Basic = () => (
  <DataTable rows={rows} headers={headers}>
    {({ rows, headers, getHeaderProps, getRowProps, getTableProps }) => (
      <TableContainer title="Services" description="Workloads in this account">
        <Table {...getTableProps()}>
          <TableHead>
            <TableRow>{headers.map(h => { const { key, ...rest } = getHeaderProps({ header: h }); return <TableHeader key={h.key} {...rest}>{h.header}</TableHeader>; })}</TableRow>
          </TableHead>
          <TableBody>
            {rows.map(r => (
              <TableRow key={r.id} {...(({ key, ...rest }) => rest)(getRowProps({ row: r }))}>
                {r.cells.map(c => <TableCell key={c.id}>{c.value}</TableCell>)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  </DataTable>
);

export const WithToolbarAndSelection = () => (
  <DataTable rows={rows} headers={headers}>
    {({ rows, headers, getHeaderProps, getRowProps, getSelectionProps, getTableProps }) => (
      <TableContainer title="Services">
        <TableToolbar>
          <TableToolbarContent>
            <TableToolbarSearch onChange={() => {}} />
            <Button kind="primary">Create</Button>
          </TableToolbarContent>
        </TableToolbar>
        <Table {...getTableProps()}>
          <TableHead>
            <TableRow>
              <TableSelectAll {...getSelectionProps()} />
              {headers.map(h => { const { key, ...rest } = getHeaderProps({ header: h }); return <TableHeader key={h.key} {...rest}>{h.header}</TableHeader>; })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(r => (
              <TableRow key={r.id} {...(({ key, ...rest }) => rest)(getRowProps({ row: r }))}>
                <TableSelectRow {...getSelectionProps({ row: r })} />
                {r.cells.map(c => <TableCell key={c.id}>{c.value}</TableCell>)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  </DataTable>
);

export const Zebra = () => (
  <DataTable rows={rows} headers={headers} useZebraStyles>
    {({ rows, headers, getHeaderProps, getTableProps }) => (
      <TableContainer title="Zebra striping">
        <Table {...getTableProps()}>
          <TableHead><TableRow>{headers.map(h => { const { key, ...rest } = getHeaderProps({ header: h }); return <TableHeader key={h.key} {...rest}>{h.header}</TableHeader>; })}</TableRow></TableHead>
          <TableBody>{rows.map(r => <TableRow key={r.id}>{r.cells.map(c => <TableCell key={c.id}>{c.value}</TableCell>)}</TableRow>)}</TableBody>
        </Table>
      </TableContainer>
    )}
  </DataTable>
);

export const Loading = () => <DataTableSkeleton columnCount={4} rowCount={4} showHeader showToolbar />;
