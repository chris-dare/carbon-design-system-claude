// Authors a preview for every remaining "floor card" component.
//
// A floor card ("Preview not yet authored") is what the converter emits when a
// component has no preview. Most of these are not missing work — they are
// COMPOUND SUB-PARTS (TableRow, SideNavLink, ModalHeader) or non-visual
// PROVIDERS (Theme, FeatureFlags) that render nothing meaningful on their own.
//
// So each one is shown in the context it is actually used in: the sub-part
// inside its parent, the provider wrapping something whose appearance it
// changes. That is more useful to a design agent than an isolated element, and
// it removes the misleading "not yet authored" card.
import { writeFileSync, existsSync } from 'node:fs';

const OUT = '.design-sync/previews';
const written = [];
const skipped = [];

// name -> { imports, body, note }
const P = {};

/** Register a preview. `imports` are pulled from @carbon/react unless `icons`. */
const def = (name, { imports, icons, body, note, exportName = 'InContext' }) => {
  P[name] = { imports, icons, body, note, exportName };
};

// ---------------------------------------------------------------- data table
const TABLE_IMPORTS = `TableContainer, Table, TableHead, TableBody, TableRow, TableHeader, TableCell,
  TableToolbar, TableToolbarContent, TableToolbarSearch, TableToolbarMenu, TableToolbarAction,
  TableExpandHeader, TableExpandRow, TableExpandedRow, TableSelectAll, TableSelectRow,
  TableBatchActions, TableBatchAction`;

const TABLE_BODY = `  <TableContainer title="Services" description="Deployed workloads">
    <TableToolbar>
      <TableToolbarContent>
        <TableToolbarSearch onChange={() => {}} />
        <TableToolbarMenu light>
          <TableToolbarAction onClick={() => {}}>Export CSV</TableToolbarAction>
        </TableToolbarMenu>
      </TableToolbarContent>
    </TableToolbar>
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Status</TableHeader>
          <TableHeader>Region</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>api-gateway</TableCell>
          <TableCell>Running</TableCell>
          <TableCell>us-south</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>auth-service</TableCell>
          <TableCell>Running</TableCell>
          <TableCell>eu-de</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>`;

for (const n of ['Table','TableHead','TableBody','TableRow','TableHeader','TableCell',
                 'TableContainer','TableToolbar','TableToolbarContent','TableToolbarSearch',
                 'TableToolbarMenu','TableToolbarAction']) {
  def(n, { imports: TABLE_IMPORTS, body: TABLE_BODY,
    note: `${n} is a part of the DataTable composition — shown in a complete table.` });
}

const TABLE_EXPAND_BODY = `  <TableContainer title="Services">
    <Table>
      <TableHead>
        <TableRow>
          <TableExpandHeader />
          <TableHeader>Name</TableHeader>
          <TableHeader>Status</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableExpandRow isExpanded onExpand={() => {}}>
          <TableCell>api-gateway</TableCell>
          <TableCell>Running</TableCell>
        </TableExpandRow>
        <TableExpandedRow colSpan={3}>
          <div style={{ padding: '1rem' }}>Replicas: 3 · Image: api-gateway:1.4.2</div>
        </TableExpandedRow>
        <TableExpandRow isExpanded={false} onExpand={() => {}}>
          <TableCell>auth-service</TableCell>
          <TableCell>Running</TableCell>
        </TableExpandRow>
      </TableBody>
    </Table>
  </TableContainer>`;
for (const n of ['TableExpandHeader','TableExpandRow','TableExpandedRow']) {
  def(n, { imports: TABLE_IMPORTS, body: TABLE_EXPAND_BODY,
    note: `${n} only renders meaningfully inside an expandable DataTable.` });
}

const BATCH_BODY = `  <TableContainer title="Services">
    <TableToolbar>
      <TableBatchActions shouldShowBatchActions totalSelected={2} onCancel={() => {}}>
        <TableBatchAction onClick={() => {}}>Restart</TableBatchAction>
        <TableBatchAction onClick={() => {}}>Delete</TableBatchAction>
      </TableBatchActions>
    </TableToolbar>
    <Table>
      <TableHead>
        <TableRow>
          <TableSelectAll id="ba-all" name="all" ariaLabel="Select all" checked onSelect={() => {}} />
          <TableHeader>Name</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableSelectRow id="ba-1" name="r1" ariaLabel="Select row" checked onSelect={() => {}} />
          <TableCell>api-gateway</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>`;
for (const n of ['TableBatchActions','TableBatchAction']) {
  def(n, { imports: TABLE_IMPORTS, body: BATCH_BODY,
    note: `${n} appears in the DataTable toolbar once rows are selected — shown with shouldShowBatchActions forced on.` });
}

// ---------------------------------------------------------------- UI shell
const SIDENAV_IMPORTS = `SideNav, SideNavItems, SideNavLink, SideNavMenu, SideNavMenuItem,
  SideNavDivider, SideNavHeader, SideNavFooter, SideNavIcon, SideNavDetails,
  SideNavLinkText, SideNavSwitcher, SideNavItem`;
const SIDENAV_BODY = `  <div style={{ position: 'relative', height: '22rem', width: '16rem' }}>
    <SideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side navigation">
      <SideNavItems>
        <SideNavLink renderIcon={Dashboard} href="#" isActive>Overview</SideNavLink>
        <SideNavLink renderIcon={ChartLine} href="#">Metrics</SideNavLink>
        <SideNavDivider />
        <SideNavMenu renderIcon={Settings} title="Settings" defaultExpanded>
          <SideNavMenuItem href="#">General</SideNavMenuItem>
          <SideNavMenuItem href="#" isActive>Access</SideNavMenuItem>
        </SideNavMenu>
      </SideNavItems>
    </SideNav>
  </div>`;
for (const n of ['SideNavItems','SideNavLink','SideNavMenu','SideNavMenuItem','SideNavDivider',
                 'SideNavIcon','SideNavLinkText','SideNavItem','SideNavHeader','SideNavFooter',
                 'SideNavDetails','SideNavSwitcher']) {
  def(n, { imports: SIDENAV_IMPORTS, icons: 'Dashboard, ChartLine, Settings', body: SIDENAV_BODY,
    note: `${n} is part of the UI Shell left panel — shown inside a SideNav.` });
}

