import { AILabel, AILabelContent, AILabelActions, Button, IconButton, TextInput } from '@carbon/react';
import { View, FolderOpen, Folders } from '@carbon/icons-react';

const Content = () => (
  <AILabelContent>
    <div>
      <p style={{ fontSize: 12, color: '#a8a8a8' }}>AI Explained</p>
      <h3 style={{ fontSize: 14, margin: '0.25rem 0' }}>Confidence score</h3>
      <p style={{ fontSize: 12 }}>This value was generated from your usage history over the last 30 days.</p>
    </div>
    <AILabelActions>
      <IconButton kind="ghost" label="View"><View /></IconButton>
      <IconButton kind="ghost" label="Open folder"><FolderOpen /></IconButton>
      <IconButton kind="ghost" label="Folders"><Folders /></IconButton>
      <Button size="sm">View details</Button>
    </AILabelActions>
  </AILabelContent>
);

export const Sizes = () => (
  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '2rem' }}>
    {['xs', 'sm', 'md', 'lg'].map(s => (
      <AILabel key={s} size={s} autoAlign><Content /></AILabel>
    ))}
  </div>
);

export const InAField = () => (
  <div style={{ maxWidth: '20rem', padding: '2rem' }}>
    <TextInput id="ai-ti" labelText="Predicted capacity" defaultValue="4 vCPU" decorator={<AILabel size="mini"><Content /></AILabel>} />
  </div>
);
