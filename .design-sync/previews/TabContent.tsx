import { Tabs, TabList, Tab, TabPanels, TabPanel, TabsVertical, TabListVertical } from '@carbon/react';

// TabContent is part of the Tabs composition — TabList and TabPanels children are matched by order.
export const InContext = () => (
  <Tabs>
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
  </Tabs>
);
