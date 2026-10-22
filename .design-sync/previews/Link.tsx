import { Link } from '@carbon/react';
import { Launch } from '@carbon/icons-react';

export const Variants = () => (
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
    <Link href="#">Default link</Link>
    <Link href="#" inline>Inline link</Link>
    <Link href="#" disabled>Disabled link</Link>
    <Link href="#" renderIcon={Launch}>External link</Link>
  </div>
);

export const Sizes = () => (
  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
    <Link href="#" size="sm">Small</Link>
    <Link href="#" size="md">Medium</Link>
    <Link href="#" size="lg">Large</Link>
  </div>
);
