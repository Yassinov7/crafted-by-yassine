'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

type Section = {
  id: string;
  label: string;
};

type Props = {
  lang: 'ar' | 'en';
  sections: Section[]; // 👈 تمرير الأقسام من الخارج
};

export default function NavLinks({ sections }: Props) {
  const [active, setActive] = useState<string | null>(null);

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
