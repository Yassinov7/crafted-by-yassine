# Blog Implementation for Crafted by Yassine

This document describes the implementation of the professional blog system integrated into the Crafted by Yassine portfolio website.

## Features Implemented

### 1. Database Schema
- Posts table with support for categories, tags, likes, and views
- Categories table for organizing posts
- Tags table for detailed post categorization
- Post_Tags junction table for many-to-many relationship
- Likes table with IP-based deduplication
- Views table with daily IP-based deduplication
- Safe functions for liking and viewing posts

### 2. API Routes
- `/api/like` - Handles post likes with IP deduplication
- `/api/view` - Handles post views with daily IP deduplication

### 3. Blog Components
- **PostCard** - Displays post preview with cover image, category, title, excerpt, and engagement metrics
- **CategoryBadge** - Interactive badge for post categories
- **TagChip** - Display tags associated with posts
- **LikeButton** - Allows users to like posts with optimistic UI updates
- **ViewCounter** - Automatically tracks and displays post views
- **MarkdownRenderer** - Renders Tiptap content as HTML

### 4. Blog Pages
- **Blog List Page** (`/blog`) - Displays all published posts with filtering and pagination
- **Blog Post Page** (`/blog/[slug]`) - Displays individual post content with engagement features

## Technical Details

### Supabase Integration
The blog system uses Supabase as its backend with:
- Direct database queries for fetching posts, categories, and tags
- RPC functions for safe like/view operations
- Automatic engagement tracking

### Styling
All components follow the site's design language:
- Color scheme: `#07100c` (background) and `#f59e42` (accent)
- Rounded corners (`rounded-2xl`)
- Smooth transitions and hover effects
- Responsive design for all screen sizes

### Performance Optimizations
- Client-side data fetching for dynamic updates
- Optimistic UI for like interactions
- Automatic view tracking on post page load
- Efficient pagination for post listings

## Usage Instructions

### For Visitors
1. Browse posts on the main blog page (`/blog`)
2. Filter posts by category using the category filter
3. Search for posts using the search bar
4. Click "Read More" to view full post content
5. Like posts using the heart button
6. View engagement metrics (likes/views) on post cards and pages

### For Developers
1. Ensure Supabase is properly configured with the required tables and functions
2. Set environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
3. The blog system automatically integrates with the existing site navigation

## Future Enhancements
See [adminplan.md](adminplan.md) for details on the planned admin section.

## Components Structure
```
components/
├── blog/
│   ├── PostCard.jsx          # Post preview card
│   ├── CategoryBadge.jsx     # Category display/selector
│   ├── TagChip.jsx           # Tag display
│   ├── LikeButton.jsx        # Like functionality
│   ├── ViewCounter.jsx       # View tracking
│   ├── MarkdownRenderer.jsx  # Content renderer
│   └── ... (existing components)
└── ...
```

## API Routes
```
app/
├── api/
│   ├── like/
│   │   └── route.js          # Like API endpoint
│   └── view/
│       └── route.js          # View API endpoint
└── ...
```

## Database Functions
- `safe_like(post_id, user_ip)` - Safely records a like for a post
- `safe_view(post_id, user_ip)` - Safely records a view for a post

## Dependencies Used
- `@supabase/supabase-js` - Supabase client
- `@tiptap/react` - Rich text editor
- `lucide-react` - Icons
- `date-fns` - Date formatting