import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://swluzgcfhirqflxxztoq.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3bHV6Z2NmaGlycWZseHh6dG9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2NjAxMDIsImV4cCI6MjA2MTIzNjEwMn0.7KsHNZU1D7zRI-s-_DVTjQV2hSh3WY6LwLkJytKH5aM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
