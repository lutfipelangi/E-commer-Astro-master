import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("URL atau Key Supabase belum dimasukkan ke file .env");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);