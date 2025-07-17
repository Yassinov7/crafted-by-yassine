'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function Intro({ lang }) {
  const isAr = lang === 'ar';

  const title = isAr
    ? 'أعمالي البرمجية'
    : 'My Development Work';

  const description = isAr
    ? 'أصنع مشاريع عالية الجودة تركز على الأداء، التجربة، والتصميم. إليك بعض ما قمت ببنائه من أفكار وتحويلها إلى واقع.'
    : 'I craft high-quality projects focused on performance, experience, and design. Here are some of the things I brought to life.';

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={clsx('text-center space-y-4', isAr ? 'rtl' : 'ltr')}
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-text">
        {title}
      </h1>
      <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </motion.section>
  );
}
