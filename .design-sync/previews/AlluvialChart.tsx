import { AlluvialChart } from '@carbon/charts-react';

// Carbon Charts measure their container, so the chart needs an explicit height
// and a bounded width — unsized, it renders a 0-height SVG and the card is blank.
const data = [{ source: 'Visitors', target: 'Signup', value: 60 }, { source: 'Visitors', target: 'Bounce', value: 40 }, { source: 'Signup', target: 'Paid', value: 25 }];

const options = { title: 'Alluvial', alluvial: { nodes: [{ name: 'Visitors', category: 'in' }, { name: 'Signup', category: 'mid' }, { name: 'Bounce', category: 'mid' }, { name: 'Paid', category: 'out' }] }, height: '400px' };

export const Default = () => (
  <div style={{ width: '38rem', maxWidth: '100%', padding: '1rem', background: '#ffffff' }}>
    <AlluvialChart data={data} options={options} />
  </div>
);
