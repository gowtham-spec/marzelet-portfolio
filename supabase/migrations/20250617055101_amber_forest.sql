/*
  # Create blogs table

  1. New Tables
    - `blogs`
      - `id` (uuid, primary key)
      - `title` (text, required)
      - `excerpt` (text)
      - `content` (text)
      - `image` (text)
      - `author` (text)
      - `date` (date)
      - `category` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `blogs` table
    - Add policy for public viewing
    - Add policy for admin management
*/

CREATE TABLE IF NOT EXISTS public.blogs (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamp with time zone DEFAULT now(),
  title text NOT NULL,
  excerpt text,
  content text,
  image text,
  author text DEFAULT 'Marzelet Team',
  date date DEFAULT CURRENT_DATE,
  category text DEFAULT 'General'
);

ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Blogs are viewable by everyone"
  ON public.blogs
  FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage blogs"
  ON public.blogs
  FOR ALL
  USING (auth.email() = 'gowthamj0055@gmail.com');