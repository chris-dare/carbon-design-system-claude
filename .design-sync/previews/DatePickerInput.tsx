import { DatePicker, DatePickerInput } from '@carbon/react';

// DatePickerInput is the text field of a DatePicker and must be its child.
export const InContext = () => (
  <div style={{ maxWidth: '22rem' }}>
    <DatePicker datePickerType="single">
      <DatePickerInput id="dpi-1" labelText="Start date" placeholder="mm/dd/yyyy" />
    </DatePicker>
  </div>
);
