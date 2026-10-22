import { StaticNotification } from '@carbon/react';

// StaticNotification is a non-dismissible, always-present notification for page-level context.
export const InContext = () => (
  <div style={{ maxWidth: '30rem', padding: '1rem' }}>
    <StaticNotification kind="info" title="Scheduled maintenance"
      subtitle="This service will be unavailable on Sunday 02:00–04:00 UTC." />
  </div>
);