const HEADER_IMPORTS = `Header, HeaderName, HeaderNavigation, HeaderMenu, HeaderMenuItem,
  HeaderGlobalBar, HeaderGlobalAction, HeaderMenuButton, HeaderContainer, HeaderSideNavItems,
  SkipToContent, Content`;
const HEADER_BODY = `  <div style={{ position: 'relative', height: '6rem' }}>
    <Header aria-label="Carbon Platform">
      <SkipToContent />
      <HeaderMenuButton aria-label="Open menu" onClick={() => {}} isActive={false} />
      <HeaderName href="#" prefix="IBM">Platform</HeaderName>
      <HeaderNavigation aria-label="Platform">
        <HeaderMenuItem href="#" isActive>Catalog</HeaderMenuItem>
        <HeaderMenuItem href="#">Docs</HeaderMenuItem>
        <HeaderMenu aria-label="Resources" menuLinkName="Resources">
          <HeaderMenuItem href="#">Guides</HeaderMenuItem>
          <HeaderMenuItem href="#">Support</HeaderMenuItem>
        </HeaderMenu>
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Search" onClick={() => {}}><Search size={20} /></HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}><Notification size={20} /></HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Account" onClick={() => {}}><UserAvatar size={20} /></HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  </div>`;
for (const n of ['HeaderName','HeaderNavigation','HeaderMenu','HeaderMenuItem','HeaderGlobalBar',
                 'HeaderGlobalAction','HeaderMenuButton','HeaderContainer','HeaderSideNavItems',
                 'SkipToContent','Content']) {
  def(n, { imports: HEADER_IMPORTS, icons: 'Search, Notification, UserAvatar', body: HEADER_BODY,
    note: `${n} is part of the UI Shell header — shown inside a Header.` });
}

for (const n of ['Switcher','SwitcherItem']) {
  def(n, { imports: 'Switcher, SwitcherItem, SwitcherDivider',
    body: `  <div style={{ width: '16rem', background: '#f4f4f4', padding: '0.5rem 0' }}>
    <Switcher aria-label="Switcher container">
      <SwitcherItem aria-label="My account" href="#">My account</SwitcherItem>
      <SwitcherDivider />
      <SwitcherItem aria-label="Administration" href="#">Administration</SwitcherItem>
    </Switcher>
  </div>`,
    note: `${n} is the UI Shell right-panel switcher list.` });
}

// ---------------------------------------------------------------- menus
const MENU_IMPORTS = `Menu, MenuItem, MenuItemDivider, MenuItemGroup, MenuItemSelectable, MenuItemRadioGroup`;
const MENU_BODY = `  <div style={{ position: 'relative', height: '18rem' }}>
    <Menu open label="Row actions" x={8} y={8}>
      <MenuItem label="Open" />
      <MenuItem label="Rename" />
      <MenuItemDivider />
      <MenuItemGroup label="View">
        <MenuItemSelectable label="Show details" defaultSelected />
        <MenuItemSelectable label="Show hidden" />
      </MenuItemGroup>
      <MenuItemDivider />
      <MenuItemRadioGroup
        label="Sort by"
        items={['Name', 'Date', 'Size']}
        defaultSelectedItem="Name"
        itemToString={(i) => i}
      />
      <MenuItemDivider />
      <MenuItem label="Delete" kind="danger" />
    </Menu>
  </div>`;
for (const n of ['MenuItem','MenuItemDivider','MenuItemGroup','MenuItemSelectable','MenuItemRadioGroup']) {
  def(n, { imports: MENU_IMPORTS, body: MENU_BODY,
    note: `${n} only renders inside an open Menu — the Menu is forced open here.` });
}

def('OverflowMenuItem', { imports: 'OverflowMenu, OverflowMenuItem',
  body: `  <div style={{ padding: '1rem' }}>
    <OverflowMenu aria-label="Row actions" open flipped>
      <OverflowMenuItem itemText="Open" />
      <OverflowMenuItem itemText="Rename" />
      <OverflowMenuItem itemText="Delete" isDelete hasDivider />
    </OverflowMenu>
  </div>`,
  note: 'OverflowMenuItem only renders inside an open OverflowMenu.' });

def('ComboButton', { imports: 'ComboButton, MenuItem',
  body: `  <div style={{ padding: '1rem' }}>
    <ComboButton label="Deploy">
      <MenuItem label="Deploy to staging" />
      <MenuItem label="Deploy to production" />
    </ComboButton>
  </div>`,
  note: 'ComboButton pairs a default action with a menu of alternatives.' });

// ---------------------------------------------------------------- modal
const MODAL_IMPORTS = `ComposedModal, ModalHeader, ModalBody, ModalFooter, TextInput`;
const MODAL_BODY = `  <div style={{ position: 'relative', minHeight: '22rem' }}>
    <ComposedModal open onClose={() => {}} preventCloseOnClickOutside>
      <ModalHeader label="Services" title="Rename service" />
      <ModalBody hasForm>
        <TextInput id="cm-name" labelText="Service name" defaultValue="api-gateway" />
      </ModalBody>
      <ModalFooter primaryButtonText="Save" secondaryButtonText="Cancel" />
    </ComposedModal>
  </div>`;
for (const n of ['ComposedModal','ModalHeader','ModalBody','ModalFooter']) {
  def(n, { imports: MODAL_IMPORTS, body: MODAL_BODY,
    note: `${n} is part of the ComposedModal composition — the modal is forced open.` });
}

// ---------------------------------------------------------------- toggletip
const TT_IMPORTS = `Toggletip, ToggletipButton, ToggletipContent, ToggletipActions, Link, Button`;
const TT_BODY = `  <div style={{ padding: '2rem', minHeight: '12rem' }}>
    <Toggletip defaultOpen align="bottom">
      <ToggletipButton label="Show information">
        <Information />
      </ToggletipButton>
      <ToggletipContent>
        <p>Custom domains are verified with a DNS TXT record.</p>
        <ToggletipActions>
          <Link href="#">Read the docs</Link>
          <Button size="sm">Verify now</Button>
        </ToggletipActions>
      </ToggletipContent>
    </Toggletip>
  </div>`;
for (const n of ['ToggletipButton','ToggletipContent','ToggletipActions','ToggletipLabel']) {
  def(n, { imports: TT_IMPORTS, icons: 'Information', body: TT_BODY,
    note: `${n} is part of the Toggletip composition — defaultOpen so the bubble is visible.` });
}

