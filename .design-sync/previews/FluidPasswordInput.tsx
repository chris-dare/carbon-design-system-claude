import { FluidForm, FluidTextInput, FluidTextArea, FluidPasswordInput, FluidSearch,
  FluidSelect, FluidDropdown, FluidComboBox, FluidMultiSelect, FluidDatePicker,
  FluidDatePickerInput, FluidTimePicker, FluidTimePickerSelect, SelectItem } from '@carbon/react';

// FluidPasswordInput is a Fluid-style field: the label sits inside the control. Fluid fields are for dense, data-entry-heavy layouts.
export const InContext = () => (
  <div style={{ maxWidth: '24rem' }}>
    <FluidPasswordInput id="fp-1" labelText="API key" />
  </div>
);
