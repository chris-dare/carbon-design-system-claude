import { OrderedList, UnorderedList, ListItem } from '@carbon/react';

export const Unordered = () => (
  <UnorderedList>
    <ListItem>Provision the cluster</ListItem>
    <ListItem>Attach a database
      <UnorderedList nested><ListItem>Choose a plan</ListItem><ListItem>Set credentials</ListItem></UnorderedList>
    </ListItem>
    <ListItem>Deploy the service</ListItem>
  </UnorderedList>
);
