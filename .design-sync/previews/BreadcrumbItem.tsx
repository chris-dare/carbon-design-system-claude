import { Breadcrumb, BreadcrumbItem } from '@carbon/react';

// BreadcrumbItem is one crumb; mark the last with isCurrentPage.
export const InContext = () => (
  <div style={{ padding: '1rem' }}>
    <Breadcrumb>
      <BreadcrumbItem href="#">Catalog</BreadcrumbItem>
      <BreadcrumbItem href="#">Services</BreadcrumbItem>
      <BreadcrumbItem href="#" isCurrentPage>api-gateway</BreadcrumbItem>
    </Breadcrumb>
  </div>
);
