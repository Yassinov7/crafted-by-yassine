import TitleSection from '@/components/about/TitleSection';
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
  const { lang } = params;
  

  return (
    <>
      <TitleSection lang={lang} />
      <SectionDivider />
      <AboutSection lang={lang} />
      <SectionDivider />
      <ExperienceTimeline lang={lang} />
      <SectionDivider />
      <CertificatesSection lang={lang} />
      <SectionDivider />
      <GoalSection lang={lang} />
    </>
  );
}