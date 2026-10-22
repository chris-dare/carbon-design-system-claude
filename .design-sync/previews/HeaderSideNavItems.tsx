import { Header, HeaderName, HeaderNavigation, HeaderMenu, HeaderMenuItem,
  HeaderGlobalBar, HeaderGlobalAction, HeaderMenuButton, HeaderContainer, HeaderSideNavItems,
  SkipToContent, Content } from '@carbon/react';
import { Search, Notification, UserAvatar } from '@carbon/icons-react';

// HeaderSideNavItems is part of the UI Shell header — shown inside a Header.
export const InContext = () => (
  <div style={{ position: 'relative', height: '6rem' }}>
    <Header aria-label="Carbon Platform">
      <SkipToContent />
      <HeaderMenuButton aria-label="Open menu" onClick={() => {}} isActive={false} />
      <HeaderName href="#" prefix="IBM">Platform</HeaderName>
      <HeaderNavigation aria-label="Platform">
        <HeaderMenuItem href="#" isActive>Catalog</HeaderMenuItem>
        <HeaderMenuItem href="#">Docs</HeaderMenuItem>
        <HeaderMenu aria-label="Resources" menuLinkName="Resources">
          <HeaderMenuItem href="#">Guides</HeaderMenuItem>
          <HeaderMenuItem href="#">Support</HeaderMenuItem>
        </HeaderMenu>
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Search" onClick={() => {}}><Search size={20} /></HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}><Notification size={20} /></HeaderGlobalAction>
        <HeaderGlobalAction aria-label="Account" onClick={() => {}}><UserAvatar size={20} /></HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  </div>
);
