// Carbon Design System — design system package for Claude Design.
//
// Tokens are generated from the installed @carbon packages (see
// scripts/generate-tokens.mjs). Component examples live in src/examples
// and use real @carbon/react components with concrete props.

export { themes, themeNames } from './tokens/themes.js';
export { colors } from './tokens/colors.js';
export { typeStyles, fontFamilies } from './tokens/typography.js';
export { spacing, fluidSpacing, sizes } from './tokens/spacing.js';

// Components are re-exported from Carbon directly — this package adds
// tokens and documented variant examples, not a wrapper layer.
export * from '@carbon/react';