def('PopoverContent', { imports: 'Popover, PopoverContent, Button',
  body: `  <div style={{ padding: '3rem', minHeight: '12rem' }}>
    <Popover open align="bottom">
      <Button size="sm">Anchor</Button>
      <PopoverContent>
        <div style={{ padding: '1rem', maxWidth: '16rem' }}>
          PopoverContent holds the floating surface's contents.
        </div>
      </PopoverContent>
    </Popover>
  </div>`,
  note: 'PopoverContent is the floating surface of a Popover — forced open.' });

// ---------------------------------------------------------------- structured list
const SL_IMPORTS = `StructuredListWrapper, StructuredListHead, StructuredListBody,
  StructuredListRow, StructuredListCell, StructuredListInput`;
const SL_BODY = `  <div style={{ maxWidth: '32rem' }}>
    <StructuredListWrapper>
      <StructuredListHead>
        <StructuredListRow head>
          <StructuredListCell head>Property</StructuredListCell>
          <StructuredListCell head>Value</StructuredListCell>
        </StructuredListRow>
      </StructuredListHead>
      <StructuredListBody>
        <StructuredListRow>
          <StructuredListCell noWrap>Region</StructuredListCell>
          <StructuredListCell>Dallas (us-south)</StructuredListCell>
        </StructuredListRow>
        <StructuredListRow>
          <StructuredListCell noWrap>Plan</StructuredListCell>
          <StructuredListCell>Standard</StructuredListCell>
        </StructuredListRow>
      </StructuredListBody>
    </StructuredListWrapper>
  </div>`;
for (const n of ['StructuredListHead','StructuredListBody','StructuredListRow','StructuredListCell']) {
  def(n, { imports: SL_IMPORTS, body: SL_BODY,
    note: `${n} is part of the StructuredList composition.` });
}
def('StructuredListInput', { imports: SL_IMPORTS,
  body: `  <div style={{ maxWidth: '32rem' }}>
    <StructuredListWrapper selection>
      <StructuredListBody>
        <StructuredListRow label htmlFor="sli-1">
          <StructuredListCell>Standard plan</StructuredListCell>
          <StructuredListInput id="sli-1" value="standard" name="plan" defaultChecked />
        </StructuredListRow>
        <StructuredListRow label htmlFor="sli-2">
          <StructuredListCell>Premium plan</StructuredListCell>
          <StructuredListInput id="sli-2" value="premium" name="plan" />
        </StructuredListRow>
      </StructuredListBody>
    </StructuredListWrapper>
  </div>`,
  note: 'StructuredListInput is the radio control of a selectable StructuredList.' });

// ---------------------------------------------------------------- tabs
const TABS_IMPORTS = `Tabs, TabList, Tab, TabPanels, TabPanel, TabsVertical, TabListVertical`;
const TABS_BODY = `  <Tabs>
    <TabList aria-label="Resource tabs">
      <Tab>Overview</Tab>
      <Tab>Metrics</Tab>
      <Tab disabled>Logs</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>Overview panel</TabPanel>
      <TabPanel>Metrics panel</TabPanel>
      <TabPanel>Logs panel</TabPanel>
    </TabPanels>
  </Tabs>`;
for (const n of ['Tab','TabPanel','TabPanels','TabContent']) {
  def(n, { imports: TABS_IMPORTS, body: TABS_BODY,
    note: `${n} is part of the Tabs composition — TabList and TabPanels children are matched by order.` });
}
def('TabsVertical', { imports: TABS_IMPORTS,
  body: `  <TabsVertical>
    <TabListVertical aria-label="Vertical tabs">
      <Tab>Overview</Tab>
      <Tab>Metrics</Tab>
      <Tab>Logs</Tab>
    </TabListVertical>
    <TabPanels>
      <TabPanel>Overview panel</TabPanel>
      <TabPanel>Metrics panel</TabPanel>
      <TabPanel>Logs panel</TabPanel>
    </TabPanels>
  </TabsVertical>`,
  note: 'TabsVertical is the vertical layout wrapper; it must hold a TabListVertical.' });

// ---------------------------------------------------------------- forms
const FLUID = {
  FluidTextInput: `<FluidTextInput id="ft-1" labelText="Service name" placeholder="my-service" />`,
  FluidTextArea: `<FluidTextArea id="fta-1" labelText="Description" placeholder="What does this do?" />`,
  FluidPasswordInput: `<FluidPasswordInput id="fp-1" labelText="API key" />`,
  FluidSearch: `<FluidSearch id="fs-1" labelText="Search" placeholder="Search services" />`,
  FluidSelect: `<FluidSelect id="fsel-1" labelText="Region" defaultValue="us-south">
      <SelectItem value="us-south" text="Dallas (us-south)" />
      <SelectItem value="eu-de" text="Frankfurt (eu-de)" />
    </FluidSelect>`,
  FluidDropdown: `<FluidDropdown id="fd-1" titleText="Plan" label="Choose a plan"
      items={['Lite', 'Standard', 'Premium']} itemToString={(i) => i} />`,
  FluidComboBox: `<FluidComboBox id="fc-1" titleText="Region" placeholder="Choose a region"
      items={['us-south', 'eu-de', 'jp-tok']} itemToString={(i) => i} />`,
  FluidMultiSelect: `<FluidMultiSelect id="fm-1" titleText="Tags" label="Choose tags"
      items={['prod', 'staging', 'internal']} itemToString={(i) => i} />`,
  FluidDatePicker: `<FluidDatePicker datePickerType="single">
      <FluidDatePickerInput id="fdp-1" labelText="Start date" placeholder="mm/dd/yyyy" />
    </FluidDatePicker>`,
  FluidDatePickerInput: `<FluidDatePicker datePickerType="single">
      <FluidDatePickerInput id="fdpi-1" labelText="Start date" placeholder="mm/dd/yyyy" />
    </FluidDatePicker>`,
  FluidTimePicker: `<FluidTimePicker id="ftp-1" labelText="Start time" placeholder="hh:mm">
      <FluidTimePickerSelect id="ftps-1" labelText="AM/PM">
        <SelectItem value="am" text="AM" />
        <SelectItem value="pm" text="PM" />
      </FluidTimePickerSelect>
    </FluidTimePicker>`,
  FluidTimePickerSelect: `<FluidTimePicker id="ftp-2" labelText="Start time" placeholder="hh:mm">
      <FluidTimePickerSelect id="ftps-2" labelText="AM/PM">
        <SelectItem value="am" text="AM" />
        <SelectItem value="pm" text="PM" />
      </FluidTimePickerSelect>
    </FluidTimePicker>`,
};
const FLUID_IMPORTS = `FluidForm, FluidTextInput, FluidTextArea, FluidPasswordInput, FluidSearch,
  FluidSelect, FluidDropdown, FluidComboBox, FluidMultiSelect, FluidDatePicker,
  FluidDatePickerInput, FluidTimePicker, FluidTimePickerSelect, SelectItem`;
