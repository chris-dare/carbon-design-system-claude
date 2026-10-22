import { Accordion, AccordionItem } from '@carbon/react';

// Sizes are driven by Carbon's layout utility (`cds--layout--size-*`), which
// sets --cds-layout-size-height. Heading heights are sm 32px / md 40px / lg
// 48px. Every item is left COLLAPSED here so the header heights line up and the
// difference is actually visible — expanding a panel swamps an 8px delta.

export const Sizes = () => (
  <div style={{ maxWidth: '30rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
    {[['sm', '32px'], ['md', '40px'], ['lg', '48px']].map(([size, px]) => (
      <div key={size}>
        <div style={{ font: '12px/1.4 "IBM Plex Sans", sans-serif', color: '#525252', marginBottom: '.25rem' }}>
          size="{size}" — {px} row height
        </div>
        <Accordion size={size}>
          <AccordionItem title="What is Carbon?">
            IBM's open source design system for products and digital experiences.
          </AccordionItem>
          <AccordionItem title="Who maintains it?">
            The Carbon team at IBM, in the open on GitHub.
          </AccordionItem>
        </Accordion>
      </div>
    ))}
  </div>
);

export const Alignment = () => (
  <div style={{ maxWidth: '30rem' }}>
    <Accordion align="start">
      <AccordionItem title="Start-aligned chevron" open>The chevron sits before the title.</AccordionItem>
      <AccordionItem title="Disabled item" disabled>Not reachable.</AccordionItem>
    </Accordion>
  </div>
);

export const Flush = () => (
  <div style={{ maxWidth: '30rem' }}>
    <Accordion isFlush>
      <AccordionItem title="Flush accordion" open>Flush removes the side padding for full-bleed layouts.</AccordionItem>
      <AccordionItem title="Second item">More content.</AccordionItem>
    </Accordion>
  </div>
);
