# design-sync notes — Carbon (v11)

## Shape

- This repo is **not itself the design system**. It's a thin wrapper whose
  `main` is `src/index.js` and which ships no `.d.ts`. The converter is pointed
  at **`@carbon/react`** in `node_modules` instead (`--entry
  ./node_modules/@carbon/react/es/index.js`), because that's what has a real
  build and a full type tree (977 `.d.ts` files). This repo supplies the
  config, the docs, the authored previews, and the conventions header.

## Gotchas (re-run these after any `npm i`)

- **`node scripts/ds-sync-prep.mjs` must run after every `npm i`.** The
  converter bounds `cfg.cssEntry` to the DS package directory, but Carbon ships
  its compiled stylesheet in the sibling `@carbon/styles` package. The prep
  script copies it to `node_modules/@carbon/react/_ds_carbon_styles.css`, which
  `cssEntry` points at. `npm i` wipes it — a build without it produces a
  bundle with no component CSS.
- **`@types/react` must be installed in THIS repo's `node_modules`**, not just
  in `.ds-sync/`. The converter resolves it from `--node-modules`. Without it
  every `<Name>Props` emits as `{ [key: string]: unknown }` — the build still
  exits 0, so this fails silently. Symptom in the log: `[DTS_REACT]`.

## Decisions

- **Fonts come from IBM's CDN** (`1.www.s81c.com`), which is what Carbon's
  prebuilt `styles.css` references; verified reachable (HTTP 200). The
  converter moves those 105 `@font-face` rules into `fonts/fonts.css` and drops
  them from `_ds_bundle.css` — that is correct behaviour, not a loss.
  - Note: compiling Carbon from SCSS instead (`@use "@carbon/react"`) produces
    `~@ibm/plex` URLs, a webpack-only prefix that plain CSS cannot resolve, so
    all 90 `@font-face` rules 404 silently. `styles/index.scss` in this repo
    works around that with Google Fonts, guarded by `npm run check:css`. The
    sync does **not** use that path — it uses Carbon's prebuilt stylesheet.
- **`tokens: 0 files from @carbon/themes` is expected.** That package ships JS
  and SCSS, not CSS. Carbon's 637 `--cds-*` custom properties are already
  defined in the prebuilt stylesheet across 19 `:root` blocks, so tokens do
  ship — just via the CSS, not a tokens directory.
- **Grouping is authored, not discovered.** Carbon ships no per-component docs
  the converter can match, so all 259 components defaulted to one flat
  `general` group. `scripts/gen-docs.mjs` writes `.design-sync/docs/<Name>.md`
  with a frontmatter `category` for each, plus real usage prose for the 42
  components on Carbon's canonical list.
- **Preview scope**: authored previews for the canonical components (from
  `src/examples/`, via `scripts/gen-previews.mjs`); the remaining ~206 exports
  are sub-parts, skeletons, and `Fluid*` variants that ship fully functional
  with floor cards.

## Traps that cost a cycle

- **Never pipe `package-validate.mjs` through `tail`.** The pipe's exit status
  is `tail`'s, not validate's, so a failing run looks like `exit 0` while the
  single `✗` line scrolls off the top. Redirect to a file and check `$?`.
- **`[BUNDLE_EXPORT]` on `ButtonKinds` / `ButtonSizes` /
  `ButtonTooltipAlignments` / `ButtonTooltipPositions` / `IconButtonKinds`** —
  these are plain const arrays of allowed prop values, not components. The
  "components = PascalCase value exports" heuristic sweeps them in and the
  build's enum filter misses them because they are arrays, not TS enums. They
  are excluded via `cfg.componentSrcMap: null`. Expect new ones if Carbon adds
  more exported value arrays.

## Token scoping — the defect that hid behind green checks

