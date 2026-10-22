import { FluidForm, FluidTextInput, FluidTextArea, FluidPasswordInput, FluidSearch,
  FluidSelect, FluidDropdown, FluidComboBox, FluidMultiSelect, FluidDatePicker,
  FluidDatePickerInput, FluidTimePicker, FluidTimePickerSelect, SelectItem } from '@carbon/react';

// FluidTimePicker is a Fluid-style field: the label sits inside the control. Fluid fields are for dense, data-entry-heavy layouts.
export const InContext = () => (
  <div style={{ maxWidth: '24rem' }}>
    <FluidTimePicker id="ftp-1" labelText="Start time" placeholder="hh:mm">
      <FluidTimePickerSelect id="ftps-1" labelText="AM/PM">
        <SelectItem value="am" text="AM" />
        <SelectItem value="pm" text="PM" />
      </FluidTimePickerSelect>
    </FluidTimePicker>
  </div>
);
