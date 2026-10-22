---
category: Navigation
---

Icon-triggered menu for secondary row actions. Children are `OverflowMenuItem`; mark destructive entries with `isDelete` and `hasDivider`.

---

## Official IBM Carbon guidance

> Verbatim from the Carbon Design System documentation: https://carbondesignsystem.com/components/overflow-menu/usage/

### Usage

Use the overflow menu component when additional options are available to the
user but there is a space constraint.

## Overview

Overflow menu is used when additional options are available to the user and
there is a space constraint.

## Live demo

## Formatting

#### Text

The text within an overflow menu should be direct so users can quickly decide on
an action. Actions that could cause a significant change to the user's data
(delete app, delete service, etc.) are separated by a divider and live below the
primary set of actions.

### Placement

Depending on where the Overflow menu appears within the UI, the tab tip may
appear on the left or right so it always remains visible.

## Feedback

Help us improve this component by providing feedback, asking questions, and
leaving any other comments on
[GitHub](https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md).
### Accessibility

No accessibility annotations are needed for overflow menus, but keep these
considerations in mind if you are modifying Carbon or creating a custom
component.

## What Carbon provides

Carbon bakes keyboard operation into its components, improving the experience of
blind users and others who operate via keyboard. Carbon also incorporates other
accessibility considerations, some of which are described below.

### Keyboard interaction

Each overflow menu is in the tab order and is activated by `Space` or `Enter`.
When the menu is open, the first item takes focus. Focus is moved between menu
items with the `Up` and `Down` arrow keys. `Space` or `Enter` activates the item
with focus (which causes focus to go somewhere else and the menu to close).
`Esc` collapses the menu and puts focus onto the menu button.

*Overflow menus are reached by Tab. Space and Enter keys open the menu as well as activating menu items with focus.*

*When opened, the first item in the menu takes focus. Arrow keys move focus, Esc closes the menu.*

## Development considerations

Keep these considerations in mind if you are modifying Carbon or creating a
custom component.

- Overflow menus are buttons with `aria-haspopup` set to "true".
- The overflow menu is named with `aria-label`.
- Each menu item is an `li` in a `ul`.
- Each list item contains a button with `role="menuitem"` and `tabindex="-1"`.
  See the
  [ARIA authoring practices on menubutton](https://w3c.github.io/aria-practices/#menubutton)
  for more considerations.