Carbon defines its `--cds-*` custom properties under the theme-class selectors
`.cds--white` / `.cds--g10` / `.cds--g90` / `.cds--g100` (327 declarations
each) and puts only 31 on `:root`. The preview harness applies **no** theme
class to `<html>` or `<body>`.

Consequence: inline `var(--cds-*)` in an authored preview resolved to nothing,
and since an unresolvable `var()` invalidates the entire declaration, any
`border` shorthand using one vanished — no background, no border, no error.
Carbon's own component CSS compiles to literal hex, so components looked
perfectly themed while authored wrapper chrome silently disappeared. 32
previews were affected; all now use literal `.cds--white` values, or a
`var(--cds-x, #fallback)` form.

Two lessons worth keeping:
- **Grepping that a token "exists in the CSS" proves nothing.** Check which
  *selector* defines it. An early check here confirmed presence and concluded,
  wrongly, that tokens were fine.
- This is why `conventions.md` now states the theme-scope requirement
  explicitly. Left unstated, the design agent would emit `var(--cds-*)` in its
  own layout glue and produce silently unstyled output.

## Excluded components

- **`ToggleSmallSkeleton`** — ships v10 markup (`cds--toggle--small`,
  `__appearance > svg.cds--toggle__check`) that the v11 stylesheet has no rules
  for; it renders a bare browser checkbox and cannot be fixed from a preview.
  Excluded via `cfg.componentSrcMap`. The supported `ToggleSkeleton` is fine.
- **`ButtonKinds`, `ButtonSizes`, `ButtonTooltipAlignments`,
  `ButtonTooltipPositions`, `IconButtonKinds`** — const arrays of allowed prop
  values, not components.

## Preview gotchas (from grading)

- **Hover-gated components need `defaultOpen`.** `Tooltip` rendered four
  identical triggers with no bubbles, so the `align` axis it exists to show did
  not vary. Same applies to Toggletip/Popover.
- **Open overlays clip against `.ds-cell { overflow: hidden }`.** Budget
  horizontal padding for the floating panel, or it is cut off.
- **Inverse-icon parts need an inverse surface.** `NotificationButton` is
  filled with `--cds-icon-inverse`, i.e. a white glyph that is invisible on a
  white card with no page error. `notificationType="inline"` does not escape
  it — that icon is also inverse unless a `.cds--inline-notification--low-contrast`
  ancestor remaps it.
- **`AspectRatio` children must be `position: absolute; inset: 0`.** The
  component holds shape with percentage `padding-block-start`, so a child with
  `height: 100%` computes to auto and collapses.

## Verified-benign render-check warnings

Confirmed by opening the screenshots in `ds-bundle/_screenshots/` — do not
"fix" these; the components render correctly.

- **`[RENDER_THIN]` on `Loading`** — the card shows three real Carbon spinners
  (large, small, inactive). The check measures mounted *text*, and an SVG
  spinner has none, so it reports `mounted text is just "Loading"`. Benign.
- **`[RENDER_BLANK]` on the ~25 `*Skeleton` components** — these render real
  Carbon loading skeletons (grey bars). The check flags PNGs under 5 KB, and
  flat grey-on-white compresses far below that. Benign.
- **`[TOKENS_MISSING]` (8 vars)** — `--cds--card--*`,
  `--cds--side-panel--scroll-animation-distance`, `--scale-factor`,
  `--tearsheet-header-action-offset`, `--stack-depth`, `--block-size-change`.
  These belong to Card / SidePanel / Tearsheet, which are in `@carbon/styles`'
  CSS but are **not** `@carbon/react` exports, so we don't ship those
  components. Dead CSS, no action.

## Re-sync risks

- `scripts/gen-docs.mjs` and `scripts/gen-previews.mjs` hold **hand-written
  maps keyed by component name**. A Carbon upgrade that renames or adds
  components won't break the build, but new components silently fall to the
  `Other` category and get no authored preview. Re-run both scripts and check
  the group counts after any `@carbon/react` bump.
