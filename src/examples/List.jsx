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

export const Ordered = () => (
  <OrderedList>
    <ListItem>Create an account</ListItem>
    <ListItem>Verify your email
      <OrderedList nested><ListItem>Open the message</ListItem><ListItem>Click the link</ListItem></OrderedList>
    </ListItem>
    <ListItem>Sign in</ListItem>
  </OrderedList>
);
