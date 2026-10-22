import { RadarChart } from '@carbon/charts-react';

// Carbon Charts measure their container, so the chart needs an explicit height
// and a bounded width — unsized, it renders a 0-height SVG and the card is blank.
const data = [{ group: 'Dataset 1', key: 'Speed', value: 42 }, { group: 'Dataset 1', key: 'Power', value: 60 }, { group: 'Dataset 1', key: 'Range', value: 35 }, { group: 'Dataset 1', key: 'Comfort', value: 78 }, { group: 'Dataset 1', key: 'Safety', value: 55 }];

const options = { title: 'Radar', radar: { axes: { angle: 'key', value: 'value' } }, height: '400px' };

export const Default = () => (
  <div style={{ width: '38rem', maxWidth: '100%', padding: '1rem', background: '#ffffff' }}>
    <RadarChart data={data} options={options} />
  </div>
);
