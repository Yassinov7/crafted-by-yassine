'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] === 'ar' ? 'ar' : 'en';
  const isAr = lang === 'ar';

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background text-text">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        <motion.h1
          className="text-6xl font-bold"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          404
        </motion.h1>

        <motion.p
          className="text-lg text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {isAr ? 'الصفحة غير موجودة 😢' : 'Page not found 😢'}
        </motion.p>

        <Link
          href={`/${lang}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-accent text-accent hover:bg-accent/10 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          {isAr ? 'العودة إلى الرئيسية' : 'Back to Home'}
        </Link>
      </motion.div>
    </div>
  );
}
