## 2026-02-14 - Navigation Current Page Indication
**Learning:** Screen readers announce navigation links but do not automatically indicate which one is currently active unless `aria-current="page"` is used. Visual cues (like color) are insufficient for non-sighted users.
**Action:** Ensure all active navigation links in SPA layouts have `aria-current="page"` dynamically applied.

## 2026-02-14 - Accessible Focus Indicators on Dark Themes
**Learning:** Default browser focus outlines often have poor contrast on dark themes, making keyboard navigation difficult for users. Additionally, `:focus` without `:focus-visible` can cause unwanted outlines on mouse clicks.
**Action:** Always define global `:focus-visible` styles explicitly (e.g., using `theme.colors.accent` in `createGlobalStyle`) while using `:focus:not(:focus-visible) { outline: none; }` to maintain a clean mouse UX.
