// src/components/blog/BlogCard.jsx

import Link from 'next/link';
import { format } from 'date-fns';
import { arSA, enUS } from 'date-fns/locale';

export default function BlogCard({ post, lang }) {
    const isAr = lang === 'ar';
    const formattedDate = format(new Date(post.created_at), 'dd MMM yyyy', {
        locale: isAr ? arSA : enUS,
    });

    const slug = `${post.title.toLowerCase().replace(/\s+/g, '-')}-${post.id}`;
    const href = `/${lang}/blog/${slug}`;

    return (
        <div className="bg-muted/10 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
            {post.cover_url && (
                <img
                    src={post.cover_url}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                />
            )}
            <div className="p-5">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-sm text-muted-foreground mb-3">{formattedDate}</p>
                <p className="line-clamp-3 mb-4">{post.excerpt}</p>
                <Link
                    href={href}
                    className="text-primary font-semibold hover:underline"
                >
                    {isAr ? 'اقرأ المزيد →' : 'Read more →'}
                </Link>
            </div>
        </div>
    );
}
