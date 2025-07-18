'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import Button from '@/components/ui/Button';
const projects = [
  {
    title: { ar: 'منصة EduConnect', en: 'EduConnect Platform' },
    description: {
      ar: 'منصة تفاعلية لتعليم البرمجة باستخدام React وSupabase.',
      en: 'An interactive platform for learning coding using React and Supabase.',
    },
    link: 'https://educonnect-sigma.vercel.app/',
    stack: ['React', 'Supabase', 'Tailwind'],
  },
  {
    title: { ar: 'ستلايت الرجاء', en: 'Satellite Alrajaa' },
    description: {
      ar: 'منصة لعرض الخدمات والعروض، اضافة لمدونة خاصة في الكويت، مبنية باستخدام Next وSupabase.',
      en: 'An interactive platform for showcase of services and offers, it includes a blog in Kuwait, coded using Next and Supabase.',
    },
    link: 'https://satellitealrajaa.com/',
    stack: ['Next', 'Supabase', 'Tailwind'],
  },
];

export default function ProjectsList({ lang }) {
  const isAr = lang === 'ar';

  return (
    <section className="py-16 max-w-6xl mx-auto px-6 scroll-mt-20" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={clsx('text-2xl font-bold text-center mb-12 text-text', isAr ? 'rtl' : 'ltr')}
      >
        {isAr ? 'المشاريع' : 'Projects'}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.link}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl border bg-background p-6 shadow-sm hover:shadow-lg transition duration-300 flex flex-col justify-between text-text"
          >
            <div>
              <h3 className="text-lg font-semibold mb-2 text-accent">
                {project.title[lang]}
              </h3>
              <p className="text-sm mb-4 leading-relaxed text-text">
                {project.description[lang]}
              </p>
              <div className="flex flex-wrap gap-2 text-xs mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-accent/90 text-white rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-end">
              <Button
                as="a"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline" // أو "default" حسب التصميم
                className="text-sm"
              >
                {isAr ? 'عرض المشروع →' : 'View Project →'}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
