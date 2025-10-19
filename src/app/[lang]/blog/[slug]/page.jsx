'use client';

import { useState, useEffect } from 'react';
import { use } from 'react';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import FadeInSection from '@/components/motion/FadeInSection';
import MarkdownRenderer from '@/components/blog/MarkdownRenderer';
import LikeButton from '@/components/blog/LikeButton';
import ViewCounter from '@/components/blog/ViewCounter';
import TagChip from '@/components/blog/TagChip';
import Skeleton from '@/components/ui/Skeleton';
import { Eye, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { ar, enUS } from 'date-fns/locale';

export default function BlogPostPage({ params }) {
    const { lang, slug } = use(params);
    const isAr = lang === 'ar';
    const [post, setPost] = useState(null);
    const [tags, setTags] = useState([]);

    // جلب المقال
    useEffect(() => {
        const fetchPost = async () => {
            // Fetch post with category
            const { data: postData, error: postError } = await supabase
                .from('posts')
                .select(`
          *,
          category:categories(name)
        `)
                .eq('slug', slug)
                .single();

            if (postError) {
                console.error('خطأ في جلب المقال:', postError);
                return;
            }

            setPost(postData);

            // Fetch tags for this post
            const { data: tagsData, error: tagsError } = await supabase
                .from('tags')
                .select('tags.*')
                .eq('post_tags.post_id', postData.id)
                .join('post_tags', 'tags.id', 'post_tags.tag_id');

            if (!tagsError) {
                setTags(tagsData);
            }
        };

        if (slug) {
            fetchPost();
        }
    }, [slug]);

    if (!post) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                {/* Loading skeleton */}
                <div className="space-y-8">
                    {/* Cover image skeleton */}
                    <Skeleton className="w-full h-64 md:h-96 rounded-2xl" />

                    {/* Title skeleton */}
                    <div className="space-y-4">
                        <Skeleton className="h-8 w-3/4" />
                        <Skeleton className="h-8 w-1/2" />

                        {/* Meta info skeleton */}
                        <div className="flex flex-wrap items-center gap-4 py-4">
                            <Skeleton className="h-6 w-24 rounded-full" />
                            <Skeleton className="h-6 w-32 rounded-full" />
                            <Skeleton className="h-6 w-28 rounded-full" />
                        </div>

                        {/* Tags skeleton */}
                        <div className="flex flex-wrap gap-2 py-2">
                            <Skeleton className="h-6 w-16 rounded-full" />
                            <Skeleton className="h-6 w-20 rounded-full" />
                            <Skeleton className="h-6 w-24 rounded-full" />
                        </div>
                    </div>

                    {/* Content skeleton */}
                    <div className="space-y-4">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                        <Skeleton className="h-4 w-4/6" />
                        <Skeleton className="h-4 w-5/6" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/6" />
                        <Skeleton className="h-4 w-4/6" />
                        <Skeleton className="h-4 w-5/6" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-2/6" />
                    </div>

                    {/* Actions skeleton */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-muted">
                        <Skeleton className="h-10 w-32 rounded-full" />
                        <Skeleton className="h-6 w-24 rounded" />
                    </div>
                </div>
            </div>
        );
    }

    const handleLike = () => {
        // Refresh the post data to get updated likes count
        const fetchUpdatedPost = async () => {
            const { data, error } = await supabase
                .from('posts')
                .select('*')
                .eq('id', post.id)
                .single();

            if (!error) {
                setPost(data);
            }
        };

        fetchUpdatedPost();
    };

    const formatDate = (date) => {
        try {
            const dateObj = new Date(date);
            return format(dateObj, 'PPP', { locale: isAr ? ar : enUS });
        } catch (error) {
            return date;
        }
    };

    return (
        <article className={`max-w-4xl mx-auto p-6 ${isAr ? 'direction-rtl' : ''}`}>
            <FadeInSection>
                {post.cover_image && (
                    <div className="relative w-full h-64 md:h-96 mb-6 rounded-2xl overflow-hidden">
                        <Image
                            src={post.cover_image}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}

                <div className="mb-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-accent mb-4">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                        {post.category && (
                            <span className="bg-accent/20 text-accent px-2 py-1 rounded-full">
                                {post.category.name}
                            </span>
                        )}

                        <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(post.published_at || post.created_at)}</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views_count || 0} views</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {tags.map((tag) => (
                            <TagChip key={tag.id} tag={tag} />
                        ))}
                    </div>
                </div>

                <div className="prose prose-lg max-w-none mb-8">
                    <MarkdownRenderer content={post.content} />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-muted">
                    <LikeButton
                        postId={post.id}
                        initialLikes={post.likes_count || 0}
                        onLike={handleLike}
                    />
                    <ViewCounter
                        postId={post.id}
                        initialViews={post.views_count || 0}
                    />
                </div>
            </FadeInSection>
        </article>
    );
}