// Regenerates the standard-frame *Skeleton previews.
//
// Skeletons render real Carbon loading bars, but full-bleed grey-on-white
// compresses below the render check's blank threshold and reads as an empty
// card. The constrained bordered frame gives the bars something to sit in.
// Token values are INLINED because --cds-* only resolves inside a theme scope
// (see .design-sync/conventions.md) — a var() here would silently kill the
// whole `border` shorthand.
import { writeFileSync } from 'node:fs';

const NAMES = `BreadcrumbSkeleton CheckboxSkeleton CodeSnippetSkeleton DatePickerSkeleton
DropdownSkeleton FileUploaderSkeleton FluidComboBoxSkeleton FluidDatePickerSkeleton
FluidDropdownSkeleton FluidMultiSelectSkeleton FluidNumberInputSkeleton FluidSearchSkeleton
FluidSelectSkeleton FluidTextAreaSkeleton FluidTextInputSkeleton FluidTimePickerSkeleton
NumberInputSkeleton RadioButtonSkeleton SearchSkeleton SelectSkeleton SliderSkeleton
StructuredListSkeleton TabsSkeleton TextAreaSkeleton TextInputSkeleton ToggleSkeleton`
  .split(/\s+/).filter(Boolean);

const FRAME = "{ width: '20rem', padding: '1rem', background: '#f4f4f4', border: '1px solid #c6c6c6' }";

for (const n of NAMES) {
  writeFileSync(`.design-sync/previews/${n}.tsx`, `import { ${n} } from '@carbon/react';

// Constrained frame so the loading bars read as deliberate in a card.
// Token values inlined: --cds-* does not resolve outside a theme scope.
export const Default = () => (
  <div style={${FRAME}}>
    <${n} />
  </div>
);

export const InContext = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <div style={${FRAME}}><${n} /></div>
    <div style={${FRAME}}><${n} /></div>
  </div>
);
`);
}
console.log(`restored ${NAMES.length} standard skeleton previews`);
