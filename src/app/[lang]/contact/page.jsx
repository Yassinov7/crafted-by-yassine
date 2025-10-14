import IntroSection from '@/components/layout/IntroSection';
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
  const isAr = params?.lang === 'ar';
  const title = isAr ? 'دعنا نبدأ الحديث' : 'Let’s Start the Conversation';
  const description = isAr
    ? 'هل لديك فكرة مشروع؟ استفسار؟ أو ترغب فقط بالدردشة؟ يسعدني الاستماع إليك والتعاون معك في مشاريع مميزة.'
    : 'Got a project idea, question, or just want to say hi? I’m excited to hear from you and explore great opportunities together.';
  const tagline = isAr
    ? '✦ التواصل هو أول خطوة نحو التعاون الناجح ✦'
    : '✦ Communication is the first step toward successful collaboration ✦';

  return (
    <main className="px-6 py-12 space-y-20 max-w-7xl mx-auto">
      <IntroSection lang={params?.lang} title={title} description={description} tagline={tagline} />
      <SectionDivider />
      <ContactSectionForm lang={params?.lang} />
    </main>
  );
}