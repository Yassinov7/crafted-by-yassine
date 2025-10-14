-- DATABASE_SCHEMA.sql
-- This file contains the SQL schema for the blog system

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Categories table for organizing blog posts
CREATE TABLE categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name JSONB NOT NULL, -- { "en": "Technology", "ar": "تقنية" }
  slug TEXT UNIQUE NOT NULL,
  description JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Blog posts table
CREATE TABLE blog_posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title JSONB NOT NULL, -- { "en": "My First Post", "ar": "منشورى الأول" }
  slug TEXT UNIQUE NOT NULL,
  excerpt JSONB,
  content JSONB NOT NULL, -- Rich text content in HTML format
  cover_image TEXT, -- URL to cover image
  categories UUID[], -- Array of category IDs
  published BOOLEAN DEFAULT FALSE,
  featured BOOLEAN DEFAULT FALSE,
  views INTEGER DEFAULT 0,
  author TEXT, -- Could be linked to users table in future
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published_at TIMESTAMP WITH TIME ZONE
);

-- Projects table
CREATE TABLE projects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title JSONB NOT NULL, -- { "en": "EduConnect Platform", "ar": "منصة EduConnect" }
  description JSONB NOT NULL,
  link TEXT,
  stack TEXT[], -- Technologies used: ['React', 'Supabase', 'Tailwind']
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Timeline items table for unified timeline
CREATE TABLE timeline_items (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  type TEXT NOT NULL, -- 'education', 'cert', 'project', 'note'
  title JSONB NOT NULL, -- { "en": "Graduated University", "ar": "تخرجت من الجامعة" }
  date TEXT, -- Display date
  description JSONB NOT NULL,
  order_index INTEGER, -- For custom ordering
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS Policies for authenticated access
-- Categories
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Categories are viewable by everyone" ON categories FOR SELECT USING (true);
CREATE POLICY "Only authenticated users can insert categories" ON categories FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Only authenticated users can update categories" ON categories FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Only authenticated users can delete categories" ON categories FOR DELETE USING (auth.role() = 'authenticated');

-- Blog Posts
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published posts are viewable by everyone" ON blog_posts FOR SELECT USING (published = true);
CREATE POLICY "All posts are viewable by authenticated users" ON blog_posts FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Only authenticated users can insert posts" ON blog_posts FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Only authenticated users can update posts" ON blog_posts FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Only authenticated users can delete posts" ON blog_posts FOR DELETE USING (auth.role() = 'authenticated');

-- Projects
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Projects are viewable by everyone" ON projects FOR SELECT USING (true);
CREATE POLICY "Only authenticated users can insert projects" ON projects FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Only authenticated users can update projects" ON projects FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Only authenticated users can delete projects" ON projects FOR DELETE USING (auth.role() = 'authenticated');

-- Timeline Items
ALTER TABLE timeline_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Timeline items are viewable by everyone" ON timeline_items FOR SELECT USING (true);
CREATE POLICY "Only authenticated users can insert timeline items" ON timeline_items FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Only authenticated users can update timeline items" ON timeline_items FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Only authenticated users can delete timeline items" ON timeline_items FOR DELETE USING (auth.role() = 'authenticated');