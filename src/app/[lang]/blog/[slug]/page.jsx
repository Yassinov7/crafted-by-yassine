'use client';

import { useState, useEffect } from 'react';
import { use } from 'react';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';
import { generateHTML } from '@tiptap/html';
import StarterKit from '@tiptap/starter-kit';
import ImageExtension from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import FadeInSection from '@/components/motion/FadeInSection';
import { FaHeart } from 'react-icons/fa';

export default function BlogPostPage({ params }) {
    const { lang, slug } = use(params); // استخدام React.use للوصول إلى params
    const isAr = lang === 'ar';
    const [post, setPost] = useState(null);
    const [likes, setLikes] = useState(0);

    // جلب المقال
    useEffect(() => {
        const fetchPost = async () => {
            const { data, error } = await supabase
                .from('posts')
                .select('*')
                .eq('slug', slug)
                .single();
            if (error) {
                console.error('خطأ في جلب المقال:', error);
                return;
            }
            setPost(data);
            setLikes(data.likes || 0);
        };
        fetchPost();
    }, [slug]);

    // التعامل مع الإعجاب
    const handleLike = async () => {
        const newLikes = likes + 1;
        const { error } = await supabase
            .from('posts')
            .update({ likes: newLikes })
            .eq('slug', slug);
        if (error) {
            console.error('خطأ في تحديث الإعجابات:', error);
        } else {
            setLikes(newLikes);
        }
    };

    if (!post) {
        return (
            <div className="max-w-4xl mx-auto p-6 text-center">
                <p>{isAr ? 'جارٍ التحميل...' : 'Loading...'}</p>
            </div>
        );
    }

    const htmlContent = generateHTML(post.content[lang], [
        StarterKit,
        ImageExtension,
        Link,
    ]);

    return (
        <div className={`max-w-4xl mx-auto p-6 ${isAr ? 'direction-rtl' : ''}`}>
            <FadeInSection>
                {post.cover_image && (
                    <div className="relative w-full h-64 mb-6">
                        <Image
                            src={post.cover_image}
                            alt={post.title[lang]}
                            fill
                            className="object-cover rounded-2xl"
                        />
                    </div>
                )}
                <h1 className="text-3xl font-bold text-accent mb-4">
                    {post.title[lang]}
                </h1>
                <div className="flex flex-wrap gap-2 mb-4">
                    {post.categories?.map((category) => (
                        <span
                            key={category}
                            className="text-xs bg-accent text-background px-2 py-1 rounded-full"
                        >
                            {category}
                        </span>
                    ))}
                </div>
                <div
                    className="prose prose-lg mb-6"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
                <div className="flex items-center gap-4">
                    <button
                        onClick={handleLike}
                        className="flex items-center gap-2 px-4 py-2 bg-accent text-background rounded-full hover:bg-accent/80 transition"
                    >
                        <FaHeart className="text-red-500" />
                        {isAr ? `${likes} إعجابات` : `${likes} Likes`}
                    </button>
                </div>
            </FadeInSection>
        </div>
    );
}