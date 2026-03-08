## 2026-02-14 - Navigation Current Page Indication
**Learning:** Screen readers announce navigation links but do not automatically indicate which one is currently active unless `aria-current="page"` is used. Visual cues (like color) are insufficient for non-sighted users.
**Action:** Ensure all active navigation links in SPA layouts have `aria-current="page"` dynamically applied.

## 2025-03-08 - Toggle Buttons
**Learning:** When using custom toggleable UI elements (like filter tags), their active state needs to be conveyed to assistive technologies. A visual change in color is not enough.
**Action:** Always add the `aria-pressed` attribute to indicate the active state of a toggleable button.
