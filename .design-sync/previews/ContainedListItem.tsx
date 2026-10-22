import { ContainedList, ContainedListItem } from '@carbon/react';

// ContainedListItem is one row of a ContainedList.
export const InContext = () => (
  <div style={{ maxWidth: '24rem' }}>
    <ContainedList label="Regions" kind="on-page">
      <ContainedListItem>Dallas (us-south)</ContainedListItem>
      <ContainedListItem>Frankfurt (eu-de)</ContainedListItem>
      <ContainedListItem>Tokyo (jp-tok)</ContainedListItem>
    </ContainedList>
  </div>
);
