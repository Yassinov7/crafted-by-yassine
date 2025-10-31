'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Facebook, Whatsapp, Instagram } from 'iconoir-react';
import Button from '@/components/ui/Button';
import FadeInSection from '@/components/motion/FadeInSection';

export default function CTASection({ lang }) {
    const isAr = lang === 'ar';

    const message = isAr
        ? 'مرحبًا م. محمد ياسين، رأيت موقعك الشخصي وأرغب بالتواصل معك بشأن مشروع 🌟'
        : 'Hi Eng. Mohammad Yassine, I visited your website and would like to discuss a project 🌟';

    const social = [
        { href: 'https://github.com/Yassinov7', icon: <Github size={20} />, label: 'GitHub' },
        { href: 'https://www.linkedin.com/in/yassinov', icon: <Linkedin size={20} />, label: 'LinkedIn' },
        { href: 'mailto:02m.yassine@gmail.com', icon: <Mail size={20} />, label: 'Email' },
        { href: 'https://www.facebook.com/YASSINOVdev', icon: <Facebook size={20} />, label: 'Facebook' },
        { href: `https://wa.me/963998246359?text=${encodeURIComponent(message)}`, icon: <Whatsapp size={20} />, label: 'WhatsApp' },
        { href: 'https://instagram.com/yassinov.dev', icon: <Instagram size={20} />, label: 'Instagram' },
    ];

    return (
        <FadeInSection>
            <section className="w-full py-16 max-w-7xl mx-auto" id='cta'>
                <div className="bg-gradient-to-br from-background to-muted/30 rounded-3xl p-8 md:p-12 border border-accent/20 shadow-lg">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                                {isAr ? 'هل أنت مستعد لبدء مشروعك القادم؟' : 'Ready to Start Your Next Project?'}
                            </h2>
                            <p className="text-lg opacity-90 max-w-2xl mx-auto text-muted-foreground">
                                {isAr
                                    ? 'سأكون سعيدًا بمناقشة أفكارك وتحويلها إلى واقع ملموس'
                                    : 'I\'d be happy to discuss your ideas and turn them into tangible reality'}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                            <Link href={`/${lang}/contact`} passHref>
                                <Button as="a" size="lg" className="w-full sm:w-auto">
                                    {isAr ? 'تواصل معي' : 'Contact Me'}
                                </Button>
                            </Link>

                            <Link href={`/${lang}/projects`} passHref>
                                <Button as="a" variant="outline" size="lg" className="w-full sm:w-auto">
                                    {isAr ? 'عرض المشاريع' : 'View Projects'}
                                </Button>
                            </Link>
                        </div>

                        <div className="text-center">
                            <p className="text-muted-foreground mb-6">
                                {isAr ? 'أو تواصل معي عبر' : 'Or connect with me on'}
                            </p>
                            <div className="flex justify-center gap-4">
                                {social.map(({ href, icon, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center text-text hover:bg-accent/10 hover:text-accent transition-all duration-300"
                                        aria-label={label}
                                    >
                                        {icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </FadeInSection>
    );
}