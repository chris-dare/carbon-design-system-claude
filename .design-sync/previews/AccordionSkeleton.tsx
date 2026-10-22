import { AccordionSkeleton } from '@carbon/react';

// AccordionSkeleton is a loading placeholder — framed so the grey bars read as deliberate.
export const InContext = () => (
  <div style={{ width: '20rem', padding: '1rem', background: '#f4f4f4', border: '1px solid #c6c6c6' }}>
    <AccordionSkeleton />
  </div>
);
