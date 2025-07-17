import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ar' }];
}

export async function generateMetadata({
  params,
}){
  return {
    title: params.lang === 'ar' ? 'الرئيسية' : 'Home',
    description:
      params.lang === 'ar'
        ? 'مرحبًا بك في موقعي الشخصي'
        : 'Welcome to my personal portfolio',
  };
}

export default function Home({
  params,
}) {
  return (
    <main className="min-h-screen">
      <HeroSection lang={params.lang} />
      <AboutSection lang={params.lang} />
      <ProjectsSection lang={params.lang} />
      <ContactSection lang={params.lang} />
    </main>
  );
}
