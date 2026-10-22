import { ContentSwitcher, Switch } from '@carbon/react';

// Switch is one option of a ContentSwitcher (not a toggle — that is Toggle).
export const InContext = () => (
  <div style={{ padding: '1rem', maxWidth: '24rem' }}>
    <ContentSwitcher onChange={() => {}}>
      <Switch name="all" text="All" />
      <Switch name="running" text="Running" />
      <Switch name="failed" text="Failed" />
    </ContentSwitcher>
  </div>
);
