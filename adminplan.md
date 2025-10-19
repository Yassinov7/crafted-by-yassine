# Admin Blog Development Plan

## Overview
This document outlines the development plan for the admin blog section of the crafted-by-yassine portfolio website. The admin section will allow authorized users to create, edit, and manage blog posts, categories, and tags.

## Features Implemented

### 1. Authentication & Authorization
- ✅ Login system for admin users
- ✅ Session management
- ✅ Role-based access control (RBAC)

### 2. Dashboard
- ✅ Overview of blog statistics (total posts, views, likes)
- ✅ Recent posts list
- ✅ Quick actions (create new post, view analytics)

### 3. Post Management
- ✅ Create new posts with:
  - ✅ Title
  - ✅ Content (using Tiptap editor)
  - ✅ Cover image upload
  - ✅ Category selection
  - ✅ Tag management
  - ✅ Status (draft, published, archived)
  - ✅ Slug generation
- ✅ Edit existing posts
- ✅ Delete posts
- ✅ Preview posts before publishing
- ⬜ Schedule posts for future publishing

### 4. Category Management
- ✅ Create new categories
- ✅ Edit category details
- ✅ Delete categories
- ⬜ View category usage statistics

### 5. Tag Management
- ✅ Create new tags
- ✅ Edit tag details
- ✅ Delete tags
- ⬜ View tag usage statistics

### 6. Media Management
- ✅ Upload images
- ✅ Manage uploaded media
- ⬜ Delete unused media

### 7. Analytics
- ✅ View post analytics (views, likes)
- ⬜ Filter analytics by date range
- ⬜ Export analytics data

## Technical Implementation

### Folder Structure
```
src/
  app/
    [lang]/
      admin/
        blog/
          page.jsx          # Main admin blog dashboard
          posts/
            page.jsx        # Posts list
            [id]/
              page.jsx      # Edit post page
            create/
              page.jsx      # Create new post page
          categories/
            page.jsx        # Categories management
          tags/
            page.jsx        # Tags management
          media/
            page.jsx        # Media management
          analytics/
            page.jsx        # Analytics dashboard
          layout.jsx        # Admin layout with sidebar
        login/
          page.jsx          # Admin login page
```

### Components to Create
1. ✅ AdminLayout - Layout with sidebar navigation
2. ✅ Sidebar - Navigation menu for admin sections
3. ✅ PostForm - Form component for creating/editing posts
4. ✅ CategoryForm - Form for managing categories
5. ✅ TagForm - Form for managing tags
6. ✅ MediaUploader - Component for uploading and managing media
7. ✅ AnalyticsChart - Component for displaying analytics data
8. ⬜ DataTable - Reusable table component for listing data

### Supabase Integration
- ✅ RLS for tables
### Security Considerations
- ✅ Server-side validation for all inputs
- ✅ Proper authentication checks for all admin routes
- ⬜ Rate limiting for API endpoints
- ✅ Secure image uploads with validation

## Development Phases

### Phase 1: Authentication & Basic Setup (Week 1)
- ✅ Implement admin login page
- ✅ Create admin user table in Supabase
- ✅ Set up authentication middleware
- ✅ Create basic admin layout

### Phase 2: Post Management (Week 2)
- ✅ Implement post listing page
- ✅ Create post creation/editing forms
- ✅ Integrate Tiptap editor
- ✅ Implement image upload functionality

### Phase 3: Category & Tag Management (Week 3)
- ✅ Implement category management
- ✅ Implement tag management
- ✅ Connect posts with categories and tags

### Phase 4: Media Management (Week 4)
- ✅ Implement media upload and management
- ⬜ Add media library to post editor

### Phase 5: Analytics & Final Features (Week 5)
- ✅ Implement analytics dashboard
- ⬜ Add post scheduling functionality
- ⬜ Implement data export features
- ⬜ Final testing and optimization

## Dependencies to Install
- ✅ @tiptap/react - For the rich text editor
- ✅ @tiptap/starter-kit - Starter extensions for Tiptap
- ⬜ react-dropzone - For drag and drop file uploads
- ✅ recharts - For analytics charts
- ⬜ react-hook-form - For form handling
- ⬜ zod - For form validation

## Environment Variables Needed
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY
- ADMIN_EMAIL (for initial admin user)
- ADMIN_PASSWORD (for initial admin user)

## Testing Plan
- ✅ Unit tests for all components
- ✅ Integration tests for API routes
- ⬜ End-to-end tests for critical user flows
- ✅ Accessibility testing
- ✅ Performance testing

## SEO Considerations
- ✅ SEO for /blog and /blog/[slug]
- ⬜ SEO optimization for admin pages (not publicly accessible)