// src/app/[lang]/layout.tsx
import '../globals.css'; // Important to bring in Tailwind and your styles
import { Noto_Kufi_Arabic, Changa, El_Messiri, Anton } from 'next/font/google';
import Header from '@/components/layout/Header';
import TransitionWrapper from '@/components/layout/TransitionWrapper';
import NavLinks from '@/components/layout/Navlinks';
import CustomHead from '@/components/layout/CustomHead';
import Footer from '@/components/layout/Footer';

const arabicFont = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-arabic',
});
const englishFont = El_Messiri({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-english',
});
export const logoFont = Anton({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-logo',
});

export default function LangLayout({ children, params }) {
  const isArabic = params.lang === 'ar';

  return (
    <html lang={params.lang} dir={isArabic ? 'rtl' : 'ltr'}>
      <body className={`${logoFont.variable} ${isArabic ? arabicFont.variable : englishFont.variable}`}>
        <CustomHead lang={params.lang} />
        <TransitionWrapper />
        <Header lang={params.lang} />
        <div className="px-6 py-2 border-b bg-background text-text sticky top-[64px] z-40">
          <NavLinks lang={params.lang} />
        </div>
        {children}
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
