import { TabsVertical, TabListVertical, Tab, TabPanels, TabPanel } from '@carbon/react';

// TabListVertical must be inside TabsVertical (not Tabs) or it renders
// horizontally.
export const Vertical = () => (
  <TabsVertical>
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
  </TabsVertical>
);
