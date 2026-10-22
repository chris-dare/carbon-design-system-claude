// Appends the OFFICIAL IBM Carbon guidance to each component doc.
//
// gen-docs.mjs writes a short authored note + category for all 253 components.
// This layers the real carbondesignsystem.com prose (usage + accessibility) on
// top for the ~43 components that have a documentation page, so the design
// agent reads IBM's own spec rather than only our paraphrase.
//
// Run AFTER gen-docs.mjs — it reads each existing doc and rewrites it in place.
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { readMdx } from './mdx-to-md.mjs';

const SRC = process.env.CARBON_DOCS ||
  '.design-sync/carbon-docs';
const DOCS = '.design-sync/docs';

// Carbon doc page -> the components in this bundle it governs. The page is the
// unit IBM documents (a "data table" page covers Table, TableHead, …), so one
// page's guidance is attached to every component it actually describes.
const MAP = {
  accordion: ['Accordion', 'AccordionItem'],
  'ai-label': ['AILabel', 'AILabelContent', 'AILabelActions'],
  breadcrumb: ['Breadcrumb', 'BreadcrumbItem'],
  button: ['Button', 'ButtonSet', 'IconButton', 'DangerButton', 'PrimaryButton', 'SecondaryButton'],
  checkbox: ['Checkbox', 'CheckboxGroup', 'InlineCheckbox'],
  'code-snippet': ['CodeSnippet'],
  'contained-list': ['ContainedList', 'ContainedListItem'],
  'content-switcher': ['ContentSwitcher', 'Switch', 'IconSwitch'],
  'data-table': ['DataTable', 'Table', 'TableHead', 'TableBody', 'TableRow', 'TableCell', 'TableHeader',
    'TableContainer', 'TableToolbar', 'TableToolbarContent', 'TableToolbarSearch', 'TableToolbarMenu',
    'TableToolbarAction', 'TableBatchAction', 'TableBatchActions', 'TableSelectAll', 'TableSelectRow',
    'TableExpandRow', 'TableExpandHeader', 'TableExpandedRow', 'TableActionList'],
  'date-picker': ['DatePicker', 'DatePickerInput'],
  dropdown: ['Dropdown', 'MultiSelect', 'FilterableMultiSelect', 'ComboBox'],
  'file-uploader': ['FileUploader', 'FileUploaderButton', 'FileUploaderDropContainer', 'FileUploaderItem', 'Filename'],
  form: ['Form', 'FormGroup', 'FormItem', 'FormLabel'],
  'inline-loading': ['InlineLoading'],
  link: ['Link'],
  list: ['OrderedList', 'UnorderedList', 'ListItem'],
  loading: ['Loading'],
  menu: ['Menu', 'MenuItem', 'MenuItemDivider', 'MenuItemGroup', 'MenuItemRadioGroup', 'MenuItemSelectable'],
  'menu-buttons': ['MenuButton', 'ComboButton'],
  modal: ['Modal', 'ComposedModal', 'ModalHeader', 'ModalBody', 'ModalFooter', 'ModalWrapper'],
  notification: ['InlineNotification', 'ToastNotification', 'ActionableNotification', 'StaticNotification',
    'Callout', 'NotificationButton', 'NotificationActionButton'],
  'number-input': ['NumberInput', 'FluidNumberInput'],
  'overflow-menu': ['OverflowMenu', 'OverflowMenuItem'],
  pagination: ['Pagination', 'PaginationNav'],
  popover: ['Popover', 'PopoverContent'],
  'progress-bar': ['ProgressBar'],
  'progress-indicator': ['ProgressIndicator', 'ProgressStep'],
  'radio-button': ['RadioButton', 'RadioButtonGroup'],
  search: ['Search', 'ExpandableSearch'],
  select: ['Select', 'SelectItem', 'SelectItemGroup'],
  slider: ['Slider'],
  'structured-list': ['StructuredListWrapper', 'StructuredListHead', 'StructuredListBody',
    'StructuredListRow', 'StructuredListCell', 'StructuredListInput'],
  tabs: ['Tabs', 'TabList', 'Tab', 'TabPanels', 'TabPanel', 'TabsVertical', 'TabListVertical', 'IconTab'],
  tag: ['Tag', 'DismissibleTag', 'SelectableTag', 'OperationalTag'],
  'text-input': ['TextInput', 'TextArea', 'PasswordInput', 'ControlledPasswordInput',
    'FluidTextInput', 'FluidTextArea', 'FluidPasswordInput'],
  tile: ['Tile', 'ClickableTile', 'ExpandableTile', 'SelectableTile', 'RadioTile', 'TileGroup',
    'TileAboveTheFoldContent', 'TileBelowTheFoldContent'],
  toggle: ['Toggle'],
  toggletip: ['Toggletip', 'ToggletipButton', 'ToggletipContent', 'ToggletipActions'],
  tooltip: ['Tooltip', 'DefinitionTooltip'],
  'tree-view': ['TreeView', 'TreeNode'],
  'UI-shell-header': ['Header', 'HeaderName', 'HeaderNavigation', 'HeaderMenu', 'HeaderMenuItem',
    'HeaderGlobalBar', 'HeaderGlobalAction', 'HeaderMenuButton', 'HeaderContainer', 'HeaderSideNavItems',
    'SkipToContent', 'Content'],
  'UI-shell-left-panel': ['SideNav', 'SideNavItems', 'SideNavLink', 'SideNavMenu', 'SideNavMenuItem',
    'SideNavDivider', 'SideNavHeader', 'SideNavFooter', 'SideNavIcon', 'SideNavDetails',
    'SideNavLinkText', 'SideNavSwitcher', 'Switcher', 'SwitcherItem', 'SwitcherDivider'],
  'UI-shell-right-panel': ['HeaderPanel'],
};

