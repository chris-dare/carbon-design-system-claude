import { Tile, ClickableTile, ExpandableTile, TileAboveTheFoldContent, TileBelowTheFoldContent, SelectableTile } from '@carbon/react';

export const Variants = () => (
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
    <Tile style={{ width: '14rem' }}>A basic tile holding static content.</Tile>
    <ClickableTile href="#" style={{ width: '14rem' }}>A clickable tile that navigates.</ClickableTile>
    <SelectableTile id="st-1" style={{ width: '14rem' }}>A selectable tile.</SelectableTile>
  </div>
);

export const Expandable = () => (
  <ExpandableTile id="et-1" style={{ width: '18rem' }} tileCollapsedIconText="Expand" tileExpandedIconText="Collapse">
    <TileAboveTheFoldContent><div style={{ height: '5rem' }}>Always visible summary</div></TileAboveTheFoldContent>
    <TileBelowTheFoldContent><div style={{ height: '6rem' }}>Details revealed on expand</div></TileBelowTheFoldContent>
  </ExpandableTile>
);
