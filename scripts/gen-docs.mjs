// The converter takes each component's picker group from its doc's frontmatter
// `category`. With no docs, all 259 components land in one flat "general" group,
// which makes the component picker unusable. This writes one .md per component:
// a real usage note for the components on Carbon's canonical list, and a
// category-only stub for the rest (sub-parts, skeletons, Fluid* variants).
import { writeFileSync, mkdirSync, readdirSync, statSync, existsSync, readFileSync } from 'node:fs';

const OUT = '.design-sync/docs';
mkdirSync(OUT, { recursive: true });

// Explicit categories for Carbon's canonical components.
const CAT = {
  Actions: ['Button','ButtonSet','IconButton','DangerButton','PrimaryButton','SecondaryButton','Link','Tag','DismissibleTag','SelectableTag','OperationalTag','CopyButton','Copy'],
  Forms: ['TextInput','TextArea','PasswordInput','ControlledPasswordInput','Checkbox','CheckboxGroup','RadioButton','RadioButtonGroup','RadioTile','Select','SelectItem','SelectItemGroup','Dropdown','ComboBox','MultiSelect','FilterableMultiSelect','NumberInput','Toggle','Search','ExpandableSearch','Slider','DatePicker','DatePickerInput','TimePicker','TimePickerSelect','FileUploader','FileUploaderButton','FileUploaderDropContainer','FileUploaderItem','Form','FormGroup','FormItem','FormLabel','Filename'],
  Navigation: ['Tabs','TabList','Tab','TabPanels','TabPanel','TabsVertical','TabListVertical','IconTab','Breadcrumb','BreadcrumbItem','ContentSwitcher','Switch','IconSwitch','Pagination','PaginationNav','Menu','MenuItem','MenuItemDivider','MenuItemGroup','MenuItemRadioGroup','MenuItemSelectable','MenuButton','ComboButton','OverflowMenu','OverflowMenuItem','SkipToContent'],
  'Data display': ['DataTable','Table','TableHead','TableBody','TableRow','TableCell','TableHeader','TableContainer','StructuredListWrapper','StructuredListHead','StructuredListBody','StructuredListRow','StructuredListCell','Tile','ClickableTile','ExpandableTile','SelectableTile','TileGroup','Accordion','AccordionItem','ContainedList','ContainedListItem','OrderedList','UnorderedList','ListItem','CodeSnippet','TreeView','TreeNode'],
  Feedback: ['InlineNotification','ToastNotification','ActionableNotification','StaticNotification','Callout','NotificationButton','NotificationActionButton','Loading','InlineLoading','ProgressBar','ProgressIndicator','ProgressStep'],
  Overlays: ['Modal','ComposedModal','ModalHeader','ModalBody','ModalFooter','ModalWrapper','Tooltip','DefinitionTooltip','Toggletip','ToggletipButton','ToggletipContent','ToggletipActions','Popover','PopoverContent'],
  Foundations: ['Theme','GlobalTheme','Layer','Grid','Column','Row','FlexGrid','Stack','HStack','VStack','Section','Heading','Header','HeaderName','HeaderNavigation','HeaderMenuItem','HeaderGlobalBar','HeaderGlobalAction','HeaderMenuButton','HeaderPanel','HeaderContainer','HeaderMenu','HeaderSideNavItems','SideNav','SideNavItems','SideNavLink','SideNavMenu','SideNavMenuItem','SideNavDivider','SideNavHeader','SideNavFooter','SideNavIcon','SideNavDetails','SideNavLinkText','SideNavSwitcher','Switcher','SwitcherItem','SwitcherDivider','Content','AspectRatio']
};

