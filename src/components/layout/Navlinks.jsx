'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


export default function NavLinks({ lang }) {
  const pathname = usePathname();
  const [active, setActive] = useState(null);

  // 1️⃣ تحديد الأقسام حسب الصفحة
  const sections = (() => {
    if (pathname?.includes('/projects')) {
      return [
        { id: 'intro', label: lang === 'ar' ? '#' : '#' },
        { id: 'tech', label: lang === 'ar' ? 'التقنيات' : 'Technologies' },
        { id: 'projects', label: lang === 'ar' ? 'المشاريع' : 'Projects' },
        { id: 'extra', label: lang === 'ar' ? 'فلسفتي الخاصة' : 'My Philosophy' },
      ];
    }

    if (pathname?.includes('/blog')) {
      return [
        { id: 'intro', label: lang === 'ar' ? '#' : '#' },
        { id: 'posts', label: lang === 'ar' ? 'مقالات' : 'Posts' },
      ];
    }
    if (pathname?.includes('/about')) {
      return [
        { id: 'intro', label: lang === 'ar' ? '#' : '#' },
        { id: 'timeline', label: lang === 'ar' ? 'رحلتي' : 'My Story' },
        { id: 'cert', label: lang === 'ar' ? 'شهاداتي' : 'Certifications' },
        { id: 'goal', label: lang === 'ar' ? 'رؤيتي' : 'My Vision' },
      ];
    }
    if (pathname?.includes('/contact')) {
      return [
        { id: 'intro', label: lang === 'ar' ? '#' : '#' },
        { id: 'contact-form', label: lang === 'ar' ? 'التواصل' : 'Contact' },

      ];
    }

    // الصفحة الرئيسية
    return [
      { id: 'hero', label: lang === 'ar' ? '#' : '#' },
      { id: 'about', label: lang === 'ar' ? 'من أنا؟ ' : 'Who Am I?' },
      { id: 'projects', label: lang === 'ar' ? 'مشاريعي' : 'Projects' },
      { id: 'timeline', label: lang === 'ar' ? 'رحلتي' : 'Journey' },
      { id: 'skills', label: lang === 'ar' ? 'مهاراتي' : 'Skills' },
      { id: 'contact', label: lang === 'ar' ? 'تواصل معي' : 'Contact' },
    ];
  })();

  // 2️⃣ منطق تمييز العنصر النشط
  useEffect(() => {
    const handleScroll = () => {
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <nav className="flex gap-4 text-sm font-medium">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={clsx(
            'transition hover:text-accent',
            active === id && 'text-accent font-bold'
          )}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
