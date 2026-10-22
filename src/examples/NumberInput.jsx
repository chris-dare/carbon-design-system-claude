import { NumberInput } from '@carbon/react';

export const States = () => (
  <div style={{ maxWidth: '20rem' }}>
    <NumberInput id="ni-1" label="Replicas" min={0} max={10} defaultValue={3} helperText="Between 0 and 10" />
    <NumberInput id="ni-2" label="Invalid" min={0} max={10} defaultValue={11} invalid invalidText="Value out of range" />
    <NumberInput id="ni-3" label="Disabled" defaultValue={1} disabled />
  </div>
);

export const Sizes = () => (
  <div style={{ maxWidth: '20rem' }}>
    <NumberInput id="ni-sm" size="sm" label="Small" defaultValue={1} />
    <NumberInput id="ni-md" size="md" label="Medium" defaultValue={1} />
    <NumberInput id="ni-lg" size="lg" label="Large" defaultValue={1} />
  </div>
);
