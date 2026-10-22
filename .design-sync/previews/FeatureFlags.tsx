import { FeatureFlags, Button } from '@carbon/react';

// FeatureFlags opts a subtree into upcoming (v12) behaviour. It renders nothing itself — the effect is on descendants.
export const InContext = () => (
  <div style={{ padding: '1rem' }}>
    <FeatureFlags enableV12Overflowmenu>
      <Button>Rendered with v12 flags enabled</Button>
    </FeatureFlags>
  </div>
);
