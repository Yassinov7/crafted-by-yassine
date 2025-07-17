import { Github, Linkedin, Instagram, Phone } from 'lucide-react';
import ContactForm from '@/components/sections/ContactForm';

export default function ContactSection({ lang }) {
  const isAr = lang === 'ar';

  return (
    <section id="contact" className="w-full px-6 py-20 bg-background text-text max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        {isAr ? 'تواصل معي' : 'Get in Touch'}
      </h2>

      {/* روابط التواصل */}
      <div className="flex justify-center gap-6 mb-10 text-accent text-2xl">
        <a href="https://github.com/Yassinov7" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
        <a href="https://linkedin.com/in/yassinov7" target="_blank" rel="noopener noreferrer">
          <Linkedin />
        </a>
        <a href="https://wa.me/your_number" target="_blank" rel="noopener noreferrer">
          <Phone />
        </a>
        <a href="https://instagram.com/your_username" target="_blank" rel="noopener noreferrer">
          <Instagram />
        </a>
      </div>

      {/* النموذج الديناميكي */}
      <ContactForm lang={lang} />
    </section>
  );
}
