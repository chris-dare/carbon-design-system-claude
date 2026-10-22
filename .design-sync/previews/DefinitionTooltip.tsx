import { DefinitionTooltip } from '@carbon/react';

// openOnHover is set so the bubble is visible in a static card — without it the
// preview is just underlined text and the component looks like it does nothing.
export const InProse = () => (
  <p style={{ padding: '2rem', maxWidth: '26rem' }}>
    Carbon uses a{' '}
    <DefinitionTooltip openOnHover definition="A named, reusable value such as a color or spacing step.">
      design token
    </DefinitionTooltip>{' '}
    system, so a layout built on tokens adapts to every theme.
  </p>
);
