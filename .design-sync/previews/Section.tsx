import { Section, Heading } from '@carbon/react';

// Section/Heading derive the correct h1–h6 level from nesting depth, so headings stay semantic without hardcoding.
export const InContext = () => (
  <div style={{ padding: '1rem' }}>
    <Section>
      <Heading>Level 1 heading</Heading>
      <Section>
        <Heading>Level 2 heading</Heading>
        <Section>
          <Heading>Level 3 heading</Heading>
        </Section>
      </Section>
    </Section>
  </div>
);
