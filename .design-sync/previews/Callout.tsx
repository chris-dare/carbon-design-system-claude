import { InlineNotification, ToastNotification, ActionableNotification, Callout } from '@carbon/react';

const kinds = ['error', 'info', 'success', 'warning'];

export const CalloutVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '30rem' }}>
    <Callout kind="info" title="Note" lowContrast subtitle="Callouts are static, non-dismissible messages." />
    <Callout kind="warning" title="Heads up" lowContrast subtitle="This action cannot be undone." />
  </div>
);
