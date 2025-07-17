import Header from '@/components/layout/Header';
import TransitionWrapper from '@/components/layout/TransitionWrapper';
import NavLinks from '@/components/layout/Navlinks';
import CustomHead from '@/components/layout/CustomHead';

export default function LangLayout({
  children,
  params,
}) {
  const isArabic = params.lang === 'ar';

  return (
    <div dir={isArabic ? 'rtl' : 'ltr'} className={isArabic ? 'font-arabic' : 'font-english'}>
      <CustomHead lang={params.lang} />
      <TransitionWrapper />
      <Header lang={params.lang} />
      <div className="px-6 py-2 border-b bg-background text-text sticky top-[64px] z-40">
        <NavLinks lang={params.lang} />
      </div>
      {children}
    </div>
  );
}
