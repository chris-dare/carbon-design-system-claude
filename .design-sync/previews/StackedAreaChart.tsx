import { StackedAreaChart } from '@carbon/charts-react';

// Carbon Charts measure their container, so the chart needs an explicit height
// and a bounded width — unsized, it renders a 0-height SVG and the card is blank.
const data = [{"group":"Dataset 1","date":"2025-01-01","value":41},{"group":"Dataset 1","date":"2025-02-01","value":28},{"group":"Dataset 1","date":"2025-03-01","value":63},{"group":"Dataset 1","date":"2025-04-01","value":47},{"group":"Dataset 2","date":"2025-01-01","value":56},{"group":"Dataset 2","date":"2025-02-01","value":43},{"group":"Dataset 2","date":"2025-03-01","value":78},{"group":"Dataset 2","date":"2025-04-01","value":62}];

const options = { title: 'Stacked area', axes: { left: { mapsTo: 'value' }, bottom: { mapsTo: 'date', scaleType: 'time' } }, height: '400px' };

export const Default = () => (
  <div style={{ width: '38rem', maxWidth: '100%', padding: '1rem', background: '#ffffff' }}>
    <StackedAreaChart data={data} options={options} />
  </div>
);
