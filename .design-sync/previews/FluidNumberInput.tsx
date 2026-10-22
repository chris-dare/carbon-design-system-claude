import { FluidNumberInput } from '@carbon/react';

export const States = () => (
  <div style={{ maxWidth: '22rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <FluidNumberInput id="fni-1" label="Replicas" min={0} max={10} defaultValue={3} />
    <FluidNumberInput id="fni-2" label="Invalid" min={0} max={10} defaultValue={11} invalid invalidText="Out of range" />
    <FluidNumberInput id="fni-3" label="Disabled" defaultValue={1} disabled />
  </div>
);
