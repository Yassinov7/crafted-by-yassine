import HeroSection from '@/components/homepage/HeroSection';
import AboutSection from '@/components/homepage/AboutSection';
import ProjectsSection from '@/components/homepage/ProjectsSection';
import ContactSection from '@/components/homepage/ContactSection';
import TimelineSection from '@/components/homepage/TimelineSection';
import SkillsSection from '@/components/homepage/SkillsSection';
import SectionDivider from '@/components/layout/SectionDivider';


export async function generateMetadata({ params }) {
  const lang = params?.lang || 'en';
  const isAr = lang === 'ar';
  return {
    title: isAr ? 'الصفحة الرئيسية | ياسينوف' : 'Home | Yassinov',
    description: isAr
      ? 'الصفحة الرئيسية للموقع الشخصي الخاص ب م.محمد ياسين'
      : "Homepage of Eng. Mohammad Yassine's portfolio",
    openGraph: {
      title: isAr ? 'الموقع الشخصي الخاص بالمهندس محمد ياسين' : 'Engineer Mohammad Yassine Personal Portfolio',
      description: isAr
        ? 'تعرف على مشاريعي ومهاراتي'
        : 'Explore my projects and skills',
        url: 'https://crafted-by-yassine.vercel.app/',
          images: [{ url: '/preview.png', width: 800, height: 600 }],
            locale: isAr ? 'ar_AR' : 'en_US',
              type: 'website',
    },
};
}


export default function Home({ params }) {
  return (
    <main className="px-6 py-12 space-y-20 max-w-7xl mx-auto">
      <HeroSection lang={params?.lang} />
      <SectionDivider />
      <AboutSection lang={params?.lang} />
      <SectionDivider />
      <ProjectsSection lang={params?.lang} />
      <SectionDivider />
      <TimelineSection lang={params?.lang} />
      <SectionDivider />
      <SkillsSection lang={params?.lang} />
      <SectionDivider />
      <ContactSection lang={params?.lang} />
    </main>
  );
}