'use client';

import FadeInSection from '@/components/motion/FadeInSection';
import ProjectCard from '@/components/projects/ProjectCard';
import projects from '@/lib/projects';

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
