// Authors one preview per @carbon/charts-react chart.
//
// Carbon Charts are d3-driven and measure their container, so every preview
// gives the chart an explicit height and a bounded width — an unsized chart
// renders a 0-height SVG and the card reads as blank.
//
// Data shapes follow the official examples at charts.carbondesignsystem.com:
// most charts take [{ group, key, value }]; a few need their own shape.
import { writeFileSync } from 'node:fs';

const OUT = '.design-sync/previews';

const QUARTERS = ['Q1', 'Q2', 'Q3', 'Q4'];
const GROUPS = ['Dataset 1', 'Dataset 2'];

// [{group, key, value}] — the shape most Carbon charts consume.
const categorical = () => JSON.stringify(
  GROUPS.flatMap((group, gi) =>
    QUARTERS.map((key, i) => ({ group, key, value: [32, 57, 21, 49][i] + gi * 18 }))),
);

// Single-series. SimpleBarChart/Lollipop/Histogram plot one series; a second
// group there yields a legend entry with nothing drawn for it.
const single = () => JSON.stringify(
  QUARTERS.map((key, i) => ({ group: 'Requests', key, value: [32, 57, 21, 49][i] })),
);

// Boxplot needs a distribution per category, not one value.
const distribution = () => JSON.stringify(
  ['Q1', 'Q2', 'Q3'].flatMap((group) =>
    [12, 18, 24, 27, 31, 38, 44, 52].map((v, i) => ({
      group, key: group, value: v + (group === 'Q2' ? 9 : group === 'Q3' ? -4 : 0) + i,
    }))),
);

const timeSeries = () => JSON.stringify(
  GROUPS.flatMap((group, gi) =>
    ['2025-01-01', '2025-02-01', '2025-03-01', '2025-04-01'].map((date, i) => ({
      group, date, value: [41, 28, 63, 47][i] + gi * 15,
    }))),
);

const xy = () => JSON.stringify(
  GROUPS.flatMap((group, gi) =>
    [[12, 30], [24, 45], [36, 22], [48, 58]].map(([x, y]) => ({
      group, value: y + gi * 10, key: x,
    }))),
);

const AXES_CAT = `{ left: { mapsTo: 'value' }, bottom: { mapsTo: 'key', scaleType: 'labels' } }`;
const AXES_TIME = `{ left: { mapsTo: 'value' }, bottom: { mapsTo: 'date', scaleType: 'time' } }`;

