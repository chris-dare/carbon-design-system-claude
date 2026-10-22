import { IdPrefix, TextInput } from '@carbon/react';

// IdPrefix namespaces auto-generated element ids — use it to keep SSR and client ids stable across apps on one page.
export const InContext = () => (
  <div style={{ maxWidth: '22rem' }}>
    <IdPrefix prefix="app">
      <TextInput id="idp-1" labelText="Generated ids are namespaced" placeholder="my-service" />
    </IdPrefix>
  </div>
);
