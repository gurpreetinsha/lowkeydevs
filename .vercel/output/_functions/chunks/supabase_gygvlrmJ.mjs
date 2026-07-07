import { createClient } from "@supabase/supabase-js";
var supabase = createClient("https://mrnmqqjhvodbcksbvyzx.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ybm1xcWpodm9kYmNrc2J2eXp4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MzMzNjMxMywiZXhwIjoyMDk4OTEyMzEzfQ.snMKEbuDgMNHP8X02_GkaqBcioi8nJKhp5y-WtREsXU", { auth: {
	persistSession: false,
	autoRefreshToken: false,
	detectSessionInUrl: false
} });
//#endregion
export { supabase as t };
