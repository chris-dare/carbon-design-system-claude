import { Grid, Column, FlexGrid, Row } from '@carbon/react';

const cell = { background: '#d0e2ff', padding: '1rem', fontFamily: 'IBM Plex Mono', fontSize: 12 };

export const Columns = () => (
  <Grid>
    <Column sm={4} md={8} lg={16}><div style={cell}>sm=4 md=8 lg=16</div></Column>
    <Column sm={2} md={4} lg={8}><div style={cell}>half</div></Column>
    <Column sm={2} md={4} lg={8}><div style={cell}>half</div></Column>
    {[1, 2, 3, 4].map(i => <Column key={i} sm={1} md={2} lg={4}><div style={cell}>quarter {i}</div></Column>)}
  </Grid>
);

export const Modes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
    <Grid condensed><Column lg={8}><div style={cell}>condensed</div></Column><Column lg={8}><div style={cell}>condensed</div></Column></Grid>
    <Grid narrow><Column lg={8}><div style={cell}>narrow</div></Column><Column lg={8}><div style={cell}>narrow</div></Column></Grid>
  </div>
);
