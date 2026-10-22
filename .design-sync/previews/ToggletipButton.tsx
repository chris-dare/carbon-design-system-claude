import { Toggletip, ToggletipButton, ToggletipContent, ToggletipActions, Link, Button } from '@carbon/react';
import { Information } from '@carbon/icons-react';

// ToggletipButton is part of the Toggletip composition — defaultOpen so the bubble is visible.
export const InContext = () => (
  <div style={{ padding: '2rem', minHeight: '12rem' }}>
    <Toggletip defaultOpen align="bottom">
      <ToggletipButton label="Show information">
        <Information />
      </ToggletipButton>
      <ToggletipContent>
        <p>Custom domains are verified with a DNS TXT record.</p>
        <ToggletipActions>
          <Link href="#">Read the docs</Link>
          <Button size="sm">Verify now</Button>
        </ToggletipActions>
      </ToggletipContent>
    </Toggletip>
  </div>
);
