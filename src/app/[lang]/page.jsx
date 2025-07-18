import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import SectionDivider from '@/components/layout/SectionDivider';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export async function generateMetadata({ params }) {
  const lang = params?.lang ?? 'en'; //
  const isArabic = lang === 'ar';

  return {
    title: isArabic ? 'الصفحة الرئيسية' : 'Home Page',
    description: isArabic
      ? 'الصفحة الرئيسية للموقع الشخصي الخاص ب م.محمد ياسين'
      : 'Home Page for the portfolio off Eng. Mohammad Yassine',
  };
}

export default function Home({
  params,
}) {
  return (
    <main className="min-h-screen">
      <HeroSection lang={params.lang} />
      <SectionDivider/>
      <AboutSection lang={params.lang} />
      <SectionDivider/>
      <ProjectsSection lang={params.lang} />
      <SectionDivider/>
      <ContactSection lang={params.lang} />
    </main>
  );
}
