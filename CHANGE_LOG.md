# CHANGE LOG — V9

## V9 — English-only + Instructions + Exact Timer + Solution Start Fix
- Removed all Hindi/language-selector UI and logic from the dummy build.
- Added a pre-test Instructions screen focused only on test usage, not internal data workflow.
- Added touch-device intelligent palette behavior: palette starts closed and closes automatically after question actions to maximize screen space.
- Preserved manual Question Palette reopening.
- Preserved palette status colors: green = answered, purple = answered + marked, yellow = marked without answer, red = saved without answer.
- Changed timer to a real-clock 900,000 ms deadline so the 15-minute duration is measured from the actual Start Test moment.
- Timer updates from the deadline and auto-submits when the remaining time reaches 00:00.
- Ensured normal solution review starts at Question 1 after submission.
- Verified JavaScript syntax with Node `--check`.

## V8
- Added functional Home header navigation.
- Added tappable Notifications, My Progress, Leaderboard, Revision, Bookmarks and Profile sections.
- Added dedicated My Tests section with all five test sets.
- Added Home Quick Overview and due-notification actions.

## V7
- Corrected GitHub Pages package structure so `index.html` is at repository root.
