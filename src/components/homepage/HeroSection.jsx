'use client';

import Button from '@/components/ui/Button';
import FadeInSection from '@/components/motion/FadeInSection';
import Image from 'next/image';
export default function HeroSection({ lang }) {
  const isAr = lang === 'ar';

  return (
    <FadeInSection>
      <section 
      id="hero"
      className="w-full px-6 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
        {/* النصوص والأزرار */}
        <div className="flex-1 text-center md:text-start space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            {isAr ? 'مرحبًا، أنا محمد 👋' : "Hi, I'm Mohammed 👋"}
          </h1>
          <p className="text-xl text-muted max-w-xl mx-auto md:mx-0">
            {isAr
              ? 'مهندس برمجيات ومطور واجهات أمامية، أصمم تجارب ويب سريعة، أنيقة، ومتجاوبة.'
              : 'Software Engineer & Frontend Developer building fast, elegant, and responsive web experiences.'}
          </p>

          <div className="flex justify-center md:justify-start gap-4 flex-wrap">
            <Button as="a" href="#projects">
              {isAr ? 'شاهد مشاريعي' : 'View Projects'}
            </Button>
            <Button as="a" href="#contact" variant="outline">
              {isAr ? 'تواصل معي' : 'Contact Me'}
            </Button>
            <Button
              as="a"
              href="/MY-CV.pdf"
              download
              variant="outline"
            >
              {isAr ? 'تحميل السيرة الذاتية' : 'Download CV'}
            </Button>
          </div>
        </div>

        {/* صورة أو Avatar */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden shadow-xl border-4 border-text relative">
            <Image
              src="/avatar.png" // make sure it's inside /public
              alt="Mohammad Yassine Avatar"
              fill
              sizes="(max-width: 640px) 160px, 208px"
              className="object-cover"
              priority // optional: loads this image earlier for better perceived speed
            />
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
