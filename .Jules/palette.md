## 2026-02-20 - Full-screen Overlay Interactions
**Learning:** Full-screen decorative overlays (like `CanvasWrapper` for terminal effects) must have `pointer-events: none` to avoid blocking interactions with underlying content.
**Action:** When adding or modifying full-screen visual effects, always verify interactivity of the content beneath.
