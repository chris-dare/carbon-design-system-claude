import { CodeSnippet } from '@carbon/react';

export const Inline = () => (
  <p>Install with <CodeSnippet type="inline">npm i @carbon/react</CodeSnippet> to get started.</p>
);

export const SingleLine = () => (
  <CodeSnippet type="single">npm install @carbon/react @carbon/styles</CodeSnippet>
);

export const MultiLine = () => (
  <CodeSnippet type="multi">{`import { Button } from '@carbon/react';

export default function App() {
  return <Button kind="primary">Save</Button>;
}`}</CodeSnippet>
);
