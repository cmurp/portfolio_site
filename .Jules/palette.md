## 2026-02-24 - Accessibility and Interaction Layers
**Learning:** Full-screen overlays (like `CanvasWrapper`) must have `pointer-events: none` to prevent blocking user interactions with underlying content.
**Action:** Always check `pointer-events` on absolute/fixed positioned elements that cover the viewport.

**Learning:** Icon-only links (like social icons) must have `aria-label` to be accessible to screen readers.
**Action:** Use testing-library `getByLabelText` to enforce this during development.