for (const [n, el] of Object.entries(FLUID)) {
  def(n, { imports: FLUID_IMPORTS,
    body: `  <div style={{ maxWidth: '24rem' }}>
    ${el}
  </div>`,
    note: `${n} is a Fluid-style field: the label sits inside the control. Fluid fields are for dense, data-entry-heavy layouts.` });
}
def('FluidForm', { imports: FLUID_IMPORTS,
  body: `  <div style={{ maxWidth: '24rem' }}>
    <FluidForm>
      <FluidTextInput id="ff-1" labelText="Service name" placeholder="my-service" />
      <FluidTextInput id="ff-2" labelText="Owner" placeholder="team@example.com" />
    </FluidForm>
  </div>`,
  note: 'FluidForm groups Fluid fields so their borders collapse into one block.' });

def('SelectItem', { imports: 'Select, SelectItem, SelectItemGroup',
  body: `  <div style={{ maxWidth: '22rem' }}>
    <Select id="si-1" labelText="Region" defaultValue="us-south">
      <SelectItem value="us-south" text="Dallas (us-south)" />
      <SelectItem value="eu-de" text="Frankfurt (eu-de)" />
    </Select>
  </div>`,
  note: 'SelectItem is an option inside a Select.' });
def('SelectItemGroup', { imports: 'Select, SelectItem, SelectItemGroup',
  body: `  <div style={{ maxWidth: '22rem' }}>
    <Select id="sig-1" labelText="Region" defaultValue="us-south">
      <SelectItemGroup label="Americas">
        <SelectItem value="us-south" text="Dallas" />
        <SelectItem value="us-east" text="Washington DC" />
      </SelectItemGroup>
      <SelectItemGroup label="Europe">
        <SelectItem value="eu-de" text="Frankfurt" />
      </SelectItemGroup>
    </Select>
  </div>`,
  note: 'SelectItemGroup is an <optgroup> for a Select.' });

def('FormItem', { imports: 'FormItem, TextInput',
  body: `  <div style={{ maxWidth: '22rem' }}>
    <FormItem>
      <TextInput id="fi-1" labelText="Service name" placeholder="my-service" />
    </FormItem>
  </div>`,
  note: 'FormItem applies Carbon form spacing to a single field.' });
def('FormLabel', { imports: 'FormLabel',
  body: `  <div style={{ padding: '1rem' }}>
    <FormLabel>Service name</FormLabel>
  </div>`,
  note: 'FormLabel is the standalone label style, for custom controls that need one.' });

def('MultiSelect', { imports: 'MultiSelect',
  body: `  <div style={{ maxWidth: '22rem' }}>
    <MultiSelect
      id="ms-1"
      titleText="Environments"
      label="Choose environments"
      items={['Development', 'Staging', 'Production']}
      itemToString={(i) => i}
      initialSelectedItems={['Staging']}
    />
  </div>`,
  note: 'MultiSelect selects several values from a fixed list.' });
def('FilterableMultiSelect', { imports: 'FilterableMultiSelect',
  body: `  <div style={{ maxWidth: '22rem' }}>
    <FilterableMultiSelect
      id="fms-1"
      titleText="Regions"
      placeholder="Filter regions"
      items={['us-south', 'us-east', 'eu-de', 'jp-tok']}
      itemToString={(i) => i}
      initialSelectedItems={['eu-de']}
    />
  </div>`,
  note: 'FilterableMultiSelect is MultiSelect plus type-to-filter.' });

def('PasswordInput', { imports: 'PasswordInput',
  body: `  <div style={{ maxWidth: '22rem' }}>
    <PasswordInput id="pw-1" labelText="API key" defaultValue="s3cr3t-value" />
  </div>`,
  note: 'PasswordInput is a TextInput with a visibility toggle.' });
def('ControlledPasswordInput', { imports: 'ControlledPasswordInput',
  body: `  <div style={{ maxWidth: '22rem' }}>
    <ControlledPasswordInput id="cpw-1" labelText="API key" value="s3cr3t-value" onChange={() => {}} />
  </div>`,
  note: 'ControlledPasswordInput is the fully controlled form of PasswordInput — you own `value` and the visibility state.' });

def('ExpandableSearch', { imports: 'ExpandableSearch',
  body: `  <div style={{ padding: '1rem', display: 'flex', gap: '1rem' }}>
    <ExpandableSearch size="lg" labelText="Search" placeholder="Search services" />
    <ExpandableSearch size="lg" labelText="Search" placeholder="Search" isExpanded />
  </div>`,
  note: 'ExpandableSearch collapses to an icon until focused — shown collapsed and expanded.' });

def('DatePickerInput', { imports: 'DatePicker, DatePickerInput',
  body: `  <div style={{ maxWidth: '22rem' }}>
    <DatePicker datePickerType="single">
      <DatePickerInput id="dpi-1" labelText="Start date" placeholder="mm/dd/yyyy" />
    </DatePicker>
  </div>`,
  note: 'DatePickerInput is the text field of a DatePicker and must be its child.' });
def('TimePickerSelect', { imports: 'TimePicker, TimePickerSelect, SelectItem',
  body: `  <div style={{ maxWidth: '22rem' }}>
    <TimePicker id="tp-1" labelText="Start time">
      <TimePickerSelect id="tps-1" labelText="AM/PM">
        <SelectItem value="am" text="AM" />
        <SelectItem value="pm" text="PM" />
      </TimePickerSelect>
      <TimePickerSelect id="tps-2" labelText="Timezone">
        <SelectItem value="utc" text="UTC" />
        <SelectItem value="cet" text="CET" />
      </TimePickerSelect>
    </TimePicker>
  </div>`,
  note: 'TimePickerSelect is the AM/PM or timezone dropdown attached to a TimePicker.' });

