import { InlineNotification, ToastNotification, ActionableNotification, Callout } from '@carbon/react';

const kinds = ['error', 'info', 'success', 'warning'];

export const Actionable = () => (
  <div style={{ maxWidth: '30rem' }}>
    <ActionableNotification kind="warning" title="Certificate expiring" subtitle="Renew within 7 days." actionButtonLabel="Renew now" inline />
  </div>
);