// Real usage notes for the components on Carbon's canonical list.
const DOC = {
  Button: 'Primary action trigger. `kind` selects the visual weight — `primary`, `secondary`, `tertiary`, `ghost`, `danger`, `danger--tertiary`, `danger--ghost`. `size` accepts `sm`|`md`|`lg`|`xl`|`2xl`. Pass an icon component to `renderIcon`; for icon-only actions use `IconButton` with a required `label`.',
  Link: 'Navigational text link. Use `inline` inside running text, `size` (`sm`|`md`|`lg`) to match surrounding type, and `renderIcon` for external links.',
  Tag: 'Compact metadata label. `type` selects the colour (`red`, `blue`, `teal`, `gray`, `high-contrast`, `outline`, …). Use `DismissibleTag` when the user can remove it, `SelectableTag` for filter chips, `OperationalTag` for tags that open a menu.',
  TextInput: 'Single-line text field. Always pass `id` and `labelText`. Validation is a pair: `invalid` + `invalidText`, or the softer `warn` + `warnText`. `TextArea` is the multi-line form, `PasswordInput` adds a visibility toggle.',
  Checkbox: 'Binary choice. Wrap related boxes in `CheckboxGroup` with a `legendText`. Use `indeterminate` for a partially-selected parent.',
  RadioButton: 'Single choice from a set. Always wrap in `RadioButtonGroup` with `name` and `legendText`; `orientation="vertical"` stacks them. `RadioTile` is the large selectable-card form.',
  Select: 'Native dropdown for short, fixed option lists. Children are `SelectItem`; group them with `SelectItemGroup`. For long or searchable lists prefer `Dropdown` or `ComboBox`.',
  Dropdown: 'Custom listbox for selecting one item. Takes `items` plus `itemToString`. `ComboBox` adds type-to-filter, `MultiSelect` allows several selections, `FilterableMultiSelect` combines both.',
  NumberInput: 'Numeric field with steppers. Set `min`, `max`, and `step`. Pass `label` (not `labelText`).',
  Toggle: 'Immediate on/off switch — it applies at once, so do not pair it with a Save button. Provide `labelA`/`labelB` for the two states.',
  Search: 'Search field. `size` accepts `sm`|`md`|`lg`. `ExpandableSearch` collapses to an icon until focused.',
  Slider: 'Numeric selection across a range. Set `min`, `max`, `step`; `hideTextInput` drops the paired number field.',
  DatePicker: 'Date selection. `datePickerType` is `single`, `range`, or `simple`; children are `DatePickerInput`. `TimePicker` handles time, with `TimePickerSelect` children for AM/PM and timezone.',
  FileUploader: 'File selection with per-file status. `filenameStatus` is `edit`, `complete`, or `uploading`. `FileUploaderDropContainer` gives a drag-and-drop target; `FileUploaderItem` renders one row.',
  Form: 'Form wrapper. Group related fields in `FormGroup` with a `legendText`, and use `Stack` with a `gap` for consistent vertical rhythm.',
  Tabs: 'Switches between panels. Compose `TabList` + `Tab` with `TabPanels` + `TabPanel`, matched in order. `contained` gives the boxed style; `TabsVertical` stacks them.',
  Breadcrumb: 'Shows position in a hierarchy. Mark the final `BreadcrumbItem` with `isCurrentPage`.',
  ContentSwitcher: 'Switches between mutually exclusive views of the same content. Children are `Switch`. Prefer Tabs when the panels hold different content.',
  Pagination: 'Page controls for a table or list. Needs `totalItems`, `pageSize`, and `pageSizes`. `PaginationNav` is the compact numeric variant.',
  Menu: 'Context menu surface. Children are `MenuItem`, `MenuItemDivider`, `MenuItemSelectable`, `MenuItemRadioGroup`. `MenuButton` pairs it with a trigger button; `ComboButton` adds a default action alongside.',
  OverflowMenu: 'Icon-triggered menu for secondary row actions. Children are `OverflowMenuItem`; mark destructive entries with `isDelete` and `hasDivider`.',
  DataTable: 'Render-prop table. Supply `rows` and `headers`; spread `getHeaderProps`/`getRowProps` onto the matching elements. Compose `TableContainer`, `TableToolbar`, and `TableSelectRow` for toolbars and selection. Note: those prop getters return a `key` — destructure it out and pass it directly rather than spreading it.',
  StructuredListWrapper: 'Read-only key/value or comparison list. `isCondensed` tightens rows; `isFlush` removes side padding.',
  Tile: 'Content container. `ClickableTile` navigates, `SelectableTile` behaves like a checkbox, `ExpandableTile` reveals more via `TileAboveTheFoldContent`/`TileBelowTheFoldContent`.',
  Accordion: 'Progressive disclosure list. `size` accepts `sm`|`md`|`lg`; `isFlush` removes side padding; `align` moves the chevron.',
  ContainedList: 'List inside a bounded surface. `kind` is `on-page` or `disclosed`; children are `ContainedListItem`.',
  CodeSnippet: 'Displays code with copy-to-clipboard. `type` is `inline`, `single`, or `multi`.',
  TreeView: 'Hierarchical navigation. Children are `TreeNode`, nested for depth; `isExpanded` opens a branch.',
  InlineNotification: 'In-context message anchored to content. `kind` is `error`, `info`, `success`, or `warning`; `lowContrast` softens it. `ToastNotification` floats transiently, `ActionableNotification` adds a button, `Callout` is static and non-dismissible.',
  Loading: 'Indeterminate spinner for a whole region. `small` shrinks it; `withOverlay` dims the page behind. `InlineLoading` sits inline with a `status` of `active`, `finished`, or `error`.',
  ProgressBar: 'Determinate progress. Set `value` against `max`, or omit `value` for indeterminate. `status` accepts `active`, `finished`, `error`.',
  ProgressIndicator: 'Multi-step process state. Children are `ProgressStep`; `currentIndex` marks the active step and `vertical` stacks them.',
  Modal: 'Focus-trapping dialog. `passiveModal` drops the action buttons; `danger` styles a destructive confirm. `ComposedModal` gives full control via `ModalHeader`/`ModalBody`/`ModalFooter`.',
  Tooltip: 'Short non-interactive description on hover or focus. Use `label` for the text and `align` for placement. `DefinitionTooltip` explains a term inline. For interactive content use Toggletip.',
  Toggletip: 'Click-triggered popover for interactive content. Compose `ToggletipButton`, `ToggletipContent`, and `ToggletipActions`.',
  Popover: 'Low-level floating surface behind tooltips and menus. Pair with `PopoverContent`; `caret`, `dropShadow`, and `highContrast` control the look.',
  Theme: 'Applies one of Carbon\'s four themes — `white`, `g10`, `g90`, `g100` — to its subtree. `Layer` raises surface contrast for nested content within a theme.',
  Grid: 'Responsive 2x grid. `Column` takes `sm`/`md`/`lg` span props; `condensed` and `narrow` change the gutter.',
  Header: 'UI Shell top bar. Compose `HeaderName`, `HeaderNavigation` + `HeaderMenuItem`, and `HeaderGlobalBar` + `HeaderGlobalAction`.',
  SideNav: 'UI Shell left panel. Children are `SideNavItems` holding `SideNavLink` and `SideNavMenu`/`SideNavMenuItem`.',
  HeaderPanel: 'UI Shell right panel, usually holding a `Switcher` with `SwitcherItem` children.',
  SimpleBarChart: 'Carbon chart from `@carbon/charts-react`. Takes `data` and `options`; `options.height` is effectively required because charts measure their container. See https://charts.carbondesignsystem.com/',
  AILabel: 'Marks AI-generated content. `size` accepts `mini`|`xs`|`sm`|`md`|`lg`; pass `AILabelContent` children, and attach to a field via its `decorator` prop.'
};

