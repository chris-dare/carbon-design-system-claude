---
category: Foundations
---

UI Shell right panel, usually holding a `Switcher` with `SwitcherItem` children.

---

## Official IBM Carbon guidance

> Verbatim from the Carbon Design System documentation: https://carbondesignsystem.com/components/UI-shell-right-panel/usage/

### Usage

The right panel is part of the Carbon UI shell. A shell is a collection of
components shared by all products within a platform. It provides a common set of
interaction patterns that persist between and across products.

## Live demo

## Resources

  
    
- [UI Shell template](https://sketch.cloud/s/6a8e1d7b-f00a-4d8d-9d83-79ecf4dc12a0)

      
    
  

## General guidance

The UI shell is made up of three components: The
[header](https://carbondesignsystem.com/components/UI-shell-header/usage), the
[left panel](https://carbondesignsystem.com/components/UI-shell-right-panel/usage), and the right panel. All
three can be used independently, but the components were designed to work
together.

| Shell UI component |                                                                                                                                         |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| Header             | The highest level of navigation. The header can be used on its own for simple products or be used to trigger the left and right panels. |
| Left panel         | An optional panel that is used for a product's navigation.                                                                              |
| Right panel        | An optional panel that shows additional system level actions or content associated with a system icon in the header.                    |

*UI shell components*

## Anatomy

The right panel is invoked by icons on the right side of the header, and remains
anchored to that icon. Right panels have a consistent width, span the full
height of the viewport, and are flush to the right edge of the viewport.

Note that the switcher also lives in a right panel.

*The right panel configured as an empty header panel (left) and a switcher (right).*

#### Switcher item

A switcher item is anything that changes what product, offering, or property
occupies the UI shell. Consider moments in a product when you switch from a
calendar to a mailbox, from Kubernetes to Catalog. These items belong in the
switcher.

#### Switcher divider

A switcher divider groups similar switcher items. You can use a divider to set
apart a parent domain, group child domains similar in hierarchy to the parent,
and set apart additional resources. The divider should not be used to separate
every switcher item.

### Switcher

The far right header icon is reserved for the switcher icon. The switcher icon
and the switcher panel should only be used together.

**Do:** Positioned the switcher to the far right.

**Don't:** Do not position other icons to the right of the switcher.

**Don't:** Do not use another icon for the switcher.

## Behavior

#### Expansion

Right panels always float over page content, and always remain anchored to their
associated icon. You can have multiple right panels, but only one can be
expanded at any time.

#### Dismissal

Once expanded, the panel's associated icon is outlined, with its bottom border
flowing into the panel. To dismiss the panel, a user must select an item, or
click or tap the header icon.

#### Selected state

There is no selected state for right panel items. Even if a user is currently
within one of the panel items, the item remains unselected.
### Accessibility

No accessibility annotations are needed for the UI shell right panel, but keep
these considerations in mind if you are modifying Carbon or creating a custom
component.

## What Carbon provides

Carbon bakes keyboard operation into its components, improving the experience of
blind users and others who operate via the keyboard. Carbon incorporates many
other accessibility considerations, some of which are described below.

### Keyboard interaction

The switcher button is the last item in the UI shell header. Activating the
button (with `Space` or `Enter`) opens the right panel over the main content
area. All actionable links in the panel can be reached by `Tab`. Activating any
of the links (with `Enter`) loads new content and closes the right panel. The
panel can also be closed by pressing `Esc` or by re-activating the switcher
button (which receives an X icon on activation).

*Activating the switch button with Enter or Space toggles the display of the right panel.*

*Links are reached by Tab and activated by Enter key. Activating links or pressing Esc key closes panel.*

## Design recommendations

### Annotating the switcher button name

When necessary, designers may need to change the icon-only switcher button's
name to match the right panel's scope. Depending on the context of the design,
common button names include "Switch site" or "App switcher".

*Annotate a name change to the switcher button if needed in your design.*

## Development considerations

Keep these considerations in mind if you are modifying Carbon or creating a
custom component.

- The right panel is in a `<nav>` section.
- All links in the right panel are in a `<ul>` structure, which provides
  additional information to assistive technologies.
