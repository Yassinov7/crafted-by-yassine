'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LangSwitch from '@/components/ui/LangSwitch';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { X } from 'lucide-react';
import Link from 'next/link';

export default function MobileSidebar({ children, lang }) {
  const [open, setOpen] = useState(false);
  const isAr = lang === 'ar';
  const sidebarRef = useRef(null);

  // منع التمرير
  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [open]);

  // إغلاق عند الضغط خارج القائمة
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <>
      <div onClick={() => setOpen(true)}>{children}</div>

      <AnimatePresence>
        {open && (
          <>
            {/* الخلفية المظللة */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[90]"
            />

            {/* القائمة الجانبية */}
            <motion.aside
              ref={sidebarRef}
              initial={{ x: isAr ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: isAr ? '-100%' : '100%' }}
              transition={{ duration: 0.3 }}
              className={`fixed top-0 ${isAr ? 'left-0' : 'right-0'} w-1/2 h-full bg-background text-text z-[100] shadow-lg p-6 space-y-6`}
            >
              <div className="flex justify-between">
                <h3>{isAr ? ' روابط الأنتقال ' : 'Nav Links'}</h3>
                <X className="w-6 h-6 cursor-pointer" onClick={() => setOpen(false)} />
              </div>

              <nav className="flex flex-col gap-4 text-lg font-medium">
                <Link href={`/${lang}/`} className="hover:text-accent">
                  {isAr ? 'الرئيسية' : 'Home'}
                </Link>
                <Link href={`/${lang}/projects`} className="hover:text-accent">
                  {isAr ? 'مشاريعي' : 'Projects'}
                </Link>
                <Link href={`/${lang}/about`} className="hover:text-accent">
                  {isAr ? 'من أنا' : 'About'}
                </Link>
                <Link href={`/${lang}/contact`} className="hover:text-accent">
                  {isAr ? 'تواصل' : 'Contact'}
                </Link>
              </nav>

              <div className="flex flex-col gap-4">
                <ThemeToggle />
                <LangSwitch currentLang={lang} />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
