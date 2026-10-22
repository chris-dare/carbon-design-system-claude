import { ProgressIndicator, ProgressStep } from '@carbon/react';

export const Horizontal = () => (
  <ProgressIndicator currentIndex={1}>
    <ProgressStep label="Select plan" description="Step 1" />
    <ProgressStep label="Configure" description="Step 2" />
    <ProgressStep label="Review" description="Step 3" />
    <ProgressStep label="Deploy" description="Step 4" disabled />
  </ProgressIndicator>
);

export const Vertical = () => (
  <ProgressIndicator currentIndex={2} vertical>
    <ProgressStep label="Select plan" />
    <ProgressStep label="Configure" />
    <ProgressStep label="Review" secondaryLabel="In progress" />
    <ProgressStep label="Deploy" invalid />
  </ProgressIndicator>
);
