import { Tooltip, DefinitionTooltip, Button } from '@carbon/react';

export const Alignments = () => (
  <div style={{ display: 'flex', gap: '2rem', padding: '3rem', flexWrap: 'wrap' }}>
    <Tooltip label="Aligned to the top" align="top"><Button kind="ghost">Top</Button></Tooltip>
    <Tooltip label="Aligned to the bottom" align="bottom"><Button kind="ghost">Bottom</Button></Tooltip>
    <Tooltip label="Aligned to the left" align="left"><Button kind="ghost">Left</Button></Tooltip>
    <Tooltip label="Aligned to the right" align="right"><Button kind="ghost">Right</Button></Tooltip>
  </div>
);

export const Definition = () => (
  <p style={{ padding: '2rem' }}>
    Carbon uses a{' '}
    <DefinitionTooltip openOnHover definition="A named, reusable value such as a color or spacing step.">design token</DefinitionTooltip>
    {' '}system for theming.
  </p>
);
