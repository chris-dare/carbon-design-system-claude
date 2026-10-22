import { Tile, ClickableTile, ExpandableTile, SelectableTile, RadioTile, TileGroup,
  TileAboveTheFoldContent, TileBelowTheFoldContent } from '@carbon/react';

// TileGroup wires name/value across RadioTile children.
export const InContext = () => (
  <div style={{ maxWidth: '30rem', padding: '1rem' }}>
    <TileGroup name="plan-2" legend="Choose a plan" defaultSelected="standard">
      <RadioTile id="tg-1" value="lite">Lite</RadioTile>
      <RadioTile id="tg-2" value="standard">Standard</RadioTile>
    </TileGroup>
  </div>
);
