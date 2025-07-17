// src/components/layout/Header.tsx

import Link from 'next/link';
import LangSwitch from '@/components/ui/LangSwitch';
import ThemeToggle from '@/components/ui/ThemeToggle';
import MobileSidebar from '@/components/layout/MobileSidebar';
import { Menu } from 'lucide-react';

export default function Header({ lang }) {
  return (
    <header className="h-16 w-full px-6 py-4 border-b bg-background text-text sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href={`/${lang}`} className="text-xl font-bold">
          Crafted by Yassine
        </Link>

        {/* عناصر التحكم بالحجم الكبير */}
        <div className="hidden md:flex items-center gap-3">
          <LangSwitch currentLang={lang} />
          <ThemeToggle />
        </div>

        {/* زر الموبايل */}
        <div className="md:hidden">
          <MobileSidebar lang={lang}>
            <Menu className="w-6 h-6 cursor-pointer" />
          </MobileSidebar>
        </div>
      </div>
    </header>
  );
}
