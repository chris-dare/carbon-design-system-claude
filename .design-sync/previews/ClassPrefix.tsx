import { ClassPrefix, Button } from '@carbon/react';

// ClassPrefix changes the CSS class prefix for its subtree (default "cds"). Only needed when two Carbon versions coexist — the stylesheet must use the same prefix.
export const InContext = () => (
  <div style={{ padding: '1rem' }}>
    <ClassPrefix prefix="cds">
      <Button>Rendered inside a ClassPrefix boundary</Button>
    </ClassPrefix>
  </div>
);
