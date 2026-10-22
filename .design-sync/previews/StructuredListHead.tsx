import { StructuredListWrapper, StructuredListHead, StructuredListBody,
  StructuredListRow, StructuredListCell, StructuredListInput } from '@carbon/react';

// StructuredListHead is part of the StructuredList composition.
export const InContext = () => (
  <div style={{ maxWidth: '32rem' }}>
    <StructuredListWrapper>
      <StructuredListHead>
        <StructuredListRow head>
          <StructuredListCell head>Property</StructuredListCell>
          <StructuredListCell head>Value</StructuredListCell>
        </StructuredListRow>
      </StructuredListHead>
      <StructuredListBody>
        <StructuredListRow>
          <StructuredListCell noWrap>Region</StructuredListCell>
          <StructuredListCell>Dallas (us-south)</StructuredListCell>
        </StructuredListRow>
        <StructuredListRow>
          <StructuredListCell noWrap>Plan</StructuredListCell>
          <StructuredListCell>Standard</StructuredListCell>
        </StructuredListRow>
      </StructuredListBody>
    </StructuredListWrapper>
  </div>
);