// Images are annotated screenshots on the website; the alt text alone carries no
// guidance once the picture is gone, and each line costs tokens in the prompt.
const stripImages = (s) => s.replace(/^!\[[^\]]*\]\([^)]*\)\s*$/gm, '').replace(/\n{3,}/g, '\n\n');

let enriched = 0, missing = [];
for (const [dir, comps] of Object.entries(MAP)) {
  const base = join(SRC, 'components', dir);
  if (!existsSync(base)) { missing.push(dir); continue; }

  const parts = [];
  for (const [file, heading] of [['usage.mdx', 'Usage'], ['accessibility.mdx', 'Accessibility']]) {
    const p = join(base, file);
    if (!existsSync(p)) continue;
    const { body } = readMdx(p);
    const cleaned = stripImages(body).trim();
    if (cleaned) parts.push(`### ${heading}\n\n${cleaned}`);
  }
  if (!parts.length) continue;

  const url = `https://carbondesignsystem.com/components/${dir}/usage/`;
  const block = [
    '', '---', '',
    '## Official IBM Carbon guidance',
    '',
    `> Verbatim from the Carbon Design System documentation: ${url}`,
    '',
    ...parts,
  ].join('\n');

  for (const c of comps) {
    const dest = join(DOCS, `${c}.md`);
    if (!existsSync(dest)) continue;
    let cur = readFileSync(dest, 'utf8');
    // Idempotent: drop a previously appended block before re-appending.
    cur = cur.split('\n## Official IBM Carbon guidance')[0].replace(/\n+---\s*$/, '').trimEnd();
    writeFileSync(dest, cur + '\n' + block + '\n');
    enriched++;
  }
}
console.log(`enriched ${enriched} component doc(s) from ${Object.keys(MAP).length} Carbon pages`);
if (missing.length) console.error('  ! missing source dirs:', missing.join(', '));
const all = readdirSync(DOCS).filter((f) => f.endsWith('.md'));
console.log(`  docs total: ${all.length}`);
