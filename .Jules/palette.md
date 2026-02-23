## 2025-05-21 - Canvas Overlays and Accessibility

**Learning:** Absolute positioned overlays (like canvas effects) can accidentally block user interaction with underlying content if they are placed after content in the DOM and lack `pointer-events: none`.
**Action:** Always verify `pointer-events: none` on visual overlays that cover the entire viewport.

## 2025-05-21 - Icon-Only Links

**Learning:** `IconLink` components (using styled `a` tags) with only SVG children are inaccessible to screen readers without an explicit `aria-label`.
**Action:** Always add `aria-label` to icon-only buttons and links, describing the destination or action.
