'use client';

import Button from '@/components/ui/Button';
import FadeInSection from '@/components/motion/FadeInSection';
import Image from 'next/image';
import { ArrowRight, Mail, Download } from 'lucide-react';
import { Star } from 'iconoir-react';

export default function HeroSection({ lang }) {
  const isAr = lang === 'ar';

  return (
    <FadeInSection>
      <section
        id="hero"
        className="w-full px-6 py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto relative"
      >
        {/* Background accent circles - repositioned for better balance */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-r from-accent/20 to-accent/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-l from-accent/15 to-accent/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-8 z-10">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              {isAr ? 'مرحبًا، أنا محمد' : "Hi, I'm Mohammed"}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              {isAr
                ? 'مهندس برمجيات ومطور واجهات أمامية، أصمم تجارب ويب سريعة، أنيقة، ومتجاوبة.'
                : 'Software Engineer & Frontend Developer building fast, elegant, and responsive web experiences.'}
            </p>
          </div>

          <div className="flex justify-center md:justify-start gap-4 flex-wrap mt-4">
            <Button as="a" href="#projects" className="flex items-center gap-2">
              {isAr ? 'شاهد مشاريعي' : 'View Projects'}
              <ArrowRight size={18} />
            </Button>

            <Button as="a" href="#contact" variant="outline" className="flex items-center gap-2">
              {isAr ? 'تواصل معي' : 'Contact Me'}
              <Mail size={18} />
            </Button>

            <Button
              as="a"
              href="/MY-CV.pdf"
              download
              variant="outline"
              className="flex items-center gap-2"
            >
              {isAr ? 'تحميل السيرة الذاتية' : 'Download CV'}
              <Download size={18} />
            </Button>
          </div>
        </div>

        {/* Avatar Section with enhanced design */}
        <div className="flex-1 flex justify-center lg:justify-end relative z-10">
          <div className="relative">
            {/* Outer ring with subtle animation */}
            <div className="absolute inset-0 w-full h-full rounded-full border-2 border-accent/20 animate-pulse"></div>

            {/* Main avatar container with enhanced shadow */}
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-background">
              <Image
                src="/Mohammad-Yassine.jpg"
                alt="Mohammad Yassine Avatar"
                fill
                sizes="(max-width: 768px) 224px, 256px"
                className="object-cover"
                priority
              />
            </div>

            {/* Floating tech elements for modern touch */}
            <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg">
              <div className="w-3 h-3 rounded-full bg-white animate-ping"></div>
            </div>

            <div className="absolute -bottom-3 -left-3 w-18 h-18 rounded-full bg-accent flex items-center justify-center shadow-lg">
              <div className="text-background font-bold text-xs text-center">{isAr ? 'مهندس برمجيات' : 'Software Engineer'}</div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}