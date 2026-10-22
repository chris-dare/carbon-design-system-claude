import { Popover, PopoverContent, Button } from '@carbon/react';

// PopoverContent is the floating surface of a Popover — forced open.
export const InContext = () => (
  <div style={{ padding: '3rem', minHeight: '12rem' }}>
    <Popover open align="bottom">
      <Button size="sm">Anchor</Button>
      <PopoverContent>
        <div style={{ padding: '1rem', maxWidth: '16rem' }}>
          PopoverContent holds the floating surface's contents.
        </div>
      </PopoverContent>
    </Popover>
  </div>
);
