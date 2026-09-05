# SSC Archives — Maths (Geometry) Dummy Test V6

Responsive functional dummy test for Android, tablet and desktop/web testing.

## V6 changes
- Question Palette state colors:
  - Green = answered
  - Purple = answered + Mark for Review
  - Yellow = Mark for Review without an answer
  - Red = Save & Next without answering
  - Grey = not yet acted on
- Palette is shown on the first question, then hides when moving to another question. It can be reopened with **Question Palette**.
- Palette does not permanently occupy the question screen on mobile/tablet after navigation.
- Save & Next records an unanswered question as red.
- Mark for Review records unanswered marked questions as yellow.
- Answered + marked questions are purple.
- Answered questions are green.
- Solution navigation remains one question at a time.
- Bookmark handling in Solutions uses the correct Set/Question mapping.
- Five Sets remain open for dummy functional testing using the same 25 geometry questions.

## Test
1. Open `index.html` in Chrome.
2. Create/login with a demo User ID and 4 or 6 digit PIN.
3. Open any Set 1–5.
4. Test palette states and navigation.
5. Test submit, revision flow, solutions, bookmarks and text size.

No external API key or library is required.
