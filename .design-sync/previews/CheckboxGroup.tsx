import { CheckboxGroup, Checkbox } from '@carbon/react';

export const Grouped = () => (
  <CheckboxGroup legendText="Notification channels" helperText="Pick at least one">
    <Checkbox id="cg-email" labelText="Email" defaultChecked />
    <Checkbox id="cg-sms" labelText="SMS" />
    <Checkbox id="cg-push" labelText="Push" indeterminate />
  </CheckboxGroup>
);

export const Invalid = () => (
  <CheckboxGroup legendText="Terms" invalid invalidText="You must accept to continue">
    <Checkbox id="cg-tos" labelText="I accept the terms of service" />
  </CheckboxGroup>
);
