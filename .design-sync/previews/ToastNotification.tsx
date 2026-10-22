import { InlineNotification, ToastNotification, ActionableNotification, Callout } from '@carbon/react';

const kinds = ['error', 'info', 'success', 'warning'];

export const Toast = () => (
  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
    <ToastNotification kind="success" title="Deployment complete" subtitle="api-gateway is live in us-south." caption="2 minutes ago" timeout={0} />
    <ToastNotification kind="error" title="Deployment failed" subtitle="Image pull error." caption="Just now" timeout={0} />
  </div>
);