- The authored previews are generated **from `src/examples/*.jsx`**. Editing a
  preview under `.design-sync/previews/` directly will be overwritten the next
  time `gen-previews.mjs` runs — change the example instead, then regenerate.
- Font loading depends on IBM's CDN being reachable from wherever designs
  render. If text renders in a fallback face, check that host first.
- `npm run verify` in this repo validates our own examples; it is independent
  of the converter and does not gate the sync. Its artifact is
  `.examples-check.json` — deliberately NOT `.render-check.json`, which is the
  converter's own file inside `ds-bundle/`. An earlier run confused the two.
- **Playwright browser builds are version-pinned.** The render check needs
  `chromium_headless_shell`, which `npx playwright install chromium` does NOT
  install — run `npx playwright install chromium-headless-shell` as well, or
  validate exits with `[RENDER_SKIPPED]` and nothing is verified.
- `cfg.overrides` carries card-presentation fixes for 8 components (3 `column`
  for wide stories, 5 `single` for fixed/portal content such as Modal and the
  UI Shell panels). If a future Carbon version changes those components'
  layout, re-check `[GRID_OVERFLOW]` rather than assuming the overrides still
  apply.

## Trap: `gen-previews.mjs` WIPES `.design-sync/previews/`

`scripts/gen-previews.mjs` rebuilds the previews directory from
`src/examples/*.jsx` only. It emits 53 files. The other 46 previews do **not**
come from `src/examples` — 26 are generated by
`scripts/restore-skeleton-previews.mjs` and 20 are hand-authored one-offs.
Running `gen-previews.mjs` alone silently drops all 46.

**Always run the trio, in this order:**

```sh
node scripts/gen-previews.mjs            # 53 from src/examples
node scripts/restore-skeleton-previews.mjs   # 26 standard skeleton frames
node scripts/fix-preview-tokens.mjs      # inline --cds-* so borders survive
npm run render                           # expect: 0 failed, 0 thin, 0 identical
```

