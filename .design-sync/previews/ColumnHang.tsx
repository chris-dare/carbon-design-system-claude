import { Grid, Column, ColumnHang } from '@carbon/react';

// ColumnHang offsets content so it hangs into the gutter, aligning text to the grid edge.
export const InContext = () => (
  <Grid style={{ padding: '1rem' }}>
    <Column sm={4} md={8} lg={12}>
      <ColumnHang>
        <div style={{ background: '#e0e0e0', border: '1px solid #c6c6c6', padding: '.75rem',
      fontFamily: 'IBM Plex Mono, monospace', fontSize: 12 }}>ColumnHang aligns content to the grid gutter</div>
      </ColumnHang>
    </Column>
  </Grid>
);
