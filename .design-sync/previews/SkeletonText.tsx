import { SkeletonText, SkeletonPlaceholder, SkeletonIcon, ButtonSkeleton, TextInputSkeleton, DropdownSkeleton } from '@carbon/react';

export const Basic = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '20rem' }}>
    <SkeletonText heading />
    <SkeletonText paragraph lineCount={3} />
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <SkeletonPlaceholder />
      <SkeletonIcon />
    </div>
  </div>
);

export const Controls = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '20rem' }}>
    <ButtonSkeleton />
    <TextInputSkeleton />
    <DropdownSkeleton />
  </div>
);
