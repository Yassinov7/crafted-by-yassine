// src/components/sections/ProjectsSection.tsx

import FadeInSection from '@/components/motion/FadeInSection';

const sampleProjects = [
  {
    title: 'Khadmati KW',
    description: {
      ar: 'منصة لعرض الخدمات والعروض في الكويت بواجهة أنيقة وسريعة.',
      en: 'A platform to showcase services and offers in Kuwait with a fast, elegant UI.',
    },
    link: 'https://khadmatikw.com',
  },
  {
    title: 'UniRide',
    description: {
      ar: 'نظام متكامل لتنظيم تنقل الطلاب والمشرفين بين الجامعات والمناطق.',
      en: 'A full system for managing student-supervisor rides across universities.',
    },
    link: '#',
  },
];

export default function ProjectsSection({ lang }) {
  const isAr = lang === 'ar';

  return (
    <FadeInSection>
      <section id="projects" className="w-full px-6 py-20 bg-muted/10 text-text max-w-7xl mx-auto scroll-mt-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
          {isAr ? 'مشاريعي' : 'My Projects'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {sampleProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-muted p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted text-sm">
                {isAr ? project.description.ar : project.description.en}
              </p>
            </a>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}
