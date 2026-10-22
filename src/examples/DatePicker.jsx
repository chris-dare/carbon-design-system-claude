import { DatePicker, DatePickerInput, TimePicker, TimePickerSelect, SelectItem } from '@carbon/react';

export const Single = () => (
  <DatePicker datePickerType="single" dateFormat="m/d/Y">
    <DatePickerInput id="dp-1" labelText="Start date" placeholder="mm/dd/yyyy" />
  </DatePicker>
);

export const Range = () => (
  <DatePicker datePickerType="range" dateFormat="m/d/Y">
    <DatePickerInput id="dp-2" labelText="Start date" placeholder="mm/dd/yyyy" />
    <DatePickerInput id="dp-3" labelText="End date" placeholder="mm/dd/yyyy" />
  </DatePicker>
);

export const States = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <DatePicker datePickerType="single"><DatePickerInput id="dp-4" labelText="Disabled" placeholder="mm/dd/yyyy" disabled /></DatePicker>
    <DatePicker datePickerType="single"><DatePickerInput id="dp-5" labelText="Invalid" placeholder="mm/dd/yyyy" invalid invalidText="Enter a valid date" /></DatePicker>
  </div>
);

export const Time = () => (
  <TimePicker id="tp-1" labelText="Deploy time">
    <TimePickerSelect id="tp-1-ampm"><SelectItem value="AM" text="AM" /><SelectItem value="PM" text="PM" /></TimePickerSelect>
    <TimePickerSelect id="tp-1-tz"><SelectItem value="utc" text="UTC" /><SelectItem value="cet" text="CET" /></TimePickerSelect>
  </TimePicker>
);
