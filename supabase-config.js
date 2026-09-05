const SUPABASE_URL = 'https://rlqxwrdmbzdwjbhjohvm.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_eSedkZwuLxtEwmpb6hNYDw_Z0K8zFGW';

if (!window.supabase?.createClient) {
  throw new Error('Supabase JS client failed to load.');
}

window.supabaseClient =
  window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );
