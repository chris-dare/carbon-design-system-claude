---
category: Forms
---

ExpandableSearch — from @carbon/react. See the props contract in `ExpandableSearch.d.ts`.

---

## Official IBM Carbon guidance

> Verbatim from the Carbon Design System documentation: https://carbondesignsystem.com/components/search/usage/

### Usage

Search enables users to specify a word or a phrase to find relevant content
without navigation.

## Live demo

## Overview

Search offers users a way to explore a website or application using keywords.
Search can be used as the primary means of discovering content or as a filter to
aid the user in finding content.

### When to use

- To help users find data more efficiently within a complex or large data set.
- Use at a global level when searching an entire site.
- Use at a page level when searching through content on one page specifically.
- Use at a component level when searching data in a component, like a
  [data table](https://carbondesignsystem.com/components/data-table/usage/#search).

### When not to use

- Do not use when there is small or limited amounts of data.
- Do not use when the information is simple and can be found easily within one
  view.

## Formatting

### Anatomy

1. **Field:** The place where a user enters their search query.
2. **Search icon:** Signifies a search field. The magnifying glass icon is a
   universal way to indicate search.
3. **Field text:** Inputted search text by the user. Placeholder text is visible
   before the user types into the field.
4. **Close icon:** Appears after the user has actively typed into the search
   field. Acts as a function to clear the search field.

### Styling

There are two styles of search, default and fluid. They share the same
functionality but look visually different, influencing where to use them.

| Style   | Appearance                                                                                                                    | Use case                                                                                                                            |
| ------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Default | A traditional style where there is no label indicated.                                                                        | Use when white space is needed between components. For example, a default search style is typically used at a global or page level. |
| Fluid   | An alternative style where a label is placed inside of the search field and is stacked inline with the user input field text. | Use in expressive moments, fluid forms, and contained spaces.                                                                       |

*A default style input is shown on the top and fluid style is on the bottom.*

### Sizing

#### Default input heights

There are three default search height sizes: small, medium, and large. The width
varies in size based on content, layout, and design. Supporting three different
search sizes gives you more flexibility when structuring layouts.

| Size        | Height (px/rem) | Use case                                                                                                                                            |
| ----------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Small (sm)  | 32 / 2          | Use when space is constricted within a design.                                                                                                      |
| Medium (md) | 40 / 2.5        | This is the default size and the most commonly used size. When in doubt, use the medium size.                                                       |
| Large (lg)  | 48 / 3          | Use when there is a lot of space to work with. The large size is typically at a global level when the user is searching content within a page view. |

#### Fluid input height

There is only one input height at 64px and it is visually larger than the
default heights.

### Placement

Place the search component within a user interface where users expect to find it
and where it is appropriate for how it is being used in context, whether at a
global level, page-specific level, or within a component.

The default search can be arranged on the grid to align the container with other
components containers. Search can also hang to align with other hanging
component containers on the same page, depending on the use case.

**Do:** Do align the default search container vertically with other text on the page.

**Do:** Do hang the fluid search container with other hanging components.

## Content

### Main elements

#### Placeholder text

Useful and short text hinting at what the user can search for. For example,
“Search for networks or devices.”

#### Field text

- Key words entered by the user to find a search result.
- Keep the field text concise and relate the field text as closely to the result
  you want to find.

### Further guidance

For further content guidance, see Carbon’s
[content guidelines](https://carbondesignsystem.com/guidelines/content/overview/).

## Behaviors

### States

The search component has four states: enabled, focus, filled, and disabled.

### Interactions

#### Mouse

Click on the search field input to start typing. Once a user starts typing, a
close icon (‘x’) will appear and provides a way to clear the input field by
clicking on the Close icon.

#### Keyboard

Press `Enter` to submit text as a search term, or press `Esc` to clear the
search field. Once a user starts typing, a Close icon (‘x’) will appear and
provides a way to clear the input field by pressing the `Space`or `Enter` keys.

## Related

#### Components

- [Data table](https://carbondesignsystem.com/components/data-table/usage/)
- [UI shell header](https://carbondesignsystem.com/components/UI-shell-header/usage/)

#### Patterns

- [Filtering](https://carbondesignsystem.com/patterns/filtering/)
- [Search](https://carbondesignsystem.com/patterns/search-pattern/)

## Feedback

Help us improve this component by providing feedback, asking questions, and
leaving any other comments on
[GitHub](https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md).
### Accessibility

Carbon’s search component provides the basic input mechanism for conducting a
search. No accessibility annotations are needed for the input, but design
annotations are needed to make the search messaging and results accessible.

## What Carbon provides

Carbon bakes keyboard operation into its components, improving the experience of
blind users and others who operate via keyboard. Carbon also incorporates other
accessibility considerations, some of which are described below.

### Keyboard interaction

The search component is in the tab order, and users can type directly into the
search input on focus. Users press `Enter` to submit their text as a search
term, or they can press `Esc` to clear it. Once users start typing, a Cancel
icon ('x') will appear, which becomes the next tab stop and provides another way
to clear the input field via click, `Space` or `Enter` keys.

*The search input is in the tab order just like any other input.*

*The user can clear the input by pressing Esc or activating the X button that appears inside the input.*

Variations of the search component use a non-persistent text input that is
hidden behind a magnifying glass icon. In one variation, the user activates the
icon-only button to reveal and put focus into the search input. In another
variation, as the icon receives focus it exposes the input and the focus is
immediately placed into the search input. Once in the input, the interaction,
described above, is the same for all variations.

*A variation where the search input is revealed by activating the magnifying glass icon.*

*A variation where the search input is revealed when the magnifying glass receives focus.*

### Role and label

Carbon assigns the entire search interaction a `role` of "search". It also
provides non-visible labels for the search input and icon (“search”), and for
the cancel icon (“clear search input”).

*The search region, input name, and clear button are all incorporated by Carbon.*

## Design recommendations

Carbon provides a
[search pattern](https://carbondesignsystem.com/patterns/search-pattern/) that
outlines three search types: basic, active, and focused. Each of these types
starts with the basic search input mechanism provided by Carbon’s search
component. However, each search type displays suggestions or results in
different ways, which all have accessibility considerations. There are three
broad areas that designers need to consider and annotate for accessibility:

- Search suggestions and typeahead
- Search outcomes and status (e.g., “25 results found”, “no results found”)
- Results navigation

Future updates to this guidance will offer specific documentation on these
accessibility needs.

## Development considerations

Keep these considerations in mind if you are modifying Carbon or creating a
custom component.

- The div containing the search function is given a `role="button"`.
- The hidden label for the input has a default value of “search”.
- The input is `type="text"` with a `role="searchbox"`; using `type="search"` is
  equivalent and also valid.
- See the
  [Mozilla search input documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search)
  for more considerations.
