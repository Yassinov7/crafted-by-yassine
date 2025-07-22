'use client';

import FadeInSection from '@/components/motion/FadeInSection';

export default function ContactIntroSection({ lang }) {
  const isAr = lang === 'ar';

  return (
    <section
      id="contact-intro"
      className="w-full px-6 py-24 max-w-5xl mx-auto scroll-mt-20 text-center"
    >
      <FadeInSection>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          {isAr ? 'دعنا نبدأ الحديث' : 'Let’s Start the Conversation'}
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          {isAr
            ? 'هل لديك فكرة مشروع؟ استفسار؟ أو ترغب فقط بالدردشة؟ يسعدني الاستماع إليك والتعاون معك في مشاريع مميزة.'
            : 'Got a project idea, question, or just want to say hi? I’m excited to hear from you and explore great opportunities together.'}
        </p>
      </FadeInSection>
    </section>
  );
}
