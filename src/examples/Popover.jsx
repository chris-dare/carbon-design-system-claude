import { Popover, PopoverContent, Button } from '@carbon/react';

export const Variants = () => (
  <div style={{ display: 'flex', gap: '4rem', padding: '3rem' }}>
    <Popover open align="bottom" caret>
      <Button kind="ghost">With caret</Button>
      <PopoverContent><div style={{ padding: '1rem' }}>Popover content with a caret.</div></PopoverContent>
    </Popover>
    <Popover open align="bottom" dropShadow highContrast caret={false}>
      <Button kind="ghost">High contrast</Button>
      <PopoverContent><div style={{ padding: '1rem' }}>High contrast, no caret.</div></PopoverContent>
    </Popover>
  </div>
);
