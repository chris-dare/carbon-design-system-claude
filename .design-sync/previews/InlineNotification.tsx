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