const NAME2CAT = {};
for (const [cat, names] of Object.entries(CAT)) for (const n of names) NAME2CAT[n] = cat;

// Pattern fallback for the long tail the explicit map doesn't name.
function categorize(n) {
  if (NAME2CAT[n]) return NAME2CAT[n];
  if (/Chart$/.test(n)) return 'Data visualization';
  if (/Skeleton$/.test(n)) return 'Feedback';
  if (/^AI/.test(n)) return 'AI';
  if (/^Table|^DataTable/.test(n)) return 'Data display';
  if (/^Fluid/.test(n)) return 'Forms';
  if (/^SideNav|^Header|^Switcher/.test(n)) return 'Foundations';
  if (/^Menu|^OverflowMenu/.test(n)) return 'Navigation';
  if (/^Modal|^Popover|^Toggletip|^Tooltip/.test(n)) return 'Overlays';
  if (/^Notification/.test(n)) return 'Feedback';
  if (/^Structured|^Tile|^Accordion|^Contained/.test(n)) return 'Data display';
  if (/^Tab|^Breadcrumb|^Pagination|^Content/.test(n)) return 'Navigation';
  return 'Other';
}

const root = 'ds-bundle/components';
// Names come from the last build AND from cfg.componentSrcMap. Without the
// config half, a component newly added via componentSrcMap (the charts) would
// have no doc on the build that first creates it, so it would land in the flat
// fallback group and only get categorised on a second build.
const fromBundle = existsSync(root)
  ? readdirSync(root)
      .filter(g => statSync(`${root}/${g}`).isDirectory())
      .flatMap(g => readdirSync(`${root}/${g}`))
  : [];
const cfg = JSON.parse(readFileSync('.design-sync/config.json', 'utf8'));
const fromCfg = Object.entries(cfg.componentSrcMap ?? {})
  .filter(([, v]) => v !== null)
  .map(([k]) => k);
const names = [...new Set([...fromBundle, ...fromCfg])].sort();
let real = 0;
for (const n of names) {
  const cat = categorize(n);
  const body = DOC[n] ? `\n${DOC[n]}\n` : `\n${n} — from @carbon/react. See the props contract in \`${n}.d.ts\`.\n`;
  if (DOC[n]) real++;
  writeFileSync(`${OUT}/${n}.md`, `---\ncategory: ${cat}\n---\n${body}`);
}
const counts = {};
for (const n of names) counts[categorize(n)] = (counts[categorize(n)] || 0) + 1;
console.log(`wrote ${names.length} docs (${real} with real usage notes)`);
console.log('groups:', JSON.stringify(counts, null, 0));
