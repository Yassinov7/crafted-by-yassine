'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function Intro({ lang }) {
  const isAr = lang === 'ar';

  const title = isAr
    ? 'أعمالي البرمجية'
    : 'My Development Work';

  const description = isAr
    ? 'كل مشروع أعمل عليه ينبض بالتفاصيل، السرعة، والوضوح. تصفح أعمالي واكتشف كيف تتحول الأفكار إلى تجارب.'
    : 'Every project I create is built with intention: speed, clarity, and beauty. Explore my work and discover how ideas become experiences.';

  const tagline = isAr
    ? '✦ الجودة تبدأ من أول سطر كود ✦'
    : '✦ Quality begins with the first line of code ✦';

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={clsx(
        'text-center space-y-4 py-12 px-4',
        isAr ? 'rtl' : 'ltr'
      )}
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-text">
        {title}
      </h1>

      <p className="text-lg sm:text-xl text-text max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>

      <div className="text-sm text-text opacity-70">{tagline}</div>
    </motion.section>
  );
}
