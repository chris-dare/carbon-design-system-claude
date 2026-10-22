import { TimePicker, TimePickerSelect, SelectItem } from '@carbon/react';

// TimePickerSelect is the AM/PM or timezone dropdown attached to a TimePicker.
export const InContext = () => (
  <div style={{ maxWidth: '22rem' }}>
    <TimePicker id="tp-1" labelText="Start time">
      <TimePickerSelect id="tps-1" labelText="AM/PM">
        <SelectItem value="am" text="AM" />
        <SelectItem value="pm" text="PM" />
      </TimePickerSelect>
      <TimePickerSelect id="tps-2" labelText="Timezone">
        <SelectItem value="utc" text="UTC" />
        <SelectItem value="cet" text="CET" />
      </TimePickerSelect>
    </TimePicker>
  </div>
);
