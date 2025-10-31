import IntroSection from '@/components/layout/IntroSection';
import SectionDivider from '@/components/layout/SectionDivider';
import ServicesGridSection from '@/components/services/ServicesGridSection';
import ProcessSection from '@/components/services/ProcessSection';
import CTASection from '@/components/services/CTASection';

export async function generateMetadata({ params }) {
    const { lang } = await params;

    const isAr = lang === 'ar';
    return {
        title: isAr ? 'خدماتي | ياسينوف' : 'Services | Yassinov',
        description: isAr
            ? 'تعرّف على خدماتي ومشاريعي باستخدام React، Next.js، و Supabase.'
            : 'Check out the services I provide to my clients using React, Next.js, and Supabase.',
        openGraph: {
            title: isAr ? 'خدمات ياسينوف' : 'Yassinov Services',
            description: isAr
                ? 'قائمة بخدماتي البرمجية التي اقدمها لعملائي.'
                : 'A list of my services that I provide to my clients.',
            url: 'https://crafted-by-yassine.vercel.app/services',
            images: [{ url: '/preview.png', width: 800, height: 600 }],
            locale: isAr ? 'ar_AR' : 'en_US',
            type: 'website',
        },
    };
}


export default async function ProjectsPage({ params }) {
    const { lang } = await params;
    const isAr = lang === 'ar';
    const title = isAr ? 'خدماتي' : 'My Services';
    const description = isAr
        ? 'كل خدمة أقدمها مبنية على هدف واحد: التميز والوضوح والجمال. استكشف خدماتي واكتشف كيف تتحول الأفكار إلى واقع.'
        : 'Every service I provide is built with intention: excellence, clarity, and beauty. Explore my services and discover how ideas become realities.';
    const tagline = isAr
        ? '✦ خدمة لا تخيبك ابدًا ✦'
        : '✦ Service that never disappoints ✦';

    return (
        <main className="px-6 py-12 space-y-20 max-w-7xl mx-auto">
            <IntroSection lang={lang} title={title} description={description} tagline={tagline} />
            <SectionDivider />
            <ServicesGridSection lang={lang} />
            <SectionDivider />
            <ProcessSection lang={lang} />
            <SectionDivider />
            <CTASection lang={lang} />
        </main>
    );
}