import { DatePicker, DatePickerInput, TimePicker, TimePickerSelect, SelectItem } from '@carbon/react';

export const Time = () => (
  <TimePicker id="tp-1" labelText="Deploy time">
    <TimePickerSelect id="tp-1-ampm"><SelectItem value="AM" text="AM" /><SelectItem value="PM" text="PM" /></TimePickerSelect>
    <TimePickerSelect id="tp-1-tz"><SelectItem value="utc" text="UTC" /><SelectItem value="cet" text="CET" /></TimePickerSelect>
  </TimePicker>
);
