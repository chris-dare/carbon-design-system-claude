import { Layer, Tile } from '@carbon/react';

// Layer raises the surface token set for nested content, so stacked surfaces stay distinguishable.
export const InContext = () => (
  <div style={{ padding: '1rem' }}>
    <Tile>
      Layer 0
      <Layer>
        <Tile style={{ marginTop: '.5rem' }}>
          Layer 1
          <Layer>
            <Tile style={{ marginTop: '.5rem' }}>Layer 2</Tile>
          </Layer>
        </Tile>
      </Layer>
    </Tile>
  </div>
);
