import '@/app/globals.css';
import Header from '@/components/layout/Header';
import TransitionWrapper from '@/components/layout/TransitionWrapper';

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
      <body className={isArabic ? 'font-arabic' : 'font-english'}>
        <TransitionWrapper />
        <Header lang={params.lang} />
        {children}
      </body>
    </html>
  );
}
