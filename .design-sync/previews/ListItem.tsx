import { UnorderedList, OrderedList, ListItem } from '@carbon/react';

// ListItem is a child of UnorderedList or OrderedList.
export const InContext = () => (
  <div style={{ display: 'flex', gap: '3rem', padding: '1rem' }}>
    <UnorderedList>
      <ListItem>Install the package</ListItem>
      <ListItem>Import the styles</ListItem>
    </UnorderedList>
    <OrderedList>
      <ListItem>Create a project</ListItem>
      <ListItem>Deploy it</ListItem>
    </OrderedList>
  </div>
);
