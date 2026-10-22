import {
  Header, HeaderName, HeaderNavigation, HeaderMenuItem, HeaderGlobalBar,
  HeaderGlobalAction, HeaderMenuButton, HeaderPanel, SideNav, SideNavItems,
  SideNavLink, SideNavMenu, SideNavMenuItem, SideNavDivider, Switcher,
  SwitcherItem, SwitcherDivider
} from '@carbon/react';
import { Notification, UserAvatar, Search, Dashboard, Db2Database, Settings } from '@carbon/icons-react';

export const TopHeader = () => (
  <div style={{ position: 'relative', height: '3rem' }}>
    <Header aria-label="Carbon platform">
      <HeaderMenuButton aria-label="Open menu" onClick={() => {}} />
      <HeaderName href="#" prefix="IBM">Cloud Platform</HeaderName>
      <HeaderNavigation aria-label="Main navigation">
        <HeaderMenuItem href="#" isActive>Catalog</HeaderMenuItem>
        <HeaderMenuItem href="#">Resources</HeaderMenuItem>
        <HeaderMenuItem href="#">Docs</HeaderMenuItem>
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Search"><Search size={20} /></HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Notifications"><Notification size={20} /></HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Account"><UserAvatar size={20} /></HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  </div>
);

export const LeftPanel = () => (
  <div style={{ position: 'relative', height: '20rem', width: '16rem' }}>
    <SideNav aria-label="Side navigation" isFixedNav expanded isChildOfHeader={false}>
      <SideNavItems>
        <SideNavLink renderIcon={Dashboard} href="#" isActive>Dashboard</SideNavLink>
        <SideNavLink renderIcon={Db2Database} href="#">Databases</SideNavLink>
        <SideNavMenu renderIcon={Settings} title="Settings">
          <SideNavMenuItem href="#">Access (IAM)</SideNavMenuItem>
          <SideNavMenuItem href="#">Billing</SideNavMenuItem>
        </SideNavMenu>
        <SideNavDivider />
        <SideNavLink href="#">Support</SideNavLink>
      </SideNavItems>
    </SideNav>
  </div>
);

export const RightPanel = () => (
  <div style={{ position: 'relative', height: '20rem', width: '16rem' }}>
    <HeaderPanel aria-label="Switcher panel" expanded>
      <Switcher aria-label="Switcher container">
        <SwitcherItem aria-label="Link 1" href="#">My account</SwitcherItem>
        <SwitcherDivider />
        <SwitcherItem href="#">Administration</SwitcherItem>
        <SwitcherItem href="#">Log out</SwitcherItem>
      </Switcher>
    </HeaderPanel>
  </div>
);
