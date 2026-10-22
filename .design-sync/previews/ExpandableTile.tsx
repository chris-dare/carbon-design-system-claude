import { Tile, ClickableTile, ExpandableTile, SelectableTile, RadioTile, TileGroup,
  TileAboveTheFoldContent, TileBelowTheFoldContent } from '@carbon/react';

// ExpandableTile is part of the ExpandableTile composition — shown expanded.
export const InContext = () => (
  <div style={{ maxWidth: '20rem', padding: '1rem' }}>
    <ExpandableTile expanded id="et-1" tileCollapsedIconText="Expand" tileExpandedIconText="Collapse">
      <TileAboveTheFoldContent>
        <div style={{ padding: '1rem' }}><h5>api-gateway</h5><p>Running · us-south</p></div>
      </TileAboveTheFoldContent>
      <TileBelowTheFoldContent>
        <div style={{ padding: '1rem' }}>Replicas: 3 · Image: api-gateway:1.4.2</div>
      </TileBelowTheFoldContent>
    </ExpandableTile>
  </div>
);
