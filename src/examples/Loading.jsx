import { Loading, InlineLoading, Button } from '@carbon/react';

export const Spinners = () => (
  <div style={{ display: 'flex', gap: '3rem', alignItems: 'center', height: '6rem' }}>
    <Loading withOverlay={false} />
    <Loading withOverlay={false} small />
    <Loading withOverlay={false} active={false} />
  </div>
);

export const Inline = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <InlineLoading status="active" description="Deploying…" />
    <InlineLoading status="finished" description="Deployed" />
    <InlineLoading status="error" description="Deployment failed" />
  </div>
);
