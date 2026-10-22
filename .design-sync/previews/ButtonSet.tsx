import { ButtonSet, Button } from '@carbon/react';

// ButtonSet lays out a form’s action buttons with Carbon spacing and order.
export const InContext = () => (
  <div style={{ padding: '1rem' }}>
    <ButtonSet>
      <Button kind="secondary">Cancel</Button>
      <Button kind="primary">Save</Button>
    </ButtonSet>
  </div>
);
