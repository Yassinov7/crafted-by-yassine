'use client';

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiSupabase,
  SiGit,
  SiGithub,
  SiNextdotjs
} from 'react-icons/si';

import { motion } from 'framer-motion';
import clsx from 'clsx';



const technologies = [
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss3 },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React', icon: SiReact },
  { name: 'Next', icon: SiNextdotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Supabase', icon: SiSupabase },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
];

export default function Technologies({ lang }) {
  const isAr = lang === 'ar';
  const title = isAr ? 'التقنيات التي أستخدمها' : 'Technologies I Use';

  return (
    <section className="py-16 max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={clsx('text-2xl font-bold text-center mb-10', isAr ? 'rtl' : 'ltr')}
      >
        {title}
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {technologies.map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center justify-center p-4 rounded-xl border hover:shadow-md transition bg-background text-text"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Icon className="w-8 h-8 mb-2 text-accent" />
              <span className="text-sm font-medium">{tech.name}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
