import { FlexGrid, Row, Column } from '@carbon/react';

// Row is the flexbox grid row — used with FlexGrid, not the CSS-grid Grid.
export const InContext = () => (
  <FlexGrid style={{ padding: '1rem' }}>
    <Row>
      <Column sm={2} md={4} lg={8}><div style={{ background: '#e0e0e0', border: '1px solid #c6c6c6', padding: '.75rem',
      fontFamily: 'IBM Plex Mono, monospace', fontSize: 12 }}>half</div></Column>
      <Column sm={2} md={4} lg={8}><div style={{ background: '#e0e0e0', border: '1px solid #c6c6c6', padding: '.75rem',
      fontFamily: 'IBM Plex Mono, monospace', fontSize: 12 }}>half</div></Column>
    </Row>
  </FlexGrid>
);