// name -> [dataExpr, optionsExpr]
const H = `height: '400px'`;
const CHARTS = {
  SimpleBarChart:  [single(), `{ title: 'Simple bar', axes: ${AXES_CAT}, ${H} }`],
  GroupedBarChart: [categorical(), `{ title: 'Grouped bar', axes: ${AXES_CAT}, ${H} }`],
  StackedBarChart: [categorical(), `{ title: 'Stacked bar', axes: ${AXES_CAT}, ${H} }`],
  LollipopChart:   [single(), `{ title: 'Lollipop', axes: ${AXES_CAT}, ${H} }`],
  LineChart:       [timeSeries(),  `{ title: 'Line', axes: ${AXES_TIME}, ${H} }`],
  AreaChart:       [timeSeries(),  `{ title: 'Area', axes: ${AXES_TIME}, ${H} }`],
  StackedAreaChart:[timeSeries(),  `{ title: 'Stacked area', axes: ${AXES_TIME}, ${H} }`],
  ScatterChart:    [xy(),          `{ title: 'Scatter', axes: ${AXES_CAT}, ${H} }`],
  BubbleChart:     [xy(),          `{ title: 'Bubble', axes: ${AXES_CAT}, ${H} }`],
  HistogramChart:  [single(), `{ title: 'Histogram', axes: { left: { mapsTo: 'value' }, bottom: { mapsTo: 'key', scaleType: 'labels' } }, ${H} }`],
  BoxplotChart:    [distribution(), `{ title: 'Boxplot', axes: ${AXES_CAT}, ${H} }`],
  ComboChart:      [categorical(), `{ title: 'Combo', axes: ${AXES_CAT}, ${H} }`],
  HeatmapChart:    [categorical(), `{ title: 'Heatmap', axes: { left: { mapsTo: 'group', scaleType: 'labels' }, bottom: { mapsTo: 'key', scaleType: 'labels' } }, ${H} }`],
  PieChart:        [categorical(), `{ title: 'Pie', resizable: true, ${H} }`],
  DonutChart:      [categorical(), `{ title: 'Donut', resizable: true, donut: { center: { label: 'Total' } }, ${H} }`],
  GaugeChart:      [`[{ group: 'value', value: 42 }, { group: 'delta', value: -13.37 }]`, `{ title: 'Gauge', resizable: true, gauge: { type: 'semi' }, ${H} }`],
  MeterChart:      [`[{ group: 'Dataset 1', value: 56 }]`, `{ title: 'Meter', meter: { peak: 80 }, ${H} }`],
  RadarChart:      [`[{ group: 'Dataset 1', key: 'Speed', value: 42 }, { group: 'Dataset 1', key: 'Power', value: 60 }, { group: 'Dataset 1', key: 'Range', value: 35 }, { group: 'Dataset 1', key: 'Comfort', value: 78 }, { group: 'Dataset 1', key: 'Safety', value: 55 }]`, `{ title: 'Radar', radar: { axes: { angle: 'key', value: 'value' } }, ${H} }`],
  TreemapChart:    [`[{ name: 'Root', children: [{ name: 'Compute', value: 48 }, { name: 'Storage', value: 32 }, { name: 'Network', value: 20 }] }]`, `{ title: 'Treemap', ${H} }`],
  CirclePackChart: [`[{ name: 'Root', children: [{ name: 'Compute', value: 48 }, { name: 'Storage', value: 32 }, { name: 'Network', value: 20 }] }]`, `{ title: 'Circle pack', ${H} }`],
  TreeChart:       [`[{ name: 'Root', children: [{ name: 'Compute', value: 48, children: [{ name: 'api', value: 20 }, { name: 'worker', value: 28 }] }, { name: 'Storage', value: 32 }] }]`, `{ title: 'Tree', tree: { type: 'tree', rootTitle: 'Root' }, ${H} }`],
  WordCloudChart:  [`[{ word: 'carbon', value: 100, group: 'A' }, { word: 'design', value: 80, group: 'A' }, { word: 'system', value: 60, group: 'B' }, { word: 'tokens', value: 45, group: 'B' }, { word: 'react', value: 30, group: 'A' }]`, `{ title: 'Word cloud', resizable: true, ${H} }`],
  AlluvialChart:   [`[{ source: 'Visitors', target: 'Signup', value: 60 }, { source: 'Visitors', target: 'Bounce', value: 40 }, { source: 'Signup', target: 'Paid', value: 25 }]`, `{ title: 'Alluvial', alluvial: { nodes: [{ name: 'Visitors', category: 'in' }, { name: 'Signup', category: 'mid' }, { name: 'Bounce', category: 'mid' }, { name: 'Paid', category: 'out' }] }, ${H} }`],
  BulletChart:     [`[{ title: 'Latency', group: 'p95', ranges: [40, 70, 100], marker: 82, value: 64 }]`, `{ title: 'Bullet', axes: { bottom: { mapsTo: 'value' }, left: { mapsTo: 'title', scaleType: 'labels' } }, ${H} }`],
};

let n = 0;
for (const [name, [data, options]] of Object.entries(CHARTS)) {
  writeFileSync(`${OUT}/${name}.tsx`, `import { ${name} } from '@carbon/charts-react';

// Carbon Charts measure their container, so the chart needs an explicit height
// and a bounded width — unsized, it renders a 0-height SVG and the card is blank.
const data = ${data};

const options = ${options};

export const Default = () => (
  <div style={{ width: '38rem', maxWidth: '100%', padding: '1rem', background: '#ffffff' }}>
    <${name} data={data} options={options} />
  </div>
);
`);
  n++;
}
console.log(`wrote ${n} chart previews -> ${OUT}`);
