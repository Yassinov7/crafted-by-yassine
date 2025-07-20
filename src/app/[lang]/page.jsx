import HeroSection from '@/components/homepage/HeroSection';
import AboutSection from '@/components/homepage/AboutSection';
import ProjectsSection from '@/components/homepage/ProjectsSection';
import ContactSection from '@/components/homepage/ContactSection';
import TimelineSection from '@/components/homepage/TimelineSection';
import SkillsSection from '@/components/homepage/SkillsSection';
import SectionDivider from '@/components/layout/SectionDivider';
export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export async function generateMetadata({ params }) {
  const lang = params?.lang ?? 'en'; //
  const isArabic = lang === 'ar';

  return {
    title: isArabic ? 'الصفحة الرئيسية' : 'HomePage',
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
      <TimelineSection lang={params.lang} />
      <SectionDivider/>
      <SkillsSection lang={params.lang} />
      <SectionDivider/>
      <ContactSection lang={params.lang} />
    </main>
  );
}
// /components
//   └─ homepage/
//       ├─ Hero.jsx
//       ├─ AboutPreview.jsx
//       ├─ ProjectsPreview.jsx
//       ├─ Achievements.jsx
//       ├─ LearningJourney.jsx
//       ├─ Skills.jsx
//       ├─ ContactForm.jsx