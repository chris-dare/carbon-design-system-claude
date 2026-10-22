import { InlineCheckbox } from '@carbon/react';

// InlineCheckbox is the bare control used inside DataTable selection cells —
// it has no label of its own, so the three states are shown side by side.
export const States = () => (
  <div style={{ display: 'flex', gap: '2rem', padding: '1rem' }}>
    <InlineCheckbox id="ic-1" ariaLabel="Unchecked row" />
    <InlineCheckbox id="ic-2" ariaLabel="Checked row" checked />
    <InlineCheckbox id="ic-3" ariaLabel="Indeterminate row" indeterminate />
  </div>
);
