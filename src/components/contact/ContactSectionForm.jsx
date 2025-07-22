'use client';

import ContactForm from '@/components/homepage/ContactForm';
import { FaGithub, FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';
import FadeInSection from '@/components/motion/FadeInSection';

export default function ContactSectionForm({ lang }) {
  const isAr = lang === 'ar';
  const message = isAr
    ? 'مرحبًا م. محمد ياسين، رأيت موقعك الشخصي وأرغب بالتواصل معك بشأن مشروع 🌟'
    : 'Hi Eng. Mohammad Yassine, I visited your website and would like to discuss a project 🌟';

  return (
    <FadeInSection>
      <section
        id="contact-form"
        className="w-full px-6 py-24 max-w-7xl mx-auto scroll-mt-20 bg-muted/10 rounded-2xl"
      >
        {/* العنوان */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            {isAr ? 'نموذج التواصل' : 'Contact Form'}
        </h2>
        <div className="w-20 h-1 mx-auto bg-accent rounded-full mb-4" />


        {/* وصف صغير */}
        <p className="text-center text-muted mb-12 text-sm sm:text-base">
          {isAr
            ? 'املأ النموذج أدناه للتواصل معي مباشرة'
            : 'Fill out the form below to contact me directly'}
        </p>

        {/* روابط التواصل */}
        <FadeInSection delay={100}>
          <div className="flex justify-center gap-6 mb-12 text-background text-2xl">
            <a
              href="https://github.com/Yassinov7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-gray-400 transition transform bg-accent p-2 rounded-full shadow-md"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-yassine-70499921a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-blue-500 transition transform bg-accent p-2 rounded-full shadow-md"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href={`https://wa.me/963935787445?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-green-500 transition transform bg-accent p-2 rounded-full shadow-md"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://instagram.com/mhmmdyassine"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-[#E1306C] transition transform bg-accent p-2 rounded-full shadow-md"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </FadeInSection>

        {/* نموذج التواصل */}
        <FadeInSection delay={200}>
          <ContactForm lang={lang} />
        </FadeInSection>
      </section>
    </FadeInSection>
  );
}
