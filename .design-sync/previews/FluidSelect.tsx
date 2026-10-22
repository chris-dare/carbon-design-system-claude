import { FluidForm, FluidTextInput, FluidTextArea, FluidPasswordInput, FluidSearch,
  FluidSelect, FluidDropdown, FluidComboBox, FluidMultiSelect, FluidDatePicker,
  FluidDatePickerInput, FluidTimePicker, FluidTimePickerSelect, SelectItem } from '@carbon/react';

// FluidSelect is a Fluid-style field: the label sits inside the control. Fluid fields are for dense, data-entry-heavy layouts.
export const InContext = () => (
  <div style={{ maxWidth: '24rem' }}>
    <FluidSelect id="fsel-1" labelText="Region" defaultValue="us-south">
      <SelectItem value="us-south" text="Dallas (us-south)" />
      <SelectItem value="eu-de" text="Frankfurt (eu-de)" />
    </FluidSelect>
  </div>
);
