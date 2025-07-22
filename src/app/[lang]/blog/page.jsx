// src/app/[lang]/blog/page.jsx

import BlogList from '@/components/blog/BlogList';
import FadeInSection from '@/components/motion/FadeInSection';

export default async function BlogPage({ params }) {
    const lang = params.lang;
    const isAr = lang === 'ar';

    // 💡 بيانات وهمية
    const posts = [
        {
            id: 1,
            title: isAr ? 'كيفية بناء بورتفوليو احترافي' : 'How to Build a Professional Portfolio',
            cover_url: '/images/blog1.jpg',
            content: '<p>This is a blog post about building portfolios with tips and tricks.</p>',
            created_at: '2025-07-01',
        },
        {
            id: 2,
            title: isAr ? 'أفضل أدوات المطورين لعام 2025' : 'Top Developer Tools of 2025',
            cover_url: '/images/blog2.jpg',
            content: '<p>Explore the best dev tools to boost your productivity in 2025!</p>',
            created_at: '2025-06-22',
        },
    ];

    const enhancedPosts = posts.map((post) => ({
        ...post,
        excerpt: post.content.replace(/<[^>]+>/g, '').slice(0, 150) + '...',
    }));

    return (
        <>
            

            <section className="w-full px-6 py-24 max-w-7xl mx-auto scroll-mt-20">
                <FadeInSection>
                    <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
                        {isAr ? 'مدونتي' : 'My Blog'}
                    </h1>
                    <p className="text-center max-w-2xl mx-auto mb-12 text-muted-foreground">
                        {isAr
                            ? 'مقالات تقنية، تجاربي في البرمجة، ونصائح للمطورين'
                            : 'Technical articles, coding journeys, and developer tips.'}
                    </p>
                </FadeInSection>

                {enhancedPosts.length > 0 ? (
                    <BlogList posts={enhancedPosts} lang={lang} />
                ) : (
                    <p className="text-center text-muted-foreground">
                        {isAr ? 'لا توجد تدوينات حتى الآن.' : 'No blog posts yet.'}
                    </p>
                )}
            </section>
        </>
    );
}
