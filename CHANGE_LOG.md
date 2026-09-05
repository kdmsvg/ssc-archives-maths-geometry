# CHANGE LOG

## V33 — Master Baseline + External MG 125 Local Test
- Kept the approved UI/test behavior as the baseline.
- Removed embedded MG question data from the HTML.
- Added runtime loading of `database/MG_125_DATABASE_FINAL.json`.
- Added database integrity checks (125 records, unique IDs, 25 buckets).
- Preserved figure assets and MathJax rendering.
- Created a clean V33 local-data namespace; old dummy data is not reused.
- Prepared the data-provider boundary for future secure backend/Supabase integration.
