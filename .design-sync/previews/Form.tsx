import { Form, FormGroup, Stack, TextInput, Select, SelectItem, Checkbox, Button, ButtonSet } from '@carbon/react';

export const Complete = () => (
  <Form style={{ maxWidth: '24rem' }}>
    <Stack gap={7}>
      <FormGroup legendText="Service details">
        <Stack gap={5}>
          <TextInput id="f-name" labelText="Service name" placeholder="my-service" />
          <Select id="f-region" labelText="Region" defaultValue="us-south">
            <SelectItem value="us-south" text="Dallas (us-south)" />
            <SelectItem value="eu-de" text="Frankfurt (eu-de)" />
          </Select>
        </Stack>
      </FormGroup>
      <FormGroup legendText="Options">
        <Checkbox id="f-tls" labelText="Enforce TLS" defaultChecked />
        <Checkbox id="f-logs" labelText="Enable audit logs" />
      </FormGroup>
      <ButtonSet>
        <Button kind="secondary">Cancel</Button>
        <Button kind="primary" type="submit">Create</Button>
      </ButtonSet>
    </Stack>
  </Form>
);
