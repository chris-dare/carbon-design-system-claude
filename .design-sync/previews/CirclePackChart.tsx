import { CirclePackChart } from '@carbon/charts-react';

// Carbon Charts measure their container, so the chart needs an explicit height
// and a bounded width — unsized, it renders a 0-height SVG and the card is blank.
const data = [{ name: 'Root', children: [{ name: 'Compute', value: 48 }, { name: 'Storage', value: 32 }, { name: 'Network', value: 20 }] }];

const options = { title: 'Circle pack', height: '400px' };

export const Default = () => (
  <div style={{ width: '38rem', maxWidth: '100%', padding: '1rem', background: '#ffffff' }}>
    <CirclePackChart data={data} options={options} />
  </div>
);
