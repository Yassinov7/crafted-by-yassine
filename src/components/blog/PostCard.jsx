'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Eye, Heart } from 'lucide-react';
import { generateHTML } from '@tiptap/html';
import StarterKit from '@tiptap/starter-kit';
import ImageExtension from '@tiptap/extension-image';
import LinkExtension from '@tiptap/extension-link';

export default function PostCard({ post, lang }) {
    const isAr = lang === 'ar';

    // Extract plain text from Tiptap content
    const extractPlainText = (content) => {
        if (!content) return '';

        // If content is already a string, return it
        if (typeof content === 'string') {
            // If it looks like HTML, extract text content
            if (content.startsWith('<') || content.includes('<')) {
                const temp = document.createElement('div');
                temp.innerHTML = content;
                return temp.textContent || temp.innerText || content;
            }
            return content;
        }

        // If content is JSON, try to parse it
        try {
            let jsonContent = content;
            if (typeof content === 'string') {
                jsonContent = JSON.parse(content);
            }

            // Check if it's a valid Tiptap JSON structure
            if (jsonContent && typeof jsonContent === 'object' && jsonContent.type === 'doc') {
                const html = generateHTML(jsonContent, [
                    StarterKit,
                    ImageExtension,
                    LinkExtension,
                ]);

                // Convert HTML to plain text
                const temp = document.createElement('div');
                temp.innerHTML = html;
                return temp.textContent || temp.innerText || '';
            }

            return JSON.stringify(jsonContent);
        } catch (error) {
            console.error('Error extracting text:', error);
            return typeof content === 'string' ? content : JSON.stringify(content);
        }
    };

    const plainText = extractPlainText(post.content);
    const excerpt = plainText.substring(0, 150) + (plainText.length > 150 ? '...' : '');

    // Check if post is scheduled
    const isScheduled = post.status === 'draft' && post.scheduled_at && new Date(post.scheduled_at) > new Date();
    const displayStatus = isScheduled ? (isAr ? 'مجدول' : 'Scheduled') : null;

    return (
        <div className="border rounded-2xl overflow-hidden bg-background shadow-sm hover:shadow-lg transition duration-300 hover:scale-[1.02]">
            {post.cover_image && (
                <div className="relative w-full h-48">
                    <Image
                        src={post.cover_image}
                        alt={post.title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                    {post.category && (
                        <span className="text-xs bg-accent text-background px-2 py-1 rounded-full">
                            {post.category.name}
                        </span>
                    )}
                    {displayStatus && (
                        <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                            {displayStatus}
                        </span>
                    )}
                </div>
                <h3 className="text-xl font-semibold text-accent mb-2 line-clamp-2">
                    {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {excerpt}
                </p>
                <div className="flex justify-between items-center">
                    <Link
                        href={`/${lang}/blog/${post.slug}`}
                        className="text-accent hover:underline font-medium"
                    >
                        {isAr ? 'اقرأ المزيد' : 'Read More'}
                    </Link>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            <span>{post.likes_count || 0}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views_count || 0}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}