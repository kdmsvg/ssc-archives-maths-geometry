# DATA INTEGRATION LOG — V33

## Baseline
- Locked UI baseline: V31/V32-equivalent approved presentation and behavior.
- Android/Tablet/Laptop UI is not intentionally redesigned.

## Data integration
- Authoritative source: MG_125_DATABASE_FINAL.json
- 125 records validated at boot.
- Unique question_id validation enabled.
- All 25 Set+Subset buckets validated.
- Questions are mapped into the existing test engine at runtime.
- Verified figure assets remain external under `assets/figures/`.
- MathJax remains the rendering engine.

## Important architecture rule
Question content is NOT embedded in `index.html`. The frontend is a presentation/test-engine layer. The current local provider reads JSON; the future production provider will read the backend/Supabase layer without redesigning the UI.

## Persistence
- Local progress uses a new V33 storage namespace.
- Old dummy progress is not migrated.
- Historical attempt/revision/bookmark structures remain owned by the application state layer.

## Not yet done
- Supabase/PostgreSQL connection
- Auth/RLS/RPC wiring
- Production backend reads/writes
