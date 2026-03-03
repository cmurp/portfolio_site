## 2026-02-14 - Navigation Current Page Indication
**Learning:** Screen readers announce navigation links but do not automatically indicate which one is currently active unless `aria-current="page"` is used. Visual cues (like color) are insufficient for non-sighted users.
**Action:** Ensure all active navigation links in SPA layouts have `aria-current="page"` dynamically applied.

## 2026-02-14 - Toggle Button State Announcements
**Learning:** When using custom toggle buttons for filtering items (like the Work tags), changing the button's background color visually indicates it's active, but screen readers only know it's a "button" without knowing its state.
**Action:** Always add `aria-pressed={isActive}` to toggle buttons so assistive technologies can properly announce if a filter is active or inactive.

## 2026-02-14 - Loading State Announcements
**Learning:** A simple `<p>Loading...</p>` state when waiting for data isn't automatically read by screen readers if it appears dynamically.
**Action:** Always wrap dynamically appearing loading messages with `role="status"` and `aria-live="polite"` so screen readers proactively announce the loading status without interrupting the user.