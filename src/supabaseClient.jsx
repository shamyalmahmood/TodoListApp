import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uglkvqurpjumxksrudvq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnbGt2cXVycGp1bXhrc3J1ZHZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzNTU3MTMsImV4cCI6MjAzNzkzMTcxM30.W6KualBOHMBvRGIiYbMOTqoMfo0DRmi4XXdSYl-rlgc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;