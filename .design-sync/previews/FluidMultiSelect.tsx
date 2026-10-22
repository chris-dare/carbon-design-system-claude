import { FluidForm, FluidTextInput, FluidTextArea, FluidPasswordInput, FluidSearch,
  FluidSelect, FluidDropdown, FluidComboBox, FluidMultiSelect, FluidDatePicker,
  FluidDatePickerInput, FluidTimePicker, FluidTimePickerSelect, SelectItem } from '@carbon/react';

// FluidMultiSelect is a Fluid-style field: the label sits inside the control. Fluid fields are for dense, data-entry-heavy layouts.
export const InContext = () => (
  <div style={{ maxWidth: '24rem' }}>
    <FluidMultiSelect id="fm-1" titleText="Tags" label="Choose tags"
      items={['prod', 'staging', 'internal']} itemToString={(i) => i} />
  </div>
);
