/*
  # Fix blogs and reviews schema

  1. Tables
    - Ensure `blogs` table exists with all required columns
    - Ensure `reviews` table exists with proper foreign key relationship to profiles
    
  2. Security
    - Enable RLS on both tables
    - Add appropriate policies for CRUD operations
    
  3. Relationships
    - Fix foreign key relationship between reviews and profiles
*/

-- Create blogs table if it doesn't exist
CREATE TABLE IF NOT EXISTS blogs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  title text NOT NULL,
  excerpt text,
  content text,
  image text,
  author text DEFAULT 'Marzelet Team',
  date date DEFAULT CURRENT_DATE,
  category text DEFAULT 'General'
);

-- Enable RLS on blogs table
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

-- Create policies for blogs table
DO $$
BEGIN
  -- Drop existing policies if they exist
  DROP POLICY IF EXISTS "Blogs are viewable by everyone" ON blogs;
  DROP POLICY IF EXISTS "Admins can manage blogs" ON blogs;
  
  -- Create new policies
  CREATE POLICY "Blogs are viewable by everyone"
    ON blogs
    FOR SELECT
    TO public
    USING (true);

  CREATE POLICY "Admins can manage blogs"
    ON blogs
    FOR ALL
    TO public
    USING (auth.email() = 'gowthamj0055@gmail.com');
END $$;

-- Ensure reviews table exists with proper structure
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  rating integer NOT NULL DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL,
  name text,
  company text,
  avatar text DEFAULT 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
);

-- Enable RLS on reviews table
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Create policies for reviews table
DO $$
BEGIN
  -- Drop existing policies if they exist
  DROP POLICY IF EXISTS "Reviews are viewable by everyone" ON reviews;
  DROP POLICY IF EXISTS "Users can insert their own reviews" ON reviews;
  DROP POLICY IF EXISTS "Users can update their own reviews" ON reviews;
  DROP POLICY IF EXISTS "Admins can delete any review" ON reviews;
  
  -- Create new policies
  CREATE POLICY "Reviews are viewable by everyone"
    ON reviews
    FOR SELECT
    TO public
    USING (true);

  CREATE POLICY "Users can insert their own reviews"
    ON reviews
    FOR INSERT
    TO public
    WITH CHECK (auth.uid() = user_id);

  CREATE POLICY "Users can update their own reviews"
    ON reviews
    FOR UPDATE
    TO public
    USING (auth.uid() = user_id);

  CREATE POLICY "Admins can delete any review"
    ON reviews
    FOR DELETE
    TO public
    USING (auth.email() = 'gowthamj0055@gmail.com');
END $$;

-- Add some sample data to blogs table if it's empty
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM blogs LIMIT 1) THEN
    INSERT INTO blogs (title, excerpt, content, image, author, date, category) VALUES
    (
      'The Future of Web Development: Trends to Watch in 2025',
      'Explore the cutting-edge technologies and methodologies that will shape web development in the coming year.',
      'Full blog content here...',
      'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      'Marzelet Team',
      '2025-01-15',
      'Technology'
    ),
    (
      'Building Scalable Applications with Modern Architecture',
      'Learn how to design and implement applications that can grow with your business needs.',
      'Full blog content here...',
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      'Marzelet Team',
      '2025-01-10',
      'Development'
    ),
    (
      'UI/UX Design Principles for Better User Engagement',
      'Discover the key principles that make interfaces intuitive and engaging for users.',
      'Full blog content here...',
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      'Marzelet Team',
      '2025-01-05',
      'Design'
    );
  END IF;
END $$;