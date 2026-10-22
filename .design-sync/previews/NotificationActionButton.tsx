import { InlineNotification, NotificationActionButton } from '@carbon/react';

// NotificationActionButton is the inline action inside a notification’s `actions` slot.
export const InContext = () => (
  <div style={{ maxWidth: '32rem', padding: '1rem' }}>
    <InlineNotification
      kind="warning"
      title="Certificate expiring"
      subtitle="Renew within 7 days to avoid downtime."
      actions={<NotificationActionButton onClick={() => {}}>Renew now</NotificationActionButton>}
    />
  </div>
);
