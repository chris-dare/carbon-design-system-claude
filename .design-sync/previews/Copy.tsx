import { Copy } from '@carbon/react';
import { Copy as CopyIcon } from '@carbon/icons-react';

// Copy is the low-level copy affordance behind CopyButton — it renders whatever children you give it.
export const InContext = () => (
  <div style={{ padding: '1rem' }}>
    <Copy feedback="Copied!" aria-label="Copy to clipboard">
      <CopyIcon />
    </Copy>
  </div>
);
