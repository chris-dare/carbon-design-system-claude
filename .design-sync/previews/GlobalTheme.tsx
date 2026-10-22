import { GlobalTheme, Tile, Button } from '@carbon/react';

// GlobalTheme sets the theme for the whole document. Theme (scoped) is usually what you want inside an app.
export const InContext = () => (
  <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
    <GlobalTheme theme="white">
      <Tile style={{ width: '10rem' }}>white<br /><Button size="sm">Action</Button></Tile>
    </GlobalTheme>
    <GlobalTheme theme="g100">
      <Tile style={{ width: '10rem' }}>g100<br /><Button size="sm">Action</Button></Tile>
    </GlobalTheme>
  </div>
);
