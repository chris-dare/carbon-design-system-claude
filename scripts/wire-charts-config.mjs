// Registers the @carbon/charts-react charts as first-class components.
//
// extraEntries merges the charts onto window.Carbon but does NOT create cards —
// cards come from the main package's export scan. cfg.componentSrcMap with a
// non-null value ADDS a name to that component list, which is how the charts
// get cards. The pinned path is only used for src/ enrichment (prose + prop
// inference); it does not resolve from @carbon/react, so enrichment is skipped
// and cfg.dtsPropsFor supplies the contract instead.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const CFG = '.design-sync/config.json';
const cfg = JSON.parse(readFileSync(CFG, 'utf8'));

const charts = readdirSync('.design-sync/previews')
  .filter((f) => /Chart\.tsx$/.test(f))
  .map((f) => f.replace(/\.tsx$/, ''))
  .sort();

// Every Carbon chart takes the same two props; the variation lives inside
// `options`, which is documented per chart at charts.carbondesignsystem.com.
const PROPS = [
  '  /**',
  '   * The data to plot. Most charts take [{ group, key, value }]; hierarchical',
  '   * charts (Treemap, CirclePack, Tree) take a nested { name, children } tree,',
  '   * and Alluvial takes [{ source, target, value }].',
  '   */',
  '  data: object[] | object;',
  '  /**',
  '   * Chart configuration. Full reference: https://charts.carbondesignsystem.com/',
  '   * A height is effectively required \u2014 charts measure their container and an',
  '   * unsized chart renders a 0-height SVG.',
  '   */',
  '  options: {',
  "    title?: string;",
  "    height?: string;",
  "    width?: string;",
  "    theme?: 'white' | 'g10' | 'g90' | 'g100';",
  '    resizable?: boolean;',
  '    axes?: Record<string, {',
  '      mapsTo?: string;',
  '      title?: string;',
  "      scaleType?: 'linear' | 'log' | 'time' | 'labels';",
  '    }>;',
  "    legend?: { enabled?: boolean; position?: 'top' | 'bottom' | 'left' | 'right' };",
  '    toolbar?: { enabled?: boolean };',
  '    tooltip?: { enabled?: boolean };',
  '    color?: { scale?: Record<string, string> };',
  '    [key: string]: unknown;',
  '  };',
  '  className?: string;',
  '  id?: string;',
].join('\n');

cfg.componentSrcMap ??= {};
cfg.dtsPropsFor ??= {};
for (const name of charts) {
  cfg.componentSrcMap[name] = `../charts-react/dist/${name}.tsx`;
  cfg.dtsPropsFor[name] = PROPS;
}

writeFileSync(CFG, JSON.stringify(cfg, null, 2));
console.log(`registered ${charts.length} charts:`, charts.join(' '));
