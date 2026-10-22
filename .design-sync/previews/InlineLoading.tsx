import { Loading, InlineLoading, Button } from '@carbon/react';

export const Inline = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <InlineLoading status="active" description="Deploying…" />
    <InlineLoading status="finished" description="Deployed" />
    <InlineLoading status="error" description="Deployment failed" />
  </div>
);
