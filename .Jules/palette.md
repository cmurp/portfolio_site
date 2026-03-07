## 2026-02-14 - Navigation Current Page Indication
**Learning:** Screen readers announce navigation links but do not automatically indicate which one is currently active unless `aria-current="page"` is used. Visual cues (like color) are insufficient for non-sighted users.
**Action:** Ensure all active navigation links in SPA layouts have `aria-current="page"` dynamically applied.

## 2026-02-14 - High Contrast Focus Indicators
**Learning:** Default browser focus rings (often blue) lack sufficient contrast on dark themes, making keyboard navigation difficult or impossible for sighted keyboard users.
**Action:** Add a high-contrast global `:focus-visible` style using the theme's accent color (`theme.colors.accent`) to replace default browser outlines.
