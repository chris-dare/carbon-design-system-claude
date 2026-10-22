---
category: Data display
---

Progressive disclosure list. `size` accepts `sm`|`md`|`lg`; `isFlush` removes side padding; `align` moves the chevron.

---

## Official IBM Carbon guidance

> Verbatim from the Carbon Design System documentation: https://carbondesignsystem.com/components/accordion/usage/

### Usage

An accordion is a vertically stacked list of headers that reveal or hide
associated sections of content.

## Live demo

## Overview

The accordion component delivers large amounts of content in a small space
through progressive disclosure. The header title gives the user a high level
overview of the content allowing the user to decide which sections to read.

Accordions can make information processing and discovering more effective.
However, it does hide content from users and it's important to account for a
user not noticing or reading all of the included content.

### When to use

- To organize related information.
- To shorten pages and reduce scrolling when content is not crucial to read in
  full.
- When space is at a premium and long content cannot be displayed all at once,
  like on a mobile interface or in a side panel.

### When not to use

- When organizing large amounts of information that can be nested, consider
  using [tree view](https://carbondesignsystem.com/components/tree-view/usage) instead.
- If a user is likely to read all of the content, then don't use an accordion as
  it adds the burden of an extra click; instead use a full scrolling page with
  normal headers.

## Formatting

### Anatomy

1. **Header**: contains the section title and is control for revealing the
   panel.
2. **Icon**: indicates if the panel is open or closed.
3. **Panel**: the section of content associated with an accordion header.

### Alignment

#### Flush alignment

Use flush alignment when designing within smaller spaces on a page such as side
panels or sidebars to achieve better text alignment with other content. Flush
alignment is also used to help avoid converging rule lines between components
that are close to each other on a page.

Flush alignment places the row title and chevron icons with 0px padding, keeping
them flush to the rule dividers. For hover and focus interactive states, the
left and right padding receives an additional 16px padding.

#### Icon alignment

By default the chevron icon is placed on the `end` side of the header. This
allows for the title on the `start` side to align with other type elements in
the layout, which is the preferred alignment scenario.

However, in some rare scenarios, the accordion may be modified to place the icon
in `start` front of the title to function more like a tree. Most instances
should use the default `end` alignment, especially for any pure content or
documentation purposes. Icon placement in accordions should be consistent
throughout your page and should not alternate.

**Do:** In most cases, use the default end icon alignment to keep accordion text aligned with other content on the page.

**Do:** In rare cases, you can place icons on the start side for tree like functionality.

### Placement

Accordions can be placed with main page content or placed inside of a container
such as a side panel or tile.

#### Grid placement

When placing an accordion on the 2x Grid with its default alignment, the
indented title and content align to the grid columns, and the top and bottom
borders hang into the gutter. However, the accordion can be modified to have a
[flush alignment](https://carbondesignsystem.com/components/accordion/usage#alignment) where the titles and
content are instead flush aligned with the top and bottom borders having 0px
padding.

## Content

### Main elements

#### Title

- The title should be as brief as possible while still being clear and
  descriptive.
- Each title should be wrapped in a
  [role heading](https://www.w3.org/TR/wai-aria-practices-1.1/#wai-aria-roles-states-and-properties)
  (h1-h6) that is appropriate for the information architecture of the page.

#### Body copy

- Content inside of a section may be split into paragraphs and include
  sub-headers if needed.

### Scrolling content

When the accordion content is longer than the viewport the whole accordion
should vertically scroll. Content should not scroll inside of an individual
panel. Content should never scroll horizontally in an accordion.

### Further guidance

For further content guidance, see Carbon's
[content guidelines](<[https://www.carbondesignsystem.com/guidelines/content/general](https://www.carbondesignsystem.com/guidelines/content/general)>).

## Behaviors

### States

The accordion component has two main states: **collapsed** and **expanded**. The
chevron icon at the end of the accordion indicates which state the accordion is
in. The chevron points down to indicate collapsed and up to indicate expanded.

Accordions begin by default in the collapsed state with all content panels
closed. Starting in a collapsed state gives the user a high level overview of
the available information.

A user can then independently expand each section of the accordion allowing for
multiple sections to be open at once.

In addition to the collapsed and expanded states, accordions also have
interactive states for focus, hover, and disabled. See the
[style tab](https://carbondesignsystem.com/components/accordion/style) for more details.

### Interactions

#### Mouse

Users can trigger a state change by clicking on the chevron or clicking anywhere
in the header area.

#### Keyboard

Users can navigate between accordion headers by pressing `Tab` or `Shift-Tab`.
Users can trigger a state change by pressing `Enter` or `Space` while the header
area has focus. For additional keyboard interactions, see the
[accessibility tab](https://carbondesignsystem.com/components/accordion/accessibility#keyboard-interactions).

## Related

The following components are additional ways to organize content. Consider the
type and length of content you are working with when choosing a content
container. Longer form content may benefit from tabs or a content switcher while
very short content might do better in a structured list.

- [Content switchers](https://carbondesignsystem.com/components/content-switcher/usage) allow users to toggle
  between two or more content sections within the same space on the screen.
- [Progress indicators](https://carbondesignsystem.com/components/progress-indicator/usage) guide users
  through any linear, multistep task by showing the user their completed,
  current, and future steps.
- [Structured lists](https://carbondesignsystem.com/components/structured-list/usage) group content that is
  similar or related, such as terms and definitions.
- [Tabs](https://carbondesignsystem.com/components/tabs/usage) organize related content by allowing the user
  to navigate between groups of information that appear within the same context.
- [Tree view](https://carbondesignsystem.com/components/tree-view/usage) is a hierarchical structure that
  provides nested levels of navigation.

## References

- Hoa Loranger,
  [Accordions Are Not Always the Answer for Complex Content on Desktops](https://www.nngroup.com/articles/accordions-complex-content/)
  (Nielsen Norman Group, 2014)

## Feedback

Help us improve this component by providing feedback, asking questions, and
leaving any other comments on
[GitHub](https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md).
### Accessibility

Design annotations are needed for specific instances shown below, but for the
standard accordion component, Carbon already incorporates accessibility.

## What Carbon provides

Carbon bakes keyboard operation into its components, improving the experience of
blind users and others who operate via the keyboard. Carbon incorporates many
other accessibility considerations, some of which are described below.

### Keyboard interactions

Each accordion is a tab stop. `Space` or `Enter` keys expand or collapse
accordions, which are collapsed by default. Interactive elements within expanded
accordions integrate into the tab order automatically.

*Accordions and interactive elements in the expanded content are in the tab order and keyboard operable.*

### Labeling and states

The collapsed or expanded state of the accordions is
[programmatically set](https://www.ibm.com/able/requirements/requirements/#4_1_2)
by default, eliminating the need for designers to provide
[text equivalents](https://www.ibm.com/able/toolkit/design/content/#alternative-text-for-visuals)
for the chevron icons.

*Carbon handles the accessibility of the chevron indicators.*

## Design recommendations

Design annotations are needed for the following instances.

### Headings

Carbon accordions are not set as headings by default. For improved
accessibility, annotate accordions as headings on the first occurrence in a
product. Annotate the heading level of accordions as needed. See
[Indicate heading levels](https://www.ibm.com/able/toolkit/design/content/#headings).

*If accordion titles act as headings, annotate for development.*

### Alignment

Carbon chevrons are right-aligned by default, but left-aligned chevrons are more
accessible for users with low vision, as the expanded/collapsed indicator is
closer to the accordion title.

*Annotate if the accordion chevrons should be left-aligned.*

## Development considerations

Keep these considerations in mind if you are modifying Carbon or creating a
custom component:

- The accordion header has a role of `<button>`, with an `aria-expanded`
  attribute set to `"true"` or `"false"`.
- The button has an `aria-controls` property set to the unique id of the panel
  it controls.
- Since accordions are typically grouped together, Carbon puts each button
  inside a list item in an unordered list, which provides additional context to
  screen reader users; where only one accordion is used, it should not be put in
  a list.
- When accordion titles are used as headings, the buttons are also wrapped in an
  element with an appropriate heading level; ARIA can be used to set both the
  heading role and the level (via `aria-level`).
- See the
  [ARIA authoring practices](https://www.w3.org/TR/wai-aria-practices-1.2/#accordion)
  for more guidance.
