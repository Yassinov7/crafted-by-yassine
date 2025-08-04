'use client';

import FadeInSection from '@/components/motion/FadeInSection';
import Link from 'next/link';
import Image from 'next/image';

// دالة لاستخراج النص الخام من محتوى Tiptap
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
  return text.slice(0, 100); // تقطيع النص إلى 100 حرف
}

export default function BlogSection({ lang, posts }) {
  const isAr = lang === 'ar';

  return (
    <FadeInSection>
      <section
        id="blog"
        className="w-full px-6 py-24 max-w-7xl mx-auto scroll-mt-20"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          {isAr ? 'المدونة' : 'Blog'}
        </h2>
        <div className="w-20 h-1 mx-auto bg-accent rounded-full mb-12" />

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
                  <h3 className="text-xl font-semibold text-accent mb-2">
                    {post.title[lang]}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {extractTextFromTiptap(post.content[lang])}...
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-block text-accent hover:underline"
                  >
                    {isAr ? 'اقرأ المزيد' : 'Read More'}
                  </Link>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}