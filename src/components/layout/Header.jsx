'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LangSwitch from '@/components/ui/LangSwitch';
import ThemeToggle from '@/components/ui/ThemeToggle';
import MobileSidebar from '@/components/layout/MobileSidebar';
import { Menu } from 'lucide-react';
import clsx from 'clsx';

export default function Header({ lang }) {
  const isAr = lang === 'ar';
  const pathname = usePathname();

  const navLinks = [
    { href: `/${lang}/`, label: isAr ? 'الرئيسية' : 'Home' },
    { href: `/${lang}/projects`, label: isAr ? 'مشاريعي' : 'Projects' },
    { href: `/${lang}/about`, label: isAr ? 'من أنا' : 'About' },
    { href: `/${lang}/contact`, label: isAr ? 'تواصل' : 'Contact' },
  ];

  return (
    <header className="h-16 w-full px-6 py-4 border-b bg-background text-text sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href={`/${lang}`} className="text-xl font-bold tracking-wide" style={{ fontFamily: 'font-logo' }}>
          Crafted by Yassine
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'transition-colors hover:text-accent',
                pathname === link.href && 'text-accent'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Language + Theme */}
        <div className="hidden md:flex items-center gap-3">
          <LangSwitch currentLang={lang} />
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <MobileSidebar lang={lang}>
            <Menu className="w-6 h-6 cursor-pointer" />
          </MobileSidebar>
        </div>
      </div>
    </header>
  );
}
