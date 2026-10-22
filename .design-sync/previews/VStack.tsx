import { VStack, Button } from '@carbon/react';

// VStack is Stack with orientation="vertical" (the default).
export const InContext = () => (
  <div style={{ padding: '1rem', maxWidth: '12rem' }}>
    <VStack gap={4}>
      <Button>First</Button>
      <Button kind="secondary">Second</Button>
    </VStack>
  </div>
);
