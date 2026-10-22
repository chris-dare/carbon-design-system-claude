import { StructuredListWrapper, StructuredListHead, StructuredListBody,
  StructuredListRow, StructuredListCell, StructuredListInput } from '@carbon/react';

// StructuredListInput is the radio control of a selectable StructuredList.
export const InContext = () => (
  <div style={{ maxWidth: '32rem' }}>
    <StructuredListWrapper selection>
      <StructuredListBody>
        <StructuredListRow label htmlFor="sli-1">
          <StructuredListCell>Standard plan</StructuredListCell>
          <StructuredListInput id="sli-1" value="standard" name="plan" defaultChecked />
        </StructuredListRow>
        <StructuredListRow label htmlFor="sli-2">
          <StructuredListCell>Premium plan</StructuredListCell>
          <StructuredListInput id="sli-2" value="premium" name="plan" />
        </StructuredListRow>
      </StructuredListBody>
    </StructuredListWrapper>
  </div>
);
