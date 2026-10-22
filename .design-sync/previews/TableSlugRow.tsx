import {
  TableContainer, Table, TableHead, TableBody, TableRow,
  TableHeader, TableCell, TableSlugRow, AILabel, AILabelContent,
} from '@carbon/react';

// TableSlugRow is the older name for TableDecoratorRow — it takes `slug` where
// TableDecoratorRow takes `decorator`. Prefer TableDecoratorRow in new code.
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
          <TableSlugRow
            slug={
              <AILabel aiText="AI" size="mini">
                <AILabelContent>Estimated from 30 days of usage.</AILabelContent>
              </AILabel>
            }
          />
          <TableCell>auth-service</TableCell>
          <TableCell>$188.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
