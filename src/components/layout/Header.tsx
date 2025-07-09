// src/components/layout/Header.tsx

import Link from 'next/link';
import LangSwitch from '@/components/ui/LangSwitch';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Header({ lang }: { lang: 'ar' | 'en' }) {
  return (
    <header className="w-full px-6 py-4 border-b flex justify-between items-center bg-background text-text sticky top-0 z-50">
      <Link href={`/${lang}`} className="text-xl font-bold">
        Crafted by Yassine
      </Link>

      <div className="flex items-center gap-3">
        <LangSwitch currentLang={lang} />
        <ThemeToggle />
      </div>
    </header>
  );
}
