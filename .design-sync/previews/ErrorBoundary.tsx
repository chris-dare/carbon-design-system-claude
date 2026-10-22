import { ErrorBoundary, ErrorBoundaryContext, Tile } from '@carbon/react';

// ErrorBoundary catches render errors in its subtree and shows `fallback` instead.
export const InContext = () => (
  <div style={{ padding: '1rem' }}>
    <ErrorBoundary fallback={<Tile>Something went wrong.</Tile>}>
      <Tile>Children render normally until one of them throws.</Tile>
    </ErrorBoundary>
  </div>
);