def('RadioButtonGroup', { imports: 'RadioButtonGroup, RadioButton',
  body: `  <RadioButtonGroup legendText="Deployment target" name="target" defaultSelected="staging">
    <RadioButton labelText="Staging" value="staging" id="rbg-1" />
    <RadioButton labelText="Production" value="production" id="rbg-2" />
    <RadioButton labelText="Disabled" value="other" id="rbg-3" disabled />
  </RadioButtonGroup>`,
  note: 'RadioButtonGroup wires name/value across its RadioButton children — always wrap radios in one.' });

// file uploader
const FU_IMPORTS = `FileUploader, FileUploaderButton, FileUploaderDropContainer, FileUploaderItem, Filename`;
def('FileUploaderButton', { imports: FU_IMPORTS,
  body: `  <div style={{ padding: '1rem' }}>
    <FileUploaderButton labelText="Add files" buttonKind="tertiary" multiple />
  </div>`,
  note: 'FileUploaderButton is the file-picker trigger on its own.' });
def('FileUploaderDropContainer', { imports: FU_IMPORTS,
  body: `  <div style={{ maxWidth: '24rem', padding: '1rem' }}>
    <FileUploaderDropContainer labelText="Drag and drop files here, or click to upload" multiple />
  </div>`,
  note: 'FileUploaderDropContainer is the drag-and-drop target.' });
def('FileUploaderItem', { imports: FU_IMPORTS,
  body: `  <div style={{ maxWidth: '24rem', padding: '1rem' }}>
    <FileUploaderItem uuid="1" name="deployment.yaml" status="complete" iconDescription="Uploaded" />
    <FileUploaderItem uuid="2" name="secrets.env" status="uploading" iconDescription="Uploading" />
    <FileUploaderItem uuid="3" name="too-large.zip" status="edit" invalid
      errorSubject="File is too large" errorBody="Files must be under 5 MB." iconDescription="Remove" />
  </div>`,
  note: 'FileUploaderItem is one row of upload status — shown complete, uploading, and invalid.' });
def('Filename', { imports: FU_IMPORTS,
  body: `  <div style={{ display: 'flex', gap: '1.5rem', padding: '1rem', alignItems: 'center' }}>
    <Filename status="uploading" iconDescription="Uploading" />
    <Filename status="edit" iconDescription="Remove" />
    <Filename status="complete" iconDescription="Complete" />
  </div>`,
  note: 'Filename is just the status glyph used inside FileUploaderItem.' });

// ---------------------------------------------------------------- tiles
const TILE_IMPORTS = `Tile, ClickableTile, ExpandableTile, SelectableTile, RadioTile, TileGroup,
  TileAboveTheFoldContent, TileBelowTheFoldContent`;
def('ClickableTile', { imports: TILE_IMPORTS,
  body: `  <div style={{ display: 'flex', gap: '1rem', padding: '1rem', flexWrap: 'wrap' }}>
    <ClickableTile href="#" style={{ width: '14rem' }}>
      <h5 style={{ marginBottom: '.5rem' }}>Documentation</h5>
      <p>Read the getting-started guide.</p>
    </ClickableTile>
    <ClickableTile disabled style={{ width: '14rem' }}>
      <h5 style={{ marginBottom: '.5rem' }}>Disabled</h5>
      <p>Not available yet.</p>
    </ClickableTile>
  </div>`,
  note: 'ClickableTile turns the whole tile into a link.' });
def('SelectableTile', { imports: TILE_IMPORTS,
  body: `  <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
    <SelectableTile id="st-1" name="plan" style={{ width: '12rem' }}>Standard</SelectableTile>
    <SelectableTile id="st-2" name="plan" selected style={{ width: '12rem' }}>Premium</SelectableTile>
  </div>`,
  note: 'SelectableTile is a multi-select card — shown unselected and selected.' });
def('RadioTile', { imports: TILE_IMPORTS,
  body: `  <div style={{ maxWidth: '30rem', padding: '1rem' }}>
    <TileGroup name="plan" legend="Choose a plan" defaultSelected="standard">
      <RadioTile id="rt-1" value="lite">Lite — 1 vCPU</RadioTile>
      <RadioTile id="rt-2" value="standard">Standard — 2 vCPU</RadioTile>
      <RadioTile id="rt-3" value="premium" disabled>Premium — 4 vCPU</RadioTile>
    </TileGroup>
  </div>`,
  note: 'RadioTile is a single-select card; wrap a set in TileGroup.' });
def('TileGroup', { imports: TILE_IMPORTS,
  body: `  <div style={{ maxWidth: '30rem', padding: '1rem' }}>
    <TileGroup name="plan-2" legend="Choose a plan" defaultSelected="standard">
      <RadioTile id="tg-1" value="lite">Lite</RadioTile>
      <RadioTile id="tg-2" value="standard">Standard</RadioTile>
    </TileGroup>
  </div>`,
  note: 'TileGroup wires name/value across RadioTile children.' });
const EXPANDABLE_TILE = `  <div style={{ maxWidth: '20rem', padding: '1rem' }}>
    <ExpandableTile expanded id="et-1" tileCollapsedIconText="Expand" tileExpandedIconText="Collapse">
      <TileAboveTheFoldContent>
        <div style={{ padding: '1rem' }}><h5>api-gateway</h5><p>Running · us-south</p></div>
      </TileAboveTheFoldContent>
      <TileBelowTheFoldContent>
        <div style={{ padding: '1rem' }}>Replicas: 3 · Image: api-gateway:1.4.2</div>
      </TileBelowTheFoldContent>
    </ExpandableTile>
  </div>`;
for (const n of ['ExpandableTile','TileAboveTheFoldContent','TileBelowTheFoldContent']) {
  def(n, { imports: TILE_IMPORTS, body: EXPANDABLE_TILE,
    note: `${n} is part of the ExpandableTile composition — shown expanded.` });
}

// ---------------------------------------------------------------- tags & buttons
def('DismissibleTag', { imports: 'DismissibleTag',
  body: `  <div style={{ display: 'flex', gap: '.5rem', padding: '1rem', flexWrap: 'wrap' }}>
    <DismissibleTag type="blue" text="production" title="Remove" />
    <DismissibleTag type="teal" text="eu-de" title="Remove" />
    <DismissibleTag type="red" text="failing" title="Remove" />
  </div>`,
  note: 'DismissibleTag is a tag the user can remove — use for applied filters.' });
