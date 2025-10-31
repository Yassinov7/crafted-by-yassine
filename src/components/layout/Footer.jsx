import Link from 'next/link';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { Facebook, Whatsapp } from 'iconoir-react';

export default function Footer({ lang }) {
  const isAr = lang === 'ar';
  const message = isAr
    ? 'مرحبًا م. محمد ياسين، رأيت موقعك الشخصي وأرغب بالتواصل معك بشأن مشروع 🌟'
    : 'Hi Eng. Mohammad Yassine, I visited your website and would like to discuss a project 🌟';

  const links = [
    { href: `/${lang}/`, label: isAr ? 'الرئيسية' : 'Home' },
    { href: `/${lang}/projects`, label: isAr ? 'مشاريعي' : 'Projects' },
    { href: `/${lang}/services`, label: isAr ? 'خدماتي' : 'Services' },
    { href: `/${lang}/blog`, label: isAr ? 'سطوري' : 'Code Lines' },
    { href: `/${lang}/about`, label: isAr ? 'عنّي' : 'About' },
    { href: `/${lang}/contact`, label: isAr ? 'تواصل' : 'Contact' },
  ];

  const social = [
    { href: 'https://github.com/Yassinov7', icon: <Github size={20} /> },
    { href: 'https://www.linkedin.com/in/yassinov', icon: <Linkedin size={20} /> },
    { href: 'mailto:02m.yassine@gmail.com', icon: <Mail size={20} /> },
    { href: 'https://www.facebook.com/YASSINOVdev', icon: <Facebook size={20} /> },
    { href: `https://wa.me/963998246359?text=${encodeURIComponent(message)}`, icon: <Whatsapp size={20} /> },
    { href: 'https://instagram.com/yassinov.dev', icon: <Instagram size={20} /> },
  ];

  return (
    <footer className="mt-24 border-t border-text py-10 px-6 text-sm bg-background text-text">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="tracking-wide text-xl font-bold" style={{ fontFamily: 'font-logo' }}>
            Yassinov.dev
          </div>

          {/* علم سوريا بإطار برتقالي */}
          <div className="border border-accent  ">
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
function Star() {
  return (
    <polygon
      points="5,0 6.5,3.5 10,4 7,6.5 8,10 5,8 2,10 3,6.5 0,4 3.5,3.5"
      fill="#D72828"
    />
  );
}
