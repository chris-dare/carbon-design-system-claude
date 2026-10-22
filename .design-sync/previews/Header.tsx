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
