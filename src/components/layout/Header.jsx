import Link from 'next/link';
import LangSwitch from '@/components/ui/LangSwitch';
import ThemeToggle from '@/components/ui/ThemeToggle';
import MobileSidebar from '@/components/layout/MobileSidebar';
import { Menu } from 'lucide-react';

export default function Header({ lang }) {
  const isAr = lang === 'ar';

  return (
    <header className="h-16 w-full px-6 py-4 border-b bg-background text-text sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href={`/${lang}`} className="text-xl font-bold tracking-wide" style={{ fontFamily: 'font-logo' }}>
          Crafted by Yassine
        </Link>

        {/* الروابط - تظهر فقط في الشاشات الكبيرة */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href={`/${lang}/`} className="hover:text-accent">
            {isAr ? 'الرئيسية' : 'Home'}
          </Link>
          <Link href={`/${lang}/about`} className="hover:text-accent">
            {isAr ? 'من أنا' : 'About'}
          </Link>
          <Link href={`/${lang}/projects`} className="hover:text-accent">
            {isAr ? 'مشاريعي' : 'Projects'}
          </Link>
          <Link href={`/${lang}/contact`} className="hover:text-accent">
            {isAr ? 'تواصل' : 'Contact'}
          </Link>
        </nav>

        {/* اللغة والثيم - تظهر في الشاشات الكبيرة */}
        <div className="hidden md:flex items-center gap-3">
          <LangSwitch currentLang={lang} />
          <ThemeToggle />
        </div>

        {/* زر القائمة الجانبية - يظهر فقط في الشاشات الصغيرة */}
        <div className="md:hidden">
          <MobileSidebar lang={lang}>
            <Menu className="w-6 h-6 cursor-pointer" />
          </MobileSidebar>
        </div>
      </div>
    </header>
  );
}
