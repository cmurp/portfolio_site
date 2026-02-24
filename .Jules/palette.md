## 2026-02-14 - Navigation Current Page Indication
**Learning:** Screen readers announce navigation links but do not automatically indicate which one is currently active unless `aria-current="page"` is used. Visual cues (like color) are insufficient for non-sighted users.
**Action:** Ensure all active navigation links in SPA layouts have `aria-current="page"` dynamically applied.
