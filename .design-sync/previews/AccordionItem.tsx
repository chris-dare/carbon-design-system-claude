import { Accordion, AccordionItem } from '@carbon/react';

// AccordionItem is one row of an Accordion and must be its child.
export const InContext = () => (
  <div style={{ maxWidth: '30rem' }}>
    <Accordion>
      <AccordionItem title="What is Carbon?" open>
        IBM's open source design system for products and digital experiences.
      </AccordionItem>
      <AccordionItem title="Who maintains it?">
        The Carbon team at IBM, in the open on GitHub.
      </AccordionItem>
      <AccordionItem title="Disabled section" disabled>Not reachable.</AccordionItem>
    </Accordion>
  </div>
);