def('SelectableTag', { imports: 'SelectableTag',
  body: `  <div style={{ display: 'flex', gap: '.5rem', padding: '1rem', flexWrap: 'wrap' }}>
    <SelectableTag text="Running" />
    <SelectableTag text="Stopped" selected />
    <SelectableTag text="Failed" />
  </div>`,
  note: 'SelectableTag is a filter chip — shown unselected and selected.' });
def('OperationalTag', { imports: 'OperationalTag',
  body: `  <div style={{ display: 'flex', gap: '.5rem', padding: '1rem', flexWrap: 'wrap' }}>
    <OperationalTag text="+3 more" />
    <OperationalTag type="blue" text="View all regions" />
  </div>`,
  note: 'OperationalTag is a tag that opens something (a menu or overflow list).' });

def('ButtonSet', { imports: 'ButtonSet, Button',
  body: `  <div style={{ padding: '1rem' }}>
    <ButtonSet>
      <Button kind="secondary">Cancel</Button>
      <Button kind="primary">Save</Button>
    </ButtonSet>
  </div>`,
  note: 'ButtonSet lays out a form’s action buttons with Carbon spacing and order.' });
def('PrimaryButton', { imports: 'PrimaryButton',
  body: `  <div style={{ display: 'flex', gap: '.5rem', padding: '1rem' }}>
    <PrimaryButton>Save</PrimaryButton>
    <PrimaryButton disabled>Disabled</PrimaryButton>
  </div>`,
  note: 'PrimaryButton is a thin alias for <Button kind="primary">.' });
def('DangerButton', { imports: 'DangerButton',
  body: `  <div style={{ display: 'flex', gap: '.5rem', padding: '1rem' }}>
    <DangerButton>Delete</DangerButton>
    <DangerButton disabled>Disabled</DangerButton>
  </div>`,
  note: 'DangerButton is a thin alias for <Button kind="danger">.' });
def('IconButton', { imports: 'IconButton', icons: 'Add, TrashCan, Settings',
  body: `  <div style={{ display: 'flex', gap: '.5rem', padding: '2rem' }}>
    <IconButton label="Add" kind="primary"><Add /></IconButton>
    <IconButton label="Settings" kind="ghost"><Settings /></IconButton>
    <IconButton label="Delete" kind="danger"><TrashCan /></IconButton>
  </div>`,
  note: 'IconButton is an icon-only button; `label` is required and becomes its tooltip.' });
def('Copy', { imports: 'Copy', icons: 'Copy as CopyIcon',
  body: `  <div style={{ padding: '1rem' }}>
    <Copy feedback="Copied!" aria-label="Copy to clipboard">
      <CopyIcon />
    </Copy>
  </div>`,
  note: 'Copy is the low-level copy affordance behind CopyButton — it renders whatever children you give it.' });
def('IconSwitch', { imports: 'ContentSwitcher, IconSwitch', icons: 'List, Grid as GridIcon',
  body: `  <div style={{ padding: '1rem', maxWidth: '12rem' }}>
    <ContentSwitcher onChange={() => {}} size="md">
      <IconSwitch name="list" text="List view"><List /></IconSwitch>
      <IconSwitch name="grid" text="Grid view"><GridIcon /></IconSwitch>
    </ContentSwitcher>
  </div>`,
  note: 'IconSwitch is an icon-only ContentSwitcher option; `text` is its tooltip.' });
def('Switch', { imports: 'ContentSwitcher, Switch',
  body: `  <div style={{ padding: '1rem', maxWidth: '24rem' }}>
    <ContentSwitcher onChange={() => {}}>
      <Switch name="all" text="All" />
      <Switch name="running" text="Running" />
      <Switch name="failed" text="Failed" />
    </ContentSwitcher>
  </div>`,
  note: 'Switch is one option of a ContentSwitcher (not a toggle — that is Toggle).' });

// ---------------------------------------------------------------- misc parts
def('AccordionItem', { imports: 'Accordion, AccordionItem',
  body: `  <div style={{ maxWidth: '30rem' }}>
    <Accordion>
      <AccordionItem title="What is Carbon?" open>
        IBM's open source design system for products and digital experiences.
      </AccordionItem>
      <AccordionItem title="Who maintains it?">
        The Carbon team at IBM, in the open on GitHub.
      </AccordionItem>
      <AccordionItem title="Disabled section" disabled>Not reachable.</AccordionItem>
    </Accordion>
  </div>`,
  note: 'AccordionItem is one row of an Accordion and must be its child.' });
def('BreadcrumbItem', { imports: 'Breadcrumb, BreadcrumbItem',
  body: `  <div style={{ padding: '1rem' }}>
    <Breadcrumb>
      <BreadcrumbItem href="#">Catalog</BreadcrumbItem>
      <BreadcrumbItem href="#">Services</BreadcrumbItem>
      <BreadcrumbItem href="#" isCurrentPage>api-gateway</BreadcrumbItem>
    </Breadcrumb>
  </div>`,
  note: 'BreadcrumbItem is one crumb; mark the last with isCurrentPage.' });
def('ContainedListItem', { imports: 'ContainedList, ContainedListItem',
  body: `  <div style={{ maxWidth: '24rem' }}>
    <ContainedList label="Regions" kind="on-page">
      <ContainedListItem>Dallas (us-south)</ContainedListItem>
      <ContainedListItem>Frankfurt (eu-de)</ContainedListItem>
      <ContainedListItem>Tokyo (jp-tok)</ContainedListItem>
    </ContainedList>
  </div>`,
  note: 'ContainedListItem is one row of a ContainedList.' });
def('ListItem', { imports: 'UnorderedList, OrderedList, ListItem',
  body: `  <div style={{ display: 'flex', gap: '3rem', padding: '1rem' }}>
    <UnorderedList>
      <ListItem>Install the package</ListItem>
      <ListItem>Import the styles</ListItem>
    </UnorderedList>
    <OrderedList>
      <ListItem>Create a project</ListItem>
      <ListItem>Deploy it</ListItem>
    </OrderedList>
  </div>`,
  note: 'ListItem is a child of UnorderedList or OrderedList.' });
