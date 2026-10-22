import { StructuredListWrapper, StructuredListHead, StructuredListBody, StructuredListRow, StructuredListCell } from '@carbon/react';

export const Basic = () => (
  <StructuredListWrapper aria-label="Plan comparison">
    <StructuredListHead>
      <StructuredListRow head>
        <StructuredListCell head>Plan</StructuredListCell>
        <StructuredListCell head>Included</StructuredListCell>
        <StructuredListCell head>Price</StructuredListCell>
      </StructuredListRow>
    </StructuredListHead>
    <StructuredListBody>
      <StructuredListRow><StructuredListCell noWrap>Lite</StructuredListCell><StructuredListCell>1 instance</StructuredListCell><StructuredListCell>Free</StructuredListCell></StructuredListRow>
      <StructuredListRow><StructuredListCell noWrap>Standard</StructuredListCell><StructuredListCell>10 instances</StructuredListCell><StructuredListCell>$50/mo</StructuredListCell></StructuredListRow>
    </StructuredListBody>
  </StructuredListWrapper>
);

export const Condensed = () => (
  <StructuredListWrapper aria-label="Condensed list" isCondensed isFlush>
    <StructuredListBody>
      <StructuredListRow><StructuredListCell>Region</StructuredListCell><StructuredListCell>us-south</StructuredListCell></StructuredListRow>
      <StructuredListRow><StructuredListCell>Status</StructuredListCell><StructuredListCell>Running</StructuredListCell></StructuredListRow>
    </StructuredListBody>
  </StructuredListWrapper>
);
