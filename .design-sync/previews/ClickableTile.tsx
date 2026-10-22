import { Tile, ClickableTile, ExpandableTile, SelectableTile, RadioTile, TileGroup,
  TileAboveTheFoldContent, TileBelowTheFoldContent } from '@carbon/react';

// ClickableTile turns the whole tile into a link.
export const InContext = () => (
  <div style={{ display: 'flex', gap: '1rem', padding: '1rem', flexWrap: 'wrap' }}>
    <ClickableTile href="#" style={{ width: '14rem' }}>
      <h5 style={{ marginBottom: '.5rem' }}>Documentation</h5>
      <p>Read the getting-started guide.</p>
    </ClickableTile>
    <ClickableTile disabled style={{ width: '14rem' }}>
      <h5 style={{ marginBottom: '.5rem' }}>Disabled</h5>
      <p>Not available yet.</p>
    </ClickableTile>
  </div>
);
