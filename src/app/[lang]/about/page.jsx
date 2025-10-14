import IntroSection from '@/components/layout/IntroSection';
import AboutSection from '@/components/about/AboutSection';
import ExperienceTimeline from '@/components/about/ExperienceTimeline';
import SectionDivider from '@/components/layout/SectionDivider';
import CertificatesSection from '@/components/about/CertificatesSection';
import GoalSection from '@/components/about/GoalSection';

export async function generateMetadata({ params }) {
  const lang = params?.lang || 'en';
  const isAr = lang === 'ar';
  return {
    title: isAr ? 'من أنا | ياسينوف' : 'About Me | Yassinov',
    description: isAr
      ? 'م. محمد ياسين - مطور واجهات أمامية بخبرة في React وNext.js'
      : 'Mohammad Yassine – Frontend Developer with experience in React & Next.js.',
    openGraph: {
      title: isAr ? 'عن محمد ياسين' : 'About Mohammad Yassine',
      description: isAr
        ? 'تعرف على خلفيتي الأكاديمية والعملية في مجال تطوير الويب.'
        : 'Learn about my background, skills, and web dev journey.',
      url: 'https://crafted-by-yassine.vercel.app/about',
      images: [{ url: '/preview.png', width: 800, height: 600 }],
      locale: isAr ? 'ar_AR' : 'en_US',
      type: 'profile',
    },
  };
}


export default function AboutPage({ params }) {
  const isAr = params?.lang === 'ar';
  const title = isAr ? 'تعرف عليّ عن قرب' : 'Get to Know Me';
  const description = isAr
    ? 'في هذه الصفحة أشاركك رحلتي الشخصية، خلفيتي التعليمية، وأهدافي المستقبلية في عالم البرمجة.'
    : 'In this page, I share my personal journey, educational background, and future goals in software engineering.';
  const tagline = isAr
    ? '✦ كل خطوة في رحلتي تضيف قيمة لمستقبلي ✦'
    : '✦ Every step in my journey adds value to my future ✦';

  return (
    <main className="px-6 py-12 space-y-20 max-w-7xl mx-auto">
      <IntroSection lang={params?.lang} title={title} description={description} tagline={tagline} />
      <SectionDivider />
      <AboutSection lang={params?.lang} />
      <SectionDivider />
      <ExperienceTimeline lang={params?.lang} />
      <SectionDivider />
      <CertificatesSection lang={params?.lang} />
      <SectionDivider />
      <GoalSection lang={params?.lang} />
    </main>
  );
}