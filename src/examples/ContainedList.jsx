import { ContainedList, ContainedListItem } from '@carbon/react';

export const Variants = () => (
  <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
    <div style={{ width: '16rem' }}>
      <ContainedList label="On page" kind="on-page" size="md">
        <ContainedListItem>api-gateway</ContainedListItem>
        <ContainedListItem>auth-service</ContainedListItem>
        <ContainedListItem>batch-worker</ContainedListItem>
      </ContainedList>
    </div>
    <div style={{ width: '16rem' }}>
      <ContainedList label="Disclosed" kind="disclosed" size="sm">
        <ContainedListItem>us-south</ContainedListItem>
        <ContainedListItem>eu-de</ContainedListItem>
      </ContainedList>
    </div>
  </div>
);
