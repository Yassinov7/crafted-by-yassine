import Link from 'next/link';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

export default function Footer({ lang }) {
  const isAr = lang === 'ar';

  const links = [
    { href: `/${lang}/`, label: isAr ? 'الصفحة الرئيسية' : 'Home Page' },
    { href: `/${lang}/projects`, label: isAr ? 'مشاريعي' : 'Projects' },
    { href: `/${lang}/about`, label: isAr ? 'عنّي' : 'About' },
    { href: `/${lang}/contact`, label: isAr ? 'تواصل' : 'Contact' },
  ];

  const social = [
    { href: 'https://github.com/Yassinov7', icon: <Github size={20} /> },
    { href: 'https://www.linkedin.com/in/mohammed-yassine-70499921a', icon: <Linkedin size={20} /> },
    { href: 'mailto:02m.yassine@gmail.com', icon: <Mail size={20} /> },
    { href: 'https://instagram.com/mhmmdyassine', icon: <Instagram size={20} /> },
  ];

  return (
    <footer className="mt-24 border-t border-text py-10 px-6 text-sm bg-background text-text">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* شعار الموقع */}
        <div className="tracking-wide text-xl" style={{ fontFamily: 'font-logo' }}>
          Crafted by Yassine
        </div>

        {/* روابط التنقل */}
        <div className="flex gap-4">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-accent transition">
              {label}
            </Link>
          ))}
        </div>

        {/* روابط السوشال */}
        <div className="flex gap-3">
          {social.map(({ href, icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent transition"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* الحقوق */}
      <div className="mt-6 text-center text-xs text-text">
        © {new Date().getFullYear()} {isAr ? 'جميع الحقوق محفوظة' : 'All rights reserved'}
      </div>
    </footer>
  );
}
