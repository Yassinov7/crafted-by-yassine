'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import ProjectCard from '@/components/projects/ProjectCard';
import projects from '@/lib/projects';

export default function ProjectsList({ lang }) {
  const isAr = lang === 'ar';

  return (
    <section className="py-16 max-w-6xl mx-auto px-6 scroll-mt-20" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={clsx('text-3xl sm:text-4xl font-bold text-center text-text mb-4', isAr ? 'rtl' : 'ltr')}
      >
        {isAr ? 'المشاريع' : 'Projects'}
      </motion.h2>
      <div className="w-20 h-1 mx-auto bg-accent rounded-full mb-6" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
}