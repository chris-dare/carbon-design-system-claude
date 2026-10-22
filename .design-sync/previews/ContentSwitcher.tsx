import { ContentSwitcher, Switch } from '@carbon/react';

export const Sizes = () => (
  <div style={{ maxWidth: '24rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <ContentSwitcher size="sm" onChange={() => {}}>
      <Switch name="a1" text="Day" /><Switch name="b1" text="Week" /><Switch name="c1" text="Month" />
    </ContentSwitcher>
    <ContentSwitcher size="md" onChange={() => {}}>
      <Switch name="a2" text="Day" /><Switch name="b2" text="Week" /><Switch name="c2" text="Month" />
    </ContentSwitcher>
    <ContentSwitcher size="lg" onChange={() => {}}>
      <Switch name="a3" text="Day" /><Switch name="b3" text="Week" /><Switch name="c3" text="Month" />
    </ContentSwitcher>
  </div>
);
