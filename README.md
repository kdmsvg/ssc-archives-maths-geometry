# SSC Archives — Maths (Geometry) Dummy Test V9

Responsive Android / Tablet / Web functional dummy build.

## V9 focus
- English-only dummy build; all Hindi/language-selector UI and logic removed.
- Added a clear Test Instructions screen before every test starts, explaining only how to use the test.
- Instructions cover Save & Next, Mark for Review, Previous, Clear Response, Question Palette, touch-device auto-close, and submission flow.
- Touch devices automatically start with the Question Palette closed to give the question full screen space; it can be reopened with Question Palette.
- Preserves 15-minute timer, revision sequence, bookmarks, solutions, text-size controls and question-palette color states.
- Timer uses an exact 15-minute deadline (900,000 ms) from the moment the test starts; it updates from the real clock and auto-submits at 00:00.
- After submission, Solutions always open from Question 1.
- Dummy data only. No real PDF/Excel dataset and no live database connection yet.
- Frontend is kept ready for the prepared database integration after UI flow approval.

## Deploy
Upload these files directly to the repository root:
`index.html`, `README.md`, `CHANGE_LOG.md`, `.nojekyll`

GitHub Pages: Settings → Pages → Deploy from branch → `main` → `/ (root)`.
