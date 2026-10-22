// Turn our verified src/examples/*.jsx into authored previews at
// .design-sync/previews/<Name>.tsx — one file per COMPONENT, which is the
// name the converter binds a preview to. Several example files cover more
// than one component (Notification.jsx holds four), so those are split by
// export: the shared import header plus only the exports that belong to
// that component.
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';

const SRC = 'src/examples';
const OUT = '.design-sync/previews';
if (existsSync(OUT)) rmSync(OUT, { recursive: true });
mkdirSync(OUT, { recursive: true });

// component -> [example file, ...exports to keep] ; no exports = keep all
const MAP = {
  Button: ['Button'], Tag: ['Tag'], Link: ['Link'],
  TextInput: ['TextInput', 'States', 'Sizes'], TextArea: ['TextInput', 'Multiline'],
  Checkbox: ['Checkbox'], RadioButton: ['RadioButton'], Select: ['Select'],
  Dropdown: ['Dropdown', 'Basic', 'Sizes'], ComboBox: ['Dropdown', 'Combo'],
  NumberInput: ['NumberInput'], Toggle: ['Toggle'], Search: ['Search'], Slider: ['Slider'],
  DatePicker: ['DatePicker', 'Single', 'Range', 'States'], TimePicker: ['DatePicker', 'Time'],
  FileUploader: ['FileUploader'], Form: ['Form'],
  Tabs: ['Tabs'], Breadcrumb: ['Breadcrumb'], ContentSwitcher: ['ContentSwitcher'],
  Pagination: ['Pagination'],
  Menu: ['Menu', 'Standalone'], MenuButton: ['Menu', 'Buttons'],
  OverflowMenu: ['OverflowMenu'], DataTable: ['DataTable'],
  StructuredListWrapper: ['StructuredList'], Tile: ['Tile'], Accordion: ['Accordion'],
  ContainedList: ['ContainedList'], CodeSnippet: ['CodeSnippet'], TreeView: ['TreeView'],
  UnorderedList: ['List', 'Unordered'], OrderedList: ['List', 'Ordered'],
  InlineNotification: ['Notification', 'Inline', 'InlineLowContrast'],
  ToastNotification: ['Notification', 'Toast'],
  ActionableNotification: ['Notification', 'Actionable'],
  Callout: ['Notification', 'CalloutVariants'],
  Loading: ['Loading', 'Spinners'], InlineLoading: ['Loading', 'Inline'],
  ProgressBar: ['ProgressBar'], ProgressIndicator: ['ProgressIndicator'],
  SkeletonText: ['Skeleton'],
  Modal: ['Modal'], Tooltip: ['Tooltip'], Toggletip: ['Toggletip'], Popover: ['Popover'],
  Theme: ['Theme'], Grid: ['Grid'], AILabel: ['AILabel'],
  Header: ['UIShell', 'TopHeader'], SideNav: ['UIShell', 'LeftPanel'],
  HeaderPanel: ['UIShell', 'RightPanel']
};

// Split a file into its import header and its `export const NAME = ...` blocks.
function parse(src) {
  const lines = src.split('\n');
  const starts = [];
  lines.forEach((l, i) => { const m = /^export const (\w+)/.exec(l); if (m) starts.push([i, m[1]]); });
  const header = lines.slice(0, starts.length ? starts[0][0] : lines.length).join('\n').trimEnd();
  const blocks = {};
  starts.forEach(([i, name], k) => {
    const end = k + 1 < starts.length ? starts[k + 1][0] : lines.length;
    blocks[name] = lines.slice(i, end).join('\n').trimEnd();
  });
  return { header, blocks };
}

let written = 0, skipped = [];
for (const [component, [file, ...keep]] of Object.entries(MAP)) {
  const path = `${SRC}/${file}.jsx`;
  if (!existsSync(path)) { skipped.push(`${component} (no ${path})`); continue; }
  const { header, blocks } = parse(readFileSync(path, 'utf8'));
  const names = keep.length ? keep : Object.keys(blocks);
  const chosen = names.filter(n => blocks[n]);
  const missing = names.filter(n => !blocks[n]);
  if (missing.length) skipped.push(`${component} (missing exports: ${missing.join(',')})`);
  if (!chosen.length) continue;
  writeFileSync(`${OUT}/${component}.tsx`, `${header}\n\n${chosen.map(n => blocks[n]).join('\n\n')}\n`);
  written++;
}
console.log(`wrote ${written} authored previews -> ${OUT}`);
if (skipped.length) console.log('issues:', skipped.join(' | '));
