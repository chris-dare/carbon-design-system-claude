## Building with Carbon

This is IBM's Carbon Design System (`@carbon/react` v11). Carbon is a
**props-and-tokens** system, not a utility-class system. Style through
component props and CSS custom properties — never by hand-writing Carbon's
own class names.

### What is in here

This design system covers all five layers of carbondesignsystem.com:

| Layer | Where it lives |
|---|---|
| **Components** (253) | `components/` — every `@carbon/react` export, each with a rendered preview, a `.d.ts` props contract, and IBM's own usage + accessibility prose |
| **Data visualization** (24) | `components/data-visualization/` — `@carbon/charts-react`. Import charts from `@carbon/charts-react`, not `@carbon/react` |
| **Patterns** (18) | `guidelines/pattern-*.md` — empty states, forms, loading, dialogs, login, filtering, notifications, status indicators |
| **Guidelines** (8) | `guidelines/guideline-*.md` — accessibility, content/writing style, Carbon for AI |
| **Elements** (23) | `guidelines/element-*.md` — the 2x grid, color, icons, motion, spacing, themes, typography |

`guidelines/carbon-guidance-index.md` lists all of it by section.

**Read the pattern before composing a screen.** The pattern files are IBM's own
specification for how these components go together — an empty state, a form
layout, a loading sequence. They are the difference between "uses Carbon
components" and "is a Carbon product".

### Charts

Charts come from `@carbon/charts-react` and take `data` + `options`:

```jsx
import { SimpleBarChart } from '@carbon/charts-react';

<SimpleBarChart
  data={[{ group: 'Requests', key: 'Q1', value: 32 }]}
  options={{ title: 'Requests', height: '400px',
             axes: { left: { mapsTo: 'value' },
                     bottom: { mapsTo: 'key', scaleType: 'labels' } } }}
/>
```

`options.height` is effectively required: charts measure their container, so an
unsized chart renders a 0-height SVG and appears blank.

**Pictograms are not bundled.** `@carbon/pictograms-react` shares 191 export
names with `@carbon/icons-react` (`Analytics`, `Calendar`, `ChartLine`,
`Dashboard`, …), and bundling both makes every colliding name resolve to
`undefined`. Icons are here; import pictograms directly from
`@carbon/pictograms-react` in app code if you need them.

### Theming and wrapping

No provider is required for components to be styled — `styles.css` carries
everything. Theming is opt-in and scoped:

- `<Theme theme="g100">` applies one of Carbon's four themes to its subtree:
  `white` and `g10` (light), `g90` and `g100` (dark). Use `<GlobalTheme>` to
  set the page default.
- `<Layer>` raises surface contrast for nested content **within** the current
  theme. Nest it for stacked surfaces (cards inside panels) rather than
  hand-picking darker colours.

Without a `Theme` wrapper you get the `white` theme. That is a valid default,
not a bug.

### The styling idiom

**Do not write `cds--*` classes.** They are Carbon's internal vocabulary
(851 of them ship here); the components emit them for you, and hand-written
ones break on upgrade.

For your own layout glue around Carbon components, use the CSS custom
properties Carbon defines — all prefixed `--cds-`:

| Purpose | Examples |
|---|---|
| Surfaces | `--cds-background`, `--cds-layer-01` |
| Text | `--cds-text-primary`, `--cds-text-secondary` |
| Borders | `--cds-border-subtle-01` |
| Interactive | `--cds-link-primary`, `--cds-interactive` |
| Status | `--cds-support-error` |
| Spacing | `--cds-spacing-01` … `--cds-spacing-13` (a 2x scale) |

**Tokens resolve anywhere in this bundle, including outside a `<Theme>`.**

Upstream Carbon defines its ~327 theme tokens only on the theme class selectors
(`.cds--white`, `.cds--g10`, `.cds--g90`, `.cds--g100`) that `<Theme>` and
`<GlobalTheme>` emit — **not** on `:root`. A bare `var(--cds-*)` outside a theme
scope therefore resolved to nothing upstream, and since an unresolvable `var()`
invalidates the whole declaration, a `border` shorthand using one would vanish
with no error at all.

This bundle mirrors the default **white** theme onto `:root`, so that failure
mode is gone. Both of these now work:

```css
background: var(--cds-layer-01);          /* resolves to #f4f4f4 */
border: 1px solid var(--cds-border-subtle-01);
```

Theming is unaffected: custom properties inherit from the **nearest** ancestor
that sets them, so `<Theme theme="g100">` still overrides `:root` for its
subtree. All four themes remain distinct (verified: g100 background `#161616`,
g90 `#262626`, g10 `#f4f4f4`, white `#ffffff`).

- Wrap a subtree in `<Theme>` when you want a *different* theme than the page
  default — not to make tokens resolve at all.
- Fallbacks (`var(--cds-layer-01, #f4f4f4)`) are still good practice if your CSS
  might be lifted into a plain Carbon app, which does not carry this `:root`
  mirror.

Carbon's own components are unaffected either way — their CSS compiles to
literal values — which is exactly why a token mistake shows up only in *your*
custom chrome, silently.

For layout, prefer Carbon's own primitives over raw CSS: `<Grid>` + `<Column>`
(with `sm`/`md`/`lg` span props) for page structure, and `<Stack gap={5}>` for
vertical rhythm.

### Where the truth lives

- `_ds/<folder>/styles.css` and its `@import` closure — the real tokens and
  component CSS. Read it before inventing a value.
- `components/<group>/<Name>/<Name>.d.ts` — the exact props contract,
  including literal unions (e.g. Button's `kind`).
- `components/<group>/<Name>/<Name>.prompt.md` — per-component usage notes.

Reading the real `.d.ts` beats guessing: many Carbon props are strict unions,
and an invalid value silently renders the default variant.

### An idiomatic snippet

```jsx
import { Theme, Stack, Tile, Heading, TextInput, Button } from '@carbon/react';

<Theme theme="g100">
  <Tile>
    <Stack gap={5}>
      <Heading>Create service</Heading>
      <TextInput id="name" labelText="Service name" placeholder="my-service" />
      <div style={{ display: 'flex', gap: 'var(--cds-spacing-03)' }}>
        <Button kind="secondary">Cancel</Button>
        <Button kind="primary">Create</Button>
      </div>
    </Stack>
  </Tile>
</Theme>
```

Note the split: Carbon components carry the controls, and the one piece of
custom layout uses a `--cds-` token rather than a hard-coded gap.
