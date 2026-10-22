import { Grid, Column } from '@carbon/react';

// Column takes sm/md/lg span props against Carbon’s 4/8/16-column 2x Grid.
export const InContext = () => (
  <Grid style={{ padding: '1rem' }}>
    <Column sm={4} md={4} lg={4}><div style={{ background: '#e0e0e0', border: '1px solid #c6c6c6', padding: '.75rem',
      fontFamily: 'IBM Plex Mono, monospace', fontSize: 12 }}>sm=4 md=4 lg=4</div></Column>
    <Column sm={4} md={4} lg={8}><div style={{ background: '#e0e0e0', border: '1px solid #c6c6c6', padding: '.75rem',
      fontFamily: 'IBM Plex Mono, monospace', fontSize: 12 }}>sm=4 md=4 lg=8</div></Column>
    <Column sm={4} md={8} lg={16}><div style={{ background: '#e0e0e0', border: '1px solid #c6c6c6', padding: '.75rem',
      fontFamily: 'IBM Plex Mono, monospace', fontSize: 12 }}>full width</div></Column>
  </Grid>
);
