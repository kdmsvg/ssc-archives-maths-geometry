# CHANGE LOG — V12

## Android / Tablet final UI correction
1. Reworked the mobile test header to prevent horizontal overflow.
2. Kept test controls compact: Back, Palette, timer, Submit, and mobile −/+ text sizing.
3. Kept SSC Archives branding treatment on Home; removed the brand block from login and test/solution contexts.
4. Touch devices now start with Question Palette hidden, including Bookmarked Questions Test.
5. Bookmarked Questions Test remains untimed and shows 00:00.
6. Reorganized Android test action buttons into:
   - Previous / Clear Response
   - Save & Next / Next
   - full-width Mark for Review
7. Removed forced smooth `scrollTo` animation during test re-renders to eliminate jumpy transitions.
8. Preserved four-option Solutions with:
   - correct option green
   - selected incorrect option red
   - status tags for Correct / Incorrect / Not Attempted / Mark for Review / Bookmarked
9. Preserved English-only, five sets, revision flow, Home sections, 15-minute timer and auto-submit behavior.
