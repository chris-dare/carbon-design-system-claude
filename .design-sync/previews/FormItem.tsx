import { FormItem, TextInput } from '@carbon/react';

// FormItem applies Carbon form spacing to a single field.
export const InContext = () => (
  <div style={{ maxWidth: '22rem' }}>
    <FormItem>
      <TextInput id="fi-1" labelText="Service name" placeholder="my-service" />
    </FormItem>
  </div>
);
