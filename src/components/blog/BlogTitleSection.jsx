'use client';

import FadeInSection from '@/components/motion/FadeInSection';

export default function BlogTitleSection({ lang }) {
    const isAr = lang === 'ar';

    return (
        <section id="blog-title" className="w-full px-6 py-24 max-w-5xl mx-auto scroll-mt-20 text-center">
            <FadeInSection>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                    {isAr ? 'مدونتي' : 'My Blog'}
                </h1>
                <p className="text-lg text-muted max-w-2xl mx-auto">
                    {isAr
                        ? 'اكتشف مقالاتي حول البرمجة، التصميم، وأحدث التقنيات التي أشاركها لإلهامك.'
                        : 'Explore my articles on programming, design, and the latest tech trends to inspire you.'}
                </p>
            </FadeInSection>
        </section>
    );
}