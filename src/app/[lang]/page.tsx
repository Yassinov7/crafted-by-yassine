// src/app/[lang]/page.tsx

import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

type Props = {
  params: {
    lang: 'ar' | 'en';
  };
};

export default function Home({ params }: Props) {
  return (
    <main className="min-h-screen">
      <HeroSection lang={params.lang} />
      <AboutSection lang={params.lang} />
      <ProjectsSection lang={params.lang} />
      <ContactSection lang={params.lang} />
    </main>
  );
}

