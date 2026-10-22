# Carbon Design System — for Claude Design

IBM's [Carbon Design System](https://carbondesignsystem.com) packaged so that
Claude Code's `/design-sync` can read it: generated tokens plus React component
examples using real `@carbon/react` components with concrete props.

## Layout

```
src/tokens/       generated token files — literal values, always in sync
  themes.js         4 themes (white, g10, g90, g100) x 235 semantic tokens
  colors.js         246 raw palette swatches
  typography.js     58 type styles + IBM Plex font stacks
  spacing.js        13 spacing steps, fluid spacing, sizes
src/examples/     45 files, 101 variants — one per Carbon component
src/index.js      token exports + re-export of @carbon/react
styles/index.scss full Carbon stylesheet entry point
scripts/          token generation, JSX loader, render smoke test
```

## Component coverage

All 43 components on Carbon's canonical component list (derived from
carbondesignsystem.com's own sitemap), plus Skeleton — which is not a separate
entry on IBM's list but ships as loading states across Carbon — and the
foundation pages. Grouped as:

- **Actions** — Button, Link, Tag
- **Forms** — TextInput, TextArea, PasswordInput, Checkbox, RadioButton,
  Select, Dropdown, ComboBox, MultiSelect, NumberInput, Toggle, Search,
  Slider, DatePicker, TimePicker, FileUploader, Form
- **Navigation** — Tabs, Breadcrumb, ContentSwitcher, Pagination, UI Shell
  (header, left panel, right panel), Menu, MenuButton, OverflowMenu
- **Data display** — DataTable, StructuredList, Tile, Accordion,
  ContainedList, List, CodeSnippet, TreeView
- **Feedback** — Notification (inline/toast/actionable/callout), Loading,
  InlineLoading, ProgressBar, ProgressIndicator, Skeleton
- **Overlays** — Modal, Tooltip, Toggletip, Popover
- **Foundations** — Colors, Typography, Spacing, Grid, Theme, AI Label

## Commands

```bash
npm run verify         # everything below, in order — run this before a sync
npm run build:tokens   # regenerate src/tokens from the installed @carbon packages
npm run build:css      # compile styles/index.scss -> styles/carbon.css
npm run check:css      # fail if any CSS asset (fonts, icons) does not resolve
npm run render         # render all 101 variants to static HTML; fails on any error
```

`npm run render` is the gate. It renders every exported variant and fails on
any of three conditions, writing results to `.examples-check.json`:

- **failed** — the variant threw while rendering
- **thin** — output under 120 bytes, i.e. an empty wrapper
- **identical** — two variants in one file render byte-identical markup, so
  they would not be distinct cards

Current status: **45 files, 101 variants — 0 failed, 0 thin, 0 identical.**

## Uploading to Claude Design

Run this yourself at the prompt — it cannot be invoked on your behalf:

```bash
cd path/to/carbon-design-system
claude
/design-sync
```

## A note on fonts

Carbon's default `$font-path` is `~@ibm/plex`, a webpack-only prefix that plain
CSS cannot resolve. Left alone it emits 90 `@font-face` rules that all 404,
and Carbon falls back to system fonts with no error. `styles/index.scss`
therefore sets `$css--font-face: false` and loads IBM Plex Sans / Mono / Serif
from Google Fonts instead. `npm run check:css` guards against a regression.

## Licensing

Carbon's code is Apache-2.0 and IBM Plex is OFL, both redistributable.
IBM's logo and brand marks are not licensed for non-IBM products.
