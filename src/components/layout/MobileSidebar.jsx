'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LangSwitch from '@/components/ui/LangSwitch';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { X } from 'lucide-react';
import Link from 'next/link';


export default function MobileSidebar({ children, lang }) {
  const [open, setOpen] = useState(false);
  const isAr = lang === 'ar';

  return (
    <>
      {/* زر فتح القائمة */}
      <div onClick={() => setOpen(true)}>
        {children}
      </div>

      {/* القائمة */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: isAr ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: isAr ? '-100%' : '100%' }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 ${isAr ? 'left-0' : 'right-0'} w-3/4 h-full bg-background text-text z-[100] shadow-lg p-6 space-y-6`}
          >
            {/* زر إغلاق */}
            <div className="flex justify-end">
              <X className="w-6 h-6 cursor-pointer" onClick={() => setOpen(false)} />
            </div>

            {/* الروابط */}
            <nav className="flex flex-col gap-4 text-lg font-medium">
              <Link href={`/${lang}/about`} className="hover:text-accent">
                {lang === 'ar' ? 'من أنا' : 'About'}
              </Link>
              <Link href={`/${lang}/projects`} className="hover:text-accent">
                {lang === 'ar' ? 'مشاريعي' : 'Projects'}
              </Link>
              <Link href={`/${lang}/contact`} className="hover:text-accent">
                {lang === 'ar' ? 'تواصل' : 'Contact'}
              </Link>
            </nav>

            {/* اللغة والثيم */}
            <div className="flex gap-4">
              <LangSwitch currentLang={lang} />
              <ThemeToggle />
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
