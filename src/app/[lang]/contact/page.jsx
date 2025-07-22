import ContactIntroSection from '@/components/contact/ContactIntroSection';
import ContactSectionForm from '@/components/contact/ContactSectionForm';
import SectionDivider from '@/components/layout/SectionDivider';

export async function generateMetadata({ params }) {
  const lang = params?.lang || 'en';
  const isAr = lang === 'ar';
    return {
      title: isAr ? 'تواصل معي | ياسينوف' : 'Contact | Yassinov',
      description: isAr
        ? 'هل لديك فكرة أو مشروع؟ لا تتردد بالتواصل معي عبر النموذج أو وسائل التواصل.'
        : 'Got a project or idea? Feel free to reach out via form or socials.',
      openGraph: {
        title: isAr ? 'تواصل مع محمد ياسين' : 'Contact Mohammad Yassine',
        description: isAr
          ? 'صفحة التواصل الرسمية مع م. محمد ياسين.'
          : 'Official contact page for Mohammad Yassine.',
        url: 'https://crafted-by-yassine.vercel.app/contact',
        images: [{ url: '/preview.png', width: 800, height: 600 }],
        locale: isAr ? 'ar_AR' : 'en_US',
        type: 'website',
      },
    };
  }
export default function ContactPage({ params }) {
  const { lang } = params;
  

  return (
    <>
      <ContactIntroSection lang={lang} />
      <SectionDivider />
      <ContactSectionForm lang={lang} />
    </>
  );
}