import { OrderedList, UnorderedList, ListItem } from '@carbon/react';

export const Ordered = () => (
  <OrderedList>
    <ListItem>Create an account</ListItem>
    <ListItem>Verify your email
      <OrderedList nested><ListItem>Open the message</ListItem><ListItem>Click the link</ListItem></OrderedList>
    </ListItem>
    <ListItem>Sign in</ListItem>
  </OrderedList>
);
