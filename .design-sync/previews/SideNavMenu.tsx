import { SideNav, SideNavItems, SideNavLink, SideNavMenu, SideNavMenuItem,
  SideNavDivider, SideNavHeader, SideNavFooter, SideNavIcon, SideNavDetails,
  SideNavLinkText, SideNavSwitcher, SideNavItem } from '@carbon/react';
import { Dashboard, ChartLine, Settings } from '@carbon/icons-react';

// SideNavMenu is part of the UI Shell left panel — shown inside a SideNav.
export const InContext = () => (
  <div style={{ position: 'relative', height: '22rem', width: '16rem' }}>
    <SideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side navigation">
      <SideNavItems>
        <SideNavLink renderIcon={Dashboard} href="#" isActive>Overview</SideNavLink>
        <SideNavLink renderIcon={ChartLine} href="#">Metrics</SideNavLink>
        <SideNavDivider />
        <SideNavMenu renderIcon={Settings} title="Settings" defaultExpanded>
          <SideNavMenuItem href="#">General</SideNavMenuItem>
          <SideNavMenuItem href="#" isActive>Access</SideNavMenuItem>
        </SideNavMenu>
      </SideNavItems>
    </SideNav>
  </div>
);
