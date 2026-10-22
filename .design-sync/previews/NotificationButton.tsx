import { NotificationButton } from '@carbon/react';

// NotificationButton inherits --cds-icon-inverse, a WHITE glyph. On a white
// card it is invisible with no error of any kind, so each variant is given the
// surface it is actually designed to sit on: the inverse strip for `toast`, and
// the low-contrast info surface for `inline`.
export const Default = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '0 0 0 1rem',
        background: 'var(--cds-background-inverse, #393939)',
        color: 'var(--cds-text-inverse, #ffffff)',
        fontFamily: "'IBM Plex Sans', sans-serif",
        fontSize: '0.875rem',
      }}
    >
      <span style={{ marginInlineEnd: 'auto' }}>Deployment finished</span>
      <NotificationButton aria-label="Dismiss notification" notificationType="toast" />
    </div>
    <div
      className="cds--inline-notification--low-contrast"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '0 0 0 1rem',
        background: 'var(--cds-notification-background-info, #edf5ff)',
        borderInlineStart: '3px solid var(--cds-support-info, #0043ce)',
        fontFamily: "'IBM Plex Sans', sans-serif",
        fontSize: '0.875rem',
      }}
    >
      <span style={{ marginInlineEnd: 'auto' }}>Low-contrast inline notification</span>
      <NotificationButton aria-label="Dismiss notification" notificationType="inline" />
    </div>
  </div>
);
