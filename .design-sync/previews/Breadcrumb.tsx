import { Breadcrumb, BreadcrumbItem } from '@carbon/react';

export const Basic = () => (
  <Breadcrumb>
    <BreadcrumbItem href="#">Resources</BreadcrumbItem>
    <BreadcrumbItem href="#">Clusters</BreadcrumbItem>
    <BreadcrumbItem href="#" isCurrentPage>us-south-prod</BreadcrumbItem>
  </Breadcrumb>
);

export const NoTrailingSlash = () => (
  <Breadcrumb noTrailingSlash>
    <BreadcrumbItem href="#">Catalog</BreadcrumbItem>
    <BreadcrumbItem href="#">Databases</BreadcrumbItem>
  </Breadcrumb>
);
