import { TreeChart } from '@carbon/charts-react';

// Carbon Charts measure their container, so the chart needs an explicit height
// and a bounded width — unsized, it renders a 0-height SVG and the card is blank.
const data = [{ name: 'Root', children: [{ name: 'Compute', value: 48, children: [{ name: 'api', value: 20 }, { name: 'worker', value: 28 }] }, { name: 'Storage', value: 32 }] }];

const options = { title: 'Tree', tree: { type: 'tree', rootTitle: 'Root' }, height: '400px' };

export const Default = () => (
  <div style={{ width: '38rem', maxWidth: '100%', padding: '1rem', background: '#ffffff' }}>
    <TreeChart data={data} options={options} />
  </div>
);
