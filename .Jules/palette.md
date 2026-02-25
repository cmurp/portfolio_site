## 2026-02-14 - Navigation Current Page Indication
**Learning:** Screen readers announce navigation links but do not automatically indicate which one is currently active unless `aria-current="page"` is used. Visual cues (like color) are insufficient for non-sighted users.
**Action:** Ensure all active navigation links in SPA layouts have `aria-current="page"` dynamically applied.

## 2026-02-14 - Keyboard Focus Visibility
**Learning:** Default browser focus rings are often invisible or clash with custom dark themes, making navigation impossible for keyboard users.
**Action:** Always add explicit `:focus-visible` styles to interactive elements (buttons, links) using a high-contrast theme color (like `theme.colors.accent`).
