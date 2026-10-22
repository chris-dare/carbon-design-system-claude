import { Checkbox, CheckboxGroup } from '@carbon/react';

export const States = () => (
  <CheckboxGroup legendText="Notification preferences">
    <Checkbox id="cb-1" labelText="Unchecked" />
    <Checkbox id="cb-2" labelText="Checked" defaultChecked />
    <Checkbox id="cb-3" labelText="Indeterminate" indeterminate />
    <Checkbox id="cb-4" labelText="Disabled" disabled />
    <Checkbox id="cb-5" labelText="Disabled checked" disabled defaultChecked />
  </CheckboxGroup>
);

export const Validation = () => (
  <CheckboxGroup legendText="Terms" invalid invalidText="You must accept the terms">
    <Checkbox id="cb-6" labelText="I accept the terms of service" />
  </CheckboxGroup>
);
