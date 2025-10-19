'use client';

import Button from '@/components/ui/Button';
import FadeInSection from '@/components/motion/FadeInSection';
import Image from 'next/image';
import { ArrowRight, Mail, Download } from 'lucide-react';

export default function HeroSection({ lang }) {
  const isAr = lang === 'ar';

  return (
    <FadeInSection>
      <section className="w-full px-6 py-20 sm:py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16 max-w-7xl mx-auto relative">

        {/* Background accent circles */}
        <div className="absolute -top-16 sm:-top-20 lg:-top-24 -left-16 sm:-left-20 lg:-left-24 w-64 sm:w-72 lg:w-80 h-64 sm:h-72 lg:h-80 bg-gradient-to-r from-accent/20 to-accent/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute -bottom-16 sm:-bottom-20 lg:-bottom-24 -right-16 sm:-right-20 lg:-right-24 w-64 sm:w-72 lg:w-80 h-64 sm:h-72 lg:h-80 bg-gradient-to-l from-accent/15 to-accent/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

        {/* Text content */}
        <div className="flex-1 text-center lg:text-left space-y-6 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            {isAr ? 'مرحبًا، أنا محمد' : "Hi, I'm Mohammed"}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-full lg:max-w-2xl mx-auto lg:mx-0">
            {isAr
              ? 'مهندس برمجيات ومطور واجهات أمامية، أصمم تجارب ويب سريعة، أنيقة، ومتجاوبة.'
              : 'Software Engineer & Frontend Developer building fast, elegant, and responsive web experiences.'}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <Button as="a" href="#projects" className="flex items-center gap-2 w-full sm:w-auto justify-center">
              {isAr ? 'شاهد مشاريعي' : 'View Projects'}
              <ArrowRight size={18} />
            </Button>

            <Button as="a" href="#contact" variant="outline" className="flex items-center gap-2 w-full sm:w-auto justify-center">
              {isAr ? 'تواصل معي' : 'Contact Me'}
              <Mail size={18} />
            </Button>

            <Button
              as="a"
              href="/MY-CV.pdf"
              download
              variant="outline"
              className="flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              {isAr ? 'تحميل السيرة الذاتية' : 'Download CV'}
              <Download size={18} />
            </Button>
          </div>
        </div>

        {/* Avatar Section */}
        <div className="flex-1 flex justify-center lg:justify-end relative z-10 mb-8 lg:mb-0">
          <div className="relative">
            {/* Outer ring */}
            <div className="absolute inset-0 w-full h-full rounded-full border-2 border-accent/20 animate-pulse"></div>

            {/* Main avatar */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-background">
              <Image
                src="/Mohammad-Yassine.jpg"
                alt="Mohammad Yassine Avatar"
                fill
                sizes="(max-width: 768px) 144px, (max-width: 1024px) 176px, 224px"
                className="object-cover"
                priority
              />
            </div>

            {/* Floating tech badges */}
            <div className="absolute -top-2 -right-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent flex items-center justify-center shadow-lg">
              <div className="w-2.5 h-2.5 rounded-full bg-white animate-ping"></div>
            </div>

            <div className="absolute -bottom-2 -left-2 w-16 sm:w-18 rounded-full bg-accent flex items-center justify-center shadow-lg px-1">
              <div className="text-background font-bold text-[9px] sm:text-xs text-center">
                {isAr ? 'مهندس برمجيات' : 'Software Engineer'}
              </div>
            </div>
          </div>
        </div>

      </section>
    </FadeInSection>
  );
}