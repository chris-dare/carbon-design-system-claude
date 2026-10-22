import { BoxplotChart } from '@carbon/charts-react';

// Carbon Charts measure their container, so the chart needs an explicit height
// and a bounded width — unsized, it renders a 0-height SVG and the card is blank.
const data = [{"group":"Q1","key":"Q1","value":12},{"group":"Q1","key":"Q1","value":19},{"group":"Q1","key":"Q1","value":26},{"group":"Q1","key":"Q1","value":30},{"group":"Q1","key":"Q1","value":35},{"group":"Q1","key":"Q1","value":43},{"group":"Q1","key":"Q1","value":50},{"group":"Q1","key":"Q1","value":59},{"group":"Q2","key":"Q2","value":21},{"group":"Q2","key":"Q2","value":28},{"group":"Q2","key":"Q2","value":35},{"group":"Q2","key":"Q2","value":39},{"group":"Q2","key":"Q2","value":44},{"group":"Q2","key":"Q2","value":52},{"group":"Q2","key":"Q2","value":59},{"group":"Q2","key":"Q2","value":68},{"group":"Q3","key":"Q3","value":8},{"group":"Q3","key":"Q3","value":15},{"group":"Q3","key":"Q3","value":22},{"group":"Q3","key":"Q3","value":26},{"group":"Q3","key":"Q3","value":31},{"group":"Q3","key":"Q3","value":39},{"group":"Q3","key":"Q3","value":46},{"group":"Q3","key":"Q3","value":55}];

const options = { title: 'Boxplot', axes: { left: { mapsTo: 'value' }, bottom: { mapsTo: 'key', scaleType: 'labels' } }, height: '400px' };

export const Default = () => (
  <div style={{ width: '38rem', maxWidth: '100%', padding: '1rem', background: '#ffffff' }}>
    <BoxplotChart data={data} options={options} />
  </div>
);
