import ContactIntroSection from '@/components/contact/ContactIntroSection';
import ContactSectionForm from '@/components/contact/ContactSectionForm';
import SectionDivider from '@/components/layout/SectionDivider'
export default function ContactPage({ params }) {
  const { lang } = params;

  return (
    <>
      <ContactIntroSection lang={lang}/>
      <SectionDivider/>
      <ContactSectionForm lang={lang}/>
    </>
  );
}
