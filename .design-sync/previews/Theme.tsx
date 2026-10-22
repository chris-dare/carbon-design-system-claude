import { Theme, Layer, Button, TextInput, Tile } from '@carbon/react';

const Sample = ({ name }) => (
  <Tile style={{ width: '16rem' }}>
    <div style={{ fontFamily: 'IBM Plex Mono', fontSize: 11, marginBottom: '1rem' }}>{name}</div>
    <TextInput id={`th-${name}`} labelText="Service name" defaultValue="api-gateway" />
    <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
      <Button size="sm" kind="primary">Save</Button>
      <Button size="sm" kind="secondary">Cancel</Button>
    </div>
  </Tile>
);

// Carbon's four themes. Components inherit whichever <Theme> wraps them.

export const AllThemes = () => (
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
    {['white', 'g10', 'g90', 'g100'].map(t => (
      <Theme key={t} theme={t}><div style={{ padding: '1rem' }}><Sample name={t} /></div></Theme>
    ))}
  </div>
);

// Layer raises contrast for nested surfaces within one theme.

export const Layers = () => (
  <Theme theme="g100">
    <div style={{ padding: '1rem' }}>
      <Layer><div style={{ padding: '1rem' }}>Layer 01
        <Layer><div style={{ padding: '1rem' }}>Layer 02
          <Layer><div style={{ padding: '1rem' }}>Layer 03</div></Layer>
        </div></Layer>
      </div></Layer>
    </div>
  </Theme>
);
