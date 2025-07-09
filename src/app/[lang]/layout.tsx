import '@/app/globals.css';
import Header from '@/components/layout/Header';
import TransitionWrapper from '@/components/layout/TransitionWrapper';
import NavLinks from '@/components/layout/Navlinks';

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: 'ar' | 'en' };
}) {
  const isArabic = params.lang === 'ar';

  return (
    <html lang={params.lang} dir={isArabic ? 'rtl' : 'ltr'}>
      <body>
        <TransitionWrapper />
        <Header lang={params.lang} />
        <div className="px-6 py-2 border-b bg-background text-text sticky top-[64px] z-40">
          <NavLinks 
          lang={params.lang} 
          sections={[
            { id: 'about', label: params.lang === 'ar' ? 'عنّي' : 'About' },
            { id: 'projects', label: params.lang === 'ar' ? 'المشاريع' : 'Projects' },
            { id: 'contact', label: params.lang === 'ar' ? 'تواصل' : 'Contact' },
          ]}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
