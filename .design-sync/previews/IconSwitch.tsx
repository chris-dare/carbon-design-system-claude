import { ContentSwitcher, IconSwitch } from '@carbon/react';
import { List, Grid as GridIcon } from '@carbon/icons-react';

// IconSwitch is an icon-only ContentSwitcher option; `text` is its tooltip.
export const InContext = () => (
  <div style={{ padding: '1rem', maxWidth: '12rem' }}>
    <ContentSwitcher onChange={() => {}} size="md">
      <IconSwitch name="list" text="List view"><List /></IconSwitch>
      <IconSwitch name="grid" text="Grid view"><GridIcon /></IconSwitch>
    </ContentSwitcher>
  </div>
);
