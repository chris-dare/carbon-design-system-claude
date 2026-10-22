import { BulletChart } from '@carbon/charts-react';

// Carbon Charts measure their container, so the chart needs an explicit height
// and a bounded width — unsized, it renders a 0-height SVG and the card is blank.
const data = [{ title: 'Latency', group: 'p95', ranges: [40, 70, 100], marker: 82, value: 64 }];

const options = { title: 'Bullet', axes: { bottom: { mapsTo: 'value' }, left: { mapsTo: 'title', scaleType: 'labels' } }, height: '400px' };

export const Default = () => (
  <div style={{ width: '38rem', maxWidth: '100%', padding: '1rem', background: '#ffffff' }}>
    <BulletChart data={data} options={options} />
  </div>
);
