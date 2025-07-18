'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LangSwitch from '@/components/ui/LangSwitch';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { X } from 'lucide-react';
import Link from 'next/link';

export default function MobileSidebar({ children, lang }) {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);
  const isAr = lang === 'ar';

  // 🛑 منع التمرير عند الفتح
  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [open]);

  // ❌ الإغلاق عند الضغط خارج القائمة
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
      {/* زر الفتح */}
      <div onClick={() => setOpen(true)}>{children}</div>

      {/* القائمة */}
      <AnimatePresence>
        {open && (
          <>
            {/* خلفية مظللة */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* القائمة الجانبية */}
            <motion.aside
              key="sidebar"
              ref={sidebarRef}
              initial={{ x: isAr ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: isAr ? '-100%' : '100%' }}
              transition={{ duration: 0.3 }}
              className={`fixed top-0 ${isAr ? 'left-0' : 'right-0'} w-3/4 max-w-sm h-full bg-background text-text z-50 shadow-xl p-6 space-y-8`}
            >
              {/* رأس القائمة */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">{isAr ? 'روابط التنقل' : 'Navigation'}</h3>
                <X className="w-6 h-6 cursor-pointer" onClick={() => setOpen(false)} />
              </div>

              {/* روابط التنقل */}
              <motion.nav
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                className="flex flex-col gap-4 text-base font-medium"
              >
                {[
                  { label: isAr ? 'الرئيسية' : 'Home', href: `/${lang}/` },
                  { label: isAr ? 'مشاريعي' : 'Projects', href: `/${lang}/projects` },
                  { label: isAr ? 'من أنا' : 'About', href: `/${lang}/about` },
                  { label: isAr ? 'تواصل' : 'Contact', href: `/${lang}/contact` },
                ].map((item) => (
                  <motion.div
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, x: isAr ? -20 : 20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    <Link
                      href={item.href}
                      className="hover:text-accent"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* خيارات أخرى */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-4"
              >
                <ThemeToggle />
                <LangSwitch currentLang={lang} />
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
