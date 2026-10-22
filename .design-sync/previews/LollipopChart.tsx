import { LollipopChart } from '@carbon/charts-react';

// Carbon Charts measure their container, so the chart needs an explicit height
// and a bounded width — unsized, it renders a 0-height SVG and the card is blank.
const data = [{"group":"Requests","key":"Q1","value":32},{"group":"Requests","key":"Q2","value":57},{"group":"Requests","key":"Q3","value":21},{"group":"Requests","key":"Q4","value":49}];

const options = { title: 'Lollipop', axes: { left: { mapsTo: 'value' }, bottom: { mapsTo: 'key', scaleType: 'labels' } }, height: '400px' };

export const Default = () => (
  <div style={{ width: '38rem', maxWidth: '100%', padding: '1rem', background: '#ffffff' }}>
    <LollipopChart data={data} options={options} />
  </div>
);
