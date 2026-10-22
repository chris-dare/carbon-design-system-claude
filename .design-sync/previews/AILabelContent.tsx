import { AILabel, AILabelContent, AILabelActions, Button, IconButton } from '@carbon/react';

// AILabelContent is the popover body of an AILabel — shown with defaultOpen.
export const InContext = () => (
  <div style={{ padding: '3rem', minHeight: '16rem' }}>
    <AILabel defaultOpen autoAlign aiText="AI" size="md">
      <AILabelContent>
        <div>
          <p style={{ fontWeight: 600, marginBottom: '.5rem' }}>AI Explained</p>
          <p>This value was generated from your last 30 days of usage.</p>
        </div>
        <AILabelActions>
          <Button kind="ghost" size="sm">View details</Button>
        </AILabelActions>
      </AILabelContent>
    </AILabel>
  </div>
);
