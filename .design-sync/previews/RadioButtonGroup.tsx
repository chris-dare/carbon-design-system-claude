import { RadioButtonGroup, RadioButton } from '@carbon/react';

// RadioButtonGroup wires name/value across its RadioButton children — always wrap radios in one.
export const InContext = () => (
  <RadioButtonGroup legendText="Deployment target" name="target" defaultSelected="staging">
    <RadioButton labelText="Staging" value="staging" id="rbg-1" />
    <RadioButton labelText="Production" value="production" id="rbg-2" />
    <RadioButton labelText="Disabled" value="other" id="rbg-3" disabled />
  </RadioButtonGroup>
);
