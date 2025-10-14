'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, FileQuestion } from 'lucide-react';

export default function NotFound() {
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] === 'ar' ? 'ar' : 'en';
  const isAr = lang === 'ar';

  const title = isAr ? 'الصفحة غير موجودة' : 'Page Not Found';
  const description = isAr
    ? 'عذراً، الصفحة التي تبحث عنها غير موجودة أو قد تم نقلها.'
    : 'Sorry, the page you are looking for does not exist or has been moved.';
  const tagline = isAr
    ? '✦ كل مسار له بداية ونهاية، لكن رحلتك مستمرة ✦'
    : '✦ Every path has a beginning and an end, but your journey continues ✦';

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background text-text">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6 max-w-md"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1 }}
          className="mx-auto w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center"
        >
          <FileQuestion className="w-8 h-8 text-blue-500" />
        </motion.div>

        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-lg text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>

        <motion.p
          className="text-sm text-muted opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {tagline}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href={`/${lang}/projects`}
            className="px-4 py-2 rounded-xl bg-accent text-background hover:bg-accent/80 transition inline-flex items-center justify-center"
          >
            {isAr ? 'مشاريعي' : 'My Projects'}
          </Link>

          <Link
            href={`/${lang}`}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-accent text-accent hover:bg-accent/10 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            {isAr ? 'العودة إلى الرئيسية' : 'Back to Home'}
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}