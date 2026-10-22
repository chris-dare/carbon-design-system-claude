import { Toggletip, ToggletipButton, ToggletipContent, ToggletipActions, Link, Button } from '@carbon/react';
import { Information } from '@carbon/icons-react';

export const Basic = () => (
  <div style={{ padding: '2rem' }}>
    <Toggletip defaultOpen align="bottom">
      <ToggletipButton label="Show information"><Information /></ToggletipButton>
      <ToggletipContent>
        <p>Toggletips hold interactive content and open on click, unlike tooltips.</p>
        <ToggletipActions>
          <Link href="#">Read the docs</Link>
          <Button size="sm">Got it</Button>
        </ToggletipActions>
      </ToggletipContent>
    </Toggletip>
  </div>
);
