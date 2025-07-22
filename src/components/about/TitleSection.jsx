'use client';

import FadeInSection from '@/components/motion/FadeInSection';

export default function TitleSection({ lang }) {
    const isAr = lang === 'ar';

    return (
        <section id='title' className="w-full px-6 py-24 max-w-5xl mx-auto scroll-mt-20 text-center">
            <FadeInSection>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                    {isAr ? 'تعرف عليّ عن قرب' : 'Get to Know Me'}
                </h1>
                <p className="text-lg text-muted max-w-2xl mx-auto">
                    {isAr
                        ? 'في هذه الصفحة أشاركك رحلتي الشخصية، خلفيتي التعليمية، وأهدافي المستقبلية في عالم البرمجة.'
                        : 'In this page, I share my personal journey, educational background, and future goals in software engineering.'}
                </p>
            </FadeInSection>
        </section>
    );
}
