'use client';

import FadeInSection from '@/components/motion/FadeInSection';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';

export default function GoalSection({ lang }) {
    const isAr = lang === 'ar';

    const message = isAr
        ? 'مرحبًا م. محمد ياسين، رأيت موقعك الشخصي وأرغب بالتواصل معك بشأن مشروع 🌟'
        : 'Hi Eng. Mohammad Yassine, I visited your website and would like to discuss a project 🌟';

    return (
        <section id="goal" className="w-full px-6 py-24 max-w-5xl mx-auto scroll-mt-20 text-center">
            <FadeInSection>
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                    {isAr ? 'رؤيتي وطموحي' : 'My Vision & Goals'}
                </h2>
                <div className="w-20 h-1 mx-auto bg-accent rounded-full mb-10" />
            </FadeInSection>

            <FadeInSection delay={100}>
                <p className="text-muted text-base sm:text-lg max-w-3xl mx-auto mb-4 leading-relaxed">
                    {isAr
                        ? 'أسعى لتقديم حلول برمجية فعّالة تركز على المستخدم، وأطمح للتوسع في تطوير الواجهات وتجربة المستخدم، وبناء منتجات تترك أثرًا حقيقيًا في العالم الرقمي.'
                        : 'I aim to build efficient, user-centered solutions and grow in UX engineering to craft impactful digital products.'}
                </p>
                <p className="text-text text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                    {isAr
                        ? 'هل لديك فكرة مميزة أو مشروع ترغب بتنفيذه؟ يسعدني التعاون معك.'
                        : 'Have a great idea or project in mind? I’d be happy to collaborate with you.'}
                </p>
            </FadeInSection>

            {/* Social Icons */}
            <FadeInSection delay={200}>
                <div className="flex justify-center gap-5 text-accent text-xl mt-8 mb-6">
                    <a
                        href="https://github.com/Yassinov7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 hover:text-gray-400 transition transform  shadow-md"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/yassinov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 hover:text-blue-600 transition transform  shadow-md"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href={`https://wa.me/963998246359?text=${encodeURIComponent(message)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 hover:text-green-500 transition transform  shadow-md"
                    >
                        <FaWhatsapp />
                    </a>
                    <a
                        href="https://www.facebook.com/YASSINOVdev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 hover:text-blue-500 transition transform  shadow-md"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://instagram.com/yassinov.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 hover:text-[#E1306C] transition transform  shadow-md"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </FadeInSection>

            {/* Call-to-action buttons */}
            <FadeInSection delay={300}>
                <div className="flex justify-center flex-wrap gap-4 pt-2">
                    <Link
                        href={`/${lang}/projects`}
                        className="bg-accent text-background px-6 py-2 rounded-full font-medium hover:opacity-90 transition"
                    >
                        {isAr ? 'مشاريعي' : 'View Projects'}
                    </Link>
                    <Link
                        href={`/${lang}/contact`}
                        className="border border-accent text-accent px-6 py-2 rounded-full font-medium hover:bg-accent hover:text-background transition"
                    >
                        {isAr ? 'تواصل معي' : 'Contact Me'}
                    </Link>
                </div>
            </FadeInSection>
        </section>
    );
}
