import {
  Header, HeaderName, HeaderNavigation, HeaderMenuItem, HeaderGlobalBar,
  HeaderGlobalAction, HeaderMenuButton, HeaderPanel, SideNav, SideNavItems,
  SideNavLink, SideNavMenu, SideNavMenuItem, SideNavDivider, Switcher,
  SwitcherItem, SwitcherDivider
} from '@carbon/react';
import { Notification, UserAvatar, Search, Dashboard, Db2Database, Settings } from '@carbon/icons-react';

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
