import { Slider } from '@carbon/react';

export const States = () => (
  <div style={{ maxWidth: '24rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
    <Slider id="sl-1" labelText="Memory (GB)" min={0} max={64} step={4} value={16} />
    <Slider id="sl-2" labelText="Without text input" min={0} max={100} value={40} hideTextInput />
    <Slider id="sl-3" labelText="Disabled" min={0} max={100} value={25} disabled />
    <Slider id="sl-4" labelText="Invalid" min={0} max={100} value={120} invalid invalidText="Out of range" />
  </div>
);
