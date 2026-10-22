import { ProgressIndicator, ProgressStep } from '@carbon/react';

// ProgressStep is one step of a ProgressIndicator.
export const InContext = () => (
  <div style={{ padding: '1rem' }}>
    <ProgressIndicator currentIndex={1}>
      <ProgressStep label="Configure" description="Step 1" />
      <ProgressStep label="Review" description="Step 2" />
      <ProgressStep label="Deploy" description="Step 3" />
      <ProgressStep label="Failed step" invalid description="Step 4" />
    </ProgressIndicator>
  </div>
);
