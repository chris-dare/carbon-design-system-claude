import { DismissibleTag } from '@carbon/react';

// DismissibleTag is a tag the user can remove — use for applied filters.
export const InContext = () => (
  <div style={{ display: 'flex', gap: '.5rem', padding: '1rem', flexWrap: 'wrap' }}>
    <DismissibleTag type="blue" text="production" title="Remove" />
    <DismissibleTag type="teal" text="eu-de" title="Remove" />
    <DismissibleTag type="red" text="failing" title="Remove" />
  </div>
);
