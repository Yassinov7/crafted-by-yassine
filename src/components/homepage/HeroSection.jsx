'use client';

import Button from '@/components/ui/Button';
import FadeInSection from '@/components/motion/FadeInSection';
import Image from 'next/image';
import { ArrowBigRightDashIcon, Mail, Download } from 'lucide-react';

export default function HeroSection({ lang }) {
  const isAr = lang === 'ar';

  return (
    <FadeInSection>
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative overflow-hidden">
        {/* Background accent circles - repositioned for better balance */}
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left space-y-6 md:space-y-8 z-10 order-2 lg:order-1">
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                  {isAr ? 'مرحبًا، أنا محمد' : "Hi, I'm Mohammad"}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  {isAr
                    ? 'مهندس برمجيات ومطور واجهات أمامية، أصمم تجارب ويب سريعة، أنيقة، ومتجاوبة.'
                    : 'Software Engineer & Frontend Developer building fast, elegant, and responsive web experiences.'}
                </p>
              </div>

              {/* Buttons - Improved responsive behavior */}
              <div className="flex flex-col xs:flex-row justify-center lg:justify-start gap-3 md:gap-4 flex-wrap mt-6">
                <Button
                  as="a"
                  href="#projects"
                  className="flex items-center gap-2 justify-center px-6 w-full xs:w-auto"
                  size="lg"
                >
                  {isAr ? 'شاهد مشاريعي' : 'View Projects'}
                  <ArrowBigRightDashIcon size={20} className={isAr ? "rotate-180" : ""} />
                </Button>
                <Button
                  as="a"
                  href="#contact"
                  variant="outline"
                  className="flex items-center gap-2 justify-center px-6 w-full xs:w-auto"
                  size="lg"
                >
                  {isAr ? 'تواصل معي' : 'Contact Me'}
                  <Mail size={20} />
                </Button>
                <Button
                  as="a"
                  href="/MY-CV.pdf"
                  download
                  variant="outline"
                  className="flex items-center gap-2 justify-center px-6 w-full xs:w-auto"
                  size="lg"
                >
                  {isAr ? 'تحميل السيرة الذاتية' : 'Download CV'}
                  <Download size={20} />
                </Button>
              </div>
            </div>

            {/* Avatar Section with enhanced design */}
            <div className="flex-1 flex justify-center lg:justify-end relative z-10 order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative">
                {/* Outer ring with subtle animation */}
                <div className="absolute inset-0 w-full h-full rounded-full border-2 border-accent/20 animate-pulse"></div>

                {/* Main avatar container with enhanced shadow */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-background">
                  <Image
                    src="/Mohammad-Yassine.jpg"
                    alt="Mohammad Yassine Avatar"
                    fill
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating tech elements - hidden on mobile, visible on tablet and up */}
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent flex items-center justify-center shadow-lg">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white animate-ping"></div>
                </div>

                <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-accent flex items-center justify-center shadow-lg">
                  <div className="text-background font-bold text-xs sm:text-sm text-center px-1">
                    {isAr ? 'مهندس برمجيات' : 'Software Engineer'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}