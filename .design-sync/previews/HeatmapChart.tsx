import { HeatmapChart } from '@carbon/charts-react';

// Carbon Charts measure their container, so the chart needs an explicit height
// and a bounded width — unsized, it renders a 0-height SVG and the card is blank.
const data = [{"group":"Dataset 1","key":"Q1","value":32},{"group":"Dataset 1","key":"Q2","value":57},{"group":"Dataset 1","key":"Q3","value":21},{"group":"Dataset 1","key":"Q4","value":49},{"group":"Dataset 2","key":"Q1","value":50},{"group":"Dataset 2","key":"Q2","value":75},{"group":"Dataset 2","key":"Q3","value":39},{"group":"Dataset 2","key":"Q4","value":67}];

const options = { title: 'Heatmap', axes: { left: { mapsTo: 'group', scaleType: 'labels' }, bottom: { mapsTo: 'key', scaleType: 'labels' } }, height: '400px' };

export const Default = () => (
  <div style={{ width: '38rem', maxWidth: '100%', padding: '1rem', background: '#ffffff' }}>
    <HeatmapChart data={data} options={options} />
  </div>
);
