import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@carbon/react';

export const Default = () => (
  <Tabs>
    <TabList aria-label="Resource tabs">
      <Tab>Overview</Tab>
      <Tab>Metrics</Tab>
      <Tab>Logs</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>Overview panel</TabPanel>
      <TabPanel>Metrics panel</TabPanel>
      <TabPanel>Logs panel</TabPanel>
    </TabPanels>
  </Tabs>
);

export const Contained = () => (
  <Tabs>
    <TabList aria-label="Contained tabs" contained>
      <Tab>Overview</Tab>
      <Tab>Metrics</Tab>
      <Tab>Logs</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>Overview panel</TabPanel>
      <TabPanel>Metrics panel</TabPanel>
      <TabPanel>Logs panel</TabPanel>
    </TabPanels>
  </Tabs>
);
