import {
  Header, HeaderName, HeaderNavigation, HeaderMenuItem, HeaderGlobalBar,
  HeaderGlobalAction, HeaderMenuButton, HeaderPanel, SideNav, SideNavItems,
  SideNavLink, SideNavMenu, SideNavMenuItem, SideNavDivider, Switcher,
  SwitcherItem, SwitcherDivider
} from '@carbon/react';
import { Notification, UserAvatar, Search, Dashboard, Db2Database, Settings } from '@carbon/icons-react';

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
