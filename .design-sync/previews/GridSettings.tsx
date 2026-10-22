import { GridSettings, Grid, Column } from '@carbon/react';

// GridSettings switches the grid implementation (css-grid vs flexbox) for its subtree.
export const InContext = () => (
  <GridSettings mode="css-grid">
    <Grid style={{ padding: '1rem' }}>
      <Column sm={4} md={4} lg={8}><div style={{ background: '#e0e0e0', border: '1px solid #c6c6c6', padding: '.75rem',
      fontFamily: 'IBM Plex Mono, monospace', fontSize: 12 }}>css-grid mode</div></Column>
      <Column sm={4} md={4} lg={8}><div style={{ background: '#e0e0e0', border: '1px solid #c6c6c6', padding: '.75rem',
      fontFamily: 'IBM Plex Mono, monospace', fontSize: 12 }}>css-grid mode</div></Column>
    </Grid>
  </GridSettings>
);
