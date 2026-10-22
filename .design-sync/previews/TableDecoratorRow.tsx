import {
  TableContainer, Table, TableHead, TableBody, TableRow,
  TableHeader, TableCell, TableDecoratorRow, AILabel, AILabelContent,
} from '@carbon/react';

// TableDecoratorRow is the leading cell that carries a row's decorator (an
// AILabel, typically) — it only renders inside a table row.
export const InTable = () => (
  <TableContainer title="Forecast">
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader />
          <TableHeader>Service</TableHeader>
          <TableHeader>Projected cost</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableDecoratorRow
            decorator={
              <AILabel aiText="AI" size="mini">
                <AILabelContent>Estimated from 30 days of usage.</AILabelContent>
              </AILabel>
            }
          />
          <TableCell>api-gateway</TableCell>
          <TableCell>$412.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
