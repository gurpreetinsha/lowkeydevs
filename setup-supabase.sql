-- setup-supabase.sql
-- Run these statements in your Supabase Dashboard -> SQL Editor

-- 1. Create the user_roles table
CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  role text NOT NULL CHECK (role IN ('admin')),
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Enable Row Level Security on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 3. Create is_admin helper function (SECURITY DEFINER to bypass RLS when checking role)
CREATE OR REPLACE FUNCTION public.is_admin(user_id uuid)
RETURNS boolean SECURITY DEFINER AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_roles.user_id = $1 AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql;

-- 4. Enable Row Level Security on suggestions table
ALTER TABLE public.suggestions ENABLE ROW LEVEL SECURITY;

-- 5. Create policies for suggestions table
DROP POLICY IF EXISTS "Allow public insert" ON public.suggestions;
DROP POLICY IF EXISTS "Allow select for admins only" ON public.suggestions;

-- Allow anyone to submit suggestions (public feature request form)
CREATE POLICY "Allow public insert" ON public.suggestions
  FOR INSERT
  WITH CHECK (true);

-- Allow only admin users to read suggestions
CREATE POLICY "Allow select for admins only" ON public.suggestions
  FOR SELECT
  USING (
    auth.uid() IS NOT NULL AND public.is_admin(auth.uid())
  );

-- 6. Create policies for user_roles table
DROP POLICY IF EXISTS "Allow read access for admins" ON public.user_roles;

-- Allow admin users to read user roles
CREATE POLICY "Allow read access for admins" ON public.user_roles
  FOR SELECT
  USING (
    auth.uid() IS NOT NULL AND public.is_admin(auth.uid())
  );
