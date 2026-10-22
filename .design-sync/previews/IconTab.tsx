import { Tabs, TabList, IconTab, TabPanels, TabPanel } from '@carbon/react';
import { Dashboard, ChartLine, Catalog } from '@carbon/icons-react';

export const Icons = () => (
  <Tabs>
    <TabList aria-label="Icon tabs" contained>
      <IconTab label="Dashboard"><Dashboard size={16} /></IconTab>
      <IconTab label="Metrics"><ChartLine size={16} /></IconTab>
      <IconTab label="Logs"><Catalog size={16} /></IconTab>
    </TabList>
    <TabPanels>
      <TabPanel>Dashboard panel</TabPanel>
      <TabPanel>Metrics panel</TabPanel>
      <TabPanel>Logs panel</TabPanel>
    </TabPanels>
  </Tabs>
);
