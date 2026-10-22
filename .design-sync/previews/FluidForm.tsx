import { FluidForm, FluidTextInput, FluidTextArea, FluidPasswordInput, FluidSearch,
  FluidSelect, FluidDropdown, FluidComboBox, FluidMultiSelect, FluidDatePicker,
  FluidDatePickerInput, FluidTimePicker, FluidTimePickerSelect, SelectItem } from '@carbon/react';

// FluidForm groups Fluid fields so their borders collapse into one block.
export const InContext = () => (
  <div style={{ maxWidth: '24rem' }}>
    <FluidForm>
      <FluidTextInput id="ff-1" labelText="Service name" placeholder="my-service" />
      <FluidTextInput id="ff-2" labelText="Owner" placeholder="team@example.com" />
    </FluidForm>
  </div>
);
