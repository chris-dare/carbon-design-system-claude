import { InlineNotification, ToastNotification, ActionableNotification, Callout } from '@carbon/react';

const kinds = ['error', 'info', 'success', 'warning'];

export const Inline = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '30rem' }}>
    {kinds.map(k => (
      <InlineNotification key={k} kind={k} title={k[0].toUpperCase() + k.slice(1)} subtitle={`An inline ${k} notification.`} />
    ))}
  </div>
);

export const InlineLowContrast = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '30rem' }}>
    {kinds.map(k => (
      <InlineNotification key={k} kind={k} lowContrast title={k[0].toUpperCase() + k.slice(1)} subtitle={`Low contrast ${k}.`} />
    ))}
  </div>
);

export const Toast = () => (
  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
    <ToastNotification kind="success" title="Deployment complete" subtitle="api-gateway is live in us-south." caption="2 minutes ago" timeout={0} />
    <ToastNotification kind="error" title="Deployment failed" subtitle="Image pull error." caption="Just now" timeout={0} />
  </div>
);

export const Actionable = () => (
  <div style={{ maxWidth: '30rem' }}>
    <ActionableNotification kind="warning" title="Certificate expiring" subtitle="Renew within 7 days." actionButtonLabel="Renew now" inline />
  </div>
);

export const CalloutVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '30rem' }}>
    <Callout kind="info" title="Note" lowContrast subtitle="Callouts are static, non-dismissible messages." />
    <Callout kind="warning" title="Heads up" lowContrast subtitle="This action cannot be undone." />
  </div>
);
