import { GaugeChart } from '@carbon/charts-react';

// Carbon Charts measure their container, so the chart needs an explicit height
// and a bounded width — unsized, it renders a 0-height SVG and the card is blank.
const data = [{ group: 'value', value: 42 }, { group: 'delta', value: -13.37 }];

const options = { title: 'Gauge', resizable: true, gauge: { type: 'semi' }, height: '400px' };

export const Default = () => (
  <div style={{ width: '38rem', maxWidth: '100%', padding: '1rem', background: '#ffffff' }}>
    <GaugeChart data={data} options={options} />
  </div>
);
