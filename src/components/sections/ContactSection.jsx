import ContactForm from '@/components/sections/ContactForm';
import { FaGithub, FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function ContactSection({ lang }) {
  const isAr = lang === 'ar';
  const message = isAr
    ? 'مرحبًا م. محمد ياسين، رأيت موقعك الشخصي وأرغب بالتواصل معك بشأن مشروع 🌟'
    : 'Hi Eng. Mohammad Yassine, I visited your website and would like to discuss a project 🌟';

  return (
    <section id="contact" className="w-full px-6 py-20 bg-background text-text max-w-7xl mx-auto scroll-mt-20">
      <h2 className="text-3xl font-bold mb-6 text-center">
        {isAr ? 'تواصل معي' : 'Get in Touch'}
      </h2>

      {/* روابط التواصل */}
      <div className="flex justify-center gap-6 mb-10 text-accent text-2xl">
        <a href="https://github.com/Yassinov7" target="_blank" rel="noopener noreferrer"  className="hover:text-yellow-400">
          <FaGithub size={28}/>
        </a>
        <a href="https://www.linkedin.com/in/mohammed-yassine-70499921a" target="_blank" rel="noopener noreferrer"  className="hover:text-blue-500">
          <FaLinkedin size={28}/>
        </a>
        <a
          href={`https://wa.me/963935787445?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer" className="hover:text-green-500"
        >
          <FaWhatsapp size={28} />
        </a>
        <a href="https://instagram.com/mhmmdyassine" target="_blank" rel="noopener noreferrer"  className="hover:text-[#E1306C]">
          <FaInstagram size={28}/>
        </a>
      </div>

      {/* النموذج الديناميكي */}
      <ContactForm lang={lang} />
    </section>
  );
}
