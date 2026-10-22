import { MeterChart } from '@carbon/charts-react';

// Carbon Charts measure their container, so the chart needs an explicit height
// and a bounded width — unsized, it renders a 0-height SVG and the card is blank.
const data = [{ group: 'Dataset 1', value: 56 }];

const options = { title: 'Meter', meter: { peak: 80 }, height: '400px' };

export const Default = () => (
  <div style={{ width: '38rem', maxWidth: '100%', padding: '1rem', background: '#ffffff' }}>
    <MeterChart data={data} options={options} />
  </div>
);
