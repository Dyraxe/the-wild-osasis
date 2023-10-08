import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wfjeuwqovaksboflcwfj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmamV1d3FvdmFrc2JvZmxjd2ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MzUwMTQsImV4cCI6MjAxMjAxMTAxNH0.WNOlKZOO1vXZ6X7CXQ4ec50fz156NEbvkKLSvnUnQm8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
