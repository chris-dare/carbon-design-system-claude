import { HStack, Button } from '@carbon/react';

// HStack is Stack with orientation="horizontal".
export const InContext = () => (
  <div style={{ padding: '1rem' }}>
    <HStack gap={4}>
      <Button kind="secondary">Cancel</Button>
      <Button>Save</Button>
    </HStack>
  </div>
);