def('ProgressStep', { imports: 'ProgressIndicator, ProgressStep',
  body: `  <div style={{ padding: '1rem' }}>
    <ProgressIndicator currentIndex={1}>
      <ProgressStep label="Configure" description="Step 1" />
      <ProgressStep label="Review" description="Step 2" />
      <ProgressStep label="Deploy" description="Step 3" />
      <ProgressStep label="Failed step" invalid description="Step 4" />
    </ProgressIndicator>
  </div>`,
  note: 'ProgressStep is one step of a ProgressIndicator.' });
def('PaginationNav', { imports: 'PaginationNav',
  body: `  <div style={{ padding: '1rem' }}>
    <PaginationNav totalItems={10} itemsShown={7} page={2} onChange={() => {}} />
  </div>`,
  note: 'PaginationNav is the compact numeric pager — no page-size select.' });
def('StaticNotification', { imports: 'StaticNotification',
  body: `  <div style={{ maxWidth: '30rem', padding: '1rem' }}>
    <StaticNotification kind="info" title="Scheduled maintenance"
      subtitle="This service will be unavailable on Sunday 02:00–04:00 UTC." />
  </div>`,
  note: 'StaticNotification is a non-dismissible, always-present notification for page-level context.' });
def('NotificationActionButton', { imports: 'InlineNotification, NotificationActionButton',
  body: `  <div style={{ maxWidth: '32rem', padding: '1rem' }}>
    <InlineNotification
      kind="warning"
      title="Certificate expiring"
      subtitle="Renew within 7 days to avoid downtime."
      actions={<NotificationActionButton onClick={() => {}}>Renew now</NotificationActionButton>}
    />
  </div>`,
  note: 'NotificationActionButton is the inline action inside a notification’s `actions` slot.' });
def('AILabelContent', { imports: 'AILabel, AILabelContent, AILabelActions, Button, IconButton',
  body: `  <div style={{ padding: '3rem', minHeight: '16rem' }}>
    <AILabel defaultOpen autoAlign aiText="AI" size="md">
      <AILabelContent>
        <div>
          <p style={{ fontWeight: 600, marginBottom: '.5rem' }}>AI Explained</p>
          <p>This value was generated from your last 30 days of usage.</p>
        </div>
        <AILabelActions>
          <Button kind="ghost" size="sm">View details</Button>
        </AILabelActions>
      </AILabelContent>
    </AILabel>
  </div>`,
  note: 'AILabelContent is the popover body of an AILabel — shown with defaultOpen.' });
def('AILabelActions', { imports: 'AILabel, AILabelContent, AILabelActions, Button',
  body: `  <div style={{ padding: '3rem', minHeight: '16rem' }}>
    <AILabel defaultOpen autoAlign aiText="AI" size="md">
      <AILabelContent>
        <div>
          <p style={{ fontWeight: 600, marginBottom: '.5rem' }}>AI Explained</p>
          <p>This value was generated from your last 30 days of usage.</p>
        </div>
        <AILabelActions>
          <Button kind="ghost" size="sm">View details</Button>
          <Button size="sm">Accept</Button>
        </AILabelActions>
      </AILabelContent>
    </AILabel>
  </div>`,
  note: 'AILabelActions is the action row at the foot of an AILabel popover.' });

// ---------------------------------------------------------------- layout
def('Stack', { imports: 'Stack, TextInput',
  body: `  <div style={{ maxWidth: '22rem' }}>
    <Stack gap={5}>
      <TextInput id="sk-1" labelText="Service name" />
      <TextInput id="sk-2" labelText="Owner" />
      <TextInput id="sk-3" labelText="Region" />
    </Stack>
  </div>`,
  note: 'Stack applies a Carbon spacing step between children. `gap` is a spacing token index, not px.' });
def('HStack', { imports: 'HStack, Button',
  body: `  <div style={{ padding: '1rem' }}>
    <HStack gap={4}>
      <Button kind="secondary">Cancel</Button>
      <Button>Save</Button>
    </HStack>
  </div>`,
  note: 'HStack is Stack with orientation="horizontal".' });
def('VStack', { imports: 'VStack, Button',
  body: `  <div style={{ padding: '1rem', maxWidth: '12rem' }}>
    <VStack gap={4}>
      <Button>First</Button>
      <Button kind="secondary">Second</Button>
    </VStack>
  </div>`,
  note: 'VStack is Stack with orientation="vertical" (the default).' });

const GRID_CELL = `{ background: '#e0e0e0', border: '1px solid #c6c6c6', padding: '.75rem',
      fontFamily: 'IBM Plex Mono, monospace', fontSize: 12 }`;
def('Column', { imports: 'Grid, Column',
  body: `  <Grid style={{ padding: '1rem' }}>
    <Column sm={4} md={4} lg={4}><div style={${GRID_CELL}}>sm=4 md=4 lg=4</div></Column>
    <Column sm={4} md={4} lg={8}><div style={${GRID_CELL}}>sm=4 md=4 lg=8</div></Column>
    <Column sm={4} md={8} lg={16}><div style={${GRID_CELL}}>full width</div></Column>
  </Grid>`,
  note: 'Column takes sm/md/lg span props against Carbon’s 4/8/16-column 2x Grid.' });
def('Row', { imports: 'FlexGrid, Row, Column',
  body: `  <FlexGrid style={{ padding: '1rem' }}>
    <Row>
      <Column sm={2} md={4} lg={8}><div style={${GRID_CELL}}>half</div></Column>
      <Column sm={2} md={4} lg={8}><div style={${GRID_CELL}}>half</div></Column>
    </Row>
  </FlexGrid>`,
  note: 'Row is the flexbox grid row — used with FlexGrid, not the CSS-grid Grid.' });
def('FlexGrid', { imports: 'FlexGrid, Row, Column',
  body: `  <FlexGrid style={{ padding: '1rem' }}>
    <Row>
      <Column sm={4} md={4} lg={4}><div style={${GRID_CELL}}>a</div></Column>
      <Column sm={4} md={4} lg={4}><div style={${GRID_CELL}}>b</div></Column>
    </Row>
  </FlexGrid>`,
  note: 'FlexGrid is the float/flexbox grid (Row + Column). Prefer Grid + Column for new layouts.' });
def('ColumnHang', { imports: 'Grid, Column, ColumnHang',
  body: `  <Grid style={{ padding: '1rem' }}>
    <Column sm={4} md={8} lg={12}>
      <ColumnHang>
        <div style={${GRID_CELL}}>ColumnHang aligns content to the grid gutter</div>
      </ColumnHang>
    </Column>
  </Grid>`,
  note: 'ColumnHang offsets content so it hangs into the gutter, aligning text to the grid edge.' });
