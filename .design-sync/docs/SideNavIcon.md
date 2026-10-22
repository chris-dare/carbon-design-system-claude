---
category: Foundations
---

SideNavIcon — from @carbon/react. See the props contract in `SideNavIcon.d.ts`.

---

## Official IBM Carbon guidance

> Verbatim from the Carbon Design System documentation: https://carbondesignsystem.com/components/UI-shell-left-panel/usage/

### Usage

This left panel is part of the Carbon UI shell. A shell is a collection of
components shared by all products within a platform. It provides a common set of
interaction patterns that persist between and across products.

## Live demo

## Resources

  
    
- [UI Shell template](https://sketch.cloud/s/6a8e1d7b-f00a-4d8d-9d83-79ecf4dc12a0)

      
    
  

## General guidance

The UI shell is made up of three components: The
[header](https://carbondesignsystem.com/components/UI-shell-header/usage), the left panel, and the
[right panel](https://carbondesignsystem.com/components/UI-shell-right-panel/usage). All three can be used
independently, but the components were designed to work together.

| Shell UI component |                                                                                                                                         |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| Header             | The highest level of navigation. The header can be used on its own for simple products or be used to trigger the left and right panels. |
| Left panel         | An optional panel that is used for a product's navigation.                                                                              |
| Right panel        | An optional panel that shows additional system level actions or content associated with a system icon in the header.                    |

*UI shell components*

## Anatomy

The left panel contains secondary navigation and is positioned below the header
and fixed to the left. Both links and sub-menus can be used in the side-nav and
may be mixed together.

*Left panel with nested sub-menus.*

## Behavior

Use the left panel if there are more than five secondary navigation items, or if
you expect a user to switch between secondary items frequently. Sub-menus are
denoted with a chevron and expand when clicked, pushing the other items down in
the panel. To collapse the sub-menu, the user must again click the menu header
in the left panel.

The left panel does not support three tiers of navigation. If you have
additional content to display beneath a sub-menu, use tabs within the page.
### Accessibility

No accessibility annotations are needed for UI shell left panels, but keep these
considerations in mind if you are modifying Carbon or creating a custom
component.

## What Carbon provides

Carbon bakes keyboard operation into its components, improving the experience of
blind users and others who operate via the keyboard. Carbon incorporates many
other accessibility considerations, some of which are described below.

### Keyboard interaction

The left panel is comprised of both expandable sections (often called
"sub-menus") and links to content. All items can be reached by `Tab`. Toggling a
collapsed section with `Space` or `Enter` expands it, which reveals additional
links. Activating any of the links (with `Enter`) updates the main content area
and puts focus back at the top of the page. The link becomes bold to show it is
the current page. (It remains in the tab order, but can no longer be activated.)

*Sub-menus and links are reached by Tab. Space and Enter keys expand/collapse sub-menus, and the Enter key is used to activate links.*

### Non-persistent left panel

On smaller screens, or if content is zoomed up to approximately 175%
magnification, Carbon responsively hides the left panel behind a 'hamburger'
button, which appears at the start of the UI shell header. Activating the button
(with `Space` or `Enter`) causes the left panel to appear. It overlays the main
content area, which often becomes dimmed. The hamburger button's icon becomes an
X, and must be activated to close the left panel.

*The hamburger button expands and collapses the left panel.*

The left panel can also be implemented as a "Side rail" variant, which slides
into view from the left side when reached by keyboard or hovered by mouse.
Keyboard interaction within the revealed left panel does not change. When users
tab out of the left panel, the side rail slides out of view.

*The side rail expands on hover or focus, and collapses when not hovered or focused.*

## Development considerations

Keep these considerations in mind if you are modifying Carbon or creating a
custom component.

- The left panel is in a `<nav>` section with `aria-label="Side navigation"`.
- All items in the left panel are in a nested `<ul>` structure, which provides
  additional information to assistive technologies.
- Each 'sub-menu' is implemented as a `<button>` with `aria-expanded`.
- Activated links receive an `aria-current="page"` attribute.
