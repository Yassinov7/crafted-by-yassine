// src/components/sections/HeroSection.tsx

import Button from '@/components/ui/Button';
import FadeInSection from '@/components/motion/FadeInSection';

export default function HeroSection({ lang }) {
  const isAr = lang === 'ar';

  return (
    <FadeInSection>
    <section className="w-full px-6 py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
      {/* النصوص والأزرار */}
      <div className="flex-1 text-center md:text-start space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          {isAr ? 'مرحبًا، أنا محمد 👋' : "Hi, I'm Mohammed 👋"}
        </h1>
        <p className="text-lg text-muted max-w-xl mx-auto md:mx-0">
          {isAr
            ? 'مطور واجهات أمامية أصنع تجارب رقمية عصرية، سريعة، ومتجاوبة.'
            : 'Frontend developer crafting elegant, fast, and responsive experiences.'}
        </p>
        <div className="flex justify-center md:justify-start gap-4 flex-wrap">
          <Button as="a" href="#projects">
            {isAr ? 'شاهد مشاريعي' : 'View Projects'}
          </Button>
          <Button as="a" href="#contact" variant="outline">
            {isAr ? 'تواصل معي' : 'Contact Me'}
          </Button>
        </div>
      </div>

      {/* صورة أو عنصر مرئي دائماً ظاهر */}
      <div className="flex-1 flex justify-center md:justify-end">
        {/* يمكنك استبدال هذا العنصر بصورة حقيقية لاحقًا */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 bg-accent rounded-full shadow-xl border-4 border-text" />
      </div>
    </section>
    </FadeInSection>
  );
}
