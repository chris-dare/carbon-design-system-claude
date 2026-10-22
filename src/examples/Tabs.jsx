import { Tabs, TabList, Tab, TabPanels, TabPanel, TabsVertical, TabListVertical } from '@carbon/react';

export const Basic = () => (
  <Tabs>
    <TabList aria-label="Resource tabs">
      <Tab>Overview</Tab>
      <Tab>Metrics</Tab>
      <Tab>Logs</Tab>
      <Tab disabled>Billing</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>Overview of the running service.</TabPanel>
      <TabPanel>Request rate, latency and error budget.</TabPanel>
      <TabPanel>Streaming application logs.</TabPanel>
      <TabPanel>Billing is unavailable.</TabPanel>
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
      <TabPanel>Contained overview panel.</TabPanel>
      <TabPanel>Contained metrics panel.</TabPanel>
      <TabPanel>Contained logs panel.</TabPanel>
    </TabPanels>
  </Tabs>
);

export const Vertical = () => (
  <TabsVertical>
    <TabListVertical aria-label="Vertical tabs">
      <Tab>Overview</Tab>
      <Tab>Metrics</Tab>
      <Tab>Logs</Tab>
    </TabListVertical>
    <TabPanels>
      <TabPanel>Vertical overview panel.</TabPanel>
      <TabPanel>Vertical metrics panel.</TabPanel>
      <TabPanel>Vertical logs panel.</TabPanel>
    </TabPanels>
  </TabsVertical>
);
