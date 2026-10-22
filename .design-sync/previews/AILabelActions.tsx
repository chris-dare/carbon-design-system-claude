import { AILabel, AILabelContent, AILabelActions, Button } from '@carbon/react';

// AILabelActions is the action row at the foot of an AILabel popover.
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
          <Button size="sm">Accept</Button>
        </AILabelActions>
      </AILabelContent>
    </AILabel>
  </div>
);
