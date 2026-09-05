# SSC Archives — MG 125 Master Baseline Local Test

This build preserves the locked SSC Archives UI baseline and loads the authoritative MG 125 database externally from `database/MG_125_DATABASE_FINAL.json`.

## Local test
Run a local web server from this folder, then open the displayed localhost address in Chrome. A `file://` open is not supported because the browser blocks the JSON fetch.

Example: `python3 -m http.server 8000`

## Architecture
UI/Test Engine → Data Provider → MG 125 JSON

For production/Supabase, only the data-provider layer should be replaced with secure backend/RPC reads. The UI remains the locked presentation layer.
