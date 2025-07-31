import { createClient } from '@supabase/supabase-js';

const URL = 'https://vzlrmaqntwkdvxfeoqnj.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6bHJtYXFudHdrZHZ4ZmVvcW5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5MjAyMzQsImV4cCI6MjA2OTQ5NjIzNH0.StD8hTuQjzcKH_lIlvL39_fPrOQ1KrYVgnHx9fgaprc';

export const supabase = createClient(URL, API_KEY);