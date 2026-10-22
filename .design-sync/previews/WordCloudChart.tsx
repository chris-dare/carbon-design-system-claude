import { WordCloudChart } from '@carbon/charts-react';

// Carbon Charts measure their container, so the chart needs an explicit height
// and a bounded width — unsized, it renders a 0-height SVG and the card is blank.
const data = [{ word: 'carbon', value: 100, group: 'A' }, { word: 'design', value: 80, group: 'A' }, { word: 'system', value: 60, group: 'B' }, { word: 'tokens', value: 45, group: 'B' }, { word: 'react', value: 30, group: 'A' }];

const options = { title: 'Word cloud', resizable: true, height: '400px' };

export const Default = () => (
  <div style={{ width: '38rem', maxWidth: '100%', padding: '1rem', background: '#ffffff' }}>
    <WordCloudChart data={data} options={options} />
  </div>
);
