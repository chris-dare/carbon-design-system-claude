import { Tabs, TabList, Tab, TabPanels, TabPanel, TabsVertical, TabListVertical } from '@carbon/react';

// TabsVertical is the vertical layout wrapper; it must hold a TabListVertical.
export const InContext = () => (
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
