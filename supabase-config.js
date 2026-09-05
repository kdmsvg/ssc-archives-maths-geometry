/* SSC Archives — Maths Geometry — Supabase public client configuration.
   Publishable/anon keys are intended for browser use. NEVER put a service-role/secret key here. */
const SUPABASE_URL = 'https://rlqxwrdmbzdwjbhjohvm.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_eSedkZwuLxtEwmpb6hNYDw_Z0K8zFGW';
if (!window.supabase?.createClient) throw new Error('Supabase JS client failed to load.');
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