def('GridSettings', { imports: 'GridSettings, Grid, Column',
  body: `  <GridSettings mode="css-grid">
    <Grid style={{ padding: '1rem' }}>
      <Column sm={4} md={4} lg={8}><div style={${GRID_CELL}}>css-grid mode</div></Column>
      <Column sm={4} md={4} lg={8}><div style={${GRID_CELL}}>css-grid mode</div></Column>
    </Grid>
  </GridSettings>`,
  note: 'GridSettings switches the grid implementation (css-grid vs flexbox) for its subtree.' });
def('Section', { imports: 'Section, Heading',
  body: `  <div style={{ padding: '1rem' }}>
    <Section>
      <Heading>Level 1 heading</Heading>
      <Section>
        <Heading>Level 2 heading</Heading>
        <Section>
          <Heading>Level 3 heading</Heading>
        </Section>
      </Section>
    </Section>
  </div>`,
  note: 'Section/Heading derive the correct h1–h6 level from nesting depth, so headings stay semantic without hardcoding.' });
def('Heading', { imports: 'Section, Heading',
  body: `  <div style={{ padding: '1rem' }}>
    <Section>
      <Heading>Outer heading (h1)</Heading>
      <Section>
        <Heading>Nested heading (h2)</Heading>
      </Section>
    </Section>
  </div>`,
  note: 'Heading renders the right h-level for its Section depth. Use instead of a literal <h2>.' });
def('Layer', { imports: 'Layer, Tile',
  body: `  <div style={{ padding: '1rem' }}>
    <Tile>
      Layer 0
      <Layer>
        <Tile style={{ marginTop: '.5rem' }}>
          Layer 1
          <Layer>
            <Tile style={{ marginTop: '.5rem' }}>Layer 2</Tile>
          </Layer>
        </Tile>
      </Layer>
    </Tile>
  </div>`,
  note: 'Layer raises the surface token set for nested content, so stacked surfaces stay distinguishable.' });

// ---------------------------------------------------------------- providers
def('GlobalTheme', { imports: 'GlobalTheme, Tile, Button',
  body: `  <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
    <GlobalTheme theme="white">
      <Tile style={{ width: '10rem' }}>white<br /><Button size="sm">Action</Button></Tile>
    </GlobalTheme>
    <GlobalTheme theme="g100">
      <Tile style={{ width: '10rem' }}>g100<br /><Button size="sm">Action</Button></Tile>
    </GlobalTheme>
  </div>`,
  note: 'GlobalTheme sets the theme for the whole document. Theme (scoped) is usually what you want inside an app.' });
def('ClassPrefix', { imports: 'ClassPrefix, Button',
  body: `  <div style={{ padding: '1rem' }}>
    <ClassPrefix prefix="cds">
      <Button>Rendered inside a ClassPrefix boundary</Button>
    </ClassPrefix>
  </div>`,
  note: 'ClassPrefix changes the CSS class prefix for its subtree (default "cds"). Only needed when two Carbon versions coexist — the stylesheet must use the same prefix.' });
def('IdPrefix', { imports: 'IdPrefix, TextInput',
  body: `  <div style={{ maxWidth: '22rem' }}>
    <IdPrefix prefix="app">
      <TextInput id="idp-1" labelText="Generated ids are namespaced" placeholder="my-service" />
    </IdPrefix>
  </div>`,
  note: 'IdPrefix namespaces auto-generated element ids — use it to keep SSR and client ids stable across apps on one page.' });
def('FeatureFlags', { imports: 'FeatureFlags, Button',
  body: `  <div style={{ padding: '1rem' }}>
    <FeatureFlags enableV12Overflowmenu>
      <Button>Rendered with v12 flags enabled</Button>
    </FeatureFlags>
  </div>`,
  note: 'FeatureFlags opts a subtree into upcoming (v12) behaviour. It renders nothing itself — the effect is on descendants.' });
def('ErrorBoundary', { imports: 'ErrorBoundary, ErrorBoundaryContext, Tile',
  body: `  <div style={{ padding: '1rem' }}>
    <ErrorBoundary fallback={<Tile>Something went wrong.</Tile>}>
      <Tile>Children render normally until one of them throws.</Tile>
    </ErrorBoundary>
  </div>`,
  note: 'ErrorBoundary catches render errors in its subtree and shows `fallback` instead.' });

// ---------------------------------------------------------------- skeletons
const SK_FRAME = `{ width: '20rem', padding: '1rem', background: '#f4f4f4', border: '1px solid #c6c6c6' }`;
for (const [n, extra] of Object.entries({
  AccordionSkeleton: '', ButtonSkeleton: '', IconSkeleton: '', TagSkeleton: '',
  SkeletonPlaceholder: '', AISkeletonPlaceholder: '', ProgressIndicatorSkeleton: '',
})) {
  def(n, { imports: n,
    body: `  <div style={${SK_FRAME}}>
    <${n} />
  </div>`,
    note: `${n} is a loading placeholder — framed so the grey bars read as deliberate.` });
}
def('AISkeletonText', { imports: 'AISkeletonText',
  body: `  <div style={${SK_FRAME}}>
    <AISkeletonText heading width="60%" />
    <AISkeletonText paragraph lineCount={3} />
  </div>`,
  note: 'AISkeletonText is the AI-styled text placeholder — shown as a heading plus a paragraph.' });
def('DataTableSkeleton', { imports: 'DataTableSkeleton',
  body: `  <div style={{ width: '44rem', maxWidth: '100%' }}>
    <DataTableSkeleton columnCount={4} rowCount={4} showHeader showToolbar />
  </div>`,
  note: 'DataTableSkeleton is a full-width table placeholder, so it gets a wider frame than the other skeletons.' });

// ---------------------------------------------------------------- emit
for (const [name, { imports, icons, body, note, exportName }] of Object.entries(P)) {
  const lines = [`import { ${imports} } from '@carbon/react';`];
  if (icons) lines.push(`import { ${icons} } from '@carbon/icons-react';`);
  lines.push('', `// ${note}`, `export const ${exportName} = () => (`, body, ');', '');
  writeFileSync(`${OUT}/${name}.tsx`, lines.join('\n'));
  written.push(name);
}
console.log(`wrote ${written.length} sub-part previews -> ${OUT}`);
