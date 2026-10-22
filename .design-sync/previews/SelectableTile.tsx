import { Tile, ClickableTile, ExpandableTile, SelectableTile, RadioTile, TileGroup,
  TileAboveTheFoldContent, TileBelowTheFoldContent } from '@carbon/react';

// SelectableTile is a multi-select card — shown unselected and selected.
export const InContext = () => (
  <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
    <SelectableTile id="st-1" name="plan" style={{ width: '12rem' }}>Standard</SelectableTile>
    <SelectableTile id="st-2" name="plan" selected style={{ width: '12rem' }}>Premium</SelectableTile>
  </div>
);
