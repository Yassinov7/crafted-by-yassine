-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================
-- Categories
-- =====================
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- =====================
-- Posts
-- =====================
CREATE TABLE posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    cover_image TEXT,
    status TEXT CHECK (status IN ('draft','published','archived')) DEFAULT 'draft',
    published_at TIMESTAMP,
    scheduled_at TIMESTAMP,
    views_count INTEGER DEFAULT 0 CHECK (views_count >= 0),
    likes_count INTEGER DEFAULT 0 CHECK (likes_count >= 0),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_posts_slug ON posts(slug);
CREATE INDEX idx_posts_category ON posts(category_id);
CREATE INDEX idx_posts_published_at ON posts(published_at);
CREATE INDEX idx_posts_scheduled_at ON posts(scheduled_at);

-- =====================
-- Tags
-- =====================
CREATE TABLE tags (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL
);

-- =====================
-- Post_Tags (Many-to-Many)
-- =====================
CREATE TABLE post_tags (
    post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
    tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
    PRIMARY KEY (post_id, tag_id)
);

-- =====================
-- Likes
-- =====================
CREATE TABLE likes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
    user_ip TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    UNIQUE (post_id, user_ip)
);

-- Trigger to increment likes_count on insert
CREATE OR REPLACE FUNCTION increment_likes_count()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE posts SET likes_count = likes_count + 1 WHERE id = NEW.post_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_increment_likes
AFTER INSERT ON likes
FOR EACH ROW
EXECUTE FUNCTION increment_likes_count();

-- =====================
-- Views
-- =====================
CREATE TABLE views (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
    user_ip TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Trigger to increment views_count on insert
CREATE OR REPLACE FUNCTION increment_views_count()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE posts SET views_count = views_count + 1 WHERE id = NEW.post_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_increment_views
AFTER INSERT ON views
FOR EACH ROW
EXECUTE FUNCTION increment_views_count();

-- =====================
-- Function: Safe Like (prevents duplicates)
-- =====================
CREATE OR REPLACE FUNCTION safe_like(p_post_id UUID, p_user_ip TEXT)
RETURNS TEXT AS $$
DECLARE
    existing_like UUID;
BEGIN
    SELECT id INTO existing_like 
    FROM likes 
    WHERE post_id = p_post_id AND user_ip = p_user_ip;

    IF existing_like IS NOT NULL THEN
        RETURN 'already_liked';
    END IF;

    INSERT INTO likes (post_id, user_ip) VALUES (p_post_id, p_user_ip);
    RETURN 'liked';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================
-- Function: Safe View (counts unique views)
-- =====================
CREATE OR REPLACE FUNCTION safe_view(p_post_id UUID, p_user_ip TEXT)
RETURNS TEXT AS $$
DECLARE
    existing_view UUID;
BEGIN
    SELECT id INTO existing_view 
    FROM views 
    WHERE post_id = p_post_id 
    AND user_ip = p_user_ip
    AND created_at > NOW() - INTERVAL '1 day';

    -- يمنع حساب نفس الزيارة أكثر من مرة يوميًا من نفس IP
    IF existing_view IS NOT NULL THEN
        RETURN 'already_viewed';
    END IF;

    INSERT INTO views (post_id, user_ip) VALUES (p_post_id, p_user_ip);
    RETURN 'viewed';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================
-- Permissions (Supabase)
-- =====================
-- اسمح للمستخدمين (anon) باستدعاء هذه الدوال فقط
REVOKE ALL ON FUNCTION safe_like(UUID, TEXT) FROM PUBLIC;
REVOKE ALL ON FUNCTION safe_view(UUID, TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION safe_like(UUID, TEXT) TO anon;
GRANT EXECUTE ON FUNCTION safe_view(UUID, TEXT) TO anon;

-- // تسجيل إعجاب
-- await supabase.rpc('safe_like', { p_post_id: postId, p_user_ip: clientIp });

-- // تسجيل مشاهدة
-- await supabase.rpc('safe_view', { p_post_id: postId, p_user_ip: clientIp });