The 20 hand-authored previews (AISkeletonIcon, AspectRatio, CheckboxGroup,
CopyButton, DefinitionTooltip, FluidNumberInput, FormGroup, IconTab,
InlineCheckbox, ModalWrapper, NotificationButton, PaginationSkeleton,
SecondaryButton, SkeletonIcon, SwitcherDivider, TabList, TabListVertical,
TableSelectAll, TableSelectRow, TreeNode) are **not regenerable** — they carry
calibrated fixes (PaginationSkeleton's 44rem frame, NotificationButton's inverse
strip, AspectRatio's absolute-inset child). Treat them as source.

Recovery, if they are ever lost again: `ds-bundle/_preview/<Name>.js` is the
esbuild output of the preview and retains full semantics — read it and
re-author. That is how the 46 were rebuilt on 2026-09-15.

## Trap: run the driver, not `package-build.mjs` directly

`package-build.mjs` **wipes `--out`**, destroying `_screenshots/` and any
`.grade.json` written into the bundle. Grades themselves survive because they
live in `.design-sync/.cache/review/` (outside the bundle), but screenshots must
be regenerated by `package-capture.mjs`. Use `.ds-sync/resync.mjs`, which
sequences build -> remote-diff -> validate -> capture.

Argument shapes differ between the stages and are easy to get wrong:
- `package-build.mjs --config <cfg> --node-modules <nm> --out <dir>`
- `package-validate.mjs <out-dir>` (POSITIONAL, no `--out`)

## `guidelinesGlob` — verified behaviour (2026-09-15)

Confirmed empirically, not assumed. It is **not** resolved like `docsDir`:

- The glob is anchored under `PKG_DIR` (`node_modules/@carbon/react`), so
  reaching repo-root files needs `../../../guides/**/*.md`.
- Matched files are bounded to `workspaceRoot` (the repo root here).
- **Any matched file outside `PKG_DIR` collapses to its BASENAME at the
  destination.** Two files named `overview.md` in different sections would
  collide and the second is skipped with a warning. Every file
  `scripts/gen-guides.mjs` emits is therefore prefixed with its section
  (`pattern-`, `dataviz-`, `guideline-`, `element-`).
- The converter also writes its own `guidelines/index.md` listing filenames.

## Excluded: `@carbon/pictograms-react` (and why)

Pictograms are **deliberately not bundled**, despite being part of Carbon's
"elements" section.

`@carbon/pictograms-react` shares **191 export names** with
`@carbon/icons-react` — including `Analytics`, `Calendar`, `Camera`,
`ChartLine`, `Dashboard`, `Api`, `Building`, `Bus`. When both are in
`cfg.extraEntries`, the colliding names resolve to `undefined` on
`window.Carbon` rather than to either package. That is silent: the build stays
green, and only a preview that uses one of those icons fails, with
`Element type is invalid ... but got: undefined`.

That is exactly how it was caught — `IconTab.tsx` imports `Dashboard` and
`ChartLine`, and the card went `[RENDER] root empty` after pictograms were
added. Only 5 of the collisions (against the MAIN package) are reported as
`[EXPORT_COLLISION]`; the other 186 (icons vs pictograms) are reported nowhere.

Trading 191 working icons for 1,576 pictograms is a bad deal for a UI design
system, so icons win. Pictogram *guidance* still ships as
`guidelines/element-pictograms-*.md`; only the React components are absent.

If pictograms are ever needed, they must be namespaced (e.g. imported directly
from `@carbon/pictograms-react` in app code, not via `window.Carbon`).

## Full-spec coverage (2026-09-15/16)

The first sync covered only the **components** layer of
carbondesignsystem.com. All five layers are now covered.

### Guidance (`guidelines/`, 61 files)

Source: the Carbon website's own MDX, `carbon-design-system/carbon-website`
on GitHub, `src/pages/**`. Downloaded to a scratch dir, converted by
`scripts/mdx-to-md.mjs`, emitted by `scripts/gen-guides.mjs` into `guides/`,
which `cfg.guidelinesGlob` ships into `ds-bundle/guidelines/`.

- patterns 18, data-visualization 11, guidelines 8, elements 23, + an index.
- Counts match IBM's sitemap exactly (175/43/25/18/14/11/8/…).

The converter keeps prose and turns semantic JSX into markdown: `<DoDont
caption>` becomes a **Do:**/**Don't:** line, `<Caption>` becomes italics, and
`OverviewCard`/`ResourceCard`/`ImageCard` become list links (the chart-type
gallery is *entirely* OverviewCards — dropping them emptied the page).
Layout-only JSX (`Row`, `Column`, `PageDescription`) is unwrapped.

`dataviz-simple-charts.md` is short because its source page is 1139 bytes —
the content is generated from `data/data-visualization`, not written in the
MDX. Not a conversion loss.

### Component docs carry IBM's own prose

`scripts/enrich-docs.mjs` appends the real `usage.mdx` + `accessibility.mdx`
from the Carbon website to **174** component docs (43 Carbon doc pages mapped
onto the components each one governs — the "data table" page covers `Table`,
`TableHead`, … ). Re-running is idempotent: it strips the previously appended
block first.

### Data visualization (24 charts)

`@carbon/charts-react` 1.27.19. `extraEntries` merges the exports onto
`window.Carbon` but does **not** create cards — cards come from the main
package's export scan. `cfg.componentSrcMap` with a **non-null** value ADDS a
name to the component list, which is the hook used. The pinned path is only
used for src/ enrichment and does not resolve from `@carbon/react`, so
`cfg.dtsPropsFor` supplies the props contract instead (otherwise every chart
gets `{ [key: string]: unknown }`).

Chart CSS is concatenated into the staged `_ds_carbon_styles.css` by
`scripts/ds-sync-prep.mjs` (`@carbon/charts/styles.css` is byte-identical to
`@carbon/charts-react/dist/styles.css`).

Chart data shapes that bit:
- `SimpleBarChart`/`LollipopChart`/`HistogramChart` plot ONE series — a second
  group yields a legend entry with nothing drawn.
- `BoxplotChart` needs a distribution per category, not one value.
- `TreeChart` takes an **array** root (`[{name, children}]`) plus
  `options.tree.type`; an object root throws
  `Cannot read properties of undefined (reading 'forEach')`.

### Zero floor cards

All **277** components now have an authored preview (was 122–154 floor cards).
`scripts/gen-subpart-previews.mjs` generates 149 of them by family: a compound
sub-part is shown **inside its parent** (TableRow in a table, SideNavLink in a
SideNav, ModalHeader in an open ComposedModal), and a non-visual provider
(`FeatureFlags`, `IdPrefix`, `ClassPrefix`, `ErrorBoundary`) is shown wrapping
something whose appearance or behaviour it changes.

37 portal/fixed components (modals, menus, UI Shell) needed
`overrides.<Name>.cardMode: "single"` to stop `[GRID_OVERFLOW]`.

## Verified-benign warnings (current build)

Three warnings survive a clean build. All three were chased to ground:

1. **`[FONT_MISSING] IBM Plex Sans Condensed`** — exactly ONE reference in the
   whole bundle: `--cds-charts-font-family-condensed`, from the charts
   stylesheet, and it carries a full fallback stack ending in `sans-serif`. No
   Carbon component sets `font-family` to it. Shipping a Condensed woff2 to
   satisfy one unused variable is not worth ~100 KB. Accepted.

2. **`[TOKENS_MISSING]` (8 vars)** — `--cds--card--*-line-clamp`,
   `--cds--side-panel--scroll-animation-distance`,
   `--tearsheet-header-action-offset`, `--scale-factor`, `--stack-depth`,
   `--block-size-change`. These belong to `@carbon/ibm-products`, whose CSS is
   pulled in transitively but whose components are NOT part of core Carbon and
   are not synced. Nothing in this bundle reads them. Accepted.

3. **`[RENDER_THIN] Loading`** — the spinner is fixed-position/overlay, so the
   measured text is just the component name. The screenshot shows a correct
   spinner. Benign, and previously recorded.

## Upload (2026-09-16)

1,456 files uploaded, verified `local == remote` (0 missing, 0 extra). Remote
also holds 2 app-generated files this sync never writes: `_ds_manifest.json`
and `_adherence.oxlintrc.json`.

Upload order matters and was followed:
**sentinel (`_ds_needs_recompile`) → content in 6 batches of ≤256 →
sentinel re-arm → anchor (`_ds_sync.json`) last.**

The re-arm is the step that matters. The app consumes the sentinel when it
compiles its card index; if the user opens the project mid-upload, the index is
built over a partial file set and the design system reads as empty. Re-arming
after the content lands forces a recompile over the complete set.

`write_files` requires BOTH `path` and `localPath` on every entry — a
`path`-only entry is rejected with "Each file needs exactly one of data or
localPath". There is no glob form, so 1,456 explicit entries across 6 calls.

Final: 277/277 render cleanly, bad 0, variantsIdentical 0, thin 1 (Loading,
benign). `report_validate` filed.

## Claude Design token-check findings (2026-09-26)

The app's token check reported two issues against `_ds_bundle.css`. One was a
misattribution; the other was real. Both are now handled in
`scripts/ds-sync-prep.mjs`, so they survive a rebuild — `_ds_bundle.css` is a
build artifact and must never be hand-edited.

### 1. "~4,600 custom properties on the `.cds--css-grid*` selectors" — wrong scope

Measured with a brace-depth walker (comments stripped — a naive regex
mis-attributes the block after a comment):

| scope | declarations |
|---|---|
| `.cds--chart-holder*` (charts) | 2,372 |
| `.cds--white` / `.cds--g10` / `.cds--g90` / `.cds--g100` | 1,306 |
| `.cds--guidebanner` | 583 |
| other component scopes | 333 |
| `:root` | 31 |
| **`.cds--css-grid*`** | **8** |

4,633 total — so the check took the file's ENTIRE custom-property count and
attributed it to the grid selector. Only 8 are actually there
(`--cds-grid-gutter`, `--cds-grid-gutter-start/-end`, `--cds-grid-column-hang`,
`--cds-grid-mode-start/-end`).

**Doing what the message literally asked would break theming.** The 1,306 theme
tokens are scoped to `.cds--white/.g10/.g90/.g100` *by design* — that is what
lets two themes coexist on a page. Flattening them onto `:root` collapses all
four into whichever is declared last.

**What was done instead (additive):** mirror the default white theme onto
`:root`, prepended to the stylesheet. This fixes the real underlying problem —
a bare `var(--cds-*)` outside a `<Theme>` used to resolve to nothing, and an
unresolvable `var()` invalidates its whole declaration (the failure that
silently killed 32 previews earlier in this project).

Safe because:
- Carbon's own later `:root` rules still win (same specificity, later wins).
- Custom properties inherit from the **nearest** ancestor that sets them, so
  `<Theme theme="g100">` still beats `:root` for its subtree.

Verified in a browser after the change:
`white #ffffff · g10 #f4f4f4 · g90 #262626 · g100 #161616` — still distinct —
and an unscoped `border: 1px solid var(--cds-border-subtle-01)` now computes to
`rgb(198,198,198)` instead of being dropped.

`:root` went 31 → 361 tokens; `.cds--white` still 327; `.cds--g100` still 326.

`.design-sync/conventions.md` previously told the design agent that tokens only
resolve inside a theme scope. That is no longer true for this bundle and has
been rewritten.

### 2. `--cds-grid-columns` needs `/* @kind other */` — real, applied

It is a layout column count, not a themeable design token, so the export has no
category for it. The prep script appends `/* @kind other */` to each
declaration (103 of them, across the responsive breakpoints). The regex is
idempotent — a negative lookahead skips any already annotated.

### Ordering trap: conventions.md is baked into README at BUILD time

`cfg.readmeHeader` prepends `.design-sync/conventions.md` to `ds-bundle/README.md`
during `package-build`. Editing conventions.md AFTER a build leaves the built
README stale, and `package-validate` does NOT regenerate it — so a stale header
sails through a clean validate and uploads silently.

That happened here: the conventions rewrite went out with the OLD token text and
was only caught by reading the file back with `get_file` after upload.

**Rule: edit conventions.md BEFORE the build, and verify the built README
(`grep` the changed line in `ds-bundle/README.md`) before uploading.**

### Verifying an incremental upload

`_ds_sync.json` is the cheap, authoritative diff. Compare remote vs local:
`styleSha` (the CSS), `bundleSha12` (the JS), `auxSha` (README/fonts/styles
shim), `scriptsSha`, and the 277 `renderHashes`. For the token fix, exactly
`styleSha` + `auxSha` moved and all 277 render hashes were unchanged, which
proved no component visual was affected and kept the upload to 4 files instead
of 1,456.

Note `ds-bundle/styles.css` is only a 57-byte `@import` shim
(`fonts/fonts.css` + `_ds_bundle.css`) — it defines no tokens. `_ds_bundle.css`
is the only file that carries `--cds-*`.

## The `.cds--css-grid*` warning: annotate the whole grid family, never hoist to :root

The Claude Design token check reports "~4,600 grid settings on `.cds--css-grid*`".
It offers two remedies. **Neither is applicable, and one provably breaks the
grid.** Leave this warning alone.

### The number

Only **8** custom properties are declared on `.cds--css-grid*` selectors
(12 rules, 23 declarations in total, 8 of them custom):

```
.cds--css-grid            --cds-grid-gutter-start / -end / --cds-grid-column-hang
.cds--css-grid-column     --cds-grid-mode-start / -end
.cds--css-grid--narrow    --cds-grid-gutter-start
.cds--css-grid--condensed --cds-grid-gutter / --cds-grid-column-hang
```

Where "4,600" comes from: the first `.cds--css-grid` rule sits 1.6% into
`_ds_bundle.css` (char 21,829 of 1,338,230), and **4,627** custom-property
declarations follow it. The checker is attributing everything downstream of that
selector to it.

### Why "move the defaults to :root" breaks the grid — measured, not argued

Custom properties substitute at computed-value time **on the element where they
are declared**. `--cds-grid-gutter-start: calc(var(--cds-grid-gutter) / 2)`
works only because it is declared on `.cds--css-grid`, i.e. on the *same
element* that `.cds--css-grid--condensed` sets `--cds-grid-gutter: 0.0625rem`
on. Hoist it to `:root` and it freezes to the root gutter:

| element | baseline | defaults hoisted to `:root` |
|---|---|---|
| default | `calc(2rem / 2)` | `calc(2rem/2)` ok |
| narrow | `0rem` | `0rem` ok |
| **condensed** | `calc(0.0625rem / 2)` | **`calc(2rem/2)` — 32x too wide** |

Note the trap: merely ADDING the declarations to `:root` looks harmless (the
class rules still win, output identical). The breakage only appears once they
are REMOVED from `.cds--css-grid`, which is what it takes for the checker to
stop naming that selector. Test both arrangements before believing a hoist is
safe.

### Why "exclude them from token collection" is not available here

`cfg.tokensPkg` / `cfg.tokensGlob` only control copying a tokens *package's*
shipped CSS into `OUT/tokens/`. There is no config hook to exclude selectors
from the token scan of `cssEntry`. That fix belongs in the checker or the
converter, not in this repo.

### Rejected: renaming `--cds-grid-*` out of the token namespace

Would silence it, but diverges from upstream Carbon and breaks any app code
using the documented `--cds-grid-columns`. Not worth it for a warning the
checker itself calls non-rendering.

### Update: annotate the WHOLE --cds-grid-* family (2026-09-28)

The first pass annotated only `--cds-grid-columns` (103 declarations) with
`/* @kind other */`, and that flag cleared — which proved the token scan reads
inline `@kind` annotations. But seven sibling properties were left unannotated
and kept the grid warning alive:

| property | declarations |
|---|---|
| `--cds-grid-columns` | 103 |
| `--cds-grid-gutter-start` | 5 |
| `--cds-grid-column-hang` | 5 |
| `--cds-grid-gutter-end` | 4 |
| `--cds-grid-bg` | 4 |
| `--cds-grid-gutter` | 3 |
| `--cds-grid-margin` | 3 |
| `--cds-grid-mode-start` / `-mode-end` | 1 each |
| **total** | **129** |

`scripts/ds-sync-prep.mjs` now annotates the whole `--cds-grid-*` family:
129/129, 0 unannotated. Comment-only, so it cannot change rendering — verified
by re-measuring the painted gutters before and after:
**default 32px · narrow 16px · condensed 1px**, identical both times.

**Lesson:** when a check accepts an annotation, annotate the whole family, not
the one property named in the message. The message names an example, not the
complete set.

The `:root` hoist remains off the table for the reason measured above — it
breaks condensed grids (1px -> 32px). If the warning persists even with all 129
annotated, the remaining option the app suggests is moving the
`.cds--css-grid*` rules into a stylesheet the token scan does not read (the scan
targets `_ds_bundle.css`; `styles.css` is only an `@import` shim). That would be
a post-build split — behaviour-preserving in principle, but it changes cascade
order, so re-measure the three gutters before trusting it.
