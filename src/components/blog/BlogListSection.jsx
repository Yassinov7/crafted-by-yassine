'use client';

import FadeInSection from '@/components/motion/FadeInSection';
import Link from 'next/link';
import Image from 'next/image';

function extractTextFromTiptap(content) {
    if (!content || !content.content) return '';

    let text = '';
    const traverseNodes = (nodes) => {
        nodes.forEach((node) => {
            if (node.type === 'text') {
                text += node.text || '';
            }
            if (node.content) {
                traverseNodes(node.content);
            }
        });
    };
    traverseNodes(content.content);
    return text.slice(0, 100);
}

export default function BlogListSection({ lang, posts }) {
    const isAr = lang === 'ar';

    return (
        <FadeInSection>
            <section className="w-full px-6 py-12 max-w-5xl mx-auto">
                <div
                    className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${isAr ? 'direction-rtl' : ''}`}
                >
                    {posts.map((post, index) => (
                        <FadeInSection key={post.id} delay={index * 0.1}>
                            <div className="border rounded-2xl overflow-hidden bg-muted/10 shadow-sm hover:shadow-md transition duration-300">
                                {post.cover_image && (
                                    <div className="relative w-full h-48">
                                        <Image
                                            src={post.cover_image}
                                            alt={post.title[lang]}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {post.categories.map((category) => (
                                            <span
                                                key={category}
                                                className="text-xs bg-accent text-background px-2 py-1 rounded-full"
                                            >
                                                {category}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-semibold text-accent mb-2">
                                        {post.title[lang]}
                                    </h3>
                                    <p className="text-sm text-muted-foreground line-clamp-3">
                                        {extractTextFromTiptap(post.content[lang])}...
                                    </p>
                                    <div className="flex justify-between items-center mt-4">
                                        <Link
                                            href={`/${lang}/blog/${post.slug}`}
                                            className="text-accent hover:underline"
                                        >
                                            {isAr ? 'اقرأ المزيد' : 'Read More'}
                                        </Link>
                                        <span className="text-sm text-muted-foreground">
                                            {isAr ? `${post.likes} إعجابات` : `${post.likes} Likes`}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </section>
        </FadeInSection>
    );
}