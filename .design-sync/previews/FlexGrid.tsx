import { FlexGrid, Row, Column } from '@carbon/react';

// FlexGrid is the float/flexbox grid (Row + Column). Prefer Grid + Column for new layouts.
export const InContext = () => (
  <FlexGrid style={{ padding: '1rem' }}>
    <Row>
      <Column sm={4} md={4} lg={4}><div style={{ background: '#e0e0e0', border: '1px solid #c6c6c6', padding: '.75rem',
      fontFamily: 'IBM Plex Mono, monospace', fontSize: 12 }}>a</div></Column>
      <Column sm={4} md={4} lg={4}><div style={{ background: '#e0e0e0', border: '1px solid #c6c6c6', padding: '.75rem',
      fontFamily: 'IBM Plex Mono, monospace', fontSize: 12 }}>b</div></Column>
    </Row>
  </FlexGrid>
);
