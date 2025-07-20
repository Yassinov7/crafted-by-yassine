'use client';

import FadeInSection from '@/components/motion/FadeInSection';
import ProjectCard from '@/components/projects/ProjectCard';

const projects = [
  {
    title: {
      ar: 'ستلايت الرجاء',
      en: 'Satellite Al-Rajaa',
    },
    description: {
      ar: 'منصة لعرض الخدمات والعروض في الكويت بواجهة أنيقة وسريعة.',
      en: 'A platform to showcase services and offers in Kuwait with a fast, elegant UI.',
    },
    link: 'https://satellitealrajaa.com',
    stack: ['Next.js', 'Supabase', 'Tailwind'],
  },
  {
    title: {
      ar: 'UniRide',
      en: 'UniRide',
    },
    description: {
      ar: 'نظام لتنظيم تنقل الطلاب بين الجامعات والمناطق، مع إدارة المشرفين.',
      en: 'A system for managing university ride-sharing for students and supervisors.',
    },
    slug: 'uniride', // links to /projects/uniride
    stack: ['React', 'Supabase', 'Zustand'],
  },
  {
    title: {
      ar: 'EduConnect',
      en: 'EduConnect',
    },
    description: {
      ar: 'منصة تعليمية تفاعلية باستخدام React و Supabase، مشروع تخرجي.',
      en: 'Interactive learning platform built with React and Supabase – my graduation project.',
    },
    slug: 'educonnect',
    stack: ['React', 'Supabase', 'Tiptap'],
  },
];

export default function ProjectsSection({ lang }) {
  const isAr = lang === 'ar';

  return (
    <FadeInSection>
      <section
        id="projects"
        className="w-full px-6 py-24 max-w-7xl mx-auto scroll-mt-20"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          {isAr ? 'مشاريعي' : 'My Projects'}
        </h2>

        <div className="w-20 h-1 mx-auto bg-accent rounded-full mb-12" />

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${isAr ? 'direction-rtl' : ''
            }`}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug || project.link}
              project={project}
              index={index}
              lang={lang}
            />
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}
