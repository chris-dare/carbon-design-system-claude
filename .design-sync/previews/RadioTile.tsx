import { Tile, ClickableTile, ExpandableTile, SelectableTile, RadioTile, TileGroup,
  TileAboveTheFoldContent, TileBelowTheFoldContent } from '@carbon/react';

// RadioTile is a single-select card; wrap a set in TileGroup.
export const InContext = () => (
  <div style={{ maxWidth: '30rem', padding: '1rem' }}>
    <TileGroup name="plan" legend="Choose a plan" defaultSelected="standard">
      <RadioTile id="rt-1" value="lite">Lite — 1 vCPU</RadioTile>
      <RadioTile id="rt-2" value="standard">Standard — 2 vCPU</RadioTile>
      <RadioTile id="rt-3" value="premium" disabled>Premium — 4 vCPU</RadioTile>
    </TileGroup>
  </div>
);
