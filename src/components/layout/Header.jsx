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
    { href: `/${lang}/blog`, label: isAr ? 'سطوري' : 'Code Lines' },
    { href: `/${lang}/about`, label: isAr ? 'من أنا' : 'About' },
    { href: `/${lang}/contact`, label: isAr ? 'تواصل' : 'Contact' },
  ];

  return (
    <header className="h-16 w-full px-6 py-4 border-b bg-background text-text sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center gap-2 group">
          <span
            className="text-2xl font-bold tracking-wide text-accent group-hover:text-text transition-colors"
            style={{ fontFamily: 'font-logo' }}
          >
            Yassinov.dev
          </span>

          <div className="border border-accent transition-transform group-hover:scale-105">
            <svg width="36" height="24" viewBox="0 0 54 36" xmlns="http://www.w3.org/2000/svg">
              <rect width="54" height="12" fill="#009639" />
              <rect y="12" width="54" height="12" fill="#ffffff" />
              <rect y="24" width="54" height="12" fill="#000000" />
              <g transform="translate(8, 13)">
                <polygon
                  points="5,0 6.5,3.5 10,4 7,6.5 8,10 5,8 2,10 3,6.5 0,4 3.5,3.5"
                  fill="#D72828"
                />
              </g>
              <g transform="translate(23, 13)">
                <polygon
                  points="5,0 6.5,3.5 10,4 7,6.5 8,10 5,8 2,10 3,6.5 0,4 3.5,3.5"
                  fill="#D72828"
                />
              </g>
              <g transform="translate(38, 13)">
                <polygon
                  points="5,0 6.5,3.5 10,4 7,6.5 8,10 5,8 2,10 3,6.5 0,4 3.5,3.5"
                  fill="#D72828"
                />
              </g>
            </svg>
          </div>
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

// function Star() {
//   return (
//     <polygon
//       points="5,0 6.5,3.5 10,4 7,6.5 8,10 5,8 2,10 3,6.5 0,4 3.5,3.5"
//       fill="#D72828"
//     />
//   );
// }
