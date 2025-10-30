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
        className="w-full px-6 py-12 max-w-7xl mx-auto scroll-mt-20 bg-muted/10 rounded-2xl"
      >
        {/* العنوان */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          {isAr ? 'نموذج التواصل' : 'Contact Form'}
        </h2>
        <div className="w-20 h-1 mx-auto bg-accent rounded-full mb-4" />

        {/* وصف صغير */}
        <p className="text-center text-muted mb-8 text-sm sm:text-base">
          {isAr
            ? 'املأ النموذج أدناه للتواصل معي مباشرة'
            : 'Fill out the form below to contact me directly'}
        </p>

        {/* Response Time Information */}
        <FadeInSection delay={100}>
          <div className="bg-background border border-muted rounded-xl p-6 mb-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-accent mb-2 text-center">
              {isAr ? 'أوقات الاستجابة' : 'Response Times'}
            </h3>
            <p className="text-center text-muted mb-3">
              {isAr
                ? 'عادة أرد على الرسائل خلال 24 ساعة في أيام الأسبوع'
                : 'I typically respond to messages within 24 hours on weekdays'}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm">{isAr ? 'واتساب: فوري' : 'WhatsApp: Immediate'}</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <span className="text-sm">{isAr ? 'البريد: 24 ساعة' : 'Email: 24 hours'}</span>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* روابط التواصل */}
        <FadeInSection delay={150}>
          <div className="flex justify-center gap-6 mb-12 text-background text-2xl">
            <a
              href="https://github.com/Yassinov7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-gray-400 transition transform bg-accent p-2 rounded-full shadow-md"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/yassinov"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-blue-500 transition transform bg-accent p-2 rounded-full shadow-md"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href={`https://wa.me/963998246359?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-green-500 transition transform bg-accent p-2 rounded-full shadow-md"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://instagram.com/yassinov.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-[#E1306C] transition transform bg-accent p-2 rounded-full shadow-md"
              aria-label="Instagram"
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