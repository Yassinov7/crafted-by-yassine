'use client';

import FadeInSection from '@/components/motion/FadeInSection';

export default function AboutSection({ lang }) {
  const isAr = lang === 'ar';

  return (
    <section
      id="about"
      className="w-full px-6 py-24 max-w-5xl mx-auto scroll-mt-20"
    >
      <FadeInSection>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          {isAr ? 'عنّي' : 'About Me'}
        </h2>

        {/* خط فاصل جميل */}
        <div className="w-20 h-1 mx-auto bg-accent rounded-full mb-10" />

        <div className="space-y-6 text-muted text-lg leading-relaxed text-balance max-w-3xl mx-auto text-justify">
          {isAr ? (
            <>
              <FadeInSection delay={0.1}>
                <p>
                  أنا محمد ياسين، مهندس معلوماتية من درعا سوريا. أبلغ من العمر 23 عامًا وأتحدث العربية كلغة أم، بالإضافة إلى إتقاني للغة الإنجليزية بطلاقة.
                </p>
              </FadeInSection>
              <FadeInSection delay={0.2}>
                <p>
                  أركز على هندسة البرمجيات وتطوير واجهات الاستخدام باستخدام تقنيات مثل React، Next.js، وSupabase. لدي شغف ببناء منتجات رقمية حقيقية، وقد أنجزت عدة مشاريع منها "ستلايت الرجاء"، "UniRide"، ومنصة التعليم التفاعلي "EduConnect" كمشروع تخرجي.
                </p>
              </FadeInSection>
              <FadeInSection delay={0.3}>
                <p>
                  أطمح للعمل كمطور برمجيات محترف، مع اهتمام خاص بتحليل وتصميم الأنظمة، وأسعى للانخراط في العمل الحر لبناء حلول تقنية تخدم المستخدمين بفعالية.
                </p>
              </FadeInSection>
            </>
          ) : (
            <>
              <FadeInSection delay={0.1}>
                <p>
                  I’m Mohammed Yassine, an Information Engineer based in Daraa, Syria. I’m 23 years old, a native Arabic speaker, and fluent in English.
                </p>
              </FadeInSection>
              <FadeInSection delay={0.2}>
                <p>
                  I focus on software engineering and frontend development using technologies like React, Next.js, and Supabase. I'm passionate about building real-world digital products, and I’ve launched several projects, including Satellite Al-Raja, UniRide, and EduConnect — my graduation project.
                </p>
              </FadeInSection>
              <FadeInSection delay={0.3}>
                <p>
                  My ambition is to work professionally as a software developer with a focus on system design and architecture. I'm also keen to pursue freelancing to deliver effective and impactful tech solutions.
                </p>
              </FadeInSection>
            </>
          )}
        </div>
      </FadeInSection>
    </section>
  );
}
