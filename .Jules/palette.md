## 2026-02-14 - Navigation Current Page Indication
**Learning:** Screen readers announce navigation links but do not automatically indicate which one is currently active unless `aria-current="page"` is used. Visual cues (like color) are insufficient for non-sighted users.
**Action:** Ensure all active navigation links in SPA layouts have `aria-current="page"` dynamically applied.

## 2026-02-14 - Accessible Filter Tags and Loading States
**Learning:** Toggle buttons (like category filters on a resume/portfolio page) need `aria-pressed` attributes so screen readers announce their active/inactive state accurately instead of just "button". Dynamic loading indicators benefit from `role="status"` and `aria-live="polite"` to proactively announce changes.
**Action:** Always include `aria-pressed={isActive}` on filter tags/toggles and `role="status" aria-live="polite"` on conditional loading text.