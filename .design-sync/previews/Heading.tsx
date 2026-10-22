import { Section, Heading } from '@carbon/react';

// Heading renders the right h-level for its Section depth. Use instead of a literal <h2>.
export const InContext = () => (
  <div style={{ padding: '1rem' }}>
    <Section>
      <Heading>Outer heading (h1)</Heading>
      <Section>
        <Heading>Nested heading (h2)</Heading>
      </Section>
    </Section>
  </div>
);
