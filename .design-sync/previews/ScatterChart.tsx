import { ScatterChart } from '@carbon/charts-react';

// Carbon Charts measure their container, so the chart needs an explicit height
// and a bounded width — unsized, it renders a 0-height SVG and the card is blank.
const data = [{"group":"Dataset 1","value":30,"key":12},{"group":"Dataset 1","value":45,"key":24},{"group":"Dataset 1","value":22,"key":36},{"group":"Dataset 1","value":58,"key":48},{"group":"Dataset 2","value":40,"key":12},{"group":"Dataset 2","value":55,"key":24},{"group":"Dataset 2","value":32,"key":36},{"group":"Dataset 2","value":68,"key":48}];

const options = { title: 'Scatter', axes: { left: { mapsTo: 'value' }, bottom: { mapsTo: 'key', scaleType: 'labels' } }, height: '400px' };

export const Default = () => (
  <div style={{ width: '38rem', maxWidth: '100%', padding: '1rem', background: '#ffffff' }}>
    <ScatterChart data={data} options={options} />
  </div>
);
