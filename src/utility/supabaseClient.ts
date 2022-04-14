import { createClient } from "@pankod/refine-supabase";

const SUPABASE_URL = "https://jaygfydvghjmkeprjrrb.supabase.co";
const SUPABASE_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpheWdmeWR2Z2hqbWtlcHJqcnJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDkwNzU4MzIsImV4cCI6MTk2NDY1MTgzMn0.1yhBWMWnAzUOSksQsvZq6-eIGwygGuThUd51pW7ZkPs";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
